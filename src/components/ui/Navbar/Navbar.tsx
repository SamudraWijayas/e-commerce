"use client";
import {
  Clock,
  Menu,
  Search,
  SearchIcon,
  ShoppingCart,
  TrendingUp,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Select } from "@radix-ui/themes";
import { category } from "@/mocks/data";
import { usePathname, useRouter } from "next/navigation";
import { useSearch } from "@/contexts/SearchContext";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("recentSearch");
    return data ? JSON.parse(data) : [];
  });

  const saveSearch = (value: string) => {
    if (!value.trim()) return;

    const updated = [value, ...recent.filter((i) => i !== value)].slice(0, 5);

    setRecent(updated);
    localStorage.setItem("recentSearch", JSON.stringify(updated));
  };

  const handleSearch = () => {
    if (!query.trim()) return;

    saveSearch(query);

    router.push(`/products?search=${encodeURIComponent(query)}`);

    setSearchOpen(false);
  };
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto lg:px-6 px-3 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-13 h-13 rounded-xl flex items-center justify-center group-hover:shadow-md transition">
            <Image
              src="/logo-green-jokindes.png"
              alt="Ndestours Logo"
              fill
              sizes="44px"
              className="object-contain p-1"
              priority
            />
          </div>
          <h1 className="font-semibold text-lg lg:block hidden">NdesStore</h1>
        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center gap-2 w-full max-w-xl mx-6">
          <Select.Root
            onValueChange={(value) => {
              if (value === "all") {
                router.push("/products");
              } else {
                router.push(`/products?category=${encodeURIComponent(value)}`);
              }
            }}
          >
            <Select.Trigger placeholder="Kategori" className="w-45" />

            <Select.Content>
              <Select.Item className="hover:bg-green-700!" value="all">
                Semua Kategori
              </Select.Item>

              {category.map((item) => (
                <Select.Item
                  className="hover:bg-green-700!"
                  key={item.title}
                  value={item.title}
                >
                  {item.title}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <div className="relative w-full max-w-xl">
            <div className="flex items-center gap-2">
              {/* INPUT */}
              <div className="flex items-center border border-gray-200 rounded-lg w-full px-3">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Cari produk..."
                  className="w-full px-2 py-2 outline-none text-sm"
                  onFocus={() => setSearchOpen(true)}
                  onBlur={() => setTimeout(() => setSearchOpen(false), 150)}
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleSearch}
                className="bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Cari
              </button>
            </div>

            {/* DROPDOWN */}
            {searchOpen && (
              <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-50">
                {recent.length > 0 && (
                  <>
                    <p className="text-xs text-gray-400 mb-2">
                      Pencarian Terakhir
                    </p>
                    <div className="flex flex-col gap-2 mb-3">
                      {recent.map((item, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setQuery(item);
                            saveSearch(item);
                            router.push(
                              `/products?search=${encodeURIComponent(item)}`,
                            );
                            setSearchOpen(false);
                          }}
                          className="flex items-center gap-2 text-sm text-left px-1 py-2 hover:bg-gray-100 rounded-lg"
                        >
                          <Clock className="w-4 h-4 text-gray-400" />
                          {item}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                <p className="text-xs text-gray-400 mb-2">Pencarian Populer</p>

                <div className="flex flex-col gap-2">
                  {["Oli Mesin", "Kampas Rem", "Aki Motor", "Busi"].map(
                    (item, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setQuery(item);
                          saveSearch(item);
                          router.push(
                            `/products?search=${encodeURIComponent(item)}`,
                          );
                          setSearchOpen(false);
                        }}
                        className="flex items-center gap-2 text-sm text-left px-1 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        {item}
                      </button>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu */}
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <Link
              href="/"
              className={`font-medium text-gray-700 ${
                pathname === "/"
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : ""
              }`}
            >
              Beranda
            </Link>

            <Link
              href="/products"
              className={`font-medium text-gray-700 ${
                pathname === "/products"
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : ""
              }`}
            >
              Produk
            </Link>

            <Link
              href="/blog"
              className={`font-medium text-gray-700 ${
                pathname === "/blog"
                  ? "text-green-700 border-b-2 border-green-700 pb-1"
                  : ""
              }`}
            >
              Blog
            </Link>
          </nav>
          {/* Action */}
          <div className="flex items-center gap-4">
            <SearchIcon className="block lg:hidden w-5 h-5" />
            <Link href="/" className="text-sm hidden lg:block">
              Masuk
            </Link>

            <ShoppingCart className="w-5 h-5" />

            {/* Mobile Toggle */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0  z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-0 right-0 md:hidden bg-white z-50 px-6 py-6 space-y-6 shadow-xl rounded-b-2xl"
            >
              {/* Home */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-800"
              >
                Beranda
              </Link>

              {/* products */}
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-800"
              >
                Produk
              </Link>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className="block font-medium text-gray-800"
              >
                Blog
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
