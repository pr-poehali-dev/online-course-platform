
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full border-b backdrop-blur transition-all ${scrolled ? "bg-background/95 shadow-sm" : "bg-background/80"}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="h-8 w-auto hover-scale" />
          <span className="text-xl font-bold">Ось Жизни</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/#why" className="text-sm font-medium hover:text-primary transition-colors">Почему это работает</Link>
          <Link to="/#science" className="text-sm font-medium hover:text-primary transition-colors">Научные данные</Link>
          <Link to="/#benefits" className="text-sm font-medium hover:text-primary transition-colors">Преимущества</Link>
          <Link to="/#pricing" className="text-sm font-medium hover:text-primary transition-colors">Стоимость</Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
            Записаться на занятие
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link 
              to="/#why" 
              className="text-lg font-medium p-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Почему это работает
            </Link>
            <Link 
              to="/#science" 
              className="text-lg font-medium p-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Научные данные
            </Link>
            <Link 
              to="/#benefits" 
              className="text-lg font-medium p-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Преимущества
            </Link>
            <Link 
              to="/#pricing" 
              className="text-lg font-medium p-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Стоимость
            </Link>
            <Link 
              to="/#faq" 
              className="text-lg font-medium p-2 hover:bg-primary/10 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4">
              <Button className="w-full">Записаться на занятие</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
