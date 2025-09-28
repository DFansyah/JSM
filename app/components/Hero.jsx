import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ================== TAMPILAN DESKTOP ================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Teks */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark dark:text-white leading-tight mb-4">
              Solusi Tuntas untuk <span className="text-primary">Saluran Mampet</span> Anda!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Layanan profesional 24 jam untuk sedot WC, septic tank, dan pelancaran pipa tersumbat. Cepat, bersih, dan bergaransi.
            </p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-primary-dark shadow-lg">
              WhatsApp Sekarang
            </a>
          </div>
          {/* Sisi Kanan: Gambar */}
          <div>
            <img 
              src="/banner.jpg" 
              className="rounded-xl shadow-2xl w-full" 
            />
          </div>
        </div>

        {/* =================== TAMPILAN MOBILE =================== */}
        <div className="md:hidden">
          <div className="relative h-[60vh] rounded-2xl overflow-hidden p-4">
            <Image
              src="/banner.jpg"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10 rounded-2xl"></div>

            {/* Diubah menjadi 'justify-center' untuk memposisikan kartu di tengah */}
            <div className="relative z-20 flex flex-col justify-center h-full text-white">
              <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                <h1 className="text-3xl font-extrabold leading-tight mb-3">
                  Solusi Tuntas untuk <span className="text-blue-300">Saluran Mampet</span> Anda!
                </h1>
                <p className="text-gray-200 mb-6 text-sm">
                  Layanan profesional 24 jam. Cepat, bersih, dan bergaransi.
                </p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-white font-bold py-3 rounded-full text-center">
                  WhatsApp Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}