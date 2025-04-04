import { Navbar, Footer } from '@/components';
import ShowSurahPerkata from '../ShowSurahPerkata';

export default async function SurahPage({ params }: { params: { surah: string } }) {
  const surah = params.surah;

  return (
    <>
      <Navbar />
      <ShowSurahPerkata surah={surah} />
      <Footer />
    </>
  );
}