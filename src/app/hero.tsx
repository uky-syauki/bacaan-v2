"use client";

// import Image from "next/image";
import { Button, Typography, Input } from "@material-tailwind/react";
import MenuSurah from "@/components/menu-surah";

function Hero() {
  return (
    <header className="mt-5 p-8">
    <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        Qur'an Terjemahan @Bacaan
      </Typography>
      <Typography
        variant="lead"
        className="mx-auto mt-8 mb-4 w-full px-8 !text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20 text-justify"
      >
        "Dengan Kitab itulah Allah memberi petunjuk kepada orang yang mengikuti keridaan-Nya ke jalan keselamatan, dan (dengan Kitab itu pula) Allah mengeluarkan orang itu dari gelap gulita kepada cahaya dengan izin-Nya, dan menunjukkan ke jalan yang lurus"
        (QS:AL-MAIDAH:16)
      </Typography>
      <div className="grid place-items-start justify-center gap-2">
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            Ask Ai-Bacaan
          </Button>
          <Button size="md" className="lg:w-max shrink-0" fullWidth color="gray">
            Mulai AL-Fatihah
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
    {/* <div className="w-full lg:container lg:mx-auto">
      <Image
        width={1024}
        height={400}
        src="/image/blog-background.png"
        alt="credit cards"
        className="h-96 w-full rounded-lg object-cover lg:h-[21rem]"
      />
    </div> */}
  </header>
  );
}
export default Hero;
