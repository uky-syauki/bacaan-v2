'use client';

import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function AiTerjemahan() {
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
      const promp = "anda adalah penerjemah yang ulung, anda hebat dalam menerjemahkan text ke kebahasa indonesia secara akurat, ingatlah itu selalu untuk setiap apa yang kukirim selanjutnya dan jangan tambahkan kata atau kalimat selain dari hasil terjemahan" +
                    "terjemahkan: " + input
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
        Ai-Terjemahan <sup>by Bacaan</sup>
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
            <div
            key={index}
            className={`p-3 rounded-lg !text-white/70 text-gray-500 bg-opacity-10 ${
                msg.sender === "user"
                ? "bg-blue-500 self-end max-w-[75%]"
                : "bg-gray-900 self-start mb-10 text-justify max-w-[95%]"
            }`}
            >
            {/* Memecah teks berdasarkan titik dan merender setiap bagian */}
            {msg.text.split('.').map((sentence, i, arr) => (
                <span key={i}>
                {sentence.trim()}.
                {/* Tambahkan <br /> kecuali untuk elemen terakhir */}
                {i < arr.length - 1 && sentence.trim() && <br />}
                </span>
            ))}
            </div>
        ))}

        {loading && (
          <div className="self-start p-3 rounded-lg bg-gray-900 ">
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
