
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "📊",
    title: "Практические навыки",
    description: "Более 80% курса - это практика с реальными кейсами и задачами из индустрии"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Сообщество",
    description: "Доступ к закрытому сообществу студентов и выпускников для нетворкинга"
  },
  {
    icon: "🎓",
    title: "Сертификат",
    description: "По окончании курса вы получите сертификат, признаваемый работодателями"
  },
  {
    icon: "👨‍💻",
    title: "Опытные преподаватели",
    description: "Каждый модуль ведут практикующие специалисты с подтвержденным опытом"
  },
  {
    icon: "💼",
    title: "Карьерная поддержка",
    description: "Помощь в составлении резюме и подготовке к собеседованиям"
  },
  {
    icon: "🔄",
    title: "Обновляемый контент",
    description: "Материалы курса регулярно обновляются в соответствии с трендами рынка"
  }
];

const Features = () => {
  return (
    <Section id="features" className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Почему наш курс — лучший выбор для вашего роста
        </h2>
        <p className="text-muted-foreground md:text-xl mx-auto max-w-3xl">
          Наша программа разработана с учетом современных требований рынка и обеспечивает
          максимальную практическую ценность
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border bg-background">
            <CardHeader>
              <div className="text-4xl mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Features;
