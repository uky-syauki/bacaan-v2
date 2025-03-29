// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Home from "./home";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </>
  );
}
