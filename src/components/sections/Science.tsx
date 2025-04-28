
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const Science = () => {
  return (
    <Section id="science" className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            РЕЗУЛЬТАТЫ, ПОДТВЕРЖДЁННЫЕ НАУКОЙ
          </h2>
          <div className="w-16 h-1 bg-primary my-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <BadgeCheck className="h-7 w-7 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Эффект признан мировыми экспертами</h3>
                <p className="text-muted-foreground">
                  Проведенными исследованиями Harvard, Emory University и представлен на 
                  Всемирном конгрессе реабилитационной медицины как эффективный способ 
                  профилактики остеопороза и проблем с суставами.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BadgeCheck className="h-7 w-7 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">100+ научных публикаций</h3>
                <p className="text-muted-foreground">
                  Методика подкреплена обширной научной базой и постоянно совершенствуется
                  на основе новейших исследований в области биомеханики и реабилитации.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BadgeCheck className="h-7 w-7 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-xl mb-2">Индивидуальный подход</h3>
                <p className="text-muted-foreground">
                  Наши программы адаптируются под каждого клиента с учетом его состояния здоровья,
                  возраста и физических возможностей для достижения максимальных результатов.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border border-primary/30 overflow-hidden">
              <div className="bg-muted aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Научное исследование методики"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="text-sm font-medium">Результаты исследований методики "Ось Жизни"</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">14%</div>
                    <p className="text-xs">Улучшение плотности костей за 6 месяцев</p>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">89%</div>
                    <p className="text-xs">Пациентов отмечают снижение боли</p>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">95%</div>
                    <p className="text-xs">Улучшение осанки у всех возрастов</p>
                  </div>
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">78%</div>
                    <p className="text-xs">Увеличение подвижности суставов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Science;
