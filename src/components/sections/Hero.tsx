
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block mb-2">ПРИРОДНОЕ ОМОЛОЖЕНИЕ</span>
              <span className="block text-primary">СУСТАВОВ И КОСТЕЙ</span>
            </h1>
            
            <p className="text-xl font-semibold">
              ЗДОРОВЫЙ ПОЗВОНОЧНИК И КРЕПКИЕ КОСТИ БЕЗ ЛЕКАРСТВ!
            </p>
            
            <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg inline-block">
              <p className="font-bold text-lg md:text-xl">
                🔥 ОСТЕОПОРОЗ, СКОЛИОЗ, БОЛИ В СУСТАВАХ БОЛЬШЕ НЕ ПРОБЛЕМА! 🔥
              </p>
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0">
              Убедитесь в этом сами, посетив одно занятие адаптивно-функциональной гимнастики 
              на авторском тренажёре «Ось Жизни»
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale text-lg">
                Записаться на занятие
              </Button>
              <Button size="lg" variant="outline" className="hover-scale border-primary text-primary hover:bg-primary/10 text-lg">
                Узнать больше
              </Button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
                <p className="text-sm">Всего 45 минут в неделю</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-primary/20 rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="text-primary font-bold">+</span>
                </div>
                <p className="text-sm">Результат с первого занятия</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="grid grid-cols-1 gap-4">
                <img 
                  src="https://cdn.poehali.dev/files/ff2f310d-d800-4085-b436-c747d1bb7c57.jpeg" 
                  alt="Автор методики с учеником"
                  className="w-full aspect-video object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1611077854917-b5fef0d61ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Тренажер Ось Жизни"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <p className="font-semibold text-lg mb-2">Забудьте о хрупкости костей и болях в суставах!</p>
                  <p className="text-sm text-white/80">
                    Запустите регенерацию костных тканей, верните себе здоровую осанку и энергичность всего организма.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-12 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-2xl font-semibold mb-6">
            Мы знаем, как вновь сделать вас молодым и активным
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Без уколов, операций или дорогостоящих курсов реабилитации. 
            Наша методика запускает естественные процессы омоложения организма.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
