import { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: '/attached_assets/IMG-3d3ad4ef2a21f5794ae5b6ddb21c520b-V~2_1757076910840.jpg',
      alt: 'Beautiful moment in pink saree',
      category: 'portrait'
    },
    {
      src: '/attached_assets/PXL_20250802_161841987_1757076910844.jpg',
      alt: 'Cultural celebration with children',
      category: 'event'
    },
    {
      src: '/attached_assets/PXL_20250802_164540416_1757076910848.jpg',
      alt: 'Birthday celebration with family',
      category: 'celebration'
    },
    {
      src: '/attached_assets/Snapchat-530487511_1757076910851.jpg',
      alt: 'Evening portrait in traditional attire',
      category: 'portrait'
    },
    {
      src: '/attached_assets/IMG-42f65bcbbf7815b5610fae9a50aa40d8-V_1757076926794.jpg',
      alt: 'Elegant setting with flowers',
      category: 'portrait'
    },
    {
      src: '/attached_assets/IMG-9a746ba7be48417f820ce34c117c8cf8-V (1)_1757076926798.jpg',
      alt: 'Street photography moment',
      category: 'lifestyle'
    },
    {
      src: '/attached_assets/20250612_132937_1757076926801.jpg',
      alt: 'Traditional architecture visit',
      category: 'travel'
    }
  ]

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section-title">My Gallery</h2>
        <p className="gallery-subtitle">A collection of my favorite moments and memories</p>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-category">{image.category}</span>
                  <p className="gallery-caption">{image.alt}</p>
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