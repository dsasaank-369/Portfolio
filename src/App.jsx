import React, { useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Phone,
  MapPin,
  FileDown,
  GraduationCap,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import BIRDS from "vanta/dist/vanta.birds.min";
import compilerImage from ".././compiler.png";
import contestImage from ".././contest-tracker.png";
import sortImage from ".././sort.png";

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
        <div className="absolute w-[380px] h-[380px] border-4 border-blue-400 rounded-full flex items-center justify-center opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-blue-400">Tara Sasaank</span> Desu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">
            Full Stack Developer
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a
              href="https://github.com/dsasaank-369/"
              className="hover:text-blue-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tarasasaankdesu/"
              className="hover:text-blue-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:desusasaank369@gmail.com"
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
        <div className="max-w-5xl w-full bg-gray-900 shadow-lg p-10 text-white border-blue-400 border-1 rounded-2xl">
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
                with 2.6+ years of experience building scalable and
                high-performance web applications. I specialize in
                <span className="text-blue-400 font-semibold">
                  {" "}
                  React, Node.js, and Adobe Target
                </span>
                .
                <br />
                <br />
                Outside of work, you'll find me exploring new corners of the
                world. Coming to my hobbies I play chess and love solving jigsaw
                puzzles.
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
              title="ONLINE CODING PLATFORM"
              description="A full-featured online coding platform where you can compile your code, solve problems and get submissions history. "
              image={compilerImage}
              technologies={["React", "Node.js", "MongoDB"]}
              link="https://compiler-ue81.onrender.com/"
              className="hover:scale-105 transition-transform duration-300"
            />

            {/* Project 2 */}
            <ProjectCard
              title="Contest tracker"
              description="Get upcoming contests of platforms like Leetcode, Codechef and Codeforces."
              image={contestImage}
              technologies={["React", "Node", "API"]}
              link="https://cp-tracker-vx3n.onrender.com/"
              className="hover:scale-105 transition-transform duration-300"
            />

            {/* Project 3 */}
            <ProjectCard
              title="Sorting visualizer"
              description="Visualize 6 sorting algorithms with speed controlled option and get time and space complexities."
              image={sortImage}
              technologies={["React", "JS", "HTML", "CSS"]}
              link="https://sorting-visualizer-texw.onrender.com/"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* {Roadmap Section} */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 animate-fadeIn">
            My Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-400"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2025 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right space-y-2">
                  <h3 className="text-2xl font-bold text-blue-400">2025</h3>
                  <p className="text-2xl font-bold text-blue-200">Bounteous</p>
                  <p className="text-gray-300">Senior Software Engineer</p>
                  <p className="text-sm text-gray-400">
                    Built scalable React components and WCAG features, improving
                    sign-ups by 20%.
                    <br />
                    Automated Adobe Target checks and led 500+ AEM pages,
                    cutting delivery time by 40%.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              {/* 2025 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right space-y-2">
                  <h3 className="text-2xl font-bold text-blue-400">2025</h3>
                  <p className="text-2xl font-bold text-blue-200">Bounteous</p>
                  <p className="text-gray-300">Software Analyst</p>
                  <p className="text-sm text-gray-400">
                    Streamlined Adobe Target workflows and testing, boosting
                    rollout efficiency.
                    <br />
                    Collaborated across teams to deliver scalable, personalized
                    web solutions.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-5/12 pl-8 space-y-2">
                  <h3 className="text-2xl font-bold text-blue-400">2024</h3>
                  <p className="text-2xl font-bold text-blue-200">Bounteous</p>
                  <p className="text-gray-300">Software Engineer</p>
                  <p className="text-sm text-gray-400">
                    Built responsive web apps with React.js and optimized API
                    performance.
                    <br />
                    Contributed to AEM implementations while strengthening
                    frontend expertise.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right space-y-2">
                  <h3 className="text-2xl font-bold text-blue-400">2023</h3>
                  <p className="text-2xl font-bold text-blue-200">Bounteous</p>
                  <p className="text-gray-300">Intern</p>
                  <p className="text-sm text-gray-400">
                    Worked on MERN stack projects, building full-stack
                    applications.
                    <br />
                    Assisted with React features and learned Agile workflows.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-5/12 pl-8"></div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-5/12 pl-8 space-y-2">
                  <h3 className="text-2xl font-bold text-blue-400">2022</h3>
                  <p className="text-2xl font-bold text-blue-200">
                    Alecado Systems
                  </p>
                  <p className="text-gray-300">Intern</p>
                  <p className="text-sm text-gray-400">
                    Converted Figma designs into responsive React websites for
                    clients.
                    <br />
                    Built reusable components and optimized APIs, improving
                    efficiency by 30%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-12 flex items-center justify-center gap-4">
            <GraduationCap className="text-blue-400" size={40} />
            Education
          </h2>
          <div className="space-y-12">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-400 before:rounded-full">
              <div className="absolute -left-2 top-0 w-5 h-5 bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-blue-200">
                Bachelor of Technology
              </h3>
              <p className="text-xl text-gray-300 mt-2">
                SASTRA University, Thanjavur
              </p>
              <p className="text-l text-gray-300 mt-2">
                Information and Communication Technology
              </p>
              <p className="text-gray-400 mt-1">2019 - 2023</p>
            </div>

            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-400 before:rounded-full">
              <div className="absolute -left-2 top-0 w-5 h-5 bg-blue-400 rounded-full"></div>
              <h3 className="text-2xl font-bold text-blue-200">
                Higher Secondary Education
              </h3>
              <p className="text-xl text-gray-300 mt-2">
                Velociity Junior College, Hyderabad
              </p>
              <p className="text-l text-gray-300 mt-2">MPC</p>
              <p className="text-gray-400 mt-1">2017 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4 skills-container">
            {/* Core Frontend */}
            <div>
              <SkillBadge name="HTML" level="Expert" />
            </div>
            <div className="delay-100">
              <SkillBadge name="CSS" level="Expert" />
            </div>
            <div className="delay-200">
              <SkillBadge name="JavaScript (ES6+)" level="Advanced" />
            </div>
            <div className="delay-300">
              <SkillBadge name="React.js" level="Advanced" />
            </div>
            <div className="delay-500">
              <SkillBadge name="Angular" level="Intermediate" />
            </div>

            {/* Backend & APIs */}
            <div className="delay-700">
              <SkillBadge name="Node.js" level="Advanced" />
            </div>
            <div className="delay-1000">
              <SkillBadge name="Express.js" level="Advanced" />
            </div>
            <div className="delay-1200">
              <SkillBadge name="REST APIs" level="Advanced" />
            </div>

            {/* Databases */}
            <div>
              <SkillBadge name="MongoDB" level="Advanced" />
            </div>
            <div className="delay-200">
              <SkillBadge name="SQL" level="Intermediate" />
            </div>

            {/* Programming Languages */}
            <div className="delay-400">
              <SkillBadge name="Java" level="Intermediate" />
            </div>
            <div className="delay-600">
              <SkillBadge name="Python" level="Intermediate" />
            </div>
            <div className="delay-800">
              <SkillBadge name="C++" level="Intermediate" />
            </div>

            {/* Tools & Platforms */}
            <div>
              <SkillBadge name="Git" level="Advanced" />
            </div>
            <div className="delay-200">
              <SkillBadge name="Bitbucket" level="Advanced" />
            </div>
            <div className="delay-400">
              <SkillBadge name="AWS" level="Intermediate" />
            </div>
            <div className="delay-600">
              <SkillBadge name="Docker" level="Intermediate" />
            </div>
            <div className="delay-800">
              <SkillBadge name="Kubernetes" level="Intermediate" />
            </div>
            <div className="delay-1000">
              <SkillBadge name="Postman" level="Advanced" />
            </div>
            <div className="delay-1200">
              <SkillBadge name="Jira" level="Advanced" />
            </div>
            <div className="delay-1400">
              <SkillBadge name="Confluence" level="Advanced" />
            </div>
            <div className="delay-1600">
              <SkillBadge name="CI/CD" level="Intermediate" />
            </div>

            {/* Practices */}
            <div>
              <SkillBadge name="Agile" level="Advanced" />
            </div>
            <div className="delay-200">
              <SkillBadge name="Accessibility (WCAG)" level="Advanced" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="py-20 px-4 flex justify-center">
        <div className="max-w-5xl w-full bg-gray-900 shadow-lg p-10 text-white border-blue-400 border-1 rounded-2xl text-center">
          <h2 className="text-4xl font-extrabold mb-8 animate-fadeIn">
            My Resume
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get a detailed look at my experience, skills, and achievements.
          </p>
          <a
            href="https://drive.google.com/file/d/1N4WX1Tx0uBExWbI5h6RAfPtNEYGwzn9w/view?usp=drive_link"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors group"
          >
            <FileDown className="group-hover:animate-bounce" size={24} />
            <span>Download Resume</span>
          </a>
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
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
