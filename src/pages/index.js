import Head from "next/head";
import Footer from "../components/Footer/Footer";
import About from "../components/sections/About/About";
import Banner from "../components/sections/Banner/Banner";
import Contact from "../components/sections/Contact/Contact";
import ProjectList from "../components/sections/ProjectList/ProjectList";
import { intro } from "src/data/intro";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>{intro.name} | Portfolio</title>
        <meta
          name="description"
          content="{intro.name} is a full-stack web developer, Having knowledge of Reactjs, Nextjs and ExpressJS"
        />
      </Head>
      <main>
        <Banner />
        <About />
        <ProjectList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
