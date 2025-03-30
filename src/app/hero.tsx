"use client";

import { Button, Typography } from "@material-tailwind/react";
import Link from 'next/link';

function Hero() {
  return (
    <header className="mt-5 p-8">
    <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        Qur&apos;an Terjemahan @Bacaan
      </Typography>
      <Typography
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20 text-justify"
      >
        &quot;Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan, Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Mahamulia. Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.&quot;
        QS. Al-Alaq (96:1-5)
      </Typography>
      <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            <Link href={"/ai-bacaan"} passHref>
              Ask Ai-Bacaan
            </Link>
          </Button>
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            <Link href={"/show-surah/al-fatihah"} passHref>
              Mulai AL-Fatihah
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Typography variant="small" className="font-normal text-gray-700">
            Terjemahan dari{" "}
            <a
              href="https://litequran.net/"
              className="hover:text-gray-900 transition-colors underline"
            >
              litequran
            </a>
          </Typography>
        </div>
      </div>
    </div>
  </header>
  );
}
export default Hero;
