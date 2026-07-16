const HERO_TEMPLATES = [
  { id: "orbit", name: "Orbit Carousel", slots: 10, thumb: "thumb-orbit", desc: "多张作品图围绕中心形成可旋转的 3D 环形卡片流。" },
  { id: "film", name: "Circular Gallery", slots: 8, thumb: "thumb-film", desc: "图片沿弧形画廊轨道平滑循环移动。" },
  { id: "totem", name: "Card Totem", slots: 10, thumb: "thumb-totem", desc: "10 张图片纵向层叠轮播，当前作品清晰居中。" },
  { id: "mosaic", name: "Mosaic Grid", slots: 6, thumb: "thumb-mosaic", desc: "作品图组成不规则拼贴网格。" }
];
Object.assign(HERO_TEMPLATES.find((item) => item.id === "mosaic"), {
  slots: 7,
  desc: "7 张图片组成可滚动缩放的 Zoom Parallax 拼贴。"
});

HERO_TEMPLATES.push({
  id: "photo-orbit",
  name: "Photo Orbit",
  slots: 8,
  thumb: "thumb-photo-orbit",
  desc: "8 张图片围绕中心错落旋转，支持鼠标透视与悬停放大。"
});

HERO_TEMPLATES.push({
  id: "scroll-morph",
  name: "Scroll Morph",
  slots: 20,
  thumb: "thumb-scroll-morph",
  desc: "20 张图片从散点、线性队列变形成圆环，再随滚轮过渡为底部弧形。"
});

HERO_TEMPLATES.push({
  id: "image-trail",
  name: "Image Trail",
  slots: 10,
  thumb: "thumb-image-trail",
  desc: "鼠标移动时沿路径依次出现作品图，短暂停留后柔和淡出。"
});

HERO_TEMPLATES.push({
  id: "three-d-carousel",
  name: "3D Carousel",
  slots: 14,
  thumb: "thumb-three-d-carousel",
  desc: "14 张作品图围绕圆柱排布，可拖拽旋转并点击放大查看。"
});

HERO_TEMPLATES.push({
  id: "masonry-gallery",
  name: "Masonry",
  slots: 30,
  thumb: "thumb-masonry-gallery",
  desc: "30 张作品图组成三列瀑布流，滚动进入视野时柔和淡入。"
});

HERO_TEMPLATES.push({
  id: "image-gallery",
  name: "Image Gallery",
  slots: 14,
  thumb: "thumb-image-gallery",
  desc: "14 张图片沿大圆径向排布，滚轮或拖拽旋转，悬停时放大突出。"
});

HERO_TEMPLATES.push({
  id: "portfolio-gallery",
  name: "Portfolio Gallery",
  slots: 12,
  thumb: "thumb-portfolio-gallery",
  desc: "12 张作品图以 3D 透视方式紧凑重叠排布，悬停时当前图片上浮并放大。"
});

HERO_TEMPLATES.push({
  id: "ticker-loop",
  name: "Ticker Loop",
  slots: 12,
  thumb: "thumb-ticker-loop",
  desc: "12 张作品图组成三行倾斜滚动网格，悬停暂停并支持单张放大。"
});

HERO_TEMPLATES.push({
  id: "stellar-gallery",
  name: "3D Stellar Card Gallery",
  slots: 20,
  thumb: "thumb-stellar-gallery",
  desc: "20 张图片组成可拖拽查看的 3D 星空卡片阵列。"
});

const ABOUT_LAYOUTS = [
  { id: "minimal", name: "极简文字型", desc: "以大标题、简介和标签为核心，适合总监个人主页。" },
  { id: "split", name: "左右图文型", desc: "左图右文，突出头像或个人形象。" },
  { id: "timeline", name: "履历时间轴型", desc: "强调经历、教育、奖项和客户信息。" },
  { id: "hello-card", name: "海报名片型", thumb: "thumb-about-hello", desc: "参考黑底海报名片，照片、问候标题和技能信息集中呈现。" },
  { id: "cv-sheet", name: "白底简历型", thumb: "thumb-about-cv", desc: "参考单页简历排版，照片、简介、经历和技能清晰分栏。" }
];

const ABOUT_LABEL_DEFAULTS = {
  personal: "个人信息",
  contact: "联系",
  experience: "工作经历",
  education: "教育背景",
  awards: "奖项",
  clients: "合作客户",
  portfolio: "Portfolio",
  skills: "技能",
  software: "软件使用",
  services: "服务范围",
  availability: "合作状态"
};

const ABOUT_SUBLABEL_DEFAULTS = {
  personal: "Personal information",
  education: "Education background",
  experience: "Work experience"
};

const ABOUT_FIELD_LABEL_DEFAULTS = {
  title: "求职意向",
  services: "服务范围",
  availability: "合作状态",
  socials: "社交链接"
};

const SOFTWARE_SKILLS_STORAGE_KEY = "portfolio-template-software-skills-v1";
const SOFTWARE_SHOW_PERCENT_STORAGE_KEY = "portfolio-template-software-show-percent-v1";

const SOFTWARE_SKILL_PRESETS = [
  { id: "illustrator", name: "Adobe Illustrator", shortName: "Ai", level: 86, levelText: "熟练", selected: true },
  { id: "photoshop", name: "Adobe Photoshop", shortName: "Ps", level: 88, levelText: "精通", selected: true },
  { id: "premiere", name: "Adobe Premiere Pro", shortName: "Pr", level: 74, levelText: "熟练", selected: true },
  { id: "after-effects", name: "Adobe After Effects", shortName: "Ae", level: 72, levelText: "熟练", selected: true },
  { id: "lightroom", name: "Adobe Lightroom", shortName: "Lr", level: 68, levelText: "熟练", selected: true },
  { id: "blender", name: "Blender", shortName: "Bl", level: 62, levelText: "基础", selected: true },
  { id: "figma", name: "Figma", shortName: "Fg", level: 80, levelText: "熟练", selected: false },
  { id: "sketch", name: "Sketch", shortName: "Sk", level: 58, levelText: "基础", selected: false },
  { id: "cinema-4d", name: "Cinema 4D", shortName: "C4D", level: 64, levelText: "基础", selected: false },
  { id: "capcut", name: "CapCut", shortName: "剪", level: 70, levelText: "熟练", selected: false }
];

const WORKS_LAYOUTS = [
  { id: "grid", name: "网格", desc: "稳定清晰的三列作品目录。" },
  { id: "masonry", name: "推拉", desc: "封面比例错落，适合多类型项目。" },
  { id: "list", name: "列表", desc: "更像编辑精选目录，信息密度高。" },
  { id: "slider", name: "横向滑动", desc: "适合发布态横向浏览。" },
  { id: "magazine", name: "杂志拼贴", desc: "更具策展感的不规则版面。" },
  { id: "image-reveal", name: "卡片", desc: "三张作品图从中心展开成错位叠放的弹性展示。" }
];

const CONTACT_LAYOUTS = [
  { id: "classic", name: "经典", thumb: "thumb-contact-classic", desc: "简洁的感谢标题、联系列表与二维码。" },
  { id: "poster", name: "海报大字", thumb: "thumb-contact-poster", desc: "参考作品集封底海报，强调 THANK YOU 视觉张力。" },
  { id: "editorial", name: "灰度网格", thumb: "thumb-contact-editorial", desc: "黑白编辑排版，信息切分清晰克制。" },
  { id: "signature", name: "底栏名片", thumb: "thumb-contact-signature", desc: "居中感谢语与底部联系方式胶囊。" }
];

const BG_MAP = {
  black: "#080b07",
  ivory: "#f2f6ed"
};

function normalizeHeroBackground(value) {
  return value === "ivory" ? "ivory" : "black";
}

const SPEED_MAP = {
  slow: "34s",
  medium: "22s",
  fast: "12s"
};

const STYLE_DEFAULTS = {
  fontFamily: "Inter, Helvetica Neue, Arial, PingFang SC, Microsoft YaHei, sans-serif",
  fontWeight: "600",
  fontSize: "16",
  lineHeight: "1.55",
  letterSpacing: "0",
  textColor: "#f2f6ed",
  align: "left",
  background: "#080b07",
  themeColor: "#b7ff00",
  spacing: "42",
  contentWidth: "1080",
  radius: "8",
  border: "1",
  shadow: "medium"
};

const STYLE_TARGETS = ["global", "hero", "about", "works", "contact"];
const DEVICES = ["desktop"];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const HERO_RENDER_MODES = {
  EDITOR_PREVIEW: "editor-preview",
  WEBSITE_EXPORT: "website-export",
  IMAGE_EXPORT: "image-export"
};
let renderContext = "editor";
let heroRenderMode = HERO_RENDER_MODES.EDITOR_PREVIEW;
let currentHeroExportSnapshot = null;

const state = makeDefaultState();
let circularGalleryCleanups = [];
let verticalStackCleanups = [];
let zoomParallaxCleanups = [];
let photoOrbitCleanups = [];
let scrollMorphCleanups = [];
let imageTrailCleanups = [];
let threeDCarouselCleanups = [];
let stellarGalleryCleanups = [];
let masonryGalleryCleanups = [];
let imageGalleryCleanups = [];
let cropState = null;
let lastTotemNavigationTime = 0;
let editingSoftwareSkillId = null;
let draggedSoftwareSkillId = "";
let activeSlotDrag = null;
let customSelectSyncs = [];

function makeDefaultState() {
  return {
    mode: "editor",
    screen: "hero",
    device: "desktop",
    animationPlaying: true,
    expandedProjectId: "p1",
    hero: {
      template: "orbit",
      ratio: "16-9",
      speed: "medium",
      background: "black",
      activeIndex: 0,
      totemIndex: 0,
      mosaicProgress: 0,
      media: Array.from({ length: 10 }, () => null)
    },
    about: {
      layout: "minimal",
      name: "白无常",
      title: "Creative Director / Visual Designer",
      bio: "以克制的视觉系统、清晰的信息层级和动态叙事，帮助品牌把复杂想法变成可被感知的体验。",
      portrait: null,
      skills: "Brand System, Art Direction, Motion, Editorial, Web Experience",
      experience: "2022 - Now｜Independent Creative Director｜品牌视觉、网站体验与发布活动\n2018 - 2022｜Studio Lead｜带领跨职能团队完成数字产品与展览项目",
      education: "MA Visual Communication｜Central Saint Martins\nBA Graphic Design｜Tongji University",
      awards: "ADC Awards Shortlist\nD&AD Wood Pencil\nTokyo TDC Selected",
      clients: "Aesop, Nike, Leica, Muji, Vitra",
      services: "品牌系统, 艺术指导, 网站体验, 动态视觉, 作品集策展",
      availability: "2026 Q3 可接洽品牌视觉与数字体验项目",
      resume: "下载简历",
      socials: "Behance / Dribbble / LinkedIn / Instagram",
      softwareSkills: loadSoftwareSkills(),
      showSkillPercent: loadSoftwareSkillPercentSetting(),
      labels: { ...ABOUT_LABEL_DEFAULTS },
      subLabels: { ...ABOUT_SUBLABEL_DEFAULTS },
      fieldLabels: { ...ABOUT_FIELD_LABEL_DEFAULTS }
    },
    works: {
      layout: "grid",
      filter: "all",
      heading: "Selected Works",
      allLabel: "全部",
      projects: [
        makeProject("p1", "01", "Archive of Light", "Brand", "为摄影艺术机构建立克制、可延展的视觉系统。", true),
        makeProject("p2", "02", "Quiet Commerce", "Digital", "高级零售品牌的电商体验与内容结构重塑。"),
        makeProject("p3", "03", "Motion Index", "Motion", "面向发布会与社交传播的动态视觉资产库。"),
        makeProject("p4", "04", "Civic Type", "Editorial", "城市文化项目的杂志式网站与导视语言。"),
        makeProject("p5", "05", "Table Object", "Product", "家具品牌的产品叙事、拍摄方向与落地页。")
      ]
    },
    contact: {
      layout: "classic",
      sectionLabel: "Contact",
      portfolioLabel: "Designer Portfolio",
      portfolioTitle: "2026 Design Portfolio",
      portfolioYear: "2026",
      thanks: "谢谢观看",
      thanksEnglish: "THANK YOU",
      invite: "如果你正在寻找一个能把策略、视觉与网页体验整合起来的创意伙伴，欢迎联系。",
      phone: "+86 138 0000 0000",
      wechat: "portfolio-studio",
      email: "hello@portfolio.studio",
      qr: null,
      socials: "Instagram / LinkedIn / Behance",
      visibility: { phone: true, wechat: true, email: true, qr: true, socials: true }
    },
    styles: makeStyleState()
  };
}

function makeStyleState() {
  const styles = {};
  STYLE_TARGETS.forEach((target) => {
    styles[target] = {};
    DEVICES.forEach((device) => {
      styles[target][device] = { ...STYLE_DEFAULTS };
    });
  });
  styles.about.desktop.background = "#080b07";
  styles.works.desktop.background = "#101510";
  styles.contact.desktop.background = "#060806";
  return styles;
}

function makeProject(id, number, title, category, desc, pinned = false) {
  return {
    id,
    slug: slugifyProjectTitle(title || id),
    number,
    title,
    category,
    desc,
    year: "2026",
    client: `${title} Studio`,
    role: roleForProjectCategory(category),
    services: servicesForProjectCategory(category),
    cover: null,
    hidden: false,
    pinned,
    crop: "4 / 3"
  };
}

function loadSvgAsset(image, source) {
  if (!image || !source) return;

  fetch(source, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`Arrow asset request failed: ${response.status}`);
      return response.text();
    })
    .then((svgText) => {
      const objectUrl = URL.createObjectURL(new Blob([svgText], { type: "image/svg+xml" }));
      image.addEventListener("load", () => URL.revokeObjectURL(objectUrl), { once: true });
      image.src = objectUrl;
    })
    .catch(() => {
      image.parentElement?.classList.add("is-icon-fallback");
    });
}

function loadModeArrowAsset() {
  const image = $(".mode-toggle-arrow img");
  loadSvgAsset(image, image?.dataset.arrowSrc);
}

function loadPlaybackAssets() {
  loadSvgAssets(".playback-icon");
}

function loadSvgAssets(selector) {
  $$(selector).forEach((image) => loadSvgAsset(image, image.dataset.svgSrc));
}

function loadSlotUploadAssets() {
  loadSvgAssets(".slot-upload-icon");
}

function init() {
  loadModeArrowAsset();
  loadPlaybackAssets();
  renderLibraries();
  bindTopbar();
  bindPreviewScrollbar();
  bindHeroControls();
  bindStyleControls();
  window.addEventListener("resize", fitCanvasFrame);
  window.addEventListener("hashchange", renderPreview);
  renderAll();
}

let refreshPreviewScrollbar = () => {};

function bindPreviewScrollbar() {
  const root = $("#sitePreview");
  const scrollbar = $("#previewScrollbar");
  const track = $(".preview-scrollbar-track", scrollbar);
  const thumb = $("#previewScrollbarThumb");
  if (!root || !scrollbar || !track || !thumb) return;

  let dragging = false;
  let dragOffset = 0;
  let updateFrame = 0;

  const update = () => {
    const maxScroll = Math.max(root.scrollHeight - root.clientHeight, 0);
    const isVisible = root.classList.contains("is-full-preview") && maxScroll > 0;
    const trackHeight = track.clientHeight;
    const thumbHeight = Math.min(trackHeight, Math.max(18, Math.round(trackHeight * root.clientHeight / Math.max(root.scrollHeight, 1))));
    const travel = Math.max(trackHeight - thumbHeight, 0);
    const progress = maxScroll ? root.scrollTop / maxScroll : 0;
    scrollbar.classList.toggle("is-visible", isVisible);
    scrollbar.setAttribute("aria-hidden", String(!isVisible));
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${travel * progress}px)`;
    thumb.setAttribute("aria-valuenow", String(Math.round(progress * 100)));
  };

  const scheduleUpdate = () => {
    if (updateFrame) return;
    updateFrame = window.requestAnimationFrame(() => {
      updateFrame = 0;
      update();
    });
  };

  const scrollToPointer = (clientY, behavior = "auto") => {
    const rect = track.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (clientY - rect.top) / Math.max(rect.height, 1)));
    root.scrollTo({ top: progress * Math.max(root.scrollHeight - root.clientHeight, 0), behavior });
  };

  root.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", update);
  track.addEventListener("pointerdown", (event) => {
    if (event.target !== thumb) scrollToPointer(event.clientY, "smooth");
  });
  thumb.addEventListener("pointerdown", (event) => {
    dragging = true;
    const rect = thumb.getBoundingClientRect();
    dragOffset = event.clientY - rect.top;
    thumb.setPointerCapture(event.pointerId);
    thumb.classList.add("is-dragging");
    event.preventDefault();
  });
  thumb.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const rect = track.getBoundingClientRect();
    const thumbRect = thumb.getBoundingClientRect();
    const travel = Math.max(rect.height - thumbRect.height, 1);
    const progress = Math.max(0, Math.min(1, (event.clientY - rect.top - dragOffset) / travel));
    root.scrollTop = progress * Math.max(root.scrollHeight - root.clientHeight, 0);
    update();
  });
  const stopDragging = () => {
    dragging = false;
    thumb.classList.remove("is-dragging");
  };
  thumb.addEventListener("pointerup", stopDragging);
  thumb.addEventListener("pointercancel", stopDragging);
  thumb.addEventListener("keydown", (event) => {
    const step = Math.max(root.clientHeight * 0.72, 80);
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      root.scrollBy({ top: step, behavior: "smooth" });
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      root.scrollBy({ top: -step, behavior: "smooth" });
    } else if (event.key === "Home") {
      root.scrollTo({ top: 0, behavior: "smooth" });
    } else if (event.key === "End") {
      root.scrollTo({ top: root.scrollHeight, behavior: "smooth" });
    } else {
      return;
    }
    event.preventDefault();
  });
  scrollbar.addEventListener("wheel", (event) => {
    if (!scrollbar.classList.contains("is-visible")) return;
    root.scrollBy({ top: event.deltaY, behavior: "auto" });
    event.preventDefault();
  }, { passive: false });

  refreshPreviewScrollbar = update;
  update();
}

function updatePreviewScrollbar() {
  refreshPreviewScrollbar();
}

function renderAll() {
  renderChrome();
  renderLibraries();
  renderConfig();
  renderPreview();
  fitCanvasFrame();
}

function fitCanvasFrame() {
  const frame = $("#canvasFrame");
  const outer = $(".canvas-outer");
  if (!frame || !outer) return;
  const ratioKey = editorCanvasRatioKey();
  const ratios = {
    "16-9": 16 / 9,
    "4-3": 4 / 3,
    "1-1": 1,
    "4-5": 4 / 5,
    "9-16": 9 / 16
  };
  const ratio = ratios[ratioKey] || ratios["16-9"];
  const outerWidth = Math.max(outer.clientWidth - 2, 280);
  const outerHeight = Math.max(outer.clientHeight - 2, 220);
  const maxDesignWidth = ratioKey === "9-16" ? 420 : ratioKey === "4-5" ? 520 : 980;
  const width = Math.max(260, Math.min(outerWidth, maxDesignWidth, outerHeight * ratio));
  frame.style.width = `${width}px`;

  const baseHeight = width / ratio;
  const scale = Math.min(outerWidth / width, outerHeight / baseHeight);
  frame.style.setProperty("--canvas-scale", `${Math.max(1, Math.min(scale, 2))}`);

  const preview = $("#sitePreview");
  if (preview) {
    preview.style.setProperty("--preview-height", `${Math.max(preview.clientHeight, 1)}px`);
  }
}

function editorCanvasRatioKey() {
  return state.hero.ratio || "16-9";
}

function renderChrome() {
  const workspace = $(".workspace");
  const screenChanged = workspace?.dataset.activeScreen && workspace.dataset.activeScreen !== state.screen;
  if (screenChanged) {
    $(".left-panel")?.classList.remove("is-open");
    $("#leftPanelTrigger")?.setAttribute("aria-expanded", "false");
    $(".right-panel")?.classList.remove("is-open");
    $("#rightPanelTrigger")?.setAttribute("aria-expanded", "false");
  }
  workspace?.setAttribute("data-active-screen", state.screen);
  $$(".tab").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.screen === state.screen));
  $$(".library-panel").forEach((panel) => panel.classList.toggle("is-hidden", panel.dataset.library !== state.screen));
  $$(".config-screen").forEach((panel) => panel.classList.toggle("is-hidden", panel.dataset.config !== state.screen));
  const modeToggle = $("#modeToggle");
  if (modeToggle) {
    const isPreview = state.mode === "preview";
    modeToggle.classList.toggle("is-preview", isPreview);
    modeToggle.setAttribute("aria-pressed", String(isPreview));
    modeToggle.setAttribute("aria-label", isPreview ? "切换到编辑模式" : "切换到预览模式");
    $(".mode-toggle-cn", modeToggle).textContent = isPreview ? "预览" : "编辑";
    $(".mode-toggle-en", modeToggle).textContent = isPreview ? "Preview" : "Edit";
  }
  $("#configTitle").textContent = `${screenName(state.screen)}设置`;
  $("#canvasFrame").className = `canvas-frame ratio-${editorCanvasRatioKey()} device-${state.device}`;
  $("#screenLabel").textContent = `${screenName(state.screen)} / ${currentScreenVariant()}`;
  $("#neededLabel").textContent = neededText();
}

function screenName(screen) {
  return { hero: "首页", about: "关于我", works: "作品", contact: "联系我" }[screen] || screen;
}

function currentScreenVariant() {
  if (state.screen === "hero") return currentHeroTemplate().name;
  if (state.screen === "about") return ABOUT_LAYOUTS.find((item) => item.id === state.about.layout).name;
  if (state.screen === "works") return WORKS_LAYOUTS.find((item) => item.id === state.works.layout).name;
  if (state.screen === "contact") return currentContactLayout().name;
  return "联系模块";
}

function currentHeroTemplate() {
  return HERO_TEMPLATES.find((item) => item.id === state.hero.template);
}

const heroTemplateRegistry = Object.freeze(Object.fromEntries(HERO_TEMPLATES.map((template, index) => ([
  template.id,
  {
    templateIndex: index + 1,
    templateId: template.id,
    InteractiveComponent: renderHeroInteractiveMedia,
    StaticExportComponent: renderHeroStaticMedia,
    staticConfig: {
      slots: template.slots,
      cardPosition: heroStaticLayoutConfig(template.id, template.slots),
      scale: "per-card",
      rotation: "per-card",
      opacity: "per-card",
      zIndex: "per-card",
      counter: true,
      dots: ["totem"].includes(template.id),
      background: true,
      layoutName: `${String(index + 1).padStart(2, "0")}-${template.id}`
    }
  }
]))));

function heroStaticLayoutConfig(templateId, slots) {
  const count = Math.max(slots || 1, 1);
  if (templateId === "orbit") {
    return [
      { left: 51, top: 63, scale: 1.16, rotation: 18, opacity: 1, zIndex: 12 },
      { left: 36, top: 66, scale: 1.08, rotation: 18, opacity: 0.9, zIndex: 10 },
      { left: 27, top: 66, scale: 1.02, rotation: 18, opacity: 0.82, zIndex: 9 },
      { left: 26, top: 55, scale: 0.92, rotation: 18, opacity: 0.68, zIndex: 7 },
      { left: 36, top: 44, scale: 0.82, rotation: 18, opacity: 0.38, zIndex: 5 },
      { left: 50, top: 36, scale: 0.74, rotation: 18, opacity: 0.28, zIndex: 4 },
      { left: 64, top: 29, scale: 0.72, rotation: 18, opacity: 0.24, zIndex: 3 },
      { left: 76, top: 31, scale: 0.82, rotation: 18, opacity: 0.34, zIndex: 4 },
      { left: 73, top: 45, scale: 0.98, rotation: 18, opacity: 0.72, zIndex: 7 },
      { left: 64, top: 56, scale: 1.08, rotation: 18, opacity: 0.9, zIndex: 9 }
    ];
  }
  if (templateId === "totem") {
    return Array.from({ length: count }, (_, index) => verticalStackStyle(index, 0, count));
  }
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const depth = (Math.sin(angle) + 1) / 2;
    return {
      left: 50 + Math.cos(angle) * 32,
      top: 50 + Math.sin(angle) * 28,
      scale: 0.72 + depth * 0.34,
      rotation: 0,
      opacity: 0.38 + depth * 0.62,
      zIndex: Math.round(10 + depth * 90)
    };
  });
}

function currentContactLayout() {
  return CONTACT_LAYOUTS.find((item) => item.id === (state.contact.layout || "classic")) || CONTACT_LAYOUTS[0];
}

function neededText() {
  const required = currentHeroTemplate().slots;
  const uploaded = state.hero.media.slice(0, required).filter(Boolean).length;
  const needed = Math.max(required - uploaded, 0);
  return needed ? `还需上传 ${needed} 张图片` : "图片已就绪";
}

function renderLibraries() {
  renderTemplateCards("#heroTemplateList", HERO_TEMPLATES, state.hero.template, (id) => {
    state.hero.template = id;
    state.screen = "hero";
    ensureMediaCapacity(currentHeroTemplate().slots);
    renderAll();
  });
  renderTemplateCards("#aboutLayoutList", ABOUT_LAYOUTS, state.about.layout, (id) => {
    state.about.layout = id;
    renderAll();
  });
  renderTemplateCards("#worksLayoutList", WORKS_LAYOUTS, state.works.layout, (id) => {
    state.works.layout = id;
    renderAll();
  });
  renderTemplateCards("#contactLayoutList", CONTACT_LAYOUTS, state.contact.layout || "classic", (id) => {
    state.contact.layout = id;
    renderAll();
  });
}

function renderTemplateCards(selector, items, activeId, onSelect) {
  const root = $(selector);
  if (!root) return;
  root.innerHTML = items.map((item) => `
    <button class="template-card ${item.id === activeId ? "is-active" : ""}" data-id="${item.id}">
      ${templateThumbHTML(item)}
      <span>
        <strong>${escapeHTML(item.name)}</strong>
        <span>${escapeHTML(item.desc)}</span>
      </span>
    </button>
  `).join("");
  $$(".template-card", root).forEach((card) => {
    card.addEventListener("click", () => onSelect(card.dataset.id));
  });
}

function templateThumbHTML(item) {
  if (item.id === "orbit") {
    const cards = Array.from({ length: 10 }, (_, index) => (
      `<span class="template-orbit-mini-card template-orbit-mini-card-${index + 1}" aria-hidden="true"></span>`
    )).join("");
    return `<span class="template-thumb thumb-orbit template-orbit-thumb" aria-hidden="true">${cards}</span>`;
  }
  if (item.id === "film") {
    const cards = Array.from({ length: 8 }, (_, index) => (
      `<span class="template-circular-mini-card template-circular-mini-card-${index + 1}" aria-hidden="true"></span>`
    )).join("");
    return `<span class="template-thumb thumb-orbit template-circular-thumb" aria-hidden="true">${cards}</span>`;
  }
  return `<span class="template-thumb ${item.thumb || "thumb-mosaic"}"></span>`;
}

function bindTopbar() {
  const playback = $(".playback");
  if (playback) {
    let hideTimer = 0;
    const clearHideTimer = () => window.clearTimeout(hideTimer);
    const schedulePlaybackHide = () => {
      clearHideTimer();
      if (playback.matches(":hover") || playback.matches(":focus-within")) return;
      hideTimer = window.setTimeout(() => {
        if (playback.matches(":hover") || playback.matches(":focus-within")) return;
        playback.classList.remove("is-open");
      }, 1000);
    };
    const openPlayback = () => {
      clearHideTimer();
      playback.classList.add("is-open");
    };

    window.addEventListener("pointermove", (event) => {
      const nearBottom = event.clientY >= window.innerHeight - 56;
      const nearCenter = Math.abs(event.clientX - window.innerWidth / 2) <= 150;
      if (nearBottom && nearCenter) {
        openPlayback();
        if (!playback.matches(":hover") && !playback.matches(":focus-within")) schedulePlaybackHide();
      }
    }, { passive: true });
    playback.addEventListener("pointerenter", openPlayback);
    playback.addEventListener("pointermove", openPlayback, { passive: true });
    playback.addEventListener("pointerleave", schedulePlaybackHide);
    playback.addEventListener("click", openPlayback);
    playback.addEventListener("focusin", openPlayback);
    playback.addEventListener("focusout", schedulePlaybackHide);
  }

  const leftPanel = $(".left-panel");
  const leftPanelTrigger = $("#leftPanelTrigger");
  if (leftPanel && leftPanelTrigger) {
    let leftPanelTimer = 0;
    const clearLeftPanelTimer = () => window.clearTimeout(leftPanelTimer);
    const setLeftPanelOpen = (open) => {
      leftPanel.classList.toggle("is-open", open);
      leftPanelTrigger.setAttribute("aria-expanded", String(open));
    };
    const openLeftPanel = () => {
      clearLeftPanelTimer();
      setLeftPanelOpen(true);
    };
    const scheduleLeftPanelHide = () => {
      clearLeftPanelTimer();
      leftPanelTimer = window.setTimeout(() => setLeftPanelOpen(false), 500);
    };

    window.addEventListener("pointermove", (event) => {
      const triggerRect = leftPanelTrigger.getBoundingClientRect();
      const nearLeftTrigger = event.clientX <= triggerRect.right + 18
        && event.clientY >= triggerRect.top - 18
        && event.clientY <= triggerRect.bottom + 18;
      if (nearLeftTrigger) openLeftPanel();
    }, { passive: true });
    leftPanelTrigger.addEventListener("pointerenter", openLeftPanel);
    leftPanelTrigger.addEventListener("click", openLeftPanel);
    leftPanelTrigger.addEventListener("focusin", openLeftPanel);
    leftPanel.addEventListener("pointerenter", openLeftPanel);
    leftPanel.addEventListener("pointermove", openLeftPanel, { passive: true });
    leftPanel.addEventListener("pointerleave", scheduleLeftPanelHide);
    leftPanel.addEventListener("focusin", openLeftPanel);
    leftPanel.addEventListener("focusout", scheduleLeftPanelHide);
  }

  const rightPanel = $(".right-panel");
  const rightPanelTrigger = $("#rightPanelTrigger");
  if (rightPanel && rightPanelTrigger) {
    let rightPanelTimer = 0;
    const clearRightPanelTimer = () => window.clearTimeout(rightPanelTimer);
    const setRightPanelOpen = (open) => {
      rightPanel.classList.toggle("is-open", open);
      rightPanelTrigger.setAttribute("aria-expanded", String(open));
    };
    const openRightPanel = () => {
      clearRightPanelTimer();
      setRightPanelOpen(true);
    };
    const scheduleRightPanelHide = () => {
      clearRightPanelTimer();
      if (document.body.classList.contains("is-slot-dragging")) return;
      rightPanelTimer = window.setTimeout(() => setRightPanelOpen(false), 500);
    };

    window.addEventListener("pointermove", (event) => {
      const triggerRect = rightPanelTrigger.getBoundingClientRect();
      const nearRightTrigger = event.clientX >= triggerRect.left - 18
        && event.clientY >= triggerRect.top - 18
        && event.clientY <= triggerRect.bottom + 18;
      if (nearRightTrigger) openRightPanel();
    }, { passive: true });
    rightPanelTrigger.addEventListener("pointerenter", openRightPanel);
    rightPanelTrigger.addEventListener("click", openRightPanel);
    rightPanelTrigger.addEventListener("focusin", openRightPanel);
    rightPanel.addEventListener("pointerenter", openRightPanel);
    rightPanel.addEventListener("pointermove", openRightPanel, { passive: true });
    rightPanel.addEventListener("pointerleave", scheduleRightPanelHide);
    rightPanel.addEventListener("focusin", openRightPanel);
    rightPanel.addEventListener("focusout", scheduleRightPanelHide);

    document.addEventListener("dragstart", (event) => {
      if (!event.target.closest(".slot-card")) return;
      document.body.classList.add("is-slot-dragging");
      openRightPanel();
    }, true);
    document.addEventListener("dragend", () => {
      if (!document.body.classList.contains("is-slot-dragging")) return;
      cancelActiveSlotDrag();
      if (!rightPanel.matches(":hover")) scheduleRightPanelHide();
    }, true);
    document.addEventListener("slotdragend", () => {
      if (!rightPanel.matches(":hover")) scheduleRightPanelHide();
    });
  }

  $$(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      clearProjectRouteHash();
      state.screen = btn.dataset.screen;
      renderAll();
    });
  });
  $("#modeToggle")?.addEventListener("click", () => {
    clearProjectRouteHash();
    state.mode = state.mode === "preview" ? "editor" : "preview";
    renderAll();
  });
  $("#playBtn").addEventListener("click", () => {
    state.animationPlaying = true;
    renderPreview();
  });
  $("#pauseBtn").addEventListener("click", () => {
    state.animationPlaying = false;
    renderPreview();
  });
  $("#resetBtn").addEventListener("click", () => {
    const preview = $("#sitePreview");
    preview.style.animation = "none";
    state.hero.mosaicProgress = 0;
    renderPreview();
  });
  $("#exportBtn").addEventListener("click", () => exportSelected("html"));
  $$("[data-export-format]").forEach((button) => {
    button.addEventListener("click", () => exportSelected(button.dataset.exportFormat));
  });
  $("#importBtn").addEventListener("click", () => $("#importFile").click());
  $("#importFile").addEventListener("change", importJSON);
  $("#publishBtn").addEventListener("click", openPublishedPreview);
  $("#closeQrModal").addEventListener("click", () => $("#qrModal").classList.add("is-hidden"));
  $("#closeCropModal")?.addEventListener("click", closeCropModal);
  $("#cancelCropBtn")?.addEventListener("click", closeCropModal);
  $("#applyCropBtn")?.addEventListener("click", applyCrop);
  $("#cropZoom")?.addEventListener("input", (event) => {
    if (!cropState) return;
    cropState.zoom = Number(event.target.value) || 1;
    constrainCropOffset();
    renderCropTransform();
  });
  $("#cropStage")?.addEventListener("pointerdown", startCropDrag);
  $("#cropStage")?.addEventListener("wheel", handleCropWheel, { passive: false });
  $("#closeSkillModal")?.addEventListener("click", closeSoftwareSkillModal);
  $("#saveSkillModalBtn")?.addEventListener("click", () => {
    saveSoftwareSkills();
    closeSoftwareSkillModal();
    renderAll();
  });
  $("#skillCustomForm")?.addEventListener("submit", saveCustomSoftwareSkill);
  $("#resetSkillEditorBtn")?.addEventListener("click", resetSoftwareSkillForm);
  $("#skillIconInput")?.addEventListener("change", handleSoftwareSkillIconUpload);
  $("#showSkillPercent")?.addEventListener("change", (event) => {
    state.about.showSkillPercent = event.target.checked;
    saveSoftwareSkills();
    renderPreview();
  });
  $("#skillLevelInput")?.addEventListener("input", (event) => {
    $("#skillLevelOutput").textContent = `${clampNumber(event.target.value, 0, 100)}%`;
  });
}

function bindHeroControls() {
  $("#ratioSelect").addEventListener("change", (event) => {
    state.hero.ratio = event.target.value;
    renderAll();
  });
  $("#speedSelect").addEventListener("change", (event) => {
    state.hero.speed = event.target.value;
    renderAll();
  });
  $("#backgroundSelect").addEventListener("change", (event) => {
    state.hero.background = normalizeHeroBackground(event.target.value);
    renderAll();
  });
  setupHeroCustomSelects();
}

function setupHeroCustomSelects() {
  customSelectSyncs = [];
  ["ratioSelect", "speedSelect", "backgroundSelect"].forEach((id) => {
    const select = $(`#${id}`);
    if (!select || select.dataset.customSelectReady === "true") return;
    const wrapper = document.createElement("div");
    wrapper.className = "custom-select";
    select.parentElement.insertBefore(wrapper, select);
    wrapper.appendChild(select);

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "custom-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-controls", `${id}Menu`);
    wrapper.appendChild(trigger);

    const menu = document.createElement("div");
    menu.id = `${id}Menu`;
    menu.className = "custom-select-menu";
    menu.setAttribute("role", "listbox");
    menu.tabIndex = -1;
    wrapper.appendChild(menu);

    const options = [...select.options].map((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "custom-select-option";
      button.dataset.value = option.value;
      button.setAttribute("role", "option");
      button.textContent = option.textContent;
      menu.appendChild(button);
      return button;
    });

    let isOpen = false;
    const selectedIndex = () => Math.max(options.findIndex((option) => option.dataset.value === select.value), 0);
    const sync = () => {
      const selected = select.options[select.selectedIndex];
      trigger.textContent = selected?.textContent || "请选择";
      options.forEach((option) => {
        const selectedOption = option.dataset.value === select.value;
        option.classList.toggle("is-selected", selectedOption);
        option.setAttribute("aria-selected", String(selectedOption));
      });
    };
    const focusOption = (index) => options[Math.max(0, Math.min(index, options.length - 1))]?.focus();
    const close = (restoreFocus = false) => {
      isOpen = false;
      wrapper.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
      if (restoreFocus) trigger.focus();
    };
    const open = (focusSelected = false) => {
      isOpen = true;
      wrapper.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      if (focusSelected) window.setTimeout(() => focusOption(selectedIndex()), 0);
    };
    const toggle = () => (isOpen ? close() : open(false));

    trigger.addEventListener("click", toggle);
    trigger.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        open(true);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        open(false);
        window.setTimeout(() => focusOption(selectedIndex() - 1), 0);
      } else if (event.key === "Escape") {
        close(true);
      }
    });
    options.forEach((option, index) => {
      option.addEventListener("click", () => {
        select.value = option.dataset.value;
        select.dispatchEvent(new Event("change", { bubbles: true }));
        close(true);
      });
      option.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown") {
          event.preventDefault();
          focusOption(index + 1);
        } else if (event.key === "ArrowUp") {
          event.preventDefault();
          focusOption(index - 1);
        } else if (event.key === "Escape") {
          event.preventDefault();
          close(true);
        } else if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          option.click();
        }
      });
    });
    select.classList.add("native-select-source");
    select.dataset.customSelectReady = "true";
    select.addEventListener("change", sync);
    sync();
    customSelectSyncs.push(sync);
  });
  document.addEventListener("pointerdown", (event) => {
    $$(".custom-select.is-open").forEach((wrapper) => {
      if (!wrapper.contains(event.target)) {
        wrapper.classList.remove("is-open");
        $(".custom-select-trigger", wrapper)?.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function syncHeroCustomSelects() {
  customSelectSyncs.forEach((sync) => sync());
}

function bindStyleControls() {
  $("#styleTarget")?.addEventListener("change", renderStyleControls);
}

function renderConfig() {
  $("#ratioSelect").value = state.hero.ratio;
  $("#speedSelect").value = state.hero.speed;
  state.hero.background = normalizeHeroBackground(state.hero.background);
  $("#backgroundSelect").value = state.hero.background;
  syncHeroCustomSelects();
  renderSlots();
  renderAboutFields();
  renderWorksConfig();
  renderContactFields();
  renderStyleControls();
}

function renderSlots() {
  const required = currentHeroTemplate().slots;
  ensureMediaCapacity(required);
  $("#slotCountLabel").textContent = `${state.hero.media.slice(0, required).filter(Boolean).length} / ${required}`;
  const root = $("#slotsList");
  root.innerHTML = "";
  for (let index = 0; index < required; index += 1) {
    const item = state.hero.media[index];
    const card = document.createElement("div");
    card.className = "slot-card";
    card.draggable = false;
    card.dataset.index = index;
    card.innerHTML = `
      <div class="slot-thumb ${item ? "has-media" : "is-empty"}" data-action="thumb-upload" role="button" tabindex="0" title="上传或替换图片">${item ? `<img src="${item.thumb || item.src}" alt="${escapeHTML(item.name)}"${mediaCropClassAttr(item)}${mediaCropStyleAttr(item)} />` : `<span class="slot-empty-icon slot-upload-placeholder" aria-hidden="true"><img class="slot-upload-icon" data-svg-src="assets/image-upload-icon.svg" alt="" /></span>`}</div>
      <div class="slot-meta">
        <strong>Slot ${String(index + 1).padStart(2, "0")}</strong>
        <span>${item ? "已上传" : "等待上传或拖拽图片"}</span>
      </div>
      <div class="slot-actions">
        ${item ? `<button class="mini-button" data-action="crop" title="裁切适配">裁切</button>` : ""}
        <button class="mini-button danger" data-action="delete" title="删除">×</button>
      </div>
    `;
    wireSlotCard(card, index);
    root.appendChild(card);
  }
  loadSlotUploadAssets();
}

function wireSlotCard(card, index) {
  let pendingPointer = null;
  const clearPendingPointer = () => {
    pendingPointer = null;
    window.removeEventListener("pointermove", handlePendingPointerMove);
    window.removeEventListener("pointerup", clearPendingPointer);
    window.removeEventListener("pointercancel", clearPendingPointer);
  };
  const handlePendingPointerMove = (event) => {
    if (!pendingPointer || event.pointerId !== pendingPointer.pointerId) return;
    const distance = Math.hypot(event.clientX - pendingPointer.startX, event.clientY - pendingPointer.startY);
    if (distance < 6) return;
    const { pointerId, startX, startY } = pendingPointer;
    clearPendingPointer();
    startSlotPointerDrag(card, index, pointerId, startX, startY, event.clientX, event.clientY);
  };
  card.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || event.target.closest("button,[data-action],input,select")) return;
    pendingPointer = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY
    };
    window.addEventListener("pointermove", handlePendingPointerMove, { passive: false });
    window.addEventListener("pointerup", clearPendingPointer, { once: true });
    window.addEventListener("pointercancel", clearPendingPointer, { once: true });
  });
  card.addEventListener("dragover", (event) => event.preventDefault());
  card.addEventListener("drop", (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) readImage(file, (media) => openCropModal(index, media));
  });
  const uploadFromThumb = () => pickImage((media) => openCropModal(index, media));
  $("[data-action='thumb-upload']", card).addEventListener("click", uploadFromThumb);
  $("[data-action='thumb-upload']", card).addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    uploadFromThumb();
  });
  $("[data-action='crop']", card)?.addEventListener("click", () => openCropModal(index));
  $("[data-action='delete']", card).addEventListener("click", () => {
    state.hero.media[index] = null;
    renderAll();
  });
}

