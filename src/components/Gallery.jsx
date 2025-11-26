import { useState } from 'react'
import img_1 from "../assets/img_1.jpg";
import img_2 from "../assets/img_2.jpg";
import img_3 from "../assets/img_3.jpg";
import img_4 from "../assets/img_4.jpg";
import img_5 from "../assets/img_5.jpg";
import img_6 from "../assets/img_6.jpg";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const galleryImages = [
    {
      src: img_1,
      alt: 'Beautiful moment in pink saree',
      category: 'portraits',
      title: 'Elegance in Pink'
    },
    {
      src: img_2,
      alt: 'Cultural celebration with children',
      category: 'celebrations',
      title: 'Cultural Joy'
    },
    {
      src: img_3,
      alt: 'Birthday celebration with family',
      category: 'celebrations',
      title: 'Birthday Memories'
    },
    {
      src: img_4,
      alt: 'Evening portrait in traditional attire',
      category: 'portraits',
      title: 'Evening Grace'
    },
    {
      src: img_5,
      alt: 'Elegant setting with flowers',
      category: 'portraits',
      title: 'Floral Elegance'
    },
    {
      src: img_6,
      alt: 'Street photography moment',
      category: 'lifestyle',
      title: 'Street Style'
    },
  ]

  const categories = ['all', 'portraits', 'celebrations', 'lifestyle']

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <span className="gallery-subtitle">Personal Moments</span>
          <h2 className="gallery-title">Gallery</h2>
          <p className="gallery-description">
            A collection of my favorite memories and special moments.
          </p>
        </div>
        
        <div className="gallery-filters">
          {categories.map((category) => (
            <button 
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-card"
              onClick={() => openLightbox(image)}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <h4>{image.title}</h4>
                    <span className="category-tag">{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>×</button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-info">
                <span className="lightbox-category">{selectedImage.category}</span>
                <p className="lightbox-caption">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}