import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929]
        dark:bg-slate-800 text-white space-y-5"> 
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox. <br>
            </br>
            Storing everything for your business needs. All in one place
          </h1>
          <p className="pb-20">
            Experience seamless cloud-based file storage with 
            user-friendly synchronization across devices. Our 
            intuitive interface ensures easy organization, while 
            robust security measures protect your valuable data. 
            Collaborate in real-time, share files effortlessly, 
            and enhance productivity with CloudSyncs versatile 
            features. Enjoy the freedom to access and manage your files from 
            anywhere, backed by cutting-edge technology.
          </p>
          <Link 
            href='/dashboard'
            className="flex cursor-pointer bg-blue-500 p-6 w-fit text-black border-black font-semibold"  
          >
            Try it for free!
            <ArrowRight className="ml-8" />
          </Link>
        </div>  

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source 
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" 
            type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
      Under section 107 of the copyright Act 1976, allowance is mad for 
      FAIR USE for purpose such a as criticism, comment, news reporting, 
      teaching, scholarship and research. Fair use is a use permitted by copyright 
      statues that might otherwise be infringing. Non- Profit, educational or personal
       use tips the balance in favor of FAIR USE.
      </p>
    </main>
  )
}
