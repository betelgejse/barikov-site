import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Send,
  Briefcase,
  Settings2,
  UserCog,
  BarChart3,
  BrainCog,
  TrendingUp,
} from "lucide-react";

const skills = [
  { icon: <BrainCog size={18} />, label: "Продуктовое управление" },
  { icon: <BarChart3 size={18} />, label: "Стратегический маркетинг" },
  { icon: <UserCog size={18} />, label: "CRM и программы лояльности" },
  { icon: <Settings2 size={18} />, label: "Оптимизация процессов" },
  { icon: <TrendingUp size={18} />, label: "E-commerce" },
];

export default function Home() {
  return (
    <main className="p-4 md:p-8 space-y-8 max-w-4xl mx-auto">
      {/* Профиль */}
      <section
        id="profile"
        className="flex flex-col items-center text-center space-y-4"
      >
        <div className="w-24 h-24 rounded-full bg-neutral-200"></div>
        <h1 className="text-3xl font-bold">МБ</h1>
        <h2 className="text-xl">Михаил Бариков</h2>
        <p className="text-neutral-500">
          CEO бренда Вкусмил (Foodtech, подписочные сервисы, AI)
        </p>
        <div className="flex gap-4">
          <a
            href="mailto:info@example.com"
            className="text-neutral-500 hover:text-neutral-800"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://t.me/"
            className="text-neutral-500 hover:text-neutral-800"
          >
            <Send size={24} />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="text-neutral-500 hover:text-neutral-800"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      {/* О себе */}
      <section id="about">
        <motion.div
          className="bg-white rounded-2xl shadow-xl px-8 py-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={22} className="text-neutral-400" />
            <h2 className="text-xl font-medium">О себе</h2>
          </div>
          <div className="space-y-4 text-neutral-800">
            <p>
              Руководитель и продуктовый лидер в foodtech, эксперт по запуску и
              масштабированию подписочных сервисов. Сейчас — CEO бренда
              Вкусмил (Гроуфуд × Вкусвилл): управляю развитием продукта,
              командой, экономикой и клиентским опытом. Фокус на устойчивом
              росте, эффективности и ценности для клиента.
            </p>
            <p>
              В работе соединяю стратегию, аналитику и современные
              инструменты: BI (Google Sheets), автоматизацию, AI (ChatGPT).
              Регулярно тестирую гипотезы, строю процессы на основе данных,
              внедряю лучшие практики retention и коммуникаций.
            </p>
            <p>
              Английским владею на уровне чтения и письменной коммуникации с
              поддержкой переводчиков и AI‑инструментов.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Опыт */}
      <section id="experience">
        <motion.div
          className="bg-white rounded-2xl shadow-xl px-8 py-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Briefcase size={22} className="text-neutral-400" />
            <h2 className="text-xl font-medium">Опыт работы</h2>
          </div>
          <div className="space-y-6 text-neutral-800">
            <div>
              <strong>CEO — Вкусмил (Гроуфуд × Вкусвилл)</strong> · июнь 2023 — н. в.<br />
              <ul className="list-disc ml-5 space-y-1">
                <li>
                  Руководство брендом рационов готовой еды, развитие команды (30 человек), P&L
                </li>
                <li>
                  Полный перезапуск продукта, улучшение качества, позиционирования
                  и клиентского пути
                </li>
                <li>
                  Вывод юнит‑экономики в плюс, рост бизнеса x2 ежегодно, выручка 【30 млн руб/ мес】
                </li>
                <li>
                  Внедрение AI‑инструментов: аналитика, автоматизация, презентации,
                  поддержка принятия решений
                </li>
              </ul>
            </div>
            <div>
              <strong>
                Директор по клиентскому сервису, коммуникациям и лояльности — Гроуфуд
              </strong>{" "}
              · январь 2020 — май 2023<br />
              <ul className="list-disc ml-5 space-y-1">
                <li>Руководство контакт‑центром, CRM‑маркетингом, качеством сервиса</li>
                <li>
                  Внедрение и развитие системы NPS (рост с 25 % до 50 %),
                  систематизация обратной связи
                </li>
                <li>
                  Выстраивание CRM‑стратегии, автоматизация коммуникаций, аналитика
                  клиентских данных
                </li>
              </ul>
            </div>
            <div>
              <strong>
                Руководитель CRM‑маркетинга и клиентского опыта — Гроуфуд
              </strong>{" "}
              · сентябрь 2018 — декабрь 2019<br />
              <ul className="list-disc ml-5 space-y-1">
                <li>Разработка стратегий удержания и возврата клиентов, рост LTV, ARPPU</li>
                <li>Запуск коммуникационной платформы, развитие новых каналов</li>
                <li>
                  Построение системы аналитики, ведение бэклога гипотез, тестирование
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Навыки */}
      <section id="skills">
        <motion.div
          className="bg-white rounded-2xl shadow-xl px-8 py-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}

          <div className="flex items-center gap-2 mb-3">
            <Settings2 size={22} className="text-neutral-400" />
            <h2 className="text-xl font-medium">Навыки</h2>
          </div>
          <ul className="flex flex-wrap gap-3 text-base">
            {    {skills.map(({ icon, label }) => (
      <li key={label} className="bg-neutral-100 border rounded-xl px-4 py-2 flex items-center gap-2 shadow-sm">
        {icon}
        {label}
      </li>
    ))}
  </ul>
        </motion.div>
      </section>

      {/* Футер */}
      <footer className="mt-16 text-neutral-500 text-center w-full">
        Михаил Бариков · Москва · 2025
      </footer>
    </main>
  );
}
