import React, { useState } from 'react';
import Button from './Button';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://backendsite-production.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
        });

        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Erro ao enviar. Tente novamente mais tarde.'
        });
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setSubmitStatus({
        success: false,
        message: 'Erro na conexão. Verifique sua internet ou tente mais tarde.'
      });
    } finally {
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitStatus(null);
      }, 6000);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary mb-6">Solicite um Orçamento</h3>

      {submitStatus && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-dark font-medium">
              Nome*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Seu nome completo"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-dark font-medium">
              E-mail*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="seu@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="whatsapp" className="block text-dark font-medium">
              WhatsApp*
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              required
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-dark font-medium">
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Nome da sua empresa"
            />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <label htmlFor="message" className="block text-dark font-medium">
            Mensagem*
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
            placeholder="Descreva seu projeto ou necessidade..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            className="w-full md:w-auto"
            icon={<Send size={18} />}
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
