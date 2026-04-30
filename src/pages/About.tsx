import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

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
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Мы — Григорий Малюта и Игорь Кузнецов. С 2026 года помогаем людям тренироваться дома и в повседневной жизни — без зала и лишних условий.
          </p>
        </div>
      </div>

      <div className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">2026 — Старт</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">Братский педагогический колледж</h2>
            <p className="text-neutral-600 leading-relaxed">
              Наш путь начался в стенах Братского педагогического колледжа, когда мы были студентами. Именно тогда родилась идея — помочь людям тренироваться без привязки к залу. Мы видели, как однокурсники и преподаватели хотят быть активными, но не могут вписать зал в свой ритм жизни.
            </p>
          </div>
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Сегодня — Миссия</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4 leading-tight">Движение доступно каждому</h2>
            <p className="text-neutral-600 leading-relaxed">
              Сегодня FitHome — это программы, которые реально работают. Мы сами тренируемся по ним, сами их проверяем. Никаких сложных тренажёров, никаких дорогих абонементов — только ты, твоё тело и 20 минут в день.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-16 mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12">Почему нам доверяют</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Icon name="GraduationCap" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Педагогическое образование</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Мы обучались педагогике — умеем объяснять, мотивировать и выстраивать прогресс шаг за шагом.
              </p>
            </div>
            <div>
              <Icon name="HeartHandshake" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Личное участие</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Отвечаем на вопросы сами. Каждый, кто обращается к нам — не номер, а человек с конкретной целью.
              </p>
            </div>
            <div>
              <Icon name="Activity" size={28} className="text-neutral-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Только проверенное</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Каждая программа пройдена нами лично. Никаких модных схем без доказанной пользы.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-10 lg:p-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Начни прямо сейчас</h2>
          <p className="text-neutral-300 mb-8 max-w-xl">
            Свяжись с нами — подберём программу под твой уровень и цели.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contacts"
              className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors text-center"
            >
              Связаться с нами
            </Link>
            <Link
              to="/workouts"
              className="border border-white text-white px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-white hover:text-black transition-colors text-center"
            >
              Смотреть программы
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
