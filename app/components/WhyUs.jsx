'use client';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };
  return (
    <motion.div variants={cardVariants} className="bg-gray-100 dark:bg-slate-600 p-8 rounded-xl shadow-lg text-center">
      <div className="inline-block bg-secondary dark:bg-primary/20 p-4 rounded-full mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.2, } }, // Jeda antar kartu dipercepat sedikit
  };
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark dark:text-white">Mengapa Memilih Kami?</h2>
        </div>
        
        {/* Mengubah class grid agar bisa menampilkan 4 item dengan rapi */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
            title="Respon Cepat 24 Jam"
            description="Tim kami siap melayani panggilan darurat Anda kapan saja, siang maupun malam."
          />
          <FeatureCard
            icon={<svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            title="Tenaga Profesional"
            description="Dikerjakan oleh tim yang berpengalaman dan ahli di bidangnya untuk hasil maksimal."
          />
          <FeatureCard
            icon={<svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            title="Harga Terjangkau"
            description="Kami menawarkan harga yang jujur dan kompetitif tanpa biaya tersembunyi."
          />
          {/* KARTU KE-4 DITAMBAHKAN DI SINI */}
          <FeatureCard
            icon={<svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
            title="Peralatan Modern"
            description="Menggunakan armada dan peralatan modern untuk pekerjaan yang lebih cepat dan bersih."
          />
        </motion.div>
      </div>
    </section>
  );
}