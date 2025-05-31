import React from 'react';
import { Code, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sobre a LICITUM
          </h2>
          <p className="text-dark max-w-3xl mx-auto text-lg">
            Transformamos empresas através da tecnologia e automação digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-dark mb-6 text-lg">
              Somos especialistas em soluções tecnológicas que impulsionam negócios e otimizam 
              resultados. Nossa missão é transformar desafios em oportunidades através de 
              automação, marketing digital de alto impacto e desenvolvimento de soluções personalizadas.
            </p>
            
            <p className="text-dark mb-10 text-lg">
              Com uma equipe experiente e apaixonada por inovação, entregamos resultados 
              mensuráveis e focados no crescimento sustentável dos nossos clientes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Code className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Tecnologia Avançada</h3>
                  <p className="text-dark text-sm">Utilizamos as mais recentes tecnologias para criar soluções robustas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Equipe Especializada</h3>
                  <p className="text-dark text-sm">Profissionais dedicados e altamente qualificados</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Qualidade Garantida</h3>
                  <p className="text-dark text-sm">Comprometimento com excelência em cada projeto</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Resultados Rápidos</h3>
                  <p className="text-dark text-sm">Foco em implementações ágeis com alto impacto</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-dark opacity-90 mix-blend-multiply"></div>
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="LICITUM Team" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold text-center px-6">
                  Tecnologia a serviço do seu crescimento
                </h3>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-dark/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;