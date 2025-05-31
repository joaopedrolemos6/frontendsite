import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png" // 👈 funciona normalmente no Vite se estiver na pasta public
                alt="Logo Licitum"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="font-bold text-xl">LICITUM</span>
            </div>

            <p className="text-white/70 mb-4">
              Soluções tecnológicas inteligentes para impulsionar o crescimento do seu negócio.
            </p>

            <div className="flex space-x-4 mt-6">
              {/* LinkedIn */}
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                {/* SVG */}
              </a>

              {/* Instagram */}
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
                {/* SVG */}
              </a>

              {/* Facebook */}
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
                {/* SVG */}
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Automação de Processos</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Atendentes Virtuais</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Marketing Digital</a></li>
              <li><a href="#services" className="text-white/60 hover:text-white transition-colors">Gestão de Tráfego Pago</a></li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Links Úteis</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/60">
                📧&nbsp;
                <a href="mailto:contatolicitum@gmail.com" className="hover:text-white transition-colors">
                  contatolicitum@gmail.com
                </a>
              </li>
              <li className="flex items-center text-white/60">
                📞&nbsp;
                <a href="tel:+5583999245858" className="hover:text-white transition-colors">
                  (83) 99924-5858
                </a>
              </li>
              <li className="flex items-center text-white/60">
                📍&nbsp;
                <span>Av. Gov. Flavio Ribeiro Coutinho, 500, João Pessoa - PB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-white/50">
            &copy; {currentYear} LICITUM Technology Solutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
