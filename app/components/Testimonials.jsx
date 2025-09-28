'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">
            Hasil Kerja Nyata Kami
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">Lihat langsung hasil pekerjaan dan testimoni dari pelanggan kami.</p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            // Tampilkan 1 slide di mobile
            640: {
              slidesPerView: 1,
            },
            // Tampilkan 2 slide di tablet
            768: {
              slidesPerView: 2,
            },
            // Tampilkan 3 slide di desktop
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {/* SwipperSlide Untuk Vid*/}
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <video 
                className="w-full rounded-lg"
                controls 
                poster="/testi/1.jpg"
              >
                <source src="/testi/testimonial-video.mp4" type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
              <div className="p-4">
                <h4 className="font-bold">Pelancaran Saluran di Restoran</h4>
                <p className="text-sm text-gray-300">"Pengerjaan cepat dan sangat profesional. Sangat membantu!"</p>
              </div>
            </div>
          </SwiperSlide>
          {/* SwipperSlide Untuk Foto */}
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/1.jpg"
                      alt="Pelancaran Saluran Kamar Mandi"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
                <h4 className="font-bold">Pelancaran Saluran Kamar Mandi</h4>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/2.jpg"
                      alt="Pelancaran Saluran Wastafel"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/3.jpg"
                      alt="Pelancaran Saluran Wastafel"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/4.jpg"
                      alt="Pelancaran Saluran Wastafel"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/5.jpg"
                      alt="Pelancaran Saluran Wastafel"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="bg-slate-600 dark:bg-slate-800 p-4 rounded-xl shadow-lg text-white h-full">
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                  <Image
                      src="/testi/6.jpg"
                      alt="Pelancaran Saluran Wastafel"
                      layout="fill"
                      objectFit="cover"
                  />
              </div>
              <div className="p-4">
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}