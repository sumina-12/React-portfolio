import { useState } from 'react'

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Sumina_Shrestha_CV.pdf'
    link.click()
  }

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-header">
          <h3>My CV</h3>
          <button className="cv-modal-close" onClick={onClose}>×</button>
        </div>
        <div className="cv-modal-body">
          <iframe 
            src="/cv.pdf" 
            width="100%" 
            height="600px"
            title="Sumina Shrestha CV"
          />
        </div>
        <div className="cv-modal-footer">
          <button className="btn btn-primary" onClick={handleDownload}>
            Download CV
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}