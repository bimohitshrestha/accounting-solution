import HeroSection from "./homesection/HeroSection";
import HereForYou from "./homesection/HereForYour";
import Introduces from "./homesection/Introduces";
import Advertisement from "./homesection/Advertisement";
import KeepingUp from "./homesection/KeepingUp";
import WhyChooseUs from "./homesection/WhyChooseUs";
import Trust from "./homesection/Trust";
import LetsTalk from "./homesection/LetsTalk";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <HereForYou />
      <Advertisement />
      <Introduces />
      <KeepingUp />
      <WhyChooseUs />
      <Trust />
      <LetsTalk />
    </div>
  );
}
