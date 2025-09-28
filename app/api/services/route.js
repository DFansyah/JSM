import { NextResponse } from 'next/server';

// 1. Buat fungsi terpisah untuk mendapatkan data
export async function getServicesData() {
  // Di masa depan, ini bisa mengambil data dari database
  const servicesData = [
    {
      id: 1,
      title: "Sedot WC & Septic Tank",
      description: "Layanan penyedotan WC penuh dan lumpur septic tank hingga tuntas dengan armada modern.",
      image: "https://placehold.co/400x250/bfdbfe/1e3a8a?text=Sedot+WC",
    },
    {
      id: 2,
      title: "Pelancaran Saluran Mampet",
      description: "Mengatasi semua jenis sumbatan pada saluran wastafel, kamar mandi, dan pipa pembuangan.",
      image: "https://placehold.co/400x250/93c5fd/1e3a8a?text=Saluran+Mampet",
    },
    {
      id: 3,
      title: "Sedot Limbah Industri",
      description: "Jasa profesional penyedotan limbah cair industri dan pabrik dengan standar keamanan tinggi.",
      image: "https://placehold.co/400x250/60a5fa/1e3a8a?text=Limbah+Industri",
    },
  ];
  return servicesData;
}

// 2. Handler GET sekarang hanya memanggil fungsi tersebut
export async function GET() {
  const data = await getServicesData();
  return NextResponse.json({ services: data });
}