import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 shadow-xl rounded-b-[50%] blur-xl"></div>

      <div
        className="relative w-full text-black px-6 py-4 bg-pink-custom z-10"
        style={{
          clipPath:
            "polygon(100% 0, 0 0, 0 51%, 4% 50%, 9% 51%, 15% 56%, 22% 64%, 33% 74%, 41% 80%, 49% 86%, 57% 91%, 67% 96%, 78% 97%, 85% 95%, 92% 91%, 97% 85%, 99% 79%, 100% 71%)",
        }}
      >
        <div className="flex justify-between items-start max-w-8xl mx-auto relative px-20">
          {/* Bagian kiri digeser ke atas dan kiri */}
          <div className="flex space-x-6 text-sm font-medium mt-4 -ml-15 font-inter md:-ml-5 sm:-ml-2">
            <span>Cari, Makeup?</span>
            <span>Booking</span>
            <button className="bg-pink-custom-35 text-white px-3 py-1 rounded-lg shadow hover:bg-dark-pink transition duration-300 hover:text-black">
              Masuk
            </button>
            <button className="bg-dark-pink px-3 py-1 rounded-lg shadow hover:bg-pink-custom-35 transition duration-300 hover:text-white">
              Daftar
            </button>
          </div>

          {/* Bagian kanan */}
          <div className="flex flex-row py-3">
            <div className="text-left pe-6">
              <p className="font-justme text-4xl -ml-14">Hi, sisstt?</p>
              <p className="text-2xl -mt-1 mb-2 font-justme">
                temukan MUA favoritmu Sekali Klik!
              </p>
            </div>
            <div className="flex items-center bg-white px-3 h-[50px] rounded-lg shadow text-sm w-[250px] mt-3">
              <button className="text-gray-500 hover:text-black">
                <FaSearch />
              </button>
              &nbsp;&nbsp;
              <input
                type="text"
                placeholder="Cari alamat dan area disini"
                className="w-full outline-none bg-transparent placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
