/* ===================================================================
   ДАННЫЕ ОБ ИГРАХ
   title       — название (не переводится)
   gif         — путь до файла (.gif или .mp4/.webm — определяется сам)
   tags        — technologies / genre. Жанровые слова из GENRE_TR
                 переводятся автоматически, остальные (Unity, Firebase...)
                 остаются как есть на всех языках.
   description — объект { ru, uk, en }
=================================================================== */

const MOBILE_GAMES = [
  {
    title: "Chicken Spin",
    gif: "assets/mobile/Chicken Spin.mp4",
    icon: "assets/mobile/ChickenSpin Icon.png",
    tags: ["Аркада", "Unity", "Firebase SDK Analytics", "Animator", "iOS"],
    description: {
      ru: "Весёлая аркада про курицу — крути, собирай очки, не теряй перья.",
      uk: "Весела аркада про курку — крутись, збирай очки, не губи пір'я.",
      en: "Nice Arcade About Chicken."
    }
  },
  {
    title: "Taroxa",
    gif: "assets/mobile/Taroxa.mp4",
    icon: "assets/mobile/Taroxa Icon.png",
    tags: ["Telegram Mini App", "Google Analytics", "Supabase", "iOS"],
    description: {
      ru: "Приятно анимированная Telegram Mini App игра про Таро-карты и предсказания.",
      uk: "Приємно анімована Telegram Mini App гра про Таро-карти та передбачення.",
      en: "A beautifully animated Telegram Mini App about tarot cards and fortune-telling."
    }
  },
  {
    title: "CVGrams",
    gif: "assets/mobile/CV GRAMs.MP4",
    icon: "assets/mobile/CVGRAMs icon.png",
    tags: ["Telegram Mini App", "Google Analytics", "Supabase", "Android"],
    description: {
      ru: "Telegram Mini App, где резюме превращается в интерактивную игровую карточку.",
      uk: "Telegram Mini App, де резюме перетворюється на інтерактивну ігрову картку.",
      en: "A Telegram Mini App that turns a CV into an interactive playable card."
    }
  },
  {
    title: "Bow and Woods",
    gif: "assets/mobile/BowAndWoods.mp4",
    icon: "assets/mobile/BowAndWoodsIcon.png",
    tags: ["Аркада", "Unity", "Firebase SDK Remote", "ChatGPT", "Android"],
    description: {
      ru: "Аркада про стрельбу из лука в лесной чаще — целься точнее с каждым уровнем.",
      uk: "Аркада про стрільбу з лука в лісовій хащі — цілься точніше з кожним рівнем.",
      en: "A bow-and-arrow arcade set deep in the woods — aim gets tighter every level."
    }
  },
  {
    title: "Chicken Sushi Rush",
    gif: "assets/mobile/Chicken Sushi Rush.mp4",
    icon: "assets/mobile/Chicken Rush Icon.png",
    tags: ["Раннер", "Unity", "Animator", "Gemini", "iOS"],
    description: {
      ru: "Забавный раннер, где курица спасается бегством по кухне суши-бара.",
      uk: "Кумедний раннер, де курка тікає кухнею суші-бару.",
      en: "A playful runner where a chicken makes a break for it through a sushi kitchen."
    }
  },
  {
    title: "Grand Artick Legend",
    gif: "assets/mobile/Grand Artick Legend.mp4",
    icon: "assets/mobile/GrandArcticLegends.png",
    tags: ["Приключение", "Unreal", "Firebase SDK Analytics", "Claude", "Android"],
    description: {
      ru: "Приключение среди льдов — исследуй арктические земли и древние легенды.",
      uk: "Пригода серед льодів — досліджуй арктичні землі та давні легенди.",
      en: "An icy adventure — explore arctic lands and ancient legends."
    }
  },
  {
    title: "Magic Board",
    gif: "assets/mobile/MagicBoard.mp4",
    icon: "assets/mobile/Magic Board.png",
    tags: ["Пазл", "Godot", "Firebase SDK Remote", "Animator", "Android"],
    description: {
      ru: "Настольная головоломка с элементами магии — собирай комбинации на волшебной доске.",
      uk: "Настільна головоломка з елементами магії — збирай комбінації на чарівній дошці.",
      en: "A magical board puzzle — line up combinations on an enchanted grid."
    }
  },
  {
    title: "Rookie Strike",
    gif: "assets/mobile/Rookie Strike.mp4",
    icon: "assets/mobile/Rookie Strike.png",
    tags: ["Шутер", "Unity", "ChatGPT", "Firebase SDK Analytics", "iOS"],
    description: {
      ru: "Аркадный шутер для новичков — быстрые раунды, простое управление, много экшена.",
      uk: "Аркадний шутер для новачків — швидкі раунди, просте керування, багато екшену.",
      en: "A rookie-friendly arcade shooter — fast rounds, simple controls, plenty of action."
    }
  },
  {
    title: "Yukon Gold",
    gif: "assets/mobile/Yukongold.mp4",
    icon: "assets/mobile/Youkon gold.png",
    tags: ["Казино", "Unity", "Firebase SDK Remote", "Gemini", "iOS"],
    description: {
      ru: "Игровые слоты в стиле золотой лихорадки Юкона.",
      uk: "Ігрові слоти у стилі золотої лихоманки Юкону.",
      en: "Slot-style gameplay set during the Yukon gold rush."
    }
  },
  {
    title: "Postman",
    gif: "assets/mobile/PostmanGame.gif",
    icon: "assets/mobile/PostmanIcon.png",
    tags: ["Аркада", "Unity", "Android"],
    description: {
      ru: "Аркада про почтальона — доставляй посылки быстро и без потерь.",
      uk: "Аркада про листоношу — доставляй посилки швидко і без втрат.",
      en: "An arcade game about a postman — deliver parcels fast without losing any."
    }
  },
  {
    title: "Car Repair",
    gif: "assets/mobile/CarRepair.gif",
    tags: ["Аркада", "Unity", "Animator", "Android"],
    description: {
      ru: "Аркада про ремонт машин — почини авто вовремя и не завали заказ.",
      uk: "Аркада про ремонт авто — полагодь машину вчасно і не зірви замовлення.",
      en: "A car-repair arcade — fix the vehicle in time and don't blow the order."
    }
  },
  {
    title: "Jack Fisher",
    gif: "assets/mobile/Jack Fisher.gif",
    icon: "assets/mobile/JackFish.png",
    tags: ["Аркада", "Unity", "Animator", "iOS"],
    description: {
      ru: "Рыбацкая аркада про Джека — закидывай удочку и лови улов покрупнее.",
      uk: "Рибальська аркада про Джека — закидай вудку і лови улов покрупніше.",
      en: "A fishing arcade starring Jack — cast the line and reel in the big catch."
    }
  }
];

