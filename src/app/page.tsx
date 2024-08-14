import HomeAbout from "./home/home-about";
import Intro from "./home/home-intro";
import SectionDivider from "@/components/divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <HomeAbout />
    </main>
  );
}
