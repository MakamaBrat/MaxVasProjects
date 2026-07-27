/* ===================================================================
   ДАННЫЕ ОБ ИГРАХ
   Замени title / description / gif / tags на свои.
   gif — путь до файла в assets/mobile или assets/desktop.
   Пока файла нет — покажется аккуратная заглушка с путём.
=================================================================== */

const MOBILE_GAMES = [
  {
    title: "Chicken Spin",
    description: "Nice Arcade About Chicken",
    gif: "assets/mobile/game0.gif",
    tags: ["Аркада", "Unity"]
  },
  {
    title: "",
    description: "",
    gif: "assets/mobile/game1.gif",
    tags: ["Пазл", "Godot"]
  },
  {
    title: "Дрифт Точка",
    description: "Мини-гонка с физикой заноса и одним пальцем на руле. Трассы генерируются на лету.",
    gif: "assets/mobile/game-3.gif",
    tags: ["Гонки", "Unity"]
  },
  {
    title: "Taroxa",
    description: "Приятно анимированная Telegram Mini App игра про Таро карточки и предсказания",
    gif: "assets/mobile/game4.gif",
    tags: ["Roguelike", "LibGDX"]
  }
];

const DESKTOP_GAMES = [
  {
    title: "Atomic Casino",
    description: "Атмосферные слоты Social Casino в духе постапокалиптического мира в стиле Сталкер Falout,
    gif: "assets/desktop/game0.gif",
    tags: ["Immersive sim", "Unreal"]
  }
];

/* ===================================================================
   PHONE / PORTABLE SECTION
=================================================================== */
(function initMobileConsole(){
  const screen = document.getElementById("phoneScreen");
  const img = document.getElementById("mobileGif");
  const placeholderPath = document.getElementById("placeholderPath");
  const info = document.getElementById("mobileInfo");
  const titleEl = document.getElementById("mobileTitle");
  const descEl = document.getElementById("mobileDesc");
  const indexEl = document.getElementById("mobileIndex");
  const tagsEl = document.getElementById("mobileTags");
  const dotsWrap = document.getElementById("mobileDots");
  const btnPrev = document.getElementById("mobilePrev");
  const btnNext = document.getElementById("mobileNext");
  const led = document.getElementById("phoneLed");

  let current = 0;
  let isAnimating = false;

  // build dots
  MOBILE_GAMES.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", `Игра ${i + 1}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function pad(n){ return String(n).padStart(2, "0"); }

  function render(){
    const game = MOBILE_GAMES[current];

    // reset + reload image
    img.classList.remove("is-visible");
    placeholderPath.textContent = game.gif;
    img.src = game.gif;

    img.onload = () => img.classList.add("is-visible");
    img.onerror = () => { img.classList.remove("is-visible"); };

    titleEl.textContent = game.title;
    descEl.textContent = game.description;
    indexEl.textContent = `${pad(current + 1)} / ${pad(MOBILE_GAMES.length)}`;

    tagsEl.innerHTML = "";
    game.tags.forEach(t => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      tagsEl.appendChild(span);
    });

    [...dotsWrap.children].forEach((d, i) => d.classList.toggle("is-active", i === current));

    // led blink pulse on change
    led.style.animation = "none";
    void led.offsetWidth;
    led.style.animation = "";
  }

  function goTo(i){
    if (isAnimating || i === current) return;
    isAnimating = true;
    screen.classList.add("is-switching");
    info.classList.add("is-switching");

    setTimeout(() => {
      current = (i + MOBILE_GAMES.length) % MOBILE_GAMES.length;
      render();
      screen.classList.remove("is-switching");
      info.classList.remove("is-switching");
      isAnimating = false;
    }, 220);
  }

  btnPrev.addEventListener("click", () => goTo(current - 1));
  btnNext.addEventListener("click", () => goTo(current + 1));

  // keyboard nav when the portable section is in view / focused
  document.addEventListener("keydown", (e) => {
    const section = document.getElementById("portable");
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
    if (!inView) return;
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  // touch swipe on the phone screen
  let touchStartX = null;
  screen.addEventListener("touchstart", (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
  screen.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });

  render();
})();

/* ===================================================================
   DESKTOP / HORIZONTAL SHELF
=================================================================== */
(function initDesktopShelf(){
  const shelf = document.getElementById("desktopShelf");
  const btnPrev = document.getElementById("shelfPrev");
  const btnNext = document.getElementById("shelfNext");

  DESKTOP_GAMES.forEach((game, i) => {
    const card = document.createElement("article");
    card.className = "shelf-card";

    const media = document.createElement("div");
    media.className = "shelf-card-media";

    const placeholder = document.createElement("div");
    placeholder.className = "gif-placeholder";
    placeholder.innerHTML = `
      <span class="ph-icon">▦</span>
      <span class="ph-text">Положи .gif сюда:</span>
      <code>${game.gif}</code>
    `;

    const img = document.createElement("img");
    img.alt = game.title;
    img.loading = "lazy";
    img.onload = () => img.classList.add("is-visible");
    img.src = game.gif;

    media.appendChild(placeholder);
    media.appendChild(img);

    const body = document.createElement("div");
    body.className = "shelf-card-body";
    body.innerHTML = `
      <span class="mono shelf-card-index">${String(i + 1).padStart(2, "0")}</span>
      <h3>${game.title}</h3>
      <p>${game.description}</p>
      <div class="tags">${game.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    `;

    card.appendChild(media);
    card.appendChild(body);
    shelf.appendChild(card);
  });

  function scrollByCard(dir){
    const card = shelf.querySelector(".shelf-card");
    const gap = 22;
    const amount = (card ? card.offsetWidth : 320) + gap;
    shelf.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  btnPrev.addEventListener("click", () => scrollByCard(-1));
  btnNext.addEventListener("click", () => scrollByCard(1));
})();
