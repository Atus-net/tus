'use client';
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const allProducts = [
  ...Array.from({ length: 10 }, (_, i) => ({
    brand: "iphone",
    name: `iPhone ${i + 12}`,
    price: `${14 + i}.000.000 VNĐ`,
    image: `/images/iphone${i}.jpg`,
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    brand: "samsung",
    name: `Samsung A${i + 24}`,
    price: `${4 + i}.500.000 VNĐ`,
    image: `/images/ss${i}.jpg`,
  })),
  ...Array.from({ length: 10 }, (_, i) => ({
    brand: "oppo",
    name: `Oppo Reno ${i + 6}`,
    price: `${4 + i}.000.000 VNĐ`,
    image: `/images/op${i}.jpg`,
  })),
];

const banners = [
  {
    id: 1,
    image: '/images/banner-on-iphone.jpg',
    alt: 'Banner 1',
  },
  {
    id: 2,
    image: '/images/banner-on-samsung.jpg',
    alt: 'Banner 2',
  },
  {
    id: 3,
    image: '/images/banner-on-op2.jpg',
    alt: 'Banner 3',
  },
];

export default function SmartphoneStore() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? allProducts
      : allProducts.filter((p) => p.brand === filter);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollWidth = container.scrollWidth;
        const visibleWidth = container.clientWidth;

        const nextScrollLeft =
          container.scrollLeft + visibleWidth >= scrollWidth
            ? 0
            : container.scrollLeft + visibleWidth;

        container.scrollTo({ left: nextScrollLeft, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">

      {/* Line giảm giá */}
      <div className="bg-orange-100 text-center text-red-600 font-bold py-2">
        <div className="container mx-auto flex justify-center items-center px-30">
          NHẬN NGAY MÃ GIẢM 5% TỐI ĐA 300.000Đ
        </div>
      </div>

      {/* Header */}
      <div className="bg-purple-300 py-3">
        <div className="container mx-auto px-30 flex justify-between items-center">
          <div className="flex space-x-4 text-sm font-medium">
            <button onClick={() => setFilter("all")} className={filter === "all" ? "underline" : ""}>🏠 Trang chủ</button>
            <button onClick={() => setFilter("iphone")} className={filter === "iphone" ? "underline" : ""}>📱 Iphone</button>
            <button onClick={() => setFilter("samsung")} className={filter === "samsung" ? "underline" : ""}>📱 SamSung</button>
            <button onClick={() => setFilter("oppo")} className={filter === "oppo" ? "underline" : ""}>📱 Oppo</button>
            <a href="#">📦 Đơn hàng</a>
            <a href="#">😊 Về chúng tôi</a>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Bạn tìm gì"
              className="px-2 py-1 rounded border-2 border-purple-400"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded">Search</button>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="container mx-auto px-30">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth w-full aspect-[3/1] pt-5"
        >
          {banners.map((item) => (
            <div
              key={item.id}
              className="min-w-full relative flex-shrink-0"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="100vw"
                quality={85}
                priority
              />
            </div>
          ))}
        </div>

        {/* Danh sách sản phẩm */}
        <div className="pt-5 pb-10">
          <h2 className="text-xl font-bold mb-4 capitalize">
            {filter === "all" ? "Tất cả sản phẩm" : `Sản phẩm ${filter}`}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {filteredProducts.map((item, i) => (
              <div
                key={i}
                className="border-2 border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-col"
              >
                <div className="w-full aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover p-2"
                  />
                </div>
                <div className="p-2 text-center flex flex-col gap-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-red-400 font-semibold">{item.price}</div>
                  <button className="mt-2 text-green-500 px-3 py-1 rounded border-2 border-green-500">
                    🛒 Đặt hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-purple-200">
        <div className="container mx-auto px-30 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm py-5">
          <div className="space-y-2">
            <h3 className="font-semibold">😊 Về Chúng Tôi</h3>
            <p>Chính Sách Đặt Hàng</p>
            <p>Chính Sách Bảo Mật Thông Tin</p>
            <p>Thông Tin Đặt Hàng</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">✳️ Bản Quyền Thiết Kế Thuộc:</h3>
            <p>Nguyễn Thị Thanh Thảo - 231A310043</p>
            <p>Mai Trần Ngọc Giàu - 231A310075</p>
            <p>Lê Ngọc Mỹ Uyên - 231A310077</p>
            {/* <div className="flex space-x-2 mt-2">
              <span className="text-xl">📘</span>
              <span className="text-xl">🐦</span>
              <span className="text-xl">📺</span>
              <span className="text-xl">📷</span>
            </div> */}
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">🏬 Địa chỉ liên hệ:</h3>
            <p>CN1: 331, QL 1A, Phường APD, Q.12, TP. HCM</p>
            <p>CN2: 448B, Nguyễn Tất Thành, Q. 4, Tp. HCM</p>
            <h3 className="font-semibold">📞 Số điện thoại:</h3>
            <p>(08) 1234 5678</p>
            <h3 className="font-semibold">📧 Email:</h3>
            <p>info@SpacePhone-Technology.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}