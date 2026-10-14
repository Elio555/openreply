import type { Locale } from "@/lib/i18n";

// Where "request access" buttons point. Sign-up is invite-only for now, so
// this is a contact channel; swap it for a checkout link once billing exists.
export const LANDING_CTA_URL = "/login";

export type LandingLang = "it" | "en" | "ru";

export function landingLang(locale: Locale): LandingLang {
  return locale === "it" || locale === "ru" ? locale : "en";
}

type Item = { title: string; body: string };

export interface LandingCopy {
  meta: { title: string; description: string };
  nav: { features: string; how: string; faq: string; login: string };
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    cta: string;
    secondary: string;
    note: string;
  };
  demo: {
    commenter: string;
    comment: string;
    publicReply: string;
    dm: string;
    button: string;
    link: string;
  };
  trust: string[];
  how: { title: string; subtitle: string; steps: Item[] };
  features: { title: string; subtitle: string; items: Item[] };
  stats: { value: string; label: string }[];
  useCases: { title: string; items: Item[] };
  faq: { title: string; items: Item[] };
  final: { title: string; subtitle: string; cta: string };
  footer: { privacy: string; terms: string; deletion: string; rights: string };
}

const it: LandingCopy = {
  meta: {
    title: "SuperDM — Trasforma ogni commento Instagram in un cliente",
    description:
      "Quando qualcuno commenta una parola chiave sotto il tuo post o reel, SuperDM gli invia subito un DM con il tuo link. API ufficiali Meta, statistiche sui click e obbligo di follow.",
  },
  nav: { features: "Funzioni", how: "Come funziona", faq: "FAQ", login: "Accedi" },
  hero: {
    eyebrow: "Automazione DM per Instagram",
    title: "Ogni commento,",
    titleAccent: "un cliente.",
    subtitle:
      "Chi commenta la tua parola chiave riceve in pochi secondi un DM con il tuo link. Tu crei il contenuto, SuperDM fa il resto, 24 ore su 24.",
    cta: "Richiedi l'accesso",
    secondary: "Guarda come funziona",
    note: "Funziona con account Instagram Business e Creator.",
  },
  demo: {
    commenter: "giulia.fit",
    comment: "GUIDA",
    publicReply: "Ti ho mandato un DM! 📩",
    dm: "Ciao giulia.fit! Ecco la guida gratuita che hai chiesto 👇",
    button: "Apri la guida",
    link: "Link tracciato · 1 click",
  },
  trust: [
    "API ufficiali Meta",
    "Nessuna password Instagram",
    "Token cifrati AES-256",
    "Dati trattati secondo il GDPR",
  ],
  how: {
    title: "Attivo in tre passaggi",
    subtitle: "Nessun codice, nessun bot da configurare.",
    steps: [
      {
        title: "Collega Instagram",
        body: "Accedi con la tua email e collega il tuo account professionale con il login ufficiale di Instagram.",
      },
      {
        title: "Crea la campagna",
        body: "Scegli il post o il reel, la parola chiave (es. GUIDA) e il messaggio con il tuo link.",
      },
      {
        title: "Pubblica e incassa",
        body: "Chi commenta riceve il DM in automatico. Tu vedi invii, click e conversioni in tempo reale.",
      },
    ],
  },
  features: {
    title: "Tutto quello che serve per vendere nei DM",
    subtitle: "Pensato per creator, coach, e-commerce e agenzie.",
    items: [
      { title: "Commento → DM", body: "Una o più parole chiave per post o reel, esatte o parziali. Il DM parte in pochi secondi." },
      { title: "Risposta pubblica", body: "Rispondi anche sotto il commento, con più varianti scelte a caso per sembrare naturale." },
      { title: "Obbligo di follow", body: "Il link arriva solo dopo che la persona ti segue. Più follower da ogni campagna." },
      { title: "DM e risposte alle Storie", body: "\"Scrivimi LINK\" o \"Rispondi LINK a questa storia\": la stessa campagna risponde anche lì." },
      { title: "Link tracciati", body: "Click totali, click unici e CTR per ogni campagna. Sai cosa converte davvero." },
      { title: "Due pulsanti per DM", body: "Due link nello stesso messaggio, ognuno con le sue statistiche." },
      { title: "Messaggi personalizzati", body: "Saluta ogni persona per nome con {username} e aggiungi un messaggio di follow-up." },
      { title: "Sicuro con i limiti di Meta", body: "Rispetta il limite di 750 risposte l'ora e mette in coda il resto: nessun messaggio perso." },
      { title: "Più account, un team", body: "Collega più profili Instagram e invita il tuo team con ruoli Proprietario, Admin e Membro." },
      { title: "Inbox integrata", body: "Leggi e rispondi ai DM direttamente dalla dashboard, senza aprire Instagram." },
      { title: "Statistiche e report", body: "Andamento dei follower, invii giornalieri e report condivisibili con i tuoi clienti." },
      { title: "Modelli e import CSV", body: "Parti da un modello pronto o importa decine di campagne in un colpo solo." },
    ],
  },
  stats: [
    { value: "< 5 s", label: "dal commento al DM" },
    { value: "750/h", label: "risposte per account, in coda oltre il limite" },
    { value: "24/7", label: "sempre attivo, anche mentre dormi" },
  ],
  useCases: {
    title: "Per chi è SuperDM",
    items: [
      { title: "Creator", body: "Regala la tua guida o il tuo preset a chi commenta e fai crescere i follower." },
      { title: "Coach e consulenti", body: "Porta chi commenta direttamente al tuo funnel o alla prenotazione della call." },
      { title: "E-commerce", body: "Invia link al prodotto e codici sconto a chi chiede \"prezzo\" sotto il post." },
      { title: "Agenzie", body: "Gestisci gli account dei clienti con workspace separati e report da condividere." },
    ],
  },
  faq: {
    title: "Domande frequenti",
    items: [
      { title: "Serve un account Instagram professionale?", body: "Sì: Business o Creator. Il passaggio da account personale è gratuito e si fa in un minuto dalle impostazioni di Instagram." },
      { title: "Rischio blocchi o ban?", body: "SuperDM usa solo le API ufficiali di Meta, non chiede la tua password e rispetta i limiti di invio. Non è un bot che simula un utente." },
      { title: "Funziona anche con le Storie e i DM?", body: "Sì. Puoi far rispondere la stessa campagna quando qualcuno ti scrive la parola chiave in DM o risponde a una tua Storia." },
      { title: "Posso usarlo insieme a ManyChat o altri tool?", body: "Sullo stesso account è meglio usare un solo strumento per i DM. Ti aiutiamo noi a spostare le conversazioni su SuperDM." },
      { title: "Che fine fanno i miei dati?", body: "I token di Instagram sono cifrati e trattiamo i dati secondo il GDPR. Puoi scollegarti e chiedere la cancellazione quando vuoi." },
    ],
  },
  final: {
    title: "Il tuo prossimo reel può portarti clienti, non solo like.",
    subtitle: "Attiva SuperDM e trasforma ogni commento in una conversazione.",
    cta: "Richiedi l'accesso",
  },
  footer: {
    privacy: "Privacy",
    terms: "Termini",
    deletion: "Cancellazione dati",
    rights: "Tutti i diritti riservati.",
  },
};

