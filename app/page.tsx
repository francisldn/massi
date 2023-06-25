import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import { edu } from "@/utils/font";
import Socials from '../components/Socials';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-1'>
      <Hero />
      <div className='mt-[0.5rem] lg:mt-[1rem]'>
        <h1
          className={`text-center text-xl sm:text-3xl lg:text-5xl text-amber-950 ${edu.className} font-bold`}
        >
          Massi Massage
        </h1>
        <h3
          className={`text-center text-lg sm:text-xl lg:text-2xl sm:mt-[0.4rem] p-2 rounded-md text-amber-950 ${edu.className}`}
        >
          Massage Therapist 4 males @ London
        </h3>
      </div>
       <Socials />
       <Menu />
    </main>
  );
}
