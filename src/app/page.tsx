export default function HomePage() {
  return (
    <main className="bg-[#E5FCF9] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white">
        <div className="relative flex justify-center items-center p-4">
          <img src="/banner1.jpg" alt="Banner" className="w-full max-w-5xl rounded-lg shadow" />
          <h1 className="absolute text-xl font-extrabold text-[#000066] tracking-[0.5em]">S a i g o n&nbsp;&nbsp;&nbsp;U n i f o r m</h1>
        </div>

        <nav className="flex justify-center gap-2 p-2">
          {['Về Chúng Tôi', 'Khách Hàng', 'Sản Phẩm', 'Tin Tức', 'Chính Sách', 'Liên Hệ'].map((item, idx) => (
            <button key={idx} className="bg-[#E8E8FF] text-sm text-[#0000CC] font-semibold px-3 py-1 rounded hover:bg-[#d0d0ff]">
              {item}
            </button>
          ))}
        </nav>
      </header>

      {/* Góc kinh nghiệm */}
      <section className="text-center my-6">
        <h2 className="inline-block bg-[#FFF4CF] text-[#9B1C1C] text-lg font-bold px-6 py-2 rounded-full tracking-widest">
          GÓC KINH NGHIỆM
        </h2>
      </section>

      {/* Top 5 chất liệu vải */}
      <section className="max-w-4xl mx-auto bg-white px-6 py-4 rounded-lg shadow border border-dashed border-[#F3C623]">
        <h3 className="text-center text-base font-bold text-[#9B1C1C] mb-4">
          Top 5 chất liệu vải may áo sơ mi phổ biến
        </h3>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <ul className="list-decimal text-sm text-gray-800 space-y-2 pl-5 flex-1 ">
            <li>Vải Kate – Chất liệu vải áo sơ mi phổ biến hiện nay </li>
            <li>Vải cotton – Top 5 chất liệu vải may áo sơ mi được ưa chuộng</li>
            <li>Vải Kaki – Chất liệu vải đa năng trong may mặc</li>
            <li>Vải lụa – Chất liệu may áo sơ mi được ưa chuộng</li>
            <li>Vải sợi bamboo – chất liệu may áo sơ mi phổ biến</li>
          </ul>
          <div className="flex-1 flex justify-center">
            <div className="w-full h-full max-w-xs bg-gray-200 rounded shadow-inner flex items-center justify-center">
              <img
                src="/top-5-chat-lieu-vai-may-ao-so-mi-1.jpg"
                alt="Top 5 chất liệu vải"
                className="h-full w-auto object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Khách hàng */}
      <section className="text-center mt-10">
        <h2 className="inline-block bg-[#FFF4CF] text-[#9B1C1C] text-lg font-bold px-6 py-2 rounded-full tracking-widest">
          KHÁCH HÀNG
        </h2>
      </section>

      {/* Danh sách khách hàng */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow p-4">
          <img src="/OVI.png" alt="Logo khách hàng" className="mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">Tên công ty khách hàng</h4>
          <p className="text-xs text-gray-600 mb-2">
            Mô tả ngắn về khách hàng và đồng phục họ đặt may...
          </p>
          <button className="text-xs text-white bg-[#4A90E2] px-3 py-1 rounded hover:bg-blue-600">
            Xem chi tiết
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <img src="/zone_group.png" alt="Logo khách hàng" className="mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">Tên công ty khách hàng</h4>
          <p className="text-xs text-gray-600 mb-2">
            Mô tả ngắn về khách hàng và đồng phục họ đặt may...
          </p>
          <button className="text-xs text-white bg-[#4A90E2] px-3 py-1 rounded hover:bg-blue-600">
            Xem chi tiết
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <img src="/popeyes.png" alt="Logo khách hàng" className="mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-[#1A1A1A] mb-1">Tên công ty khách hàng</h4>
          <p className="text-xs text-gray-600 mb-2">
            Mô tả ngắn về khách hàng và đồng phục họ đặt may...
          </p>
          <button className="text-xs text-white bg-[#4A90E2] px-3 py-1 rounded hover:bg-blue-600">
            Xem chi tiết
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A148C] text-white text-xs mt-10">
        <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left">
          <div>
            <p>Điện thoại: 028.7777.7899</p>
            <p>Email: info@saigonuniform.com</p>
          </div>
          <div>
            <p>21/6 Lê Thị Hồng, Tân Thới, Hóc Môn, TP.HCM</p>
            <p>Công ty cổ phần POSIDO</p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="text-right">
              <img src="/sgu_logo1.png" alt="Logo" className="mx-auto mb-2" />
            </div>
          </div>
        </div>
      </footer>
    </main >
  );
}