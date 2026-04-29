"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { products } from "@/mocks/data";

const DetailProduct = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug]);

  // ✅ SAFE related
  const relatedProducts = product
    ? products
        .filter(
          (p) => p.category === product.category && p.slug !== product.slug,
        )
        .slice(0, 4)
    : [];

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || "/images/placeholder.png",
  );
  const [qty, setQty] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 mt-6 md:mt-10">
      {/* BREADCRUMB */}
      <nav className="text-xs md:text-sm text-gray-500 mb-4">
        <ol className="flex items-center flex-wrap gap-y-1">
          <li>
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
          </li>

          <li className="mx-2 text-gray-400">
            <ChevronRight size={14} />
          </li>

          <li>
            <Link href="/products" className="hover:text-green-600">
              Produk
            </Link>
          </li>

          <li className="mx-2 text-gray-400">
            <ChevronRight size={14} />
          </li>

          <li>
            <Link
              href={`/products?category=${encodeURIComponent(product.category)}`}
              className="hover:text-green-600"
            >
              {product.category}
            </Link>
          </li>

          <li className="mx-2 text-gray-400">
            <ChevronRight size={14} />
          </li>

          <li className="text-gray-800 font-medium line-clamp-1">
            {product.title}
          </li>
        </ol>
      </nav>

      {/* MAIN */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-10 bg-white p-4 md:p-6 rounded-xl shadow-sm">
        {/* LEFT - IMAGE */}
        <div>
          {/* MAIN IMAGE */}
          <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-contain p-2"
            />
          </div>

          {/* THUMB */}
          <div className="flex gap-2 md:gap-3 mt-3 md:mt-4 overflow-x-auto">
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`w-14 h-14 md:w-16 md:h-16 border-2 rounded cursor-pointer overflow-hidden flex-shrink-0 ${
                  selectedImage === img ? "border-green-500" : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt="thumb"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          {/* TITLE */}
          <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
            {product.title}
          </h1>

          {/* RATING */}
          <div className="text-sm text-gray-600">
            ⭐ {product.rating} · {product.sold} Terjual
          </div>

          {/* PRICE */}
          <div className="bg-gray-50 p-4 rounded flex items-center justify-between">
            <p className="text-2xl md:text-3xl font-bold text-green-700">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <div className="text-right">
              <p className="text-xs text-gray-500">Stok</p>
              <p className="font-semibold text-gray-700">20</p>
            </div>
          </div>

          {/* QTY */}
          <div>
            <p className="text-sm text-gray-500 mb-2">Jumlah</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 shadow-sm">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  disabled={qty <= 1}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-40"
                >
                  <Minus size={16} />
                </button>

                <span className="w-8 text-center text-sm font-semibold">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>

              <span className="text-xs text-gray-400">Stok tersedia</span>
            </div>
          </div>

          {/* ACTION */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-green-500 text-green-500 rounded hover:bg-green-50">
              <ShoppingCart size={16} />
              Keranjang
            </button>

            <button className="w-full px-4 py-3 bg-green-600 text-white rounded hover:bg-green-700">
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="mt-12 md:mt-16">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          Produk Terkait
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {relatedProducts.map((item) => (
            <Link
              key={item.id}
              href={`/products/${item.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
                {/* IMAGE */}
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3">
                  <p className="text-[10px] text-gray-400 uppercase">
                    {item.category}
                  </p>

                  <h4 className="text-sm font-medium text-gray-800 line-clamp-2 mt-1 group-hover:text-green-600 transition">
                    {item.title}
                  </h4>

                  <p className="text-green-700 font-semibold text-sm mt-2">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
