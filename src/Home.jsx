import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Linkedin, Send, Briefcase, TrendingUp, UserCog, GraduationCap, Mic, ExternalLink, BrainCog, BarChart3, Settings2
} from 'lucide-react';

const skills = [
  { icon: <BrainCog size={18} />, label: "Продуктовое управление" },
  { icon: <BarChart3 size={18} />, label: "Стратегический маркетинг" },
  { icon: <UserCog size={18} />, label: "CRM и программы лояльности" },
  { icon: <Settings2 size={18} />, label: "Оптимизация процессов" },
  { icon: <TrendingUp size={18} />, label: "E-commerce" },
  { icon: <Briefcase size={18} />, label: "Управление проектами" },
  { icon: <BarChart3 size={18} />, label: "Аналитика, unit-экономика" },
  { icon: <BrainCog size={18} />, label: "AI-инструменты (ChatGPT)" },
  { icon: <Settings2 size={18} />, label: "Agile, Scrum" },
  { icon: <Briefcase size={18} />, label: "Запуск новых продуктов" },
  { icon: <UserCog size={18} />, label: "Управление командой" },
  { icon: <BarChart3 size={18} />, label: "BI (Google Sheets, Exponea)" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex flex-col items-center px-4 py-8">
      {/* Фото профиля (анимированная заглушка) */}
      <motion.div 
        className="w-32 h-32 rounded-full bg-neutral-200 flex items-center justify-center text-4xl font-bold mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        МБ
      </motion.div>
      <motion.h1 
        className="text-3xl font-semibold mb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Михаил Бариков
      </motion.h1>
      <motion.div
        className="text-lg text-neutral-600 mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        CEO бренда Вкусмил (Foodtech, подписочные сервисы, AI)
      </motion.div>
      <motion.div
        className="flex flex-row gap-4 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <a href="https://www.linkedin.com/in/mikhail-barikov-0841b636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline underline-offset-2 text-blue-600 hover:text-blue-800 transition"><Linkedin size={18}/>LinkedIn</a>
        <a href="https://t.me/betelgejse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline underline-offset-2 text-blue-600 hover:text-blue-800 transition"><Send size={18}/>Telegram</a>
        <a href="mailto:m.barikov@yandex.ru" className="flex items-center gap-1 underline underline-offset-2 text-blue-600 hover:text-blue-800 transition"><Mail size={18}/>Email</a>
      </motion.div>
      {/* О себе */}
      <motion.section 
        className="max-w-xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-2"><UserCog size={22}/><h2 className="text-xl font-medium">О себе</h2></div>
        <p className="text-base text-neutral-800 mb-3">
          Руководитель и продуктовый лидер в foodtech, эксперт по запуску и масштабированию подписочных сервисов. Сейчас — CEO бренда Вкусмил (Гроуфуд × Вкусвилл): управляю развитием продукта, командой, экономикой и клиентским опытом. Фокус на устойчивом росте, эффективности и ценности для клиента.<br /><br />
          В работе соединяю стратегию, аналитику и современные инструменты: BI (Google Sheets), автоматизацию, AI (ChatGPT). Регулярно тестирую гипотезы, строю процессы на основе данных, внедряю лучшие практики retention и коммуникаций.<br /><br />
          Английским владею только на уровне работы с помощью AI-инструментов (чтение, письменная коммуникация с поддержкой переводчиков/ChatGPT).
        </p>
      </motion.section>
      {/* Опыт */}
      <motion.section 
        className="max-w-xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-2"><Briefcase size={22}/><h2 className="text-xl font-medium">Опыт работы</h2></div>
        <div className="space-y-4 text-neutral-800">
          <div>
            <strong>CEO — Вкусмил (Гроуфуд × Вкусвилл)</strong> · июнь 2023 — н.в.<br />
            • Руководство брендом рационов готовой еды, развитие команды (30 человек), P&L<br />
            • Полный перезапуск продукта, улучшение качества, позиционирования и клиентского пути<br />
            • Вывод юнит-экономики в плюс, рост бизнеса х2 ежегодно, выручка ~30 млн руб/мес<br />
            • Внедрение AI-инструментов: аналитика, автоматизация, презентации, поддержка принятия решений
          </div>
          <div>
            <strong>Директор по клиентскому сервису, коммуникациям и лояльности — Гроуфуд</strong> · январь 2020 — май 2023<br />
            • Руководство контакт-центром, CRM-маркетингом, качеством сервиса<br />
            • Внедрение и развитие системы NPS (рост с 25% до 50%), систематизация обратной связи<br />
            • Выстраивание CRM-стратегии, автоматизация коммуникаций, аналитика клиентских данных
          </div>
          <div>
            <strong>Руководитель CRM маркетинга и клиентского опыта — Гроуфуд</strong> · сентябрь 2018 — декабрь 2019<br />
            • Разработка стратегий удержания и возврата клиентов, рост LTV, ARPPU<br />
            • Запуск коммуникационной платформы, развитие новых каналов<br />
            • Построение системы аналитики, ведение бэклога гипотез, тестирование
          </div>
          <div>
            <strong>Руководитель департамента клиентского маркетинга — Юлмарт</strong> · март 2016 — декабрь 2017<br />
            • Запуск программ лояльности (Такса и КИТ), внедрение омниканальных коммуникаций и NPS<br />
            • Управление проектами CRM, развитие личного кабинета, B2B-сервисов, безопасность данных<br />
            • Аналитика и развитие клиентской базы, автоматизация, внедрение ботов и принципа одного окна для чатов
            • Организация работы департамента (15 сотрудников)
          </div>
          <div>
            <strong>Руководитель отдела управления взаимоотношениями с клиентами — Юлмарт</strong> · январь 2015 — март 2016<br />
            • Операционное управление бонусной системой, развитие программы лояльности
            • Запуск и оптимизация CRM на базе SAP, перевод данных, аудит и сегментация клиентской базы
            • Разработка и внедрение новой концепции лояльности, развитие продукта подарочных сертификатов
            • Организация работы отдела (5 сотрудников)
          </div>
          <div>
            <strong>Менеджер проектов — Юлмарт</strong> · июнь 2013 — январь 2015<br />
            • BTL-акции, кросс-маркетинговые проекты (РивГош, Сбербанк), аудит программы лояльности
            • Маркетинговая поддержка запуска новых продуктов, развитие каналов доставки
          </div>
          <div>
            <strong>Руководитель отдела BTL — Экспресс-Реклама</strong> · июнь 2009 — февраль 2012<br />
            • Организация BTL и директ-маркетинговых проектов, руководство командой (4 человека)
            • Разработка предложений и контроль исполнения для крупных клиентов: Valio, Лента, Евросеть, Ecco
          </div>
        </div>
      </motion.section>
      {/* Навыки */}
      <motion.section 
        className="max-w-xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-2"><Settings2 size={22}/><h2 className="text-xl font-medium">Навыки</h2></div>
        <ul className="flex flex-wrap gap-2 text-base">
          {skills.map(({icon, label}, i) => (
            <motion.li 
              key={label} 
              className="bg-neutral-100 rounded-xl px-3 py-1 flex items-center gap-2 shadow-sm hover:shadow transition-all cursor-default"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.13 + i*0.06, duration: 0.4 }}
            >{icon}{label}</motion.li>
          ))}
        </ul>
      </motion.section>
      {/* Публичные выступления */}
      <motion.section 
        className="max-w-xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-2"><Mic size={22}/><h2 className="text-xl font-medium">Публичные выступления</h2></div>
        <ul className="list-disc ml-5 text-base text-neutral-800">
          <li><a href="https://gotovo-expo.ru/tpost/nl6s1jh4y1-nachinaem-znakomit-vas-so-spikerami-konf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 underline underline-offset-2 text-blue-600 hover:text-blue-800 transition"><ExternalLink size={16}/>Готово Экспо 2024: Как построить подписку на готовую еду</a></li>
          <li>Электронная торговля — 2016</li>
          <li>Retail business russia & eaeu — 2016</li>
          <li>Премия прав потребителей — 2016</li>
        </ul>
      </motion.section>
      {/* Образование */}
      <motion.section 
        className="max-w-xl w-full mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-2"><GraduationCap size={22}/><h2 className="text-xl font-medium">Образование</h2></div>
        <div className="text-base text-neutral-800">
          2005 — Уральский федеральный университет им. Б.Н. Ельцина, Менеджмент организации
        </div>
      </motion.section>
      {/* Контакты */}
      <footer className="mt-8 text-sm text-neutral-500 text-center w-full">
        <div className="mb-2 flex items-center gap-3 justify-center">
          <a href="mailto:m.barikov@yandex.ru" className="flex items-center gap-1 underline"><Mail size={16}/>m.barikov@yandex.ru</a>
          <span>·</span>
          <a href="https://t.me/betelgejse" className="flex items-center gap-1 underline"><Send size={16}/>@betelgejse</a>
          <span>·</span>
          <a href="https://www.linkedin.com/in/mikhail-barikov-0841b636" className="flex items-center gap-1 underline"><Linkedin size={16}/>LinkedIn</a>
        </div>
        Михаил Бариков · Москва · 2025
      </footer>
    </main>
  );
}

