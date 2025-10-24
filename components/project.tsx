// components/ProjectSection.jsx
"use client";

import Link from 'next/link';
import Image from 'next/image'; 
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/button'; 

import Pict1 from '../assets/images/project/1.png'
import Pict2 from '../assets/images/project/2.png'
import Pict3 from '../assets/images/project/3.png'
import Pict4 from '../assets/images/project/4.png'
import Pict5 from '../assets/images/project/5.png'

const projects = [
  {
    title: "Capcut V-Ndae",
    description: "Desain Prototype aplikasi mobile tentang alat editor yang berfungsi untuk mempermudah pengguna dalam membuat atau mencari sebuah template proyek editing",
    tech: ["Figma", "Iconify"],
    github: "#",
    live: "#",
    image: Pict1,
  },
  {
    title: "Sewale Jowo -Web Pembelian Hewan Kurban",
    description: "Tugas akhir kelas X yang membuat web eccomerce tentang penjualan Hewan Kurban, dan dilengkapi oleh form yang sudah terhubung oleh database.",
    tech: ["PHP", "CSS", "TiltJs"],
    github: "https://github.com/Nanda4356/Sewale-Jawa",
    live: "https://nanda4356.github.io/Sewale-Jawa/",
    image: Pict2,
  },
  {
    title: "Web statis HTML CSS -Web Berita",
    description: "Tugas kelas X yang membuat sebuah web berita menggunakan html dan css dasar minimal membuat 2 halaman tampilan.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Nanda4356/Web-Berita",
    live: "https://nanda4356.github.io/Web-Berita/",
    image: Pict3,
  },
  {
    title: "Yo Jan -Web Portofolio React",
    description: "Web Portofolio ReactJs dengan menggunakan Tailwindcss + libraryui DaisyUI + ReactBits untuk beberapa animasi.",
    tech: ["ReactJs", "ReactBits", "Tailwindcss", "DaisyUI"],
    github: "https://github.com/Nanda4356/MyPortofolio",
    live: "https://my-portofolio-acxl.vercel.app/",
    image: Pict5,
  },
  {
    title: "Yo Jan -Web Portofolio Laravel",
    description: "Web Portofolio Laravel dengan menggunakan Tailwindcss + libraryui DaisyUI + Iconify untuk beberapa Icon(dalam perbaikan responsive) .",
    tech: ["Laravel", "Tailwindcss", "DaisyUI", "Iconify"],
    github: "https://github.com/Nanda4356/web-static-porto",
    live: "#",
    image: Pict4,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 45,
      damping: 12,
      mass: 1
    } 
  }
};

export default function ProjectSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-7xl w-full mx-auto space-y-16">
        
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-500 text-center">
            Karya Pilihan
          </h2>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center"
          >
            Proyek yang Pernah Dibuat
          </motion.h1>
          <hr className="w-20 h-1 bg-primary-500 border-none mx-auto mt-4"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-800 p-6 rounded-xl shadow-2xl space-y-4 border border-gray-700 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              
              <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden border border-gray-700">
                  <Image
                      src={project.image}
                      alt={`Thumbnail proyek ${project.title}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                  />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium text-primary-500 bg-gray-700/50 rounded-full border border-primary-500 hover:bg-gray-700 transition">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                
                <Button 
                  as={Link} 
                  href={project.live} 
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition shadow-lg"
                >
                  <Icon icon="akar-icons:arrow-up-right" className="w-4 h-4 mr-2"/> Live Demo
                </Button>
                
                <Link 
                  href={project.github} 
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-lg hover:bg-gray-600 transition border border-gray-600"
                >
                  <Icon icon="mdi:github" className="w-5 h-5 mr-2"/> GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}