const en: LandingCopy = {
  meta: {
    title: "SuperDM — Turn every Instagram comment into a customer",
    description:
      "When someone comments your keyword on a post or reel, SuperDM instantly sends them a DM with your link. Official Meta APIs, click tracking and follow gate.",
  },
  nav: { features: "Features", how: "How it works", faq: "FAQ", login: "Log in" },
  hero: {
    eyebrow: "Instagram DM automation",
    title: "Every comment,",
    titleAccent: "a customer.",
    subtitle:
      "Anyone who comments your keyword gets a DM with your link within seconds. You create the content, SuperDM does the rest, around the clock.",
    cta: "Request access",
    secondary: "See how it works",
    note: "Works with Instagram Business and Creator accounts.",
  },
  demo: {
    commenter: "giulia.fit",
    comment: "GUIDE",
    publicReply: "Sent you a DM! 📩",
    dm: "Hi giulia.fit! Here's the free guide you asked for 👇",
    button: "Open the guide",
    link: "Tracked link · 1 click",
  },
  trust: [
    "Official Meta APIs",
    "No Instagram password",
    "AES-256 encrypted tokens",
    "Data handled under the GDPR",
  ],
  how: {
    title: "Live in three steps",
    subtitle: "No code, no bot builder.",
    steps: [
      { title: "Connect Instagram", body: "Sign in with your email and connect your professional account with the official Instagram login." },
      { title: "Create a campaign", body: "Pick the post or reel, the keyword (e.g. GUIDE) and the message with your link." },
      { title: "Publish and convert", body: "Commenters get the DM automatically. You see sends, clicks and conversions in real time." },
    ],
  },
  features: {
    title: "Everything you need to sell in the DMs",
    subtitle: "Built for creators, coaches, e-commerce and agencies.",
    items: [
      { title: "Comment → DM", body: "One or more keywords per post or reel, exact or partial match. The DM goes out in seconds." },
      { title: "Public reply", body: "Also reply under the comment, with several variants picked at random to look natural." },
      { title: "Follow gate", body: "The link arrives only after they follow you. More followers from every campaign." },
      { title: "DM and Story replies", body: "\"DM me LINK\" or \"Reply LINK to this story\": the same campaign answers there too." },
      { title: "Tracked links", body: "Total clicks, unique clicks and CTR per campaign. Know what really converts." },
      { title: "Two buttons per DM", body: "Two links in the same message, each with its own stats." },
      { title: "Personalised messages", body: "Greet everyone by name with {username} and add a follow-up message." },
      { title: "Safe with Meta's limits", body: "Stays under 750 replies per hour and queues the rest — no message lost." },
      { title: "Multiple accounts, one team", body: "Connect several Instagram profiles and invite your team as Owner, Admin or Member." },
      { title: "Built-in inbox", body: "Read and answer DMs from the dashboard without opening Instagram." },
      { title: "Analytics and reports", body: "Follower growth, daily sends and shareable reports for your clients." },
      { title: "Templates and CSV import", body: "Start from a ready-made template or import dozens of campaigns at once." },
    ],
  },
  stats: [
    { value: "< 5 s", label: "from comment to DM" },
    { value: "750/h", label: "replies per account, queued beyond the limit" },
    { value: "24/7", label: "always on, even while you sleep" },
  ],
  useCases: {
    title: "Who SuperDM is for",
    items: [
      { title: "Creators", body: "Give away your guide or preset to commenters and grow your followers." },
      { title: "Coaches and consultants", body: "Send commenters straight to your funnel or call booking." },
      { title: "E-commerce", body: "Send product links and discount codes to anyone who asks \"price\" under a post." },
      { title: "Agencies", body: "Run client accounts in separate workspaces with shareable reports." },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      { title: "Do I need a professional Instagram account?", body: "Yes: Business or Creator. Switching from a personal account is free and takes a minute in Instagram's settings." },
      { title: "Could my account get blocked?", body: "SuperDM uses only Meta's official APIs, never asks for your password and respects sending limits. It is not a bot pretending to be a user." },
      { title: "Does it work with Stories and DMs?", body: "Yes. The same campaign can reply when someone DMs you the keyword or replies to one of your Stories." },
      { title: "Can I use it alongside ManyChat or other tools?", body: "On the same account, use a single DM tool. We help you move your conversations to SuperDM." },
      { title: "What happens to my data?", body: "Instagram tokens are encrypted and we process data under the GDPR. You can disconnect and request deletion at any time." },
    ],
  },
  final: {
    title: "Your next reel can bring you customers, not just likes.",
    subtitle: "Turn on SuperDM and turn every comment into a conversation.",
    cta: "Request access",
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    deletion: "Data deletion",
    rights: "All rights reserved.",
  },
};

