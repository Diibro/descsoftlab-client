import Image from "next/image"
import Link from "next/link"

export const HeroSection = () => {
     return (
          <section className="w-full bg-gray-100 relative grid grid-cols-1 md:grid-cols-2 gap-[20px] py-[40px] ">
               <div className="w-full h-full relative">
                    <div className="w-full h-full absolute top-0 left-0 z-0 " >
                         <div className="w-[100px] aspect-square rounded-full bg-main-blue-400 absolute bottom-[20px] left-[20px] "></div>
                    </div>
                    <div className="w-full h-full relative flex-col text-center justify-center gap-[20px] z-10 p-[30px]  ">
                         <h1 className="text-[2rem] font-extrabold text-main-blue-950 w-[70%]">Empowering Digital Transformation</h1>
                         <p className="text-[1.2rem] text-gray-600 text-start  w-[70%] ">Desc Softlab is dedicated to making digital services accessible and affordable accross Rwanda and Africa</p>
                         <Link href={'/'} className="w-auto px-[15px] py-[7.5px] bg-main-blue-900  text-white text-[0.9rem] rounded-[30px] hover:bg-main-blue-600  " >Explore Our services</Link>
                    </div>
               </div>
               <div className="w-full h-full relative">
                    <div className="w-full h-full absolute top-0 left-0 ">
                    </div>
                    <div className="w-full h-full">

                         <Image src={'/images/comp-desk.jpg'} width={400} height={400} alt="computer desk image" className="w-[60%] mx-auto aspect-square rounded-full relative object-cover " />
                    </div>
               </div>
          </section>
     )
}