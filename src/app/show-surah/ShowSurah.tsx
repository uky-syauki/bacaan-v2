'use client';

import { useEffect, useState } from 'react';
import { Typography } from '@material-tailwind/react';
import Head from 'next/head';
import Link from 'next/link';
interface ShowSurahProps {
  surah: string;
}

export default function ShowSurah({ surah }: ShowSurahProps) {
  const [surahData, setSurahData] = useState({ id_surah: null, nama_surah: null, jumlah_ayat: null, ayat: {}, rekomendasi: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://bacaan114.pythonanywhere.com/api/get-surah/${surah}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Jaringan bermasalah!');
        }
        return response.json();
      })
      .then(data => {
        setSurahData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching surah:', error);
      });
  }, [surah]);

  if (loading) return <p className="text-center text-white bg-black">Loading surah content...</p>;
  if (!surahData || !surahData.ayat) return <p className="text-center text-red-500 !mt-50">Data tidak tersedia.</p>;

  return (
    <div className="w-full p-8 min-h-screen bg-black text-white flex flex-col items-center px-4 sm:px-6 md:px-8">
      <Head>
        <title>{surahData.nama_surah ? `${surahData.nama_surah} - Bacaan` : 'Bacaan'}</title>
      </Head>

      <h1 className="w-full text-center text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-tight max-w-screen-lg text-white/80 mt-12 text-blue-gray-500">
        {surahData.nama_surah} ({surahData.id_surah}:1-{surahData.jumlah_ayat})
      </h1>

      <div className="mt-8 p-8 max-w-screen-lg text-justify space-y-4">
        <p className="w-full text-white/70 text-justify text-xl">
          {Object.entries(surahData.ayat).map(([key, value]) => (
            <span key={key}>
              <sup><strong className="text-white">{key}.</strong></sup> {String(value)}
            </span>
          ))}
        </p>
      </div>

          {/* susun baris perbaris */}
      {/* <div className="mt-8 max-w-screen-lg text-justify space-y-4">
        {Object.entries(surahData.ayat).map(([key, value]) => (
          <Typography variant="lead" className="w-full text-white/70 text-left">
            <strong className="text-white">{key}.</strong> {value ? value : ''}
          </Typography>
        ))}
      </div> */}

      <div className="mt-20 flex flex-wrap justify-center gap-2">
        {surahData.rekomendasi.map((item, index) => (
          <Link key={index} href={`/show-surah/${String(item).toLowerCase()}`} passHref>
            <button key={index} className="px-4 py-2 bg-gray-900 rounded-md text-white text-sm sm:text-base hover:bg-gray-600 transition">
              {String(item).toUpperCase()}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