function startSlotPointerDrag(card, index, pointerId, startX, startY, clientX, clientY) {
  if (activeSlotDrag) cancelActiveSlotDrag();
  const list = card.parentElement;
  const bounds = card.getBoundingClientRect();
  const placeholder = document.createElement("div");
  placeholder.className = "slot-card-drop-placeholder";
  placeholder.style.height = `${bounds.height}px`;
  placeholder.style.width = `${bounds.width}px`;
  const preview = card.cloneNode(true);
  preview.classList.add("slot-card-drag-preview");
  preview.setAttribute("aria-hidden", "true");
  preview.removeAttribute("id");
  preview.querySelectorAll("button,[data-action],input,select").forEach((control) => {
    control.tabIndex = -1;
  });
  preview.querySelectorAll("[data-svg-src]").forEach((image) => image.removeAttribute("src"));
  preview.style.width = `${bounds.width}px`;
  preview.style.height = `${bounds.height}px`;
  document.body.appendChild(preview);
  loadSlotUploadAssets();
  activeSlotDrag = {
    card,
    index,
    list,
    placeholder,
    preview,
    pointerId,
    offsetX: clientX - bounds.left,
    offsetY: clientY - bounds.top,
    originalOrder: [...list.querySelectorAll(".slot-card")].map((slotCard) => Number(slotCard.dataset.index)),
    shiftAnimations: new Map(),
    dropPositionFrame: 0,
    pendingClientX: clientX,
    pendingClientY: clientY,
    lastClientX: clientX,
    lastClientY: clientY,
    lastMoveTime: performance.now(),
    pointerVelocity: 0
  };
  card.replaceWith(placeholder);
  document.body.classList.add("is-slot-dragging");
  moveSlotPointerDrag(clientX, clientY);
  window.addEventListener("pointermove", handleSlotPointerMove, { passive: false });
  window.addEventListener("pointerup", finishSlotPointerDrag, { once: true });
  window.addEventListener("pointercancel", cancelSlotPointerDrag, { once: true });
  window.addEventListener("keydown", handleSlotPointerKeydown);
}

function handleSlotPointerMove(event) {
  if (!activeSlotDrag || event.pointerId !== activeSlotDrag.pointerId) return;
  event.preventDefault();
  moveSlotPointerDrag(event.clientX, event.clientY);
}

function moveSlotPointerDrag(clientX, clientY) {
  if (!activeSlotDrag) return;
  const { preview } = activeSlotDrag;
  const now = performance.now();
  const elapsed = Math.max(now - activeSlotDrag.lastMoveTime, 1);
  const distance = Math.hypot(clientX - activeSlotDrag.lastClientX, clientY - activeSlotDrag.lastClientY);
  const instantVelocity = distance / elapsed;
  activeSlotDrag.pointerVelocity = activeSlotDrag.pointerVelocity * 0.35 + instantVelocity * 0.65;
  activeSlotDrag.lastClientX = clientX;
  activeSlotDrag.lastClientY = clientY;
  activeSlotDrag.lastMoveTime = now;
  preview.style.transform = `translate3d(${clientX - activeSlotDrag.offsetX + 12}px, ${clientY - activeSlotDrag.offsetY + 12}px, 0) rotate(-1deg) scale(1.02)`;
  activeSlotDrag.pendingClientX = clientX;
  activeSlotDrag.pendingClientY = clientY;
  if (activeSlotDrag.dropPositionFrame) return;
  activeSlotDrag.dropPositionFrame = window.requestAnimationFrame(() => {
    if (!activeSlotDrag) return;
    activeSlotDrag.dropPositionFrame = 0;
    updateSlotDropPosition(activeSlotDrag.pendingClientX, activeSlotDrag.pendingClientY);
  });
}

function flushSlotDropPosition() {
  if (!activeSlotDrag) return;
  if (activeSlotDrag.dropPositionFrame) {
    window.cancelAnimationFrame(activeSlotDrag.dropPositionFrame);
    activeSlotDrag.dropPositionFrame = 0;
  }
  updateSlotDropPosition(activeSlotDrag.pendingClientX, activeSlotDrag.pendingClientY);
}

function updateSlotDropPosition(clientX, clientY) {
  if (!activeSlotDrag) return;
  const { card, list, placeholder } = activeSlotDrag;
  const target = document.elementFromPoint(clientX, clientY)?.closest("#slotsList .slot-card");
  if (!target || target === card) {
    $$("#slotsList .slot-card").forEach((slotCard) => slotCard.classList.remove("is-dragover"));
    return;
  }
  const bounds = target.getBoundingClientRect();
  const reference = clientY < bounds.top + bounds.height / 2 ? target : target.nextElementSibling;
  const shouldReposition = reference !== placeholder && reference !== card;
  let previousRects = null;
  if (shouldReposition) {
    previousRects = new Map(
      [...list.querySelectorAll(".slot-card")].map((slotCard) => [
        Number(slotCard.dataset.index),
        slotCard.getBoundingClientRect()
      ])
    );
    cancelSlotShiftAnimations();
    list.insertBefore(placeholder, reference);
  }
  $$("#slotsList .slot-card").forEach((slotCard) => slotCard.classList.remove("is-dragover"));
  target.classList.add("is-dragover");
  if (previousRects) animateSlotCardShifts(previousRects);
}

function cancelSlotShiftAnimations() {
  if (!activeSlotDrag?.shiftAnimations) return;
  activeSlotDrag.shiftAnimations.forEach((animation) => animation.cancel());
  activeSlotDrag.shiftAnimations.clear();
}

function animateSlotCardShifts(previousRects) {
  if (!activeSlotDrag || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  const cards = $$("#slotsList .slot-card");
  const duration = Math.round(Math.max(160, Math.min(320, 320 - activeSlotDrag.pointerVelocity * 120)));
  cards.forEach((slotCard) => {
    const previous = previousRects.get(Number(slotCard.dataset.index));
    const next = slotCard.getBoundingClientRect();
    if (!previous) return;
    const offsetX = previous.left - next.left;
    const offsetY = previous.top - next.top;
    if (Math.hypot(offsetX, offsetY) < 1 || typeof slotCard.animate !== "function") return;
    const animation = slotCard.animate(
      [
        { transform: `translate3d(${offsetX}px, ${offsetY}px, 0)` },
        { transform: "translate3d(0, 0, 0)" }
      ],
      { duration, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
    );
    activeSlotDrag.shiftAnimations.set(slotCard, animation);
    animation.addEventListener("finish", () => {
      if (activeSlotDrag?.shiftAnimations.get(slotCard) === animation) {
        activeSlotDrag.shiftAnimations.delete(slotCard);
      }
    }, { once: true });
  });
}

function finishSlotPointerDrag() {
  if (!activeSlotDrag) return;
  flushSlotDropPosition();
  const drag = activeSlotDrag;
  cancelSlotShiftAnimations();
  const previousRects = new Map(
    [...drag.list.querySelectorAll(".slot-card")].map((slotCard) => [
      Number(slotCard.dataset.index),
      slotCard.getBoundingClientRect()
    ])
  );
  previousRects.set(drag.index, drag.preview.getBoundingClientRect());
  drag.placeholder.replaceWith(drag.card);
  const originalMedia = state.hero.media.slice();
  const reorderedIndexes = [...drag.list.querySelectorAll(".slot-card")].map((slotCard) => Number(slotCard.dataset.index));
  state.hero.media = reorderedIndexes.map((originalIndex) => originalMedia[originalIndex]);
  cleanupSlotPointerDrag();
  renderAll();
  animateSlotReorder(previousRects, reorderedIndexes);
}

function animateSlotReorder(previousRects, reorderedIndexes) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  const cards = $$("#slotsList .slot-card");
  const settlingCards = [];
  cards.forEach((card, newIndex) => {
    const previous = previousRects.get(reorderedIndexes[newIndex]);
    const next = card.getBoundingClientRect();
    if (!previous) return;
    const offsetX = previous.left - next.left;
    const offsetY = previous.top - next.top;
    if (Math.hypot(offsetX, offsetY) < 1) return;
    card.classList.add("is-slot-settling");
    card.style.transition = "none";
    card.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    settlingCards.push(card);
  });
  if (!settlingCards.length) return;

  const clearSettling = (card) => {
    card.classList.remove("is-slot-settling");
    card.style.removeProperty("transition");
    card.style.removeProperty("transform");
  };
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      settlingCards.forEach((card) => {
        card.style.transition = "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)";
        card.style.transform = "translate3d(0, 0, 0)";
        let settled = false;
        const finish = () => {
          if (settled) return;
          settled = true;
          card.removeEventListener("transitionend", finish);
          window.clearTimeout(timeoutId);
          clearSettling(card);
        };
        const timeoutId = window.setTimeout(finish, 460);
        card.addEventListener("transitionend", finish);
      });
    });
  });
}

function cancelSlotPointerDrag() {
  if (!activeSlotDrag) return;
  const { card, list, placeholder, originalOrder } = activeSlotDrag;
  placeholder.replaceWith(card);
  const cardsByIndex = new Map([...list.querySelectorAll(".slot-card")].map((slotCard) => [Number(slotCard.dataset.index), slotCard]));
  originalOrder.forEach((originalIndex) => {
    const slotCard = cardsByIndex.get(originalIndex);
    if (slotCard) list.appendChild(slotCard);
  });
  cleanupSlotPointerDrag();
}

function handleSlotPointerKeydown(event) {
  if (event.key === "Escape") cancelSlotPointerDrag();
}

function cleanupSlotPointerDrag() {
  if (!activeSlotDrag) return;
  if (activeSlotDrag.dropPositionFrame) {
    window.cancelAnimationFrame(activeSlotDrag.dropPositionFrame);
    activeSlotDrag.dropPositionFrame = 0;
  }
  cancelSlotShiftAnimations();
  activeSlotDrag.preview.remove();
  activeSlotDrag.card.classList.remove("is-dragging");
  $$("#slotsList .slot-card").forEach((slotCard) => slotCard.classList.remove("is-dragover"));
  activeSlotDrag = null;
  document.body.classList.remove("is-slot-dragging");
  window.removeEventListener("pointermove", handleSlotPointerMove);
  window.removeEventListener("pointerup", finishSlotPointerDrag);
  window.removeEventListener("pointercancel", cancelSlotPointerDrag);
  window.removeEventListener("keydown", handleSlotPointerKeydown);
  document.dispatchEvent(new Event("slotdragend"));
}

function cancelActiveSlotDrag() {
  cancelSlotPointerDrag();
}

function cropAspectForTemplate(templateId = state.hero.template) {
  return {
    orbit: 4 / 5,
    film: 1,
    totem: 4 / 5,
    mosaic: 4 / 3,
    "photo-orbit": 1,
    "scroll-morph": 4 / 5,
    "image-trail": 4 / 5,
    "three-d-carousel": 4 / 5,
    "stellar-gallery": 4 / 5,
    "masonry-gallery": 4 / 5,
    "image-gallery": 1,
    "portfolio-gallery": 16 / 9,
    "ticker-loop": 1
  }[templateId] || 4 / 5;
}

function cropSizeForAspect(aspect) {
  const longSide = 2200;
  if (aspect >= 1) return { width: longSide, height: Math.round(longSide / aspect) };
  return { width: Math.round(longSide * aspect), height: longSide };
}

function openCropModal(index, mediaOverride = null) {
  const media = mediaOverride || state.hero.media[index];
  if (!media) return;
  const modal = $("#cropModal");
  const image = $("#cropImage");
  if (!modal || !image) return;
  const aspect = cropAspectForTemplate();
  cropState = {
    target: "hero",
    slotIndex: index,
    media,
    aspect,
    image,
    naturalWidth: 0,
    naturalHeight: 0,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    dragging: false,
    dragX: 0,
    dragY: 0
  };
  $("#cropTitle").textContent = `适配 ${currentHeroTemplate().name} 占位比例`;
  $("#cropZoom").value = "1";
  image.onload = () => {
    if (!cropState) return;
    cropState.naturalWidth = image.naturalWidth || image.width;
    cropState.naturalHeight = image.naturalHeight || image.height;
    cropState.zoom = 1;
    cropState.offsetX = 0;
    cropState.offsetY = 0;
    updateCropLayout();
  };
  image.src = media.originalSrc || media.src;
  modal.classList.remove("is-hidden");
}

function openWorkCoverCrop(project, media = project.cover) {
  if (!project || !media) return;
  const modal = $("#cropModal");
  const image = $("#cropImage");
  if (!modal || !image) return;
  const aspect = workCropAspect(project);
  cropState = {
    target: "work",
    projectId: project.id,
    media,
    aspect,
    image,
    naturalWidth: 0,
    naturalHeight: 0,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    dragging: false,
    dragX: 0,
    dragY: 0
  };
  $("#cropTitle").textContent = `适配作品封面 ${workCropLabel(project.crop)}`;
  $("#cropZoom").value = "1";
  image.onload = () => {
    if (!cropState) return;
    cropState.naturalWidth = image.naturalWidth || image.width;
    cropState.naturalHeight = image.naturalHeight || image.height;
    cropState.zoom = 1;
    cropState.offsetX = 0;
    cropState.offsetY = 0;
    updateCropLayout();
  };
  image.src = media.originalSrc || media.src;
  modal.classList.remove("is-hidden");
}

function openProjectDetailImageCrop(project, imageIndex, media) {
  if (!project || !media) return;
  const modal = $("#cropModal");
  const image = $("#cropImage");
  if (!modal || !image) return;
  cropState = {
    target: "work-detail",
    projectId: project.id,
    imageIndex,
    media,
    aspect: imageIndex === "cover" ? 16 / 9 : 4 / 3,
    image,
    naturalWidth: 0,
    naturalHeight: 0,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
    dragging: false,
    dragX: 0,
    dragY: 0
  };
  $("#cropTitle").textContent = imageIndex === "cover" ? "适配项目主视觉 16:9" : "适配详情图片 4:3";
  $("#cropZoom").value = "1";
  image.onload = () => {
    if (!cropState) return;
    cropState.naturalWidth = image.naturalWidth || image.width;
    cropState.naturalHeight = image.naturalHeight || image.height;
    cropState.zoom = 1;
    cropState.offsetX = 0;
    cropState.offsetY = 0;
    updateCropLayout();
  };
  image.src = media.originalSrc || media.src;
  modal.classList.remove("is-hidden");
}

function workCropAspect(project) {
  const parts = String(project?.crop || "4 / 3").split("/").map((part) => Number(part.trim()));
  if (parts.length === 2 && parts[0] > 0 && parts[1] > 0) return parts[0] / parts[1];
  return 4 / 3;
}

function workCropLabel(value) {
  return String(value || "4 / 3").replace(/\s+/g, "");
}

function closeCropModal() {
  $("#cropModal")?.classList.add("is-hidden");
  cropState = null;
}

function cropGeometry() {
  if (!cropState) return null;
  const stage = $("#cropStage");
  if (!stage || !cropState.naturalWidth || !cropState.naturalHeight) return null;
  const rect = stage.getBoundingClientRect();
  const stageW = Math.max(1, rect.width);
  const stageH = Math.max(1, rect.height);
  let frameW = stageW * 0.76;
  let frameH = frameW / cropState.aspect;
  if (frameH > stageH * 0.76) {
    frameH = stageH * 0.76;
    frameW = frameH * cropState.aspect;
  }
  const baseScale = Math.max(frameW / cropState.naturalWidth, frameH / cropState.naturalHeight);
  const scale = baseScale * cropState.zoom;
  const imageW = cropState.naturalWidth * scale;
  const imageH = cropState.naturalHeight * scale;
  return { frameW, frameH, imageW, imageH, scale };
}

function constrainCropOffset() {
  const geo = cropGeometry();
  if (!geo || !cropState) return;
  const maxX = Math.max(0, (geo.imageW - geo.frameW) / 2);
  const maxY = Math.max(0, (geo.imageH - geo.frameH) / 2);
  cropState.offsetX = Math.max(-maxX, Math.min(maxX, cropState.offsetX));
  cropState.offsetY = Math.max(-maxY, Math.min(maxY, cropState.offsetY));
}

function updateCropLayout() {
  constrainCropOffset();
  renderCropTransform();
}

function renderCropTransform() {
  const geo = cropGeometry();
  if (!geo || !cropState) return;
  const frame = $("#cropFrame");
  const image = $("#cropImage");
  frame.style.width = `${geo.frameW}px`;
  frame.style.height = `${geo.frameH}px`;
  image.style.width = `${geo.imageW}px`;
  image.style.height = `${geo.imageH}px`;
  image.style.transform = `translate(-50%, -50%) translate(${cropState.offsetX}px, ${cropState.offsetY}px)`;
}

function startCropDrag(event) {
  if (!cropState || event.target?.closest?.(".crop-controls")) return;
  event.preventDefault();
  cropState.dragging = true;
  cropState.dragX = event.clientX;
  cropState.dragY = event.clientY;
  $("#cropStage").setPointerCapture?.(event.pointerId);
  window.addEventListener("pointermove", moveCropDrag);
  window.addEventListener("pointerup", endCropDrag, { once: true });
}

function handleCropWheel(event) {
  if (!cropState) return;
  event.preventDefault();
  const input = $("#cropZoom");
  const nextZoom = Math.max(1, Math.min(3, cropState.zoom - event.deltaY * 0.0016));
  cropState.zoom = nextZoom;
  if (input) input.value = String(nextZoom);
  constrainCropOffset();
  renderCropTransform();
}

function moveCropDrag(event) {
  if (!cropState?.dragging) return;
  cropState.offsetX += event.clientX - cropState.dragX;
  cropState.offsetY += event.clientY - cropState.dragY;
  cropState.dragX = event.clientX;
  cropState.dragY = event.clientY;
  constrainCropOffset();
  renderCropTransform();
}

function endCropDrag() {
  if (cropState) cropState.dragging = false;
  window.removeEventListener("pointermove", moveCropDrag);
}

function applyCrop() {
  if (!cropState) return;
  const geo = cropGeometry();
  if (!geo) return;
  const media = cropState.media;
  const animatedSource = media.originalSrc || media.src;
  const shouldPreserveAnimation = media.isAnimated || media.type === "image/gif" || /^data:image\/gif/i.test(animatedSource);
  const out = cropSizeForAspect(cropState.aspect);
  const sourceX = ((geo.imageW - geo.frameW) / 2 - cropState.offsetX) / geo.scale;
  const sourceY = ((geo.imageH - geo.frameH) / 2 - cropState.offsetY) / geo.scale;
  const sourceW = geo.frameW / geo.scale;
  const sourceH = geo.frameH / geo.scale;
  if (shouldPreserveAnimation) {
    const cropX = Math.max(0, Math.min(100, ((sourceX + sourceW / 2) / cropState.naturalWidth) * 100));
    const cropY = Math.max(0, Math.min(100, ((sourceY + sourceH / 2) / cropState.naturalHeight) * 100));
    const croppedMedia = {
      ...media,
      src: animatedSource,
      thumb: animatedSource,
      width: out.width,
      height: out.height,
      naturalWidth: cropState.naturalWidth,
      naturalHeight: cropState.naturalHeight,
      type: "image/gif",
      isAnimated: true,
      cropPosition: { x: cropX, y: cropY },
      cropAspect: cropState.aspect,
      croppedAt: new Date().toISOString()
    };
    commitCroppedMedia(croppedMedia);
    closeCropModal();
    renderAll();
    return;
  }
  const canvas = document.createElement("canvas");
  canvas.width = out.width;
  canvas.height = out.height;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#111";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(cropState.image, sourceX, sourceY, sourceW, sourceH, 0, 0, canvas.width, canvas.height);
  const src = canvasToDataURL(canvas, "image/webp", 0.94);
  const thumb = resizeCanvasDataURL(canvas, 420, 0.78);
  const croppedMedia = {
    ...media,
    src,
    thumb,
    width: canvas.width,
    height: canvas.height,
    type: dataURLType(src),
    size: dataURLSize(src),
    isAnimated: false,
    cropPosition: null,
    cropAspect: cropState.aspect,
    croppedAt: new Date().toISOString()
  };
  commitCroppedMedia(croppedMedia);
  closeCropModal();
  renderAll();
}

function commitCroppedMedia(media) {
  if (!cropState) return;
  if (cropState.target === "work") {
    const project = state.works.projects.find((item) => item.id === cropState.projectId);
    if (project) project.cover = media;
    return;
  }
  if (cropState.target === "work-detail") {
    const project = state.works.projects.find((item) => item.id === cropState.projectId);
    if (!project) return;
    if (cropState.imageIndex === "cover") {
      project.cover = media;
      return;
    }
    if (!Array.isArray(project.detailImages)) project.detailImages = [];
    project.detailImages[cropState.imageIndex] = media;
    return;
  }
  state.hero.media[cropState.slotIndex] = media;
}

function canvasToDataURL(canvas, type = "image/webp", quality = 0.9) {
  const data = canvas.toDataURL(type, quality);
  return data.startsWith(`data:${type}`) ? data : canvas.toDataURL("image/jpeg", quality);
}

function resizeCanvasDataURL(sourceCanvas, maxSide, quality) {
  const scale = Math.min(1, maxSide / Math.max(sourceCanvas.width, sourceCanvas.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(sourceCanvas.width * scale));
  canvas.height = Math.max(1, Math.round(sourceCanvas.height * scale));
  const context = canvas.getContext("2d", { alpha: false });
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(sourceCanvas, 0, 0, canvas.width, canvas.height);
  return canvasToDataURL(canvas, "image/webp", quality);
}

function renderAboutFields() {
  const root = $("#aboutFields");
  root.innerHTML = `
    ${textInput("姓名", "name", state.about.name)}
    ${textInput("职业标题", "title", state.about.title)}
    ${textArea("个人简介", "bio", state.about.bio)}
    <label class="portrait-field"><span>头像或个人图片</span>
      <button class="avatar-upload-card" id="portraitBtn" type="button">
        <span class="avatar-picker">${state.about.portrait ? `<img src="${state.about.portrait.thumb || state.about.portrait.src}" alt="${escapeHTML(state.about.name)}" />` : `<span>添加个人照片</span>`}</span>
        <small>${state.about.portrait ? "点击替换图片" : "点击上传图片"}</small>
      </button>
    </label>
    ${textArea("技能标签（逗号分隔）", "skills", state.about.skills)}
    ${textArea("工作经历时间轴（每行一条）", "experience", state.about.experience)}
    ${textArea("教育背景", "education", state.about.education)}
    ${textArea("奖项", "awards", state.about.awards)}
    ${textArea("合作客户", "clients", state.about.clients)}
    ${textArea("服务范围", "services", state.about.services)}
    ${textInput("可合作状态", "availability", state.about.availability)}
    ${textInput("简历下载按钮", "resume", state.about.resume)}
    ${textInput("社交链接", "socials", state.about.socials)}
  `;
  $$("[data-about]", root).forEach((input) => {
    input.addEventListener("input", () => {
      state.about[input.dataset.about] = input.value;
      renderPreview();
    });
  });
  $("#portraitBtn").addEventListener("click", () => pickImage((media) => {
    state.about.portrait = media;
    renderPreview();
  }));
}

function renderWorksConfig() {
  const categories = ["all", ...new Set(state.works.projects.map((project) => project.category).filter(Boolean))];
  $("#worksFilter").innerHTML = categories.map((category) => `<option value="${escapeHTML(category)}">${category === "all" ? `${escapeHTML(worksAllLabel())}分类` : escapeHTML(category)}</option>`).join("");
  $("#worksFilter").value = state.works.filter;
  $("#worksFilter").onchange = (event) => {
    state.works.filter = event.target.value;
    renderAll();
  };
  $("#addWorkBtn").onclick = () => {
    const id = `p${Date.now()}`;
    state.works.projects.push(makeProject(id, String(state.works.projects.length + 1).padStart(2, "0"), "New Project", "Brand", "项目简介"));
    renderAll();
  };

  const root = $("#worksEditorList");
  root.innerHTML = "";
  state.works.projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "work-edit-card";
    card.draggable = true;
    card.dataset.id = project.id;
    card.innerHTML = `
      <div class="field-row">
        <div class="work-thumb">${project.cover ? `<img src="${project.cover.thumb || project.cover.src}" alt="${escapeHTML(project.title)}" />` : "封面"}</div>
        <div class="field-stack">
          ${smallInput("序号", "number", project.number)}
          ${smallInput("标题", "title", project.title)}
          ${smallInput("类别", "category", project.category)}
        </div>
      </div>
      ${smallArea("描述", "desc", project.desc)}
      <label><span>封面裁剪</span>
        <select data-work-field="crop">
          <option value="4 / 3">4:3</option>
          <option value="1 / 1">1:1</option>
          <option value="3 / 4">3:4</option>
          <option value="16 / 9">16:9</option>
        </select>
      </label>
      <div class="toggle-row">
        <label><input type="checkbox" data-work-field="hidden" ${project.hidden ? "checked" : ""}> 隐藏</label>
        <button class="mini-button" data-action="expand">详情</button>
        <button class="mini-button danger" data-action="remove">删除</button>
      </div>
    `;
    wireWorkCard(card, project, index);
    root.appendChild(card);
  });
}

function wireWorkCard(card, project) {
  $("select[data-work-field='crop']", card).value = project.crop;
  $$("[data-work-field]", card).forEach((input) => {
    input.addEventListener("input", () => updateProjectField(input, project));
    input.addEventListener("change", () => updateProjectField(input, project));
  });
  card.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", `work:${project.id}`);
  });
  card.addEventListener("dragover", (event) => event.preventDefault());
  card.addEventListener("drop", (event) => {
    event.preventDefault();
    const token = event.dataTransfer.getData("text/plain");
    if (!token.startsWith("work:")) return;
    const fromId = token.replace("work:", "");
    const toId = project.id;
    const fromIndex = state.works.projects.findIndex((item) => item.id === fromId);
    const toIndex = state.works.projects.findIndex((item) => item.id === toId);
    const [moved] = state.works.projects.splice(fromIndex, 1);
    state.works.projects.splice(toIndex, 0, moved);
    renderAll();
  });
  $("[data-action='expand']", card).onclick = () => {
    state.expandedProjectId = project.id;
    renderPreview();
  };
  $("[data-action='remove']", card).onclick = () => {
    state.works.projects = state.works.projects.filter((item) => item.id !== project.id);
    renderAll();
  };
}

function updateProjectField(input, project) {
  const field = input.dataset.workField;
  if (input.type === "checkbox") {
    project[field] = input.checked;
  } else {
    project[field] = input.value;
  }
  renderPreview();
}

function renderContactFields() {
  const root = $("#contactFields");
  root.innerHTML = `
    ${textInput("感谢标题", "thanks", state.contact.thanks, "contact")}
    ${textArea("合作邀请文案", "invite", state.contact.invite, "contact")}
    ${textInput("电话", "phone", state.contact.phone, "contact")}
    ${textInput("微信号", "wechat", state.contact.wechat, "contact")}
    ${textInput("邮箱", "email", state.contact.email, "contact")}
    <label><span>微信二维码</span><button class="secondary-button" id="qrBtn">上传 / 替换二维码</button></label>
    ${textInput("社交媒体链接", "socials", state.contact.socials, "contact")}
    <div class="toggle-row">
      ${visibilityInput("phone", "电话")}
      ${visibilityInput("wechat", "微信")}
      ${visibilityInput("email", "邮箱")}
      ${visibilityInput("qr", "二维码")}
      ${visibilityInput("socials", "社交")}
    </div>
  `;
  $$("[data-contact]", root).forEach((input) => {
    input.addEventListener("input", () => {
      state.contact[input.dataset.contact] = input.value;
      renderPreview();
    });
  });
  $$("[data-visibility]", root).forEach((input) => {
    input.addEventListener("change", () => {
      state.contact.visibility[input.dataset.visibility] = input.checked;
      renderPreview();
    });
  });
  $("#qrBtn").addEventListener("click", () => pickImage((media) => {
    state.contact.qr = media;
    renderPreview();
  }));
}

function renderStyleControls() {
  if (!$("#styleTarget") || !$("#styleControls")) return;
  const target = $("#styleTarget").value;
  const style = state.styles[target][state.device];
  const root = $("#styleControls");
  root.innerHTML = `
    <label><span>字体家族</span><input data-style="fontFamily" value="${escapeAttr(style.fontFamily)}"></label>
    <div class="field-row">
      <label><span>字重</span><select data-style="fontWeight">
        ${option("400", "400", style.fontWeight)}${option("500", "500", style.fontWeight)}${option("600", "600", style.fontWeight)}${option("700", "700", style.fontWeight)}
      </select></label>
      <label><span>字号</span><input type="number" min="12" max="28" data-style="fontSize" value="${style.fontSize}"></label>
    </div>
    <div class="field-row">
      <label><span>行高</span><input type="number" step="0.05" min="1" max="2.2" data-style="lineHeight" value="${style.lineHeight}"></label>
      <label><span>字距</span><input type="number" step="0.1" min="0" max="4" data-style="letterSpacing" value="${style.letterSpacing}"></label>
    </div>
    <div class="field-row">
      <label><span>文字颜色</span><input type="color" data-style="textColor" value="${style.textColor}"></label>
      <label><span>背景色</span><input type="color" data-style="background" value="${style.background}"></label>
    </div>
    <div class="field-row">
      <label><span>主题色</span><input type="color" data-style="themeColor" value="${style.themeColor}"></label>
      <label><span>对齐方式</span><select data-style="align">
        ${option("left", "左对齐", style.align)}${option("center", "居中", style.align)}${option("right", "右对齐", style.align)}
      </select></label>
    </div>
    <div class="field-row">
      <label><span>区块间距</span><input type="number" min="18" max="90" data-style="spacing" value="${style.spacing}"></label>
      <label><span>内容宽度</span><input type="number" min="680" max="1400" data-style="contentWidth" value="${style.contentWidth}"></label>
    </div>
    <div class="field-row">
      <label><span>圆角</span><input type="number" min="0" max="28" data-style="radius" value="${style.radius}"></label>
      <label><span>边框</span><input type="number" min="0" max="3" data-style="border" value="${style.border}"></label>
    </div>
    <label><span>阴影</span><select data-style="shadow">
      ${option("none", "无", style.shadow)}${option("soft", "轻", style.shadow)}${option("medium", "中", style.shadow)}${option("strong", "强", style.shadow)}
    </select></label>
  `;
  $$("[data-style]", root).forEach((input) => {
    input.addEventListener("input", () => {
      state.styles[target][state.device][input.dataset.style] = input.value;
      renderPreview();
    });
    input.addEventListener("change", () => {
      state.styles[target][state.device][input.dataset.style] = input.value;
      renderPreview();
    });
  });
}

function renderPreview() {
  heroRenderMode = HERO_RENDER_MODES.EDITOR_PREVIEW;
  currentHeroExportSnapshot = null;
  cleanupCircularGalleries();
  cleanupVerticalImageStacks();
  cleanupZoomParallax();
  cleanupPhotoOrbits();
  cleanupScrollMorphs();
  cleanupImageTrails();
  cleanupThreeDCarousels();
  cleanupStellarGalleries();
  cleanupMasonryGalleries();
  cleanupImageGalleries();
  const root = $("#sitePreview");
  const screen = state.mode === "preview" ? "all" : state.screen;
  if (screen === "all") {
    root.scrollLeft = 0;
  }
  root.classList.toggle("is-paused", !state.animationPlaying);
  root.classList.toggle("is-full-preview", screen === "all");
  const heroBackground = normalizeHeroBackground(state.hero.background);
  state.hero.background = heroBackground;
  root.classList.toggle("preview-bg-ivory", heroBackground === "ivory");
  root.classList.toggle("preview-bg-black", heroBackground === "black");
  root.style.setProperty("--preview-bg", BG_MAP[heroBackground]);
  root.style.setProperty("--anim-duration", SPEED_MAP[state.hero.speed]);
  root.style.setProperty("--preview-height", `${Math.max(root.clientHeight, 1)}px`);
  const detailSlug = currentProjectRouteSlug();
  if (detailSlug) {
    root.scrollLeft = 0;
    root.classList.add("is-full-preview", "project-detail-mode");
    root.innerHTML = renderProjectDetailRoute(detailSlug);
    wireProjectDetailInteractions(root);
    initProjectDetailImageReveal(root);
    initBlurTexts(root);
    updatePreviewScrollbar();
    return;
  }
  root.classList.remove("project-detail-mode");
  root.innerHTML = screen === "all"
    ? renderAllSections()
    : renderSection(state.screen);
  wirePreviewInteractions(root);
  initVerticalImageStacks(root);
  initZoomParallax(root);
  initPhotoOrbits(root);
  initScrollMorphs(root);
  initImageTrails(root);
  initThreeDCarousels(root, { autoPlay: state.animationPlaying });
  initStellarGalleries(root, { autoPlay: state.animationPlaying });
  initMasonryGalleries(root);
  initImageGalleries(root, { autoPlay: state.animationPlaying });
  initBlurTexts(root);
  initSoftwareSkillReveal(root);
  if (screen === "all") {
    resetPreviewScroll(root, "hero");
  }
  updatePreviewScrollbar();
}

function initBlurTexts(root = document) {
  const nodes = $$(".blur-text, .split-text", root);
  if (!nodes.length) return;
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px" });
  nodes.forEach((node) => observer.observe(node));
}

function resetPreviewScroll(root, targetScreen = "hero") {
  const sectionSelector = {
    hero: ".hero-preview",
    about: ".about-preview",
    works: ".works-preview",
    contact: ".contact-preview"
  }[targetScreen] || ".hero-preview";
  const reset = () => {
    const section = root.querySelector(sectionSelector);
    root.scrollTop = section ? section.offsetTop : 0;
    root.scrollLeft = 0;
  };
  reset();
  requestAnimationFrame(() => {
    reset();
    requestAnimationFrame(reset);
  });
  window.setTimeout(reset, 60);
  window.setTimeout(reset, 180);
}

function renderAllSections() {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  const modeClass = heroRenderMode || HERO_RENDER_MODES.EDITOR_PREVIEW;
  return `<div class="published-site editor-preview-stack ${modeClass} preview-bg-${heroBackground}" data-render-mode="${modeClass}">
    ${renderSection("hero")}
    ${renderSection("about")}
    ${renderSection("works")}
    ${renderSection("contact")}
  </div>`;
}

function renderSection(screen) {
  if (screen === "hero") return renderHeroSection();
  if (screen === "about") return renderAboutSection();
  if (screen === "works") return renderWorksSection();
  return renderContactSection();
}

function mergedStyle(target) {
  return {
    ...state.styles.global[state.device],
    ...(state.styles[target]?.[state.device] || {})
  };
}

function styleVars(target) {
  const style = mergedStyle(target);
  const shadow = {
    none: "none",
    soft: "0 10px 30px rgba(0,0,0,.22)",
    medium: "0 20px 60px rgba(0,0,0,.34)",
    strong: "0 34px 90px rgba(0,0,0,.48)"
  }[style.shadow];
  return `
    --section-bg:${style.background};
    --section-text:${style.textColor};
    --accent:${style.themeColor};
    --section-spacing:${style.spacing}px;
    --content-width:${style.contentWidth}px;
    --media-radius:${style.radius}px;
    --media-border:${style.border}px solid rgba(255,255,255,.16);
    --media-shadow:${shadow};
    --font-weight:${style.fontWeight};
    --font-size:${style.fontSize}px;
    --line-height:${style.lineHeight};
    --letter-spacing:${style.letterSpacing}px;
    text-align:${style.align};
    font-family:${style.fontFamily};
  `;
}

