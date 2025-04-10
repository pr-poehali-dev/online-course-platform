
import { Section } from "@/components/ui/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени нужно уделять обучению?",
    answer: "Рекомендуемое время — 10-15 часов в неделю. Это включает просмотр видеоуроков, выполнение практических заданий и участие в вебинарах. Вы можете заниматься в удобное для вас время, все материалы доступны онлайн."
  },
  {
    question: "Нужны ли какие-то знания для начала обучения?",
    answer: "Специальных знаний не требуется. Курс разработан так, чтобы быть понятным даже для полных новичков в маркетинге. Если у вас есть базовые знания, вы сможете быстрее освоить материал и углубиться в более сложные аспекты."
  },
  {
    question: "Какие документы я получу после окончания?",
    answer: "После успешного завершения курса вы получите цифровой сертификат, который можно прикрепить к вашему LinkedIn профилю и резюме. Выпускники тарифов 'Стандарт' и 'Премиум' также получают расширенный сертификат с детализацией освоенных навыков."
  },
  {
    question: "Можно ли оплатить курс в рассрочку?",
    answer: "Да, мы предлагаем рассрочку на 3, 6 или 12 месяцев без переплаты при оформлении через наших банков-партнеров. Подробности вы можете узнать у менеджера при оформлении заявки."
  },
  {
    question: "Что делать, если курс мне не подойдет?",
    answer: "Мы предоставляем гарантию возврата средств в течение первых 14 дней обучения. Если вы поймете, что курс вам не подходит, просто напишите в поддержку, и мы вернем полную стоимость без лишних вопросов."
  }
];

const FAQ = () => {
  return (
    <Section id="faq">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
          Часто задаваемые вопросы
        </h2>
        <p className="text-muted-foreground md:text-xl mx-auto max-w-3xl">
          Ответы на самые популярные вопросы о нашем курсе
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQ;
