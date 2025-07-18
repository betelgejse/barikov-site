import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Linkedin, Send, Briefcase, Settings2, GraduationCap, Mic, ExternalLink, UserCog, BarChart3, BrainCog, TrendingUp
} from "lucide-react";

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
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center py-12 px-4">
      {/* Профиль */}
      <motion.div
        className="max-w-2xl w-full flex flex-col items-center gap-4 bg-white shadow-2xl rounded-2xl px-8 py-10 mb-12"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <div className="w-24 h-24 rounded-full bg-neutral-200 flex items-center justify-center text-3xl font-bold mb-2 text-neutral-500">МБ</div>
        <h1 className="text-4xl font-semibold text-center tracking-tight mb-2">Михаил Бариков</h1>
        <div className="text-lg text-neutral-600 text-center mb-1">
          CEO бренда Вкусмил (Foodtech, подписочные сервисы, AI)
        </div>
        <div className="flex flex-row gap-3 mb-2">
          <a href="https://www.linkedin.com/in/mikhail-barikov-0841b636" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-50 border hover:bg-blue-50 transition text-blue-600">
            <Linkedin size={18}/>LinkedIn
          </a>
          <a href="https://t.me/betelgejse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-50 border hover:bg-blue-50 transition text-blue-600">
            <Send size={18}/>Telegram
          </a>


