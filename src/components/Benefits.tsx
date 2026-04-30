import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Home",
    title: "Дома — как в зале",
    desc: "Полноценные тренировки без тренажёров. Используй вес тела, стул, стену — всё что есть рядом.",
  },
  {
    icon: "Clock",
    title: "20 минут в день",
    desc: "Короткие, но эффективные сессии. Утром до работы, в обед или вечером — в любое удобное время.",
  },
  {
    icon: "TrendingUp",
    title: "Прогрессия нагрузки",
    desc: "Программы растут вместе с тобой — от новичка до уверенного уровня без плато и скуки.",
  },
  {
    icon: "Heart",
    title: "Для всего тела",
    desc: "Кардио, силовые, растяжка и йога. Комплексный подход для здоровья, а не только внешнего вида.",
  },
  {
    icon: "Smartphone",
    title: "Всегда с тобой",
    desc: "В поездке, в офисе, на даче — тренируйся где угодно, нужен только телефон.",
  },
  {
    icon: "Users",
    title: "Сообщество",
    desc: "Тысячи людей, которые тренируются вместе с тобой. Мотивация, советы и поддержка каждый день.",
  },
];

const programs = [
  { label: "Утренняя зарядка", duration: "10 мин", level: "Любой уровень" },
  { label: "Кардио без прыжков", duration: "20 мин", level: "Начинающий" },
  { label: "Силовая дома", duration: "30 мин", level: "Средний" },
  { label: "Растяжка после работы", duration: "15 мин", level: "Любой уровень" },
  { label: "Пресс за 7 минут", duration: "7 мин", level: "Любой уровень" },
  { label: "Полное тело", duration: "40 мин", level: "Продвинутый" },
];

export default function Benefits() {
  return (
    <>
      {/* Блок преимуществ */}
      <div className="bg-neutral-50 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Почему FitHome</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 max-w-2xl leading-tight">
            Тренировки, которые меняют жизнь — без лишних условий
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-black rounded-none">
                  <Icon name={b.icon as "Home"} size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{b.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Блок программ */}
      <div className="bg-white px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Программы</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 max-w-2xl leading-tight">
            Найди тренировку под свой день
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-200">
            {programs.map((p) => (
              <div key={p.label} className="bg-white p-8 flex flex-col gap-4 group cursor-pointer hover:bg-neutral-900 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-neutral-500">{p.level}</span>
                  <span className="text-xs text-neutral-400 group-hover:text-neutral-500">{p.duration}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-white leading-snug">{p.label}</h3>
                <div className="mt-auto">
                  <Icon name="ArrowRight" size={18} className="text-neutral-300 group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
