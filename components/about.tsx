"use client";

import ProfileAbout from "../assets/images/ProfileAbout.jpg";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "akar-icons:react-fill", link: "#" },
  { name: "Next.js", icon: "simple-icons:nextdotjs", link: "#" },
  { name: "TypeScript", icon: "simple-icons:typescript", link: "#" },
  { name: "JavaScript", icon: "mdi:language-javascript", link: "#" },
  { name: "Laravel", icon: "teenyicons:laravel-solid", link: "#" },
  { name: "NodeJS", icon: "simple-icons:nodedotjs", link: "#" },
  { name: "C++", icon: "simple-icons:cplusplus", link: "#" },
  { name: "SASS", icon: "simple-icons:sass", link: "#" },
  { name: "TailwindCSS", icon: "simple-icons:tailwindcss", link: "#" },
];

const hobbies = [
  { name: "Gaming", icon: "fluent:games-20-filled" },
  { name: "Listening to music", icon: "fluent:headphones-sound-wave-24-filled" },
  { name: "Sport", icon: "fluent:sport-24-filled" },
  { name: "Organiztion", icon: "fluent:organization-24-filled" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 50, 
      damping: 15,
      mass: 0.8
    } 
  },
};

const skillGridVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const SkillIcon = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div 
    variants={itemVariants}
    className="flex flex-col items-center space-y-2 p-3 bg-gray-700/50 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-700"
  >
    <Icon icon={icon} className="text-3xl text-primary-500" />
    <span className="text-xs font-medium text-gray-300">{name}</span>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen min-w-full bg-gray-950 text-white flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
      <div className="max-w-7xl w-full mx-auto space-y-18">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Profil dan Kompetensi
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tentang Saya
          </h1>
          <hr className="w-20 h-1 bg-primary-500 border-none mx-auto mt-4" />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6 flex flex-col items-center"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary-500 shadow-xl">
              <Image
                src={ProfileAbout}
                alt="Nanda Profile"
                width={150}
                height={150}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            <h3 className="text-2xl font-bold text-white">Nanda Rezqy</h3>
            <span className="text-primary-500 font-medium">
              Junior Web Developer
            </span>

            <p className="mt-2 text-gray-400 text-center leading-relaxed text-sm">
              Seorang siswa SMK Negeri 1 Purwosari berkonsentrasi keahlian RPL (Rekayasa Perangkat Lunak). Saya terbiasa mengerjakan berbagai proyek yang membutuhkan pemikiran logis dan berpikir kreatif. Saya ingin merasakan bekerja bersama tim dalam hal pengembangan web. Motivasi utama saya adalah menggunakan keterampilan ini sebagai fondasi untuk berkontribusi bagi industri dan komunitas.
            </p>
            
            <div className="w-full pt-4">
              <h4 className="text-lg font-semibold text-primary-500 mb-3 border-b border-gray-700 pb-2 text-left">
                Hobi
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="flex items-center space-x-2 bg-gray-700 text-gray-300 text-sm py-1.5 px-3 rounded-full font-medium"
                  >
                    <Icon icon={hobby.icon} className="text-base text-primary-400" />
                    <span>{hobby.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-10">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-primary-500 pb-3">
                Tech Stack & Keahlian
              </h2>
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
                variants={skillGridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {skills.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-800 p-8 rounded-xl shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-primary-500 pb-3">
                Pendidikan & Pencapaian
              </h2>
              <div className="space-y-9 text-gray-400"></div>
              <p>
                <strong className="text-primary-500">TK IT Kholafiyah An Nur</strong> (2014 - 2015)
                <br />
                <span className="text-gray-500 text-sm italic"><i className="bi bi-geo-alt-fill"></i> Karangmenggah, Wonorejo Pasuruan.</span>
              </p>
              <p>
                <br />
                <strong className="text-primary-500">SD Negeri 1 Bakalan</strong> (2015 - 2021)
                <br />
                <span className="text-gray-500 text-sm italic"><i className="bi bi-geo-alt-fill"></i> Bakalan, Purwosari Pasuruan</span>
              </p>
              <p>
                <br />
                <strong className="text-primary-500">SMP Negeri 1 Purwosari</strong> (2021 - 2024)
                <br />
                <span className="text-gray-500 text-sm italic"><i className="bi bi-geo-alt-fill"></i> Jl Puntir, Purwosari Pasuruan.</span>
              </p>
              <p>
                <br />
                <strong className="text-primary-500">SMK Negeri 1 Purwosari</strong> (2024 - Sekarang)
                <br />
                <span className="text-gray-500 text-sm italic">Rekayasa Perangkat Lunak (RPL)</span>
                <br />
                <span className="text-gray-500 text-sm italic"><i className="bi bi-geo-alt-fill"></i> Purwosari, Kabupaten Pasuruan</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
