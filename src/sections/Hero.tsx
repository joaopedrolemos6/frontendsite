import React from 'react';
import Button from '../components/Button';
import { MessageCircle, Send } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5583999245858', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center py-20 mt-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Soluções em Tecnologia, Automação e Marketing Digital
        </h1>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
          Acelere seus resultados com automações, landing pages, tráfego pago e muito mais.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            onClick={openWhatsApp}
            icon={<MessageCircle size={20} />}
            className="w-full md:w-auto"
          >
            Fale no WhatsApp
          </Button>

          <Button
            variant="outline"
            onClick={scrollToContact}
            icon={<Send size={20} />}
            className="w-full md:w-auto"
          >
            Solicitar Orçamento
          </Button>
        </div>

        <div className="mt-16 md:mt-24 animate-bounce">
          <a href="#services" className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
