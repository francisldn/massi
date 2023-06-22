import Infobox from '@/components/Infobox';
import { calendarURL, deepTissue, relaxing, remedial } from '@/utils/constants';
import React from 'react';
import Image from 'next/image';
import { edu_sa } from '@/utils/font';
import Service from '@/components/Service';
import ServiceHero from '@/components/ServiceHero';

const serviceWidth= 'lg:w-[500px]'

const ServicePage = () => {
    return (
        <main className="h-[100vh] w-full relative">
        <ServiceHero />
        <div className="-mt-[11rem] lg:-mt-[5rem] mx-auto rounded-full bg-yellow-600 text-white h-40 w-40">
            <div className="flex items-center h-full w-full justify-center z-10">
                <p className="text-center text-sm">Receive <br /><span className="text-4xl tracking-widest">10%</span><br/> off your first <br />treatment<br/></p>
            </div>
        </div>
        <section className="px-[5%] mt-[1rem] flex flex-col lg:justify-center service-container lg:mt-[2rem]">
            <div className="lg:h-full lg:items-center lg:justify-center flex flex-col lg:flex-row gap-4">
                <Service
                    src={relaxing}
                    size={"image-xl"}
                    title={"Relaxing Massage"}
                    description={"Calming your nervous system, alleviate muscle tension, and melt away the burdens of stress and anxiety."}
                    bookingText={"Book a Relaxing Now"}
                    minHeight={true}
                    maxWidth={serviceWidth}
                /> 
                <Service
                    src={deepTissue}
                    size={"image-xl"}
                    title={"Deep Tissue Massage"}
                    description={"Targeting deep muscle layers, it release tension, soothe stubborn knots and enhance your body's natural healing abilities."}
                    bookingText={"Book a Deep Tissue Now"}
                    minHeight={true}
                    maxWidth={serviceWidth}
                /> 
                <Service
                    src={remedial}
                    size={"image-xl"}
                    title={"RemedialMassage"}
                    description={"Merging the power of hot stones and custom-blended oils targeting muscle pain, restoring energy balance and promoting deep relaxation."}
                    bookingText={"Book a Remedial Now"}
                    minHeight={true}
                    maxWidth={serviceWidth}
                /> 

            </div> 
            </section>
            
        </main>
  )
}

export default ServicePage;

