// components/ContactSection.jsx
"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/button'; 

const socialLinks = [
  { name: 'Email', icon: 'mdi:email-outline', href: 'mailto:nandareski33@gmail.com' },
  { name: 'GitHub', icon: 'mdi:github', href: 'https://github.com/Nanda4356' },
  { name: 'LinkedIn', icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/nanda-rezqy-342556393?trk=contact-info' }, 
  { name: 'WhatsApp', icon: 'mdi:phone', href: 'https://wa.me/qr/BXCRHXP7FFY7E1' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 55, 
      damping: 18,
      staggerChildren: 0.15
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactSection() {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulir berhasil dikirim (Simulasi)!');
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      <motion.div 
        className="max-w-7xl w-full mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary-500">
            Mari Berkolaborasi
          </h2>
          <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Kontak
          </h1>
          <hr className="w-20 h-1 bg-primary-500 border-none mx-auto mt-4"/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl">
          
          <motion.div 
            className="lg:col-span-1 space-y-8"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white border-b border-primary-500 pb-3">
              Detail Kontak
            </h3>
            
            <p className="text-gray-400 leading-relaxed">
              Saya secara aktif mencari peluang kerja dan proyek kolaborasi. Sampaikan detail proyek Anda dan mari kita wujudkan!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition"
                >
                  <Icon icon={link.icon} className="text-2xl text-primary-500" />
                  <Link href={link.href} className="text-lg font-medium text-white hover:text-primary-500 transition">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-white mb-6 border-b border-primary-500 pb-3">
              Kirimkan Pesan
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none transition duration-200"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none transition duration-200"
                  placeholder="email@contoh.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Pesan Anda</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-primary-500 focus:border-primary-500 focus:ring-2 outline-none transition duration-200"
                  placeholder="Jelaskan kebutuhan Anda..."
                ></textarea>
              </div>

              <Button 
                type="submit"
                className="w-full inline-flex items-center justify-center h-12 px-6 py-2 text-base font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition shadow-lg transform hover:-translate-y-0.5"
              >
                Kirim Pesan <Icon icon="mdi:send" className="w-5 h-5 ml-2"/>
              </Button>

            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}