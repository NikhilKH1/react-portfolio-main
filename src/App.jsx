import React from 'react'
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Technologies from "./components/Technologies.jsx"
import Experience from "./components/Experience.jsx"
import Contact from "./components/Contact.jsx"
// import Certifications from './components/Certifications.jsx'
import Projects from './components/Projects.jsx'
import Recommendation from './components/Recommendation.jsx'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        {/* <Certifications /> */}
        <Recommendation/>
        <Contact />
        <Analytics />
      </div>
    </div>
  );
};
export default App;