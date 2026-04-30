import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const contacts = [
  {
    name: "Григорий Алексеевич Малюта",
    role: "Сооснователь, тренер",
    phone: "+7 (924) 392-48-48",
    phoneHref: "tel:+79243924848",
  },
  {
    name: "Игорь Дмитриевич Кузнецов",
    role: "Сооснователь, тренер",
    phone: "+7 (902) 519-11-86",
    phoneHref: "tel:+79025191186",
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
            Свяжитесь с нами напрямую
          </h1>
          <p className="text-lg md:text-2xl text-neutral-300 max-w-3xl leading-relaxed">
            Звоните, пишите — расскажем про программы, подберём тренировки и ответим на любой вопрос.
          </p>
        </div>
      </div>

      <div className="px-6 py-20 lg:py-28 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200 mb-16">
          {contacts.map((c) => (
            <div key={c.name} className="bg-white p-8 lg:p-10 flex flex-col gap-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <Icon name="User" size={22} className="text-white" />
              </div>
              <div>
                <p className="uppercase text-xs tracking-widest text-neutral-400 mb-2">{c.role}</p>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">{c.name}</h3>
                <a
                  href={c.phoneHref}
                  className="inline-flex items-center gap-2 text-lg text-neutral-900 hover:text-neutral-500 transition-colors"
                >
                  <Icon name="Phone" size={18} />
                  {c.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Icon name="MapPin" size={24} className="text-neutral-900 mb-3" />
            <h4 className="font-semibold text-neutral-900 mb-1">Где мы</h4>
            <p className="text-neutral-600 text-sm">г. Братск, Иркутская область</p>
          </div>
          <div>
            <Icon name="Clock" size={24} className="text-neutral-900 mb-3" />
            <h4 className="font-semibold text-neutral-900 mb-1">Когда отвечаем</h4>
            <p className="text-neutral-600 text-sm">Ежедневно с 8:00 до 22:00</p>
          </div>
          <div>
            <Icon name="MessageCircle" size={24} className="text-neutral-900 mb-3" />
            <h4 className="font-semibold text-neutral-900 mb-1">Как удобнее</h4>
            <p className="text-neutral-600 text-sm">Звонок, WhatsApp или Telegram</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
