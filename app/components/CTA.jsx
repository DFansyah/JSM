import Image from 'next/image';

export default function CTA() {
  const whatsappNumber = "6281234567890"; // GANTI NOMOR INI
  const whatsappURL = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="bg-primary">
      <div className="container mx-auto max-w-5xl px-4 py-16 text-center md:text-left">
        
        {/* ================== TAMPILAN DESKTOP ================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Saluran Anda Mampet?
            </h2>
            <p className="text-gray-200 mb-8 max-w-xl">
              Jangan tunggu sampai masalah memburuk. Hubungi kami sekarang untuk konsultasi gratis dan penanganan cepat!
            </p>
          </div>
          <div className="justify-self-end">
            <a 
              href={whatsappURL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition-colors shadow-lg"
            >
              Hubungi Kami 24 Jam
            </a>
          </div>
        </div>

        {/* =================== TAMPILAN MOBILE =================== */}
        <div className="md:hidden relative h-[50vh] rounded-2xl overflow-hidden">
          {/* Banner sebagai Background */}
          <Image
            src="/banner-cta.jpg"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-primary/80 z-10 rounded-2xl"></div>

          {/* Card Blur untuk Teks */}
          <div className="relative z-20 flex flex-col justify-center h-full text-white p-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold mb-3">
                Saluran Anda Mampet?
              </h2>
              <p className="text-gray-200 mb-6 text-sm">
                Jangan tunggu! Hubungi kami untuk solusi cepat.
              </p>
              <a 
                href={whatsappURL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-white text-primary font-bold py-3 rounded-full text-center"
              >
                WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}