function renderHeroSection() {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  return `<section class="preview-section hero-preview hero-${state.hero.template} hero-bg-${heroBackground}" style="${styleVars("hero")}">
    <div class="preview-inner hero-layout">
      <div class="media-zone media-zone-${state.hero.template}">${renderHeroMedia()}</div>
    </div>
  </section>`;
}

function renderHeroMedia() {
  const registry = heroTemplateRegistry[state.hero.template] || heroTemplateRegistry.orbit;
  if (heroRenderMode === HERO_RENDER_MODES.IMAGE_EXPORT) {
    return registry.StaticExportComponent(currentHeroExportSnapshot || createHeroSnapshot());
  }
  return registry.InteractiveComponent();
}

function renderHeroInteractiveMedia() {
  const template = state.hero.template;
  const required = currentHeroTemplate().slots;
  const items = state.hero.media.slice(0, required);
  if (template === "orbit") {
    const duration = parseFloat(SPEED_MAP[state.hero.speed]);
    return `<div class="orbit-flow">${items.map((item, index) => {
      const delay = -1 * (duration / required) * index;
      return mediaCard(item, index, `--i:${index};--delay:${delay}s`);
    }).join("")}</div>`;
  }
  if (template === "film") {
    return `<div class="circular-gallery" tabindex="0" role="region" aria-label="Circular image gallery. Use left and right arrow keys to navigate.">
      ${items.map((item, index) => circularGalleryItem(item, index)).join("")}
    </div>`;
  }
  if (template === "totem") {
    return renderVerticalImageStack(items);
  }
  if (template === "photo-orbit") {
    return renderPhotoOrbit(items);
  }
  if (template === "scroll-morph") {
    return renderScrollMorph(items);
  }
  if (template === "image-trail") {
    return renderImageTrail(items);
  }
  if (template === "three-d-carousel") {
    return renderThreeDCarousel(items);
  }
  if (template === "stellar-gallery") {
    return renderStellarGallery(items);
  }
  if (template === "masonry-gallery") {
    return renderMasonryGallery(items);
  }
  if (template === "image-gallery") {
    return renderImageGallery(items);
  }
  if (template === "portfolio-gallery") {
    return renderPortfolioGallery(items);
  }
  if (template === "ticker-loop") {
    return renderTickerLoop(items);
  }
  return renderZoomParallax(items);
}

function renderHeroStaticMedia(snapshot = createHeroSnapshot()) {
  const previousSnapshot = currentHeroExportSnapshot;
  currentHeroExportSnapshot = snapshot;
  try {
    const template = snapshot.templateId;
    const items = snapshot.uploadedImages.slice(0, snapshot.staticConfig.slots);
    if (template === "totem") return renderVerticalImageStack(items, snapshot.activeIndex);
    if (template === "film") return `<div class="circular-gallery image-export-static" data-active-index="${snapshot.activeIndex}">
      ${items.map((item, index) => circularGalleryItem(item, index)).join("")}
    </div>`;
    if (template === "orbit") {
      const duration = parseFloat(SPEED_MAP[snapshot.styleSettings.speed] || SPEED_MAP.medium);
      return `<div class="orbit-flow image-export-static" data-active-index="${snapshot.activeIndex}">${items.map((item, index) => {
        const delay = -1 * (duration / Math.max(snapshot.staticConfig.slots, 1)) * index;
        return mediaCard(item, index, `--i:${index};--delay:${delay}s`);
      }).join("")}</div>`;
    }
    return renderHeroInteractiveMedia();
  } finally {
    currentHeroExportSnapshot = previousSnapshot;
  }
}

function createHeroSnapshot() {
  const template = currentHeroTemplate();
  const registry = heroTemplateRegistry[state.hero.template] || heroTemplateRegistry.orbit;
  const activeIndex = readCurrentHeroActiveIndex(template?.slots || registry.staticConfig.slots);
  return Object.freeze({
    mode: HERO_RENDER_MODES.IMAGE_EXPORT,
    templateId: state.hero.template,
    activeIndex,
    counterState: {
      current: activeIndex + 1,
      total: registry.staticConfig.slots,
      label: `${String(activeIndex + 1).padStart(2, "0")} / ${String(registry.staticConfig.slots).padStart(2, "0")}`
    },
    activeDot: activeIndex,
    backgroundState: normalizeHeroBackground(state.hero.background),
    uploadedImages: state.hero.media.slice(0, registry.staticConfig.slots).map((item) => item ? { ...item } : null),
    textContent: {
      aboutName: state.about.name,
      worksHeading: state.works.heading,
      contactThanks: state.contact.thanks
    },
    styleSettings: {
      ratio: state.hero.ratio,
      speed: state.hero.speed,
      background: normalizeHeroBackground(state.hero.background),
      animationPlaying: state.animationPlaying,
      styles: JSON.parse(JSON.stringify(state.styles || {}))
    },
    staticConfig: { ...registry.staticConfig }
  });
}

function readCurrentHeroActiveIndex(total = 1) {
  const safeTotal = Math.max(Number(total) || 1, 1);
  const preview = $("#sitePreview");
  const hero = preview?.querySelector(".hero-preview");
  const stack = hero?.querySelector(".vertical-image-stack");
  if (stack?.dataset.current != null) return clampIndex(Number(stack.dataset.current), safeTotal);
  if (state.hero.template === "totem") return clampIndex(state.hero.totemIndex || state.hero.activeIndex || 0, safeTotal);
  const strongest = hero ? $$(".media-card, .circular-gallery-item, .photo-orbit-card, .three-d-carousel-card, .stellar-card, .image-gallery-item, .portfolio-gallery-item, .ticker-loop-card, .zoom-parallax-layer", hero)
    .map((node, index) => {
      const style = getComputedStyle(node);
      const opacity = Number.parseFloat(style.opacity) || 0;
      const z = Number.parseFloat(style.zIndex);
      const rect = node.getBoundingClientRect();
      const area = Math.max(rect.width * rect.height, 1);
      return { index, score: (Number.isFinite(z) ? z : 0) * 10 + opacity * 100 + area / 10000 };
    })
    .sort((a, b) => b.score - a.score)[0] : null;
  if (strongest) return clampIndex(strongest.index, safeTotal);
  return clampIndex(state.hero.activeIndex || 0, safeTotal);
}

function clampIndex(index, total) {
  const safeTotal = Math.max(Number(total) || 1, 1);
  return ((Number(index) || 0) % safeTotal + safeTotal) % safeTotal;
}

function mediaImage(item, index, attrs = "") {
  const alt = escapeHTML(item.name || `作品 ${index + 1}`);
  const attrText = attrs ? ` ${attrs}` : "";
  return `<img src="${item.src}" alt="${alt}"${mediaCropClassAttr(item)}${attrText}${mediaCropStyleAttr(item)} />`;
}

function mediaCropClassAttr(item) {
  return item?.cropPosition ? ` class="media-crop-fit"` : "";
}

function mediaCropStyleAttr(item) {
  const crop = item?.cropPosition;
  if (!crop) return "";
  const x = Math.max(0, Math.min(100, Number(crop.x) || 50));
  const y = Math.max(0, Math.min(100, Number(crop.y) || 50));
  return ` style="object-position:${x}% ${y}%"`;
}

function mediaCard(item, index, style = "") {
  return `<div class="media-card" style="${style}">
    ${item ? mediaImage(item, index) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
  </div>`;
}

function circularGalleryItem(item, index) {
  const total = currentHeroTemplate().slots;
  const duration = parseFloat(SPEED_MAP[state.hero.speed]);
  const delay = -1 * (duration / total) * index;
  return `<div class="circular-gallery-item" style="--i:${index};--delay:${delay}s">
    <div class="circular-gallery-card">
      ${item ? mediaImage(item, index) : `<span class="placeholder-mark">Slot ${(index % currentHeroTemplate().slots) + 1}</span>`}
    </div>
  </div>`;
}

function renderPhotoOrbit(items) {
  const layouts = [
    { angle: 225, label: "THU" },
    { angle: 270, label: "MADRID" },
    { angle: 315, label: "0034" },
    { angle: 0, label: "north ave" },
    { angle: 45, label: "north ave" },
    { angle: 90, label: "Maple" },
    { angle: 135, label: "ULTIMATE" },
    { angle: 180, label: "2026" }
  ];
  return `<div class="photo-orbit" tabindex="0" role="region" aria-label="Photo Orbit gallery">
    <div class="photo-orbit-ring" aria-hidden="true"></div>
    <div class="photo-orbit-stage">
      ${items.map((item, index) => {
        const layout = layouts[index % layouts.length];
        const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
        return `<div class="photo-orbit-card ${item ? "has-media" : "is-placeholder"}" data-angle="${layout.angle}" style="--i:${index};">
          <div class="photo-orbit-surface">
            ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

function renderScrollMorph(items) {
  return `<div class="scroll-morph" tabindex="0" role="region" aria-label="Scroll Morph gallery">
    <div class="scroll-morph-stage">
      ${items.map((item, index) => {
        const scatterX = Math.sin(index * 2.17) * 760;
        const scatterY = Math.cos(index * 1.83) * 460;
        const scatterR = Math.sin(index * 1.31) * 90;
        const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
        return `<div class="scroll-morph-card ${item ? "has-media" : "is-placeholder"}" data-index="${index}" data-scatter-x="${scatterX.toFixed(2)}" data-scatter-y="${scatterY.toFixed(2)}" data-scatter-r="${scatterR.toFixed(2)}">
          <div class="scroll-morph-card-inner">
            <div class="scroll-morph-face scroll-morph-front">
              ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
              <span class="scroll-morph-index">${String(index + 1).padStart(2, "0")}</span>
            </div>
            <div class="scroll-morph-face scroll-morph-back">
              <span>View</span>
              <strong>Details</strong>
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

function renderImageTrail(items) {
  return `<div class="image-trail" tabindex="0" role="region" aria-label="Image Trail gallery">
    <div class="image-trail-layer" aria-hidden="true"></div>
    <div class="image-trail-sources" aria-hidden="true">
      ${items.map((item, index) => {
        const alt = item ? escapeHTML(item.name || `浣滃搧 ${index + 1}`) : `Slot ${index + 1}`;
        return `<div class="image-trail-source-card ${item ? "has-media" : "is-placeholder"}" data-index="${index}">
          ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

function renderThreeDCarousel(items) {
  return `<div class="three-d-carousel" tabindex="0" role="region" aria-label="3D Carousel gallery">
    <div class="three-d-carousel-viewport">
      <div class="three-d-carousel-ring">
        ${items.map((item, index) => {
          const alt = item ? escapeHTML(item.name || `浣滃搧 ${index + 1}`) : `Slot ${index + 1}`;
          return `<button class="three-d-carousel-card ${item ? "has-media" : "is-placeholder"}" data-index="${index}" type="button" aria-label="Open image ${index + 1}">
            <span class="three-d-carousel-surface">
              ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
            </span>
          </button>`;
        }).join("")}
      </div>
    </div>
    <div class="three-d-carousel-overlay" aria-hidden="true">
      <button class="three-d-carousel-close" type="button" aria-label="Close preview">×</button>
      <div class="three-d-carousel-expanded"></div>
    </div>
  </div>`;
}

function renderStellarGallery(items) {
  return `<div class="stellar-gallery" tabindex="0" role="region" aria-label="3D Stellar Card Gallery">
    <div class="stellar-starfield" aria-hidden="true"></div>
    <div class="stellar-shell">
      <div class="stellar-galaxy">
        ${items.map((item, index) => {
          const alt = item ? escapeHTML(item.name || `浣滃搧 ${index + 1}`) : `Slot ${index + 1}`;
          const ratio = item?.width && item?.height ? `${item.width} / ${item.height}` : "4 / 5";
          return `<button class="stellar-card ${item ? "has-media" : "is-placeholder"}" data-index="${index}" style="--stellar-media-ratio:${ratio};" type="button" aria-label="View stellar image ${index + 1}">
            <span class="stellar-card-surface">
              ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
            </span>
          </button>`;
        }).join("")}
      </div>
    </div>
    <div class="stellar-overlay" aria-hidden="true">
      <button class="stellar-close" type="button" aria-label="Close preview">×</button>
      <div class="stellar-expanded"></div>
    </div>
  </div>`;
}

function renderMasonryGallery(items) {
  const columns = [0, 1, 2].map((column) => {
    const cards = Array.from({ length: 10 }).map((_, row) => {
      const index = column * 10 + row;
      const item = items[index];
      const isPortrait = ((index * 5 + column * 3) % 8) < 4;
      const ratio = isPortrait ? "9 / 16" : "16 / 9";
      const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
      return `<div class="masonry-gallery-card ${item ? "has-media" : "is-placeholder"}" data-masonry-card style="--masonry-ratio:${ratio};--masonry-delay:${(row * 70 + column * 45)}ms;">
        ${item ? mediaImage(item, index, `draggable="false" loading="lazy"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
      </div>`;
    }).join("");
    return `<div class="masonry-gallery-column">${cards}</div>`;
  }).join("");

  return `<div class="masonry-gallery" tabindex="0" role="region" aria-label="Masonry image gallery">
    <div class="masonry-gallery-grid">${columns}</div>
  </div>`;
}

function renderImageGallery(items) {
  return `<div class="image-gallery" tabindex="0" role="region" aria-label="Image Gallery radial scroll">
    <ul class="image-gallery-wheel">
      ${items.map((item, index) => {
        const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
        return `<li class="image-gallery-item ${item ? "has-media" : "is-placeholder"}" data-index="${index}">
          <button class="image-gallery-card" type="button" aria-label="View image ${index + 1}">
            ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
          </button>
        </li>`;
      }).join("")}
    </ul>
  </div>`;
}

function renderPortfolioGallery(items) {
  return `<div class="portfolio-gallery" tabindex="0" role="region" aria-label="Portfolio Gallery">
    <div class="portfolio-gallery-track">
      ${items.map((item, index) => {
        const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
        return `<button class="portfolio-gallery-item ${item ? "has-media" : "is-placeholder"}" type="button" style="--pg-i:${index};--pg-z:${items.length - index};" aria-label="View portfolio image ${index + 1}">
          <span class="portfolio-gallery-card">
            ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
          </span>
        </button>`;
      }).join("")}
    </div>
  </div>`;
}

function renderTickerLoop(items) {
  const baseDuration = parseFloat(SPEED_MAP[state.hero.speed]) || 22;
  const rowDurations = [baseDuration * 1.45, baseDuration * 1.7, baseDuration * 1.28];
  const rowNames = [
    ["作品 01", "作品 02", "作品 03", "作品 04"],
    ["作品 05", "作品 06", "作品 07", "作品 08"],
    ["作品 09", "作品 10", "作品 11", "作品 12"]
  ];
  const cardModels = [
    { kind: "story", title: "Maple Street is a", meta: "lovely avenue with lush trees" },
    { kind: "dots", title: "", meta: "" },
    { kind: "landscape", title: "contributor", meta: "worldwide" },
    { kind: "mini-strip", title: "", meta: "" },
    { kind: "dark", title: "MADRID", meta: "BARCELONA|SEVILLA" },
    { kind: "split", title: "0034", meta: "-|0095" },
    { kind: "portrait", title: "", meta: "" },
    { kind: "frame", title: "", meta: "north ave" },
    { kind: "photo", title: "0316 AVE", meta: "" },
    { kind: "story", title: "Maple Street is a", meta: "lovely avenue with lush trees" },
    { kind: "split", title: "0034", meta: "-|0095" },
    { kind: "portrait", title: "", meta: "" }
  ];
  const renderTickerArt = (item, slotIndex, model) => {
    const alt = item ? escapeHTML(item.name || `浣滃搧 ${slotIndex + 1}`) : `Slot ${slotIndex + 1}`;
    const image = item
      ? mediaImage(item, slotIndex, `draggable="false"`)
      : `<span class="ticker-loop-soft-image" aria-hidden="true"></span>`;
    if (model.kind === "dark" || model.kind === "mini-strip") {
      const mini = [0, 1, 2].map((offset) => {
        const miniItem = items[(slotIndex + offset) % items.length];
        const miniAlt = miniItem ? escapeHTML(miniItem.name || `浣滃搧 ${slotIndex + offset + 1}`) : `Slot ${slotIndex + offset + 1}`;
        return `<span class="ticker-loop-mini">${miniItem ? mediaImage(miniItem, slotIndex + offset, `draggable="false"`) : ""}</span>`;
      }).join("");
      return `<div class="ticker-loop-minis">${mini}</div>`;
    }
    if (model.kind === "dots") {
      return `<div class="ticker-loop-dots" aria-hidden="true">${Array.from({ length: 15 }).map((_, index) => `<span style="--dot-i:${index}"></span>`).join("")}</div>`;
    }
    return `<div class="ticker-loop-art">${image}</div>`;
  };
  const rows = [0, 1, 2].map((row) => {
    const rowItems = items.slice(row * 4, row * 4 + 4);
    const loopItems = [...rowItems, ...rowItems, ...rowItems, ...rowItems];
    const cards = loopItems.map((item, loopIndex) => {
      const slotIndex = row * 4 + (loopIndex % 4);
      const model = { kind: "photo", title: "", meta: "" };
      const alt = item ? escapeHTML(item.name || `作品 ${slotIndex + 1}`) : `Slot ${slotIndex + 1}`;
      const label = rowNames[row][loopIndex % 4];
      return `<div class="ticker-loop-card ticker-card-${model.kind} ${item ? "has-media" : "is-placeholder"}">
        ${renderTickerArt(item, slotIndex, model)}
        <span class="ticker-loop-label">${escapeHTML(model.title)}</span>
        ${model.meta ? `<span class="ticker-loop-meta">${escapeHTML(model.meta).replace(/\|/g, "<br>")}</span>` : ""}
      </div>`;
    }).join("");
    return `<div class="ticker-loop-row" style="--ticker-duration:${rowDurations[row].toFixed(2)}s;--ticker-direction:${row === 1 ? "normal" : "reverse"}">${cards}</div>`;
  }).join("");

  return `<div class="ticker-loop" tabindex="0" role="region" aria-label="Ticker Loop gallery">
    <div class="ticker-loop-grid">${rows}</div>
  </div>`;
}

function renderZoomParallax(items) {
  const layouts = [
    { x: "42%", y: "5%", w: "25%", h: "32%", rotate: 0, z: 7 },
    { x: "19%", y: "18%", w: "18%", h: "47%", rotate: 0, z: 6 },
    { x: "42%", y: "40%", w: "20%", h: "25%", rotate: 0, z: 5 },
    { x: "64%", y: "40%", w: "21%", h: "25%", rotate: 0, z: 4 },
    { x: "16%", y: "68%", w: "30%", h: "22%", rotate: 0, z: 3 },
    { x: "48%", y: "68%", w: "18%", h: "24%", rotate: 0, z: 2 },
    { x: "71%", y: "68%", w: "14%", h: "19%", rotate: 0, z: 1 }
  ];
  return `<div class="zoom-parallax" tabindex="0" role="region" aria-label="Interactive mosaic gallery">
    <div class="zoom-parallax-spotlight"></div>
    <div class="zoom-parallax-stage">
      ${items.map((item, index) => {
        const layout = layouts[index % layouts.length];
        const alt = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
        return `<div class="zoom-parallax-layer" data-home-z="${layout.z}" data-zoom="1" style="--x:${layout.x};--y:${layout.y};--w:${layout.w};--h:${layout.h};--rotate:${layout.rotate}deg;--card-scale:1;--layer-opacity:1;z-index:${layout.z};">
          <div class="zoom-parallax-frame" tabindex="0" role="button" aria-label="Zoom image ${index + 1}">
            ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
            <div class="mosaic-zoom-controls" aria-hidden="true">
              <button type="button" data-mosaic-action="out">-</button>
              <button type="button" data-mosaic-action="reset">1x</button>
              <button type="button" data-mosaic-action="in">+</button>
            </div>
          </div>
        </div>`;
      }).join("")}
    </div>
  </div>`;
}

function renderVerticalImageStack(items, currentOverride = null) {
  const total = Math.max(items.length, 1);
  const currentSource = currentOverride == null ? (state.hero.totemIndex || state.hero.activeIndex || 0) : currentOverride;
  const current = ((currentSource || 0) % total + total) % total;
  return `<div class="vertical-image-stack" data-current="${current}" tabindex="0" role="region" aria-label="Vertical image stack">
    <div class="vertical-stack-glow"></div>
    <div class="vertical-stack-stage">
      ${items.map((item, index) => verticalStackCard(item, index, current, total)).join("")}
    </div>
    <div class="vertical-stack-counter" aria-hidden="true">
      <span class="vertical-stack-current">${String(current + 1).padStart(2, "0")}</span>
      <span class="vertical-stack-rule"></span>
      <span>${String(total).padStart(2, "0")}</span>
    </div>
    <div class="vertical-stack-dots" aria-label="Card Totem navigation">
      ${items.map((_, index) => `<button class="vertical-stack-dot ${index === current ? "is-active" : ""}" data-stack-index="${index}" aria-label="Go to image ${index + 1}"></button>`).join("")}
    </div>
    <div class="vertical-stack-hint" aria-hidden="true">
      <span class="stack-arrow stack-arrow-up"></span>
      <span>Scroll or drag</span>
      <span class="stack-arrow stack-arrow-down"></span>
    </div>
  </div>`;
}

function verticalStackCard(item, index, current, total) {
  const style = verticalStackStyle(index, current, total);
  const title = item ? escapeHTML(item.name || `作品 ${index + 1}`) : `Slot ${index + 1}`;
  return `<div class="vertical-stack-card ${index === current ? "is-current" : ""} ${item ? "has-media" : "is-placeholder"}" data-stack-card="${index}" style="--stack-y:${style.y}px;--stack-depth:${style.depth}px;--stack-scale:${style.scale};--stack-opacity:${style.opacity};--stack-rotate:${style.rotateX}deg;--stack-z:${style.zIndex};">
    <div class="vertical-stack-frame">
      <div class="vertical-stack-shine"></div>
      ${item ? mediaImage(item, index, `draggable="false"`) : `<span class="placeholder-mark">Slot ${index + 1}</span>`}
      <div class="vertical-stack-fade"></div>
    </div>
  </div>`;
}

function verticalStackStyle(index, current, total) {
  let diff = index - current;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  if (diff === 0) return { y: 0, depth: 0, scale: 1, opacity: 1, zIndex: 100, rotateX: 0 };
  if (diff === -1) return { y: -205, depth: 0, scale: 0.86, opacity: 0.42, zIndex: 12, rotateX: 0 };
  if (diff === -2) return { y: -320, depth: 0, scale: 0.74, opacity: 0.16, zIndex: 6, rotateX: 0 };
  if (diff === 1) return { y: 205, depth: 0, scale: 0.86, opacity: 0.42, zIndex: 12, rotateX: 0 };
  if (diff === 2) return { y: 320, depth: 0, scale: 0.74, opacity: 0.16, zIndex: 6, rotateX: 0 };
  return { y: diff > 0 ? 430 : -430, depth: 0, scale: 0.66, opacity: 0, zIndex: 0, rotateX: 0 };
}

function renderAboutSection() {
  const classes = `preview-section about-preview about-${state.about.layout}`;
  const skills = splitList(state.about.skills);
  const infoCards = [
    [aboutLabel("experience"), state.about.experience, "experience"],
    [aboutLabel("education"), state.about.education, "education"],
    [aboutLabel("awards"), state.about.awards, "awards"],
    [aboutLabel("clients"), state.about.clients, "clients"],
    [aboutLabel("services"), state.about.services, "services"],
    [aboutLabel("availability"), state.about.availability, "availability"]
  ];
  const portrait = `<div class="portrait about-portrait-upload ${state.about.portrait ? "has-media" : "is-empty"}" data-about-portrait-upload role="button" tabindex="0" title="上传或替换个人照片">${state.about.portrait ? `<img src="${state.about.portrait.src}" alt="${escapeHTML(state.about.name)}" />` : `<span class="portrait-upload-placeholder" aria-hidden="true"><span class="slot-empty-icon"><span class="slot-empty-sun"></span><span class="slot-empty-mountain"></span></span><span class="slot-add-label">添加图片</span></span>`}</div>`;
  const copy = `<div>
    <span class="hero-kicker">About</span>
    <h1${aboutInlineAttrs("name")}>${escapeHTML(state.about.name)}</h1>
    <p><strong${aboutInlineAttrs("title")}>${escapeHTML(state.about.title)}</strong></p>
    <p${aboutInlineAttrs("bio", true)}>${escapeHTML(state.about.bio)}</p>
    <div class="tags"${aboutInlineAttrs("skills", true)}>${skills.map((skill) => `<span class="tag">${escapeHTML(skill)}</span>`).join("")}</div>
  </div>`;
  const info = `<div class="info-grid">${infoCards.map(([title, body, key]) => `<div class="info-card"><strong${aboutInlineAttrs(`label:${key}`)}>${escapeHTML(title)}</strong><span${aboutInlineAttrs(key, true)}>${formatLines(body)}</span></div>`).join("")}</div>`;
  if (state.about.layout === "split") {
    const personalItems = [
      [aboutFieldLabel("title"), state.about.title, "title"],
      [aboutFieldLabel("availability"), state.about.availability, "availability"],
      [aboutFieldLabel("services"), state.about.services, "services"],
      [aboutFieldLabel("socials"), state.about.socials, "socials"]
    ];
    return `<section class="${classes}" style="${styleVars("about")}">
      <div class="preview-inner about-resume-board">
        <aside class="about-resume-side">
          <div class="about-resume-title">
            <span>About me</span>
            <strong>关于我</strong>
          </div>
          ${portrait}
          <div class="about-resume-name">
            <strong${aboutInlineAttrs("name")}>${escapeHTML(state.about.name)}</strong>
            <span${aboutInlineAttrs("title")}>${escapeHTML(state.about.title)}</span>
          </div>
        </aside>
        <div class="about-resume-main">
          <section class="about-resume-section">
            <header><strong${aboutInlineAttrs("label:personal")}>${escapeHTML(aboutLabel("personal"))}</strong><span${aboutInlineAttrs("sublabel:personal")}>${escapeHTML(aboutSubLabel("personal"))}</span></header>
            <p class="about-resume-intro"${aboutInlineAttrs("bio", true)}>${escapeHTML(state.about.bio)}</p>
            <div class="about-resume-fields">
              ${personalItems.map(([label, value, key]) => `<p><span${aboutInlineAttrs(`fieldlabel:${key}`)}>${escapeHTML(label)}</span><b${aboutInlineAttrs(key, true)}>${escapeHTML(value)}</b></p>`).join("")}
            </div>
          </section>
          <section class="about-resume-section">
            <header><strong${aboutInlineAttrs("label:education")}>${escapeHTML(aboutLabel("education"))}</strong><span${aboutInlineAttrs("sublabel:education")}>${escapeHTML(aboutSubLabel("education"))}</span></header>
            <div class="about-resume-lines"${aboutInlineAttrs("education", true)}>${formatLines(state.about.education)}</div>
          </section>
          <section class="about-resume-section about-resume-work">
            <header><strong${aboutInlineAttrs("label:experience")}>${escapeHTML(aboutLabel("experience"))}</strong><span${aboutInlineAttrs("sublabel:experience")}>${escapeHTML(aboutSubLabel("experience"))}</span></header>
            <div class="about-resume-timeline"${aboutInlineAttrs("experience", true)}>${formatLines(state.about.experience)}</div>
          </section>
        </div>
      </div>
    </section>`;
  }
  if (state.about.layout === "timeline") {
    const timelineCopy = `<div class="about-timeline-copy">
      <div class="about-timeline-photo">${portrait}</div>
      ${copy}
    </div>`;
    return `<section class="${classes}" style="${styleVars("about")}"><div class="preview-inner about-grid">${timelineCopy}<div class="timeline-list">${infoCards.map(([title, body, key]) => `<div class="timeline-item"><strong${aboutInlineAttrs(`label:${key}`)}>${escapeHTML(title)}</strong><span${aboutInlineAttrs(key, true)}>${formatLines(body)}</span></div>`).join("")}</div></div></section>`;
  }
  if (state.about.layout === "hello-card") {
    return `<section class="${classes}" style="${styleVars("about")}">
      <div class="preview-inner about-hello-board">
        <div class="about-hello-top">
          <div class="about-hello-photo">${portrait}</div>
          <div class="about-hello-intro">
            <span class="about-hello-role"${aboutInlineAttrs("title")}>${escapeHTML(state.about.title)}</span>
            <h1${aboutInlineAttrs("name")}>${escapeHTML(state.about.name)}</h1>
            <p class="about-hello-bio"${aboutInlineAttrs("bio", true)}>${escapeHTML(state.about.bio)}</p>
            <div class="about-hello-pills">
              <span${aboutInlineAttrs("socials", true)}>${escapeHTML(state.about.socials)}</span>
              <span${aboutInlineAttrs("availability", true)}>${escapeHTML(state.about.availability)}</span>
            </div>
          </div>
        </div>
        <div class="about-hello-grid">
          <section class="about-hello-panel about-hello-education">
            <strong${aboutInlineAttrs("label:education")}>${escapeHTML(aboutLabel("education"))}</strong>
            <span${aboutInlineAttrs("education", true)}>${formatLines(state.about.education)}</span>
          </section>
          <section class="about-hello-panel about-hello-software">
            <strong${aboutInlineAttrs("label:services")}>${escapeHTML(aboutLabel("services"))}</strong>
            <span${aboutInlineAttrs("services", true)}>${formatLines(state.about.services)}</span>
          </section>
          <section class="about-hello-panel about-hello-experience">
            <strong${aboutInlineAttrs("label:experience")}>${escapeHTML(aboutLabel("experience"))}</strong>
            <span${aboutInlineAttrs("experience", true)}>${formatLines(state.about.experience)}</span>
          </section>
          <section class="about-hello-panel about-hello-skills">
            <strong${aboutInlineAttrs("label:skills")}>${escapeHTML(aboutLabel("skills"))}</strong>
            <div class="about-hello-skill-list"${aboutInlineAttrs("skills", true)}>${skills.map((skill) => `<span class="tag">${escapeHTML(skill)}</span>`).join("")}</div>
          </section>
          <section class="about-hello-panel about-hello-language">
            <strong${aboutInlineAttrs("label:clients")}>${escapeHTML(aboutLabel("clients"))}</strong>
            <span${aboutInlineAttrs("clients", true)}>${formatLines(state.about.clients)}</span>
          </section>
        </div>
      </div>
    </section>`;
  }
  if (state.about.layout === "cv-sheet") {
    return `<section class="${classes}" style="${styleVars("about")}">
      <div class="preview-inner about-cv-sheet">
        <div class="about-cv-top">
          <div class="about-cv-intro">
            <h1${aboutInlineAttrs("name")}>${escapeHTML(state.about.name)}</h1>
            <strong${aboutInlineAttrs("title")}>${escapeHTML(state.about.title)}</strong>
            <p${aboutInlineAttrs("bio", true)}>${escapeHTML(state.about.bio)}</p>
            ${renderSoftwareSkillsSection()}
          </div>
          <div class="about-cv-photo">${portrait}</div>
        </div>
        <div class="about-cv-body">
          <aside class="about-cv-side">
            <section class="about-cv-block about-cv-info">
              <h2${aboutInlineAttrs("label:personal")}>${escapeHTML(aboutLabel("personal"))}</h2>
              <dl>
                <div><dt${aboutInlineAttrs("fieldlabel:title")}>${escapeHTML(aboutFieldLabel("title"))}</dt><dd${aboutInlineAttrs("title")}>${escapeHTML(state.about.title)}</dd></div>
                <div><dt${aboutInlineAttrs("fieldlabel:availability")}>${escapeHTML(aboutFieldLabel("availability"))}</dt><dd${aboutInlineAttrs("availability", true)}>${escapeHTML(state.about.availability)}</dd></div>
                <div><dt${aboutInlineAttrs("label:skills")}>${escapeHTML(aboutLabel("skills"))}</dt><dd${aboutInlineAttrs("skills", true)}>${escapeHTML(state.about.skills)}</dd></div>
              </dl>
            </section>
          </aside>
          <main class="about-cv-main">
            <section class="about-cv-block about-cv-timeline">
              <h2${aboutInlineAttrs("label:experience")}>${escapeHTML(aboutLabel("experience"))}</h2>
              <div${aboutInlineAttrs("experience", true)}>${formatLines(state.about.experience)}</div>
            </section>
            <section class="about-cv-block about-cv-timeline">
              <h2${aboutInlineAttrs("label:education")}>${escapeHTML(aboutLabel("education"))}</h2>
              <div${aboutInlineAttrs("education", true)}>${formatLines(state.about.education)}</div>
            </section>
          </main>
        </div>
      </div>
    </section>`;
  }
  return `<section class="${classes}" style="${styleVars("about")}"><div class="preview-inner">${copy}${info}<p${aboutInlineAttrs("socials", true)}>${escapeHTML(state.about.socials)}</p></div></section>`;
}

function aboutInlineAttrs(key, multiline = false) {
  if (state.mode !== "editor" || state.screen !== "about") return "";
  return ` contenteditable="true" spellcheck="false" data-about-inline="${key}" data-about-multiline="${multiline ? "true" : "false"}"`;
}

function aboutLabel(key) {
  return state.about.labels?.[key] || ABOUT_LABEL_DEFAULTS[key] || key;
}

function aboutSubLabel(key) {
  return state.about.subLabels?.[key] || ABOUT_SUBLABEL_DEFAULTS[key] || "";
}

function aboutFieldLabel(key) {
  return state.about.fieldLabels?.[key] || ABOUT_FIELD_LABEL_DEFAULTS[key] || key;
}

function renderSoftwareSkillsSection() {
  const skills = normalizedSoftwareSkills().filter((skill) => skill.selected);
  const editing = isSoftwareSkillsEditing();
  return `<section class="about-cv-skill-strip" data-software-skills>
    <div class="about-cv-skill-head">
      <h2${aboutInlineAttrs("label:software")}>Software Skills / ${escapeHTML(aboutLabel("software"))}</h2>
      ${editing ? `<button class="about-cv-skill-edit" type="button" data-open-skill-editor>编辑技能</button>` : ""}
    </div>
    <div class="about-cv-skill-grid" data-skill-grid>
      ${skills.map((skill, index) => renderSoftwareSkillCard(skill, index, editing)).join("")}
    </div>
  </section>`;
}

function renderSoftwareSkillCard(skill, index, editing = false) {
  const level = clampNumber(skill.level, 0, 100);
  const icon = skill.icon
    ? `<img src="${escapeAttr(skill.icon)}" alt="" draggable="false" />`
    : `<span>${escapeHTML(skill.shortName || skill.name.slice(0, 2))}</span>`;
  return `<article class="software-skill-card" data-skill-id="${escapeAttr(skill.id)}" draggable="${editing ? "true" : "false"}" style="--skill-level:${level}%;--skill-delay:${index * 95}ms">
    ${editing ? `<div class="skill-card-tools"><button type="button" data-skill-card-edit="${escapeAttr(skill.id)}" title="编辑">✎</button><button type="button" data-skill-card-delete="${escapeAttr(skill.id)}" title="隐藏">×</button><span class="skill-drag-handle" title="拖拽排序">⋮⋮</span></div>` : ""}
    <div class="software-skill-icon">${icon}</div>
    <strong>${escapeHTML(skill.shortName || skill.name)}</strong>
    <small>${escapeHTML(skill.levelText || "")}${state.about.showSkillPercent ? ` · ${level}%` : ""}</small>
    <div class="software-skill-bar" aria-hidden="true"><span></span></div>
  </article>`;
}

function isSoftwareSkillsEditing() {
  return renderContext === "editor" && state.mode === "editor" && state.screen === "about" && state.about.layout === "cv-sheet";
}

function normalizedSoftwareSkills() {
  state.about.softwareSkills = normalizeSoftwareSkills(state.about.softwareSkills);
  return state.about.softwareSkills;
}

function normalizeSoftwareSkills(skills) {
  const incoming = Array.isArray(skills) ? skills : [];
  const byId = new Map(incoming.map((skill) => [skill.id, skill]));
  const presetIds = new Set(SOFTWARE_SKILL_PRESETS.map((skill) => skill.id));
  const mergedPresets = SOFTWARE_SKILL_PRESETS.map((preset) => normalizeSoftwareSkill({ ...preset, ...(byId.get(preset.id) || {}) }, preset));
  const custom = incoming
    .filter((skill) => skill?.custom || (skill?.id && !presetIds.has(skill.id)))
    .map((skill) => normalizeSoftwareSkill(skill, null));
  const ordered = incoming
    .map((skill) => [...mergedPresets, ...custom].find((item) => item.id === skill?.id))
    .filter(Boolean);
  const missing = [...mergedPresets, ...custom].filter((skill) => !ordered.some((item) => item.id === skill.id));
  return [...ordered, ...missing];
}

function normalizeSoftwareSkill(skill, preset) {
  const base = preset || {};
  return {
    id: String(skill?.id || base.id || `custom-${Date.now()}`),
    name: String(skill?.name || base.name || "Custom Skill"),
    shortName: String(skill?.shortName || base.shortName || skill?.name || "Sk").slice(0, 6),
    icon: skill?.icon || base.icon || "",
    level: clampNumber(skill?.level ?? base.level ?? 70, 0, 100),
    levelText: String(skill?.levelText || base.levelText || "熟练"),
    selected: skill?.selected !== false,
    custom: Boolean(skill?.custom || base.custom)
  };
}

function makeDefaultSoftwareSkills() {
  return SOFTWARE_SKILL_PRESETS.map((skill) => normalizeSoftwareSkill(skill, skill));
}

function loadSoftwareSkills() {
  try {
    const raw = window.localStorage?.getItem(SOFTWARE_SKILLS_STORAGE_KEY);
    if (!raw) return makeDefaultSoftwareSkills();
    return normalizeSoftwareSkills(JSON.parse(raw));
  } catch (error) {
    return makeDefaultSoftwareSkills();
  }
}

function saveSoftwareSkills() {
  try {
    window.localStorage?.setItem(SOFTWARE_SKILLS_STORAGE_KEY, JSON.stringify(normalizedSoftwareSkills()));
    window.localStorage?.setItem(SOFTWARE_SHOW_PERCENT_STORAGE_KEY, state.about.showSkillPercent ? "true" : "false");
  } catch (error) {
    // localStorage may be unavailable in restricted preview contexts.
  }
}

function loadSoftwareSkillPercentSetting() {
  try {
    const raw = window.localStorage?.getItem(SOFTWARE_SHOW_PERCENT_STORAGE_KEY);
    return raw == null ? true : raw === "true";
  } catch (error) {
    return true;
  }
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.max(min, Math.min(max, number));
}

function renderWorksSection() {
  const projects = visibleProjects();
  const categories = ["all", ...new Set(state.works.projects.filter((item) => !item.hidden).map((item) => item.category))];
  return `<section class="preview-section works-preview" style="${styleVars("works")}">
    <div class="preview-inner">
      <div class="works-head">
        <h1${worksInlineAttrs("heading")}>${escapeHTML(worksHeading())}</h1>
        <div class="category-filter">${categories.map((category) => `<button class="filter-button ${state.works.filter === category ? "is-active" : ""}" data-filter="${escapeHTML(category)}"><span${worksFilterInlineAttrs(category)}>${category === "all" ? escapeHTML(worksAllLabel()) : escapeHTML(category)}</span></button>`).join("")}</div>
      </div>
      <div class="works-grid layout-${state.works.layout}">
        ${state.works.layout === "image-reveal" ? renderImageRevealWorks(projects) : projects.map(renderWorkCard).join("")}
      </div>
    </div>
  </section>`;
}

function renderImageRevealWorks(projects) {
  const groups = [];
  for (let index = 0; index < projects.length; index += 3) {
    groups.push(projects.slice(index, index + 3));
  }
  return groups.map((group) => `<div class="image-reveal-group count-${group.length}">${group.map(renderWorkCard).join("")}</div>`).join("");
}

function slugifyProjectTitle(value) {
  const raw = String(value || "project").trim().toLowerCase();
  const ascii = raw
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return ascii || `project-${Date.now()}`;
}

function projectSlug(project) {
  if (!project.slug) project.slug = slugifyProjectTitle(project.title || project.id);
  return project.slug;
}

function roleForProjectCategory(category = "") {
  const key = String(category).toLowerCase();
  if (key.includes("motion")) return "Motion Design / Art Direction";
  if (key.includes("digital")) return "UI / UX Design";
  if (key.includes("editorial")) return "Editorial Design / Web Experience";
  if (key.includes("product")) return "Product Storytelling / Art Direction";
  return "Art Direction / Visual Design";
}

function servicesForProjectCategory(category = "") {
  const key = String(category).toLowerCase();
  if (key.includes("motion")) return ["Motion Design", "Visual System", "Launch Assets"];
  if (key.includes("digital")) return ["UX Design", "Interface Design", "Content Structure"];
  if (key.includes("editorial")) return ["Editorial System", "Typography", "Web Design"];
  if (key.includes("product")) return ["Creative Direction", "Product Story", "Landing Page"];
  return ["Brand Strategy", "Visual Identity", "Web Design"];
}

function projectDetailInfo(project) {
  const services = Array.isArray(project.services)
    ? project.services
    : servicesForProjectCategory(project.category);
  return {
    slug: projectSlug(project),
    id: project.number || project.id || "01",
    title: project.title || "Untitled Project",
    category: project.category || "Project",
    description: project.desc || project.description || "项目简介",
    year: project.year || "2026",
    client: project.client || `${project.title || "Project"} Studio`,
    role: project.role || roleForProjectCategory(project.category),
    services,
    infoLabels: {
      year: project.infoLabels?.year || "YEAR",
      client: project.infoLabels?.client || "CLIENT",
      role: project.infoLabels?.role || "ROLE",
      services: project.infoLabels?.services || "SERVICES"
    },
    overviewTitle: project.overviewTitle || "用清晰的视觉系统，把项目的气质、结构与传播场景完整呈现。",
    overviewBody: project.overviewBody || `${project.desc || project.description || "项目简介"} 本页可作为作品详情的二级页面，用于展示项目背景、设计策略、过程图和最终视觉。`,
    cover: project.cover?.src || project.cover?.thumb || "",
    thumb: project.cover?.thumb || project.cover?.src || ""
  };
}

function findProjectBySlug(slug) {
  const normalized = decodeURIComponent(String(slug || "")).trim();
  return state.works.projects.find((project) => projectSlug(project) === normalized);
}

function currentProjectRouteSlug() {
  const match = window.location.hash.match(/^#\/works\/([^/?#]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

function openProjectRoute(slug) {
  const next = `#/works/${encodeURIComponent(slug)}`;
  if (window.location.hash === next) {
    renderPreview();
    return;
  }
  window.location.hash = next;
}

function clearProjectRouteHash() {
  if (!currentProjectRouteSlug()) return;
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

function projectRouteMapHTML() {
  const routes = {};
  state.works.projects.forEach((project) => {
    const slug = projectSlug(project);
    routes[slug] = renderProjectDetailRoute(slug, { forPublished: true });
  });
  return JSON.stringify(routes).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
}

function renderProjectDetailRoute(slug) {
  const project = findProjectBySlug(slug);
  if (!project) {
    return `<section class="project-detail-page project-not-found-page">
      <a class="project-back-link" href="#works" data-project-back>返回作品目录</a>
      <h1>未找到该作品</h1>
    </section>`;
  }
  const projects = state.works.projects.filter((item) => !item.hidden);
  const index = Math.max(0, projects.findIndex((item) => item.id === project.id));
  const previous = projects[(index - 1 + projects.length) % projects.length] || project;
  const next = projects[(index + 1) % projects.length] || project;
  const detail = projectDetailInfo(project);
  const gallery = projectDetailGallery(project, detail);
  return `<section class="project-detail-page preview-section" style="${styleVars("works")}">
    <div class="project-detail-shell">
      <nav class="project-detail-nav">
        <a class="project-back-link" href="#works" data-project-back>← 返回作品目录</a>
        <span><span${projectDetailInlineAttrs(project.id, "number")}>${escapeHTML(detail.id)}</span> · <span${projectDetailInlineAttrs(project.id, "category")}>${escapeHTML(detail.category)}</span></span>
      </nav>
      <header class="project-detail-hero">
        <div class="project-detail-heading">
          <p class="project-eyebrow"><span${projectDetailInlineAttrs(project.id, "number")}>${escapeHTML(detail.id)}</span> · <span${projectDetailInlineAttrs(project.id, "category")}>${escapeHTML(detail.category)}</span></p>
          <h1${projectDetailInlineAttrs(project.id, "title")}>${escapeHTML(detail.title)}</h1>
          <p${projectDetailInlineAttrs(project.id, "desc", true)}>${escapeHTML(detail.description)}</p>
        </div>
        <dl class="project-information">
          <div><dt${projectDetailInlineAttrs(project.id, "infoLabel:year")}>${escapeHTML(detail.infoLabels.year)}</dt><dd${projectDetailInlineAttrs(project.id, "year")}>${escapeHTML(detail.year)}</dd></div>
          <div><dt${projectDetailInlineAttrs(project.id, "infoLabel:client")}>${escapeHTML(detail.infoLabels.client)}</dt><dd${projectDetailInlineAttrs(project.id, "client")}>${escapeHTML(detail.client)}</dd></div>
          <div><dt${projectDetailInlineAttrs(project.id, "infoLabel:role")}>${escapeHTML(detail.infoLabels.role)}</dt><dd${projectDetailInlineAttrs(project.id, "role")}>${escapeHTML(detail.role)}</dd></div>
          <div><dt${projectDetailInlineAttrs(project.id, "infoLabel:services")}>${escapeHTML(detail.infoLabels.services)}</dt><dd${projectDetailInlineAttrs(project.id, "services", true)}>${escapeHTML(detail.services.join(" / "))}</dd></div>
        </dl>
      </header>
      <div class="project-detail-visual" ${projectDetailImageAttrs(project.id, "cover")}>
        ${detail.cover ? `<img src="${detail.cover}" alt="${escapeAttr(detail.title)} 主视觉">` : renderProjectImagePlaceholder("添加图片")}
      </div>
      <section class="project-overview">
        <span class="section-label">Project Overview</span>
        <h2${projectDetailInlineAttrs(project.id, "overviewTitle", true)}>${escapeHTML(detail.overviewTitle)}</h2>
        <p${projectDetailInlineAttrs(project.id, "overviewBody", true)}>${escapeHTML(detail.overviewBody)}</p>
      </section>
      <section class="project-gallery">
        ${gallery.map((image, imageIndex) => `<figure class="gallery-item ${imageIndex === 0 ? "gallery-item-wide" : ""}" ${projectDetailImageAttrs(project.id, imageIndex)}>
          ${image ? `<img src="${image}" alt="${escapeAttr(detail.title)} 详情图片 ${imageIndex + 1}" loading="lazy">` : renderProjectImagePlaceholder("添加图片")}
        </figure>`).join("")}
      </section>
      <footer class="project-navigation">
        <a href="#/works/${encodeURIComponent(projectSlug(previous))}" class="project-navigation-item"><span>Previous Project</span><strong>${escapeHTML(previous.title)}</strong></a>
        <a href="#/works/${encodeURIComponent(projectSlug(next))}" class="project-navigation-item project-navigation-next"><span>Next Project</span><strong>${escapeHTML(next.title)}</strong></a>
      </footer>
    </div>
  </section>`;
}

function projectDetailGallery(project, detail) {
  const images = [];
  if (Array.isArray(project.detailImages)) images.push(...project.detailImages.map(mediaSource));
  if (Array.isArray(project.gallery)) images.push(...project.gallery.map(mediaSource));
  while (images.length < 3) images.push("");
  return images.slice(0, 6);
}

function renderProjectImagePlaceholder(label = "添加图片") {
  return `<span class="project-image-placeholder" aria-hidden="true">
    <span class="slot-empty-icon"><span class="slot-empty-sun"></span><span class="slot-empty-mountain"></span></span>
    <span class="slot-add-label">${escapeHTML(label)}</span>
  </span>`;
}

function mediaSource(media) {
  if (!media) return "";
  if (typeof media === "string") return media;
  return media.src || media.thumb || "";
}

function isProjectDetailEditing() {
  return renderContext === "editor" && state.mode === "editor" && Boolean(currentProjectRouteSlug());
}

function projectDetailInlineAttrs(projectId, field, multiline = false) {
  if (!isProjectDetailEditing()) return "";
  return ` contenteditable="true" spellcheck="false" data-project-detail-inline="${field}" data-project-id="${escapeAttr(projectId)}" data-project-detail-multiline="${multiline ? "true" : "false"}"`;
}

function projectDetailImageAttrs(projectId, imageIndex) {
  if (!isProjectDetailEditing()) return "";
  return ` role="button" tabindex="0" data-project-detail-upload="${escapeAttr(projectId)}" data-project-detail-image="${escapeAttr(imageIndex)}" title="上传并裁切图片"`;
}

function wireProjectDetailInteractions(root) {
  $$("[data-project-back]", root).forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      clearProjectRouteHash();
      state.screen = "works";
      renderAll();
    });
  });
  $$("[data-project-detail-inline]", root).forEach((item) => {
    const updateInlineState = () => {
      const project = state.works.projects.find((entry) => entry.id === item.dataset.projectId);
      if (!project) return;
      const field = item.dataset.projectDetailInline;
      const multiline = item.dataset.projectDetailMultiline === "true";
      const value = inlineTextValue(item, multiline, field);
      if (field.startsWith("infoLabel:")) {
        const labelKey = field.split(":")[1];
        if (!project.infoLabels) project.infoLabels = {};
        project.infoLabels[labelKey] = value;
      } else if (field === "services") {
        project.services = value.split(/[\/,，\n]+/).map((entry) => entry.trim()).filter(Boolean);
      } else {
        project[field] = value;
        if (field === "desc") project.description = value;
      }
    };
    item.addEventListener("mousedown", (event) => event.stopPropagation());
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    item.addEventListener("input", updateInlineState);
    item.addEventListener("blur", () => {
      updateInlineState();
      renderAll();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        renderPreview();
        return;
      }
      if (event.key === "Enter" && item.dataset.projectDetailMultiline !== "true") {
        event.preventDefault();
        item.blur();
      }
    });
    item.addEventListener("paste", (event) => {
      event.preventDefault();
      const text = event.clipboardData?.getData("text/plain") || "";
      document.execCommand?.("insertText", false, text);
    });
  });
  $$("[data-project-detail-upload]", root).forEach((target) => {
    const uploadDetailImage = () => {
      const project = state.works.projects.find((entry) => entry.id === target.dataset.projectDetailUpload);
      if (!project) return;
      const rawIndex = target.dataset.projectDetailImage;
      const imageIndex = rawIndex === "cover" ? "cover" : Number(rawIndex);
      pickImage((media) => openProjectDetailImageCrop(project, imageIndex, media));
    };
    target.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      uploadDetailImage();
    });
    target.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      uploadDetailImage();
    });
  });
}

