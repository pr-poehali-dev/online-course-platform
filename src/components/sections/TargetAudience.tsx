
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";

const audiences = [
  {
    icon: "🪖",
    title: "Военным",
    description: "Мобилизация скрытых ресурсов организма при реабилитации"
  },
  {
    icon: "🏃",
    title: "Спортсменам",
    description: "Быстрое восстановление после травм, ушибов, растяжений"
  },
  {
    icon: "🚗",
    title: "Водителям",
    description: "Исправление тазовой деформации и шейно-воротниковой зоны"
  },
  {
    icon: "💼",
    title: "Офисным работникам",
    description: "При нервных истощениях, стрессах и депрессиях"
  },
  {
    icon: "⚖️",
    title: "Людям с избыточным весом",
    description: "Нормализация гормонального фона и метаболизма"
  },
  {
    icon: "🩹",
    title: "При посттравматических синдромах",
    description: "Способствует ускорению регенеративных процессов"
  },
  {
    icon: "👶",
    title: "Детям и подросткам",
    description: "Исправление осанки при её нарушениях"
  },
  {
    icon: "👵",
    title: "Пожилым людям",
    description: "Возвращаем активность суставам для сохранения подвижности"
  },
  {
    icon: "🤕",
    title: "Людям с болями",
    description: "При болях в спине, суставах, шее, коленях, локтях, кистях"
  }
];

const TargetAudience = () => {
  return (
    <Section id="audience" className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            КОМУ И КОГДА НУЖНО?
          </h2>
          <div className="w-16 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Узнайте себя в описании и поймите, как наша методика может помочь именно вам
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item, index) => (
            <Card key={index} className="hover-scale border bg-background">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">ВЫ УЗНАЕТЕ СЕБЯ?</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto text-left">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Постоянная усталость и сонливость</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Боли в суставах, спине, шее</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Потеря гибкости и мелкой моторики</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Ломота в костях и остеопороз</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Стресс, раздражительность, апатия</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Сколиоз, искривления позвоночного столба</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-6">ПРОБОВАЛИ?</h3>
          <div className="grid gap-4 sm:grid-cols-2 max-w-4xl mx-auto text-left">
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Массажи, йога, диеты, медитации — без результата</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Операции, уколы, гормоны — дорого и опасно</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>Витамины, таблетки — временно снимают симптомы</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <p>БАДы, иголки, массажеры – боль возвращается</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TargetAudience;
