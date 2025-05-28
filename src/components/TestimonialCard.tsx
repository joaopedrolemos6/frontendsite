import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <div 
      className={`
        transition-all duration-500 
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'} 
        bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-2xl mx-auto
      `}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <div className="mb-4">
            <svg className="h-6 w-6 text-primary mb-2" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8v12H0V8h10zm12 0v12H12V8h10z" />
            </svg>
            <p className="text-dark italic">{testimonial.quote}</p>
          </div>
          <div>
            <h4 className="text-primary font-semibold">{testimonial.name}</h4>
            <p className="text-gray-metal text-sm">{testimonial.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;