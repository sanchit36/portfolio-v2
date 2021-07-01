import Head from "next/head";
import Footer from "../components/Footer/Footer";
import About from "../components/sections/About/About";
import Banner from "../components/sections/Banner/Banner";
import Contact from "../components/sections/Contact/Contact";
import ProjectList from "../components/sections/ProjectList/ProjectList";
import axios from "../axios";

export default function HomePage({ intro, about, projects }) {
  return (
    <div>
      <Head>
        <title>Sanchit Bhadgal | Portfolio</title>
        <meta
          name="description"
          content="Sanchit Bhadgal is a full-stack web developer, Having knowledge of Reactjs, Nextjs and Django"
        />
      </Head>
      <main>
        <Banner intro={intro} />
        <About about={about} />
        <ProjectList projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res1 = await axios.get("project");
  const res2 = await axios.get("intro/1");
  const res3 = await axios.get("about/1");

  const projects = res1.data;
  const intro = res2.data;
  const about = res3.data;

  return {
    props: { projects, intro, about },
  };
}
