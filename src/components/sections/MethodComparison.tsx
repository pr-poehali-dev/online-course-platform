
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const MethodComparison = () => {
  return (
    <Section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Преимущества
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Уникальный метод восстановления организма
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Основанный на естественных ресурсах тела и природных механизмах
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-muted/20 hover:shadow-lg transition-shadow duration-300">
          <div className="p-6 md:p-8">
            <p className="text-lg mb-6">
              В отличие от традиционных методов лечения сколиоза, которые часто требуют длительного времени, 
              хирургического вмешательства или медикаментов, наш тренажёр «Ось Жизни» предлагает следующие 
              выгодные преимущества:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 hover-scale">
                <div className="text-primary mb-3">
                  <Check size={28} className="bg-primary text-white rounded-full p-1" />
                </div>
                <h3 className="font-bold text-xl mb-2">Мгновенный эффект</h3>
                <p className="text-muted-foreground">
                  Уже после первого занятия клиент ощущает прилив энергии, омоложение и улучшение общего состояния.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 hover-scale">
                <div className="text-primary mb-3">
                  <Check size={28} className="bg-primary text-white rounded-full p-1" />
                </div>
                <h3 className="font-bold text-xl mb-2">Безопасность и естественность</h3>
                <p className="text-muted-foreground">
                  Никаких инъекций, медикаментов или хирургии — всё происходит за счёт активации внутренних ресурсов организма.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 hover-scale">
                <div className="text-primary mb-3">
                  <Check size={28} className="bg-primary text-white rounded-full p-1" />
                </div>
                <h3 className="font-bold text-xl mb-2">Глубокая регенерация</h3>
                <p className="text-muted-foreground">
                  Стимулируется рост новых клеток, коллагена, восстанавливаются кости и соединительные ткани, что особенно важно при сколиозе.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 hover-scale">
                <div className="text-primary mb-3">
                  <Check size={28} className="bg-primary text-white rounded-full p-1" />
                </div>
                <h3 className="font-bold text-xl mb-2">Мощная перезагрузка нервной системы</h3>
                <p className="text-muted-foreground">
                  Расслабление, снятие мышечного напряжения и восстановление гармонии между телом и разумом.
                </p>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl hover:bg-primary/10 transition-colors duration-300 hover-scale">
                <div className="text-primary mb-3">
                  <Check size={28} className="bg-primary text-white rounded-full p-1" />
                </div>
                <h3 className="font-bold text-xl mb-2">Долгосрочный эффект</h3>
                <p className="text-muted-foreground">
                  Укрепление костей, суставов и связок, улучшение гормонального фона и иммунитета — всё это помогает не только исправить искривление, но и значительно повысить качество жизни.
                </p>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-r from-primary/20 to-primary/5 p-6 rounded-xl hover:from-primary/30 hover:to-primary/10 transition-colors duration-300 hover-scale">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 group"
                >
                  Записаться на консультацию
                  <Check className="ml-2 group-hover:scale-110 transition-transform" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MethodComparison;
