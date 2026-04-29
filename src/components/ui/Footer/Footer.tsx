import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-10 pt-16 mt-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4 pb-12">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4 group">
            {/* LOGO */}
            <div className="relative w-10 h-10">
              <Image
                src="/logo-white-jokindes.png"
                alt="Ndestours Logo"
                fill
                sizes="40px"
                className="object-contain transition group-hover:scale-105"
                priority
              />
            </div>

            {/* TEXT */}
            <div className="leading-tight">
              <p className="text-white text-lg font-semibold tracking-wide group-hover:text-green-400 transition">
                NdesStore
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            NdesStore adalah partner terpercaya untuk kebutuhan fashion Anda.
            Kami menyediakan berbagai pilihan pakaian, sepatu, tas, dan koleksi
            menarik dengan kualitas terbaik dan harga terjangkau.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-green-400 transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-green-400 transition"
              >
                Produk
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-green-400 transition">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="font-semibold text-white mb-4">Marketplace</h4>
          <ul className="space-y-2">
            {["Shopee", "Lazada", "Tokopedia"].map((item) => (
              <li
                key={item}
                className="text-gray-400 hover:text-green-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-3 text-gray-400 text-sm">
            <div className="flex items-center gap-3 hover:text-white transition">
              <Mail className="w-4 h-4 text-green-500" />
              <span>ndestours@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <Phone className="w-4 h-4 text-green-500" />
              <span>+62 877 1851 7731</span>
            </div>

            <div className="flex items-center gap-3 hover:text-white transition">
              <MapPin className="w-4 h-4 text-green-500" />
              <span>Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ndestours. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
