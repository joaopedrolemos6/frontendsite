import React, { useState, useEffect } from 'react';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto text-lg">
            Depoimentos de quem já transformou seu negócio com nossas soluções
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id} 
                testimonial={testimonial} 
                isActive={index === currentIndex} 
              />
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full flex justify-between">
            <button
              onClick={handlePrev}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full focus:outline-none transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={handleNext}
              className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full focus:outline-none transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
