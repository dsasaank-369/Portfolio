import React, { useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import BIRDS from "vanta/dist/vanta.birds.min";

function App() {
  const vantaRef = useRef(null);
  let vantaEffect = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      const THREE = (await import("three")).default;

      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: 0x9d9d4c,
          birdSize: 1.2,
          quantity: 2.0,
          THREE: THREE,
        });
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);


  return (
    <div className="min-h-screen" ref={vantaRef}>
      <section className="min-h-screen relative flex items-center justify-center text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-blue-400">Tara Sasaank</span> Desu</h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com"
              className="hover:text-blue-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-blue-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={goDown}
          >
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 flex justify-center ">
        <div className="max-w-5xl w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-lg p-10 text-white border-1 rounded-2xl">
          <h2 className="text-4xl font-extrabold text-center mb-8 animate-fadeIn">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Image with Glow */}
            

            {/* Description */}
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-gray-300 animate-fadeIn">
                I'm a passionate{" "}
                <span className="text-blue-400 font-semibold">
                  full-stack developer
                </span>{" "}
                with 2 years of experience building scalable and
                high-performance web applications. I specialize in
                <span className="text-blue-400 font-semibold">
                  {" "}
                  React, Node.js, and Adobe Target
                </span>
                .
                <br />
                <br />
                Outside of work, you'll find me exploring new corners of the world. Coming to my hobbies I play chess and love solving jigsaw puzzles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section className="py-20 px-4  text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-12  animate-fadeIn">
      Featured Projects
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <ProjectCard
        title="E-commerce Platform"
        description="A full-featured online store built with React and Node.js"
        image="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop"
        technologies={["React", "Node.js", "MongoDB"]}
        link="https://project1.example.com"
        className="hover:scale-105 transition-transform duration-300"
      />

      {/* Project 2 */}
      <ProjectCard
        title="Task Management App"
        description="Real-time collaborative task management application"
        image="https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=500&h=300&fit=crop"
        technologies={["React", "Firebase", "Tailwind"]}
        link="https://project2.example.com"
        className="hover:scale-105 transition-transform duration-300"
      />

      {/* Project 3 */}
      <ProjectCard
        title="Weather Dashboard"
        description="Real-time weather tracking with interactive maps"
        image="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop"
        technologies={["React", "OpenWeather API", "ChartJS"]}
        link="https://project3.example.com"
        className="hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <SkillBadge name="HTML" level="Expert" />
            <SkillBadge name="CSS" level="Expert" />
            <SkillBadge name="Node.js" level="Advanced" />
            <SkillBadge name="MongoDB" level="Advanced" />
            <SkillBadge name="React" level="Advanced" />
            <SkillBadge name="JS" level="Advanced" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 p-6 rounded-lg flex-1">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-6">
              Fill the form, and I will get back to you.
            </p>

            <div className="flex items-center gap-4 mb-4">
              <Phone className="text-blue-400" size={20} />
              <p>+91 9063682937</p>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <Mail className="text-blue-400" size={20} />
              <p>desusasaank369@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" size={20} />
              <p>Hyderabad</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg flex-1">
            <form
              action="https://formsubmit.co/desusasaank369@gmail.com"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="hidden"
                name="_next"
                value="https://dsasaank-369.github.io/port/thanks.html"
              />
              <input type="hidden" name="_subject" value="New submission!" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
              />

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-gray-400">
        <div className="max-w-4xl mx-auto text-center">
          <p>© 2025 Tara Sasaank. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function goDown() {
  const nextSection = document.querySelector("section:nth-of-type(2)");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

export default App;
