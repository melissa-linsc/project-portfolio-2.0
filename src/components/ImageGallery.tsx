import React from 'react';

interface ImageData {
  src: string;
  alt: string;
  className: string;
}

const imageData: ImageData[] = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e02b37a92912e45de2822167d30c845f0b145e5f8868c493998b72e0ada10ff3?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 1", className: "shrink-0 max-w-full aspect-[1.01] w-[142px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8667b0553d4b935fe26085954855ca238d635ebc4744d0fdae90dd9fa0e5a5e3?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 2", className: "shrink-0 max-w-full aspect-[0.96] w-[134px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6932df902f5fedaf5e0d7c7844a76f47ff17eee602e1783601d3be82364e532?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 3", className: "shrink-0 max-w-full aspect-[0.99] w-[139px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f8e610cbef696892cc8b87c7173aefd4078cade29a1a25f731d46a94c4e89c2?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 4", className: "shrink-0 max-w-full aspect-[1.19] w-[167px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98312a10bbf89e451b73b7fb226dfe5e76c66e7f6fcdcff484675620e8aab703?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 5", className: "shrink-0 self-start max-w-full aspect-[1.64] w-[196px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9153f10e075e37af5d68fcb5053508bf7c9407e241c8cf79b6ae4989efe8e4b2?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 6", className: "shrink-0 max-w-full aspect-[1.06] w-[149px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/182ba89a14de09cbf09234f6c8938dbe816532b14fc061722014fbb0a74c387b?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 7", className: "shrink-0 max-w-full aspect-[0.99] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[139px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3ff9294182c38f347c7f775fcfdcb3900891d3cddf8db9e72bfe7c49b213dbb?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 8", className: "shrink-0 max-w-full aspect-square w-[140px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7844bcce1f0626a1be54f186a78d823056221923629e69dabaf812beece75021?apiKey=1f629b99085f411cacd917c72ce728fe&&apiKey=1f629b99085f411cacd917c72ce728fe", alt: "Gallery image 9", className: "shrink-0 max-w-full aspect-[1.06] w-[149px]" },
];

const ImageGallery: React.FC = () => {
    return (
        <div className="flex overflow-hidden space-x-16 h-[6rem] my-[3rem]">
        <div className="flex space-x-16 animate-loop-scroll">
            {imageData.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="max-w-none" />
            ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
            {imageData.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="max-w-none" />
            ))}
        </div>
        <div className="flex space-x-16 animate-loop-scroll" aria-hidden="true">
            {imageData.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="max-w-none" />
            ))}
        </div>
      </div>
    );
  };

export default ImageGallery;