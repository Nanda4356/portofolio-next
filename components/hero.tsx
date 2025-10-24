// components/HeroSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { motion } from "framer-motion"; 
import { FaInstagram, FaGithub, FaTiktok, FaPhone } from "react-icons/fa";
import ProfileHero from "../assets/images/ProfileHome.jpg";

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 10 } }
};

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white  flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full gap-12 lg:gap-24 items-center flex flex-col-reverse lg:flex-row">
        
        <motion.div 
          className="flex flex-col space-y-6 lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black"
          >
            <span className="text-primary-500 font-normal">Hii, I'm</span>
            <br />
            <span className="text-black text-6xl sm:text-7xl">
              Nanda Rezqy Agyun Putra
            </span>
          </motion.h1>

          <motion.div 
            variants={itemVariants} 
            className="flex flex-col space-y-3"
          >
            <hr className="w-16 h-0.5 bg-primary-500 border-none" />
            <p className="text-xl text-gray-300">
              <strong className="font-semibold text-primary-300">Junior Web Developer</strong>
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants} 
            className="flex space-x-4 pt-4"
          >
            {/* Ikon Social Media */}
            <Link
              href="https://www.instagram.com/nyndaoo?igsh=MTZkcXpqNDJzZXRhOA=="
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://github.com/Nanda4356"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://wa.me/qr/BXCRHXP7FFY7E1"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            >
              <FaPhone size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@rezqynda?is_from_webapp=1&sender_device=pc"
              className="text-gray-400 hover:text-primary-500 transition-colors duration-300"
            >
              <FaTiktok size={24} />
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6">
            <Button
              as={Link}
              href="#" // Isi link CV di sini
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Unduh CV
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Kolom Kanan: Gambar Profil */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end mb-8 lg:mb-0 lg:w-1/2"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-2 shadow-4xl"
          >
            <Image
              src={ProfileHero}
              alt="Nanda Profile"
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}