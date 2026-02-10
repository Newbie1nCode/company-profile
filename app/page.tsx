// app/page.js
import Image from 'next/image';
import CloudPic from './assets/gedung.jpg';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white pt-12 pb-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left side - Text content */}
        <div className="w-full lg:w-1/2 animate-slide-in-left-meet">
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#0A2540] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
                NusaData Cloud
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Solusi penyimpanan awan andalan untuk bisnis dan pribadi — aman, cepat, dan selalu siap.
            </p>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate-slide-in-right-meet">
          <div className="relative w-full max-w-md aspect-[4/3] md:aspect-[3/2]">
            <Image
              src={CloudPic}
              alt="Cloud Storage Illustration"
              fill
              className="object-cover rounded-2xl shadow-2xl ring-1 ring-gray-200/30"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}