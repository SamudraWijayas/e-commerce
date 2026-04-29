"use client";

import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChevronLeft,
  ChevronRight,
  Headphones,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { banner, category, products } from "@/mocks/data";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section className="max-w-7xl mx-auto lg:px-6 px-3">
        <div className="relative rounded-2xl overflow-hidden lg:h-126 h-[40vh]  flex items-center">
          <Swiper
            pagination={{ clickable: true }}
            loop
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="h-full w-full"
          >
            {banner.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-full">
                  {/* IMAGE */}
                  <Image
                    src={item.image} // ganti sesuai gambar kamu
                    alt="banner"
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto lg:px-6 px-3 mt-8">
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

      <section className="max-w-7xl mx-auto lg:px-6 px-3 mt-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Kategori Utama
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Jelajahi produk berdasarkan kategori
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button className="custom-prev p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition">
              <ChevronLeft size={16} />
            </button>

            <button className="custom-next p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="">
          <Swiper
            className="testimonial-swiper"
            slidesPerView={2.5}
            spaceBetween={12}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Navigation]}
          >
            {category.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-3 cursor-pointer group">
                  {/* IMAGE */}
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gray-100 overflow-hidden group-hover:shadow-md transition">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full p-2"
                    />
                  </div>

                  {/* TITLE */}
                  <p className="text-sm text-gray-700 text-center group-hover:text-green-600 transition">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="max-w-7xl mx-auto lg:px-6 px-3 mt-30">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
              Produk Terbaru
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Temukan produk terbaru dari kami
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button className="custom-prevv p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition">
              <ChevronLeft size={16} />
            </button>

            <button className="custom-nextt p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        <hr className="my-4 border-gray-200" />
        <div>
          <Swiper
            className="w-full"
            slidesPerView={1.5}
            spaceBetween={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-nextt",
              prevEl: ".custom-prevv",
            }}
            modules={[Autoplay, Navigation]}
          >
            {products.map((item, index) => (
              <SwiperSlide key={index} className="flex h-auto py-5 px-2">
                <div className="w-full h-full rounded-2xl shadow-sm hover:shadow-lg transition">
                  <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden group">
                    {/* CLICKABLE AREA */}
                    <Link href={`/products/${item.slug}`} className="block">
                      {/* IMAGE */}
                      <div className="relative w-full aspect-square overflow-hidden">
                        <Image
                          src={item.images[0]}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                        />  

                        <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur">
                          ⭐ {item.rating}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-4 flex flex-col">
                        {/* CATEGORY */}
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">
                          {item.category}
                        </span>

                        {/* TITLE */}
                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 mt-1 min-h-10 leading-snug group-hover:text-green-600 transition">
                          {item.title}
                        </h4>

                        {/* PRICE */}
                        <p className="text-green-700 font-bold text-base mt-2">
                          Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </Link>

                    {/* CTA (tetap di luar link biar gak tabrakan klik) */}
                    <div className="px-4 pb-4 mt-auto">
                      <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-green-600 text-white text-xs hover:bg-green-700 transition">
                        <ShoppingCart size={14} />
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <SwiperSlide className="flex h-auto py-5 px-2">
              <Link href="/products" className="w-full h-full">
                <div className="w-full h-full rounded-2xl border-2 border-dashed border-gray-300 hover:border-green-500 transition">
                  <div className="h-full flex flex-col items-center justify-center bg-white rounded-2xl p-6 text-center group cursor-pointer">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600 mb-3 group-hover:bg-green-100 transition">
                      <ArrowRight size={20} />
                    </div>

                    <h4 className="text-sm font-semibold text-gray-800">
                      Jelajah Semua
                    </h4>

                    <p className="text-xs text-gray-500 mt-1">
                      Lihat semua produk kami
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* FLOATING WA */}
      <a
        href="#"
        className="fixed bottom-6 right-6 z-50 bg-green-500 w-14 h-14 flex items-center justify-center rounded-full shadow-lg"
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
