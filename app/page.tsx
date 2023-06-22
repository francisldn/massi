import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import { edu } from "@/utils/font";
import Socials from '../components/Socials';

export default function Home() {
  return (
    <main className='flex flex-col items-center gap-4'>
      <Hero />
      <div className='sm:mt-[1rem] lg:mt-[1rem]'>
        <h1
          className={`text-center text-xl sm:text-4xl lg:text-5xl text-amber-950 ${edu.className}`}
        >
          Massi Massage
        </h1>
        <h3
          className={`text-center text-lg sm:text-2xl lg:text-3xl sm:mt-[1rem] p-2 rounded-md text-amber-950 ${edu.className}`}
        >
          Massage Therapist 4 males @ London
        </h3>
      </div>
       <Socials />
       <Menu />
    </main>
  );
}
