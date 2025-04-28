
import { Section } from "@/components/ui/section";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  return (
    <Section id="benefits" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            ВАШИ ПРЕИМУЩЕСТВА
          </h2>
          <div className="w-16 h-1 bg-primary my-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Быстрое восстановление плотности костей</h3>
                  <p className="text-muted-foreground">Эффективная профилактика остеопороза</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Идеальная осанка и свобода движений</h3>
                  <p className="text-muted-foreground">В любом возрасте, независимо от исходного состояния</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Безопасно, без боли и травм</h3>
                  <p className="text-muted-foreground">Подходит всем, независимо от физической подготовки</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/20 rounded-full p-1 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Физиологическое облегчение от болей</h3>
                  <p className="text-muted-foreground">Осязаемый эффект с первого занятия</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 hover-scale">
                Записаться на пробное занятие
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 bg-muted/20 p-6 rounded-lg border border-muted">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Занятие на тренажере Ось Жизни"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary/90 text-white rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:bg-primary hover:scale-110 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center space-y-3">
              <h3 className="text-2xl font-bold">ПРИРОДНОЕ ОМОЛОЖЕНИЕ: КОСТИ КАК В ДВАДЦАТЬ!</h3>
              <p className="text-lg font-semibold text-primary">ОСТЕОПОРОЗ — БОЛЬШЕ НЕ ПРИГОВОР!</p>
              <p className="text-muted-foreground">УНИКАЛЬНОЕ РЕШЕНИЕ ДЛЯ ЗДОРОВЬЯ КОСТЕЙ И СУСТАВОВ</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
