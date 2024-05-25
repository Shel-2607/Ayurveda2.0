import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft') {
        // Go to previous slide
        sliderRef.current.slickPrev();
      } else if (event.key === 'ArrowRight') {
        // Go to next slide
        sliderRef.current.slickNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    pauseOnHover: false,
  };

  const images = [
    "https://strategicpsychology.com.au/wp-content/uploads/2023/08/diagnosis-chalkboard-graphic.jpg",
    "https://static.scientificamerican.com/sciam/cache/file/01C9741F-6F6D-4882-8217D92370325AA7_source.jpg",
    "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_1706565550_(1).jpg",
    "https://familypracticecenterpc.com/wp-content/uploads/2019/09/family-practice-near-me-medical-testing-center-Atlanta-GA-x-rays-Atlanta-GA-types-of-medical-tests-blood-test.jpg",
    
    "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325750/doctor-and-patient-with-breast-scan.jpg",
    "https://www.impactqa.com/wp-content/uploads/2022/02/hand-medical-glove-pointing-virtual-screen-medical-technology-600x400.jpg"
  ];

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index + 1}`} className="slider-image" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
