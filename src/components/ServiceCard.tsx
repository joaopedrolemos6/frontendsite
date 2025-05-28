import React from 'react';
import { 
  Settings, MessageCircle, Layout, Presentation, TrendingUp, 
  ActivitySquare, Cpu, Gauge, Timer, LineChart
} from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getIcon = (iconName: string) => {
    const icons = {
      'settings': Settings,
      'message-circle': MessageCircle,
      'layout': Layout,
      'presentation': Presentation,
      'trending-up': TrendingUp,
      'activity-square': ActivitySquare,
      'cpu': Cpu,
      'gauge': Gauge,
      'timer': Timer,
      'line-chart': LineChart
    };
    
    const IconComponent = icons[iconName as keyof typeof icons];
    return IconComponent ? <IconComponent size={36} className="text-primary" /> : null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      <div className="mb-4">
        {getIcon(service.icon)}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
      <p className="text-dark flex-grow">{service.description}</p>
      
      <button className="mt-4 text-primary font-medium flex items-center self-start hover:text-primary-dark transition-colors">
        Saiba mais
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default ServiceCard;