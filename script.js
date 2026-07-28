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
    tags: ["Аркада", "Unity", "Firebase SDK Analytics", "Animator"],
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
    tags: ["Telegram Mini App", "Google Analytics", "Supabase"],
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
    tags: ["Telegram Mini App", "Google Analytics", "Supabase"],
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
    tags: ["Аркада", "Unity", "Firebase SDK Remote", "ChatGPT"],
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
    tags: ["Раннер", "Unity", "Animator", "Gemini"],
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
    tags: ["Приключение", "Unreal", "Firebase SDK Analytics", "Claude"],
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
    tags: ["Пазл", "Godot", "Firebase SDK Remote", "Animator"],
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
    tags: ["Шутер", "Unity", "ChatGPT", "Firebase SDK Analytics"],
    description: {
      ru: "Аркадный шутер для новичков — быстрые раунды, простое управление, много экшена.",
      uk: "Аркадний шутер для новачків — швидкі раунди, просте керування, багато екшену.",
      en: "A rookie-friendly arcade shooter — fast rounds, simple controls, plenty of action."
    }
  },
  {
    title: "Yukon Gold",
    gif: "assets/mobile/Yukon Gold.mp4",
    icon: "assets/mobile/Youkon gold.png",
    tags: ["Казино", "Unity", "Firebase SDK Remote", "Gemini"],
    description: {
      ru: "Игровые слоты в стиле золотой лихорадки Юкона.",
      uk: "Ігрові слоти у стилі золотої лихоманки Юкону.",
      en: "Slot-style gameplay set during the Yukon gold rush."
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
    portableEyebrow: "01 — ПОРТАТИВНЫЕ",
    portableTitle: "Игры в кармане",
    portableSub: "Выбери игру — она откроется на экране телефона со стрелками и описанием.",
    backToGrid: "Все игры",
    desktopEyebrow: "02 — ГОРИЗОНТАЛЬНЫЕ",
    desktopTitle: "Игры на большом экране",
    desktopSub: "Полка проектов — пролистай вправо мышью, тачпадом или свайпом.",
    addGifHere: "Положи файл сюда:",
    footer: "Сделано как шаблон портфолио. Замени медиафайлы в assets/mobile / assets/desktop и данные в script.js — на свои."
  },
  uk: {
    statProjects: "реалізованих проєктів",
    statExp: "роки досвіду",
    navPortable: "Портативні",
    navDesktop: "На великому екрані",
    heroEyebrow: "PORTFOLIO — GAME DEV",
    heroBig: "ПОРТФОЛІО",
    heroSub: "Портативні та настільні проєкти — гіфки, описи та характер кожної гри в одному місці. Гортай стрілками, як на консолі.",
    portableEyebrow: "01 — ПОРТАТИВНІ",
    portableTitle: "Ігри в кишені",
    portableSub: "Обери гру — вона відкриється на екрані телефону зі стрілками та описом.",
    backToGrid: "Усі ігри",
    desktopEyebrow: "02 — ГОРИЗОНТАЛЬНІ",
    desktopTitle: "Ігри на великому екрані",
    desktopSub: "Полиця проєктів — прогортай вправо мишею, тачпадом або свайпом.",
    addGifHere: "Поклади файл сюди:",
    footer: "Зроблено як шаблон портфоліо. Заміни медіафайли в assets/mobile / assets/desktop та дані в script.js — на свої."
  },
  en: {
    statProjects: "shipped projects",
    statExp: "years of experience",
    navPortable: "Portable",
    navDesktop: "On the big screen",
    heroEyebrow: "PORTFOLIO — GAME DEV",
    heroBig: "PORTFOLIO",
    heroSub: "Portable and desktop projects — gifs, descriptions and the character of every game in one place. Flip through them like on a console.",
    portableEyebrow: "01 — PORTABLE",
    portableTitle: "Games in your pocket",
    portableSub: "Pick a game — it opens on the phone screen with arrows and a description.",
    backToGrid: "All games",
    desktopEyebrow: "02 — WIDESCREEN",
    desktopTitle: "Games on the big screen",
    desktopSub: "A shelf of projects — scroll right with a mouse, trackpad or swipe.",
    addGifHere: "Drop the file here:",
    footer: "Built as a portfolio template. Swap the media in assets/mobile / assets/desktop and the data in script.js for your own."
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
      tagsRow.innerHTML = buildTagsMarkup(game.tags.slice(0, 2));

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
    phonesWrap.appendChild(buildPhoneMock(game, true));
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
  }

  wrap.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn) return;
    setLang(btn.dataset.lang);
  });

  applyStaticText();
})();
