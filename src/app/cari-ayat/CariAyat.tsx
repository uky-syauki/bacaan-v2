'use client';

import { useState } from "react";
import axios from "axios";

export default function CariAyat() {
  const [formData, setFormData] = useState({
    idSurah: "",
    idAyatStart: "",
    idAyatEnd: "",
  });
  const [status, setStatus] = useState("");
  const [responseData, setResponseData] = useState<any>(null);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (value.length > 4) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");
    setResponseData(null);

    try {
      const { idSurah, idAyatStart, idAyatEnd } = formData;
      let url = '';
      if (!idAyatEnd){
        url = `https://bacaan114.pythonanywhere.com/api/index-ayat/${idSurah}/${idAyatStart}`;
      } else {
        url = `https://bacaan114.pythonanywhere.com/api/index-ayat/${idSurah}/${idAyatStart}/${idAyatEnd}`;
      }
      const response = await axios.get(url);
      setStatus("success");
      setResponseData(response.data.hasil);
      setResponseMessage("");
    } catch (error) {
      setStatus("error");
      setResponseMessage("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <header className="mt-5 p-6">
      <div className="container mx-auto text-center">
        <h1 className="text-[30px] lg:text-[42px] font-bold text-white/80 mb-6">
          Pencarian Ayat Al-Qur'an
        </h1>

        <form onSubmit={handleSubmit} className="flex md:flex-row gap-3 md:items-end justify-center mb-8">
          <div className="flex flex-col w-20 md:w-1/5">
            <label className="text-left text-sm text-gray-300 mb-1">ID Surah</label>
            <input
              type="number"
              name="idSurah"
              value={formData.idSurah}
              onChange={handleChange}
              required
              className="px-3 py-2 bg-black text-white border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col w-20 md:w-1/5">
            <label className="text-left text-sm text-gray-300 mb-1">Ayat Awal</label>
            <input
              type="number"
              name="idAyatStart"
              value={formData.idAyatStart}
              onChange={handleChange}
              required
              className="px-3 py-2 bg-black text-white border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col w-20 md:w-1/5">
            <label className="text-left text-sm text-gray-300 mb-1">Ayat Akhir</label>
            <input
              type="number"
              name="idAyatEnd"
              value={formData.idAyatEnd}
              onChange={handleChange}
              className="px-3 py-2 bg-black text-white border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 w-20 md:w-auto"
          >
            Cari
          </button>
        </form>

        {status === "error" && (
          <p className="text-red-500 text-sm mb-4">{responseMessage}</p>
        )}

        {responseData && (
          <div className="p-6 rounded-2xl backdrop-blur-md shadow-xl max-w-3xl mx-auto text-left transition-all duration-500">
            <h2 className="text-lg md:text-xl font-semibold text-blue-300 mb-3">
              {responseData.title}
            </h2>
            <h3 className="text-md text-blue-200 mb-4 italic">Surah: {responseData.nama_surah}</h3>
            <p className="bg-black/30 p-1 rounded-lg text-white/90 hover:bg-black/40 transition-all">
                {responseData.ayat.map((a: string, idx: number) => (
                    <span key={idx}>
                    <sup></sup> {a}{" "}
                    </span>
                ))}
            </p>
          </div>
        )}
      </div>
    </header>
  );
}
