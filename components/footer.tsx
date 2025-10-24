// components/Footer.jsx
"use client";

import Link from 'next/link';
import { FaInstagram, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const footerNav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { icon: FaInstagram, href: 'https://www.instagram.com/nyndaoo?igsh=MTZkcXpqNDJzZXRhOA==' },
  { icon: FaGithub, href: 'https://github.com/Nanda4356' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/nanda-rezqy-342556393?trk=contact-info' }, 
  { icon: FaWhatsapp, href: 'https://wa.me/qr/BXCRHXP7FFY7E1' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className="bg-gray-900 text-gray-400 border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Logo & Deskripsi */}
        <div className="col-span-2 md:col-span-2 space-y-3">
          <h4 className="text-2xl font-bold text-white">Nanda Rezqy Agyun Putra</h4>
          <p className="text-sm text-gray-500 max-w-xs">
            Fun ngoding bareng Yo Jann
          </p>
        </div>

        {/* Navigasi*/}
        <nav className="hidden md:block col-span-1 space-y-3">
          <h5 className="text-md font-semibold text-white mb-2">Navigation</h5>
          {footerNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-sm font-normal hover:text-primary-500 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Sosial Media */}
        <div className="col-span-1 md:col-span-2 space-y-3 md:text-right">
          <div className="flex justify-start md:justify-end space-x-5">
            {socialLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-500 transition-colors duration-200"
                aria-label={item.icon.name}
              >
                <item.icon size={24} />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500 pt-1">
            Yuk ciptain sesuatuu
          </p>
        </div>
        
      </div>
      
      {/* Divider */}
      <hr className="my-8 border-gray-700" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-500 order-2 md:order-1 pt-4 md:pt-0">
          nandareski33@gmail.com
        </p>
        <p className="text-gray-500 order-1 md:order-2">
          &copy; {currentYear} Nanda Rezqy. All rights reserved.
        </p>
      </div>

    </footer>
  );
}