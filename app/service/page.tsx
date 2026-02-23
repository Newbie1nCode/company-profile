"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

// Import gambar contoh (sesuaikan dengan gambar Anda)
import ServiceMain from '../assets/service.jpg';

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
      const scrollPosition = window.scrollY + window.innerHeight * 0.7;

      elements.forEach((element) => {
        const elementTop = (element as HTMLElement).offsetTop;
        
        if (scrollPosition > elementTop) {
          element.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      ref={containerRef}
    >
      {/* Hero Section - SATU GAMBAR BESAR */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ServiceMain}
            alt="Siap melayani startup anda"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-cyan-800/60" />
        </div>

        {/* Content di atas gambar */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <div className="animate-slide-in-left-meet opacity-0 mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Siap melayani dan membantu startup anda dengan sepenuh hati
            </h1>
          </div>
          
          <div className="animate-slide-in-right-meet opacity-0">
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dedikasi kami adalah kesuksesan Anda. Solusi teknologi terbaik untuk percepatan bisnis startup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Mulai Konsultasi Gratis
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Pelajari Layanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section di bawah gambar */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-on-scroll opacity-0">
            {[
              { value: "500+", label: "Startup Terbantu", color: "from-blue-600 to-blue-500" },
              { value: "99%", label: "Kepuasan Klien", color: "from-cyan-500 to-blue-400" },
              { value: "24/7", label: "Support Teknis", color: "from-blue-500 to-cyan-400" },
              { value: "50+", label: "Ahli Teknologi", color: "from-cyan-600 to-blue-400" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Description */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Mengapa Memilih <span className="text-blue-600">Kami</span>?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fokus pada Startup",
                  description: "Kami memahami tantangan khusus yang dihadapi startup dan memberikan solusi yang tepat.",

                },
                {
                  title: "Teknologi Terkini",
                  description: "Menggunakan tools dan platform terbaru untuk memastikan bisnis Anda kompetitif.",
             
                },
                {
                  title: "Support 24/7",
                  description: "Tim support kami siap membantu kapan saja Anda membutuhkan.",
               
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 animate-on-scroll opacity-0">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siap Mengembangkan Startup Anda?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Konsultasikan kebutuhan teknologi startup Anda dengan tim ahli kami. 
                Dapatkan solusi yang tepat untuk pertumbuhan bisnis.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Hubungi Kami Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tambahkan style animasi */}
      <style jsx global>{`
        @keyframes slideInLeftMeet {
          from {
            opacity: 0;
            transform: translateX(-50px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes slideInRightMeet {
          from {
            opacity: 0;
            transform: translateX(50px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-left-meet {
          animation: slideInLeftMeet 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-slide-in-right-meet {
          animation: slideInRightMeet 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.3s;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}