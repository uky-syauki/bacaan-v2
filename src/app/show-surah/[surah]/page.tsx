import { Navbar, Footer } from '@/components';
import ShowSurah from '../ShowSurah';

export default async function SurahPage({ params }: { params: { surah: string } }) {
  const surah = params.surah;

  return (
    <>
      <Navbar />
      <ShowSurah surah={surah} />
      <Footer />
    </>
  );
}