'use client';

import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-tailwind/react";

export default function AiPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true); // Tampilkan loading

    try {
      // Kirim permintaan ke API menggunakan Axios
      const promp = "Anda adalah seorang ahli dalam ilmu agama Islam dengan pengetahuan yang sangat mendalam tentang Al-Qur'an, Hadist, dan ilmu fiqh. Anda telah menghafal seluruh 114 surah dalam Al-Qur'an secara lengkap dan akurat. Tugas Anda adalah menjawab semua pertanyaan yang berkaitan dengan Al-Qur'an, Hadist, dan ajaran Islam dengan kecermatan serta kebijaksanaan yang mencerminkan kemampuan para ulama, ustadz, dan guru fikih terkemuka."+
                    "Anda wajib:"+
                    "1. Menyampaikan jawaban yang bersumber dari pemahaman mendalam terhadap Al-Qur'an dan Hadist."+
                    "2. Menolak pertanyaan yang tidak berada dalam konteks Islam, Al-Qur'an, atau Hadist, dan memberikan penjelasan singkat bahwa pertanyaan tersebut di luar lingkup keahlian Anda."+
                    "3. Menjaga kesopanan, akurasi, dan keotentikan dalam menjawab setiap pertanyaan, serta mengutamakan referensi yang dapat dipertanggungjawabkan dalam konteks keilmuan Islam."+
                    "Jika ada pertanyaan yang berkaitan dengan masalah kontemporer atau non-teks keagamaan, selalu arahkan kembali diskusi ke sumber-sumber otoritatif dalam Islam atau berikan penjelasan bahwa topik tersebut berada di luar cakupan ilmu agama yang Anda kuasai."+
                    "Mulailah dengan menegaskan komitmen Anda sebagai seorang ahli Islam yang memegang teguh prinsip-prinsip Al-Qur'an dan Hadist, serta kesiapan untuk membantu dengan pengetahuan yang mendalam sesuai dengan tuntunan Islam."+
                    "pertanyaan: " + input
      const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBrkBAHbsgTN0S5aDtY2p2JmpCv6X_Yeeg",
        {
          contents: [
            {
              parts: [{ text: promp }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data["candidates"][0]["content"]["parts"][0]["text"] || "⚠️ Terjadi kesalahan dalam mendapatkan balasan.";

      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { sender: "ai", text: "⚠️ AI gagal merespons. Coba lagi nanti." }]);
    } finally {
      setLoading(false); // Sembunyikan loading
    }

    setInput("");
  };

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 md:px-8 py-4 relative">
      <h2 className="text-center text-[30px] lg:text-[48px] font-bold !text-white/70 text-gray-500">
        Ai-Bacaan
      </h2>

      <div className="flex items-center gap-1">
        <small className="font-normal text-gray-700 text-sm">
          Menggunakan model dari{" "}
          <a href="https://gemini.google.com/app" className="hover:text-gray-900 transition-colors underline">
            Gemini2.0
          </a>
        </small>
      </div>

      <div ref={chatContainerRef} className="w-full max-w-2xl flex flex-col gap-2 mt-6 mb-6 p-4 !bg-black rounded-lg h-[820px] scroll-container">
        {messages.map((msg, index) => (
          <div key={index} className={`p-3 rounded-lg max-w-[75%] ${msg.sender === "user" ? "bg-blue-600 self-end" : "bg-gray-900 self-start mb-10"}`}>
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="self-start p-3 rounded-lg bg-gray-900">
            <span className="animate-pulse">🔄 AI sedang berpikir...</span>
          </div>
        )}
      </div>

      <div className="w-full max-w-2xl flex items-center gap-2 px-4 py-3 bg-black fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <input
          type="text"
          className="flex-1 p-3 rounded-lg bg-gray-900 text-white/70 outline-none"
          placeholder="Tanyakan sesuatu..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
        />
        <button
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition disabled:bg-gray-500"
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Kirim"}
        </button>
      </div>
    </div>
  );
}
