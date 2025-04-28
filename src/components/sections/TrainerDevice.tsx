
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { ArrowRight, Circle, Maximize, ZoomIn } from "lucide-react";

const TrainerDevice = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  const infoPoints = [
    {
      id: 1,
      x: 30,
      y: 35,
      title: "Верхняя рама",
      description: "Прочная конструкция высотой 2200 мм для выполнения упражнений в положении стоя"
    },
    {
      id: 2,
      x: 75,
      y: 65,
      title: "Весовые блоки",
      description: "Специальные грузы, создающие нагрузку, которая в 4-12 раз превышает вес тела"
    },
    {
      id: 3,
      x: 15,
      y: 65,
      title: "Горизонтальная перекладина",
      description: "Элемент для выполнения упражнений на осевое сжатие костей"
    },
    {
      id: 4,
      x: 50,
      y: 85,
      title: "Основание",
      description: "Устойчивая платформа шириной 1000 мм для безопасных тренировок"
    }
  ];

  return (
    <Section className="bg-slate-50 py-20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Тренажёр <span className="text-primary">"Ось Жизни"</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Уникальная разработка для создания осевого сжатия костей, запускающего регенерацию костной ткани
            и естественные процессы омоложения организма
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-white rounded-2xl shadow-lg p-4 overflow-hidden group">
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button 
                className="bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full transition-all shadow-md"
                aria-label="Увеличить"
              >
                <ZoomIn size={20} className="text-primary" />
              </button>
              <button 
                className="bg-white/80 hover:bg-white backdrop-blur-sm p-2 rounded-full transition-all shadow-md"
                aria-label="На весь экран"
              >
                <Maximize size={20} className="text-primary" />
              </button>
            </div>
            
            <div className="relative h-full w-full flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/files/55b1c50b-dd4c-4545-966c-de85045f431a.png" 
                alt="Тренажёр Ось Жизни" 
                className="object-contain max-h-full max-w-full transition-transform duration-500 group-hover:scale-105"
              />
              
              {infoPoints.map((point) => (
                <div 
                  key={point.id}
                  className="absolute cursor-pointer transition-all duration-300"
                  style={{ 
                    left: `${point.x}%`, 
                    top: `${point.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                >
                  <div className={`
                    relative z-10 flex items-center justify-center
                    ${activePoint === point.id ? 'scale-125' : 'scale-100 hover:scale-110'}
                    transition-all duration-300
                  `}>
                    <Circle 
                      size={40} 
                      className={`
                        absolute animate-pulse opacity-50
                        ${activePoint === point.id ? 'text-primary' : 'text-primary/70'}
                      `} 
                    />
                    <Circle 
                      size={16} 
                      fill={activePoint === point.id ? "currentColor" : ""} 
                      className={`
                        ${activePoint === point.id ? 'text-primary' : 'text-primary/70'}
                      `} 
                    />
                  </div>
                  
                  {activePoint === point.id && (
                    <div className="absolute z-20 bg-white rounded-xl shadow-lg p-4 w-56 animate-fade-in"
                      style={{ 
                        left: point.x > 50 ? '-250px' : '30px', 
                        top: point.y > 50 ? '-100px' : '0'
                      }}
                    >
                      <h4 className="font-bold text-primary mb-1">{point.title}</h4>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Инновационная технология для здоровья костей</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Уникальный принцип работы</h4>
                <p>Создает направленную нагрузку на костную ткань, которая запускает естественные процессы регенерации</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Научно доказанная эффективность</h4>
                <p>Технология осевого сжатия признана мировыми экспертами как эффективный метод профилактики и лечения остеопороза</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-bold text-primary mb-2">Уникальная нагрузка</h4>
                <p>Силы нагрузки в 4–12 раз превышают вес тела — это невозможно повторить в обычной жизни или спортзале</p>
              </div>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale group">
                Записаться на тестовое занятие
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">
                * Все занятия проводятся только под руководством сертифицированного специалиста
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrainerDevice;
