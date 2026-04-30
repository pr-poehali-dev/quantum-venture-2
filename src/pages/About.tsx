import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-neutral-900 text-white">
        <Header />
        <div className="px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-5xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">О нас</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
            История, которая началась со студенческой скамьи
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
            Мы — Григорий Малюта и Игорь Кузнецов. С 2026 года развиваем FitHome, помогая людям тренироваться дома и в повседневной жизни.
          </p>
        </div>
      </div>

      <div className="px-6 py-20 lg:py-28 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">2026</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Старт пути</h2>
            <p className="text-neutral-600 leading-relaxed">
              Всё началось в Братском педагогическом колледже, где мы учились на физкультурном направлении. Идея пришла естественно: видели,
              как сложно людям совмещать тренировки с работой, учёбой и бытом.
            </p>
          </div>
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Сегодня</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">Наша миссия</h2>
            <p className="text-neutral-600 leading-relaxed">
              Сделать спорт доступным для каждого — без зала, без дорогого оборудования, без отговорок. Тренировки должны вписываться в жизнь,
              а не ломать её.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12">Что нас отличает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Icon name="GraduationCap" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Педагогический подход</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Образование в основе. Мы не просто составляем тренировки — мы учим, объясняем и сопровождаем.
              </p>
            </div>
            <div>
              <Icon name="HeartHandshake" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Личное участие</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Отвечаем на сообщения сами. Каждый клиент — не номер, а человек со своей историей и целью.
              </p>
            </div>
            <div>
              <Icon name="Activity" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Только рабочее</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Программы, которые мы тестируем сами. Никаких модных трендов без доказанной пользы.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4">
          <Link
            to="/workouts"
            className="bg-black text-white px-6 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-800 transition-colors text-center"
          >
            Смотреть тренировки
          </Link>
          <Link
            to="/contacts"
            className="border border-black text-black px-6 py-3 uppercase tracking-wide text-sm font-medium hover:bg-black hover:text-white transition-colors text-center"
          >
            Связаться с нами
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
