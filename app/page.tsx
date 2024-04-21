import BlogList from "@/components/main/BlogList";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Head from 'next/head'; // Import Head component from next/head

export default function Home() {
  return (
    <main className="h-full w-full">
      {/* Include the Head component */}
      <Head>
        {/* Add the viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Other meta tags, title, etc. */}
        
      </Head>
      {/* Your page content */}
      <div className='flex flex-col  gap-20'>
        <Hero />
        <Skills/>
        <BlogList/>
        {/* <Encryption/> */}
        <Projects/>
        <Footer/>
      </div>
    </main>
  );
}