const DESKTOP_GAMES = [
  {
    title: "Atomic Casino",
    gif: "assets/desktop/AtomicCasino.gif",
    icon: "assets/mobile/Atomic Casino.png",
    tags: ["Казино", "Unity", "Firebase Auth", "Firebase Firestore", "Firebase Analytics", "Firebase Remote Config", "Firebase Crashlytics", "AppsFlyer"],
    description: {
      ru: "Атмосферные слоты Social Casino в духе постапокалиптического мира в стиле Сталкер/Fallout.",
      uk: "Атмосферні слоти Social Casino у дусі постапокаліптичного світу в стилі Сталкер/Fallout.",
      en: "Atmospheric social-casino slots set in a post-apocalyptic Stalker/Fallout-style world."
    }
  }
];

/* жанровые тэги переводятся, технологии — нет */
const GENRE_TR = {
  "Аркада":       { uk: "Аркада",   en: "Arcade" },
  "Раннер":       { uk: "Раннер",   en: "Runner" },
  "Приключение":  { uk: "Пригода",  en: "Adventure" },
  "Пазл":         { uk: "Пазл",     en: "Puzzle" },
  "Шутер":        { uk: "Шутер",    en: "Shooter" },
  "Казино":       { uk: "Казино",   en: "Casino" }
};

/* ===================================================================
   ПЕРЕВОДЫ ИНТЕРФЕЙСА
=================================================================== */
const UI = {
  ru: {
    statProjects: "реализованных проектов",
    statExp: "года опыта",
    navPortable: "Портативные",
    navDesktop: "На большом экране",
    heroEyebrow: "PORTFOLIO — GAME DEV",
    heroBig: "ПОРТФОЛИО",
    heroSub: "Портативные и настольные проекты — гифки, описания и характер каждой игры в одном месте. Листай стрелками, как на консоли.",
    loadingEyebrow: "00 — ЗАГРУЗКА",
    loadingHint: "Можно поиграть, пока грузится страница",
    dinoStart: "SPACE / ТАП — ПРЫЖОК",
    dinoGameOver: "ИГРА ОКОНЧЕНА — ЕЩЁ РАЗ?",
    gameSwitchDino: "Дино",
    gameSwitchFlappy: "Флэппи",
    flappyStart: "SPACE / ТАП — ЛЕТЕТЬ",
    flappyGameOver: "ИГРА ОКОНЧЕНА — ЕЩЁ РАЗ?",
    portableEyebrow: "01 — ПОРТАТИВНЫЕ",
    portableTitle: "Игры в кармане",
    portableSub: "Выбери игру — она откроется на экране телефона со стрелками и описанием.",
    backToGrid: "Все игры",
    desktopEyebrow: "02 — ГОРИЗОНТАЛЬНЫЕ",
    desktopTitle: "Игры на большом экране",
    desktopSub: "Полка проектов — пролистай вправо мышью, тачпадом или свайпом.",
    addGifHere: "Положи файл сюда:",
    matchEyebrow: "03 — ПРОВЕРКА СОВМЕСТИМОСТИ",
    matchTitle: "Насколько мы подходим друг другу?",
    matchSub: "Выставь условия оффера — и посмотри на честную реакцию.",
    matchSalaryLabel: "Зарплата",
    matchDeadlines: "Жёсткие дедлайны",
    matchCalls: "Частые созвоны",
    matchTeam: "Помощь команды",
    matchFreeSchedule: "Свободный график",
    matchBureaucracy: "Минимум бюрократии",
    matchCrypto: "Оплата в крипте",
    todayViewsLabel: "Сегодня было просмотров:",
    matchLevels: [
      "Это точно нет.",
      "Очень маловероятно.",
      "Так себе условия.",
      "Есть над чем подумать.",
      "Более-менее нормально.",
      "Неплохо, можно рассмотреть.",
      "Хорошие условия!",
      "Очень интересно!",
      "Это мечта, погнали работать!"
    ]
  },
  uk: {
    statProjects: "реалізованих проєктів",
    statExp: "роки досвіду",
    navPortable: "Портативні",
    navDesktop: "На великому екрані",
    heroEyebrow: "PORTFOLIO — GAME DEV",
    heroBig: "ПОРТФОЛІО",
    heroSub: "Портативні та настільні проєкти — гіфки, описи та характер кожної гри в одному місці. Гортай стрілками, як на консолі.",
    loadingEyebrow: "00 — ЗАВАНТАЖЕННЯ",
    loadingHint: "Можна погратись, поки завантажується сторінка",
    dinoStart: "SPACE / ТАП — СТРИБОК",
    dinoGameOver: "ГРУ ЗАВЕРШЕНО — ЩЕ РАЗ?",
    gameSwitchDino: "Дино",
    gameSwitchFlappy: "Флеппі",
    flappyStart: "SPACE / ТАП — ЛЕТІТИ",
    flappyGameOver: "ГРУ ЗАВЕРШЕНО — ЩЕ РАЗ?",
    portableEyebrow: "01 — ПОРТАТИВНІ",
    portableTitle: "Ігри в кишені",
    portableSub: "Обери гру — вона відкриється на екрані телефону зі стрілками та описом.",
    backToGrid: "Усі ігри",
    desktopEyebrow: "02 — ГОРИЗОНТАЛЬНІ",
    desktopTitle: "Ігри на великому екрані",
    desktopSub: "Полиця проєктів — прогортай вправо мишею, тачпадом або свайпом.",
    addGifHere: "Поклади файл сюди:",
    matchEyebrow: "03 — ПЕРЕВІРКА СУМІСНОСТІ",
    matchTitle: "Наскільки ми підходимо одне одному?",
    matchSub: "Вистав умови офера — і подивись на чесну реакцію.",
    matchSalaryLabel: "Зарплата",
    matchDeadlines: "Жорсткі дедлайни",
    matchCalls: "Часті скликання",
    matchTeam: "Допомога команди",
    matchFreeSchedule: "Вільний графік",
    matchBureaucracy: "Мінімум бюрократії",
    matchCrypto: "Оплата в крипті",
    todayViewsLabel: "Сьогодні було переглядів:",
    matchLevels: [
      "Це точно ні.",
      "Дуже малоймовірно.",
      "Так собі умови.",
      "Є над чим подумати.",
      "Більш-менш нормально.",
      "Непогано, можна розглянути.",
      "Гарні умови!",
      "Дуже цікаво!",
      "Це мрія, погнали працювати!"
    ]
  },
  en: {
    statProjects: "shipped projects",
    statExp: "years of experience",
    navPortable: "Portable",
    navDesktop: "On the big screen",
    heroEyebrow: "PORTFOLIO — GAME DEV",
    heroBig: "PORTFOLIO",
    heroSub: "Portable and desktop projects — gifs, descriptions and the character of every game in one place. Flip through them like on a console.",
    loadingEyebrow: "00 — LOADING",
    loadingHint: "You can play while the page loads",
    dinoStart: "SPACE / TAP — JUMP",
    dinoGameOver: "GAME OVER — AGAIN?",
    gameSwitchDino: "Dino",
    gameSwitchFlappy: "Flappy",
    flappyStart: "SPACE / TAP — FLY",
    flappyGameOver: "GAME OVER — AGAIN?",
    portableEyebrow: "01 — PORTABLE",
    portableTitle: "Games in your pocket",
    portableSub: "Pick a game — it opens on the phone screen with arrows and a description.",
    backToGrid: "All games",
    desktopEyebrow: "02 — WIDESCREEN",
    desktopTitle: "Games on the big screen",
    desktopSub: "A shelf of projects — scroll right with a mouse, trackpad or swipe.",
    addGifHere: "Drop the file here:",
    matchEyebrow: "03 — COMPATIBILITY CHECK",
    matchTitle: "How well do we fit?",
    matchSub: "Set the offer terms — and see an honest reaction.",
    matchSalaryLabel: "Salary",
    matchDeadlines: "Tight deadlines",
    matchCalls: "Frequent calls",
    matchTeam: "Team support",
    matchFreeSchedule: "Flexible schedule",
    matchBureaucracy: "Minimal bureaucracy",
    matchCrypto: "Paid in crypto",
    todayViewsLabel: "Views today:",
    matchLevels: [
      "That's a hard no.",
      "Very unlikely.",
      "Not great terms.",
      "Something to think about.",
      "More or less fine.",
      "Not bad, worth considering.",
      "Sounds good!",
      "Very interesting!",
      "This is a dream, let's work!"
    ]
  }
};

