import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const galleryImages = [
    {
      src: '/attached_assets/IMG-3d3ad4ef2a21f5794ae5b6ddb21c520b-V~2_1757076910840.jpg',
      alt: 'Beautiful moment in pink saree',
      category: 'portraits',
      title: 'Elegance in Pink'
    },
    {
      src: '/attached_assets/PXL_20250802_161841987_1757076910844.jpg',
      alt: 'Cultural celebration with children',
      category: 'celebrations',
      title: 'Cultural Joy'
    },
    {
      src: '/attached_assets/PXL_20250802_164540416_1757076910848.jpg',
      alt: 'Birthday celebration with family',
      category: 'celebrations',
      title: 'Birthday Memories'
    },
    {
      src: '/attached_assets/Snapchat-530487511_1757076910851.jpg',
      alt: 'Evening portrait in traditional attire',
      category: 'portraits',
      title: 'Evening Grace'
    },
    {
      src: '/attached_assets/IMG-42f65bcbbf7815b5610fae9a50aa40d8-V_1757076926794.jpg',
      alt: 'Elegant setting with flowers',
      category: 'portraits',
      title: 'Floral Elegance'
    },
    {
      src: '/attached_assets/IMG-9a746ba7be48417f820ce34c117c8cf8-V (1)_1757076926798.jpg',
      alt: 'Street photography moment',
      category: 'lifestyle',
      title: 'Street Style'
    },
    {
      src: '/attached_assets/20250612_132937_1757076926801.jpg',
      alt: 'Traditional architecture visit',
      category: 'lifestyle',
      title: 'Architectural Beauty'
    }
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
          <span className="gallery-subtitle">✨ Capturing Life's Beautiful Moments</span>
          <h2 className="gallery-title">My Gallery</h2>
          <p className="gallery-description">
            A curated collection of my favorite memories, celebrations, and cherished moments 
            that tell the story of my journey.
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