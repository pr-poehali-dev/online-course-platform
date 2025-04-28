
import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    content: "Я снова бегаю с внуком и сплю всю ночь без боли. Вы подарили мне вторую молодость!",
    author: "Владимир",
    role: "62 года, военный пенсионер",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "После первой тренировки улучшился сон, а после курса исправилась осанка, ушёл горб",
    author: "Дмитрий",
    role: "55 лет, проектировщик",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "За 3 занятия исчезла «холка», подтянулась кожа лица, а после программы прошли боли в кистях.",
    author: "Вера",
    role: "67 лет, владелец сети ювелирных магазинов",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "После 1 занятия давление снизилось с 150/130 до 130/110, после полного курса ушла боль в шее, повысилась жизненная энергия.",
    author: "Юрий",
    role: "77 лет, пенсионер, мастер цигун",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "Пройдя полный курс, у меня восстановилась чувствительность половины тела, которой не было уже полтора года после инсульта.",
    author: "Вероника",
    role: "66 лет, владелец юридической компании",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "После 1 занятия исчезли боли, нормализовался сон, вернулась мелкая моторика, занялась огородом.",
    author: "Ольга",
    role: "64 года, владелец коллегии адвокатов",
    avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  },
  {
    content: "После курса ушли трещины на пятках, выровнялся позвоночник, плечи, улучшился сон, появилась личная жизнь.",
    author: "Светлана",
    role: "66 лет, владелец гостиницы",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256"
  }
];

const Testimonials = () => {
  return (
    <Section id="testimonials" className="bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">
            РЕАЛЬНЫЕ ИСТОРИИ
          </h2>
          <p className="text-muted-foreground md:text-xl mx-auto max-w-3xl">
            Узнайте, как наша методика помогла людям вернуть здоровье и активность
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card 
              key={index} 
              className="border bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col h-full justify-between gap-4">
                  <div className="mb-4 text-lg italic">
                    «{testimonial.content}»
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="border-2 border-primary">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback className="bg-primary text-white">{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">— {testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
            ЗАБУДЬТЕ О БОЛИ — ВЕРНИТЕ СВОБОДУ ДВИЖЕНИЯ!
          </h3>
          <p className="max-w-3xl mx-auto mb-8 text-lg">
            Не тратьте годы на таблетки и массажёры — попробуйте инновационную методику уже сейчас!
            Гарантированный эффект с первого раза — почувствуйте разницу сами!
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full animate-pulse"
          >
            Записаться на занятие
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