const LANG_KEY = "portfolio_lang";
let currentLang = "ru";
try {
  const saved = localStorage.getItem(LANG_KEY);
  if (saved && UI[saved]) currentLang = saved;
} catch (e) { /* localStorage unavailable — fall back to default */ }

function tr(key){ return UI[currentLang][key]; }
function trTag(tag){
  if (currentLang === "ru") return tag;
  const entry = GENRE_TR[tag];
  return entry ? (entry[currentLang] || tag) : tag;
}

/* ===================================================================
   MEDIA HELPER (гифка или видео — определяем по расширению)
=================================================================== */
function isVideoFile(path){
  const ext = path.split(".").pop().toLowerCase();
  return ["mp4", "webm", "mov", "m4v"].includes(ext);
}

function buildMediaEl(path, alt){
  let el;
  if (isVideoFile(path)){
    el = document.createElement("video");
    el.muted = true;
    el.loop = true;
    el.autoplay = true;
    el.playsInline = true;
    el.preload = "metadata";
    el.addEventListener("loadeddata", () => el.classList.add("is-visible"));
    el.addEventListener("error", () => el.classList.remove("is-visible"));
    el.src = path;
  } else {
    el = document.createElement("img");
    el.alt = alt || "";
    el.draggable = false;
    el.addEventListener("load", () => el.classList.add("is-visible"));
    el.addEventListener("error", () => el.classList.remove("is-visible"));
    el.src = path;
  }
  return el;
}

function buildTagsMarkup(tags){
  return tags.map(t => {
    const special = t === "Telegram Mini App";
    return `<span class="tag${special ? " tag-special" : ""}">${trTag(t)}</span>`;
  }).join("");
}

