'use client';

import { useState } from "react";
import axios from "axios";
import { Button, Typography, Textarea, Input } from "@material-tailwind/react";


export default function Kontak(){
    const [formData, setFormData] = useState({ dari: "", pesan: "" });
    const [status, setStatus] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        if (name === "pesan" && value.length > 1000) return; // Batasi textarea maksimal 200 karakter
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e:any) => {
        e.preventDefault();
        setStatus("loading");
    
        try {
          const response = await axios.post("https://bacaan114.pythonanywhere.com/api/kritik-dan-saran", formData, {
            headers: { "Content-Type": "application/json" },
          });
          
          setFormData({ dari: "", pesan: "" });
          setStatus("success");
          setResponseMessage(response.data.pesan);
        } catch (error) {
            setStatus("error");
            setResponseMessage("Terjadi kesalahan, coba lagi nanti.");
        }
      };
    return (
<header className="mt-5 p-8">
  <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
    <h1 className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl text-white/70 text-blue-gray-500">
      Umpan balik
    </h1>

    <div className="max-w-lg mx-auto p-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
      <h2 className="mb-4 text-gray-700 text-justify text-xl font-semibold">
        Kami dengan senang hati menerima kritik dan saran yang membangun untuk terus meningkatkan website kami. Jangan ragu untuk berbagi pendapat Anda!
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="dari"
            value={formData.dari}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border text-white bg-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
          />
          <label className="absolute left-3 -top-2.5 bg-black px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Nama
          </label>
        </div>

        <div className="relative">
          <textarea
            name="pesan"
            value={formData.pesan}
            onChange={handleChange}
            required
            maxLength={1000}
            className="w-full px-3 py-2 text-white bg-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 peer"
          />
          <label className="absolute left-3 -top-2.5 bg-black px-1 text-sm text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-500">
            Umpan Balik (Maks 1000 karakter)
          </label>
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Kirim
        </button>
      </form>

      {responseMessage && (
        <p className={`mt-2 text-sm ${status === "success" ? "text-green-500" : "text-red-500"}`}>
          {responseMessage}
        </p>
      )}
    </div>
  </div>
</header>
    );
}