"use client"
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFC] to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header dengan Animasi */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl animate-slide-in-left-meet">
            Hubungi{" "}
            <span className="bg-gradient-to-r from-[#0A2540] via-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
              NusaData Cloud
            </span>
          </h1>
          <p className="mt-4 text-xl text-[#0F172A]/80 max-w-2xl mx-auto animate-slide-in-right-meet">
            Transformasi digital Anda dimulai dengan percakapan. Tim ahli kami siap membantu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Informasi Kontak - Sederhana */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Hubungi Kami</h2>
            
            <div className="space-y-6">
              {/* Telepon */}
              <div className="flex items-start group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#2563EB]/10 to-[#22D3EE]/10 text-[#2563EB] group-hover:from-[#2563EB]/20 group-hover:to-[#22D3EE]/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold text-[#0A2540]">Telepon</h3>
                  <p className="mt-1 text-[#0F172A]">(021) 1234-dummy</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#2563EB]/10 to-[#22D3EE]/10 text-[#2563EB] group-hover:from-[#2563EB]/20 group-hover:to-[#22D3EE]/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold text-[#0A2540]">Email</h3>
                  <p className="mt-1 text-[#0F172A]">dummy@nusadatacloud.com</p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start group cursor-pointer hover:scale-[1.02] transition-transform">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-[#2563EB]/10 to-[#22D3EE]/10 text-[#2563EB] group-hover:from-[#2563EB]/20 group-hover:to-[#22D3EE]/20">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-semibold text-[#0A2540]">Lokasi</h3>
                  <p className="mt-1 text-[#0F172A] text-sm">
                    DummyTower<br />
                    Jakarta Pusat
                  </p>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div className="mt-8 p-4 bg-gradient-to-r from-[#0A2540]/5 to-[#2563EB]/5 rounded-lg">
              <h3 className="text-base font-semibold text-[#0A2540] mb-2">Jam Operasional</h3>
              <p className="text-sm text-[#0F172A]">Senin - Jumat: 08:00 - 17:00 WIB</p>
              <p className="text-sm text-[#0F172A]">Sabtu: 09:00 - 13:00 WIB</p>
            </div>
          </div>

          {/* Form Kontak - Sederhana */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Kirim Pesan</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition bg-white/50"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition bg-white/50"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Nomor Telepon"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition bg-white/50"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Pesan Anda..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2563EB] focus:border-transparent transition bg-white/50"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#2563EB] to-[#22D3EE] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Quick Info Box */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-[#0A2540]/5 to-[#2563EB]/5 p-6 rounded-2xl border border-gray-100">
            <div className="text-[#2563EB] mb-3">
            </div>
            <h3 className="font-bold text-[#0A2540]">Respon Cepat</h3>
            <p className="mt-2 text-sm text-[#0F172A]">Tim kami merespons dalam 1-2 jam kerja</p>
          </div>

          <div className="bg-gradient-to-r from-[#2563EB]/5 to-[#22D3EE]/5 p-6 rounded-2xl border border-gray-100">
            <div className="text-[#22D3EE] mb-3">
            </div>
            <h3 className="font-bold text-[#0A2540]">Konsultasi Gratis</h3>
            <p className="mt-2 text-sm text-[#0F172A]">Konsultasi awal tanpa biaya untuk kebutuhan cloud Anda</p>
          </div>

          <div className="bg-gradient-to-r from-[#22D3EE]/5 to-[#0A2540]/5 p-6 rounded-2xl border border-gray-100">
            <div className="text-[#0A2540] mb-3">
            </div>
            <h3 className="font-bold text-[#0A2540]">Keamanan Data</h3>
            <p className="mt-2 text-sm text-[#0F172A]">Informasi Anda dilindungi dengan enkripsi terbaik</p>
          </div>
        </div>
      </div>
    </div>
  );
}