function initProjectDetailImageReveal(root = document) {
  const items = $$(".project-detail-visual, .project-gallery .gallery-item", root);
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
  items.forEach((item) => observer.observe(item));
}

function visibleProjects() {
  return [...state.works.projects]
    .filter((project) => !project.hidden)
    .filter((project) => state.works.filter === "all" || project.category === state.works.filter);
}

function renderWorkCard(project) {
  const slug = projectSlug(project);
  return `<article class="work-card ${state.expandedProjectId === project.id ? "is-expanded" : ""}" data-project-id="${project.id}" data-project-slug="${escapeAttr(slug)}" role="link" tabindex="0" aria-label="查看作品 ${escapeAttr(project.title)}">
    <button class="work-cover ${project.cover ? "has-media" : "is-empty"}" style="--crop:${project.crop}" type="button"${workCoverUploadAttrs(project.id)}>${renderWorkCover(project)}</button>
    <div class="work-info">
      <small><span${worksProjectInlineAttrs(project.id, "number")}>${escapeHTML(project.number)}</span><span class="work-meta-separator"> · </span><span${worksProjectInlineAttrs(project.id, "category")}>${escapeHTML(project.category)}</span></small>
      <h3${worksProjectInlineAttrs(project.id, "title")}>${escapeHTML(project.title)}</h3>
      <p class="work-detail"${worksProjectInlineAttrs(project.id, "desc", true)}>${escapeHTML(project.desc)}</p>
    </div>
  </article>`;
}

function renderWorkCover(project) {
  if (project.cover) {
    return `<img src="${project.cover.src}" alt="${escapeHTML(project.title)}"${mediaCropClassAttr(project.cover)}${mediaCropStyleAttr(project.cover)} />`;
  }
  return `<span class="work-cover-placeholder" aria-hidden="true">
    <span class="slot-empty-icon"><span class="slot-empty-sun"></span><span class="slot-empty-mountain"></span></span>
    <span class="slot-add-label">添加图片</span>
  </span>`;
}

function workCoverUploadAttrs(projectId) {
  if (state.mode !== "editor" || state.screen !== "works") return "";
  return ` data-work-cover-upload="${escapeAttr(projectId)}" title="上传并裁切作品封面"`;
}

function worksInlineAttrs(key, multiline = false) {
  if (state.mode !== "editor" || state.screen !== "works") return "";
  return ` contenteditable="true" spellcheck="false" data-works-inline="${key}" data-works-multiline="${multiline ? "true" : "false"}"`;
}

function worksProjectInlineAttrs(projectId, field, multiline = false) {
  if (state.mode !== "editor" || state.screen !== "works") return "";
  return ` contenteditable="true" spellcheck="false" data-works-inline="project" data-project-id="${escapeAttr(projectId)}" data-work-inline-field="${field}" data-works-multiline="${multiline ? "true" : "false"}"`;
}

function worksFilterInlineAttrs(category) {
  if (state.mode !== "editor" || state.screen !== "works") return "";
  return ` contenteditable="true" spellcheck="false" data-works-filter-inline="${category === "all" ? "all" : "category"}" data-filter-category="${escapeAttr(category)}" data-works-multiline="false"`;
}

function worksHeading() {
  return state.works.heading || "Selected Works";
}

function worksAllLabel() {
  return state.works.allLabel || "全部";
}

function renderContactSection() {
  const c = state.contact;
  const v = c.visibility;
  const layout = c.layout || "classic";
  const contactItems = renderContactItems(c, v);
  const contactChips = layout === "poster" ? "" : renderContactChips(c, v);
  const qr = v.qr ? renderContactQr(c) : "";
  const posterQr = v.qr ? renderContactQr(c, "上传二维码后显示") : "";
  if (layout === "poster") {
    const posterTitle = isContactCanvasEditing()
      ? `<h1${contactInlineAttrs("thanks")}>${escapeHTML(c.thanks)}</h1>`
      : renderSplitTextMarkup("h1", c.thanks, "contact-split-title split-text split-text-large", { delay: 56, y: 44 });
    return `<section class="preview-section contact-preview contact-poster" style="${styleVars("contact")}">
      <div class="preview-inner contact-poster-board">
        <div class="contact-poster-copy">
          <span class="hero-kicker"${contactInlineAttrs("sectionLabel")}>${escapeHTML(contactText("sectionLabel", "Contact"))}</span>
          ${posterTitle}
          <p${contactInlineAttrs("invite", true)}>${escapeHTML(c.invite)}</p>
        </div>
        ${posterQr ? `<div class="contact-poster-qr">${posterQr}</div>` : ""}
        <div class="contact-poster-details">
          ${v.phone ? `<div class="contact-poster-detail"><small>电话</small><strong${contactInlineAttrs("phone")}>${escapeHTML(c.phone)}</strong></div>` : ""}
          ${v.wechat ? `<div class="contact-poster-detail"><small>微信</small><strong${contactInlineAttrs("wechat")}>${escapeHTML(c.wechat)}</strong></div>` : ""}
          ${v.email ? `<div class="contact-poster-detail"><small>邮箱</small><strong${contactInlineAttrs("email")}>${escapeHTML(c.email)}</strong></div>` : ""}
        </div>
        ${v.socials ? `<div class="contact-poster-socials"${contactInlineAttrs("socials")}>${splitList(c.socials).map((item) => `<span class="link-pill">${escapeHTML(item)}</span>`).join("")}</div>` : ""}
      </div>
    </section>`;
  }
  if (layout === "editorial") {
    const editorialThanks = isContactCanvasEditing()
      ? `<span${contactInlineAttrs("thanks")}>${escapeHTML(c.thanks)}</span>`
      : renderSplitTextMarkup("span", c.thanks, "contact-split-title split-text split-text-large", { delay: 58, y: 44 });
    const editorialEnglish = isContactCanvasEditing()
      ? `<strong${contactInlineAttrs("thanksEnglish")}>${escapeHTML(contactText("thanksEnglish", "THANK YOU"))}</strong>`
      : renderSplitTextMarkup("strong", contactText("thanksEnglish", "THANK YOU"), "contact-split-english split-text split-text-xl", { delay: 52, y: 56 });
    return `<section class="preview-section contact-preview contact-editorial" style="${styleVars("contact")}">
      <div class="preview-inner contact-editorial-board">
        <div class="contact-editorial-top"><span${contactInlineAttrs("portfolioLabel")}>${escapeHTML(contactText("portfolioLabel", "Designer Portfolio"))}</span><span${contactInlineAttrs("portfolioYear")}>${escapeHTML(contactText("portfolioYear", "2026"))}</span></div>
        <div class="contact-editorial-title">
          ${editorialThanks}
          ${editorialEnglish}
        </div>
        <div class="contact-editorial-lower">
          <div class="contact-editorial-copy">
            <p${contactInlineAttrs("invite", true)}>${escapeHTML(c.invite)}</p>
            <div class="contact-editorial-info">${contactItems}</div>
          </div>
          ${qr ? `<div class="contact-editorial-qr">${qr}</div>` : ""}
        </div>
      </div>
    </section>`;
  }
  if (layout === "signature") {
    const signatureIntro = `${c.thanks} ${c.invite}`.trim();
    const signatureIntroMarkup = isContactCanvasEditing()
      ? `<p><strong${contactInlineAttrs("thanks")}>${escapeHTML(c.thanks)}</strong> <span${contactInlineAttrs("invite", true)}>${escapeHTML(c.invite)}</span></p>`
      : renderBlurTextMarkup("p", signatureIntro, "contact-signature-intro blur-text blur-text-small", { animateBy: "letters", direction: "top", delay: 18 });
    const signatureTitleMarkup = isContactCanvasEditing()
      ? `<h1${contactInlineAttrs("thanksEnglish")}>${escapeHTML(contactText("thanksEnglish", "THANK YOU"))}</h1>`
      : renderBlurTextMarkup("h1", contactText("thanksEnglish", "THANK YOU"), "contact-signature-title blur-text blur-text-large", { animateBy: "letters", direction: "bottom", delay: 90 });
    return `<section class="preview-section contact-preview contact-signature" style="${styleVars("contact")}">
      <div class="preview-inner contact-signature-board">
        <div class="contact-signature-top">
          <div class="contact-signature-identity">
            <strong${contactInlineAttrs("portfolioTitle")}>${escapeHTML(contactText("portfolioTitle", "2026 Design Portfolio"))}</strong>
            ${v.email ? `<span${contactInlineAttrs("email")}>${escapeHTML(c.email)}</span>` : ""}
          </div>
          <div class="contact-signature-network">
            ${v.socials ? `<span${contactInlineAttrs("socials")}>${escapeHTML(splitList(c.socials).join(" / "))}</span>` : ""}
          </div>
        </div>
        <div class="contact-signature-copy">
          ${signatureIntroMarkup}
          ${signatureTitleMarkup}
          ${contactChips ? `<div class="contact-signature-chips">${contactChips}</div>` : ""}
        </div>
      </div>
    </section>`;
  }
  const classicTitle = isContactCanvasEditing()
    ? `<h1${contactInlineAttrs("thanks")}>${escapeHTML(c.thanks)}</h1>`
    : renderSplitTextMarkup("h1", c.thanks, "contact-split-title split-text split-text-large", { delay: 58, y: 44 });
  return `<section class="preview-section contact-preview contact-classic" style="${styleVars("contact")}">
    <div class="preview-inner contact-grid">
      <div class="contact-classic-copy">
        <span class="hero-kicker"${contactInlineAttrs("sectionLabel")}>${escapeHTML(contactText("sectionLabel", "Contact"))}</span>
        ${classicTitle}
        <p${contactInlineAttrs("invite", true)}>${escapeHTML(c.invite)}</p>
        ${contactItems}
      </div>
      ${qr}
    </div>
  </section>`;
}

function renderContactItems(c, v) {
  return `<div class="contact-list">
    ${v.phone ? `<a class="contact-item" href="tel:${escapeAttr(c.phone)}"><span>电话</span><strong data-copy="${escapeAttr(c.phone)}"${contactInlineAttrs("phone")}>${escapeHTML(c.phone)}</strong></a>` : ""}
    ${v.wechat ? `<button class="contact-item" data-copy="${escapeAttr(c.wechat)}"><span>微信</span><strong${contactInlineAttrs("wechat")}>${escapeHTML(c.wechat)}</strong></button>` : ""}
    ${v.email ? `<a class="contact-item" href="mailto:${escapeAttr(c.email)}"><span>邮箱</span><strong data-copy="${escapeAttr(c.email)}"${contactInlineAttrs("email")}>${escapeHTML(c.email)}</strong></a>` : ""}
    ${v.socials ? `<div class="contact-links"${contactInlineAttrs("socials")}>${splitList(c.socials).map((item) => `<span class="link-pill">${escapeHTML(item)}</span>`).join("")}</div>` : ""}
  </div>`;
}

function renderContactChips(c, v) {
  return [
    v.phone ? ["电话", c.phone] : null,
    v.wechat ? ["微信", c.wechat] : null,
    v.email ? ["邮箱", c.email] : null
  ].filter(Boolean).map(([label, value]) => `<span class="contact-chip"><small>${escapeHTML(label)}</small><strong${contactInlineAttrs(label === "电话" ? "phone" : label === "微信" ? "wechat" : "email")}>${escapeHTML(value)}</strong></span>`).join("");
}

function renderContactQr(c, placeholder = "QR") {
  return `<button class="qr-card" data-qr>${c.qr ? `<img src="${c.qr.src}" alt="微信二维码" />` : `<span class="qr-placeholder-mark">${escapeHTML(placeholder)}</span>`}</button>`;
}

function contactText(key, fallback = "") {
  return state.contact[key] || fallback;
}

function contactInlineAttrs(key, multiline = false) {
  if (!isContactCanvasEditing()) return "";
  return ` contenteditable="true" spellcheck="false" data-contact-inline="${key}" data-contact-multiline="${multiline ? "true" : "false"}"`;
}

function isContactCanvasEditing() {
  return renderContext === "editor" && state.mode === "editor" && state.screen === "contact";
}

function renderBlurTextMarkup(tag, text, className, options = {}) {
  const animateBy = options.animateBy || "words";
  const direction = options.direction === "bottom" ? "bottom" : "top";
  const delay = Number.isFinite(options.delay) ? options.delay : 120;
  const segments = animateBy === "letters" ? Array.from(text || "") : String(text || "").split(" ");
  const html = segments.map((segment, index) => {
    const output = segment === " " ? "&nbsp;" : escapeHTML(segment);
    const spacer = animateBy === "words" && index < segments.length - 1 ? "&nbsp;" : "";
    return `<span class="blur-text-segment" style="--blur-delay:${index * delay}ms;--blur-y:${direction === "top" ? "-42px" : "42px"}">${output}${spacer}</span>`;
  }).join("");
  return `<${tag} class="${className}">${html}</${tag}>`;
}

function renderSplitTextMarkup(tag, text, className, options = {}) {
  const splitType = options.splitType || "chars";
  const delay = Number.isFinite(options.delay) ? options.delay : 50;
  const y = Number.isFinite(options.y) ? options.y : 40;
  const segments = splitType === "words" ? String(text || "").split(" ") : Array.from(text || "");
  const html = segments.map((segment, index) => {
    const output = segment === " " ? "&nbsp;" : escapeHTML(segment);
    const spacer = splitType === "words" && index < segments.length - 1 ? "&nbsp;" : "";
    return `<span class="split-text-segment" style="--split-delay:${index * delay}ms;--split-y:${y}px">${output}${spacer}</span>`;
  }).join("");
  return `<${tag} class="${className}">${html}</${tag}>`;
}

function wirePreviewInteractions(root) {
  $$("[data-about-inline]", root).forEach((item) => {
    const updateInlineState = () => {
      const key = item.dataset.aboutInline;
      if (!key) return;
      const multiline = item.dataset.aboutMultiline === "true";
      const value = inlineTextValue(item, multiline, key);
      if (key.startsWith("label:")) {
        const labelKey = key.slice("label:".length);
        state.about.labels = state.about.labels || {};
        if (state.about.labels[labelKey] === value) return;
        state.about.labels[labelKey] = value;
        return;
      }
      if (key.startsWith("sublabel:")) {
        const labelKey = key.slice("sublabel:".length);
        state.about.subLabels = state.about.subLabels || {};
        if (state.about.subLabels[labelKey] === value) return;
        state.about.subLabels[labelKey] = value;
        return;
      }
      if (key.startsWith("fieldlabel:")) {
        const labelKey = key.slice("fieldlabel:".length);
        state.about.fieldLabels = state.about.fieldLabels || {};
        if (state.about.fieldLabels[labelKey] === value) return;
        state.about.fieldLabels[labelKey] = value;
        return;
      }
      if (!(key in state.about)) return;
      if (state.about[key] === value) return;
      state.about[key] = value;
      syncAboutFieldControl(key);
    };
    item.addEventListener("focus", () => {
      item.dataset.inlineOriginal = inlineTextValue(item, item.dataset.aboutMultiline === "true", item.dataset.aboutInline);
    });
    item.addEventListener("input", updateInlineState);
    item.addEventListener("blur", () => {
      updateInlineState();
      renderAboutFields();
      renderPreview();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        renderPreview();
        return;
      }
      if (event.key === "Enter" && item.dataset.aboutMultiline !== "true") {
        event.preventDefault();
        item.blur();
      }
    });
    item.addEventListener("paste", (event) => {
      event.preventDefault();
      const text = event.clipboardData?.getData("text/plain") || "";
      document.execCommand?.("insertText", false, text);
    });
  });
  $$("[data-works-inline], [data-works-filter-inline]", root).forEach((item) => {
    const updateInlineState = () => {
      const multiline = item.dataset.worksMultiline === "true";
      const value = inlineTextValue(item, multiline).trim();
      if (item.dataset.worksFilterInline) {
        updateWorksFilterInline(item, value);
        return;
      }
      const key = item.dataset.worksInline;
      if (key === "heading") {
        state.works.heading = value || "Selected Works";
        return;
      }
      if (key === "project") {
        const project = state.works.projects.find((work) => work.id === item.dataset.projectId);
        const field = item.dataset.workInlineField;
        if (!project || !field || !(field in project)) return;
        project[field] = value;
        syncWorkFieldControl(project.id, field);
      }
    };
    item.addEventListener("mousedown", (event) => event.stopPropagation());
    item.addEventListener("click", (event) => event.stopPropagation());
    item.addEventListener("focus", () => {
      item.dataset.inlineOriginal = inlineTextValue(item, item.dataset.worksMultiline === "true");
    });
    item.addEventListener("input", updateInlineState);
    item.addEventListener("blur", () => {
      updateInlineState();
      renderWorksConfig();
      renderPreview();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        renderPreview();
        return;
      }
      if (event.key === "Enter" && item.dataset.worksMultiline !== "true") {
        event.preventDefault();
        item.blur();
      }
    });
    item.addEventListener("paste", (event) => {
      event.preventDefault();
      const text = event.clipboardData?.getData("text/plain") || "";
      document.execCommand?.("insertText", false, text);
    });
  });
  $$("[data-contact-inline]", root).forEach((item) => {
    const updateInlineState = () => {
      const key = item.dataset.contactInline;
      if (!key) return;
      const multiline = item.dataset.contactMultiline === "true";
      const value = inlineTextValue(item, multiline, key);
      if (state.contact[key] === value) return;
      state.contact[key] = value;
      syncContactFieldControl(key);
    };
    item.addEventListener("mousedown", (event) => event.stopPropagation());
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    item.addEventListener("focus", () => {
      item.dataset.inlineOriginal = inlineTextValue(item, item.dataset.contactMultiline === "true", item.dataset.contactInline);
    });
    item.addEventListener("input", updateInlineState);
    item.addEventListener("blur", () => {
      updateInlineState();
      renderContactFields();
      renderPreview();
    });
    item.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        renderPreview();
        return;
      }
      if (event.key === "Enter" && item.dataset.contactMultiline !== "true") {
        event.preventDefault();
        item.blur();
      }
    });
    item.addEventListener("paste", (event) => {
      event.preventDefault();
      const text = event.clipboardData?.getData("text/plain") || "";
      document.execCommand?.("insertText", false, text);
    });
  });
  $$(".filter-button", root).forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (event.target.closest("[data-works-filter-inline]")) return;
      state.works.filter = btn.dataset.filter;
      renderAll();
    });
  });
  $$(".work-card", root).forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("[data-works-inline]")) return;
      if (event.target.closest("[data-work-cover-upload]")) return;
      openProjectRoute(card.dataset.projectSlug);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("[data-works-inline]")) return;
      event.preventDefault();
      openProjectRoute(card.dataset.projectSlug);
    });
  });
  $$("[data-work-cover-upload]", root).forEach((cover) => {
    const uploadCover = () => {
      const project = state.works.projects.find((item) => item.id === cover.dataset.workCoverUpload);
      if (!project) return;
      pickImage((media) => openWorkCoverCrop(project, media));
    };
    cover.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      uploadCover();
    });
    cover.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      event.stopPropagation();
      uploadCover();
    });
  });
  $$("[data-copy]", root).forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.target.closest("[data-contact-inline]")) return;
      event.preventDefault();
      navigator.clipboard?.writeText(item.dataset.copy);
      item.title = "已复制";
    });
  });
  $$("[data-qr]", root).forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (state.mode === "editor" && state.screen === "contact") {
        event.preventDefault();
        event.stopPropagation();
        pickImage((media) => {
          state.contact.qr = media;
          renderAll();
        });
        return;
      }
      if (!state.contact.qr) return;
      $("#qrModalImage").src = state.contact.qr.src;
      $("#qrModal").classList.remove("is-hidden");
    });
  });
  $$("[data-about-portrait-upload]", root).forEach((target) => {
    const uploadPortrait = () => pickImage((media) => {
      state.about.portrait = media;
      renderAll();
    });
    target.addEventListener("click", uploadPortrait);
    target.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      uploadPortrait();
    });
  });
  wireSoftwareSkillInteractions(root);
}

function inlineTextValue(element, multiline = false, key = "") {
  if (key === "skills" || key === "socials") {
    const tags = $$(":scope > .tag", element)
      .concat($$(":scope > .link-pill", element))
      .map((tag) => tag.textContent.trim())
      .filter(Boolean);
    const raw = (element.innerText || element.textContent || "").replace(/\u00a0/g, " ");
    const values = tags.length ? tags : raw.split(/[\n,，/]+/).map((item) => item.trim()).filter(Boolean);
    return [...new Set(values)].join(", ");
  }
  const text = (element.innerText || element.textContent || "").replace(/\u00a0/g, " ");
  if (multiline) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .join("\n");
  }
  return text.replace(/\s+/g, " ").trim();
}

function syncAboutFieldControl(key) {
  const control = $(`[data-about="${key}"]`);
  if (control && control.value !== state.about[key]) {
    control.value = state.about[key];
  }
}

function syncContactFieldControl(key) {
  const control = $(`[data-contact="${key}"]`);
  if (control && control.value !== state.contact[key]) {
    control.value = state.contact[key] || "";
  }
}

function wireSoftwareSkillInteractions(root) {
  if (!isSoftwareSkillsEditing()) return;
  $$("[data-open-skill-editor]", root).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSoftwareSkillModal();
    });
  });
  $$("[data-skill-card-edit]", root).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openSoftwareSkillModal(button.dataset.skillCardEdit);
    });
  });
  $$("[data-skill-card-delete]", root).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const skill = normalizedSoftwareSkills().find((item) => item.id === button.dataset.skillCardDelete);
      if (!skill) return;
      skill.selected = false;
      saveSoftwareSkills();
      renderAll();
    });
  });
  $$("[data-skill-id]", root).forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      draggedSoftwareSkillId = card.dataset.skillId || "";
      event.dataTransfer?.setData("text/plain", draggedSoftwareSkillId);
    });
    card.addEventListener("dragover", (event) => event.preventDefault());
    card.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderSoftwareSkill(draggedSoftwareSkillId || event.dataTransfer?.getData("text/plain"), card.dataset.skillId);
      draggedSoftwareSkillId = "";
      renderAll();
    });
  });
}

function initSoftwareSkillReveal(root = document) {
  const sections = $$(".about-cv-skill-strip", root);
  if (!sections.length) return;
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });
  sections.forEach((section) => observer.observe(section));
}

function openSoftwareSkillModal(skillId = "") {
  const modal = $("#skillModal");
  if (!modal) return;
  editingSoftwareSkillId = "";
  renderSoftwareSkillModal();
  modal.classList.remove("is-hidden");
  if (skillId) {
    const skill = normalizedSoftwareSkills().find((item) => item.id === skillId);
    if (skill?.custom) fillSoftwareSkillForm(skill);
    $$("[data-skill-row]", modal).find((row) => row.dataset.skillRow === skillId)?.scrollIntoView({ block: "center" });
  }
}

function closeSoftwareSkillModal() {
  $("#skillModal")?.classList.add("is-hidden");
  editingSoftwareSkillId = "";
  resetSoftwareSkillForm();
}

function renderSoftwareSkillModal() {
  const list = $("#skillPresetList");
  const customList = $("#skillCustomList");
  const percentToggle = $("#showSkillPercent");
  if (percentToggle) percentToggle.checked = state.about.showSkillPercent !== false;
  const rows = normalizedSoftwareSkills().map(renderSoftwareSkillEditorRow).join("");
  if (list) list.innerHTML = rows;
  if (customList) {
    customList.innerHTML = normalizedSoftwareSkills()
      .filter((skill) => skill.custom)
      .map((skill) => `<button type="button" data-custom-skill-edit="${escapeAttr(skill.id)}">${escapeHTML(skill.name)}</button>`)
      .join("");
  }
  wireSoftwareSkillModalRows();
}

function renderSoftwareSkillEditorRow(skill) {
  const level = clampNumber(skill.level, 0, 100);
  const icon = skill.icon ? `<img src="${escapeAttr(skill.icon)}" alt="" />` : `<span>${escapeHTML(skill.shortName)}</span>`;
  return `<div class="skill-editor-row" data-skill-row="${escapeAttr(skill.id)}" draggable="true">
    <label class="skill-row-check"><input type="checkbox" data-skill-select="${escapeAttr(skill.id)}" ${skill.selected ? "checked" : ""}>${icon}<strong>${escapeHTML(skill.name)}</strong></label>
    <input type="range" min="0" max="100" value="${level}" data-skill-level="${escapeAttr(skill.id)}">
    <select data-skill-level-text="${escapeAttr(skill.id)}">
      ${["基础", "熟练", "精通"].map((label) => `<option value="${label}" ${skill.levelText === label ? "selected" : ""}>${label}</option>`).join("")}
    </select>
    <span class="skill-row-level">${level}%</span>
    ${skill.custom ? `<button type="button" data-custom-skill-edit="${escapeAttr(skill.id)}">编辑</button><button type="button" data-custom-skill-delete="${escapeAttr(skill.id)}">删除</button>` : `<span class="skill-row-preset">预设</span>`}
  </div>`;
}

function wireSoftwareSkillModalRows() {
  const modal = $("#skillModal");
  if (!modal) return;
  $$("[data-skill-select]", modal).forEach((input) => {
    input.addEventListener("change", () => updateSoftwareSkill(input.dataset.skillSelect, { selected: input.checked }));
  });
  $$("[data-skill-level]", modal).forEach((input) => {
    input.addEventListener("input", () => {
      const value = clampNumber(input.value, 0, 100);
      input.closest(".skill-editor-row")?.querySelector(".skill-row-level")?.replaceChildren(document.createTextNode(`${value}%`));
      updateSoftwareSkill(input.dataset.skillLevel, { level: value }, false);
    });
  });
  $$("[data-skill-level-text]", modal).forEach((select) => {
    select.addEventListener("change", () => updateSoftwareSkill(select.dataset.skillLevelText, { levelText: select.value }));
  });
  $$("[data-custom-skill-edit]", modal).forEach((button) => {
    button.addEventListener("click", () => {
      const skill = normalizedSoftwareSkills().find((item) => item.id === button.dataset.customSkillEdit);
      if (skill) fillSoftwareSkillForm(skill);
    });
  });
  $$("[data-custom-skill-delete]", modal).forEach((button) => {
    button.addEventListener("click", () => {
      state.about.softwareSkills = normalizedSoftwareSkills().filter((skill) => skill.id !== button.dataset.customSkillDelete);
      saveSoftwareSkills();
      renderSoftwareSkillModal();
      renderPreview();
    });
  });
  $$("[data-skill-row]", modal).forEach((row) => {
    row.addEventListener("dragstart", (event) => {
      draggedSoftwareSkillId = row.dataset.skillRow || "";
      event.dataTransfer?.setData("text/plain", draggedSoftwareSkillId);
    });
    row.addEventListener("dragover", (event) => event.preventDefault());
    row.addEventListener("drop", (event) => {
      event.preventDefault();
      reorderSoftwareSkill(draggedSoftwareSkillId || event.dataTransfer?.getData("text/plain"), row.dataset.skillRow);
      draggedSoftwareSkillId = "";
      renderSoftwareSkillModal();
      renderPreview();
    });
  });
}

