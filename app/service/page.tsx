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
        <main className="h-[100vh]">
        <ServiceHero />
        <section className="px-[5%] py-auto flex flex-col lg:justify-center service-container">
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
            <div className="absolute rounded-full bg-yellow-600 text-white top-[6rem] left-[50%] h-40 w-40 text-center">
                <div className="flex items-center h-full w-full justify-center">
                    <p className="text-center text-sm">Receive <br /><span className="text-4xl tracking-widest">10%</span><br/> off your first <br />treatment<br/></p>
                </div>
               
            </div>
        </main>
  )
}

export default ServicePage;

