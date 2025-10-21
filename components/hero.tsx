import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import * as motion from "motion/react-client";
import { FaInstagram, FaGithub, FaTiktok, FaPhone } from "react-icons/fa";
import ProfileHero from "../assets/images/ProfileHome.jpg";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full gap-12 lg:gap-24 items-center flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
            <span className="text-primary-500 font-normal">Hii, I'm</span>
            <br />
            <span className="text-black text-6xl sm:text-7xl">
              Nanda Rezqy Agyun Putra
            </span>
          </h1>

          <div className="flex flex-col space-y-3">
            <hr className="w-16 h-0.5 bg-primary-500 border-none" />
            <p className="text-xl text-gray-600">
              Saya adalah{" "}
              <strong className="font-semibold">Junior Web Developer</strong>
            </p>
          </div>

          <div className="flex space-x-4 pt-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-primary-500 transition"
            >
              <FaInstagram size={24} />
            </Link>
            <Link
              href="https://github.com/Nanda4356"
              className="text-gray-600 hover:text-primary-500 transition"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="+62-857-7827-8119"
              className="text-gray-600 hover:text-primary-500 transition"
            >
              <FaPhone size={24} />
            </Link>
            <Link
              href="https://www.tiktok.com/@rezqynda?is_from_webapp=1&sender_device=pc"
              className="text-gray-600 hover:text-primary-500 transition"
            >
              <FaTiktok size={24} />
            </Link>
          </div>

          <div className="pt-6">
            <Button
              as={Link}
              href="" //diisi link cv
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Download CV
            </Button>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={box}
        >
          <div className="flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src={ProfileHero}
                alt="Nanda Profile"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
const box = {
  borderRadius: 5,
};
