
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative py-24 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              🚀 Старт курса 1 июня
            </div>
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl/tight">
              Освойте искусство <span className="text-primary">цифрового маркетинга</span> за 8 недель
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Наш курс разработан профессионалами с 10+ летним опытом работы с ведущими брендами. 
              Получите навыки, которые изменят вашу карьеру.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Забронировать место
                <span className="animate-pulse">→</span>
              </Button>
              <Button variant="outline" size="lg">
                Узнать программу
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                ⭐️ <span className="font-medium">4.9/5</span>
                <span className="text-muted-foreground">(500+ отзывов)</span>
              </div>
              <div className="flex items-center gap-1">
                👨‍🎓 <span className="font-medium">2000+</span>
                <span className="text-muted-foreground">выпускников</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:order-last">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Курс цифрового маркетинга"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width={550}
                height={310}
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-foreground/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
