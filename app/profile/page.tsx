"use client";
import Image from "next/image";

// Import gambar dari asset
import Sejarah from '../assets/sejarah.jpg';
import Kerja from '../assets/kerja.jpg';
import Ruangan from '../assets/ruangan.jpg';
import Cloud from '../assets/cloud.jpg';
import Server from "../assets/server.jpg";

export default function ProfilePage() {
  const sections = [
    {
      title: "Sejarah Perusahaan",
      content: "Didirikan tahun 2015, NusaData Cloud telah melayani 500+ perusahaan di Indonesia dengan solusi cloud yang andal dan terjangkau.",
      image: Sejarah,
      align: "left"
    },
    {
      title: "Visi & Misi",
      content: "Menjadi penyedia cloud terdepan di Asia Tenggara yang memberdayakan bisnis lokal melalui teknologi terkini.",
      image: Ruangan,
      align: "right"
    },
    {
      title: "Tujuan & Target",
      content: "Mentransformasi 50.000 bisnis dalam 5 tahun ke depan dan melatih 10.000 profesional digital lokal.",
      image: Kerja,
      align: "left"
    },
    {
      title: "Infrastruktur",
      content: "Data center hijau dengan 100% energi terbarukan dan 95% komponen daur ulang untuk keberlanjutan.",
      image: Server,
      align: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-white">
      {/* Hero Section */}
      <div className="pt-16 pb-12 px-4 text-center">
        <div className="animate-slide-in-left-meet opacity-0 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#0A2540] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
              NusaData Cloud
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Solusi Cloud untuk Transformasi Digital Indonesia
          </p>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#2563EB] to-[#22D3EE] rounded-full"></div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {sections.map((section, index) => (
          <div 
            key={index} 
            className={`mb-16 md:mb-20 ${index % 2 === 0 ? 'animate-slide-in-left-meet' : 'animate-slide-in-right-meet'} opacity-0`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`flex flex-col ${section.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
              {/* Text Content */}
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <div className={`w-2 h-8 rounded-full ${index % 2 === 0 ? 'bg-gradient-to-b from-[#2563EB] to-[#22D3EE]' : 'bg-gradient-to-b from-[#22D3EE] to-[#2563EB]'}`} />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-3">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {section.content}
                </p>
                
                {/* Stats for specific sections */}
                {index === 2 && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {['500+ Klien', '98% Kepuasan', '5 Tahun', '50.000 Target'].map((stat, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-gradient-to-br from-white to-blue-50 border border-blue-100">
                        <p className="font-bold text-blue-600">{stat.split(' ')[0]}</p>
                        <p className="text-sm text-gray-500">{stat.split(' ').slice(1).join(' ')}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-blue-100 shadow-lg">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="animate-fade-in-up opacity-0 mt-20 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Siap Transformasi Bisnis Anda?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan 500+ perusahaan yang telah mempercayai NusaData Cloud untuk solusi digital mereka.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
}