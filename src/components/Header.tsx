import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-wide hover:text-neutral-300 transition-colors">
          FitHome
        </Link>
        <nav className="flex gap-6 md:gap-8">
          <Link to="/workouts" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            Тренировки
          </Link>
          <Link to="/about" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            О нас
          </Link>
          <Link to="/contacts" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">
            Контакты
          </Link>
        </nav>
      </div>
    </header>
  );
}