/* ===================================================================
   PHONE / PORTABLE SECTION (grid -> detail)
=================================================================== */
(function initMobileConsole(){
  const grid = document.getElementById("mobileGrid");
  const detail = document.getElementById("mobileDetail");
  const backBtn = document.getElementById("backToGrid");

  const phonesWrap = document.getElementById("phonesWrap");
  const info = document.getElementById("mobileInfo");
  const iconWrap = document.getElementById("mobileIcon");
  const iconImg = document.getElementById("mobileIconImg");
  const titleEl = document.getElementById("mobileTitle");
  const descEl = document.getElementById("mobileDesc");
  const indexEl = document.getElementById("mobileIndex");
  const tagsEl = document.getElementById("mobileTags");
  const dotsWrap = document.getElementById("mobileDots");
  const btnPrev = document.getElementById("mobilePrev");
  const btnNext = document.getElementById("mobileNext");
  const speedBtn = document.getElementById("speedBtn");

  let current = 0;
  let isAnimating = false;
  let isOpen = false;
  let isFast = false;

  function applySpeed(){
    phonesWrap.querySelectorAll("video").forEach(v => { v.playbackRate = isFast ? 2 : 1; });
    speedBtn.classList.toggle("is-active", isFast);
  }

  function pad(n){ return String(n).padStart(2, "0"); }

  /* ---------- a full standalone phone mockup (its own window) ---------- */
  function buildPhoneMock(game, offsetHalf){
    const mock = document.createElement("div");
    mock.className = "phone-mock";

    const led = document.createElement("div");
    led.className = "phone-led";
    mock.appendChild(led);

    const speaker = document.createElement("div");
    speaker.className = "phone-speaker";
    mock.appendChild(speaker);

    const screenEl = document.createElement("div");
    screenEl.className = "phone-screen";

    const ph = document.createElement("div");
    ph.className = "gif-placeholder";
    ph.innerHTML = `<span class="ph-icon">▦</span>`;
    screenEl.appendChild(ph);

    const mediaSlot = document.createElement("div");
    mediaSlot.className = "media-slot";
    const mediaEl = buildMediaEl(game.gif, game.title);
    if (offsetHalf && mediaEl.tagName === "VIDEO"){
      mediaEl.addEventListener("loadedmetadata", () => {
        if (isFinite(mediaEl.duration) && mediaEl.duration > 0){
          try { mediaEl.currentTime = mediaEl.duration / 2; } catch (e) { /* ignore */ }
        }
      });
    }
    mediaSlot.appendChild(mediaEl);
    screenEl.appendChild(mediaSlot);

    screenEl.appendChild(Object.assign(document.createElement("div"), { className: "scanlines" }));
    screenEl.appendChild(Object.assign(document.createElement("div"), { className: "screen-glare" }));

    mock.appendChild(screenEl);
    mock.appendChild(Object.assign(document.createElement("div"), { className: "phone-home" }));
    return mock;
  }

  /* ---------- grid: small card = ONE window, no icon/description ---------- */
  function buildGrid(){
    grid.innerHTML = "";
    MOBILE_GAMES.forEach((game, i) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "grid-item";
      item.setAttribute("aria-label", game.title);

      const media = document.createElement("div");
      media.className = "grid-media";
      const ph = document.createElement("div");
      ph.className = "gif-placeholder";
      ph.innerHTML = `<span class="ph-icon">▦</span>`;
      media.appendChild(ph);
      media.appendChild(buildMediaEl(game.gif, game.title));

      const body = document.createElement("div");
      body.className = "grid-item-body";
      const label = document.createElement("span");
      label.className = "grid-item-title";
      label.textContent = game.title;
      body.appendChild(label);

      const tagsRow = document.createElement("div");
      tagsRow.className = "grid-item-tags";
      const platformTag = game.tags.find(t => t === "Android" || t === "iOS");
      const previewTags = platformTag
        ? [game.tags[0], platformTag]
        : game.tags.slice(0, 2);
      tagsRow.innerHTML = buildTagsMarkup(previewTags);

      item.appendChild(media);
      item.appendChild(body);
      item.appendChild(tagsRow);
      item.addEventListener("click", () => openDetail(i));
      grid.appendChild(item);
    });
  }

  /* ---------- dots ---------- */
  function buildDots(){
    dotsWrap.innerHTML = "";
    MOBILE_GAMES.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (i === current ? " is-active" : "");
      dot.setAttribute("aria-label", `${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  /* ---------- detail render ---------- */
  function render(){
    const game = MOBILE_GAMES[current];

    phonesWrap.querySelectorAll(".phone-mock").forEach(el => el.remove());
    phonesWrap.appendChild(buildPhoneMock(game, false));
    if (!window.matchMedia("(max-width: 720px)").matches){
      phonesWrap.appendChild(buildPhoneMock(game, true));
    }
    applySpeed();

    titleEl.textContent = game.title;
    descEl.textContent = game.description[currentLang];
    indexEl.textContent = `${pad(current + 1)} / ${pad(MOBILE_GAMES.length)}`;
    tagsEl.innerHTML = buildTagsMarkup(game.tags);

    if (game.icon){
      iconImg.src = game.icon;
      iconWrap.hidden = false;
    } else {
      iconWrap.hidden = true;
    }

    [...dotsWrap.children].forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function goTo(i){
    if (isAnimating || i === current) return;
    isAnimating = true;
    phonesWrap.classList.add("is-switching");
    info.classList.add("is-switching");

    setTimeout(() => {
      current = (i + MOBILE_GAMES.length) % MOBILE_GAMES.length;
      render();
      phonesWrap.classList.remove("is-switching");
      info.classList.remove("is-switching");
      isAnimating = false;
    }, 220);
  }

  /* ---------- open / close detail with animation ---------- */
  function openDetail(i){
    current = i;
    isOpen = true;
    buildDots();
    render();

    grid.querySelectorAll("video").forEach(v => v.pause());

    detail.hidden = false;
    document.body.classList.add("detail-open");
    detail.scrollTop = 0;
    requestAnimationFrame(() => detail.classList.add("is-visible"));
  }

  function closeDetail(){
    isOpen = false;
    detail.classList.remove("is-visible");
    document.body.classList.remove("detail-open");
    setTimeout(() => {
      detail.hidden = true;
    }, 320);

    grid.querySelectorAll("video").forEach(v => { v.play().catch(() => {}); });
  }

  backBtn.addEventListener("click", closeDetail);
  btnPrev.addEventListener("click", () => goTo(current - 1));
  btnNext.addEventListener("click", () => goTo(current + 1));
  speedBtn.addEventListener("click", () => {
    isFast = !isFast;
    applySpeed();
  });

  document.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "Escape") closeDetail();
  });

  let touchStartX = null;
  phonesWrap.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  phonesWrap.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  buildGrid();

  let wasMobileLayout = window.matchMedia("(max-width: 720px)").matches;
  window.addEventListener("resize", () => {
    const isMobileLayout = window.matchMedia("(max-width: 720px)").matches;
    if (isMobileLayout !== wasMobileLayout){
      wasMobileLayout = isMobileLayout;
      if (isOpen) render();
    }
  });

  window.__refreshMobile = () => {
    buildGrid();
    if (isOpen) render();
  };
})();

/* ===================================================================
   DESKTOP / HORIZONTAL SHELF
=================================================================== */
(function initDesktopShelf(){
  const shelf = document.getElementById("desktopShelf");
  const btnPrev = document.getElementById("shelfPrev");
  const btnNext = document.getElementById("shelfNext");

  /* ---------- fullscreen TV detail (mirrors the phone console) ---------- */
  const detail = document.getElementById("desktopDetail");
  const backBtn = document.getElementById("backToShelf");
  const screen = document.getElementById("tvScreen");
  const mediaSlot = document.getElementById("tvMediaSlot");
  const info = document.getElementById("tvInfo");
  const titleEl = document.getElementById("tvTitle");
  const descEl = document.getElementById("tvDesc");
  const indexEl = document.getElementById("tvIndex");
  const tagsEl = document.getElementById("tvTags");
  const iconWrap = document.getElementById("tvIcon");
  const iconImg = document.getElementById("tvIconImg");
  const dotsWrap = document.getElementById("tvDots");
  const detailPrev = document.getElementById("desktopPrev");
  const detailNext = document.getElementById("desktopNext");
  const speedBtn = document.getElementById("tvSpeedBtn");

  let current = 0;
  let isAnimating = false;
  let isOpen = false;
  let isFast = false;

  function pad(n){ return String(n).padStart(2, "0"); }

  function applySpeed(){
    const vid = mediaSlot.querySelector("video");
    if (vid) vid.playbackRate = isFast ? 2 : 1;
    speedBtn.classList.toggle("is-active", isFast);
  }

  function buildDots(){
    dotsWrap.innerHTML = "";
    DESKTOP_GAMES.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "dot" + (i === current ? " is-active" : "");
      dot.setAttribute("aria-label", `${i + 1}`);
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });
  }

  function render(){
    const game = DESKTOP_GAMES[current];

    mediaSlot.innerHTML = "";
    mediaSlot.appendChild(buildMediaEl(game.gif, game.title));
    applySpeed();

    titleEl.textContent = game.title;
    descEl.textContent = game.description[currentLang];
    indexEl.textContent = `${pad(current + 1)} / ${pad(DESKTOP_GAMES.length)}`;
    tagsEl.innerHTML = buildTagsMarkup(game.tags);

    if (game.icon){
      iconImg.src = game.icon;
      iconWrap.hidden = false;
    } else {
      iconWrap.hidden = true;
    }

    [...dotsWrap.children].forEach((d, i) => d.classList.toggle("is-active", i === current));
  }

  function goTo(i){
    if (isAnimating || i === current || DESKTOP_GAMES.length <= 1) return;
    isAnimating = true;
    screen.classList.add("is-switching");
    info.classList.add("is-switching");

    setTimeout(() => {
      current = (i + DESKTOP_GAMES.length) % DESKTOP_GAMES.length;
      render();
      screen.classList.remove("is-switching");
      info.classList.remove("is-switching");
      isAnimating = false;
    }, 220);
  }

  function openDetail(i){
    current = i;
    isOpen = true;
    buildDots();
    render();

    shelf.querySelectorAll("video").forEach(v => v.pause());

    const isSingle = DESKTOP_GAMES.length <= 1;
    detailPrev.hidden = isSingle;
    detailNext.hidden = isSingle;
    dotsWrap.hidden = isSingle;

    detail.hidden = false;
    document.body.classList.add("detail-open");
    detail.scrollTop = 0;
    requestAnimationFrame(() => detail.classList.add("is-visible"));
  }

  function closeDetail(){
    isOpen = false;
    detail.classList.remove("is-visible");
    document.body.classList.remove("detail-open");
    setTimeout(() => {
      detail.hidden = true;
    }, 320);

    shelf.querySelectorAll("video").forEach(v => { v.play().catch(() => {}); });
  }

  backBtn.addEventListener("click", closeDetail);
  detailPrev.addEventListener("click", () => goTo(current - 1));
  detailNext.addEventListener("click", () => goTo(current + 1));
  speedBtn.addEventListener("click", () => {
    isFast = !isFast;
    applySpeed();
  });

  document.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
    if (e.key === "Escape") closeDetail();
  });

  let touchStartX = null;
  screen.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  screen.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  /* ---------- shelf ---------- */
  function buildShelf(){
    shelf.innerHTML = "";
    DESKTOP_GAMES.forEach((game, i) => {
      const card = document.createElement("article");
      card.className = "shelf-card";

      const media = document.createElement("div");
      media.className = "shelf-card-media";
      const ph = document.createElement("div");
      ph.className = "gif-placeholder";
      ph.innerHTML = `<span class="ph-icon">▦</span><code>${game.gif.split("/").pop()}</code>`;
      media.appendChild(ph);
      media.appendChild(buildMediaEl(game.gif, game.title));

      const body = document.createElement("div");
      body.className = "shelf-card-body";
      body.innerHTML = `
        <div class="shelf-card-head">
          <span class="mono shelf-card-index">${String(i + 1).padStart(2, "0")}</span>
          <h3>${game.title}</h3>
        </div>
        <div class="tags">${buildTagsMarkup(game.tags.slice(0, 2))}</div>
      `;

      card.appendChild(media);
      card.appendChild(body);
      card.addEventListener("click", () => openDetail(i));
      shelf.appendChild(card);
    });

    const isSingle = DESKTOP_GAMES.length <= 1;
    shelf.classList.toggle("is-single", isSingle);
    btnPrev.hidden = isSingle;
    btnNext.hidden = isSingle;

    if (isOpen) render();
  }

  function scrollByCard(dir){
    const card = shelf.querySelector(".shelf-card");
    const gap = 22;
    const amount = (card ? card.offsetWidth : 320) + gap;
    shelf.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  btnPrev.addEventListener("click", () => scrollByCard(-1));
  btnNext.addEventListener("click", () => scrollByCard(1));

  buildShelf();
  window.__refreshDesktop = buildShelf;
})();

/* ===================================================================
   PARALLAX BACKGROUND (assets/Pallarax/0..3.png)
   Слой 0 (первая картинка) плывёт поверх остальных и перекрывает их
   максимально — стоит вровень с началом стопки. Слои 1/2/3 идут друг
   за другом с нахлёстом 10% от своей реальной высоты. У каждого слоя
   своя вертикальная скорость и лёгкое покачивание в стороны. Контейнер
   сидит за контентом и не перехватывает клики (pointer-events: none).
=================================================================== */
(function initParallaxBg(){
  const layers = Array.from(document.querySelectorAll(".parallax-layer"));
  if (!layers.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function heightOf(img){
    return img.offsetHeight || img.naturalHeight * (img.offsetWidth / (img.naturalWidth || 1)) || 300;
  }

  function layout(){
    if (!layers.length) return;

    /* слой 0 стартует вместе со слоем 1 — максимальный нахлёст между ними */
    layers[0].dataset.baseTop = 0;

    let top = 0;
    layers.slice(1).forEach((img, idx) => {
      img.dataset.baseTop = top;
      const h = heightOf(img);
      top += h * 0.9; /* нахлёст 10% между соседними картинками (1→2→3) */
    });
  }

  function onScroll(){
    if (reduceMotion) return;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    layers.forEach((img, i) => {
      const speed = parseFloat(img.dataset.speed) || 0.3;
      const side = parseFloat(img.dataset.side) || 0.5;
      const baseTop = parseFloat(img.dataset.baseTop) || 0;
      const y = baseTop - scrollY * speed;
      const x = Math.sin(scrollY * 0.0018 + i * 1.7) * 30 * side; /* покачивание в стороны */
      img.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    });
  }

  let ticking = false;
  function requestTick(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { onScroll(); ticking = false; });
  }

  layers.forEach(img => {
    if (img.complete) layout();
    else img.addEventListener("load", () => { layout(); onScroll(); });
  });

  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", () => { layout(); onScroll(); });

  layout();
  onScroll();
})();

/* ===================================================================
   MATCH / COOPERATION PROBABILITY WIDGET

   Идеальный для меня оффер: зарплата ~2400$, помощь команды,
   оплата в крипте, свободный график, без частых созвонов.
   Дедлайны и бюрократия — чем их больше, тем хуже.
=================================================================== */
(function initMatchWidget(){
  const salaryInput = document.getElementById("matchSalary");
  const salaryValue = document.getElementById("matchSalaryValue");
  const deadlines = document.getElementById("matchDeadlines");
  const calls = document.getElementById("matchCalls");
  const team = document.getElementById("matchTeam");
  const freeSchedule = document.getElementById("matchFreeSchedule");
  const bureaucracy = document.getElementById("matchBureaucracy");
  const crypto = document.getElementById("matchCrypto");

  const emojiEl = document.getElementById("matchEmoji");
  const percentEl = document.getElementById("matchPercent");
  const labelEl = document.getElementById("matchLabel");

  if (!salaryInput) return;

  const IDEAL_SALARY = 2400;
  const LOW_SALARY = 1200;   /* ниже этой планки — уже плохо */
  const MIN_SALARY = Number(salaryInput.min) || 500;

  /* emo-шкала: emoMin4 (худшая) ... emoMin0 (нейтраль) ... emo4 (лучшая) */
  const EMOJI_FILES = [
    "assets/emo/emoMin4.png",
    "assets/emo/emoMin3.png",
    "assets/emo/emoMin2.png",
    "assets/emo/emoMin1.png",
    "assets/emo/emoMin0.png",
    "assets/emo/emo1.png",
    "assets/emo/emo2.png",
    "assets/emo/emo3.png",
    "assets/emo/emo4.png"
  ];

  function computeScore(){
    const salary = Number(salaryInput.value);

    const MAX_SALARY = Number(salaryInput.max) || 5000;

    let points;
    if (salary >= IDEAL_SALARY) {
      /* выше 2400 — зарплата даёт всё больший бонус, но галочки по-прежнему учитываются,
         чтобы результат рос вместе с деньгами, а не проваливался на пороге 2400 */
      points = 40 + 75 * (salary - IDEAL_SALARY) / Math.max(1, MAX_SALARY - IDEAL_SALARY);
    } else {
      points = salary >= LOW_SALARY
        ? 40 * (salary - LOW_SALARY) / (IDEAL_SALARY - LOW_SALARY)
        : -20 * (LOW_SALARY - salary) / Math.max(1, LOW_SALARY - MIN_SALARY); /* < 1000 — плохо, чем меньше, тем хуже */
    }

    points += team.checked ? 15 : -5;
    points += crypto.checked ? 5 : -5;        /* крипта — небольшой плюс, не решает */
    points += freeSchedule.checked ? 15 : -5;
    points += calls.checked ? -15 : 15;       /* частые созвоны — плохо */
    points += deadlines.checked ? -10 : 5;    /* жёсткие дедлайны — плохо */
    points += bureaucracy.checked ? 5 : -5;   /* минимум бюрократии — небольшой плюс, не решает */

    const MIN_POINTS = -65;
    const MAX_POINTS = 175;
    const percent = Math.round(((points - MIN_POINTS) / (MAX_POINTS - MIN_POINTS)) * 100);

    let level;
    if (points <= -30) level = 0;
    else if (points <= -15) level = 1;
    else if (points <= 0) level = 2;
    else if (points <= 20) level = 3;
    else if (points <= 40) level = 4;
    else if (points <= 60) level = 5;
    else if (points <= 80) level = 6;
    else if (points <= 95) level = 7;
    else level = 8;

    return { percent: Math.min(100, Math.max(0, percent)), level };
  }

  function render(){
    salaryValue.textContent = Number(salaryInput.value).toLocaleString("en-US") + "$";

    const { percent, level } = computeScore();
    emojiEl.src = EMOJI_FILES[level];
    percentEl.textContent = percent + "%";
    const levels = UI[currentLang].matchLevels;
    labelEl.textContent = levels ? levels[level] : "";
  }

  [salaryInput, deadlines, calls, team, freeSchedule, bureaucracy, crypto]
    .forEach(el => el.addEventListener("input", render));

  render();
  window.__refreshMatch = render;
})();

/* ===================================================================
   LANGUAGE SWITCH
=================================================================== */
(function initLangSwitch(){
  const wrap = document.getElementById("langSwitch");

  function applyStaticText(){
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (UI[currentLang][key] !== undefined) el.textContent = tr(key);
    });
    document.documentElement.lang = currentLang;
    [...wrap.children].forEach(btn => btn.classList.toggle("is-active", btn.dataset.lang === currentLang));
  }

  function setLang(lang){
    if (!UI[lang] || lang === currentLang) { applyStaticText(); return; }
    currentLang = lang;
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    applyStaticText();
    if (window.__refreshMobile) window.__refreshMobile();
    if (window.__refreshDesktop) window.__refreshDesktop();
    if (window.__refreshMatch) window.__refreshMatch();
  }

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    setLang(btn.dataset.lang);
  });

  applyStaticText();
})();

/* ===================================================================
   FAKE LOADING BAR
=================================================================== */
(function initLoadingBar(){
  const fill = document.getElementById("loadingBarFill");
  const percentEl = document.getElementById("loadingBarPercent");
  if (!fill || !percentEl) return;

  let pct = 0;
  const timer = setInterval(() => {
    pct += Math.random() * 9 + 3;
    if (pct >= 100) {
      pct = 100;
      clearInterval(timer);
    }
    fill.style.width = pct + "%";
    percentEl.textContent = Math.round(pct) + "%";
  }, 140);
})();

/* ===================================================================
   MINI DINO RUNNER (small, low-footprint canvas game)
=================================================================== */
(function initDinoGame(){
  const canvas = document.getElementById("dinoCanvas");
  const overlay = document.getElementById("dinoOverlay");
  const scoreEl = document.getElementById("dinoScore");
  const wrap = document.getElementById("dinoWrap");
  if (!canvas || !overlay || !scoreEl) return;

  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const GROUND_Y = H - 14;

  const dino = { x: 20, y: GROUND_Y - 20, w: 18, h: 20, vy: 0, jumping: false };
  const GRAVITY = 1.1;
  const JUMP_V = -11.9;

  let obstacles = [];
  let speed = 3.75;
  let frame = 0;
  let score = 0;
  let running = false;
  let rafId = null;

  function resetState(){
    dino.y = GROUND_Y - dino.h;
    dino.vy = 0;
    dino.jumping = false;
    obstacles = [];
    speed = 3;
    frame = 0;
    score = 0;
    scoreEl.textContent = "000";
  }

  function spawnObstacle(){
    const h = 15 + Math.random() * 12;
    obstacles.push({ x: W + 4, y: GROUND_Y - h, w: 10 + Math.random() * 7, h });
  }

  function jump(){
    if (!running) { start(); return; }
    if (!dino.jumping) {
      dino.vy = JUMP_V;
      dino.jumping = true;
    }
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);

    // ground
    ctx.strokeStyle = "rgba(156,147,174,0.5)";
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y + 1);
    ctx.lineTo(W, GROUND_Y + 1);
    ctx.stroke();

    // dino
    ctx.fillStyle = "#f6b94d";
    ctx.fillRect(dino.x, dino.y, dino.w, dino.h);

    // obstacles
    ctx.fillStyle = "#57d9c8";
    obstacles.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h));
  }

  function loop(){
    frame++;

    // physics
    dino.vy += GRAVITY;
    dino.y += dino.vy;
    if (dino.y >= GROUND_Y - dino.h) {
      dino.y = GROUND_Y - dino.h;
      dino.vy = 0;
      dino.jumping = false;
    }

    // obstacles
    if (frame % Math.max(40, 70 - Math.floor(speed * 4)) === 0) spawnObstacle();
    obstacles.forEach(o => o.x -= speed);
    obstacles = obstacles.filter(o => o.x + o.w > -4);

    // difficulty ramp
    if (frame % 300 === 0) speed += 0.5;

    // score
    if (frame % 6 === 0) {
      score++;
      scoreEl.textContent = String(score).padStart(3, "0");
    }

    // collision
    for (const o of obstacles) {
      const hit = dino.x < o.x + o.w && dino.x + dino.w > o.x &&
                  dino.y < o.y + o.h && dino.y + dino.h > o.y;
      if (hit) { gameOver(); return; }
    }

    draw();
    rafId = requestAnimationFrame(loop);
  }

  function start(){
    resetState();
    running = true;
    overlay.classList.add("is-hidden");
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function gameOver(){
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    overlay.querySelector("span").textContent = tr("dinoGameOver");
    overlay.classList.remove("is-hidden");
  }

  overlay.addEventListener("click", () => { if (!running) start(); });
  canvas.addEventListener("click", jump);

  document.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    if (wrap && wrap.hidden) return; // не перехватывать пробел, если вкладка скрыта
    // avoid hijacking space when typing in an input/textarea
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    e.preventDefault();
    jump();
  });

  draw();

  // управление для переключателя вкладок мини-игр
  window.__dinoGame = {
    pause(){
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      resetState();
      draw();
      overlay.querySelector("span").textContent = tr("dinoStart");
      overlay.classList.remove("is-hidden");
    }
  };
})();

/* ===================================================================
   MINI FLAPPY BIRD (small, low-footprint canvas game)
=================================================================== */
(function initFlappyGame(){
  const canvas = document.getElementById("flappyCanvas");
  const overlay = document.getElementById("flappyOverlay");
  const scoreEl = document.getElementById("flappyScore");
  const wrap = document.getElementById("flappyWrap");
  if (!canvas || !overlay || !scoreEl) return;

  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;

  const bird = { x: 46, y: H / 2, r: 4.5, vy: 0 };
  const GRAVITY = 0.28;
  const FLAP_V = -4.4;

  const PIPE_W = 15;
  const GAP_H = 40;
  const PIPE_GAP_FRAMES = 90;

  let pipes = [];
  let speed = 2.1;
  let frame = 0;
  let score = 0;
  let running = false;
  let rafId = null;

  function resetState(){
    bird.y = H / 2;
    bird.vy = 0;
    pipes = [];
    speed = 2.1;
    frame = 0;
    score = 0;
    scoreEl.textContent = "000";
  }

  function spawnPipe(){
    const margin = 12;
    const gapY = margin + Math.random() * (H - margin * 2 - GAP_H);
    pipes.push({ x: W + PIPE_W, gapY, w: PIPE_W, passed: false });
  }

  function flap(){
    if (!running) { start(); return; }
    bird.vy = FLAP_V;
  }

  function draw(){
    ctx.clearRect(0, 0, W, H);

    // pipes
    ctx.fillStyle = "#57d9c8";
    pipes.forEach(p => {
      ctx.fillRect(p.x, 0, p.w, p.gapY);
      ctx.fillRect(p.x, p.gapY + GAP_H, p.w, H - (p.gapY + GAP_H));
    });

    // bird
    ctx.fillStyle = "#f6b94d";
    ctx.beginPath();
    ctx.arc(bird.x, bird.y, bird.r, 0, Math.PI * 2);
    ctx.fill();
  }

  function loop(){
    frame++;

    // physics
    bird.vy += GRAVITY;
    bird.y += bird.vy;

    // pipes
    if (frame % PIPE_GAP_FRAMES === 0) spawnPipe();
    pipes.forEach(p => { p.x -= speed; });
    pipes = pipes.filter(p => p.x + p.w > -4);

    // difficulty ramp
    if (frame % 400 === 0) speed += 0.35;

    // score — прошли трубу
    pipes.forEach(p => {
      if (!p.passed && p.x + p.w < bird.x) {
        p.passed = true;
        score++;
        scoreEl.textContent = String(score).padStart(3, "0");
      }
    });

    // collision: пол / потолок
    if (bird.y - bird.r <= 0 || bird.y + bird.r >= H) { gameOver(); return; }

    // collision: трубы
    for (const p of pipes) {
      const inX = bird.x + bird.r > p.x && bird.x - bird.r < p.x + p.w;
      if (!inX) continue;
      const hitTop = bird.y - bird.r < p.gapY;
      const hitBottom = bird.y + bird.r > p.gapY + GAP_H;
      if (hitTop || hitBottom) { gameOver(); return; }
    }

    draw();
    rafId = requestAnimationFrame(loop);
  }

  function start(){
    resetState();
    running = true;
    bird.vy = FLAP_V; // первый тап и запускает, и сразу поднимает птицу
    overlay.classList.add("is-hidden");
    draw();
    rafId = requestAnimationFrame(loop);
  }

  function gameOver(){
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
    overlay.querySelector("span").textContent = tr("flappyGameOver");
    overlay.classList.remove("is-hidden");
  }

  overlay.addEventListener("click", () => { if (!running) start(); });
  canvas.addEventListener("click", flap);

  document.addEventListener("keydown", (e) => {
    if (e.code !== "Space") return;
    if (wrap && wrap.hidden) return; // не перехватывать пробел, если вкладка скрыта
    const tag = (document.activeElement && document.activeElement.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    e.preventDefault();
    flap();
  });

  draw();

  window.__flappyGame = {
    pause(){
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      resetState();
      draw();
      overlay.querySelector("span").textContent = tr("flappyStart");
      overlay.classList.remove("is-hidden");
    }
  };
})();

/* ===================================================================
   ПЕРЕКЛЮЧАТЕЛЬ МИНИ-ИГР (Дино / Флэппи) в блоке загрузки
=================================================================== */
(function initGameSwitch(){
  const btnDino = document.getElementById("gameSwitchDino");
  const btnFlappy = document.getElementById("gameSwitchFlappy");
  const dinoWrap = document.getElementById("dinoWrap");
  const flappyWrap = document.getElementById("flappyWrap");
  if (!btnDino || !btnFlappy || !dinoWrap || !flappyWrap) return;

  function activate(which){
    if (which === "flappy") {
      if (window.__dinoGame) window.__dinoGame.pause();
      dinoWrap.hidden = true;
      flappyWrap.hidden = false;
      btnFlappy.classList.add("is-active");
      btnDino.classList.remove("is-active");
    } else {
      if (window.__flappyGame) window.__flappyGame.pause();
      flappyWrap.hidden = true;
      dinoWrap.hidden = false;
      btnDino.classList.add("is-active");
      btnFlappy.classList.remove("is-active");
    }
  }

  btnDino.addEventListener("click", () => activate("dino"));
  btnFlappy.addEventListener("click", () => activate("flappy"));
})();

/* ===================================================================
   "СЕГОДНЯ БЫЛО ПРОСМОТРОВ" — псевдослучайное число 8..20,
   привязанное к сегодняшней дате. Число одно и то же весь день
   и меняется на следующий день.
=================================================================== */
(function(){
  const numEl = document.getElementById("todayViewsNum");
  if (!numEl) return;

  function seededRandom(seed){
    // детерминированный генератор 0..1 на основе числового сида
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  }

  function todayViewsCount(){
    const now = new Date();
    // сид — дата в виде числа ГГГГММДД, каждый день даёт новое значение
    const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
    const rnd = seededRandom(seed);
    const MIN = 8, MAX = 20;
    return Math.floor(rnd * (MAX - MIN + 1)) + MIN;
  }

  numEl.textContent = String(todayViewsCount());
})();
