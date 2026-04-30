import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const programs = [
  {
    title: "Утренняя зарядка",
    duration: "10 мин",
    level: "Любой уровень",
    desc: "Лёгкий комплекс для пробуждения тела. Запускает обмен веществ и поднимает настроение на весь день.",
    exercises: ["Круговые движения суставов", "Наклоны и повороты", "Лёгкие приседания", "Растяжка спины"],
  },
  {
    title: "Кардио без прыжков",
    duration: "20 мин",
    level: "Начинающий",
    desc: "Эффективное кардио, которое не побеспокоит соседей снизу. Подходит для квартиры в любое время.",
    exercises: ["Шаг на месте с ускорением", "Боковые выпады", "Приставные шаги", "Махи руками"],
  },
  {
    title: "Силовая дома",
    duration: "30 мин",
    level: "Средний",
    desc: "Полноценная силовая тренировка с собственным весом. Работают все основные группы мышц.",
    exercises: ["Отжимания (несколько вариантов)", "Приседания с выпрыгиванием", "Планка с перестановкой", "Обратные отжимания от стула"],
  },
  {
    title: "Растяжка после работы",
    duration: "15 мин",
    level: "Любой уровень",
    desc: "Снимает напряжение в шее, плечах и пояснице после долгого сидячего дня.",
    exercises: ["Растяжка шеи и плечей", "Скрутки позвоночника", "Поза ребёнка", "Растяжка ног"],
  },
  {
    title: "Пресс за 7 минут",
    duration: "7 мин",
    level: "Любой уровень",
    desc: "Короткий, но интенсивный комплекс для мышц кора. Делайте утром или перед сном.",
    exercises: ["Скручивания", "Велосипед", "Планка", "Подъём ног лёжа"],
  },
  {
    title: "Полное тело",
    duration: "40 мин",
    level: "Продвинутый",
    desc: "Комплексная тренировка для тех, кто уже в форме. Высокая интенсивность, реальный результат.",
    exercises: ["Бёрпи", "Альпинист", "Прыжковые приседания", "Отжимания со взрывом"],
  },
  {
    title: "Йога для начинающих",
    duration: "25 мин",
    level: "Начинающий",
    desc: "Мягкое введение в йогу. Учим базовые асаны и правильное дыхание.",
    exercises: ["Поза горы", "Собака мордой вниз", "Воин I и II", "Шавасана"],
  },
  {
    title: "Активный обед",
    duration: "12 мин",
    level: "Любой уровень",
    desc: "Быстрая разрядка между делами. Прогоняет сонливость и возвращает концентрацию.",
    exercises: ["Приседания у стула", "Отжимания от стола", "Растяжка запястий", "Дыхательная практика"],
  },
  {
    title: "Прогулка с пользой",
    duration: "30 мин",
    level: "Любой уровень",
    desc: "Превращаем обычную ходьбу в полноценную тренировку. Подходит для прогулок до магазина и обратно.",
    exercises: ["Интервальный темп", "Подъёмы по лестнице", "Ходьба с высоким коленом", "Активная осанка"],
  },
];

export default function Workouts() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-neutral-900 text-white">
        <Header />
        <div className="px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-5xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Тренировки</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
            Программы под любой день и любой уровень
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
            От 7-минутной зарядки до полноценной силовой тренировки. Выбирай по времени, уровню и настроению.
          </p>
        </div>
      </div>

      <div className="px-6 py-20 lg:py-28 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p) => (
            <div key={p.title} className="border border-neutral-200 p-6 lg:p-8 flex flex-col gap-4 hover:border-neutral-900 transition-colors">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-neutral-400">
                <span>{p.level}</span>
                <span className="flex items-center gap-1"><Icon name="Clock" size={12} /> {p.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{p.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
              <ul className="space-y-1.5 mt-2">
                {p.exercises.map((ex) => (
                  <li key={ex} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Icon name="Check" size={14} className="text-neutral-900 mt-0.5 shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="mt-auto pt-4 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-neutral-900 hover:gap-3 transition-all"
              >
                Записаться <Icon name="ArrowRight" size={16} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-neutral-900 text-white p-10 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Не знаешь с чего начать?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Напиши нам — подберём программу под твой уровень, цели и время.
          </p>
          <Link
            to="/contacts"
            className="inline-block bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors"
          >
            Получить рекомендацию
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
