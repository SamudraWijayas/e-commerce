"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  Grid3X3,
  List,
  ShoppingCart,
  ChevronRight,
} from "lucide-react";
import { products, category } from "@/mocks/data";
import { Checkbox, Select, Slider } from "@radix-ui/themes";
import Link from "next/link";

const Product = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
  const [sortBy, setSortBy] = useState("terbaru");

  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase());

      const matchCategory = selectedCategory
        ? p.category === selectedCategory
        : true;

      const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];

      return matchSearch && matchCategory && matchPrice;
    });

    // SORTING
    if (sortBy === "termurah") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "terlaris") {
      result = [...result].sort((a, b) => b.sold - a.sold);
    }

    if (sortBy === "terbaru") {
      result = [...result].sort((a, b) => b.id - a.id); // asumsi id naik = terbaru
    }
    if (sortBy === "terlama") {
      result = [...result].sort((a, b) => a.id - b.id);
    }

    return result;
  }, [search, selectedCategory, priceRange, sortBy]);

  const isFilterActive =
    selectedCategory !== "" ||
    search !== "" ||
    priceRange[0] !== 0 ||
    priceRange[1] !== 10000000;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="flex items-center flex-wrap">
          <li>
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
          </li>

          <li className="mx-2 text-gray-400">
            <ChevronRight size={14} />
          </li>

          <li>
            <Link href="/products" className="hover:text-green-600 transition">
              Produk
            </Link>
          </li>
        </ol>
      </nav>
      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">Semua Produk</h1>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div className="flex gap-3">
          <div className="flex items-center flex-1 border border-gray-200 rounded-lg px-3">
            <Search size={18} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari produk, merek, nomor part..."
              className="w-full p-2 outline-none"
            />
          </div>
        </div>

        {/* FILTER BAR */}
        <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-black">
              {filteredProducts.length}
            </span>{" "}
            produk ditemukan
          </p>

          <div className="flex items-center gap-3">
            <Select.Root value={sortBy} onValueChange={setSortBy}>
              <Select.Trigger className="w-[180px]" />

              <Select.Content color="green">
                <Select.Item value="terbaru">Terbaru</Select.Item>
                <Select.Item value="terlama">Terlama</Select.Item>
                <Select.Item value="termurah">Termurah</Select.Item>
                <Select.Item value="terlaris">Terlaris</Select.Item>
              </Select.Content>
            </Select.Root>

            <div className="lg:flex hidden border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={`p-2 ${
                  view === "grid" ? "bg-red-600 text-white" : "bg-white"
                }`}
              >
                <Grid3X3 size={18} />
              </button>

              <button
                onClick={() => setView("list")}
                className={`p-2 ${
                  view === "list" ? "bg-red-600 text-white" : "bg-white"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {/* SIDEBAR CATEGORY */}
        <aside className="h-fit lg:sticky top-6 hidden lg:block">
          {isFilterActive && (
            <div className="flex items-center justify-between mb-3 px-1">
              <h1 className="text-xs font-semibold text-gray-700">
                Filter Aktif
              </h1>

              <button
                onClick={() => {
                  setSelectedCategory("");
                  setSearch("");
                  setPriceRange([0, 10000000]);
                }}
                className="text-xs text-red-500 hover:text-red-600 hover:underline transition"
              >
                Reset
              </button>
            </div>
          )}
          <div className="bg-white p-4 rounded-xl border border-gray-200 ">
            <h2 className="font-semibold mb-3">Kategori</h2>

            <div className="max-h-60 overflow-auto space-y-1">
              {category.map((cat) => {
                const isActive = selectedCategory === cat.title;

                return (
                  <label
                    key={cat.title}
                    className={`
            flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition border
            ${
              isActive
                ? "bg-gray-100 border-gray-300"
                : "bg-white border-transparent hover:bg-gray-50"
            }
          `}
                  >
                    <Checkbox
                      color="green"
                      checked={isActive}
                      onCheckedChange={(checked) =>
                        setSelectedCategory(checked ? cat.title : "")
                      }
                    />

                    <span
                      className={`text-sm ${isActive ? "font-semibold" : ""}`}
                    >
                      {cat.title}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 mt-3">
            {/* PRICE FILTER */}
            <h2 className="font-semibold mb-2">Harga</h2>

            <Slider
              color="green"
              min={0}
              max={10000000}
              step={100000}
              value={priceRange}
              onValueChange={(value) =>
                setPriceRange(value as [number, number])
              }
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Rp {priceRange[0].toLocaleString("id-ID")}</span>
              <span>Rp {priceRange[1].toLocaleString("id-ID")}</span>
            </div>
          </div>
        </aside>

        {/* PRODUCTS */}
        <div className="md:col-span-3">
          <div
            className={
              view === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 gap-4"
                : "flex flex-col gap-4"
            }
          >
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition"
              >
                {/* IMAGE */}
                <div
                  className={
                    view === "grid"
                      ? "relative h-40 w-full"
                      : "relative h-80 w-full"
                  }
                >
                  <Image
                    src={p.images[0]}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3">
                  <p className="text-xs text-gray-400 uppercase">
                    {p.category}
                  </p>

                  <h3 className="text-sm font-medium line-clamp-2">
                    {p.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    ⭐ {p.rating} · {p.sold} terjual
                  </p>

                  <p className="text-red-600 font-semibold mt-2">
                    Rp {p.price.toLocaleString("id-ID")}
                  </p>

                  <button className="mt-3 w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 hover:bg-gray-50">
                    <ShoppingCart size={16} /> Tambah
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-400 mt-10">
              Produk tidak ditemukan
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
