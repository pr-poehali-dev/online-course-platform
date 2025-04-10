
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "Этот курс превзошел все мои ожидания. За 8 недель я получила больше практических знаний, чем за год обучения в университете.",
    author: "Мария К.",
    role: "Маркетолог, Яндекс",
    avatar: "/placeholder.svg"
  },
  {
    content: "Благодаря курсу я смог полностью перепрофилироваться и найти работу в диджитал-агентстве всего через месяц после окончания обучения.",
    author: "Алексей Д.",
    role: "Digital-стратег",
    avatar: "/placeholder.svg"
  },
  {
    content: "Структура курса позволяет сразу применять полученные знания. Мой первый проект после обучения принес компании рост продаж на 35%.",
    author: "Ольга В.",
    role: "Директор по маркетингу",
    avatar: "/placeholder.svg"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Отзывы наших выпускников
        </h2>
        <p className="text-muted-foreground md:text-xl mx-auto max-w-3xl">
          Узнайте, как наш курс помог студентам достичь профессиональных целей
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border bg-background">
            <CardContent className="p-6">
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="mb-4 text-lg font-medium">
                  "{testimonial.content}"
                </div>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback>{testimonial.author.split(' ')[0][0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
