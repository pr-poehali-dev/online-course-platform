
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";

const ComparativeMethods = () => {
  const methods = [
    {
      title: "Тренажер «Ось Жизни»",
      isPrimary: true,
      features: [
        { text: "Мгновенный эффект уже после первого занятия", positive: true },
        { text: "Натуральное воздействие без медикаментов", positive: true },
        { text: "Активация внутренних ресурсов организма", positive: true },
        { text: "Отсутствие побочных эффектов", positive: true },
        { text: "Долгосрочный оздоровительный эффект", positive: true },
      ]
    },
    {
      title: "Консервативное лечение",
      isPrimary: false,
      features: [
        { text: "Необходимость длительного ношения корсета", positive: false },
        { text: "Ограниченная эффективность физиотерапии", positive: false },
        { text: "Временный эффект от массажа", positive: false },
        { text: "Сложность регулярного выполнения упражнений", positive: false },
        { text: "Побочные эффекты от медикаментов", positive: false },
      ]
    },
    {
      title: "Хирургическое лечение",
      isPrimary: false,
      features: [
        { text: "Высокая травматичность операции", positive: false },
        { text: "Длительный период реабилитации", positive: false },
        { text: "Риск осложнений и инфекций", positive: false },
        { text: "Постоянное присутствие металлических конструкций", positive: false },
        { text: "Высокая стоимость операции", positive: false },
      ]
    },
  ];

  const alternativeMethods = [
    {
      title: "Альтернативные методы",
      isPrimary: false,
      features: [
        { text: "Недоказанная эффективность акупунктуры при сколиозе", positive: false },
        { text: "Ограниченная коррекция при плавании", positive: false },
        { text: "Необходимость многолетних занятий гимнастикой", positive: false },
        { text: "Отсутствие комплексного воздействия", positive: false },
        { text: "Зависимость от квалификации специалиста", positive: false },
      ]
    }
  ];

  return (
    <Section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Сравнение методов
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Почему тренажер «Ось Жизни» эффективнее
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Объективное сравнение с традиционными подходами к лечению сколиоза и проблем позвоночника
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {methods.map((method, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border ${
                method.isPrimary 
                  ? 'border-primary bg-primary/5 hover:bg-primary/10' 
                  : 'border-gray-200 bg-white hover:bg-gray-50'
              }`}
            >
              <div className={`p-4 ${method.isPrimary ? 'bg-primary text-white' : 'bg-gray-100 text-gray-800'}`}>
                <h3 className="font-bold text-xl">{method.title}</h3>
              </div>
              <div className="p-5">
                <ul className="space-y-4">
                  {method.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.positive ? (
                        <CheckCircle2 className="text-primary shrink-0 mt-0.5 mr-2" size={20} />
                      ) : (
                        <XCircle className="text-gray-400 shrink-0 mt-0.5 mr-2" size={20} />
                      )}
                      <span className={feature.positive ? 'text-gray-800' : 'text-gray-600'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {method.isPrimary && (
                <div className="p-5 pt-0">
                  <Button className="w-full group">
                    Узнать подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-12">
          <button className="flex items-center mx-auto text-primary hover:text-primary/80 transition-colors">
            <span className="mr-1">Показать другие методы</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>

        <div className="bg-primary/10 rounded-xl p-6 md:p-8 border border-primary/30 flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-2xl font-bold mb-3">Попробуйте революционный метод восстановления</h3>
            <p className="text-lg mb-5">
              Наша методика имеет более 15 лет исследований и тысячи успешных результатов. 
              Вместо борьбы с симптомами, мы воздействуем на первопричину заболевания через 
              активацию естественных ресурсов организма.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              Записаться на демонстрацию
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="https://cdn.poehali.dev/files/62316340-1336-44ae-8e6b-c495d44544ea.png"
              alt="Тренажер Ось Жизни" 
              className="max-w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ComparativeMethods;
