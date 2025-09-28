// 1. Impor fungsi getServicesData langsung dari file API
import { getServicesData } from '../api/services/route';

export default async function Services() {
  // 2. Panggil fungsinya secara langsung, tidak perlu lagi menggunakan fetch
  const services = await getServicesData();

  return (
    <section id="services" className="py-20 bg-background dark:bg-dark">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white">Layanan Unggulan Kami</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-slate-600 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              { /* <img src={service.image} alt={service.title} className="w-full h-48 object-cover" /> */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark dark:text-white mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}