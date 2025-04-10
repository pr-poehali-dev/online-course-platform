
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

const plans = [
  {
    name: "Базовый",
    price: "14 900",
    description: "Идеально для начинающих свой путь в маркетинге",
    features: [
      "Доступ ко всем видеоурокам",
      "Базовые домашние задания",
      "Доступ к материалам в течение 6 месяцев",
      "Сертификат о прохождении курса"
    ],
    popular: false
  },
  {
    name: "Стандарт",
    price: "24 900",
    description: "Оптимальный вариант для серьезного обучения",
    features: [
      "Все преимущества тарифа Базовый",
      "Проверка домашних заданий",
      "Участие в еженедельных вебинарах",
      "Доступ к закрытому сообществу",
      "Персональная консультация с экспертом (1 час)"
    ],
    popular: true
  },
  {
    name: "Премиум",
    price: "39 900",
    description: "Максимум пользы и персонального внимания",
    features: [
      "Все преимущества тарифа Стандарт",
      "3 персональные консультации с экспертами",
      "Разбор вашего проекта/бизнеса",
      "Помощь в трудоустройстве",
      "Пожизненный доступ к обновлениям курса"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <Section id="pricing" className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Инвестируйте в своё будущее
        </h2>
        <p className="text-muted-foreground md:text-xl mx-auto max-w-3xl">
          Выберите подходящий вам тариф и начните своё обучение уже сегодня
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card 
            key={index} 
            className={`border flex flex-col ${plan.popular ? 'relative border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-primary px-3 py-1 rounded-full text-primary-foreground text-xs font-medium">
                Популярный выбор
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price} ₽</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className="h-4 w-4 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className="w-full"
              >
                Выбрать тариф
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Есть вопросы по тарифам? Наши менеджеры готовы проконсультировать вас
        </p>
        <Button variant="outline">Получить консультацию</Button>
      </div>
    </Section>
  );
};

export default Pricing;
