import React, { useState } from "react";
import { useParams } from "react-router";
import { readCamping } from "../../api/camping";
import { useEffect } from "react";
import Breadcrumb from "../../components/campings/Breadcrumb";
import ImageContainer from "../../components/campings/ImageContainer";
import Description from "../../components/campings/Description";
import MainMap from "../../components/maps/MainMap";
import BookingContainer from "../../components/bookingss/BookingContainer";
import ShereButton from "../../components/campings/ShereButton";
import useCampingStore from "../../store/camping-store";

const CampingDetail = () => {
  const actionReadCamping = useCampingStore((state) => state.actionReadCamping);
  const camping = useCampingStore((state) => state.readcamping);
  const { id } = useParams();
  useEffect(() => {
    fetchCampingDetail(id);
  }, []);
  const fetchCampingDetail = async (id) => {
    actionReadCamping(id);
  };
  return (
    <section className="my-6">
      <Breadcrumb name={camping.title} />
      <header className="flex items-center justify-between mt-4">
        <h1 className="text-3xl font-bold">{camping.title}</h1>
        <div className="flex items-center">
          <ShereButton id={camping.id} />
          <div className="btn">{camping.totalLikes} Link</div>
        </div>
      </header>
      <ImageContainer img={camping.secure_url} name={camping.title} />
      <Description text={camping.description} />
      <div className="lg:grid lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8">
          {camping.lat && <MainMap location={[camping.lat, camping.lng]} />}
        </div>
        <div className="lg:col-span-4">
          <BookingContainer
            campingId={camping.id}
            price={camping.price}
            bookings={[]}
          />
        </div>
      </div>
    </section>
  );
};

export default CampingDetail;
