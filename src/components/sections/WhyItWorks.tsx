
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const WhyItWorks = () => {
  return (
    <section id="why" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ПОЧЕМУ ЭТО РАБОТАЕТ?
          </h2>
          <div className="w-16 h-1 bg-primary my-4"></div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-xl">Кости — живой орган</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Они постоянно обновляются. Нарушение этого процесса приводит к остеопорозу и хрупкости.
                Наш метод стимулирует естественную регенерацию костной ткани.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="text-xl">Тренировка, которую не даст спортзал</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Наша гимнастика на тренажёре создаёт уникальную нагрузку, запуская рост новой костной ткани, 
                выделение коллагена, способствует оздоровлению ОДА, ЦНС, укреплению мышц и избавлению от болей в суставах.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 p-6 bg-primary/10 rounded-lg border border-primary/30">
          <h3 className="text-2xl font-bold text-center mb-6">КРАТКО О ГЛАВНОМ</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-primary font-bold">•</span>
              <p>Адаптивная гимнастика на уникальном тренажёре — это революционный способ укрепления костей и суставов.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary font-bold">•</span>
              <p>Запуск естественного омоложения: за 45 минут, 1 раз в неделю, под контролем специалиста.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary font-bold">•</span>
              <p>Результаты с первого занятия: улучшение осанки, исчезновение болей, повышение плотности костей.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary font-bold">•</span>
              <p>Безопасно для любого возраста и уровня подготовки — научно доказано, подтверждено исследованиями.</p>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-primary font-bold">•</span>
              <p>Без лекарств, операций и побочных эффектов — только ваши внутренние ресурсы!</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
