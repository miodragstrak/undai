import Hero from "./components/Hero";
import WhatYouLearn from "./components/WhatYouLearn";
import Steps from "./components/Steps";
import Programs from "./components/Programs";
import WhyUnAI from "./components/WhyUnAI";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Collaboration from "./components/Collaboration";
import Instructor from "./components/Instructor";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatYouLearn />
      <Collaboration />
      <Instructor />
      <WhyUnAI />
      <FinalCTA />
      <Footer />
    </>
  );
}
