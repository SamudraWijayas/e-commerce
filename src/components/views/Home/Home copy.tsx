import {
  BadgeCheck,
  Boxes,
  Headphones,
  ShieldCheck,
  Truck,
  User,
} from "lucide-react";
import Image from "next/image";


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden lg:h-126  flex items-center px-10">
          {/* Text */}
          <div className="text-white z-10">
            <h2 className="text-4xl font-bold mb-4">SUKU CADANG MOTOR</h2>
            <button className="bg-red-500 px-5 py-2 rounded-lg">
              Lihat Promo
            </button>
          </div>

          {/* Image */}
          <Image
            src="/images/banner1.png" // ganti sesuai gambar kamu
            alt="banner"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/50 to-black/50" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
          <Feature
            title="Produk Original"
            desc="Dijamin 100% asli"
            icon={ShieldCheck}
          />
          <Feature
            title="Pengiriman Cepat"
            desc="Kirim ke seluruh Indonesia"
            icon={Truck}
          />
          <Feature
            title="Konsultasi Gratis"
            desc="Tanya langsung ke ahli"
            icon={Headphones}
          />
          <Feature
            title="Stok Lengkap"
            desc="Ribuan spare part tersedia"
            icon={Boxes}
          />
          <Feature
            title="Garansi Produk"
            desc="Jaminan kualitas terbaik"
            icon={BadgeCheck}
          />
        </div>
      </section>

      {/* FLOATING WA */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
      >
        <span className="text-white text-xl">WA</span>
      </a>
    </div>
  );
};

export default Home;

function Feature({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
        <Icon className="w-4 h-4 text-gray-600" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-gray-500 text-xs">{desc}</p>
      </div>
    </div>
  );
}
