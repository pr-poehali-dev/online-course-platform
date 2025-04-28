
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const MethodExplanation = () => {
  return (
    <Section id="method" className="py-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            В ЧЁМ СУТЬ МЕТОДА?
          </h2>
          <div className="w-16 h-1 bg-primary my-4"></div>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Познакомьтесь с научными принципами нашей уникальной методики
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1616279969862-55a27960bca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
              alt="Схема работы тренажера Ось Жизни"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Осевое сжатие костей</h3>
                <p className="text-muted-foreground">
                  Стимулирует костный мозг и выработку стволовых клеток, запуская естественную регенерацию тканей.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Уникальная нагрузка</h3>
                <p className="text-muted-foreground">
                  Силы нагрузки в 4–12 раз превышают вес тела — это невозможно повторить в обычной жизни или спортзале.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Доказанная эффективность</h3>
                <p className="text-muted-foreground">
                  Резкое улучшение плотности костей — до 14% за 6 месяцев! Результаты подтверждены исследованиями.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Комплексный подход</h3>
                <p className="text-muted-foreground">
                  Тренажёр, обучение и индивидуальные программы обеспечивают максимальный эффект для каждого.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 bg-primary/10 rounded-lg p-8 border border-primary/30">
          <div className="max-w-4xl mx-auto text-center md:text-left space-y-6">
            <h3 className="text-2xl font-bold text-center">АВТОР МЕТОДИКИ — ВЯЧЕСЛАВ АН</h3>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-4 border-primary shrink-0 shadow-lg transform transition-transform hover:scale-105 duration-300">
                <img 
                  src="https://cdn.poehali.dev/files/99d2fba6-1e14-4892-9fc9-c4361fbc7a39.jpeg" 
                  alt="Вячеслав Ан"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="italic text-lg">
                  "Профессиональный спортсмен, многократный чемпион страны, мастер спорта, 
                  эксперт в спортивной реабилитации. Более 20 лет посвятил изучению биомеханики 
                  человеческого тела и созданию эффективной методики восстановления костной ткани."
                </p>
                <p className="mt-3 font-medium text-primary">
                  Под руководством Вячеслава сотни людей вернули здоровье и активный образ жизни!
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 transform transition-transform hover:scale-105 duration-300">
                Запишитесь на первое занятие и начните новую жизнь
              </Button>
              <p className="text-muted-foreground mt-3">
                Без боли, с крепкими костями и молодым телом!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MethodExplanation;