function updateSoftwareSkill(id, patch, refreshModal = true) {
  const skill = normalizedSoftwareSkills().find((item) => item.id === id);
  if (!skill) return;
  Object.assign(skill, patch);
  saveSoftwareSkills();
  renderPreview();
  if (refreshModal) renderSoftwareSkillModal();
}

function reorderSoftwareSkill(fromId, toId) {
  if (!fromId || !toId || fromId === toId) return;
  const skills = normalizedSoftwareSkills();
  const from = skills.findIndex((skill) => skill.id === fromId);
  const to = skills.findIndex((skill) => skill.id === toId);
  if (from < 0 || to < 0) return;
  const [item] = skills.splice(from, 1);
  skills.splice(to, 0, item);
  state.about.softwareSkills = skills;
  saveSoftwareSkills();
}

function fillSoftwareSkillForm(skill) {
  editingSoftwareSkillId = skill.id;
  $("#skillNameInput").value = skill.name || "";
  $("#skillShortInput").value = skill.shortName || "";
  $("#skillLevelInput").value = clampNumber(skill.level, 0, 100);
  $("#skillLevelOutput").textContent = `${clampNumber(skill.level, 0, 100)}%`;
  $("#skillLevelTextInput").value = skill.levelText || "熟练";
  $("#skillIconPreview").innerHTML = skill.icon ? `<img src="${escapeAttr(skill.icon)}" alt="">` : escapeHTML(skill.shortName || "Sk");
  $("#skillIconPreview").dataset.icon = skill.icon || "";
}

function resetSoftwareSkillForm() {
  editingSoftwareSkillId = "";
  $("#skillCustomForm")?.reset();
  const preview = $("#skillIconPreview");
  if (preview) {
    preview.textContent = "+";
    preview.dataset.icon = "";
  }
  const output = $("#skillLevelOutput");
  if (output) output.textContent = "70%";
}

function handleSoftwareSkillIconUpload(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const preview = $("#skillIconPreview");
    if (!preview) return;
    preview.dataset.icon = reader.result;
    preview.innerHTML = `<img src="${escapeAttr(reader.result)}" alt="">`;
  };
  reader.readAsDataURL(file);
  event.target.value = "";
}

function saveCustomSoftwareSkill(event) {
  event.preventDefault();
  const name = $("#skillNameInput")?.value.trim();
  if (!name) return;
  const shortName = ($("#skillShortInput")?.value.trim() || name.slice(0, 2)).slice(0, 6);
  const payload = {
    name,
    shortName,
    icon: $("#skillIconPreview")?.dataset.icon || "",
    level: clampNumber($("#skillLevelInput")?.value || 70, 0, 100),
    levelText: $("#skillLevelTextInput")?.value || "熟练",
    selected: true,
    custom: true
  };
  const skills = normalizedSoftwareSkills();
  if (editingSoftwareSkillId) {
    const existing = skills.find((skill) => skill.id === editingSoftwareSkillId);
    if (existing) Object.assign(existing, payload);
  } else {
    skills.push({ id: `custom-${Date.now()}`, ...payload });
  }
  state.about.softwareSkills = skills;
  saveSoftwareSkills();
  resetSoftwareSkillForm();
  renderSoftwareSkillModal();
  renderPreview();
}

function updateWorksFilterInline(item, value) {
  const kind = item.dataset.worksFilterInline;
  if (kind === "all") {
    state.works.allLabel = value || "全部";
    return;
  }
  if (!value) return;
  const previous = item.dataset.filterCategory;
  if (!previous || previous === "all" || previous === value) return;
  const affectedIds = [];
  state.works.projects.forEach((project) => {
    if (project.category !== previous) return;
    project.category = value;
    affectedIds.push(project.id);
  });
  if (state.works.filter === previous) state.works.filter = value;
  affectedIds.forEach((id) => syncWorkFieldControl(id, "category"));
  $$(`#sitePreview [data-work-inline-field="category"]`).forEach((node) => {
    if (node.textContent.trim() === previous) node.textContent = value;
  });
  item.dataset.filterCategory = value;
}

function syncWorkFieldControl(projectId, field) {
  const project = state.works.projects.find((item) => item.id === projectId);
  if (!project) return;
  const list = $("#worksEditorList");
  if (!list) return;
  const card = $$("[data-id]", list).find((item) => item.dataset.id === projectId);
  const control = card?.querySelector(`[data-work-field="${field}"]`);
  if (!control || control.value === project[field]) return;
  control.value = project[field];
}

function initVerticalImageStacks(root) {
  $$(".vertical-image-stack", root).forEach((stack) => {
    const total = $$(".vertical-stack-card", stack).length;
    if (!total) return;
    applyVerticalStackState(stack, state.hero.totemIndex || 0);

    const navigate = (direction) => {
      const now = Date.now();
      if (now - lastTotemNavigationTime < 400) return;
      lastTotemNavigationTime = now;
      const current = ((state.hero.totemIndex || 0) % total + total) % total;
      state.hero.totemIndex = (current + direction + total) % total;
      state.hero.activeIndex = state.hero.totemIndex;
      applyVerticalStackState(stack, state.hero.totemIndex);
    };

    $$(".vertical-stack-dot", stack).forEach((dot) => {
      dot.addEventListener("click", (event) => {
        event.stopPropagation();
        state.hero.totemIndex = Number(dot.dataset.stackIndex) || 0;
        state.hero.activeIndex = state.hero.totemIndex;
        applyVerticalStackState(stack, state.hero.totemIndex);
      });
    });

    stack.addEventListener("wheel", (event) => {
      if (Math.abs(event.deltaY) <= 30) return;
      event.preventDefault();
      navigate(event.deltaY > 0 ? 1 : -1);
    }, { passive: false });

    let startY = 0;
    let dragging = false;
    stack.addEventListener("pointerdown", (event) => {
      dragging = true;
      startY = event.clientY;
      stack.classList.add("is-dragging");
      stack.setPointerCapture?.(event.pointerId);
    });
    stack.addEventListener("pointerup", (event) => {
      if (!dragging) return;
      dragging = false;
      stack.classList.remove("is-dragging");
      const offset = event.clientY - startY;
      if (Math.abs(offset) > 50) navigate(offset < 0 ? 1 : -1);
    });
    stack.addEventListener("pointercancel", () => {
      dragging = false;
      stack.classList.remove("is-dragging");
    });

    if (state.animationPlaying) {
      const intervalMs = state.hero.speed === "fast" ? 1400 : state.hero.speed === "slow" ? 3200 : 2200;
      const timer = window.setInterval(() => navigate(1), intervalMs);
      verticalStackCleanups.push(() => window.clearInterval(timer));
    }
  });
}

function applyVerticalStackState(stack, currentIndex) {
  const cards = $$(".vertical-stack-card", stack);
  const total = cards.length;
  if (!total) return;
  const current = ((currentIndex || 0) % total + total) % total;
  stack.dataset.current = current;
  cards.forEach((card, index) => {
    const style = verticalStackStyle(index, current, total);
    card.style.setProperty("--stack-y", `${style.y}px`);
    card.style.setProperty("--stack-depth", `${style.depth || 0}px`);
    card.style.setProperty("--stack-scale", style.scale);
    card.style.setProperty("--stack-opacity", style.opacity);
    card.style.setProperty("--stack-rotate", `${style.rotateX}deg`);
    card.style.setProperty("--stack-z", style.zIndex);
    card.classList.toggle("is-current", index === current);
  });
  $$(".vertical-stack-dot", stack).forEach((dot, index) => {
    dot.classList.toggle("is-active", index === current);
  });
  const currentNode = $(".vertical-stack-current", stack);
  if (currentNode) currentNode.textContent = String(current + 1).padStart(2, "0");
}

function initZoomParallax(root) {
  $$(".zoom-parallax", root).forEach((container) => {
    const layers = $$(".zoom-parallax-layer", container);
    layers.forEach((layer) => applyMosaicLayerZoom(container, layer, Number(layer.dataset.zoom) || 1, false));
    const onWheel = (event) => {
      if (Math.abs(event.deltaY) < 8) return;
      const frameNode = event.target.closest(".zoom-parallax-frame");
      if (!frameNode || !container.contains(frameNode)) return;
      const layer = frameNode.closest(".zoom-parallax-layer");
      if (!layer) return;
      event.preventDefault();
      const current = Number(layer.dataset.zoom) || 1;
      applyMosaicLayerZoom(container, layer, current + (event.deltaY < 0 ? 0.16 : -0.16), true);
    };
    const onClick = (event) => {
      const button = event.target.closest("[data-mosaic-action]");
      const frameNode = event.target.closest(".zoom-parallax-frame");
      if (!frameNode || !container.contains(frameNode)) return;
      const layer = frameNode.closest(".zoom-parallax-layer");
      if (!layer) return;
      const current = Number(layer.dataset.zoom) || 1;
      if (button?.dataset.mosaicAction === "in") applyMosaicLayerZoom(container, layer, current + 0.24, true);
      else if (button?.dataset.mosaicAction === "out") applyMosaicLayerZoom(container, layer, current - 0.24, true);
      else if (button?.dataset.mosaicAction === "reset") applyMosaicLayerZoom(container, layer, 1, true);
      else applyMosaicLayerZoom(container, layer, current > 1.08 ? 1 : 1.5, true);
    };
    const onKeyDown = (event) => {
      const frameNode = event.target.closest(".zoom-parallax-frame");
      if (!frameNode || !container.contains(frameNode)) return;
      const layer = frameNode.closest(".zoom-parallax-layer");
      if (!layer) return;
      const current = Number(layer.dataset.zoom) || 1;
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        applyMosaicLayerZoom(container, layer, current + 0.18, true);
      } else if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        applyMosaicLayerZoom(container, layer, current - 0.18, true);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        applyMosaicLayerZoom(container, layer, current > 1.08 ? 1 : 1.5, true);
      } else if (event.key === "Escape") {
        applyMosaicLayerZoom(container, layer, 1, true);
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("click", onClick);
    container.addEventListener("keydown", onKeyDown);

    zoomParallaxCleanups.push(() => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("click", onClick);
      container.removeEventListener("keydown", onKeyDown);
    });
  });
}

function applyMosaicLayerZoom(container, layer, nextZoom, activate) {
  const stage = $(".zoom-parallax-stage", container) || container;
  const baseWidth = Math.max(layer.offsetWidth, 1);
  const baseHeight = Math.max(layer.offsetHeight, 1);
  const maxZoom = Math.max(1, Math.min(2.15, (stage.clientWidth * 0.86) / baseWidth, (stage.clientHeight * 0.86) / baseHeight));
  const zoom = Math.min(maxZoom, Math.max(1, Number(nextZoom) || 1));
  layer.dataset.zoom = zoom.toFixed(2);
  layer.style.setProperty("--card-scale", zoom.toFixed(3));
  layer.style.setProperty("--control-scale", (1 / zoom).toFixed(3));
  layer.style.setProperty("--layer-opacity", zoom > 1.02 ? "1" : "0.96");
  const shouldCenter = zoom > 1.02 && activate;
  if (activate) {
    $$(".zoom-parallax-layer", container).forEach((item) => {
      item.classList.toggle("is-active", shouldCenter && item === layer);
      if (item !== layer) {
        item.style.zIndex = item.dataset.homeZ || "1";
        item.style.setProperty("--focus-x", "0px");
        item.style.setProperty("--focus-y", "0px");
        item.style.setProperty("--control-scale", "1");
      }
    });
    layer.style.zIndex = shouldCenter ? String(120 + Math.round(zoom * 10)) : layer.dataset.homeZ || "1";
  } else {
    layer.style.zIndex = layer.dataset.homeZ || "1";
  }
  if (shouldCenter) {
    const offsetX = stage.clientWidth / 2 - (layer.offsetLeft + baseWidth / 2);
    const offsetY = stage.clientHeight / 2 - (layer.offsetTop + baseHeight / 2);
    layer.style.setProperty("--focus-x", `${offsetX.toFixed(2)}px`);
    layer.style.setProperty("--focus-y", `${offsetY.toFixed(2)}px`);
  } else if (zoom <= 1.02) {
    layer.style.setProperty("--focus-x", "0px");
    layer.style.setProperty("--focus-y", "0px");
    layer.classList.remove("is-active");
  }
}

function cleanupZoomParallax() {
  zoomParallaxCleanups.forEach((cleanup) => cleanup());
  zoomParallaxCleanups = [];
}

function initPhotoOrbits(root) {
  $$(".photo-orbit", root).forEach((orbit) => {
    const cards = $$(".photo-orbit-card", orbit);
    const duration = (parseFloat(SPEED_MAP[state.hero.speed]) || 22) * 1000;
    const motion = { phase: 0, frame: 0, last: performance.now(), paused: !state.animationPlaying };
    const setCardShift = (shiftX, shiftY) => {
      cards.forEach((card) => {
        const depth = Number(card.style.getPropertyValue("--orbit-depth") || 0.6);
        card.style.setProperty("--orbit-shift-x", `${(shiftX * depth).toFixed(2)}px`);
        card.style.setProperty("--orbit-shift-y", `${(shiftY * depth).toFixed(2)}px`);
      });
    };
    const applyOrbit = () => {
      const width = orbit.clientWidth || 1;
      const height = orbit.clientHeight || 1;
      const radius = Math.max(82, Math.min(width, height) * 0.34);
      cards.forEach((card) => {
        const base = Number(card.dataset.angle || 0) * Math.PI / 180;
        const angle = base + motion.phase;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const depth = (Math.sin(angle) + 1) / 2;
        const scale = 0.84 + depth * 0.18;
        const opacity = 0.42 + depth * 0.58;
        const brightness = 0.58 + depth * 0.48;
        card.style.setProperty("--orbit-x", `${x.toFixed(2)}px`);
        card.style.setProperty("--orbit-y", `${y.toFixed(2)}px`);
        card.style.setProperty("--orbit-scale", scale.toFixed(3));
        card.style.setProperty("--orbit-opacity", opacity.toFixed(3));
        card.style.setProperty("--orbit-brightness", brightness.toFixed(3));
        card.style.setProperty("--orbit-depth", depth.toFixed(3));
        card.style.zIndex = String(20 + Math.round(depth * 80));
      });
    };
    const tick = (now) => {
      const delta = Math.min(48, now - motion.last);
      motion.last = now;
      if (!motion.paused) {
        motion.phase += (delta / duration) * Math.PI * 2;
      }
      applyOrbit();
      motion.frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event) => {
      const rect = orbit.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5);
      const y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5);
      orbit.style.setProperty("--orbit-tilt-x", `${(-y * 8).toFixed(2)}deg`);
      orbit.style.setProperty("--orbit-tilt-y", `${(x * 10).toFixed(2)}deg`);
      setCardShift(x * 14, y * 10);
    };
    const onWheel = (event) => {
      if (!orbit.matches(":hover")) return;
      event.preventDefault();
      motion.phase += Math.max(-1, Math.min(1, event.deltaY || event.deltaX || 0)) * -0.12;
    };
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        motion.phase += Math.PI / cards.length;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        motion.phase -= Math.PI / cards.length;
      }
    };
    const onLeave = () => {
      orbit.style.setProperty("--orbit-tilt-x", "0deg");
      orbit.style.setProperty("--orbit-tilt-y", "0deg");
      setCardShift(0, 0);
    };
    orbit.addEventListener("pointermove", onMove);
    orbit.addEventListener("pointerleave", onLeave);
    orbit.addEventListener("wheel", onWheel, { passive: false });
    orbit.addEventListener("keydown", onKeyDown);
    setCardShift(0, 0);
    applyOrbit();
    motion.frame = window.requestAnimationFrame(tick);
    photoOrbitCleanups.push(() => {
      window.cancelAnimationFrame(motion.frame);
      orbit.removeEventListener("pointermove", onMove);
      orbit.removeEventListener("pointerleave", onLeave);
      orbit.removeEventListener("wheel", onWheel);
      orbit.removeEventListener("keydown", onKeyDown);
    });
  });
}

function cleanupPhotoOrbits() {
  photoOrbitCleanups.forEach((cleanup) => cleanup());
  photoOrbitCleanups = [];
}

function initScrollMorphs(root) {
  $$(".scroll-morph", root).forEach((container) => {
    const cards = $$(".scroll-morph-card", container);
    if (!cards.length) return;

    const total = cards.length;
    const maxScroll = 3000;
    const stateLocal = {
      phase: state.animationPlaying ? "scatter" : "circle",
      scroll: 0,
      targetScroll: 0,
      morph: 0,
      rotate: 0,
      parallax: 0,
      parallaxTarget: 0,
      frame: 0,
      touchY: 0
    };
    const lerpLocal = (start, end, t) => start * (1 - t) + end * t;
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const setTargets = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 1;
      const height = rect.height || 1;
      const minDimension = Math.min(width, height);
      const morphTarget = clamp(stateLocal.scroll / 600, 0, 1);
      const rotateTarget = clamp((stateLocal.scroll - 600) / (maxScroll - 600), 0, 1) * 360;
      stateLocal.morph = lerpLocal(stateLocal.morph, morphTarget, 0.075);
      stateLocal.rotate = lerpLocal(stateLocal.rotate, rotateTarget, 0.075);
      stateLocal.parallax = lerpLocal(stateLocal.parallax, stateLocal.parallaxTarget, 0.08);
      container.style.setProperty("--sm-copy-opacity", clamp((stateLocal.morph - 0.8) / 0.2, 0, 1).toFixed(3));

      cards.forEach((card, index) => {
        let x = Number(card.dataset.scatterX || 0);
        let y = Number(card.dataset.scatterY || 0);
        let rotation = Number(card.dataset.scatterR || 0);
        let scale = 0.6;
        let opacity = 0;

        if (stateLocal.phase === "line") {
          const lineSpacing = Math.min(70, Math.max(42, width / Math.max(total - 1, 1)));
          const lineTotal = (total - 1) * lineSpacing;
          x = index * lineSpacing - lineTotal / 2;
          y = 0;
          rotation = 0;
          scale = 1;
          opacity = 1;
        } else if (stateLocal.phase === "circle") {
          const circleRadius = Math.min(minDimension * 0.35, 350);
          const circleAngle = (index / total) * 360;
          const circleRad = circleAngle * Math.PI / 180;
          const circleX = Math.cos(circleRad) * circleRadius;
          const circleY = Math.sin(circleRad) * circleRadius;
          const circleRotation = circleAngle + 90;

          const isMobile = width < 768;
          const baseRadius = Math.min(width, height * 1.5);
          const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
          const arcApexY = height * (isMobile ? 0.35 : 0.25);
          const arcCenterY = arcApexY + arcRadius;
          const spreadAngle = isMobile ? 100 : 130;
          const startAngle = -90 - spreadAngle / 2;
          const step = spreadAngle / Math.max(total - 1, 1);
          const scrollProgress = clamp(stateLocal.rotate / 360, 0, 1);
          const boundedRotation = -scrollProgress * spreadAngle * 0.8;
          const currentArcAngle = startAngle + index * step + boundedRotation;
          const arcRad = currentArcAngle * Math.PI / 180;
          const arcX = Math.cos(arcRad) * arcRadius + stateLocal.parallax;
          const arcY = Math.sin(arcRad) * arcRadius + arcCenterY - height * 0.5;
          const arcRotation = currentArcAngle + 90;
          const arcScale = isMobile ? 1.25 : 1.58;

          x = lerpLocal(circleX, arcX, stateLocal.morph);
          y = lerpLocal(circleY, arcY, stateLocal.morph);
          rotation = lerpLocal(circleRotation, arcRotation, stateLocal.morph);
          scale = lerpLocal(1, arcScale, stateLocal.morph);
          opacity = 1;
        }

        card.style.setProperty("--sm-x", `${x.toFixed(2)}px`);
        card.style.setProperty("--sm-y", `${y.toFixed(2)}px`);
        card.style.setProperty("--sm-rotate", `${rotation.toFixed(2)}deg`);
        card.style.setProperty("--sm-scale", scale.toFixed(3));
        card.style.setProperty("--sm-opacity", opacity.toFixed(3));
        card.style.zIndex = String(Math.round(1000 + y));
      });
    };

    const tick = () => {
      stateLocal.scroll = lerpLocal(stateLocal.scroll, stateLocal.targetScroll, 0.12);
      setTargets();
      stateLocal.frame = window.requestAnimationFrame(tick);
    };
    const onWheel = (event) => {
      event.preventDefault();
      stateLocal.targetScroll = clamp(stateLocal.targetScroll + event.deltaY, 0, maxScroll);
    };
    const onTouchStart = (event) => {
      stateLocal.touchY = event.touches[0].clientY;
    };
    const onTouchMove = (event) => {
      event.preventDefault();
      const y = event.touches[0].clientY;
      stateLocal.targetScroll = clamp(stateLocal.targetScroll + stateLocal.touchY - y, 0, maxScroll);
      stateLocal.touchY = y;
    };
    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const normalized = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
      stateLocal.parallaxTarget = normalized * 100;
    };

    const timers = [];
    if (state.animationPlaying) {
      timers.push(window.setTimeout(() => { stateLocal.phase = "line"; }, 500));
      timers.push(window.setTimeout(() => { stateLocal.phase = "circle"; }, 2500));
    }
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("mousemove", onMouseMove);
    setTargets();
    stateLocal.frame = window.requestAnimationFrame(tick);

    scrollMorphCleanups.push(() => {
      window.cancelAnimationFrame(stateLocal.frame);
      timers.forEach((timer) => window.clearTimeout(timer));
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("mousemove", onMouseMove);
    });
  });
}

function cleanupScrollMorphs() {
  scrollMorphCleanups.forEach((cleanup) => cleanup());
  scrollMorphCleanups = [];
}

function initImageTrails(root) {
  $$(".image-trail", root).forEach((container) => {
    const layer = $(".image-trail-layer", container);
    const sources = $$(".image-trail-source-card", container);
    if (!layer || !sources.length) return;

    const interval = state.hero.speed === "fast" ? 56 : state.hero.speed === "slow" ? 130 : 82;
    const lifetime = state.hero.speed === "fast" ? 920 : state.hero.speed === "slow" ? 1320 : 1080;
    const motion = {
      lastSpawn: 0,
      lastX: -9999,
      lastY: -9999,
      index: 0,
      z: 1
    };

    const spawn = (x, y, force = false) => {
      const now = performance.now();
      const moved = Math.hypot(x - motion.lastX, y - motion.lastY);
      if (!force && (now - motion.lastSpawn < interval || moved < 12)) return;
      motion.lastSpawn = now;
      motion.lastX = x;
      motion.lastY = y;

      const source = sources[motion.index % sources.length];
      motion.index += 1;
      const item = document.createElement("div");
      item.className = "image-trail-item";
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      item.style.zIndex = String(motion.z++);
      item.style.setProperty("--trail-rotate", `${((Math.random() - 0.5) * 18).toFixed(2)}deg`);
      item.style.setProperty("--trail-duration", `${lifetime}ms`);
      item.appendChild(source.cloneNode(true));
      layer.appendChild(item);
      window.setTimeout(() => item.remove(), lifetime + 80);
    };

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      spawn(event.clientX - rect.left, event.clientY - rect.top);
    };

    const onPointerEnter = (event) => {
      const rect = container.getBoundingClientRect();
      spawn(event.clientX - rect.left, event.clientY - rect.top, true);
    };

    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointermove", onPointerMove);

    imageTrailCleanups.push(() => {
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointermove", onPointerMove);
      layer.innerHTML = "";
    });
  });
}

function cleanupImageTrails() {
  imageTrailCleanups.forEach((cleanup) => cleanup());
  imageTrailCleanups = [];
}

function initThreeDCarousels(root, { autoPlay = true } = {}) {
  $$(".three-d-carousel", root).forEach((container) => {
    const ring = $(".three-d-carousel-ring", container);
    const cards = $$(".three-d-carousel-card", container);
    const overlay = $(".three-d-carousel-overlay", container);
    const expanded = $(".three-d-carousel-expanded", container);
    const close = $(".three-d-carousel-close", container);
    if (!ring || !cards.length) return;

    const speed = state.hero.speed === "fast" ? 0.038 : state.hero.speed === "slow" ? 0.012 : 0.022;
    const motion = {
      rotation: 0,
      targetRotation: 0,
      frame: 0,
      last: performance.now(),
      dragging: false,
      moved: false,
      startX: 0,
      startRotation: 0,
      active: true
    };

    const layout = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      const count = cards.length;
      const cardSize = Math.max(82, Math.min(156, width * 0.16, height * 0.34));
      const radius = Math.max(cardSize * 1.65, (cardSize * count) / (Math.PI * 2));
      ring.style.setProperty("--carousel-card-size", `${cardSize}px`);
      ring.style.setProperty("--carousel-radius", `${radius}px`);
      cards.forEach((card, index) => {
        const angle = (360 / count) * index;
        card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
      });
    };

    const apply = () => {
      ring.style.transform = `translateZ(calc(var(--carousel-radius, 220px) * -1)) rotateY(${motion.rotation}deg)`;
    };

    const tick = (now) => {
      const delta = Math.min(48, now - motion.last);
      motion.last = now;
      if (autoPlay && !motion.dragging && motion.active) {
        motion.targetRotation -= delta * speed;
      }
      motion.rotation += (motion.targetRotation - motion.rotation) * 0.12;
      apply();
      motion.frame = window.requestAnimationFrame(tick);
    };

    const openCard = (card) => {
      if (!overlay || !expanded) return;
      const surface = $(".three-d-carousel-surface", card);
      if (!surface) return;
      motion.active = false;
      expanded.innerHTML = "";
      expanded.appendChild(surface.cloneNode(true));
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
    };

    const closeOverlay = () => {
      if (!overlay || !expanded) return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      expanded.innerHTML = "";
      motion.active = true;
    };

    const onPointerDown = (event) => {
      motion.dragging = true;
      motion.moved = false;
      motion.startX = event.clientX;
      motion.startRotation = motion.targetRotation;
      container.classList.add("is-dragging");
      container.setPointerCapture?.(event.pointerId);
    };
    const onPointerMove = (event) => {
      if (!motion.dragging) return;
      if (Math.abs(event.clientX - motion.startX) > 4) motion.moved = true;
      motion.targetRotation = motion.startRotation + (event.clientX - motion.startX) * 0.18;
    };
    const onPointerUp = () => {
      motion.dragging = false;
      container.classList.remove("is-dragging");
      window.setTimeout(() => { motion.moved = false; }, 80);
    };
    const onWheel = (event) => {
      event.preventDefault();
      motion.targetRotation += Math.max(-80, Math.min(80, event.deltaY || event.deltaX || 0)) * -0.05;
    };
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        motion.targetRotation -= 360 / cards.length;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        motion.targetRotation += 360 / cards.length;
      }
      if (event.key === "Escape") closeOverlay();
    };

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        if (motion.dragging || motion.moved) return;
        openCard(card);
      });
    });
    close?.addEventListener("click", closeOverlay);
    overlay?.addEventListener("click", (event) => {
      if (event.target === overlay) closeOverlay();
    });
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", layout);

    layout();
    apply();
    motion.frame = window.requestAnimationFrame(tick);

    threeDCarouselCleanups.push(() => {
      window.cancelAnimationFrame(motion.frame);
      close?.removeEventListener("click", closeOverlay);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", layout);
      if (overlay) {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
      }
      if (expanded) expanded.innerHTML = "";
    });
  });
}

function cleanupThreeDCarousels() {
  threeDCarouselCleanups.forEach((cleanup) => cleanup());
  threeDCarouselCleanups = [];
}

function initStellarGalleries(root, { autoPlay = true } = {}) {
  $$(".stellar-gallery", root).forEach((container) => {
    const galaxy = $(".stellar-galaxy", container);
    const cards = $$(".stellar-card", container);
    const overlay = $(".stellar-overlay", container);
    const expanded = $(".stellar-expanded", container);
    const close = $(".stellar-close", container);
    if (!galaxy || !cards.length) return;
    const overlayHome = overlay?.parentNode || null;
    let overlayCloseTimer = 0;

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const motion = {
      rotX: 0,
      rotY: 0,
      targetX: 0,
      targetY: 0,
      zoom: 1,
      targetZoom: 1,
      frame: 0,
      last: performance.now(),
      dragging: false,
      moved: false,
      startX: 0,
      startY: 0,
      startRotX: 0,
      startRotY: 0,
      active: true
    };

    const points = cards.map((card, index) => {
      const count = Math.max(cards.length, 1);
      if (index === 0) {
        return { card, x: 0, y: 0, z: 1, view: null };
      }
      const spreadCount = Math.max(count - 1, 1);
      const spreadIndex = index - 1;
      const y = spreadCount === 1 ? 0 : 1 - (spreadIndex / (spreadCount - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = spreadIndex * goldenAngle + Math.PI * 0.42;
      let x = Math.cos(theta) * radiusAtY;
      let z = Math.sin(theta) * radiusAtY;
      let py = y;
      const centerDistance = Math.hypot(x, py);
      if (z > 0.62 && centerDistance < 0.72) {
        const pushAngle = theta + Math.PI * 0.5;
        x = Math.cos(pushAngle) * 0.72;
        py = Math.sin(pushAngle) * 0.54;
        z = 0.45;
      }
      return {
        card,
        x,
        y: py,
        z,
        view: null
      };
    });
    const hoverHandlers = cards.map((card) => {
      card.dataset.zoom = card.dataset.zoom || "1";
      card.dataset.zoomCurrent = card.dataset.zoomCurrent || card.dataset.zoom;
      card.style.setProperty("--stellar-card-zoom", card.dataset.zoom);
      const enter = () => {
        card.classList.add("is-hovered");
        motion.hoveredCard = card;
      };
      const leave = () => {
        card.classList.remove("is-hovered");
        if (motion.hoveredCard === card) motion.hoveredCard = null;
      };
      card.addEventListener("pointerenter", enter);
      card.addEventListener("pointerleave", leave);
      return { card, enter, leave };
    });

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const syncZoomingState = () => {
      const isZooming = cards.some((card) => Number(card.dataset.zoom || 1) > 1.001 || Number(card.dataset.zoomCurrent || 1) > 1.001);
      container.classList.toggle("is-card-zooming", isZooming);
    };

    const zoomStellarSurface = (surface, delta, maxZoom = 4) => {
      if (!surface) return;
      const currentZoom = Number(surface.dataset.zoom || surface.style.getPropertyValue("--stellar-image-zoom") || 1);
      const nextZoom = clamp(currentZoom - delta * 0.006, 1, maxZoom);
      surface.dataset.zoom = nextZoom.toFixed(2);
      surface.style.setProperty("--stellar-image-zoom", nextZoom.toFixed(2));
      surface.classList.toggle("is-image-zoomed", nextZoom > 1.02);
    };

    const project = () => {
      const width = container.clientWidth || 1;
      const height = container.clientHeight || 1;
      const shortSide = Math.min(width, height);
      const cardWidth = clamp(shortSide * 0.168, 70, 142);
      const radiusX = clamp(width * 0.31, cardWidth * 2.85, width * 0.42);
      const radiusY = clamp(height * 0.37, cardWidth * 2.05, height * 0.46);
      const radiusZ = Math.min(radiusX, radiusY) * 0.92;
      const perspective = Math.max(700, shortSide * 1.75);
      const cameraScale = clamp(0.99 + (motion.zoom - 1) * 0.08, 0.97, 1.05);
      const sinY = Math.sin(motion.rotY);
      const cosY = Math.cos(motion.rotY);
      const sinX = Math.sin(motion.rotX);
      const cosX = Math.cos(motion.rotX);

      galaxy.style.setProperty("--stellar-card-w", `${cardWidth}px`);

      let anyZooming = false;
      const projected = points.map((point) => {
        const x1 = point.x * cosY + point.z * sinY;
        const z1 = -point.x * sinY + point.z * cosY;
        const y1 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const depth = (z2 + 1) / 2;
        const perspectiveScale = clamp(perspective / (perspective - z2 * radiusZ * 0.68), 0.66, 1.26);
        const x = x1 * radiusX * perspectiveScale * cameraScale;
        const y = y1 * radiusY * perspectiveScale * cameraScale;
        const z = z2 * radiusZ * 0.52;
        const scale = clamp((0.62 + depth * 0.36) * perspectiveScale * motion.zoom, 0.5, 1.18);
        const opacity = clamp(0.34 + depth * 0.66, 0.34, 1);
        const blur = clamp((1 - depth) * 1.25, 0, 1.1);
        const brightness = clamp(0.56 + depth * 0.52, 0.56, 1.08);
        const tiltY = clamp(-x1 * 10, -11, 11);
        const tiltX = clamp(y1 * 7, -8, 8);
        const targetCardZoom = Number(point.card.dataset.zoom || 1);
        let zoomAmount = Number(point.card.dataset.zoomCurrent || targetCardZoom);
        zoomAmount += (targetCardZoom - zoomAmount) * 0.14;
        if (Math.abs(targetCardZoom - zoomAmount) < 0.0015) zoomAmount = targetCardZoom;
        if (targetCardZoom <= 1.001 && zoomAmount <= 1.003) zoomAmount = 1;
        point.card.dataset.zoomCurrent = zoomAmount.toFixed(3);
        point.card.style.setProperty("--stellar-card-zoom", zoomAmount.toFixed(3));

        const zoomed = zoomAmount > 1.001 || targetCardZoom > 1.001;
        point.card.classList.toggle("is-image-zoomed", zoomed);
        if (!zoomed) {
          point.card.style.removeProperty("--stellar-focus-w");
        }
        if (zoomed) anyZooming = true;
        const zoomProgressRaw = clamp((zoomAmount - 1) / 1.45, 0, 1);
        const zoomProgress = zoomProgressRaw * zoomProgressRaw * (3 - 2 * zoomProgressRaw);
        const displayX = zoomed ? x * (1 - zoomProgress * 0.28) : x;
        const displayY = zoomed ? y * (1 - zoomProgress * 0.28) : y;
        const displayZ = zoomed ? z + zoomProgress * 185 : z;
        const displayTiltY = zoomed ? tiltY * (1 - zoomProgress * 0.35) : tiltY;
        const displayTiltX = zoomed ? tiltX * (1 - zoomProgress * 0.35) : tiltX;
        const renderScale = zoomed ? 1 + zoomProgress * 1.75 : 1;
        const renderWidth = cardWidth * renderScale;
        const displayScale = scale;
        const hiddenBackLayer = !zoomed && !anyZooming && depth < 0.36;

        return {
          point,
          renderWidth,
          displayX,
          displayY,
          displayZ,
          displayTiltY,
          displayTiltX,
          displayScale,
          hiddenBackLayer,
          zoomed,
          opacity,
          brightness,
          blur,
          depth
        };
      });
      const margin = clamp(cardWidth * 0.14, 10, 18);
      projected.forEach((item) => {
        item.boxW = item.renderWidth * item.displayScale * 1.1;
        item.boxH = item.boxW * 1.25;
        item.targetX = item.zoomed ? item.displayX : item.displayX;
        item.targetY = item.zoomed ? item.displayY : item.displayY;
        if (!item.zoomed) {
          const maxX = Math.max(0, width * 0.5 - item.boxW * 0.5 - margin);
          const maxY = Math.max(0, height * 0.5 - item.boxH * 0.5 - margin);
          item.targetX = clamp(item.targetX, -maxX, maxX);
          item.targetY = clamp(item.targetY, -maxY, maxY);
        }
      });

      const keptVisible = [];
      const maxVisible = width < 700 || height < 430 ? 9 : 11;
      projected
        .filter((item) => !item.zoomed)
        .sort((a, b) => b.depth - a.depth)
        .forEach((item) => {
          if (!anyZooming && keptVisible.length >= maxVisible) {
            item.hiddenBackLayer = true;
            return;
          }
          const collides = keptVisible.some((kept) => {
            const overlapX = (item.boxW + kept.boxW) * 0.5 + margin - Math.abs(item.targetX - kept.targetX);
            const overlapY = (item.boxH + kept.boxH) * 0.5 + margin - Math.abs(item.targetY - kept.targetY);
            return overlapX > 0 && overlapY > 0;
          });
          if (collides) {
            item.hiddenBackLayer = true;
          } else {
            keptVisible.push(item);
          }
        });

      projected.forEach((item) => {
        const target = {
          x: item.zoomed ? item.displayX : item.targetX,
          y: item.zoomed ? item.displayY : item.targetY,
          z: item.displayZ,
          tiltX: item.displayTiltX,
          tiltY: item.displayTiltY,
          scale: item.displayScale,
          renderWidth: item.renderWidth,
          opacity: item.hiddenBackLayer ? 0 : item.zoomed ? 1 : item.opacity,
          brightness: item.brightness,
          blur: item.blur,
          depth: item.depth
        };
        const view = item.point.view || {};
        const ease = !view.ready ? 1 : item.zoomed ? 0.22 : motion.dragging ? 0.24 : 0.18;
        const mix = (key) => {
          view[key] = view.ready ? view[key] + (target[key] - view[key]) * ease : target[key];
        };
        mix("x");
        mix("y");
        mix("z");
        mix("tiltX");
        mix("tiltY");
        mix("scale");
        mix("renderWidth");
        mix("opacity");
        mix("brightness");
        mix("blur");
        mix("depth");
        view.ready = true;
        item.point.view = view;
        item.point.card.style.setProperty("--stellar-card-render-w", `${view.renderWidth.toFixed(2)}px`);
        item.point.card.style.transform = `translate3d(calc(-50% + ${view.x.toFixed(2)}px), calc(-50% + ${view.y.toFixed(2)}px), ${view.z.toFixed(2)}px) rotateY(${view.tiltY.toFixed(2)}deg) rotateX(${view.tiltX.toFixed(2)}deg) scale(${view.scale.toFixed(3)})`;
        item.point.card.style.opacity = view.opacity.toFixed(3);
        item.point.card.style.pointerEvents = item.hiddenBackLayer ? "none" : "auto";
        item.point.card.style.filter = item.zoomed ? "none" : `brightness(${view.brightness.toFixed(3)}) blur(${view.blur.toFixed(2)}px)`;
        item.point.card.style.zIndex = item.zoomed ? "9000" : String(100 + Math.round(view.depth * 1400));
      });
      container.classList.toggle("is-card-zooming", anyZooming);
    };

    const openCard = (card) => {
      if (!overlay || !expanded) return;
      const surface = $(".stellar-card-surface", card);
      if (!surface) return;
      motion.active = false;
      window.clearTimeout(overlayCloseTimer);
      card.classList.remove("is-hovered");
      expanded.innerHTML = "";
      const clone = surface.cloneNode(true);
      const currentZoom = Number(card.dataset.zoom || 1);
      clone.dataset.zoom = "1";
      clone.style.setProperty("--stellar-card-zoom", "1");
      clone.style.setProperty("--stellar-image-zoom", Math.max(1, currentZoom).toFixed(2));
      clone.classList.toggle("is-image-zoomed", currentZoom > 1.02);
      expanded.appendChild(clone);
      if (overlay.parentNode !== document.body) {
        document.body.appendChild(overlay);
      }
      overlay.classList.add("is-preparing");
      overlay.setAttribute("aria-hidden", "false");
      window.requestAnimationFrame(() => {
        overlay.classList.remove("is-preparing");
        overlay.classList.add("is-open");
      });
    };

    const closeOverlay = () => {
      if (!overlay || !expanded) return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      window.clearTimeout(overlayCloseTimer);
      overlayCloseTimer = window.setTimeout(() => {
        expanded.innerHTML = "";
        if (overlayHome?.isConnected && overlay.parentNode !== overlayHome) {
          overlayHome.appendChild(overlay);
        }
        motion.active = true;
      }, 340);
    };

    const tick = (now) => {
      const delta = Math.min(48, now - motion.last);
      motion.last = now;
      motion.rotX += (motion.targetX - motion.rotX) * 0.11;
      motion.rotY += (motion.targetY - motion.rotY) * 0.11;
      motion.zoom += (motion.targetZoom - motion.zoom) * 0.13;
      project();
      motion.frame = window.requestAnimationFrame(tick);
    };

    const onPointerDown = (event) => {
      motion.dragging = true;
      motion.moved = false;
      motion.startX = event.clientX;
      motion.startY = event.clientY;
      motion.startRotX = motion.targetX;
      motion.startRotY = motion.targetY;
      container.classList.add("is-dragging");
      container.setPointerCapture?.(event.pointerId);
    };
    const onPointerMove = (event) => {
      if (!motion.dragging) return;
      const dx = event.clientX - motion.startX;
      const dy = event.clientY - motion.startY;
      if (Math.sqrt(dx * dx + dy * dy) > 10) motion.moved = true;
      motion.targetY = motion.startRotY + dx * 0.0075;
      motion.targetX = motion.startRotX - dy * 0.0062;
    };
    const onPointerUp = () => {
      motion.dragging = false;
      container.classList.remove("is-dragging");
      window.setTimeout(() => { motion.moved = false; }, 90);
    };
    const onWheel = (event) => {
      event.preventDefault();
      const hoveredCard = event.target.closest(".stellar-card") || motion.hoveredCard;
      if (hoveredCard && container.contains(hoveredCard)) {
        const delta = Math.max(-120, Math.min(120, event.deltaY || 0));
        const currentZoom = Number(hoveredCard.dataset.zoom || 1);
        const nextZoom = clamp(currentZoom - delta * 0.0065, 1, 2.45);
        cards.forEach((card) => {
          if (card === hoveredCard) return;
          card.dataset.zoom = "1";
        });
        hoveredCard.dataset.zoom = nextZoom.toFixed(2);
        hoveredCard.style.setProperty("--stellar-image-zoom", "1");
        syncZoomingState();
        return;
      }
      motion.targetZoom = clamp(motion.targetZoom - Math.max(-120, Math.min(120, event.deltaY || 0)) * 0.0018, 0.82, 1.45);
    };
    const onOverlayWheel = (event) => {
      if (!overlay?.classList.contains("is-open")) return;
      const surface = $(".stellar-card-surface", expanded);
      if (!surface) return;
      event.preventDefault();
      const delta = Math.max(-120, Math.min(120, event.deltaY || 0));
      zoomStellarSurface(surface, delta, 2.75);
    };
    const onClick = (event) => {
      const card = event.target.closest(".stellar-card");
      if (!card || !container.contains(card)) return;
      if (motion.dragging || motion.moved) return;
      openCard(card);
    };
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        motion.targetY += Math.PI / 8;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        motion.targetY -= Math.PI / 8;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        motion.targetX -= 0.18;
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        motion.targetX += 0.18;
      }
      if (event.key === "Escape") closeOverlay();
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("click", onClick);
    container.addEventListener("keydown", onKeyDown);
    overlay?.addEventListener("wheel", onOverlayWheel, { passive: false });
    close?.addEventListener("click", closeOverlay);
    overlay?.addEventListener("click", (event) => {
      if (event.target === overlay) closeOverlay();
    });
    window.addEventListener("resize", project);

    project();
    motion.frame = window.requestAnimationFrame(tick);

    stellarGalleryCleanups.push(() => {
      window.cancelAnimationFrame(motion.frame);
      window.clearTimeout(overlayCloseTimer);
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("click", onClick);
      container.removeEventListener("keydown", onKeyDown);
      overlay?.removeEventListener("wheel", onOverlayWheel);
      hoverHandlers.forEach(({ card, enter, leave }) => {
        card.removeEventListener("pointerenter", enter);
        card.removeEventListener("pointerleave", leave);
        card.classList.remove("is-hovered");
        card.classList.remove("is-image-zoomed");
      });
      container.classList.remove("is-card-zooming");
      close?.removeEventListener("click", closeOverlay);
      window.removeEventListener("resize", project);
      if (overlay) {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        if (overlayHome?.isConnected && overlay.parentNode !== overlayHome) {
          overlayHome.appendChild(overlay);
        } else if (!overlayHome?.isConnected && overlay.parentNode === document.body) {
          overlay.remove();
        }
      }
      if (expanded) expanded.innerHTML = "";
    });
  });
}

function cleanupStellarGalleries() {
  stellarGalleryCleanups.forEach((cleanup) => cleanup());
  stellarGalleryCleanups = [];
}

function initMasonryGalleries(root) {
  $$(".masonry-gallery", root).forEach((gallery) => {
    const cards = $$("[data-masonry-card]", gallery);
    if (!cards.length) return;

    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, {
      root: gallery,
      threshold: 0.16,
      rootMargin: "80px 0px"
    });

    cards.forEach((card) => observer.observe(card));
    masonryGalleryCleanups.push(() => observer.disconnect());
  });
}

