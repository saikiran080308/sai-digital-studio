import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Sparkles,
  Mail,
  Phone,
  Menu,
  X,
  ExternalLink,
  Terminal,
  Database,
  Palette,
} from "lucide-react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Services",
    "Skills",
    "Projects",
    "Contact",
  ];

  const skills = [
    { name: "HTML", type: "Frontend", symbol: "</>" },
    { name: "CSS", type: "Frontend", symbol: "#" },
    { name: "JavaScript", type: "Programming", symbol: "JS" },
    { name: "React", type: "Frontend", symbol: "⚛" },
    { name: "Python", type: "Programming", symbol: "Py" },
    { name: "Java", type: "Programming", symbol: "Ja" },
    { name: "C", type: "Programming", symbol: "C" },
    { name: "SQL", type: "Database", symbol: "DB" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-xl font-bold tracking-tight"
          >
            Sai Kiran Digital World
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-white/10 bg-black/95 md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/5 py-4 text-sm text-gray-300 hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <main
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Ambient lights */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />
        </div>

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32">

          <div className="max-w-5xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 backdrop-blur-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              Available for creative projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-6xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl md:text-8xl lg:text-9xl"
            >
              I build
              <br />

              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                digital
              </span>

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                experiences.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-10 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg"
            >
              I'm Sai — a developer focused on building modern websites,
              interactive React applications and digital experiences that
              combine clean engineering with strong visual design.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:-translate-y-1"
              >
                Explore my work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 font-semibold transition hover:-translate-y-1 hover:border-cyan-400/30"
              >
                Let's talk
              </a>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-gray-600"
            >
              <span>React</span>
              <span>•</span>
              <span>JavaScript</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>C</span>
              <span>•</span>
              <span>UI / UX</span>
            </motion.div>

          </div>
        </section>
      </main>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="relative border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                About Me
              </p>

              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              >
                Turning ideas into
                <span className="text-gray-500">
                  {" "}digital experiences.
                </span>
              </motion.h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                I'm a developer who enjoys combining technology and design
                to create websites and applications that feel modern,
                useful and memorable.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                My focus is on writing clean code, learning new technologies
                and turning ideas into polished digital products.
              </p>

            </div>

            {/* About Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
            >

              <div className="mb-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold text-cyan-400">
                  S
                </div>

                <div>
                  <h3 className="font-semibold">
                    Sai Kiran Digital World
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Developer • Designer • Creator
                  </p>
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <StatCard number="08+" text="Technologies" />

                <StatCard number="03" text="Projects" />

                <StatCard number="∞" text="Ideas to build" />

                <StatCard number="24/7" text="Learning" />

              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="relative border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Services
          </p>

          <h2 className="max-w-3xl text-4xl font-bold sm:text-5xl md:text-6xl">
            What I can
            <span className="text-gray-500"> build.</span>
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <ServiceCard
              icon={<Globe size={25} />}
              title="Web Development"
              text="Modern responsive websites using HTML, CSS, JavaScript and React."
            />

            <ServiceCard
              icon={<Code2 size={25} />}
              title="Application Development"
              text="Programming projects and applications using C, Python and Java."
            />

            <ServiceCard
              icon={<Palette size={25} />}
              title="UI / UX Design"
              text="Clean, modern and interactive digital experiences with attention to detail."
            />

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className="relative border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Skills & Technologies
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tools I use to
              <span className="text-gray-500">
                {" "}build ideas.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A growing toolkit focused on modern web development,
              programming and creative digital experiences.
            </p>

          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {skills.map((skill, index) => (

              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 font-bold text-cyan-400">
                    {skill.symbol}
                  </div>

                  <span className="text-xs text-gray-600">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-7 text-lg font-semibold">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {skill.type}
                </p>

                <div className="mt-6 h-px w-full bg-white/10">
                  <div className="h-px w-[70%] bg-cyan-400" />
                </div>

              </motion.div>

            ))}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="relative border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Projects
          </p>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Things I've
              <span className="text-gray-500">
                {" "}built.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-gray-500">
              A collection of my web development and programming projects.
            </p>

          </div>

          {/* Three Projects */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {/* PROJECT 1 */}
            <ProjectCard
              number="01"
              title="Birthday Wishes"
              description="A beautiful interactive birthday wishes website created using HTML, CSS and JavaScript."
              tags={["HTML", "CSS", "JavaScript"]}
              link="https://magnetic-silver-jhsbx3lg.edgeone.dev/"
            />

            {/* PROJECT 2 */}
            <ProjectCard
              number="02"
              title="Student Management System"
              description="A C programming project for managing student records with options to add, search, update and delete student information."
              tags={["C", "Programming", "CLI"]}
            />

            {/* PROJECT 3 */}
            <ProjectCard
              number="03"
              title="Python Application"
              description="A Python programming project demonstrating programming logic, functions, user input and application development."
              tags={["Python", "Programming"]}
            />

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="relative border-t border-white/10"
      >
        <div className="mx-auto max-w-6xl px-6 py-32">

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 sm:p-12 lg:p-16">

            <div className="relative grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">

              <div>

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
                  Contact
                </p>

                <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Let's build something
                  <span className="text-gray-500">
                    {" "}great together.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                  Have an idea, project or website in mind?
                  Let's turn it into a modern digital experience.
                </p>

                <div className="mt-10 flex flex-col gap-4">

                  <a
                    href="mailto:nnsaikiran08@gmail.com"
                    className="flex w-fit items-center gap-4 text-gray-300 hover:text-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Mail size={19} className="text-cyan-400" />
                    </span>

                    <span>
                      <span className="block text-xs text-gray-600">
                        Email
                      </span>

                      <span className="text-sm sm:text-base">
                        nnsaikiran08@gmail.com
                      </span>
                    </span>
                  </a>

                  <a
                    href="tel:9059457459"
                    className="flex w-fit items-center gap-4 text-gray-300 hover:text-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Phone size={19} className="text-cyan-400" />
                    </span>

                    <span>
                      <span className="block text-xs text-gray-600">
                        Phone
                      </span>

                      <span className="text-sm sm:text-base">
                        9059457459
                      </span>
                    </span>
                  </a>

                </div>

              </div>

              <a
                href="mailto:nnsaikiran08@gmail.com"
                className="group flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:scale-105"
              >
                Start a project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © 2026 Sai Kiran Digital World. Built with React.
      </footer>

    </div>
  );
}

/* ================= STAT CARD ================= */

function StatCard({ number, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <div className="text-3xl font-bold text-white">
        {number}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {text}
      </p>
    </div>
  );
}

/* ================= SERVICE CARD ================= */

function ServiceCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30"
    >

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {text}
      </p>

    </motion.div>
  );
}

/* ================= PROJECT CARD ================= */

function ProjectCard({
  number,
  title,
  description,
  tags,
  link,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/30"
    >

      {/* Number */}
      <div className="absolute right-6 top-6 text-5xl font-bold text-white/5">
        {number}
      </div>

      <div className="relative">

        {/* Project Preview */}
        <div className="mb-8 h-48 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]">

          {/* Browser top */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">

            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />

            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

          </div>

          {/* Preview */}
          <div className="flex h-[calc(100%-45px)] items-center justify-center">

            <div className="text-center">

              <Code2
                size={42}
                strokeWidth={1.5}
                className="mx-auto text-cyan-400"
              />

              <p className="mt-3 text-sm font-medium text-gray-400">
                {title}
              </p>

              <p className="mt-1 text-xs text-gray-600">
                {tags.join(" • ")}
              </p>

            </div>

          </div>

        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">

          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tag}
            </span>
          ))}

        </div>

        {/* Live project button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-400"
          >
            View Live Project
            <ExternalLink size={16} />
          </a>
        )}

      </div>
    </motion.div>
  );
}

export default App;