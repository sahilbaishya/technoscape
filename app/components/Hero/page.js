import Image from "next/image"
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })
export default function Hero(){
    return(
        <>
            <main className="flex flex-col-reverse lg:flex-row gap-8 items-center justify-center">
                <div className="flex items-start justify-center lg:justify-start flex-col basis-1/2 ml-8 lg:ml-16">
                    <h2 className={`${roboto.className} text-xl lg:text-4xl font-normal text-[#006892]`}>International Conference on</h2>
                    <h2 className={`${roboto.className} text-2xl lg:text-6xl font-bold text-[#006892]`}>Sustainable Technology for Water and Wastewater Treatment</h2>
                    <button className={`${roboto.className} mt-12 bg-[#007663] text-white p-4 rounded-md shadow-xl`}>More about Technoscape  </button>
                </div>
                <div className="flex items-center justify-center basis-1/2 w-full lg:w-1/2 h-[579px] mb-0">
                    <Image
                    src="/heroillu.svg"
                    alt="earth picture"
                    width={644}
                    height={579}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </main>
        </>
    )
}