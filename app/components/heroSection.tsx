import { GoDotFill } from "react-icons/go";
import Image from "next/image";

export default function HeroSection() {
  
  return (
      <div className="h-[40rem] w-full text-neutral-300">
        <div className="flex justify-center pt-10">
          <button className="bg-text border-cyan-100  border-y-2 divide-x-0 space-x-2 rounded-l-full py-1.5 text-sm flex items-center justify-center text-neutral-300 rounded-r-full px-4">
            <p className="text-yellow-300">
              <GoDotFill />{" "}
       
            </p>
            <p>`It's` me <b>Naimal Salahuddin</b></p>
          </button>
        </div>
        <div className="flex justify-center bg-bg pt-7">
          <Image
            src={"/./profile.jpg"}
            width={70}
            height={0}
            alt=""
            className="rounded-full"
          />
        </div>
        <div className="bg-gradient-to-r from-black to-cyan-200 tracking-widest bg-clip-text text-transparent flex flex-col items-center justify-center pt-6">
          <p className="text-5xl font-bold text-center leading-snug">
            Designing Websites
            <br />
            that drive Conversions
          </p>
        </div>
        <div className="text-text flex flex-col items-center justify-center pt-6">
          <p className="text-xl font-semibold text-center leading-snug">
           <b>AIM</b> to Design and develop visually stunning
            <br />
            and technically proficient websites for
            <br />
            clients worldwide.
          </p>
        </div>{" "}
        <div className="flex items-center justify-center pt-7"><button className="bg-text text-white py-3 px-7 rounded-md relative"> naimalarain13@gmail.com</button></div>
      </div>
  );
}
   