function cleanupMasonryGalleries() {
  masonryGalleryCleanups.forEach((cleanup) => cleanup());
  masonryGalleryCleanups = [];
}

function initImageGalleries(root, { autoPlay = true } = {}) {
  $$(".image-gallery", root).forEach((gallery) => {
    const items = $$(".image-gallery-item", gallery);
    if (!items.length) return;

    const speed = state.hero.speed === "fast" ? 0.18 : state.hero.speed === "slow" ? 0.055 : 0.1;
    const motion = {
      rotation: 0,
      targetRotation: 0,
      frame: 0,
      dragging: false,
      moved: false,
      startX: 0,
      startY: 0,
      startRotation: 0
    };

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const layout = () => {
      const rect = gallery.getBoundingClientRect();
      const width = rect.width || 1;
      const height = rect.height || 1;
      const count = items.length;
      const cardWidth = clamp(Math.min(width * 0.145, height * 0.25), 64, 150);
      const cardHeight = cardWidth;
      const path = {
        x0: width * 0.05,
        y0: height * 0.86,
        x1: width * 0.5,
        y1: height * 0.06,
        x2: width * 0.95,
        y2: height * 0.86
      };
      const pathLength = Math.hypot(path.x1 - path.x0, path.y1 - path.y0) + Math.hypot(path.x2 - path.x1, path.y2 - path.y1);
      const step = clamp((cardWidth * 1.64) / Math.max(pathLength, 1), 0.17, 0.24);
      const trackSpan = Math.max(1.32, count * step);

      gallery.style.setProperty("--ig-card-w", `${cardWidth.toFixed(2)}px`);
      gallery.style.setProperty("--ig-card-h", `${cardHeight.toFixed(2)}px`);

      items.forEach((item, index) => {
        const progress = ((index * step + motion.rotation / 360) % trackSpan + trackSpan) % trackSpan;
        const isOnPath = progress <= 1;
        const visibleProgress = clamp(progress, 0, 1);
        const inv = 1 - visibleProgress;
        const absoluteX = inv * inv * path.x0 + 2 * inv * visibleProgress * path.x1 + visibleProgress * visibleProgress * path.x2;
        const absoluteY = inv * inv * path.y0 + 2 * inv * visibleProgress * path.y1 + visibleProgress * visibleProgress * path.y2;
        const dx = 2 * inv * (path.x1 - path.x0) + 2 * visibleProgress * (path.x2 - path.x1);
        const dy = 2 * inv * (path.y1 - path.y0) + 2 * visibleProgress * (path.y2 - path.y1);
        const arcPeak = 1 - Math.abs(visibleProgress - 0.5) * 2;
        const x = absoluteX - width / 2;
        const y = absoluteY - height / 2;
        const scale = 0.84 + arcPeak * 0.1;
        const opacity = isOnPath ? 1 : 0;
        const rotation = Math.atan2(dy, dx) * 180 / Math.PI * 0.42;
        item.style.setProperty("--ig-x", `${x.toFixed(2)}px`);
        item.style.setProperty("--ig-y", `${y.toFixed(2)}px`);
        item.style.setProperty("--ig-rotate", `${rotation.toFixed(2)}deg`);
        item.style.setProperty("--ig-scale", scale.toFixed(3));
        item.style.setProperty("--ig-opacity", opacity.toFixed(3));
        item.style.zIndex = String(Math.round(1000 - absoluteY));
      });
    };

    const tick = () => {
      if (autoPlay && !motion.dragging) motion.targetRotation += speed;
      motion.rotation += (motion.targetRotation - motion.rotation) * 0.11;
      layout();
      motion.frame = window.requestAnimationFrame(tick);
    };

    const onPointerDown = (event) => {
      motion.dragging = true;
      motion.moved = false;
      motion.startX = event.clientX;
      motion.startY = event.clientY;
      motion.startRotation = motion.targetRotation;
      gallery.classList.add("is-dragging");
      gallery.setPointerCapture?.(event.pointerId);
    };
    const onPointerMove = (event) => {
      if (!motion.dragging) return;
      const dx = event.clientX - motion.startX;
      const dy = event.clientY - motion.startY;
      if (Math.hypot(dx, dy) > 4) motion.moved = true;
      motion.targetRotation = motion.startRotation + dx * 0.22 + dy * 0.08;
    };
    const onPointerUp = () => {
      motion.dragging = false;
      gallery.classList.remove("is-dragging");
      window.setTimeout(() => { motion.moved = false; }, 80);
    };
    const onWheel = (event) => {
      event.preventDefault();
      motion.targetRotation += Math.max(-120, Math.min(120, event.deltaY || event.deltaX || 0)) * 0.12;
    };
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        motion.targetRotation += 360 / items.length;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        motion.targetRotation -= 360 / items.length;
      }
    };

    gallery.addEventListener("pointerdown", onPointerDown);
    gallery.addEventListener("pointermove", onPointerMove);
    gallery.addEventListener("pointerup", onPointerUp);
    gallery.addEventListener("pointercancel", onPointerUp);
    gallery.addEventListener("wheel", onWheel, { passive: false });
    gallery.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", layout);
    layout();
    motion.frame = window.requestAnimationFrame(tick);

    imageGalleryCleanups.push(() => {
      window.cancelAnimationFrame(motion.frame);
      gallery.removeEventListener("pointerdown", onPointerDown);
      gallery.removeEventListener("pointermove", onPointerMove);
      gallery.removeEventListener("pointerup", onPointerUp);
      gallery.removeEventListener("pointercancel", onPointerUp);
      gallery.removeEventListener("wheel", onWheel);
      gallery.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", layout);
    });
  });
}

function cleanupImageGalleries() {
  imageGalleryCleanups.forEach((cleanup) => cleanup());
  imageGalleryCleanups = [];
}

function clamp01(value) {
  return Math.min(1, Math.max(0, Number(value) || 0));
}

function cleanupVerticalImageStacks() {
  verticalStackCleanups.forEach((cleanup) => cleanup());
  verticalStackCleanups = [];
}

function cleanupCircularGalleries() {
  circularGalleryCleanups.forEach((cleanup) => cleanup());
  circularGalleryCleanups = [];
}

function initCircularGalleries(root, { autoPlay = true } = {}) {
  $$(".circular-gallery", root).forEach((container) => {
    const cleanup = createCircularGallery(container, { autoPlay });
    circularGalleryCleanups.push(cleanup);
  });
}

function createCircularGallery(container, { autoPlay = true } = {}) {
  const items = $$(".circular-gallery-item", container);
  if (!items.length) return () => {};

  const scroll = { current: 0, target: 0, last: 0, ease: 0.06 };
  const pointer = { down: false, start: 0, position: 0 };
  const speed = state.hero.speed === "fast" ? 1.1 : state.hero.speed === "slow" ? 0.34 : 0.62;
  let frame = 0;
  let itemWidth = 190;
  let spacing = 226;
  let total = spacing * items.length;

  const resize = () => {
    const width = container.clientWidth || 1;
    itemWidth = Math.max(110, Math.min(164, width * 0.17));
    spacing = itemWidth * 1.14;
    total = spacing * items.length;
    items.forEach((item) => {
      item.style.width = `${itemWidth}px`;
      item.style.height = `${itemWidth * 1.32}px`;
    });
  };

  const wrap = (value) => {
    const wrapped = ((value % total) + total) % total;
    return wrapped - total / 2;
  };

  const render = () => {
    resize();
    if (autoPlay && !pointer.down) scroll.target += speed;
    scroll.current = lerp(scroll.current, scroll.target, scroll.ease);
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    const half = width / 2;
    const safeHalf = Math.max(120, half - itemWidth * 1.05);
    const bend = Math.max(104, width * 0.24);
    const topBase = height * 0.58;
    const cardHeight = itemWidth * 1.32;
    const cardDiagonalHalf = Math.sqrt(itemWidth * itemWidth + cardHeight * cardHeight) * 0.5;

    items.forEach((item, index) => {
      const x = wrap(index * spacing - scroll.current);
      const displayX = clamp(x * 0.72, -safeHalf, safeHalf);
      const norm = Math.min(Math.abs(displayX) / Math.max(safeHalf, 1), 1);
      const scale = 1 - norm * 0.22;
      const rotation = (displayX / Math.max(safeHalf, 1)) * 20;
      const rawY = Math.pow(norm, 2.15) * bend - bend * 0.54;
      const safeY = clamp(
        rawY,
        -topBase + cardDiagonalHalf * scale + 12,
        height - topBase - cardDiagonalHalf * scale - 12
      );
      const opacity = 0.25 + (1 - norm) * 0.75;
      const brightness = 0.48 + (1 - norm) * 0.58;
      const z = Math.round((1 - norm) * 100);
      item.style.transform = `translate3d(calc(-50% + ${displayX}px), calc(-50% + ${safeY}px), 0) rotate(${rotation}deg) scale(${scale})`;
      item.style.opacity = opacity.toFixed(3);
      item.style.filter = `brightness(${brightness.toFixed(3)}) saturate(${(0.82 + (1 - norm) * 0.18).toFixed(3)})`;
      item.style.zIndex = String(z);
    });

    scroll.last = scroll.current;
    frame = window.requestAnimationFrame(render);
  };

  const onPointerDown = (event) => {
    pointer.down = true;
    pointer.start = event.touches ? event.touches[0].clientX : event.clientX;
    pointer.position = scroll.target;
    container.classList.add("is-dragging");
  };
  const onPointerMove = (event) => {
    if (!pointer.down) return;
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    scroll.target = pointer.position + (pointer.start - x) * 0.9;
  };
  const onPointerUp = () => {
    pointer.down = false;
    container.classList.remove("is-dragging");
  };
  const onWheel = (event) => {
    if (!container.matches(":hover")) return;
    event.preventDefault();
    scroll.target += (event.deltaY || event.deltaX) * 0.32;
  };
  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scroll.target += spacing;
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scroll.target -= spacing;
    }
    if (event.key === "Home") {
      event.preventDefault();
      scroll.target = 0;
    }
  };

  container.addEventListener("mousedown", onPointerDown);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", onPointerUp);
  container.addEventListener("touchstart", onPointerDown, { passive: true });
  window.addEventListener("touchmove", onPointerMove, { passive: true });
  window.addEventListener("touchend", onPointerUp);
  container.addEventListener("wheel", onWheel, { passive: false });
  container.addEventListener("keydown", onKeyDown);
  window.addEventListener("resize", resize);
  resize();
  render();

  return () => {
    window.cancelAnimationFrame(frame);
    container.removeEventListener("mousedown", onPointerDown);
    window.removeEventListener("mousemove", onPointerMove);
    window.removeEventListener("mouseup", onPointerUp);
    container.removeEventListener("touchstart", onPointerDown);
    window.removeEventListener("touchmove", onPointerMove);
    window.removeEventListener("touchend", onPointerUp);
    container.removeEventListener("wheel", onWheel);
    container.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("resize", resize);
  };
}

async function exportHTML() {
  const doc = await buildPublishedDocument({ forcePlay: true });
  const blob = new Blob([doc], { type: "text/html;charset=utf-8" });
  downloadBlob(blob, `portfolio-site-${new Date().toISOString().slice(0, 10)}.html`);
}

function exportSelected(format = "html") {
  if (format === "jpg") {
    exportLongJPG();
    return;
  }
  exportHTML();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

async function exportLongJPG() {
  const exportButton = $("#exportBtn");
  const previousLabel = exportButton?.textContent;
  if (exportButton) {
    exportButton.disabled = true;
    exportButton.textContent = "生成中";
  }
  const previousHeroRenderMode = heroRenderMode;
  const previousHeroSnapshot = currentHeroExportSnapshot;
  try {
    currentHeroExportSnapshot = createHeroSnapshot();
    heroRenderMode = HERO_RENDER_MODES.IMAGE_EXPORT;
    document.documentElement.classList.add(HERO_RENDER_MODES.IMAGE_EXPORT);
    await waitForExportLayout(document);
    const blob = await renderLongJPGFromPreviewDOM();
    if (!blob) throw new Error("DOM export returned empty blob");
    downloadBlob(blob, `portfolio-long-${new Date().toISOString().slice(0, 10)}.jpg`);
  } catch (error) {
    console.error("长图 DOM 导出失败", error);
    alert("长图生成失败，请刷新页面后重试。");
  } finally {
    document.documentElement.classList.remove(HERO_RENDER_MODES.IMAGE_EXPORT);
    heroRenderMode = previousHeroRenderMode;
    currentHeroExportSnapshot = previousHeroSnapshot;
    if (exportButton) {
      exportButton.disabled = false;
      exportButton.textContent = previousLabel || "导出";
    }
  }
}

async function exportLongJPGLegacyCanvas() {
  const canvas = document.createElement("canvas");
  const width = 1440;
  const sectionHeight = Math.round(width / exportPageAspectRatio());
  canvas.width = width;
  canvas.height = sectionHeight * 4;
  const ctx = canvas.getContext("2d");
  const palette = exportPalette();
  await drawExportHero(ctx, 0, width, sectionHeight, palette);
  await drawExportAbout(ctx, sectionHeight, width, sectionHeight, palette);
  await drawExportWorks(ctx, sectionHeight * 2, width, sectionHeight, palette);
  await drawExportContact(ctx, sectionHeight * 3, width, sectionHeight, palette);
  const blob = await canvasToBlobAsync(canvas, "image/jpeg", 0.92);
  if (!blob) throw new Error("Canvas export returned empty blob");
  downloadBlob(blob, `portfolio-long-${new Date().toISOString().slice(0, 10)}.jpg`);
}

async function renderLongJPGFromPreviewDOM() {
  const viewport = exportViewportMetrics();
  const width = viewport.width;
  const sectionHeight = viewport.height;
  const snapshot = currentHeroExportSnapshot || createHeroSnapshot();
  const source = await createLongJPGDOMSource(width, sectionHeight, snapshot);
  try {
    return await renderElementToJPGBlob(source.root, width, source.height, 0.92, { windowHeight: sectionHeight });
  } finally {
    source.cleanup();
  }
}

function exportViewportMetrics() {
  const preview = $("#sitePreview");
  const rect = preview?.getBoundingClientRect();
  const width = Math.max(320, Math.round(rect?.width || document.documentElement.clientWidth || window.innerWidth || 1440));
  const height = Math.max(320, Math.round(rect?.height || window.innerHeight || Math.round(width / exportPageAspectRatio())));
  return {
    width,
    height,
    innerWidth: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    devicePixelRatio: window.devicePixelRatio || 1,
    visualScale: window.visualViewport?.scale || 1
  };
}

async function createLongJPGDOMSource(width, sectionHeight, snapshot = createHeroSnapshot()) {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  const previousRenderContext = renderContext;
  const previousMode = state.mode;
  const previousHeroRenderMode = heroRenderMode;
  const previousHeroSnapshot = currentHeroExportSnapshot;
  let html = "";
  try {
    renderContext = "published";
    state.mode = "preview";
    heroRenderMode = HERO_RENDER_MODES.IMAGE_EXPORT;
    currentHeroExportSnapshot = snapshot;
    html = renderAllSections();
  } finally {
    renderContext = previousRenderContext;
    state.mode = previousMode;
    heroRenderMode = previousHeroRenderMode;
    currentHeroExportSnapshot = previousHeroSnapshot;
  }

  const root = document.createElement("div");
  root.className = `site-preview is-full-preview export-dom-capture ${HERO_RENDER_MODES.IMAGE_EXPORT} preview-bg-${heroBackground}`;
  root.style.cssText = `
    position: fixed;
    left: -20000px;
    top: 0;
    width: ${width}px;
    min-height: ${sectionHeight * 4}px;
    height: auto;
    overflow: visible;
    pointer-events: none;
    background: ${BG_MAP[heroBackground]};
    --anim-duration: ${SPEED_MAP[state.hero.speed]};
    --preview-height: ${sectionHeight}px;
    --preview-bg: ${BG_MAP[heroBackground]};
  `;
  root.innerHTML = html;
  document.body.appendChild(root);

  const cleanupStart = {
    vertical: verticalStackCleanups.length,
    zoom: zoomParallaxCleanups.length,
    photo: photoOrbitCleanups.length,
    scroll: scrollMorphCleanups.length,
    trail: imageTrailCleanups.length,
    threeD: threeDCarouselCleanups.length,
    stellar: stellarGalleryCleanups.length,
    masonry: masonryGalleryCleanups.length,
    image: imageGalleryCleanups.length,
    circular: circularGalleryCleanups.length
  };
  initVerticalImageStacks(root);
  initZoomParallax(root);
  initPhotoOrbits(root);
  initScrollMorphs(root);
  initImageTrails(root);
  initThreeDCarousels(root, { autoPlay: false });
  initStellarGalleries(root, { autoPlay: false });
  initMasonryGalleries(root);
  initImageGalleries(root, { autoPlay: false });
  initCircularGalleries(root, { autoPlay: false });
  prepareExportHeroCapture(root);
  $$(".blur-text, .split-text, .masonry-gallery-card, .project-detail-visual, .gallery-item", root).forEach((node) => node.classList.add("is-visible"));
  await waitForExportLayout(root);
  const height = Math.max(sectionHeight * 4, Math.ceil(root.scrollHeight), Math.ceil(root.querySelector(".published-site")?.scrollHeight || 0));
  root.style.height = `${height}px`;
  const cleanups = [
    ...verticalStackCleanups.splice(cleanupStart.vertical),
    ...zoomParallaxCleanups.splice(cleanupStart.zoom),
    ...photoOrbitCleanups.splice(cleanupStart.photo),
    ...scrollMorphCleanups.splice(cleanupStart.scroll),
    ...imageTrailCleanups.splice(cleanupStart.trail),
    ...threeDCarouselCleanups.splice(cleanupStart.threeD),
    ...stellarGalleryCleanups.splice(cleanupStart.stellar),
    ...masonryGalleryCleanups.splice(cleanupStart.masonry),
    ...imageGalleryCleanups.splice(cleanupStart.image),
    ...circularGalleryCleanups.splice(cleanupStart.circular)
  ];
  return {
    root,
    height,
    cleanup() {
      cleanups.forEach((cleanup) => cleanup?.());
      root.remove();
    }
  };
}

async function renderExportSectionToCanvas(section, width, height) {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  const holder = document.createElement("div");
  holder.className = `site-preview is-full-preview export-dom-capture export-single-section preview-bg-${heroBackground}`;
  holder.style.cssText = `
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: ${width}px;
    height: ${height}px;
    min-height: ${height}px;
    overflow: hidden;
    pointer-events: none;
    opacity: 1;
    background: ${BG_MAP[heroBackground]};
    --anim-duration: ${SPEED_MAP[state.hero.speed]};
    --preview-height: ${height}px;
    --preview-bg: ${BG_MAP[heroBackground]};
  `;
  const site = document.createElement("div");
  site.className = `published-site editor-preview-stack preview-bg-${heroBackground}`;
  site.style.width = "100%";
  site.style.minHeight = `${height}px`;
  const clone = section.cloneNode(true);
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.minHeight = `${height}px`;
  clone.style.overflow = "hidden";
  clone.style.margin = "0";
  site.appendChild(clone);
  holder.appendChild(site);
  document.body.appendChild(holder);
  try {
    await waitForImages(holder);
    await nextFrame();
    await nextFrame();
    const canvas = await renderElementToCanvasWithHtml2Canvas(holder, width, height);
    return canvas || await renderElementToCanvasWithForeignObject(holder, width, height);
  } catch (error) {
    console.error("单屏长图导出失败", error);
    return null;
  } finally {
    holder.remove();
  }
}

async function renderElementToJPGBlob(element, width, height, quality = 0.92, options = {}) {
  const htmlCanvasBlob = await renderElementWithHtml2Canvas(element, width, height, quality, options);
  if (htmlCanvasBlob) return htmlCanvasBlob;
  const canvas = await renderElementToCanvasWithForeignObject(element, width, height);
  if (!canvas) return null;
  return await canvasToBlobAsync(canvas, "image/jpeg", quality);
}

async function renderElementToCanvasWithForeignObject(element, width, height) {
  const css = await collectStylesheetText();
  const clone = element.cloneNode(true);
  clone.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
  clone.style.position = "relative";
  clone.style.left = "0";
  clone.style.top = "0";
  clone.style.width = `${width}px`;
  clone.style.height = `${height}px`;
  clone.style.minHeight = `${height}px`;
  clone.style.overflow = "hidden";
  clone.style.pointerEvents = "none";
  const markup = new XMLSerializer().serializeToString(clone);
  const safeCss = css.replace(/]]>/g, "]]]]><![CDATA[>");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <foreignObject width="100%" height="100%">
      <style xmlns="http://www.w3.org/1999/xhtml"><![CDATA[${safeCss}]]></style>
      ${markup}
    </foreignObject>
  </svg>`;
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const image = await loadImageElement(url);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d", { alpha: false });
    ctx.fillStyle = exportPalette().bg;
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(image, 0, 0, width, height);
    return canvas;
  } finally {
    URL.revokeObjectURL(url);
  }
}

async function renderElementWithHtml2Canvas(element, width, height, quality = 0.92, options = {}) {
  let previousStyle = null;
  try {
    await ensureHtml2Canvas();
    if (typeof window.html2canvas !== "function") return null;
    previousStyle = element.getAttribute("style") || "";
    element.style.left = "0";
    element.style.top = "0";
    element.style.zIndex = "-1";
    element.style.opacity = "1";
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.minHeight = `${height}px`;
    element.style.overflow = "hidden";
    await nextFrame();
    const rendered = await renderElementToCanvasWithHtml2Canvas(element, width, height, options);
    if (!rendered) return null;
    return await canvasToBlobAsync(normalizeRenderedCanvas(rendered, width, height), "image/jpeg", quality);
  } catch (error) {
    console.error("html2canvas 导出失败", error);
    return null;
  } finally {
    if (previousStyle != null) element.setAttribute("style", previousStyle);
  }
}

async function renderElementToCanvasWithHtml2Canvas(element, width, height, options = {}) {
  await ensureHtml2Canvas();
  if (typeof window.html2canvas !== "function") return null;
  const rendered = await window.html2canvas(element, {
    backgroundColor: exportPalette().bg,
    width,
    height,
    windowWidth: width,
    windowHeight: options.windowHeight || height,
    scrollX: 0,
    scrollY: 0,
    scale: 1,
    useCORS: true,
    allowTaint: false,
    imageTimeout: 15000,
    logging: false,
    removeContainer: true,
    onclone: (clonedDocument) => prepareHtml2CanvasClone(clonedDocument)
  });
  return rendered ? normalizeRenderedCanvas(rendered, width, height) : null;
}

function prepareHtml2CanvasClone(clonedDocument) {
  const clonedWindow = clonedDocument.defaultView;
  if (!clonedWindow) return;
  clonedDocument.documentElement.classList.add(HERO_RENDER_MODES.IMAGE_EXPORT, "html2canvas-safe");
  const properties = [
    "color",
    "backgroundColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
    "outlineColor",
    "textDecorationColor",
    "boxShadow",
    "textShadow",
    "backgroundImage",
    "fill",
    "stroke"
  ];
  clonedDocument.querySelectorAll("*").forEach((node) => {
    const computed = clonedWindow.getComputedStyle(node);
    properties.forEach((property) => {
      const value = computed[property];
      const safeValue = sanitizeCanvasCssValue(value);
      if (safeValue && safeValue !== value) {
        node.style[property] = safeValue;
      }
    });
  });
}

function sanitizeCanvasCssValue(value = "") {
  if (!value || !value.includes("color(")) return value;
  return value.replace(/color\(\s*(?:srgb|display-p3)\s+([0-9.]+%?)\s+([0-9.]+%?)\s+([0-9.]+%?)(?:\s*\/\s*([0-9.]+%?))?\s*\)/gi, (_match, r, g, b, a) => {
    const red = cssColorChannelToByte(r);
    const green = cssColorChannelToByte(g);
    const blue = cssColorChannelToByte(b);
    const alpha = cssAlphaToNumber(a);
    return alpha >= 1 ? `rgb(${red}, ${green}, ${blue})` : `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  });
}

function cssColorChannelToByte(value) {
  const text = String(value || "0").trim();
  if (text.endsWith("%")) return Math.max(0, Math.min(255, Math.round(Number.parseFloat(text) * 2.55)));
  return Math.max(0, Math.min(255, Math.round(Number.parseFloat(text) * 255)));
}

function cssAlphaToNumber(value) {
  if (value == null || value === "") return 1;
  const text = String(value).trim();
  const alpha = text.endsWith("%") ? Number.parseFloat(text) / 100 : Number.parseFloat(text);
  return Math.max(0, Math.min(1, Number.isFinite(alpha) ? alpha : 1));
}

async function waitForExportLayout(root = document) {
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready;
    } catch (error) {
      console.warn("字体等待失败，继续导出", error);
    }
  }
  await waitForImages(root);
  await nextFrame();
  await nextFrame();
}

function normalizeRenderedCanvas(rendered, width, height) {
  if (rendered.width === width && rendered.height === height) return rendered;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: false });
  ctx.fillStyle = exportPalette().bg;
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(rendered, 0, 0, width, height);
  return canvas;
}

function ensureHtml2Canvas() {
  if (typeof window.html2canvas === "function") return Promise.resolve();
  if (window.__html2canvasLoading) return window.__html2canvasLoading;
  window.__html2canvasLoading = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "html2canvas.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return window.__html2canvasLoading;
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function canvasToBlobAsync(canvas, type, quality) {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob(resolve, type, quality);
    } catch (error) {
      reject(error);
    }
  });
}

function exportPalette() {
  const ivory = normalizeHeroBackground(state.hero.background) === "ivory";
  return ivory
    ? { bg: "#f7f7f3", grid: "rgba(0,0,0,0.06)", glow: "rgba(0,0,0,0.04)", text: "#080808", muted: "rgba(8,8,8,0.58)", card: "#ffffff", card2: "#ecece6", line: "rgba(0,0,0,0.14)", accent: "#b7ff00", shadow: "rgba(0,0,0,0.14)" }
    : { bg: "#0a0a0a", grid: "rgba(255,255,255,0.05)", glow: "rgba(255,255,255,0.04)", text: "#ffffff", muted: "rgba(255,255,255,0.62)", card: "#161616", card2: "#050505", line: "rgba(255,255,255,0.14)", accent: "#b7ff00", shadow: "rgba(0,0,0,0.5)" };
}

function exportAspectRatio() {
  const ratios = {
    "16-9": 16 / 9,
    "4-3": 4 / 3,
    "1-1": 1,
    "4-5": 4 / 5,
    "9-16": 9 / 16
  };
  return ratios[state.hero.ratio] || ratios["16-9"];
}

function exportPageAspectRatio() {
  return 16 / 9;
}

function drawExportBackground(ctx, y, width, height, palette) {
  const gradient = ctx.createLinearGradient(0, y, 0, y + height);
  gradient.addColorStop(0, palette.bg);
  gradient.addColorStop(1, palette.card2);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, y, width, height);
  const glow = ctx.createRadialGradient(width / 2, y + height * 0.45, 0, width / 2, y + height * 0.45, width * 0.42);
  glow.addColorStop(0, palette.glow);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, y, width, height);
  ctx.strokeStyle = palette.grid;
  ctx.lineWidth = 1;
  for (let x = 0; x <= width; x += 32) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
  }
  for (let row = y; row <= y + height; row += 32) {
    ctx.beginPath();
    ctx.moveTo(0, row);
    ctx.lineTo(width, row);
    ctx.stroke();
  }
}

async function drawExportHero(ctx, y, width, height, palette) {
  const required = currentHeroTemplate().slots;
  const media = state.hero.media.slice(0, required);
  const loaded = await Promise.all(media.map((item) => loadCanvasImage(item?.src)));
  if (state.hero.template === "orbit") {
    drawExportBackground(ctx, y, width, height, palette);
    drawExportHeroOrbit(ctx, y, width, height, palette, media, loaded);
    return;
  }

  const drewLiveLayout = await drawExportHeroLiveLayout(ctx, y, width, height, palette);
  if (drewLiveLayout) return;

  drawExportBackground(ctx, y, width, height, palette);
  const centerX = width / 2;
  const centerY = y + height / 2;
  const count = Math.max(media.length, 1);
  const cardSize = state.hero.template === "ticker-loop" ? 128 : 190;
  media.forEach((item, index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const radiusX = state.hero.template === "ticker-loop" ? 510 : 360;
    const radiusY = state.hero.template === "ticker-loop" ? 210 : 250;
    const x = centerX + Math.cos(angle) * radiusX - cardSize / 2;
    const zDepth = (Math.sin(angle) + 1) / 2;
    const scale = 0.72 + zDepth * 0.34;
    const h = cardSize * scale;
    const w = cardSize * scale;
    const cardY = centerY + Math.sin(angle) * radiusY - h / 2;
    drawExportCard(ctx, x, cardY, w, h, loaded[index], item, palette, `Slot ${index + 1}`);
  });
}

async function drawExportHeroLiveLayout(ctx, y, width, height, palette) {
  const source = await createExportHeroSource(width, height);
  const hero = source?.hero || document.querySelector("#sitePreview .hero-preview");
  if (!hero) return false;
  const heroRect = hero.getBoundingClientRect();
  if (heroRect.width < 20 || heroRect.height < 20) {
    source?.cleanup?.();
    return false;
  }

  drawExportBackground(ctx, y, width, height, palette);
  await waitForImages(hero);
  const selectors = [
    ".media-card",
    ".circular-gallery-card",
    ".vertical-stack-card",
    ".zoom-parallax-layer",
    ".photo-orbit-surface",
    ".scroll-morph-front",
    ".image-trail-source-card",
    ".three-d-carousel-surface",
    ".stellar-card-surface",
    ".masonry-gallery-card",
    ".image-gallery-card",
    ".portfolio-gallery-card",
    ".ticker-loop-card"
  ].join(",");
  const scaleX = width / heroRect.width;
  const scaleY = height / heroRect.height;
  const nodes = $$(selectors, hero)
    .map((node, order) => {
      const rect = node.getBoundingClientRect();
      const style = getComputedStyle(node);
      const opacity = Number.parseFloat(style.opacity);
      const z = Number.parseFloat(style.zIndex);
      return {
        node,
        order,
        rect,
        opacity: Number.isFinite(opacity) ? opacity : 1,
        z: Number.isFinite(z) ? z : order
      };
    })
    .filter(({ rect, node }) => {
      const style = getComputedStyle(node);
      return rect.width > 2 && rect.height > 2 && style.visibility !== "hidden" && style.display !== "none";
    })
    .sort((a, b) => a.z === b.z ? a.order - b.order : a.z - b.z);

  if (!nodes.length) {
    source?.cleanup?.();
    return false;
  }
  const images = await Promise.all(nodes.map(({ node }) => loadCanvasImage(node.querySelector("img")?.currentSrc || node.querySelector("img")?.src)));
  nodes.forEach(({ node, rect, opacity }, index) => {
    const x = (rect.left - heroRect.left) * scaleX;
    const cardY = y + (rect.top - heroRect.top) * scaleY;
    const cardW = rect.width * scaleX;
    const cardH = rect.height * scaleY;
    const label = node.querySelector(".placeholder-mark")?.textContent?.trim() || `Slot ${index + 1}`;
    ctx.save();
    ctx.globalAlpha = opacity;
    drawExportCard(ctx, x, cardY, cardW, cardH, images[index], null, palette, label);
    ctx.restore();
  });
  source?.cleanup?.();
  return true;
}

async function createExportHeroSource(width, height) {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  const root = document.createElement("div");
  root.className = `site-preview is-full-preview export-capture preview-bg-${heroBackground}`;
  root.style.cssText = `
    position: fixed;
    left: -20000px;
    top: 0;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    pointer-events: none;
    --anim-duration: ${SPEED_MAP[state.hero.speed]};
    --preview-height: ${height}px;
    --preview-bg: ${BG_MAP[heroBackground]};
  `;
  root.innerHTML = renderHeroSection();
  document.body.appendChild(root);
  const hero = root.querySelector(".hero-preview");
  const cleanupStart = {
    vertical: verticalStackCleanups.length,
    zoom: zoomParallaxCleanups.length,
    photo: photoOrbitCleanups.length,
    scroll: scrollMorphCleanups.length,
    trail: imageTrailCleanups.length,
    threeD: threeDCarouselCleanups.length,
    stellar: stellarGalleryCleanups.length,
    masonry: masonryGalleryCleanups.length,
    image: imageGalleryCleanups.length,
    circular: circularGalleryCleanups.length
  };
  initVerticalImageStacks(root);
  initZoomParallax(root);
  initPhotoOrbits(root);
  initScrollMorphs(root);
  initImageTrails(root);
  initThreeDCarousels(root, { autoPlay: false });
  initStellarGalleries(root, { autoPlay: false });
  initMasonryGalleries(root);
  initImageGalleries(root, { autoPlay: false });
  initCircularGalleries(root, { autoPlay: false });
  prepareExportHeroCapture(root);
  const cleanups = [
    ...verticalStackCleanups.splice(cleanupStart.vertical),
    ...zoomParallaxCleanups.splice(cleanupStart.zoom),
    ...photoOrbitCleanups.splice(cleanupStart.photo),
    ...scrollMorphCleanups.splice(cleanupStart.scroll),
    ...imageTrailCleanups.splice(cleanupStart.trail),
    ...threeDCarouselCleanups.splice(cleanupStart.threeD),
    ...stellarGalleryCleanups.splice(cleanupStart.stellar),
    ...masonryGalleryCleanups.splice(cleanupStart.masonry),
    ...imageGalleryCleanups.splice(cleanupStart.image),
    ...circularGalleryCleanups.splice(cleanupStart.circular)
  ];
  await waitForImages(root);
  await nextFrame();
  await nextFrame();
  return {
    root,
    hero,
    cleanup() {
      cleanups.forEach((cleanup) => cleanup?.());
      root.remove();
    }
  };
}

