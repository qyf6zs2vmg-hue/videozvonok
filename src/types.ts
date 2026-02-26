export type Language = "en" | "ru" | "uz";

export interface User {
  id: string; // 4-digit ID
  name: string;
  email: string;
}

export interface Contact {
  id: string;
  name: string;
  digitId: string;
}

export interface Translation {
  home: string;
  help: string;
  profile: string;
  products: string;
  contacts: string;
  login: string;
  register: string;
  logout: string;
  call: string;
  hangup: string;
  enterId: string;
  yourId: string;
  securityInfo: string;
  howToUse: string;
  developer: string;
  projects: string;
  apps: string;
  comingSoon: string;
  save: string;
  addContact: string;
  name: string;
  id: string;
  search: string;
  noContacts: string;
  welcome: string;
  startCall: string;
  language: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    home: "Home",
    help: "Help Centre",
    profile: "Profile",
    products: "Our Products",
    contacts: "Contacts",
    login: "Login",
    register: "Register",
    logout: "Logout",
    call: "Call",
    hangup: "Hang up",
    enterId: "Enter User ID",
    yourId: "Your ID",
    securityInfo: "Connectly uses end-to-end encrypted WebRTC technology. Your calls are private and secure.",
    howToUse: "To start a call, enter the 4-digit ID of the person you want to reach and press Call.",
    developer: "Developer: Salmon Davronov",
    projects: "Projects",
    apps: "Applications",
    comingSoon: "Coming Soon",
    save: "Save",
    addContact: "Add Contact",
    name: "Name",
    id: "ID",
    search: "Search",
    noContacts: "No contacts yet",
    welcome: "Welcome to Connectly",
    startCall: "Start a Video Call",
    language: "Language",
  },
  ru: {
    home: "Главная",
    help: "Помощь",
    profile: "Профиль",
    products: "Наши продукты",
    contacts: "Контакты",
    login: "Вход",
    register: "Регистрация",
    logout: "Выход",
    call: "Позвонить",
    hangup: "Завершить",
    enterId: "Введите ID пользователя",
    yourId: "Ваш ID",
    securityInfo: "Connectly использует технологию WebRTC с оконечным шифрованием. Ваши звонки конфиденциальны и безопасны.",
    howToUse: "Чтобы начать звонок, введите 4-значный ID человека, с которым хотите связаться, и нажмите 'Позвонить'.",
    developer: "Разработчик: Salmon Davronov",
    projects: "Проекты",
    apps: "Приложения",
    comingSoon: "Скоро появится",
    save: "Сохранить",
    addContact: "Добавить контакт",
    name: "Имя",
    id: "ID",
    search: "Поиск",
    noContacts: "Контактов пока нет",
    welcome: "Добро пожаловать в Connectly",
    startCall: "Начать видеозвонок",
    language: "Язык",
  },
  uz: {
    home: "Asosiy",
    help: "Yordam markazi",
    profile: "Profil",
    products: "Mahsulotlarimiz",
    contacts: "Kontaktlar",
    login: "Kirish",
    register: "Ro'yxatdan o'tish",
    logout: "Chiqish",
    call: "Qo'ng'iroq",
    hangup: "Tugatish",
    enterId: "Foydalanuvchi ID sini kiriting",
    yourId: "Sizning ID ingiz",
    securityInfo: "Connectly end-to-end shifrlangan WebRTC texnologiyasidan foydalanadi. Qo'ng'iroqlaringiz maxfiy va xavfsiz.",
    howToUse: "Qo'ng'iroqni boshlash uchun bog'lanmoqchi bo'lgan odamning 4 xonali ID sini kiriting va 'Qo'ng'iroq' tugmasini bosing.",
    developer: "Dasturchi: Salmon Davronov",
    projects: "Loyihalar",
    apps: "Ilovalar",
    comingSoon: "Yaqinda kutilmoqda",
    save: "Saqlash",
    addContact: "Kontakt qo'shish",
    name: "Ism",
    id: "ID",
    search: "Qidiruv",
    noContacts: "Hozircha kontaktlar yo'q",
    welcome: "Connectly-ga xush kelibsiz",
    startCall: "Videoqo'ng'iroqni boshlash",
    language: "Til",
  },
};
