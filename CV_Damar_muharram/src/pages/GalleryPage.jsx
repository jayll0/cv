import React from 'react';
import galeryimg from '../assets/images/galery/Clip_path_group.svg';
import galeryimg2 from '../assets/images/galery/Clip_path_group.png';
import './GalleryPage.css'; // Import file CSS baru

const GalleryPage = () => {
  return (
    <div className="containerp mx-auto p-4"> {/* Menggunakan kelas containerp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="gallery-item text-overlay">
          <img src={galeryimg2} alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="text-content">
            <div className="text-title text-overlay Quattrocento">
              "Code is the language of creativity, my repositories are the canvases."
            </div>
          </div>
        </div>

        <div className="gallery-item2 text-overlay">
          <img src={galeryimg} alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="text-content">
            <a href="https://github.com/jayll0" className="text-title2 text-overlay Montserrat">
                  My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