const ru: LandingCopy = {
  meta: {
    title: "SuperDM — превращайте каждый комментарий в Instagram в клиента",
    description:
      "Когда кто-то пишет ключевое слово под вашим постом или рилсом, SuperDM сразу отправляет ему сообщение с вашей ссылкой. Официальные API Meta, статистика кликов и обязательная подписка.",
  },
  nav: { features: "Возможности", how: "Как это работает", faq: "Вопросы", login: "Войти" },
  hero: {
    eyebrow: "Автоматизация директа в Instagram",
    title: "Каждый комментарий —",
    titleAccent: "новый клиент.",
    subtitle:
      "Тот, кто оставил ключевое слово, за секунды получает сообщение с вашей ссылкой. Вы создаёте контент — SuperDM делает остальное, круглосуточно.",
    cta: "Запросить доступ",
    secondary: "Как это работает",
    note: "Работает с аккаунтами Instagram Business и Creator.",
  },
  demo: {
    commenter: "giulia.fit",
    comment: "ГАЙД",
    publicReply: "Отправил тебе сообщение! 📩",
    dm: "Привет, giulia.fit! Вот бесплатный гайд, который ты просила 👇",
    button: "Открыть гайд",
    link: "Отслеживаемая ссылка · 1 клик",
  },
  trust: [
    "Официальные API Meta",
    "Без пароля от Instagram",
    "Токены шифруются AES-256",
    "Данные по правилам GDPR",
  ],
  how: {
    title: "Запуск в три шага",
    subtitle: "Без кода и без настройки ботов.",
    steps: [
      { title: "Подключите Instagram", body: "Войдите по email и подключите профессиональный аккаунт через официальный вход Instagram." },
      { title: "Создайте кампанию", body: "Выберите пост или рилс, ключевое слово (например, ГАЙД) и сообщение со ссылкой." },
      { title: "Публикуйте и продавайте", body: "Комментаторы получают сообщение автоматически. Вы видите отправки, клики и конверсии в реальном времени." },
    ],
  },
  features: {
    title: "Всё, чтобы продавать в директе",
    subtitle: "Для блогеров, коучей, интернет-магазинов и агентств.",
    items: [
      { title: "Комментарий → сообщение", body: "Одно или несколько ключевых слов на пост или рилс. Сообщение уходит за секунды." },
      { title: "Публичный ответ", body: "Ответ и под комментарием — несколько вариантов выбираются случайно, чтобы выглядеть естественно." },
      { title: "Обязательная подписка", body: "Ссылка приходит только после подписки. Больше подписчиков с каждой кампании." },
      { title: "Директ и ответы на сторис", body: "«Напиши мне ССЫЛКА» или «Ответь ССЫЛКА на эту сторис» — кампания ответит и там." },
      { title: "Отслеживаемые ссылки", body: "Все клики, уникальные клики и CTR по каждой кампании. Видно, что реально продаёт." },
      { title: "Две кнопки в сообщении", body: "Две ссылки в одном сообщении, у каждой своя статистика." },
      { title: "Персональные сообщения", body: "Обращайтесь к каждому по имени через {username} и добавляйте follow-up сообщение." },
      { title: "В рамках лимитов Meta", body: "Не больше 750 ответов в час, остальное ставится в очередь — ни одно сообщение не теряется." },
      { title: "Несколько аккаунтов, одна команда", body: "Подключайте несколько профилей и приглашайте команду с ролями Владелец, Администратор и Участник." },
      { title: "Встроенный директ", body: "Читайте и отвечайте на сообщения прямо из дашборда, не открывая Instagram." },
      { title: "Статистика и отчёты", body: "Рост подписчиков, отправки по дням и отчёты, которыми можно поделиться с клиентами." },
      { title: "Шаблоны и импорт CSV", body: "Начните с готового шаблона или импортируйте десятки кампаний сразу." },
    ],
  },
  stats: [
    { value: "< 5 с", label: "от комментария до сообщения" },
    { value: "750/ч", label: "ответов на аккаунт, остальное в очереди" },
    { value: "24/7", label: "работает всегда, даже пока вы спите" },
  ],
  useCases: {
    title: "Для кого SuperDM",
    items: [
      { title: "Блогеры", body: "Дарите гайд или пресет тем, кто комментирует, и растите аудиторию." },
      { title: "Коучи и консультанты", body: "Ведите комментаторов прямо в воронку или на запись на звонок." },
      { title: "Интернет-магазины", body: "Отправляйте ссылку на товар и промокод тем, кто спрашивает «цена»." },
      { title: "Агентства", body: "Ведите аккаунты клиентов в отдельных пространствах с отчётами." },
    ],
  },
  faq: {
    title: "Частые вопросы",
    items: [
      { title: "Нужен ли профессиональный аккаунт?", body: "Да: Business или Creator. Переключиться с личного аккаунта можно бесплатно за минуту в настройках Instagram." },
      { title: "Могут ли заблокировать аккаунт?", body: "SuperDM использует только официальные API Meta, не спрашивает пароль и соблюдает лимиты отправки. Это не бот, имитирующий пользователя." },
      { title: "Работает ли со сторис и директом?", body: "Да. Кампания может отвечать, когда вам пишут ключевое слово в директ или отвечают на сторис." },
      { title: "Можно ли вместе с ManyChat и другими сервисами?", body: "На одном аккаунте лучше использовать один сервис для директа. Мы поможем перенести переписки в SuperDM." },
      { title: "Что с моими данными?", body: "Токены Instagram шифруются, данные обрабатываются по GDPR. Отключиться и запросить удаление можно в любой момент." },
    ],
  },
  final: {
    title: "Ваш следующий рилс может приносить клиентов, а не только лайки.",
    subtitle: "Подключите SuperDM и превратите каждый комментарий в диалог.",
    cta: "Запросить доступ",
  },
  footer: {
    privacy: "Конфиденциальность",
    terms: "Условия",
    deletion: "Удаление данных",
    rights: "Все права защищены.",
  },
};

export const LANDING_COPY: Record<LandingLang, LandingCopy> = { it, en, ru };
