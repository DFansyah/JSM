const MarqueeItem = ({ text }) => (
  <div className="flex items-center mx-8">
    <span className="text-xl font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">{text}</span>
    <span className="text-primary text-2xl mx-4">&#x2726;</span>
  </div>
);

export default function Marquee() {
  const items = [ "Respon Cepat", "Harga Jujur", "Pekerja Profesional", "Garansi Kerja", "Armada Modern", "Layanan 24 Jam" ];
  return (
    <div className="py-8 bg-white dark:bg-slate-900 border-y dark:border-slate-200 dark:border-slate-800">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (<MarqueeItem key={index} text={item} />))}
        </div>
      </div>
    </div>
  );
}