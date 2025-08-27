import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { Navbar } from "../components/nav";

export function Home(){
  return <div className="min-h-screen w-full bg-amber-50">

      <Navbar/>

      <section className="min-h-screen flex justify-between ">
        <div className="flex flex-col p-10 md:p-24 ">
            <p className="text-8xl md:text-9xl text-gray-900 font-semibold">Human</p>
        <p className="text-7xl md:text-8xl text-gray-900 font-semibold">Stories & ideas</p>
        <p className="text-2xl text-gray-900 py-8 md:py-10">A place to read, write, and deepen your understanding</p>
        <div>
          <Button text="Start Reading"/>
        </div>
        
        </div>
        <div className="h-auto hidden md:block">
          <img src="image1.webp" className="h-[660px] object-contain " alt="" />
        </div>
      
      </section>

      <Footer/>
  </div>
}