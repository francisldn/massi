import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import { edu } from "@/utils/font";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Hero />
      <div className='mt-[4rem] lg:mt-24'>
        <h1
          className={`text-center text-4xl lg:text-5xl text-amber-950 ${edu.className}`}
        >
          Massi Massage
        </h1>
        <h3
          className={`text-center text-2xl lg:text-3xl mt-[1rem] p-2 rounded-md text-amber-950 ${edu.className}`}
        >
          Massage Therapist 4 males @ London
        </h3>
      </div>
      <Menu />
    </main>
  );
}
