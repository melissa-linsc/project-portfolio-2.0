import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
  className: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
  return (
    <img loading="lazy" src={src} alt={alt} className={className} />
  );
};

export default GalleryImage;