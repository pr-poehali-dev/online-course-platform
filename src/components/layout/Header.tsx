
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto" />
          <span className="text-xl font-bold">ОнлайнМастер</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm font-medium hover:text-primary">Преимущества</Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-primary">Отзывы</Link>
          <Link to="/#pricing" className="text-sm font-medium hover:text-primary">Стоимость</Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">Войти</Button>
          <Button>Купить курс</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