function prepareExportHeroCapture(root) {
  if (state.hero.template === "masonry-gallery") {
    $$(".masonry-gallery-card", root).forEach((card) => {
      card.classList.add("is-visible");
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
      card.style.filter = "blur(0) brightness(1)";
    });
  }
  if (state.hero.template === "image-trail") {
    const layer = $(".image-trail-layer", root);
    const sources = $$(".image-trail-source-card", root);
    if (!layer || !sources.length) return;
    const points = [
      [18, 70, -8],
      [28, 57, 5],
      [39, 48, -4],
      [50, 43, 3],
      [61, 47, -6],
      [72, 56, 6],
      [82, 68, -5],
      [66, 34, 4],
      [34, 34, -3],
      [50, 62, 2]
    ];
    points.forEach(([left, top, rotate], index) => {
      const source = sources[index % sources.length].cloneNode(true);
      const item = document.createElement("div");
      item.className = "image-trail-item export-trail-item";
      item.style.cssText = `
        position:absolute;
        left:${left}%;
        top:${top}%;
        width:clamp(118px, 15vw, 190px);
        aspect-ratio:1.56 / 1;
        opacity:${index < 2 || index > 7 ? 0.62 : 1};
        transform:translate(-50%, -50%) rotate(${rotate}deg) scale(${index === 4 ? 1.08 : 1});
        animation:none;
        filter:brightness(${index === 4 ? 1.04 : 0.92});
        z-index:${20 + index};
      `;
      item.appendChild(source);
      layer.appendChild(item);
    });
  }
}

function nextFrame() {
  return new Promise((resolve) => requestAnimationFrame(() => resolve()));
}

function waitForImages(root) {
  const images = $$("img", root);
  return Promise.all(images.map((image) => {
    if (image.complete && image.naturalWidth) return Promise.resolve();
    return new Promise((resolve) => {
      image.onload = resolve;
      image.onerror = resolve;
      window.setTimeout(resolve, 1200);
    });
  }));
}

function drawExportHeroOrbit(ctx, y, width, height, palette, media, loaded) {
  const reference = [
    { index: 6, cx: 0.64, cy: 0.29, size: 0.145, opacity: 0.24, brightness: 0.54, z: 1 },
    { index: 7, cx: 0.76, cy: 0.31, size: 0.152, opacity: 0.34, brightness: 0.62, z: 2 },
    { index: 5, cx: 0.50, cy: 0.36, size: 0.135, opacity: 0.2, brightness: 0.48, z: 1 },
    { index: 4, cx: 0.36, cy: 0.44, size: 0.145, opacity: 0.26, brightness: 0.56, z: 2 },
    { index: 8, cx: 0.73, cy: 0.45, size: 0.16, opacity: 0.6, brightness: 0.76, z: 5 },
    { index: 3, cx: 0.26, cy: 0.55, size: 0.155, opacity: 0.58, brightness: 0.78, z: 5 },
    { index: 2, cx: 0.27, cy: 0.66, size: 0.165, opacity: 0.72, brightness: 0.86, z: 6 },
    { index: 9, cx: 0.64, cy: 0.56, size: 0.175, opacity: 0.9, brightness: 0.96, z: 8 },
    { index: 1, cx: 0.36, cy: 0.66, size: 0.178, opacity: 0.88, brightness: 0.94, z: 9 },
    { index: 0, cx: 0.51, cy: 0.63, size: 0.19, opacity: 1, brightness: 1.04, z: 12 }
  ];
  const missingLayouts = media
    .map((_, index) => index)
    .filter((index) => !reference.some((layout) => layout.index === index))
    .map((index, order) => ({
      index,
      cx: 0.42 + (order % 4) * 0.06,
      cy: 0.31 + Math.floor(order / 4) * 0.1,
      size: 0.13,
      opacity: 0.18,
      brightness: 0.48,
      z: 0
    }));
  const cards = [...missingLayouts, ...reference]
    .filter((layout) => layout.index < media.length)
    .sort((a, b) => a.z - b.z)
    .map((layout) => {
      const size = width * layout.size;
      return {
        item: media[layout.index],
        image: loaded[layout.index],
        fallback: `Slot ${layout.index + 1}`,
        x: width * layout.cx - size / 2,
        y: y + height * layout.cy - size / 2,
        width: size,
        height: size,
        opacity: layout.opacity,
        brightness: layout.brightness,
        z: layout.z
      };
    });

  cards.forEach((card) => {
    ctx.save();
    ctx.globalAlpha = card.opacity;
    if ("filter" in ctx) {
      ctx.filter = `brightness(${card.brightness}) saturate(${Math.min(1.04, card.brightness + 0.12)})`;
    }
    drawExportCard(ctx, card.x, card.y, card.width, card.height, card.image, card.item, palette, card.fallback);
    ctx.restore();
  });
}

function readLiveOrbitExportLayout() {
  const hero = document.querySelector("#sitePreview .hero-preview.hero-orbit");
  if (!hero) return null;
  const heroRect = hero.getBoundingClientRect();
  if (heroRect.width < 20 || heroRect.height < 20) return null;
  const cards = $$(".orbit-flow .media-card", hero)
    .map((card, index) => {
      const rect = card.getBoundingClientRect();
      const style = getComputedStyle(card);
      return {
        index,
        x: rect.left - heroRect.left,
        y: rect.top - heroRect.top,
        width: rect.width,
        height: rect.height,
        opacity: Number.parseFloat(style.opacity) || 1,
        brightness: parseCSSBrightness(style.filter),
        z: Number.parseFloat(style.zIndex) || index
      };
    })
    .filter((card) => card.width > 1 && card.height > 1);
  return { width: heroRect.width, height: heroRect.height, cards };
}

function parseCSSBrightness(filter) {
  const match = /brightness\(([\d.]+)%?\)/.exec(filter || "");
  if (!match) return 1;
  const value = Number.parseFloat(match[1]);
  return match[0].includes("%") ? value / 100 : value;
}

function orbitExportFrameAt(phase) {
  const frames = [
    { p: 0, left: 50, top: 15, scale: 0.72, opacity: 0.32, brightness: 0.48, z: 2 },
    { p: 0.125, left: 72, top: 20, scale: 0.82, opacity: 0.48, brightness: 0.62, z: 4 },
    { p: 0.25, left: 86, top: 44, scale: 0.96, opacity: 0.76, brightness: 0.85, z: 7 },
    { p: 0.375, left: 72, top: 72, scale: 1.08, opacity: 0.98, brightness: 1, z: 10 },
    { p: 0.5, left: 50, top: 82, scale: 1.16, opacity: 1, brightness: 1.05, z: 12 },
    { p: 0.625, left: 28, top: 72, scale: 1.08, opacity: 0.98, brightness: 1, z: 10 },
    { p: 0.75, left: 14, top: 44, scale: 0.96, opacity: 0.76, brightness: 0.85, z: 7 },
    { p: 0.875, left: 28, top: 20, scale: 0.82, opacity: 0.48, brightness: 0.62, z: 4 },
    { p: 1, left: 50, top: 15, scale: 0.72, opacity: 0.32, brightness: 0.48, z: 2 }
  ];
  const current = frames.find((frame, index) => phase >= frame.p && phase <= frames[index + 1]?.p);
  const index = Math.max(0, frames.indexOf(current));
  const a = frames[index];
  const b = frames[index + 1] || frames[0];
  const span = Math.max(b.p - a.p, 0.0001);
  const t = (phase - a.p) / span;
  return {
    left: lerp(a.left, b.left, t),
    top: lerp(a.top, b.top, t),
    scale: lerp(a.scale, b.scale, t),
    opacity: lerp(a.opacity, b.opacity, t),
    brightness: lerp(a.brightness, b.brightness, t),
    z: lerp(a.z, b.z, t)
  };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

async function drawExportAbout(ctx, y, width, height, palette) {
  drawExportBackground(ctx, y, width, height, palette);
  const left = 150;
  const top = y + 92;
  ctx.fillStyle = palette.accent;
  ctx.font = "700 26px Arial, sans-serif";
  ctx.fillText("About", left, top);
  ctx.fillStyle = palette.text;
  ctx.font = "700 92px Arial, sans-serif";
  ctx.fillText(state.about.name || "", left, top + 105);
  ctx.font = "700 30px Arial, sans-serif";
  ctx.fillText(state.about.title || "", left, top + 155);
  ctx.font = "24px Arial, sans-serif";
  drawWrappedText(ctx, state.about.bio || "", left, top + 205, 1120, 36, palette.text, 2);
  drawExportTags(ctx, splitList(state.about.skills), left, top + 285, palette);
  const cards = [
    [aboutLabel("experience"), state.about.experience],
    [aboutLabel("education"), state.about.education],
    [aboutLabel("awards"), state.about.awards],
    [aboutLabel("clients"), state.about.clients],
    [aboutLabel("services"), state.about.services],
    [aboutLabel("availability"), state.about.availability]
  ];
  cards.forEach(([title, body], index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    drawInfoBox(ctx, left + col * 585, top + 360 + row * 128, 540, 104, title, body, palette);
  });
  ctx.fillStyle = palette.text;
  ctx.font = "700 22px Arial, sans-serif";
  ctx.fillText(state.about.socials || "", left, y + height - 78);
}

async function drawExportWorks(ctx, y, width, height, palette) {
  drawExportBackground(ctx, y, width, height, palette);
  const left = 62;
  const top = y + 94;
  ctx.fillStyle = palette.text;
  ctx.font = "700 78px Arial, sans-serif";
  ctx.fillText(worksHeading(), left, top);
  const categories = ["全部", ...Array.from(new Set(state.works.projects.map((project) => project.category).filter(Boolean))).slice(0, 5)];
  let chipX = width - 630;
  categories.forEach((label, index) => {
    ctx.font = "700 16px Arial, sans-serif";
    const chipW = Math.ceil(ctx.measureText(label).width + 30);
    roundedRect(ctx, chipX, top - 37, chipW, 34, 17, index === 0 ? palette.accent : "rgba(255,255,255,0.08)", palette.line);
    ctx.fillStyle = index === 0 && normalizeHeroBackground(state.hero.background) !== "ivory" ? "#1b1710" : palette.text;
    ctx.fillText(label, chipX + 15, top - 15);
    chipX += chipW + 12;
  });
  const projects = visibleProjects().slice(0, 6);
  const images = await Promise.all(projects.map((project) => loadCanvasImage(project.cover?.src)));
  projects.forEach((project, index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = left + col * 450;
    const cy = top + 75 + row * 315;
    drawExportCard(ctx, x, cy, 390, 225, images[index], project.cover, palette, project.number);
    ctx.fillStyle = palette.accent;
    ctx.font = "700 18px Arial, sans-serif";
    ctx.fillText(`${project.number} · ${project.category}`, x, cy + 258);
    ctx.fillStyle = palette.text;
    ctx.font = "700 28px Arial, sans-serif";
    ctx.fillText(project.title || "", x, cy + 294);
    if (project.description) {
      ctx.font = "18px Arial, sans-serif";
      drawWrappedText(ctx, project.description, x, cy + 326, 360, 26, palette.text, 2);
    }
  });
}

async function drawExportContact(ctx, y, width, height, palette) {
  drawExportBackground(ctx, y, width, height, palette);
  const left = 62;
  const top = y + 94;
  ctx.fillStyle = palette.accent;
  ctx.font = "700 26px Arial, sans-serif";
  ctx.fillText("Contact", left, top);
  ctx.fillStyle = palette.text;
  ctx.font = "700 92px Arial, sans-serif";
  ctx.fillText(state.contact.thanks || "", left, top + 105);
  ctx.font = "26px Arial, sans-serif";
  drawWrappedText(ctx, state.contact.invite || "", left, top + 165, 650, 40, palette.text, 2);
  const rows = [
    ["电话", state.contact.phone],
    ["微信", state.contact.wechat],
    ["邮箱", state.contact.email]
  ];
  rows.forEach(([label, value], index) => {
    const rowY = top + 300 + index * 82;
    ctx.strokeStyle = palette.line;
    ctx.beginPath();
    ctx.moveTo(left, rowY + 30);
    ctx.lineTo(left + 650, rowY + 30);
    ctx.stroke();
    ctx.fillStyle = palette.muted;
    ctx.font = "22px Arial, sans-serif";
    ctx.fillText(label, left, rowY);
    ctx.fillStyle = palette.text;
    ctx.font = "700 24px Arial, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(value || "", left + 650, rowY);
    ctx.textAlign = "left";
  });
  const qr = await loadCanvasImage(state.contact.qr?.src);
  drawExportCard(ctx, width - 600, top + 42, 430, 430, qr, state.contact.qr, palette, "QR");
  drawExportTags(ctx, splitList(state.contact.socials), left, top + 555, palette);
}

function drawExportTags(ctx, tags, x, y, palette) {
  let cursor = x;
  tags.slice(0, 8).forEach((tag) => {
    const text = String(tag);
    ctx.font = "18px Arial, sans-serif";
    const w = Math.ceil(ctx.measureText(text).width + 34);
    roundedRect(ctx, cursor, y, w, 38, 19, "rgba(255,255,255,0.12)", palette.line);
    ctx.fillStyle = palette.text;
    ctx.fillText(text, cursor + 17, y + 25);
    cursor += w + 12;
  });
}

function drawInfoBox(ctx, x, y, width, height, title, body, palette) {
  roundedRect(ctx, x, y, width, height, 12, "rgba(255,255,255,0.08)", palette.line);
  ctx.fillStyle = palette.text;
  ctx.font = "700 22px Arial, sans-serif";
  ctx.fillText(title, x + 22, y + 34);
  ctx.font = "18px Arial, sans-serif";
  drawWrappedText(ctx, String(body || "").replace(/\n/g, " / "), x + 22, y + 67, width - 44, 26, palette.muted, 2);
}

function drawExportCard(ctx, x, y, width, height, image, media, palette, fallback) {
  ctx.save();
  ctx.shadowColor = palette.shadow;
  ctx.shadowBlur = 34;
  ctx.shadowOffsetY = 18;
  roundedRect(ctx, x, y, width, height, 18, palette.card, palette.line);
  ctx.restore();
  if (image) {
    drawImageCover(ctx, image, x, y, width, height, 18);
  } else {
    roundedRect(ctx, x + width * 0.34, y + height * 0.34, width * 0.32, height * 0.32, 0, "transparent", palette.line);
    ctx.fillStyle = palette.muted;
    ctx.font = "700 18px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(fallback || "Slot", x + width / 2, y + height / 2 + 7);
    ctx.textAlign = "left";
  }
}

function drawImageCover(ctx, image, x, y, width, height, radius) {
  const scale = Math.max(width / image.width, height / image.height);
  const sw = width / scale;
  const sh = height / scale;
  const sx = (image.width - sw) / 2;
  const sy = (image.height - sh) / 2;
  ctx.save();
  roundedClip(ctx, x, y, width, height, radius);
  ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
  ctx.restore();
}

function roundedRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fill;
    ctx.fill();
  }
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function roundedClip(ctx, x, y, width, height, radius) {
  roundedRect(ctx, x, y, width, height, radius);
  ctx.clip();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, color, maxLines = 5) {
  ctx.fillStyle = color;
  const words = String(text || "").split(/\s+/);
  let line = "";
  let lineCount = 0;
  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      if (lineCount < maxLines) ctx.fillText(line, x, y + lineCount * lineHeight);
      line = word;
      lineCount += 1;
      return;
    }
    line = test;
  });
  if (line && lineCount < maxLines) ctx.fillText(line, x, y + lineCount * lineHeight);
}

function loadCanvasImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const incoming = JSON.parse(reader.result);
      if (!incoming.hero || !incoming.about || !incoming.works || !incoming.contact || !incoming.styles) {
        throw new Error("Invalid portfolio JSON");
      }
      Object.keys(state).forEach((key) => delete state[key]);
      Object.assign(state, incoming);
      state.hero.background = normalizeHeroBackground(state.hero.background);
      state.contact.layout = CONTACT_LAYOUTS.some((item) => item.id === state.contact.layout) ? state.contact.layout : "classic";
      state.about.softwareSkills = normalizeSoftwareSkills(state.about.softwareSkills);
      state.about.showSkillPercent = state.about.showSkillPercent !== false;
      saveSoftwareSkills();
      ensureMediaCapacity(currentHeroTemplate().slots);
      renderAll();
    } catch (error) {
      alert("JSON 文件结构不正确，无法导入。");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

async function openPublishedPreview() {
  const doc = await buildPublishedDocument();
  const blob = new Blob([doc], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  if (!win) {
    window.location.href = url;
    return;
  }
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
}

async function collectStylesheetText() {
  const embedded = $("#embeddedStyles")?.textContent || "";
  if (embedded.trim().length > 1000) {
    return embedded.replace(/<\/style/gi, "<\\/style");
  }
  const fetched = await Promise.all(
    $$('link[rel="stylesheet"]').map(async (link) => {
      try {
        const response = await fetch(link.href, { cache: "no-store" });
        return response.ok ? await response.text() : "";
      } catch (error) {
        return "";
      }
    })
  );
  const fallback = Array.from(document.styleSheets)
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch (error) {
        return "";
      }
    })
    .join("\n");
  const css = [...fetched, fallback].filter(Boolean).join("\n");
  return css.replace(/<\/style/gi, "<\\/style");
}

