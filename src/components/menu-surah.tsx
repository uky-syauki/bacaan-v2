"use client";

import { useEffect, useState } from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
import Link from "next/link";

  export function MenuSurah() {
    const [namaSurah, setNama_surah] = useState([]);

    useEffect(() => {
      const fetchNama = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/nama-surah");
          if (!response.ok) {
            throw new Error("Gagal mengambil data");
          }
          const data = await response.json();
          console.log(data.data);
          setNama_surah(data.data);
        } catch (error) {
          console.error("Error:", error);
        }
      };

    fetchNama();
  }, []);
    return (
      <>
      <div className="flex place-items-center justify-center">
  <div className="mt-8 mx-auto flex flex-wrap gap-2 justify-center">
    {namaSurah.map((item, index) => (
      <Button key={index} className="mb-2 min-w-52" color="gray">
        {item}
      </Button>
    ))}
  </div>
</div>

      </>
    );
  }

export default MenuSurah;