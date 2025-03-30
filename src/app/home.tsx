"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { ArrowSmallDownIcon } from "@heroicons/react/24/solid";
import MenuSurah from "@/components/menu-surah";

export function Home() {
  return (
    <section className="grid min-h-screen place-items-center p-8 bg-black">
      <Typography variant="h6" className="mb-2">
        Latest Blog Posts
      </Typography>

      <Typography variant="h1" className="mb-2">
        Trends News
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        Intro
      </Typography>
      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        Al-Qur&apos;an adalah kitab suci yang penuh dengan pelajaran hidup yang mendalam. Di dalamnya terkandung peringatan agar kita selalu waspada, kabar gembira yang menenangkan hati, serta ancaman bagi yang lalai. Kitab ini mengajak setiap insan untuk merenung dan mengambil hikmah dari setiap ayatnya, sehingga setiap petunjuk Allah dapat menjadi pedoman dalam menjalani kehidupan yang penuh keberkahan.
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[30px] lg:text-[48px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        Visi kami
      </Typography>

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        Visi kami adalah menyediakan terjemahan Al-Qur&apos;an ke dalam bahasa Indonesia secara akurat dan mudah dipahami. Kami ingin memastikan bahwa setiap orang, terutama yang tidak menguasai bahasa Arab, dapat mengambil pelajaran, peringatan, kabar gembira, serta ancaman yang terkandung dalam Al-Qur&apos;an. Dengan demikian, website ini diharapkan menjadi jembatan yang menghubungkan setiap insan Indonesia dengan hikmah dan petunjuk Ilahi, sehingga dapat menginspirasi dan membimbing kehidupan sehari-hari.
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[25px] lg:text-[30px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        QS. AL-MAIDAH (5:16)
      </Typography>

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        <b><i>
        &quot;Dengan Kitab itulah Allah memberi petunjuk kepada orang yang mengikuti keridaan-Nya ke jalan keselamatan, dan (dengan Kitab itu pula) Allah mengeluarkan orang itu dari gelap gulita kepada cahaya dengan izin-Nya, dan menunjukkan ke jalan yang lurus.&quot;</i></b> <br></br>
        Ayat ini menyampaikan bahwa Al-Qur&apos;an adalah sumber cahaya yang membimbing orang-orang beriman menuju jalan yang lurus dan keselamatan.
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[25px] lg:text-[30px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        QS. Yusuf (12:111)
      </Typography>

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        <b><i>
        &quot;Sungguh, dalam kisah-kisah itu terdapat pelajaran bagi orang-orang yang mempunyai akal.&quot;</i></b> <br></br>
        Ayat ini menegaskan bahwa setiap kisah dalam Al-Qur&apos;an menyimpan hikmah dan pelajaran yang mendalam bagi mereka yang mau merenung dan belajar.
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[25px] lg:text-[30px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        QS. Al-Hasyr (59:21)
      </Typography>

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        <b><i>
        &quot;Sekiranya Kami turunkan Al-Qur&apos;an ini kepada sebuah gunung, pasti engkau akan melihatnya tunduk terpecah belah karena takut kepada Allah. Perumpamaan-perumpamaan itu Kami buat untuk manusia agar mereka berpikir.&quot;
        </i></b> <br></br>
        Ayat ini menggambarkan betapa dahsyatnya kekuatan dan pengaruh Al-Qur&apos;an dalam menundukkan keangkuhan serta mendorong manusia untuk terus berpikir dan belajar.
      </Typography>

      <Typography
        color="blue-gray"
        className="mx-auto w-full text-[25px] lg:text-[30px] font-bold leading-[45px] lg:leading-[60px] lg:max-w-2xl !text-white/70"
      >
        QS. Al-Ankabut (29:43)
      </Typography>

      <Typography
        variant="lead"
        color="gray"
        className="max-w-3xl mb-20 text-justify text-gray-500"
      >
        <b><i>
        &quot;Dan perumpamaan-perumpamaan itu Kami buat untuk manusia, tetapi tidak ada yang memahaminya kecuali orang-orang yang berilmu.&quot;
        </i></b> <br></br>
        Melalui ayat ini, kita diajak untuk terus meningkatkan ilmu pengetahuan dan pemahaman agar dapat menggali makna yang terkandung dalam setiap perumpamaan dan ajaran Al-Qur&apos;an.
      </Typography>

      <div className="container my-auto grid grid-cols-1 gap-x-8 gap-y-16 items-start lg:grid-cols-3">
        <h3>Hello dunia!</h3>
      </div>
      <Button
        variant="text"
        size="lg"
        color="gray"
        className="flex items-center gap-2 mt-24"
      >
        {/* <ArrowSmallDownIcon className="h-5 w-5 font-bold text-gray-900" /> */}
        Daftar Surah
      </Button>

      <MenuSurah />
    </section>
  );
}

export default Home;
