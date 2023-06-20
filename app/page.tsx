import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <div className="mt-[4rem] lg:mt-24">
        <h1 className="text-center text-4xl lg:text-5xl">Massi Massage</h1>
        <h3 className="text-center text-2xl lg:text-3xl mt-[1rem] bg-stone-200 p-2">Massage Therapist 4 males @ London</h3>
      </div>
      <Menu />
    
    </main>
  )
}
