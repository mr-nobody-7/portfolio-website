import { AboutMe } from "./_components/AboutMe";
import { Banner } from "./_components/Banner";
import { Skills } from "./_components/Skills";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
    </div>
  );
}
