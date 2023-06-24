"use client";

import { deepTissue, relaxing, remedial } from "@/utils/constants";
import React, { useState } from "react";
import Service from "@/components/Service";
import ServiceHero from "@/components/ServiceHero";
import ModalContent from "../../components/ModalContent";
import Modal from "react-modal";
import CloseButton from "@/components/CloseButton";

const serviceWidth = "lg:w-[500px]";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    zIndex: "20",
    width: "95%",
    maxWidth: '700px',
    borderRadius: '1rem',
    padding: '0',
  },
};

Modal.setAppElement("#modal");

const ServicePage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    console.log("open modal");
    setIsOpen(true);
  }

  function closeModal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsOpen(false);
  }

  return (
    <>
      <main className='h-[100vh] w-full relative' id='modal'>
        <ServiceHero />
        <div
          className='-mt-[8rem] lg:-mt-[5rem] mx-auto rounded-full bg-yellow-600 text-white h-40 w-40 cursor-pointer z-20 bounce-in-top'
          onClick={openModal}
        >
          <div
            className='flex items-center h-full w-full justify-center z-10'
            onClick={() => console.log("open2")}
          >
            <p className='text-center text-sm'>
              <span className='text-xl tracking-wider'>Exclusive</span>
              <br />
              <span className='text-lg text-bold'>{`90' `}</span>
              massage offer
              <br />
              for just
              <span className='text-bold text-lg'> £60</span>
            </p>
          </div>
        </div>
        <section className='px-[5%] mt-[1rem] flex flex-col lg:justify-center service-container lg:mt-[2rem]'>
          <div className='lg:h-full lg:items-center lg:justify-center flex flex-col lg:flex-row gap-4'>
            <Service
              src={relaxing}
              size={"image-xl"}
              title={"Relaxing Massage"}
              description={
                "Calming your nervous system, alleviate muscle tension, and melt away the burdens of stress and anxiety."
              }
              bookingText={"Book a Relaxing Now"}
              minHeight={true}
              maxWidth={serviceWidth}
            />
            <Service
              src={deepTissue}
              size={"image-xl"}
              title={"Deep Tissue Massage"}
              description={
                "Targeting deep muscle layers, it release tension, soothe stubborn knots and enhance your body's natural healing abilities."
              }
              bookingText={"Book a Deep Tissue Now"}
              minHeight={true}
              maxWidth={serviceWidth}
            />
            <Service
              src={remedial}
              size={"image-xl"}
              title={"Remedial Massage"}
              description={
                "Merging the power of hot stones and custom-blended oils targeting muscle pain, restoring energy balance and promoting deep relaxation."
              }
              bookingText={"Book a Remedial Now"}
              minHeight={true}
              maxWidth={serviceWidth}
            />
          </div>
        </section>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel=''
        >
            <CloseButton closeModal={ closeModal} />
            <ModalContent />
        </Modal>
      </main>
      
    </>
  );
};

export default ServicePage;
