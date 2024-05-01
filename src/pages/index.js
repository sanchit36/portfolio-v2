import Head from "next/head";
import Footer from "../components/Footer/Footer";
import About from "../components/sections/About/About";
import Banner from "../components/sections/Banner/Banner";
import Contact from "../components/sections/Contact/Contact";
import ProjectList from "../components/sections/ProjectList/ProjectList";
import axios from "../axios";

export default function HomePage({ intro, about, projects, links }) {
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
        <About about={about} links={links} />
        <ProjectList projects={projects} />
        <Contact />
      </main>
      <Footer links={links} />
    </div>
  );
}

export async function getStaticProps() {
  const projects = (await axios.get("project")).data;
  const links = (await axios.get("social-links")).data;
  const intro = (await axios.get("intro")).data;
  const about = (await axios.get("about")).data;

  return {
    props: { projects, links, intro, about },
  };
}
