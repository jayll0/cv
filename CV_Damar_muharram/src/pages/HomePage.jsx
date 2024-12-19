// src/pages/HomePage.jsx
import React, { useEffect } from 'react';
import Welcome from '../components/Welcome.jsx';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import homeimg2 from '../assets/images/home/my_photo.svg';
import './HomePage.css'; 
import './AboutPage.css'; 

const HomePage = ({ scrollToSection }) => {
  useEffect(() => {
    const handleScroll = () => {
      const overlays = document.querySelectorAll('.text-overlay');
      const viewportHeight = window.innerHeight;

      overlays.forEach(overlay => {
        const rect = overlay.getBoundingClientRect();
        if (rect.top < viewportHeight && rect.bottom > 0) {
          overlay.classList.add('scroll-active');
        } else {
          overlay.classList.remove('scroll-active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="container all">
      <div className="homepage-flex">
        {/* Kolom kiri */}
        <div className="relative flex-1">
          {/* Teks di atas gambar kiri */}
          <div className="b text-overlay top-text">___________________</div>
          <div className="top top-text text-overlay Quattrocento">Arya Wijaya</div>
          
          {/* Bagian yang menampilkan teks "I am a" dan animasi Typed.js berdampingan */}
          <div className="top-text top2 text-overlay flex-row Quattrocento">
            <span>I am a&nbsp;</span> {/* Spasi untuk memberi jarak */}
           
            <Welcome />
            <div className="home-sci">
        <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aryawijaya6664@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://wa.link/w5jijv" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/arya-wijayaprogrammer" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

          </div>
          
          {/* Accordion */}
     
              <button
                className="text-overlay bottom-text overlay-with-border Montserrat"
                
              ><a href="https://drive.google.com/file/d/1ArmxWjgdUsmu-68T5Q_zvfnKYZu6OHvr/view?usp=sharing">  Download CV</a>
              </button>
      
        </div>

        {/* Kolom kanan dengan animasi lingkaran */}
        <div className="flex-1 text-overlay relative">
          <img src={homeimg2} alt="Home Image 2" className="homepage-image" />
          <motion.svg
            className="motion-circle"
            width="400" // Mengurangi ukuran lebar
            height="400" // Mengurangi ukuran tinggi
            viewBox="0 0 400 400" // Mengatur viewBox agar sesuai dengan ukuran yang lebih kecil
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.circle
              cx="200" // Menyesuaikan posisi pusat
              cy="200" // Menyesuaikan posisi pusat
              r="190" // Mengurangi radius agar lebih kecil dari viewBox
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 18 0 0" }}
              animate={{ strokeDasharray: ["20 100 30 30", "25 30 80 65", "5 200 30 30"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>

          {/* Lingkaran Kedua */}
          <motion.svg
            className="motion-circle-2"
            width="406"
            height="406"
            viewBox="0 0 406 406"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }} // Berlawanan arah
            transition={{
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.circle
              cx="203"
              cy="203"
              r="150"
              stroke="#ffffff" // Warna putih
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 18 0 0" }}
              animate={{ strokeDasharray: ["20 100 30 30", "25 30 80 65", "5 200 30 30"] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


