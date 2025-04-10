
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted py-12 mt-auto">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto" />
              <span className="text-xl font-bold">ОнлайнМастер</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Лучшие онлайн-курсы для вашего профессионального роста. Обучаем цифровому маркетингу с 2018 года.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Курсы</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Цифровой маркетинг</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">SMM-продвижение</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Контекстная реклама</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Таргетированная реклама</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">О нас</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Преподаватели</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Отзывы</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-foreground">Блог</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: info@onlinemaster.ru</li>
              <li className="text-muted-foreground">Телефон: +7 (800) 123-45-67</li>
              <li>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <span className="sr-only">Telegram</span>
                    ✈️
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <span className="sr-only">VK</span>
                    📱
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <span className="sr-only">YouTube</span>
                    📺
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2023 ОнлайнМастер. Все права защищены.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
              Политика конфиденциальности
            </Link>
            <Link to="#" className="text-xs text-muted-foreground hover:text-foreground">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