async function buildPublishedDocument(options = {}) {
  const heroBackground = normalizeHeroBackground(state.hero.background);
  const shouldPlay = options.forcePlay ? true : state.animationPlaying;
  const css = options.cssText || await collectStylesheetText();
  const previousRenderContext = renderContext;
  const previousHeroRenderMode = heroRenderMode;
  let heroHTML = "";
  let aboutHTML = "";
  let worksHTML = "";
  let contactHTML = "";
  try {
    renderContext = "published";
    heroRenderMode = HERO_RENDER_MODES.WEBSITE_EXPORT;
    heroHTML = renderHeroSection();
    aboutHTML = renderAboutSection();
    worksHTML = renderWorksSection();
    contactHTML = renderContactSection();
  } finally {
    renderContext = previousRenderContext;
    heroRenderMode = previousHeroRenderMode;
  }
  const detailRouteHTML = projectRouteMapHTML();
  return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Portfolio Preview</title><style>${css}</style></head>
  <body class="published-body ${HERO_RENDER_MODES.WEBSITE_EXPORT}">
    <main class="published-site ${HERO_RENDER_MODES.WEBSITE_EXPORT} preview-bg-${heroBackground} ${shouldPlay ? "" : "is-paused"}" style="--anim-duration:${SPEED_MAP[state.hero.speed]};--preview-height:100vh;">
      <div id="hero">${heroHTML}</div>
      <div id="about">${aboutHTML}</div>
      <div id="works">${worksHTML}</div>
      <div id="contact">${contactHTML}</div>
    </main>
    <div id="projectDetailRoute" class="published-project-route preview-bg-${heroBackground}" hidden></div>
    <script>
      var projectDetailRoutes = ${detailRouteHTML};
      function currentProjectRouteSlug() {
        var match = window.location.hash.match(/^#\\/works\\/([^/?#]+)/);
        return match ? decodeURIComponent(match[1]) : "";
      }
      function updateProjectRoute() {
        var slug = currentProjectRouteSlug();
        var site = document.querySelector(".published-site");
        var route = document.getElementById("projectDetailRoute");
        if (!site || !route) return;
        if (slug && projectDetailRoutes[slug]) {
          route.innerHTML = projectDetailRoutes[slug];
          route.hidden = false;
          site.hidden = true;
          initProjectDetailImageReveal(route);
          window.scrollTo(0, 0);
        } else {
          route.hidden = true;
          route.innerHTML = "";
          site.hidden = false;
        }
      }
      function initProjectDetailImageReveal(root) {
        var items = Array.prototype.slice.call(root.querySelectorAll(".project-detail-visual, .project-gallery .gallery-item"));
        if (!items.length) return;
        if (!("IntersectionObserver" in window)) {
          items.forEach(function(item) { item.classList.add("is-visible"); });
          return;
        }
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
        items.forEach(function(item) { observer.observe(item); });
      }
      window.addEventListener("hashchange", updateProjectRoute);
      (function() {
        function revealBlurText() {
          var nodes = Array.prototype.slice.call(document.querySelectorAll(".blur-text, .split-text"));
          if (!nodes.length) return;
          if (!("IntersectionObserver" in window)) {
            nodes.forEach(function(node) { node.classList.add("is-visible"); });
            return;
          }
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          }, { threshold: 0.1, rootMargin: "0px" });
          nodes.forEach(function(node) { observer.observe(node); });
        }
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", revealBlurText);
        } else {
          revealBlurText();
        }
      })();
      (function() {
        if (!${shouldPlay ? "true" : "false"}) return;
        var root = document.querySelector(".published-site");
        if (root) root.classList.remove("is-paused");
        document.querySelectorAll(".orbit-flow .media-card, .photo-orbit-card, .scroll-morph-card, .circular-gallery-item, .ticker-loop-row, .vertical-stack-hint .stack-arrow, .zoom-parallax-layer, .mosaic-board").forEach(function(node) {
          node.style.animationPlayState = "running";
        });
      })();
      (function() {
        var autoPlay = ${shouldPlay ? "true" : "false"};
        document.querySelectorAll(".orbit-flow").forEach(function(flow) {
          var cards = Array.prototype.slice.call(flow.querySelectorAll(".media-card"));
          if (!cards.length) return;
          var rawDuration = getComputedStyle(flow).getPropertyValue("--anim-duration").trim()
            || getComputedStyle(document.querySelector(".published-site")).getPropertyValue("--anim-duration").trim()
            || "22s";
          var duration = (parseFloat(rawDuration) || 22) * (rawDuration.endsWith("ms") ? 1 : 1000);
          var points = [
            { p: 0, left: 50, top: 15, scale: 0.72, opacity: 0.32, brightness: 0.48, saturate: 0.78, z: 2 },
            { p: 0.125, left: 72, top: 20, scale: 0.82, opacity: 0.48, brightness: 0.62, saturate: 0.86, z: 4 },
            { p: 0.25, left: 86, top: 44, scale: 0.96, opacity: 0.76, brightness: 0.85, saturate: 0.95, z: 7 },
            { p: 0.375, left: 72, top: 72, scale: 1.08, opacity: 0.98, brightness: 1, saturate: 1, z: 10 },
            { p: 0.5, left: 50, top: 82, scale: 1.16, opacity: 1, brightness: 1.05, saturate: 1.02, z: 12 },
            { p: 0.625, left: 28, top: 72, scale: 1.08, opacity: 0.98, brightness: 1, saturate: 1, z: 10 },
            { p: 0.75, left: 14, top: 44, scale: 0.96, opacity: 0.76, brightness: 0.85, saturate: 0.95, z: 7 },
            { p: 0.875, left: 28, top: 20, scale: 0.82, opacity: 0.48, brightness: 0.62, saturate: 0.86, z: 4 },
            { p: 1, left: 50, top: 15, scale: 0.72, opacity: 0.32, brightness: 0.48, saturate: 0.78, z: 2 }
          ];
          function mix(a, b, t) { return a + (b - a) * t; }
          function sample(progress) {
            var point = points[0];
            var next = points[1];
            for (var i = 0; i < points.length - 1; i += 1) {
              if (progress >= points[i].p && progress <= points[i + 1].p) {
                point = points[i];
                next = points[i + 1];
                break;
              }
            }
            var span = Math.max(0.0001, next.p - point.p);
            var local = (progress - point.p) / span;
            return {
              left: mix(point.left, next.left, local),
              top: mix(point.top, next.top, local),
              scale: mix(point.scale, next.scale, local),
              opacity: mix(point.opacity, next.opacity, local),
              brightness: mix(point.brightness, next.brightness, local),
              saturate: mix(point.saturate, next.saturate, local),
              z: Math.round(mix(point.z, next.z, local))
            };
          }
          cards.forEach(function(card) {
            card.style.animation = "none";
            card.style.position = "absolute";
            card.style.willChange = "left, top, transform, opacity, filter";
          });
          var start = performance.now();
          function render(now) {
            var elapsed = autoPlay ? now - start : 0;
            cards.forEach(function(card, index) {
              var progress = ((elapsed / duration) + index / cards.length) % 1;
              var state = sample(progress);
              card.style.left = state.left.toFixed(2) + "%";
              card.style.top = state.top.toFixed(2) + "%";
              card.style.transform = "translate(-50%, -50%) rotate(18deg) scale(" + state.scale.toFixed(3) + ")";
              card.style.opacity = state.opacity.toFixed(3);
              card.style.filter = "brightness(" + state.brightness.toFixed(3) + ") saturate(" + state.saturate.toFixed(3) + ")";
              card.style.zIndex = String(state.z);
            });
            window.requestAnimationFrame(render);
          }
          window.requestAnimationFrame(render);
        });
      })();
      (function() {
        function lerp(a, b, t) { return a + (b - a) * t; }
        function initCircularGalleries() {
          document.querySelectorAll(".circular-gallery").forEach(function(container) {
            var items = Array.prototype.slice.call(container.querySelectorAll(".circular-gallery-item"));
            if (!items.length) return;
            var scroll = { current: 0, target: 0, ease: 0.06 };
            var pointer = { down: false, start: 0, position: 0 };
            var itemWidth = 190;
            var spacing = 226;
            var total = spacing * items.length;
            function resize() {
              var width = container.clientWidth || 1;
              itemWidth = Math.max(110, Math.min(164, width * 0.17));
              spacing = itemWidth * 1.14;
              total = spacing * items.length;
              items.forEach(function(item) {
                item.style.width = itemWidth + "px";
                item.style.height = itemWidth * 1.32 + "px";
              });
            }
            function wrap(value) {
              var wrapped = ((value % total) + total) % total;
              return wrapped - total / 2;
            }
            function render() {
              resize();
              if (${shouldPlay ? "true" : "false"} && !pointer.down) scroll.target += 0.62;
              scroll.current = lerp(scroll.current, scroll.target, scroll.ease);
              var width = container.clientWidth || 1;
              var height = container.clientHeight || 1;
              var half = width / 2;
              var safeHalf = Math.max(120, half - itemWidth * 1.05);
              var bend = Math.max(104, width * 0.24);
              var topBase = height * 0.58;
              var cardHeight = itemWidth * 1.32;
              var cardDiagonalHalf = Math.sqrt(itemWidth * itemWidth + cardHeight * cardHeight) * 0.5;
              items.forEach(function(item, index) {
                var x = wrap(index * spacing - scroll.current);
                var displayX = Math.max(-safeHalf, Math.min(safeHalf, x * 0.72));
                var norm = Math.min(Math.abs(displayX) / Math.max(safeHalf, 1), 1);
                var scale = 1 - norm * 0.22;
                var rotation = (displayX / Math.max(safeHalf, 1)) * 20;
                var rawY = Math.pow(norm, 2.15) * bend - bend * 0.54;
                var safeY = Math.max(
                  -topBase + cardDiagonalHalf * scale + 12,
                  Math.min(height - topBase - cardDiagonalHalf * scale - 12, rawY)
                );
                var opacity = 0.25 + (1 - norm) * 0.75;
                var brightness = 0.48 + (1 - norm) * 0.58;
                item.style.transform = "translate3d(calc(-50% + " + displayX + "px), calc(-50% + " + safeY + "px), 0) rotate(" + rotation + "deg) scale(" + scale + ")";
                item.style.opacity = opacity.toFixed(3);
                item.style.filter = "brightness(" + brightness.toFixed(3) + ") saturate(" + (0.82 + (1 - norm) * 0.18).toFixed(3) + ")";
                item.style.zIndex = String(Math.round((1 - norm) * 100));
              });
              window.requestAnimationFrame(render);
            }
            container.addEventListener("mousedown", function(event) {
              pointer.down = true;
              pointer.start = event.clientX;
              pointer.position = scroll.target;
              container.classList.add("is-dragging");
            });
            window.addEventListener("mousemove", function(event) {
              if (!pointer.down) return;
              scroll.target = pointer.position + (pointer.start - event.clientX) * 0.9;
            });
            window.addEventListener("mouseup", function() {
              pointer.down = false;
              container.classList.remove("is-dragging");
            });
            container.addEventListener("wheel", function(event) {
              event.preventDefault();
              scroll.target += (event.deltaY || event.deltaX) * 0.32;
            }, { passive: false });
            container.addEventListener("keydown", function(event) {
              if (event.key === "ArrowRight") { event.preventDefault(); scroll.target += spacing; }
              if (event.key === "ArrowLeft") { event.preventDefault(); scroll.target -= spacing; }
              if (event.key === "Home") { event.preventDefault(); scroll.target = 0; }
            });
            window.addEventListener("resize", resize);
            resize();
            render();
          });
        }
        initCircularGalleries();
      })();
      (function() {
        document.querySelectorAll(".photo-orbit").forEach(function(orbit) {
          var cards = Array.prototype.slice.call(orbit.querySelectorAll(".photo-orbit-card"));
          var motion = { phase: 0, frame: 0, last: performance.now(), paused: ${shouldPlay ? "false" : "true"} };
          var durationRaw = getComputedStyle(orbit).getPropertyValue("--anim-duration").trim();
          var duration = (parseFloat(durationRaw) || 22) * (durationRaw.endsWith("ms") ? 1 : 1000);
          function setCardShift(shiftX, shiftY) {
            cards.forEach(function(card) {
              var depth = Number(card.style.getPropertyValue("--orbit-depth") || 0.6);
              card.style.setProperty("--orbit-shift-x", (shiftX * depth).toFixed(2) + "px");
              card.style.setProperty("--orbit-shift-y", (shiftY * depth).toFixed(2) + "px");
            });
          }
          function applyOrbit() {
            var width = orbit.clientWidth || 1;
            var height = orbit.clientHeight || 1;
            var radius = Math.max(82, Math.min(width, height) * 0.34);
            cards.forEach(function(card) {
              var base = Number(card.dataset.angle || 0) * Math.PI / 180;
              var angle = base + motion.phase;
              var x = Math.cos(angle) * radius;
              var y = Math.sin(angle) * radius;
              var depth = (Math.sin(angle) + 1) / 2;
              var scale = 0.84 + depth * 0.18;
              var opacity = 0.42 + depth * 0.58;
              var brightness = 0.58 + depth * 0.48;
              card.style.setProperty("--orbit-x", x.toFixed(2) + "px");
              card.style.setProperty("--orbit-y", y.toFixed(2) + "px");
              card.style.setProperty("--orbit-scale", scale.toFixed(3));
              card.style.setProperty("--orbit-opacity", opacity.toFixed(3));
              card.style.setProperty("--orbit-brightness", brightness.toFixed(3));
              card.style.setProperty("--orbit-depth", depth.toFixed(3));
              card.style.zIndex = String(20 + Math.round(depth * 80));
            });
          }
          function tick(now) {
            var delta = Math.min(48, now - motion.last);
            motion.last = now;
            if (!motion.paused) motion.phase += (delta / duration) * Math.PI * 2;
            applyOrbit();
            motion.frame = window.requestAnimationFrame(tick);
          }
          orbit.addEventListener("pointermove", function(event) {
            var rect = orbit.getBoundingClientRect();
            var x = ((event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5);
            var y = ((event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5);
            orbit.style.setProperty("--orbit-tilt-x", (-y * 8).toFixed(2) + "deg");
            orbit.style.setProperty("--orbit-tilt-y", (x * 10).toFixed(2) + "deg");
            setCardShift(x * 14, y * 10);
          });
          orbit.addEventListener("wheel", function(event) {
            event.preventDefault();
            motion.phase += Math.max(-1, Math.min(1, event.deltaY || event.deltaX || 0)) * -0.12;
          }, { passive: false });
          orbit.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") { event.preventDefault(); motion.phase += Math.PI / cards.length; }
            if (event.key === "ArrowLeft") { event.preventDefault(); motion.phase -= Math.PI / cards.length; }
          });
          orbit.addEventListener("pointerleave", function() {
            orbit.style.setProperty("--orbit-tilt-x", "0deg");
            orbit.style.setProperty("--orbit-tilt-y", "0deg");
            setCardShift(0, 0);
          });
          setCardShift(0, 0);
          applyOrbit();
          motion.frame = window.requestAnimationFrame(tick);
        });
      })();
      (function() {
        document.querySelectorAll(".three-d-carousel").forEach(function(container) {
          var ring = container.querySelector(".three-d-carousel-ring");
          var cards = Array.prototype.slice.call(container.querySelectorAll(".three-d-carousel-card"));
          var overlay = container.querySelector(".three-d-carousel-overlay");
          var expanded = container.querySelector(".three-d-carousel-expanded");
          var close = container.querySelector(".three-d-carousel-close");
          if (!ring || !cards.length) return;
          var speed = ${state.hero.speed === "fast" ? "0.038" : state.hero.speed === "slow" ? "0.012" : "0.022"};
          var autoPlay = ${shouldPlay ? "true" : "false"};
          var motion = { rotation: 0, targetRotation: 0, frame: 0, last: performance.now(), dragging: false, moved: false, startX: 0, startRotation: 0, active: true };
          function layout() {
            var width = container.clientWidth || 1;
            var height = container.clientHeight || 1;
            var count = cards.length;
            var cardSize = Math.max(82, Math.min(156, width * 0.16, height * 0.34));
            var radius = Math.max(cardSize * 1.65, (cardSize * count) / (Math.PI * 2));
            ring.style.setProperty("--carousel-card-size", cardSize + "px");
            ring.style.setProperty("--carousel-radius", radius + "px");
            cards.forEach(function(card, index) {
              var angle = (360 / count) * index;
              card.style.transform = "rotateY(" + angle + "deg) translateZ(" + radius + "px)";
            });
          }
          function apply() {
            ring.style.transform = "translateZ(calc(var(--carousel-radius, 220px) * -1)) rotateY(" + motion.rotation + "deg)";
          }
          function tick(now) {
            var delta = Math.min(48, now - motion.last);
            motion.last = now;
            if (autoPlay && !motion.dragging && motion.active) motion.targetRotation -= delta * speed;
            motion.rotation += (motion.targetRotation - motion.rotation) * 0.12;
            apply();
            motion.frame = window.requestAnimationFrame(tick);
          }
          function openCard(card) {
            if (!overlay || !expanded) return;
            var surface = card.querySelector(".three-d-carousel-surface");
            if (!surface) return;
            motion.active = false;
            expanded.innerHTML = "";
            expanded.appendChild(surface.cloneNode(true));
            overlay.classList.add("is-open");
            overlay.setAttribute("aria-hidden", "false");
          }
          function closeOverlay() {
            if (!overlay || !expanded) return;
            overlay.classList.remove("is-open");
            overlay.setAttribute("aria-hidden", "true");
            expanded.innerHTML = "";
            motion.active = true;
          }
          container.addEventListener("pointerdown", function(event) {
            motion.dragging = true;
            motion.moved = false;
            motion.startX = event.clientX;
            motion.startRotation = motion.targetRotation;
            container.classList.add("is-dragging");
            if (container.setPointerCapture) container.setPointerCapture(event.pointerId);
          });
          container.addEventListener("pointermove", function(event) {
            if (!motion.dragging) return;
            if (Math.abs(event.clientX - motion.startX) > 4) motion.moved = true;
            motion.targetRotation = motion.startRotation + (event.clientX - motion.startX) * 0.18;
          });
          function endDrag() {
            motion.dragging = false;
            container.classList.remove("is-dragging");
            window.setTimeout(function() { motion.moved = false; }, 80);
          }
          container.addEventListener("pointerup", endDrag);
          container.addEventListener("pointercancel", endDrag);
          container.addEventListener("wheel", function(event) {
            event.preventDefault();
            motion.targetRotation += Math.max(-80, Math.min(80, event.deltaY || event.deltaX || 0)) * -0.05;
          }, { passive: false });
          container.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") { event.preventDefault(); motion.targetRotation -= 360 / cards.length; }
            if (event.key === "ArrowLeft") { event.preventDefault(); motion.targetRotation += 360 / cards.length; }
            if (event.key === "Escape") closeOverlay();
          });
          cards.forEach(function(card) {
            card.addEventListener("click", function() {
              if (motion.dragging || motion.moved) return;
              openCard(card);
            });
          });
          if (close) close.addEventListener("click", closeOverlay);
          if (overlay) overlay.addEventListener("click", function(event) {
            if (event.target === overlay) closeOverlay();
          });
          window.addEventListener("resize", layout);
          layout();
          apply();
          motion.frame = window.requestAnimationFrame(tick);
        });
      })();
      (function() {
        function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
        document.querySelectorAll(".stellar-gallery").forEach(function(container) {
          var galaxy = container.querySelector(".stellar-galaxy");
          var cards = Array.prototype.slice.call(container.querySelectorAll(".stellar-card"));
          var overlay = container.querySelector(".stellar-overlay");
          var expanded = container.querySelector(".stellar-expanded");
          var close = container.querySelector(".stellar-close");
          if (!galaxy || !cards.length) return;
          var overlayHome = overlay ? overlay.parentNode : null;
          var overlayCloseTimer = 0;
          var goldenAngle = Math.PI * (3 - Math.sqrt(5));
          var motion = {
            rotX: 0,
            rotY: 0,
            targetX: 0,
            targetY: 0,
            zoom: 1,
            targetZoom: 1,
            last: performance.now(),
            dragging: false,
            moved: false,
            startX: 0,
            startY: 0,
            startRotX: 0,
            startRotY: 0,
            active: true
          };
          var points = cards.map(function(card, index) {
            var count = Math.max(cards.length, 1);
            if (index === 0) {
              return { card: card, x: 0, y: 0, z: 1, view: null };
            }
            var spreadCount = Math.max(count - 1, 1);
            var spreadIndex = index - 1;
            var y = spreadCount === 1 ? 0 : 1 - (spreadIndex / (spreadCount - 1)) * 2;
            var radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
            var theta = spreadIndex * goldenAngle + Math.PI * 0.42;
            var x = Math.cos(theta) * radiusAtY;
            var z = Math.sin(theta) * radiusAtY;
            var py = y;
            var centerDistance = Math.sqrt(x * x + py * py);
            if (z > 0.62 && centerDistance < 0.72) {
              var pushAngle = theta + Math.PI * 0.5;
              x = Math.cos(pushAngle) * 0.72;
              py = Math.sin(pushAngle) * 0.54;
              z = 0.45;
            }
            return {
              card: card,
              x: x,
              y: py,
              z: z,
              view: null
            };
          });
          cards.forEach(function(card) {
            card.dataset.zoom = card.dataset.zoom || "1";
            card.dataset.zoomCurrent = card.dataset.zoomCurrent || card.dataset.zoom;
            card.style.setProperty("--stellar-card-zoom", card.dataset.zoom);
            card.addEventListener("pointerenter", function() {
              card.classList.add("is-hovered");
              motion.hoveredCard = card;
            });
            card.addEventListener("pointerleave", function() {
              card.classList.remove("is-hovered");
              if (motion.hoveredCard === card) motion.hoveredCard = null;
            });
          });
          function zoomStellarSurface(surface, delta, maxZoom) {
            if (!surface) return;
            var currentZoom = Number(surface.dataset.zoom || surface.style.getPropertyValue("--stellar-image-zoom") || 1);
            var nextZoom = clamp(currentZoom - delta * 0.006, 1, maxZoom || 4);
            surface.dataset.zoom = nextZoom.toFixed(2);
            surface.style.setProperty("--stellar-image-zoom", nextZoom.toFixed(2));
            surface.classList.toggle("is-image-zoomed", nextZoom > 1.02);
          }
          function syncZoomingState() {
            var isZooming = cards.some(function(card) { return Number(card.dataset.zoom || 1) > 1.001 || Number(card.dataset.zoomCurrent || 1) > 1.001; });
            container.classList.toggle("is-card-zooming", isZooming);
          }
          function project() {
            var width = container.clientWidth || 1;
            var height = container.clientHeight || 1;
            var shortSide = Math.min(width, height);
            var cardWidth = clamp(shortSide * 0.168, 70, 142);
            var radiusX = clamp(width * 0.31, cardWidth * 2.85, width * 0.42);
            var radiusY = clamp(height * 0.37, cardWidth * 2.05, height * 0.46);
            var radiusZ = Math.min(radiusX, radiusY) * 0.92;
            var perspective = Math.max(700, shortSide * 1.75);
            var cameraScale = clamp(0.99 + (motion.zoom - 1) * 0.08, 0.97, 1.05);
            var sinY = Math.sin(motion.rotY);
            var cosY = Math.cos(motion.rotY);
            var sinX = Math.sin(motion.rotX);
            var cosX = Math.cos(motion.rotX);
            galaxy.style.setProperty("--stellar-card-w", cardWidth + "px");
            var anyZooming = false;
            var projected = points.map(function(point) {
              var x1 = point.x * cosY + point.z * sinY;
              var z1 = -point.x * sinY + point.z * cosY;
              var y1 = point.y * cosX - z1 * sinX;
              var z2 = point.y * sinX + z1 * cosX;
              var depth = (z2 + 1) / 2;
              var perspectiveScale = clamp(perspective / (perspective - z2 * radiusZ * 0.68), 0.66, 1.26);
              var x = x1 * radiusX * perspectiveScale * cameraScale;
              var y = y1 * radiusY * perspectiveScale * cameraScale;
              var z = z2 * radiusZ * 0.52;
              var scale = clamp((0.62 + depth * 0.36) * perspectiveScale * motion.zoom, 0.5, 1.18);
              var opacity = clamp(0.34 + depth * 0.66, 0.34, 1);
              var blur = clamp((1 - depth) * 1.25, 0, 1.1);
              var brightness = clamp(0.56 + depth * 0.52, 0.56, 1.08);
              var tiltY = clamp(-x1 * 10, -11, 11);
              var tiltX = clamp(y1 * 7, -8, 8);
              var targetCardZoom = Number(point.card.dataset.zoom || 1);
              var zoomAmount = Number(point.card.dataset.zoomCurrent || targetCardZoom);
              zoomAmount += (targetCardZoom - zoomAmount) * 0.14;
              if (Math.abs(targetCardZoom - zoomAmount) < 0.0015) zoomAmount = targetCardZoom;
              if (targetCardZoom <= 1.001 && zoomAmount <= 1.003) zoomAmount = 1;
              point.card.dataset.zoomCurrent = zoomAmount.toFixed(3);
              point.card.style.setProperty("--stellar-card-zoom", zoomAmount.toFixed(3));
              var zoomed = zoomAmount > 1.001 || targetCardZoom > 1.001;
              point.card.classList.toggle("is-image-zoomed", zoomed);
              if (!zoomed) {
                point.card.style.removeProperty("--stellar-focus-w");
              }
              if (zoomed) anyZooming = true;
              var zoomProgressRaw = clamp((zoomAmount - 1) / 1.45, 0, 1);
              var zoomProgress = zoomProgressRaw * zoomProgressRaw * (3 - 2 * zoomProgressRaw);
              var displayX = zoomed ? x * (1 - zoomProgress * 0.28) : x;
              var displayY = zoomed ? y * (1 - zoomProgress * 0.28) : y;
              var displayZ = zoomed ? z + zoomProgress * 185 : z;
              var displayTiltY = zoomed ? tiltY * (1 - zoomProgress * 0.35) : tiltY;
              var displayTiltX = zoomed ? tiltX * (1 - zoomProgress * 0.35) : tiltX;
              var renderScale = zoomed ? 1 + zoomProgress * 1.75 : 1;
              var renderWidth = cardWidth * renderScale;
              var displayScale = scale;
              var hiddenBackLayer = !zoomed && !anyZooming && depth < 0.36;
              return {
                point: point,
                renderWidth: renderWidth,
                displayX: displayX,
                displayY: displayY,
                displayZ: displayZ,
                displayTiltY: displayTiltY,
                displayTiltX: displayTiltX,
                displayScale: displayScale,
                hiddenBackLayer: hiddenBackLayer,
                zoomed: zoomed,
                opacity: opacity,
                brightness: brightness,
                blur: blur,
                depth: depth
              };
            });
            var margin = clamp(cardWidth * 0.14, 10, 18);
            projected.forEach(function(item) {
              item.boxW = item.renderWidth * item.displayScale * 1.1;
              item.boxH = item.boxW * 1.25;
              item.targetX = item.zoomed ? item.displayX : item.displayX;
              item.targetY = item.zoomed ? item.displayY : item.displayY;
              if (!item.zoomed) {
                var maxX = Math.max(0, width * 0.5 - item.boxW * 0.5 - margin);
                var maxY = Math.max(0, height * 0.5 - item.boxH * 0.5 - margin);
                item.targetX = clamp(item.targetX, -maxX, maxX);
                item.targetY = clamp(item.targetY, -maxY, maxY);
              }
            });
            var keptVisible = [];
            var maxVisible = width < 700 || height < 430 ? 9 : 11;
            projected
              .filter(function(item) { return !item.zoomed; })
              .sort(function(a, b) { return b.depth - a.depth; })
              .forEach(function(item) {
                if (!anyZooming && keptVisible.length >= maxVisible) {
                  item.hiddenBackLayer = true;
                  return;
                }
                var collides = keptVisible.some(function(kept) {
                  var overlapX = (item.boxW + kept.boxW) * 0.5 + margin - Math.abs(item.targetX - kept.targetX);
                  var overlapY = (item.boxH + kept.boxH) * 0.5 + margin - Math.abs(item.targetY - kept.targetY);
                  return overlapX > 0 && overlapY > 0;
                });
                if (collides) {
                  item.hiddenBackLayer = true;
                } else {
                  keptVisible.push(item);
                }
              });
            projected.forEach(function(item) {
              var target = {
                x: item.zoomed ? item.displayX : item.targetX,
                y: item.zoomed ? item.displayY : item.targetY,
                z: item.displayZ,
                tiltX: item.displayTiltX,
                tiltY: item.displayTiltY,
                scale: item.displayScale,
                renderWidth: item.renderWidth,
                opacity: item.hiddenBackLayer ? 0 : item.zoomed ? 1 : item.opacity,
                brightness: item.brightness,
                blur: item.blur,
                depth: item.depth
              };
              var view = item.point.view || {};
              var ease = !view.ready ? 1 : item.zoomed ? 0.22 : motion.dragging ? 0.24 : 0.18;
              function mix(key) {
                view[key] = view.ready ? view[key] + (target[key] - view[key]) * ease : target[key];
              }
              mix("x");
              mix("y");
              mix("z");
              mix("tiltX");
              mix("tiltY");
              mix("scale");
              mix("renderWidth");
              mix("opacity");
              mix("brightness");
              mix("blur");
              mix("depth");
              view.ready = true;
              item.point.view = view;
              item.point.card.style.setProperty("--stellar-card-render-w", view.renderWidth.toFixed(2) + "px");
              item.point.card.style.transform = "translate3d(calc(-50% + " + view.x.toFixed(2) + "px), calc(-50% + " + view.y.toFixed(2) + "px), " + view.z.toFixed(2) + "px) rotateY(" + view.tiltY.toFixed(2) + "deg) rotateX(" + view.tiltX.toFixed(2) + "deg) scale(" + view.scale.toFixed(3) + ")";
              item.point.card.style.opacity = view.opacity.toFixed(3);
              item.point.card.style.pointerEvents = item.hiddenBackLayer ? "none" : "auto";
              item.point.card.style.filter = item.zoomed ? "none" : "brightness(" + view.brightness.toFixed(3) + ") blur(" + view.blur.toFixed(2) + "px)";
              item.point.card.style.zIndex = item.zoomed ? "9000" : String(100 + Math.round(view.depth * 1400));
            });
            container.classList.toggle("is-card-zooming", anyZooming);
          }
          function openCard(card) {
            if (!overlay || !expanded) return;
            var surface = card.querySelector(".stellar-card-surface");
            if (!surface) return;
            motion.active = false;
            window.clearTimeout(overlayCloseTimer);
            card.classList.remove("is-hovered");
            expanded.innerHTML = "";
            var clone = surface.cloneNode(true);
            var currentZoom = Number(card.dataset.zoom || 1);
            clone.dataset.zoom = "1";
            clone.style.setProperty("--stellar-card-zoom", "1");
            clone.style.setProperty("--stellar-image-zoom", Math.max(1, currentZoom).toFixed(2));
            clone.classList.toggle("is-image-zoomed", currentZoom > 1.02);
            expanded.appendChild(clone);
            if (overlay.parentNode !== document.body) {
              document.body.appendChild(overlay);
            }
            overlay.classList.add("is-preparing");
            overlay.setAttribute("aria-hidden", "false");
            window.requestAnimationFrame(function() {
              overlay.classList.remove("is-preparing");
              overlay.classList.add("is-open");
            });
          }
          function closeOverlay() {
            if (!overlay || !expanded) return;
            overlay.classList.remove("is-open");
            overlay.setAttribute("aria-hidden", "true");
            window.clearTimeout(overlayCloseTimer);
            overlayCloseTimer = window.setTimeout(function() {
              expanded.innerHTML = "";
              if (overlayHome && overlayHome.isConnected && overlay.parentNode !== overlayHome) {
                overlayHome.appendChild(overlay);
              }
              motion.active = true;
            }, 340);
          }
          function tick(now) {
            var delta = Math.min(48, now - motion.last);
            motion.last = now;
            motion.rotX += (motion.targetX - motion.rotX) * 0.11;
            motion.rotY += (motion.targetY - motion.rotY) * 0.11;
            motion.zoom += (motion.targetZoom - motion.zoom) * 0.13;
            project();
            window.requestAnimationFrame(tick);
          }
          container.addEventListener("pointerdown", function(event) {
            motion.dragging = true;
            motion.moved = false;
            motion.startX = event.clientX;
            motion.startY = event.clientY;
            motion.startRotX = motion.targetX;
            motion.startRotY = motion.targetY;
            container.classList.add("is-dragging");
            if (container.setPointerCapture) container.setPointerCapture(event.pointerId);
          });
          container.addEventListener("pointermove", function(event) {
            if (!motion.dragging) return;
            var dx = event.clientX - motion.startX;
            var dy = event.clientY - motion.startY;
            if (Math.sqrt(dx * dx + dy * dy) > 10) motion.moved = true;
            motion.targetY = motion.startRotY + dx * 0.0075;
            motion.targetX = motion.startRotX - dy * 0.0062;
          });
          function endDrag() {
            motion.dragging = false;
            container.classList.remove("is-dragging");
            window.setTimeout(function() { motion.moved = false; }, 90);
          }
          container.addEventListener("pointerup", endDrag);
          container.addEventListener("pointercancel", endDrag);
          container.addEventListener("wheel", function(event) {
            event.preventDefault();
            var hoveredCard = event.target.closest(".stellar-card") || motion.hoveredCard;
            if (hoveredCard && container.contains(hoveredCard)) {
              var currentZoom = Number(hoveredCard.dataset.zoom || 1);
              var delta = Math.max(-120, Math.min(120, event.deltaY || 0));
              var nextZoom = clamp(currentZoom - delta * 0.0065, 1, 2.45);
              cards.forEach(function(card) {
                if (card === hoveredCard) return;
                card.dataset.zoom = "1";
              });
              hoveredCard.dataset.zoom = nextZoom.toFixed(2);
              hoveredCard.style.setProperty("--stellar-image-zoom", "1");
              syncZoomingState();
              return;
            }
            motion.targetZoom = clamp(motion.targetZoom - Math.max(-120, Math.min(120, event.deltaY || 0)) * 0.0018, 0.82, 1.45);
          }, { passive: false });
          if (overlay) overlay.addEventListener("wheel", function(event) {
            if (!overlay.classList.contains("is-open")) return;
            var surface = expanded ? expanded.querySelector(".stellar-card-surface") : null;
            if (!surface) return;
            event.preventDefault();
            var delta = Math.max(-120, Math.min(120, event.deltaY || 0));
            zoomStellarSurface(surface, delta, 2.75);
          }, { passive: false });
          container.addEventListener("click", function(event) {
            var card = event.target.closest(".stellar-card");
            if (!card || !container.contains(card)) return;
            if (motion.dragging || motion.moved) return;
            openCard(card);
          });
          container.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight") { event.preventDefault(); motion.targetY += Math.PI / 8; }
            if (event.key === "ArrowLeft") { event.preventDefault(); motion.targetY -= Math.PI / 8; }
            if (event.key === "ArrowUp") { event.preventDefault(); motion.targetX -= 0.18; }
            if (event.key === "ArrowDown") { event.preventDefault(); motion.targetX += 0.18; }
            if (event.key === "Escape") closeOverlay();
          });
          if (close) close.addEventListener("click", closeOverlay);
          if (overlay) overlay.addEventListener("click", function(event) {
            if (event.target === overlay) closeOverlay();
          });
          window.addEventListener("resize", project);
          project();
          window.requestAnimationFrame(tick);
        });
      })();
      (function() {
        document.querySelectorAll(".masonry-gallery").forEach(function(gallery) {
          var cards = Array.prototype.slice.call(gallery.querySelectorAll("[data-masonry-card]"));
          if (!cards.length) return;
          if (!("IntersectionObserver" in window)) {
            cards.forEach(function(card) { card.classList.add("is-visible"); });
            return;
          }
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          }, { root: gallery, threshold: 0.16, rootMargin: "80px 0px" });
          cards.forEach(function(card) { observer.observe(card); });
        });
      })();
      (function() {
        function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
        document.querySelectorAll(".image-gallery").forEach(function(gallery) {
          var items = Array.prototype.slice.call(gallery.querySelectorAll(".image-gallery-item"));
          if (!items.length) return;
          var speed = ${state.hero.speed === "fast" ? "0.18" : state.hero.speed === "slow" ? "0.055" : "0.1"};
          var autoPlay = ${shouldPlay ? "true" : "false"};
          var motion = {
            rotation: 0,
            targetRotation: 0,
            dragging: false,
            moved: false,
            startX: 0,
            startY: 0,
            startRotation: 0
          };
          function layout() {
            var rect = gallery.getBoundingClientRect();
            var width = rect.width || 1;
            var height = rect.height || 1;
            var count = items.length;
            var cardWidth = clamp(Math.min(width * 0.145, height * 0.25), 64, 150);
            var cardHeight = cardWidth;
            var path = {
              x0: width * 0.05,
              y0: height * 0.86,
              x1: width * 0.5,
              y1: height * 0.06,
              x2: width * 0.95,
              y2: height * 0.86
            };
            var pathLength = Math.hypot(path.x1 - path.x0, path.y1 - path.y0) + Math.hypot(path.x2 - path.x1, path.y2 - path.y1);
            var step = clamp((cardWidth * 1.64) / Math.max(pathLength, 1), 0.17, 0.24);
            var trackSpan = Math.max(1.32, count * step);
            gallery.style.setProperty("--ig-card-w", cardWidth.toFixed(2) + "px");
            gallery.style.setProperty("--ig-card-h", cardHeight.toFixed(2) + "px");
            items.forEach(function(item, index) {
              var progress = ((index * step + motion.rotation / 360) % trackSpan + trackSpan) % trackSpan;
              var isOnPath = progress <= 1;
              var visibleProgress = clamp(progress, 0, 1);
              var inv = 1 - visibleProgress;
              var absoluteX = inv * inv * path.x0 + 2 * inv * visibleProgress * path.x1 + visibleProgress * visibleProgress * path.x2;
              var absoluteY = inv * inv * path.y0 + 2 * inv * visibleProgress * path.y1 + visibleProgress * visibleProgress * path.y2;
              var dx = 2 * inv * (path.x1 - path.x0) + 2 * visibleProgress * (path.x2 - path.x1);
              var dy = 2 * inv * (path.y1 - path.y0) + 2 * visibleProgress * (path.y2 - path.y1);
              var arcPeak = 1 - Math.abs(visibleProgress - 0.5) * 2;
              var x = absoluteX - width / 2;
              var y = absoluteY - height / 2;
              var scale = 0.84 + arcPeak * 0.1;
              var opacity = isOnPath ? 1 : 0;
              var rotation = Math.atan2(dy, dx) * 180 / Math.PI * 0.42;
              item.style.setProperty("--ig-x", x.toFixed(2) + "px");
              item.style.setProperty("--ig-y", y.toFixed(2) + "px");
              item.style.setProperty("--ig-rotate", rotation.toFixed(2) + "deg");
              item.style.setProperty("--ig-scale", scale.toFixed(3));
              item.style.setProperty("--ig-opacity", opacity.toFixed(3));
              item.style.zIndex = String(Math.round(1000 - absoluteY));
            });
          }
          function tick() {
            if (autoPlay && !motion.dragging) motion.targetRotation += speed;
            motion.rotation += (motion.targetRotation - motion.rotation) * 0.11;
            layout();
            window.requestAnimationFrame(tick);
          }
          gallery.addEventListener("pointerdown", function(event) {
            motion.dragging = true;
            motion.moved = false;
            motion.startX = event.clientX;
            motion.startY = event.clientY;
            motion.startRotation = motion.targetRotation;
            gallery.classList.add("is-dragging");
            if (gallery.setPointerCapture) gallery.setPointerCapture(event.pointerId);
          });
          gallery.addEventListener("pointermove", function(event) {
            if (!motion.dragging) return;
            var dx = event.clientX - motion.startX;
            var dy = event.clientY - motion.startY;
            if (Math.sqrt(dx * dx + dy * dy) > 4) motion.moved = true;
            motion.targetRotation = motion.startRotation + dx * 0.22 + dy * 0.08;
          });
          function endDrag() {
            motion.dragging = false;
            gallery.classList.remove("is-dragging");
            window.setTimeout(function() { motion.moved = false; }, 80);
          }
          gallery.addEventListener("pointerup", endDrag);
          gallery.addEventListener("pointercancel", endDrag);
          gallery.addEventListener("wheel", function(event) {
            event.preventDefault();
            motion.targetRotation += Math.max(-120, Math.min(120, event.deltaY || event.deltaX || 0)) * 0.12;
          }, { passive: false });
          gallery.addEventListener("keydown", function(event) {
            if (event.key === "ArrowRight" || event.key === "ArrowDown") {
              event.preventDefault();
              motion.targetRotation += 360 / items.length;
            }
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
              event.preventDefault();
              motion.targetRotation -= 360 / items.length;
            }
          });
          window.addEventListener("resize", layout);
          layout();
          window.requestAnimationFrame(tick);
        });
      })();
      (function() {
        document.querySelectorAll(".image-trail").forEach(function(container) {
          var layer = container.querySelector(".image-trail-layer");
          var sources = Array.prototype.slice.call(container.querySelectorAll(".image-trail-source-card"));
          if (!layer || !sources.length) return;
          var interval = 82;
          var lifetime = 1080;
          var motion = { lastSpawn: 0, lastX: -9999, lastY: -9999, index: 0, z: 1 };
          function spawn(x, y, force) {
            var now = performance.now();
            var dx = x - motion.lastX;
            var dy = y - motion.lastY;
            var moved = Math.sqrt(dx * dx + dy * dy);
            if (!force && (now - motion.lastSpawn < interval || moved < 12)) return;
            motion.lastSpawn = now;
            motion.lastX = x;
            motion.lastY = y;
            var source = sources[motion.index % sources.length];
            motion.index += 1;
            var item = document.createElement("div");
            item.className = "image-trail-item";
            item.style.left = x + "px";
            item.style.top = y + "px";
            item.style.zIndex = String(motion.z++);
            item.style.setProperty("--trail-rotate", (((Math.random() - 0.5) * 18).toFixed(2)) + "deg");
            item.style.setProperty("--trail-duration", lifetime + "ms");
            item.appendChild(source.cloneNode(true));
            layer.appendChild(item);
            window.setTimeout(function() { item.remove(); }, lifetime + 80);
          }
          container.addEventListener("pointerenter", function(event) {
            var rect = container.getBoundingClientRect();
            spawn(event.clientX - rect.left, event.clientY - rect.top, true);
          });
          container.addEventListener("pointermove", function(event) {
            var rect = container.getBoundingClientRect();
            spawn(event.clientX - rect.left, event.clientY - rect.top, false);
          });
        });
      })();
      (function() {
        function lerp(start, end, t) { return start * (1 - t) + end * t; }
        function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
        document.querySelectorAll(".scroll-morph").forEach(function(container) {
          var cards = Array.prototype.slice.call(container.querySelectorAll(".scroll-morph-card"));
          if (!cards.length) return;
          var total = cards.length;
          var maxScroll = 3000;
          var local = {
            phase: "scatter",
            scroll: 0,
            targetScroll: 0,
            morph: 0,
            rotate: 0,
            parallax: 0,
            parallaxTarget: 0,
            touchY: 0
          };
          function setTargets() {
            var rect = container.getBoundingClientRect();
            var width = rect.width || 1;
            var height = rect.height || 1;
            var minDimension = Math.min(width, height);
            var morphTarget = clamp(local.scroll / 600, 0, 1);
            var rotateTarget = clamp((local.scroll - 600) / (maxScroll - 600), 0, 1) * 360;
            local.morph = lerp(local.morph, morphTarget, 0.075);
            local.rotate = lerp(local.rotate, rotateTarget, 0.075);
            local.parallax = lerp(local.parallax, local.parallaxTarget, 0.08);
            container.style.setProperty("--sm-copy-opacity", clamp((local.morph - 0.8) / 0.2, 0, 1).toFixed(3));
            cards.forEach(function(card, index) {
              var x = Number(card.dataset.scatterX || 0);
              var y = Number(card.dataset.scatterY || 0);
              var rotation = Number(card.dataset.scatterR || 0);
              var scale = 0.6;
              var opacity = 0;
              if (local.phase === "line") {
                var lineSpacing = Math.min(70, Math.max(42, width / Math.max(total - 1, 1)));
                var lineTotal = (total - 1) * lineSpacing;
                x = index * lineSpacing - lineTotal / 2;
                y = 0;
                rotation = 0;
                scale = 1;
                opacity = 1;
              } else if (local.phase === "circle") {
                var circleRadius = Math.min(minDimension * 0.35, 350);
                var circleAngle = (index / total) * 360;
                var circleRad = circleAngle * Math.PI / 180;
                var circleX = Math.cos(circleRad) * circleRadius;
                var circleY = Math.sin(circleRad) * circleRadius;
                var circleRotation = circleAngle + 90;
                var isMobile = width < 768;
                var baseRadius = Math.min(width, height * 1.5);
                var arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                var arcApexY = height * (isMobile ? 0.35 : 0.25);
                var arcCenterY = arcApexY + arcRadius;
                var spreadAngle = isMobile ? 100 : 130;
                var startAngle = -90 - spreadAngle / 2;
                var step = spreadAngle / Math.max(total - 1, 1);
                var scrollProgress = clamp(local.rotate / 360, 0, 1);
                var boundedRotation = -scrollProgress * spreadAngle * 0.8;
                var currentArcAngle = startAngle + index * step + boundedRotation;
                var arcRad = currentArcAngle * Math.PI / 180;
                var arcX = Math.cos(arcRad) * arcRadius + local.parallax;
                var arcY = Math.sin(arcRad) * arcRadius + arcCenterY - height * 0.5;
                var arcRotation = currentArcAngle + 90;
                var arcScale = isMobile ? 1.25 : 1.58;
                x = lerp(circleX, arcX, local.morph);
                y = lerp(circleY, arcY, local.morph);
                rotation = lerp(circleRotation, arcRotation, local.morph);
                scale = lerp(1, arcScale, local.morph);
                opacity = 1;
              }
              card.style.setProperty("--sm-x", x.toFixed(2) + "px");
              card.style.setProperty("--sm-y", y.toFixed(2) + "px");
              card.style.setProperty("--sm-rotate", rotation.toFixed(2) + "deg");
              card.style.setProperty("--sm-scale", scale.toFixed(3));
              card.style.setProperty("--sm-opacity", opacity.toFixed(3));
              card.style.zIndex = String(Math.round(1000 + y));
            });
          }
          function tick() {
            local.scroll = lerp(local.scroll, local.targetScroll, 0.12);
            setTargets();
            window.requestAnimationFrame(tick);
          }
          container.addEventListener("wheel", function(event) {
            event.preventDefault();
            local.targetScroll = clamp(local.targetScroll + event.deltaY, 0, maxScroll);
          }, { passive: false });
          container.addEventListener("touchstart", function(event) {
            local.touchY = event.touches[0].clientY;
          }, { passive: false });
          container.addEventListener("touchmove", function(event) {
            event.preventDefault();
            var y = event.touches[0].clientY;
            local.targetScroll = clamp(local.targetScroll + local.touchY - y, 0, maxScroll);
            local.touchY = y;
          }, { passive: false });
          container.addEventListener("mousemove", function(event) {
            var rect = container.getBoundingClientRect();
            var normalized = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
            local.parallaxTarget = normalized * 100;
          });
          window.setTimeout(function() { local.phase = "line"; }, 500);
          window.setTimeout(function() { local.phase = "circle"; }, 2500);
          setTargets();
          window.requestAnimationFrame(tick);
        });
      })();
      (function() {
        function stackStyle(index, current, total) {
          var diff = index - current;
          if (diff > total / 2) diff -= total;
          if (diff < -total / 2) diff += total;
          if (diff === 0) return { y: 0, depth: 0, scale: 1, opacity: 1, zIndex: 100, rotateX: 0 };
          if (diff === -1) return { y: -205, depth: 0, scale: 0.86, opacity: 0.42, zIndex: 12, rotateX: 0 };
          if (diff === -2) return { y: -320, depth: 0, scale: 0.74, opacity: 0.16, zIndex: 6, rotateX: 0 };
          if (diff === 1) return { y: 205, depth: 0, scale: 0.86, opacity: 0.42, zIndex: 12, rotateX: 0 };
          if (diff === 2) return { y: 320, depth: 0, scale: 0.74, opacity: 0.16, zIndex: 6, rotateX: 0 };
          return { y: diff > 0 ? 430 : -430, depth: 0, scale: 0.66, opacity: 0, zIndex: 0, rotateX: 0 };
        }
        document.querySelectorAll(".vertical-image-stack").forEach(function(stack) {
          var cards = Array.prototype.slice.call(stack.querySelectorAll(".vertical-stack-card"));
          var dots = Array.prototype.slice.call(stack.querySelectorAll(".vertical-stack-dot"));
          var currentNode = stack.querySelector(".vertical-stack-current");
          var total = cards.length;
          var current = Number(stack.dataset.current) || 0;
          var last = 0;
          var startY = 0;
          function apply() {
            cards.forEach(function(card, index) {
              var style = stackStyle(index, current, total);
              card.style.setProperty("--stack-y", style.y + "px");
              card.style.setProperty("--stack-depth", style.depth + "px");
              card.style.setProperty("--stack-scale", style.scale);
              card.style.setProperty("--stack-opacity", style.opacity);
              card.style.setProperty("--stack-rotate", style.rotateX + "deg");
              card.style.setProperty("--stack-z", style.zIndex);
              card.classList.toggle("is-current", index === current);
            });
            dots.forEach(function(dot, index) { dot.classList.toggle("is-active", index === current); });
            if (currentNode) currentNode.textContent = String(current + 1).padStart(2, "0");
          }
          function navigate(direction) {
            var now = Date.now();
            if (now - last < 400) return;
            last = now;
            current = (current + direction + total) % total;
            apply();
          }
          dots.forEach(function(dot, index) {
            dot.addEventListener("click", function(event) {
              event.stopPropagation();
              current = index;
              apply();
            });
          });
          stack.addEventListener("wheel", function(event) {
            if (Math.abs(event.deltaY) <= 30) return;
            event.preventDefault();
            navigate(event.deltaY > 0 ? 1 : -1);
          }, { passive: false });
          stack.addEventListener("pointerdown", function(event) {
            startY = event.clientY;
            stack.classList.add("is-dragging");
          });
          stack.addEventListener("pointerup", function(event) {
            stack.classList.remove("is-dragging");
            var offset = event.clientY - startY;
            if (Math.abs(offset) > 50) navigate(offset < 0 ? 1 : -1);
          });
          stack.addEventListener("pointercancel", function() { stack.classList.remove("is-dragging"); });
          apply();
          window.setInterval(function() { navigate(1); }, ${state.hero.speed === "fast" ? 1400 : state.hero.speed === "slow" ? 3200 : 2200});
        });
      })();
      (function() {
        function applyLayerZoom(container, layer, nextZoom, activate) {
          var stage = container.querySelector(".zoom-parallax-stage") || container;
          var baseWidth = Math.max(layer.offsetWidth, 1);
          var baseHeight = Math.max(layer.offsetHeight, 1);
          var maxZoom = Math.max(1, Math.min(2.15, (stage.clientWidth * 0.86) / baseWidth, (stage.clientHeight * 0.86) / baseHeight));
          var zoom = Math.min(maxZoom, Math.max(1, Number(nextZoom) || 1));
          layer.dataset.zoom = zoom.toFixed(2);
          layer.style.setProperty("--card-scale", zoom.toFixed(3));
          layer.style.setProperty("--control-scale", (1 / zoom).toFixed(3));
          layer.style.setProperty("--layer-opacity", zoom > 1.02 ? "1" : "0.96");
          var shouldCenter = zoom > 1.02 && activate;
          if (activate) {
            Array.prototype.slice.call(container.querySelectorAll(".zoom-parallax-layer")).forEach(function(item) {
              item.classList.toggle("is-active", shouldCenter && item === layer);
              if (item !== layer) {
                item.style.zIndex = item.dataset.homeZ || "1";
                item.style.setProperty("--focus-x", "0px");
                item.style.setProperty("--focus-y", "0px");
                item.style.setProperty("--control-scale", "1");
              }
            });
            layer.style.zIndex = shouldCenter ? String(120 + Math.round(zoom * 10)) : layer.dataset.homeZ || "1";
          } else {
            layer.style.zIndex = layer.dataset.homeZ || "1";
          }
          if (shouldCenter) {
            var offsetX = stage.clientWidth / 2 - (layer.offsetLeft + baseWidth / 2);
            var offsetY = stage.clientHeight / 2 - (layer.offsetTop + baseHeight / 2);
            layer.style.setProperty("--focus-x", offsetX.toFixed(2) + "px");
            layer.style.setProperty("--focus-y", offsetY.toFixed(2) + "px");
          } else if (zoom <= 1.02) {
            layer.style.setProperty("--focus-x", "0px");
            layer.style.setProperty("--focus-y", "0px");
            layer.classList.remove("is-active");
          }
        }
        document.querySelectorAll(".zoom-parallax").forEach(function(container) {
          Array.prototype.slice.call(container.querySelectorAll(".zoom-parallax-layer")).forEach(function(layer) {
            applyLayerZoom(container, layer, Number(layer.dataset.zoom) || 1, false);
          });
          container.addEventListener("wheel", function(event) {
            if (Math.abs(event.deltaY) < 8) return;
            var frame = event.target.closest(".zoom-parallax-frame");
            if (!frame || !container.contains(frame)) return;
            var layer = frame.closest(".zoom-parallax-layer");
            if (!layer) return;
            event.preventDefault();
            applyLayerZoom(container, layer, (Number(layer.dataset.zoom) || 1) + (event.deltaY < 0 ? 0.16 : -0.16), true);
          }, { passive: false });
          container.addEventListener("click", function(event) {
            var button = event.target.closest("[data-mosaic-action]");
            var frame = event.target.closest(".zoom-parallax-frame");
            if (!frame || !container.contains(frame)) return;
            var layer = frame.closest(".zoom-parallax-layer");
            if (!layer) return;
            var current = Number(layer.dataset.zoom) || 1;
            if (button && button.dataset.mosaicAction === "in") applyLayerZoom(container, layer, current + 0.24, true);
            else if (button && button.dataset.mosaicAction === "out") applyLayerZoom(container, layer, current - 0.24, true);
            else if (button && button.dataset.mosaicAction === "reset") applyLayerZoom(container, layer, 1, true);
            else applyLayerZoom(container, layer, current > 1.08 ? 1 : 1.5, true);
          });
        });
      })();
      document.addEventListener("click", function(event) {
        var copyNode = event.target.closest("[data-copy]");
        if (copyNode && navigator.clipboard) navigator.clipboard.writeText(copyNode.dataset.copy);
        var back = event.target.closest("[data-project-back]");
        if (back) {
          event.preventDefault();
          window.location.hash = "works";
          updateProjectRoute();
          return;
        }
        var card = event.target.closest(".work-card");
        if (card && card.dataset.projectSlug) {
          event.preventDefault();
          window.location.hash = "/works/" + encodeURIComponent(card.dataset.projectSlug);
          return;
        }
        if (card) card.classList.toggle("is-expanded");
        var qr = event.target.closest("[data-qr]");
        if (qr && qr.querySelector("img")) {
          var overlay = document.createElement("div");
          overlay.className = "modal";
          overlay.innerHTML = '<button class="modal-close">×</button><img src="' + qr.querySelector("img").src + '" alt="微信二维码">';
          overlay.onclick = function() { overlay.remove(); };
          document.body.appendChild(overlay);
        }
      });
      updateProjectRoute();
    <\/script>
  </body></html>`;
}

function ensureMediaCapacity(size) {
  while (state.hero.media.length < size) state.hero.media.push(null);
}

function pickImage(callback) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.onchange = () => {
    const file = input.files[0];
    if (file) readImage(file, callback);
  };
  input.click();
}

function readImage(file, callback) {
  if (!file.type.startsWith("image/")) return;
  if (file.type === "image/gif") {
    const gifReader = new FileReader();
    gifReader.onload = () => callback({
      src: gifReader.result,
      thumb: gifReader.result,
      name: file.name,
      type: file.type,
      originalSrc: gifReader.result,
      originalSize: file.size,
      isAnimated: true
    });
    gifReader.readAsDataURL(file);
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    optimizeImageDataURL(reader.result, file)
      .then(callback)
      .catch(() => callback({ src: reader.result, thumb: reader.result, name: file.name, type: file.type, originalSize: file.size }));
  };
  reader.readAsDataURL(file);
}

function optimizeImageDataURL(dataURL, file) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const width = image.naturalWidth || image.width;
      const height = image.naturalHeight || image.height;
      if (!width || !height) {
        reject(new Error("Image has no dimensions"));
        return;
      }
      const source = shouldKeepOriginal(file, width, height)
        ? dataURL
        : resizeImage(image, 2400, 0.92);
      const thumb = resizeImage(image, 420, 0.72);
      resolve({
        src: source,
        thumb,
        originalSrc: dataURL,
        name: file.name,
        type: dataURLType(source),
        width,
        height,
        originalSize: file.size,
        size: dataURLSize(source)
      });
    };
    image.onerror = reject;
    image.src = dataURL;
  });
}

function shouldKeepOriginal(file, width, height) {
  return file.size < 1800000 && Math.max(width, height) <= 2400;
}

function resizeImage(image, maxSide, quality) {
  const width = image.naturalWidth || image.width;
  const height = image.naturalHeight || image.height;
  const scale = Math.min(1, maxSide / Math.max(width, height));
  const targetWidth = Math.max(1, Math.round(width * scale));
  const targetHeight = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const context = canvas.getContext("2d", { alpha: false });
  context.fillStyle = "#111";
  context.fillRect(0, 0, targetWidth, targetHeight);
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(image, 0, 0, targetWidth, targetHeight);
  const webp = canvas.toDataURL("image/webp", quality);
  if (webp.startsWith("data:image/webp")) return webp;
  return canvas.toDataURL("image/jpeg", quality);
}

function dataURLType(dataURL) {
  const match = /^data:([^;]+);/.exec(dataURL);
  return match ? match[1] : "image/webp";
}

function dataURLSize(dataURL) {
  const comma = dataURL.indexOf(",");
  const base64 = comma >= 0 ? dataURL.slice(comma + 1) : dataURL;
  return Math.round((base64.length * 3) / 4);
}

function textInput(label, key, value, group = "about") {
  return `<label><span>${label}</span><input data-${group}="${key}" value="${escapeAttr(value)}"></label>`;
}

function textArea(label, key, value, group = "about") {
  return `<label><span>${label}</span><textarea data-${group}="${key}">${escapeHTML(value)}</textarea></label>`;
}

function smallInput(label, key, value) {
  return `<label><span>${label}</span><input data-work-field="${key}" value="${escapeAttr(value)}"></label>`;
}

function smallArea(label, key, value) {
  return `<label><span>${label}</span><textarea data-work-field="${key}">${escapeHTML(value)}</textarea></label>`;
}

function visibilityInput(key, label) {
  return `<label><input type="checkbox" data-visibility="${key}" ${state.contact.visibility[key] ? "checked" : ""}> ${label}公开</label>`;
}

function option(value, label, selected) {
  return `<option value="${value}" ${value === selected ? "selected" : ""}>${label}</option>`;
}

function splitList(value) {
  return String(value || "")
    .split(/[,，/、\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function formatLines(value) {
  return escapeHTML(value).replace(/\n/g, "<br>");
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/`/g, "&#096;");
}

init();
