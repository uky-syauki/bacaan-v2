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
                <Typography color="blue-gray" className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70">
                    Umpan balik
                </Typography>
                <div className="max-w-lg mx-auto p-6 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <Typography variant="h5" className="mb-4 text-gray-700 text-justify">
                        Kami dengan senang hati menerima kritik dan saran yang membangun untuk terus meningkatkan website kami. Jangan ragu untuk berbagi pendapat Anda!
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input type="text" name="dari" label="Nama" value={formData.dari} onChange={handleChange} required />
                        <Textarea name="pesan" label="Umpan Balik (Maks 1000 karakter)" value={formData.pesan} onChange={handleChange} required />
                        <Button type="submit" color="blue" fullWidth>
                            Kirim
                        </Button>
                    </form>
                    {responseMessage && (
                        <Typography variant="small" color={status === "success" ? "green" : "red"} className="mt-2">
                            {responseMessage}
                        </Typography>
                    )}
                </div>
            </div>
                        
        </header>
    );
}