import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const team = [
  {
    name: "Григорий Алексеевич Малюта",
    role: "Сооснователь, тренер",
    phone: "+7 (924) 392-48-48",
    phoneRaw: "tel:+79243924848",
    about: "Специалист по функциональным тренировкам и кардио. Составляет программы для начинающих и помогает выстроить привычку движения с нуля.",
  },
  {
    name: "Игорь Дмитриевич Кузнецов",
    role: "Сооснователь, тренер",
    phone: "+7 (902) 519-11-86",
    phoneRaw: "tel:+79025191186",
    about: "Специалист по силовым тренировкам с собственным весом и растяжке. Разрабатывает программы для среднего и продвинутого уровня.",
  },
];

export default function Contacts() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-neutral-900 text-white">
        <Header />
        <div className="px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 max-w-5xl mx-auto">
          <p className="uppercase text-xs tracking-widest text-neutral-400 mb-6">Контакты</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[0.95]">
            Пишите и звоните — ответим быстро
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Поможем выбрать программу, ответим на вопросы и подберём тренировки под ваш ритм жизни.
          </p>
        </div>
      </div>

      <div className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 mb-16">
          {team.map((person) => (
            <div key={person.name} className="bg-white p-8 lg:p-10 flex flex-col gap-5">
              <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center">
                <Icon name="User" size={22} className="text-white" />
              </div>
              <div>
                <p className="uppercase text-xs tracking-widest text-neutral-400 mb-1">{person.role}</p>
                <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">{person.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{person.about}</p>
                <a
                  href={person.phoneRaw}
                  className="inline-flex items-center gap-2 text-lg font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  {person.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 mb-16">
          <div className="bg-neutral-50 p-8 flex flex-col gap-3">
            <Icon name="MapPin" size={24} className="text-neutral-900" />
            <h4 className="font-semibold text-neutral-900">Где мы</h4>
            <p className="text-neutral-600 text-sm">г. Братск, Иркутская область</p>
          </div>
          <div className="bg-neutral-50 p-8 flex flex-col gap-3">
            <Icon name="Clock" size={24} className="text-neutral-900" />
            <h4 className="font-semibold text-neutral-900">Время ответа</h4>
            <p className="text-neutral-600 text-sm">Ежедневно с 8:00 до 22:00</p>
          </div>
          <div className="bg-neutral-50 p-8 flex flex-col gap-3">
            <Icon name="MessageCircle" size={24} className="text-neutral-900" />
            <h4 className="font-semibold text-neutral-900">Как связаться</h4>
            <p className="text-neutral-600 text-sm">Звонок, WhatsApp или Telegram</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/workouts"
            className="bg-black text-white px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-800 transition-colors text-center"
          >
            Смотреть тренировки
          </Link>
          <Link
            to="/about"
            className="border border-black text-black px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-black hover:text-white transition-colors text-center"
          >
            О нас
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
