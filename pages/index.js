import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Goal from "../components/Goal";
import Services from "../components/Service";
import Testimonials from "../components/Testimonial";
import Team from "../components/Teams";
import Company from "@/components/Company";
const Home = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="relative flex-1 lg:container text-center p-0 mx-auto overflow-x-hidden overflow-auto">
        <Hero />
        <Goal />
        <Company />

        <Services />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
