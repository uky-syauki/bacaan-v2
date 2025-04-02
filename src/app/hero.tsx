"use client";

import Link from 'next/link';

function Hero() {
  return (
    <header className="mt-5 p-2">
      <div className="w-w-full container mx-auto pt-12 pb-24 text-center">
        <h1 className="p-2 mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl text-white/70">
          Qur&apos;an Terjemahan @Bacaan
        </h1>

        <p className="font-bold mx-auto mt-8 mb-4 w-full px-8 text-gray-700 lg:w-10/12 lg:px-12 xl:w-8/12 xl:px-20 text-justify text-xl">
          &quot;Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan, Dia telah menciptakan manusia dari segumpal darah. Bacalah, dan Tuhanmulah Yang Mahamulia. Yang mengajar (manusia) dengan pena. Dia mengajarkan manusia apa yang tidak diketahuinya.&quot;
          QS. Al-Alaq (96:1-5)
        </p>

        <div className="grid place-items-start justify-center gap-2">
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link 
              href="/ai-bacaan" 
              passHref
              className="lg:w-max shrink-0 w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-colors text-center"
            >
              Ask Ai-Bacaan
            </Link>

            <Link 
              href="/show-surah/al-fatihah" 
              passHref
              className="lg:w-max shrink-0 w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 transition-colors text-center"
            >
              Mulai AL-Fatihah
            </Link>
          </div>
          
          <div className="flex items-center gap-1">
            <small className="font-normal text-gray-700">
              <a
                href="https://litequran.net/"
                className="hover:text-gray-900 transition-colors underline"
              >
                Terjemahan dari litequran
              </a>
            </small>
          </div>
          
          <small className="font-normal text-gray-700">
            <a
              href="/kontak"
              className="hover:text-gray-900 transition-colors underline"
            >
              umpan balik
            </a>
          </small>
        </div>
      </div>
    </header>
  );
}

export default Hero;