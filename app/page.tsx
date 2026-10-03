import Hero from "@/components/home/Hero";
import Solutions from "@/components/home/Solutions";
import About from "@/components/home/About";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Solutions />
        <About />
      </main>
      <Footer />
    </>
  );
}
