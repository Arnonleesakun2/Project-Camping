import React from "react";
import { motion } from "motion/react";
import DeleteCardButton from "./DeleteCardButton";

const CampingCardUser = ({ camping }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
        rotate: 2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <article className="relative transition-all duration-700 hover:scale-105">
        <div className="card  bg-base-100 w-full shadow-2xl ">
          <figure>
            <img
              className="w-full h-[200px] object-cover"
              src={camping.secure_url}
              alt={camping.public_id}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {camping.title.substring(0, 15)}
              <span className=" font-bold text-sm">...</span>
            </h2>
            <p>
              {camping.description.substring(0, 40)}
              <span className=" font-bold text-sm">ดูเพิ่มเติม</span>
            </p>
            <div className="card-actions justify-between">
              <div className="">
                <p>฿ {camping.price}</p>
              </div>
              <div className="">
                <p>{camping.totalLikes} Link</p>
              </div>
              {/* deleteButton */}
            <DeleteCardButton id={camping.id} />
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default CampingCardUser;
