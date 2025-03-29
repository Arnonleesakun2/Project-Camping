import React from "react";

const ImageContainer = ({ img, name }) => {
  return (
    <section className="mt-4">
      <img
        className="w-full h-[400px] md:h-full object-cover rounded-lg"
        src={img}
        alt={name}
      />
    </section>
  );
};

export default ImageContainer;
