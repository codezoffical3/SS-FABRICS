// ss-navbar.js
(function () {
  "use strict";

  // Only run after the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    const container = document.getElementById("ss-navbar");
    if (!container) {
      console.warn("SS Navbar: container #ss-navbar not found.");
      return;
    }

    // Inject the full navbar HTML
    container.innerHTML = `
      <nav id="ss-main-nav" class="sticky top-0 w-full h-[90px] flex items-center z-50 bg-brand-bg/95 backdrop-blur-md border-b border-brand-border/30 transition-all duration-300" style="background-color: rgba(250,249,247,0.92);">
        <div class="relative flex justify-between items-center w-full max-w-[1500px] mx-auto px-5 md:px-8 lg:px-12 h-full">
          
          <!-- Logo (Left) -->
          <a href="index.html" class="flex-shrink-0 z-10" aria-label="SS Fabrics Home">
  <img 
    class="h-[100px] md:h-[100px] w-auto transition-all duration-300 hover:scale-[1.04] hover:brightness-110" 
    src="assests/images/ss-fabrics-logo.png" 
    alt="SS Fabrics" 
  />
</a>
          
          <!-- Center Nav Links (Desktop) -->
          <div class="hidden md:flex items-center gap-[42px] absolute left-1/2 -translate-x-1/2 z-0" id="ss-nav-links">
            <a href="men.html" class="ss-nav-link" data-mega="ss-men-mega">Men</a>
            <a href="women.html" class="ss-nav-link" data-mega="ss-women-mega">Women</a>
            <a href="jewellery.html" class="ss-nav-link" data-mega="ss-jewellery-mega">Jewellery</a>
            <a href="#owners-choice" class="ss-nav-link" data-mega="ss-owners-mega">Owner's Choice</a>
          </div>
          
          <!-- Right Icons -->
          <div class="flex items-center gap-3 md:gap-5 z-10 flex-shrink-0">
            <button class="ss-icon-btn" id="ss-search-trigger" aria-label="Search">
              <span class="material-symbols-outlined text-[24px]">search</span>
            </button>
            <div class="relative hidden sm:block" id="ss-account-wrapper">
              <button class="ss-icon-btn" id="ss-account-trigger" aria-label="Account">
                <span class="material-symbols-outlined text-[24px]">account_circle</span>
              </button>
              <div class="ss-account-dropdown" id="ss-account-dropdown">
                <a href="#">Sign In</a>
                <a href="#">Register</a>
                <div class="ss-separator"></div>
                <a href="#">My Orders</a>
                <a href="#">Wishlist</a>
                <a href="#">Profile</a>
                <div class="ss-separator"></div>
                <a href="#" class="ss-logout">Logout</a>
              </div>
            </div>
            <button class="ss-icon-btn relative" id="ss-cart-trigger" aria-label="Shopping Bag">
              <span class="material-symbols-outlined text-[24px]">shopping_bag</span>
              <span class="ss-cart-badge" id="ss-cart-badge">2</span>
            </button>
            <button class="ss-icon-btn md:hidden" id="ss-mobile-menu-trigger" aria-label="Menu">
              <span class="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
        
        <!-- Mega Menu: Men -->
        <div class="ss-mega-panel" id="ss-men-mega">
          <div class="ss-mega-grid">
            <div>
              <p class="ss-mega-heading">Categories</p>
              <a href="#">Wash & Wear</a><a href="#">Cotton</a><a href="#">Unstitched</a><a href="#">Boski</a><a href="#">Latha</a><a href="#">Kurta Collection</a><a href="#">Shalwar Kameez</a><a href="#">Formal Wear</a><a href="#">Winter Collection</a><a href="#">Summer Collection</a>
            </div>
            <div>
              <p class="ss-mega-heading">Popular Brands</p>
              <div class="ss-brand-pills">
                <span class="ss-brand-pill">Grace</span><span class="ss-brand-pill">Dynasty</span><span class="ss-brand-pill">J. Jamshed</span><span class="ss-brand-pill">Bonanza</span><span class="ss-brand-pill">Charcoal</span><span class="ss-brand-pill">Almirah</span><span class="ss-brand-pill">Edenrobe</span><span class="ss-brand-pill">Cambridge</span>
              </div>
            </div>
            <div>
              <p class="ss-mega-heading">Featured Collections</p>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">checkroom</span> Luxury Wash & Wear</div>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">business_center</span> Executive Collection</div>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">spa</span> Premium Cotton</div>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">favorite</span> Wedding Collection</div>
            </div>
            <div class="ss-promo-banner">
              <div class="ss-promo-overlay"></div>
              <div class="ss-promo-content">
                <p class="ss-promo-kicker">New Season</p>
                <p class="ss-promo-title">Luxury<br>Shalwar Kameez</p>
                <p class="ss-promo-text">Premium fabrics for the modern gentleman</p>
                <button class="ss-promo-btn">Shop Now →</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mega Menu: Women -->
        <div class="ss-mega-panel" id="ss-women-mega">
          <div class="ss-mega-grid">
            <div>
              <p class="ss-mega-heading">Categories</p>
              <a href="#">2 Piece</a><a href="#">3 Piece</a><a href="#">Luxury Lawn</a><a href="#">Chiffon</a><a href="#">Cotton</a><a href="#">Formal</a><a href="#">Pret</a><a href="#">Unstitched</a><a href="#">Luxury Pret</a>
            </div>
            <div>
              <p class="ss-mega-heading">Top Brands</p>
              <div class="ss-brand-pills">
                <span class="ss-brand-pill">Sapphire</span><span class="ss-brand-pill">Limelight</span><span class="ss-brand-pill">Zellbury</span><span class="ss-brand-pill">Maria B</span><span class="ss-brand-pill">Tawakkal</span><span class="ss-brand-pill">Agha Noor</span><span class="ss-brand-pill">Alkaram</span><span class="ss-brand-pill">Nishat</span>
              </div>
            </div>
            <div>
              <p class="ss-mega-heading">Collection Previews</p>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">auto_awesome</span> Luxury Lawn '26</div>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">nights_stay</span> Evening Elegance</div>
              <div class="ss-collection-preview"><span class="material-symbols-outlined">park</span> Summer Bloom</div>
            </div>
            <div class="ss-promo-banner ss-women-promo">
              <div class="ss-promo-overlay"></div>
              <div class="ss-promo-content">
                <p class="ss-promo-kicker">Eid Collection</p>
                <p class="ss-promo-title">Elegant<br>Pakistani Dress</p>
                <p class="ss-promo-text">Exquisite embroidery & luxury fabrics</p>
                <button class="ss-promo-btn">Explore →</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Mega Menu: Jewellery -->
        <div class="ss-mega-panel" id="ss-jewellery-mega">
          <div class="ss-jewellery-layout">
            <div class="ss-jewellery-grid">
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">necklace</span> Necklace</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">bracelet</span> Bracelets</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">circle</span> Bangles</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">diamond</span> Rings</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">earbuds</span> Earrings</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">inventory_2</span> Sets</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">water_drop</span> Pearls</a>
              <a href="#" class="ss-jewellery-item"><span class="material-symbols-outlined">favorite</span> Bridal</a>
            </div>
            <div class="ss-jewellery-hero">
              <span class="material-symbols-outlined">diamond</span>
              <p>Fine Jewellery</p>
              <p>Handcrafted with gold accents</p>
              <button>View All →</button>
            </div>
          </div>
        </div>
        
        <!-- Mega Menu: Owner's Choice -->
        <div class="ss-mega-panel" id="ss-owners-mega">
          <div class="ss-owners-layout">
            <div class="ss-owners-cards">
              <a href="#"><span class="material-symbols-outlined">star</span> Editor's Picks<span>Curated by our style experts</span></a>
              <a href="#"><span class="material-symbols-outlined">trending_up</span> Trending Now<span>What everyone is loving</span></a>
              <a href="#"><span class="material-symbols-outlined">crown</span> Premium Collection<span>Our finest selection</span></a>
              <a href="#"><span class="material-symbols-outlined">military_tech</span> Best Sellers<span>Timeless favorites</span></a>
              <a href="#"><span class="material-symbols-outlined">new_releases</span> New Arrivals<span>Fresh from the atelier</span></a>
            </div>
            <div class="ss-owners-banner">
              <p>The Atelier</p>
              <p>Curated<br>by the Owner</p>
              <p>A personal selection of the finest pieces</p>
              <button>Discover →</button>
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Search Modal -->
      <div class="ss-search-modal" id="ss-search-modal">
        <div class="ss-search-inner">
          <div class="ss-search-field">
            <span class="material-symbols-outlined">search</span>
            <input type="text" id="ss-search-input" placeholder="Search for luxury fabrics, styles, brands..." aria-label="Search">
            <button id="ss-search-close"><span class="material-symbols-outlined">close</span></button>
          </div>
          <div class="ss-trending">
            <p>Trending Searches</p>
            <span>Luxury Lawn</span><span>Wedding Collection</span><span>Maria B</span><span>Sapphire</span><span>Shalwar Kameez</span>
          </div>
          <div class="ss-suggested">
            <p>Suggested Products</p>
            <div class="ss-suggested-item"><span class="material-symbols-outlined">checkroom</span><div><p>Premium Cotton Kurta</p><p>Men · Wash & Wear</p></div></div>
            <div class="ss-suggested-item"><span class="material-symbols-outlined">apparel</span><div><p>Luxury Lawn 3-Piece</p><p>Women · Luxury Lawn</p></div></div>
          </div>
        </div>
      </div>
      
      <!-- Cart Overlay -->
      <div class="ss-cart-overlay" id="ss-cart-overlay"></div>
      <!-- Cart Drawer -->
      <div class="ss-cart-drawer" id="ss-cart-drawer">
        <div class="ss-cart-header">
          <h2>Shopping Bag <span>(2)</span></h2>
          <button id="ss-cart-close"><span class="material-symbols-outlined">close</span></button>
        </div>
        <div class="ss-cart-items">
          <div class="ss-cart-item">
            <div class="ss-cart-img"><span class="material-symbols-outlined">checkroom</span></div>
            <div>
              <p>Premium Cotton Kurta</p>
              <p>Color: Ivory · Fabric: Cotton</p>
              <div class="ss-qty"><button>−</button><span>1</span><button>+</button></div>
              <button class="ss-remove">Remove</button>
              <p class="ss-price">Rs. 4,500</p>
            </div>
          </div>
          <div class="ss-cart-item">
            <div class="ss-cart-img"><span class="material-symbols-outlined">apparel</span></div>
            <div>
              <p>Luxury Lawn 3-Piece</p>
              <p>Color: Mint · Fabric: Lawn</p>
              <div class="ss-qty"><button>−</button><span>1</span><button>+</button></div>
              <button class="ss-remove">Remove</button>
              <p class="ss-price">Rs. 6,800</p>
            </div>
          </div>
        </div>
        <div class="ss-cart-footer">
          <div class="ss-subtotal"><span>Subtotal</span><span>Rs. 11,300</span></div>
          <button class="ss-checkout-btn">Proceed to Checkout</button>
          <p>Free shipping on orders over Rs. 5,000</p>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div class="ss-mobile-menu" id="ss-mobile-menu">
        <div class="ss-mobile-header">
          <span>Menu</span>
          <button id="ss-mobile-close"><span class="material-symbols-outlined">close</span></button>
        </div>
        <div class="ss-mobile-links">
          <button class="ss-mobile-accordion" data-target="ss-mob-men">Men <span class="material-symbols-outlined">expand_more</span></button>
          <div class="ss-mobile-sub" id="ss-mob-men">
            <a href="#">Wash & Wear</a><a href="#">Cotton</a><a href="#">Unstitched</a><a href="#">Kurta Collection</a><a href="#">Formal Wear</a>
          </div>
          <button class="ss-mobile-accordion" data-target="ss-mob-women">Women <span class="material-symbols-outlined">expand_more</span></button>
          <div class="ss-mobile-sub" id="ss-mob-women">
            <a href="#">2 Piece</a><a href="#">3 Piece</a><a href="#">Luxury Lawn</a><a href="#">Chiffon</a><a href="#">Formal</a>
          </div>
          <a href="#jewellery" class="ss-mobile-link">Jewellery</a>
          <a href="#owners-choice" class="ss-mobile-link">Owner's Choice</a>
          <a href="#" class="ss-mobile-link sm:hidden">My Account</a>
        </div>
      </div>
    `;

    // Now attach all event listeners and logic
    attachEvents();
  }

  function attachEvents() {
    const root = document.getElementById("ss-navbar");
    if (!root) return;

    // ---------- Selectors ----------
    const mainNav = root.querySelector("#ss-main-nav");
    const navLinks = root.querySelectorAll(".ss-nav-link");
    const megaPanels = root.querySelectorAll(".ss-mega-panel");
    const searchTrigger = root.querySelector("#ss-search-trigger");
    const searchModal = root.querySelector("#ss-search-modal");
    const searchClose = root.querySelector("#ss-search-close");
    const searchInput = root.querySelector("#ss-search-input");
    const cartTrigger = root.querySelector("#ss-cart-trigger");
    const cartDrawer = root.querySelector("#ss-cart-drawer");
    const cartOverlay = root.querySelector("#ss-cart-overlay");
    const cartClose = root.querySelector("#ss-cart-close");
    const cartBadge = root.querySelector("#ss-cart-badge");
    const accountTrigger = root.querySelector("#ss-account-trigger");
    const accountDropdown = root.querySelector("#ss-account-dropdown");
    const accountWrapper = root.querySelector("#ss-account-wrapper");
    const mobileTrigger = root.querySelector("#ss-mobile-menu-trigger");
    const mobileMenu = root.querySelector("#ss-mobile-menu");
    const mobileClose = root.querySelector("#ss-mobile-close");
    const mobileAccordions = root.querySelectorAll(".ss-mobile-accordion");

    // ---------- Scroll shadow ----------
    function updateNavShadow() {
      if (window.scrollY > 8) {
        mainNav.classList.add("scrolled");
      } else {
        mainNav.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", updateNavShadow, { passive: true });
    updateNavShadow();

    // ---------- Mega menu state ----------
    let openPanel = null;
    let hoverTimeout = null;
    let navHover = false,
      panelHover = false;

    function openMega(panelId) {
      closeAllMega();
      const panel = root.querySelector("#" + panelId);
      if (panel) {
        panel.classList.add("open");
        openPanel = panel;
        const link = root.querySelector(`[data-mega="${panelId}"]`);
        if (link) link.setAttribute("aria-expanded", "true");
      }
    }

    function closeAllMega() {
      megaPanels.forEach((p) => p.classList.remove("open"));
      openPanel = null;
      navLinks.forEach((l) => l.setAttribute("aria-expanded", "false"));
    }

    function scheduleClose() {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        if (!navHover && !panelHover) closeAllMega();
      }, 180);
    }

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        navHover = true;
        clearTimeout(hoverTimeout);
        openMega(link.dataset.mega);
      });
      link.addEventListener("mouseleave", () => {
        navHover = false;
        scheduleClose();
      });
      link.addEventListener("focus", () => {
        navHover = true;
        clearTimeout(hoverTimeout);
        openMega(link.dataset.mega);
      });
      link.addEventListener("blur", () => {
        navHover = false;
        scheduleClose();
      });
    });

    megaPanels.forEach((panel) => {
      panel.addEventListener("mouseenter", () => {
        panelHover = true;
        clearTimeout(hoverTimeout);
      });
      panel.addEventListener("mouseleave", () => {
        panelHover = false;
        scheduleClose();
      });
    });

    mainNav.addEventListener("mouseenter", () => {
      navHover = true;
      clearTimeout(hoverTimeout);
    });
    mainNav.addEventListener("mouseleave", () => {
      navHover = false;
      scheduleClose();
    });

    // ---------- Search modal ----------
    function openSearch() {
      searchModal.classList.add("open");
      document.body.style.overflow = "hidden";
      setTimeout(() => searchInput.focus(), 150);
      closeAllMega();
      closeAccountDropdown();
      closeCartDrawer();
      closeMobileMenu();
    }
    function closeSearch() {
      searchModal.classList.remove("open");
      document.body.style.overflow = "";
    }
    searchTrigger.addEventListener("click", openSearch);
    searchClose.addEventListener("click", closeSearch);
    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) closeSearch();
    });

    // ---------- Cart drawer ----------
    function openCartDrawer() {
      cartDrawer.classList.add("open");
      cartOverlay.classList.add("open");
      document.body.style.overflow = "hidden";
      closeAllMega();
      closeSearch();
      closeAccountDropdown();
      closeMobileMenu();
    }
    function closeCartDrawer() {
      cartDrawer.classList.remove("open");
      cartOverlay.classList.remove("open");
      document.body.style.overflow = "";
    }
    cartTrigger.addEventListener("click", openCartDrawer);
    cartClose.addEventListener("click", closeCartDrawer);
    cartOverlay.addEventListener("click", closeCartDrawer);

    // Bounce badge
    function bounceBadge() {
      if (!cartBadge) return;
      cartBadge.style.animation = "none";
      cartBadge.offsetHeight;
      cartBadge.style.animation =
        "ssBounceBadge 0.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards";
    }
    cartTrigger.addEventListener("click", () => setTimeout(bounceBadge, 400));

    // ---------- Account dropdown ----------
    function openAccountDropdown() {
      accountDropdown.classList.add("open");
      accountTrigger.setAttribute("aria-expanded", "true");
    }
    function closeAccountDropdown() {
      accountDropdown.classList.remove("open");
      accountTrigger.setAttribute("aria-expanded", "false");
    }
    function toggleAccount() {
      accountDropdown.classList.contains("open")
        ? closeAccountDropdown()
        : (closeAllMega(),
          closeSearch(),
          closeCartDrawer(),
          closeMobileMenu(),
          openAccountDropdown());
    }
    accountTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAccount();
    });
    accountDropdown.addEventListener("mouseleave", () =>
      setTimeout(closeAccountDropdown, 200),
    );
    accountWrapper.addEventListener("mouseleave", () =>
      setTimeout(closeAccountDropdown, 300),
    );

    // ---------- Mobile menu ----------
    function openMobileMenu() {
      mobileMenu.classList.add("open");
      document.body.style.overflow = "hidden";
      closeAllMega();
      closeSearch();
      closeCartDrawer();
      closeAccountDropdown();
    }
    function closeMobileMenu() {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    }
    function toggleMobileMenu() {
      mobileMenu.classList.contains("open")
        ? closeMobileMenu()
        : openMobileMenu();
    }
    mobileTrigger.addEventListener("click", toggleMobileMenu);
    mobileClose.addEventListener("click", closeMobileMenu);
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) closeMobileMenu();
    });

    // Mobile accordions
    mobileAccordions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.dataset.target;
        const sub = root.querySelector("#" + targetId);
        const arrow = btn.querySelector(".material-symbols-outlined");
        if (!sub) return;
        const isOpen = !sub.classList.contains("hidden");
        // close all others
        root
          .querySelectorAll(".ss-mobile-sub")
          .forEach((s) => s.classList.add("hidden"));
        root
          .querySelectorAll(".ss-mobile-accordion .material-symbols-outlined")
          .forEach((a) => (a.style.transform = "rotate(0deg)"));
        if (!isOpen) {
          sub.classList.remove("hidden");
          if (arrow) arrow.style.transform = "rotate(180deg)";
        }
      });
    });

    // ---------- Global keydown (Escape) ----------
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeAllMega();
        closeSearch();
        closeCartDrawer();
        closeAccountDropdown();
        closeMobileMenu();
        if (document.activeElement) document.activeElement.blur();
      }
    });

    // Click outside account closes it
    document.addEventListener("click", (e) => {
      if (
        accountWrapper &&
        !accountWrapper.contains(e.target) &&
        accountDropdown.classList.contains("open")
      ) {
        closeAccountDropdown();
      }
    });

    // Resize handler
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 768) closeMobileMenu();
        closeAllMega();
      }, 250);
    });
  }

  /* ---------- Component-specific CSS (injected) ---------- */
  const style = document.createElement("style");
  style.textContent = `
    /* Brand colors */
    #ss-navbar {
      --gold: #C9A86A;
      --gold-dark: #B8954F;
      --text: #1B1B1B;
      --text-secondary: #666;
      --border: #EAE6DF;
      --hover-bg: rgba(201,168,106,0.08);
      --shadow: 0 4px 32px rgba(0,0,0,0.06);
      --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
    }
    /* Nav link style */
    .ss-nav-link {
      position: relative;
      display: inline-block;
      padding: 6px 0;
      letter-spacing: 0.06em;
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase;
      transition: color 0.3s var(--ease), transform 0.3s var(--ease);
      cursor: pointer;
      white-space: nowrap;
      color: var(--text-secondary);
      text-decoration: none;
    }
    .ss-nav-link::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; width: 100%; height: 2px;
      background: var(--gold);
      border-radius: 2px;
      transform: scaleX(0);
      transform-origin: center;
      transition: transform 0.3s var(--ease);
    }
    .ss-nav-link:hover { color: var(--gold); transform: translateY(-1.5px); }
    .ss-nav-link:hover::after { transform: scaleX(1); }
    .ss-nav-link.active { color: var(--gold); }
    .ss-nav-link.active::after { transform: scaleX(1); background: var(--gold); }

    /* Icon button */
    .ss-icon-btn {
      display: flex; align-items: center; justify-content: center;
      width: 40px; height: 40px; border-radius: 50%;
      background: transparent; border: none; color: #555;
      transition: color 0.3s var(--ease), background-color 0.3s var(--ease), transform 0.2s var(--ease);
      cursor: pointer;
    }
    .ss-icon-btn:hover { color: var(--gold); background: var(--hover-bg); transform: scale(1.06); }
    .ss-icon-btn:active { transform: scale(0.93); }

    /* Mega panel */
    .ss-mega-panel {
      position: absolute; top: 100%; left: 0; right: 0;
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(34px);
      border-radius: 0 0 20px 20px;
      box-shadow: 0 16px 48px rgba(0,0,0,0.09);
      border: 1px solid rgba(234,230,223,0.7);
      border-top: none;
      opacity: 0; visibility: hidden;
      transform: translateY(-6px); filter: blur(2px);
      transition: opacity 0.28s var(--ease), transform 0.28s var(--ease), visibility 0.28s var(--ease), filter 0.28s var(--ease);
      pointer-events: none; z-index: 40;
    }
    .ss-mega-panel.open { opacity: 1; visibility: visible; transform: translateY(0); filter: blur(0); pointer-events: auto; }
    .ss-mega-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 32px; padding: 40px; max-width: 1500px; margin: 0 auto; }
    .ss-mega-heading { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: #999; margin-bottom: 12px; }
    .ss-mega-panel a { display: block; padding: 5px 0; font-size: 13.5px; color: #444; letter-spacing: 0.02em; text-decoration: none; transition: color 0.25s, padding-left 0.25s; }
    .ss-mega-panel a:hover { color: var(--gold); padding-left: 4px; }
    .ss-brand-pills { display: flex; flex-wrap: wrap; gap: 8px; }
    .ss-brand-pill { display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 30px; border: 1px solid var(--border); font-size: 12.5px; font-weight: 500; letter-spacing: 0.03em; color: #444; background: #fdfdfc; cursor: pointer; transition: all 0.25s; }
    .ss-brand-pill:hover { border-color: var(--gold); background: rgba(201,168,106,0.05); color: var(--gold-dark); }
    .ss-collection-preview { display: flex; align-items: center; gap: 12px; padding: 8px; border-radius: 8px; margin-bottom: 4px; cursor: pointer; transition: background 0.2s; }
    .ss-collection-preview:hover { background: var(--hover-bg); }
    .ss-collection-preview span.material-symbols-outlined { font-size: 24px; color: var(--gold); }
    .ss-promo-banner { border-radius: 12px; overflow: hidden; position: relative; background: linear-gradient(135deg, #f5f0e8, #d9ccb8); min-height: 260px; display: flex; align-items: flex-end; padding: 28px; }
    .ss-promo-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.45), transparent); }
    .ss-promo-content { position: relative; z-index: 1; color: white; }
    .ss-promo-kicker { font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; opacity: 0.8; }
    .ss-promo-title { font-size: 24px; font-weight: 600; line-height: 1.2; margin: 4px 0; }
    .ss-promo-text { font-size: 13px; opacity: 0.75; margin-bottom: 16px; }
    .ss-promo-btn { padding: 10px 20px; background: white; color: #1B1B1B; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; border: none; border-radius: 50px; cursor: pointer; transition: background 0.3s, color 0.3s; }
    .ss-promo-btn:hover { background: var(--gold); color: white; }
    .ss-women-promo { background: linear-gradient(135deg, #fdf2f4, #e8cfd4); }

    /* Jewellery */
    .ss-jewellery-layout { display: flex; gap: 32px; padding: 40px; max-width: 1500px; margin: 0 auto; }
    .ss-jewellery-grid { flex:1; display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
    .ss-jewellery-item { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 16px; border-radius: 12px; text-decoration: none; color: #444; transition: background 0.3s, color 0.3s; }
    .ss-jewellery-item:hover { background: var(--hover-bg); color: var(--gold-dark); }
    .ss-jewellery-item span.material-symbols-outlined { font-size: 32px; color: var(--gold); }
    .ss-jewellery-hero { width: 280px; background: linear-gradient(135deg, #fef9f0, #f5e6d3); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 24px; }
    .ss-jewellery-hero span.material-symbols-outlined { font-size: 56px; color: var(--gold); margin-bottom: 12px; }
    .ss-jewellery-hero p:first-of-type { font-size: 20px; font-weight: 600; color: var(--gold-dark); }
    .ss-jewellery-hero p:last-of-type { font-size: 13px; color: #777; margin-bottom: 16px; }
    .ss-jewellery-hero button { padding: 10px 20px; background: var(--gold); color: white; border: none; border-radius: 50px; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; cursor: pointer; transition: background 0.3s; }
    .ss-jewellery-hero button:hover { background: var(--gold-dark); }

    /* Owner's Choice */
    .ss-owners-layout { display: flex; gap: 32px; padding: 40px; max-width: 1500px; margin: 0 auto; }
    .ss-owners-cards { flex:1; display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
    .ss-owners-cards a { display: block; padding: 20px; border: 1px solid var(--border); border-radius: 12px; text-decoration: none; color: #333; background: rgba(255,255,255,0.6); transition: border-color 0.3s, box-shadow 0.3s; }
    .ss-owners-cards a:hover { border-color: var(--gold); box-shadow: 0 4px 20px rgba(201,168,106,0.1); }
    .ss-owners-cards span.material-symbols-outlined { font-size: 28px; color: var(--gold); display: block; margin-bottom: 8px; }
    .ss-owners-cards span:last-child { font-size: 11px; color: #999; }
    .ss-owners-banner { width: 300px; background: #1a1a1a; border-radius: 12px; padding: 32px; color: white; display: flex; flex-direction: column; justify-content: center; }
    .ss-owners-banner p:first-child { color: var(--gold); font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; }
    .ss-owners-banner p:nth-child(2) { font-size: 24px; font-weight: 600; margin: 8px 0; }
    .ss-owners-banner p:nth-child(3) { font-size: 13px; color: #aaa; margin-bottom: 20px; }
    .ss-owners-banner button { padding: 10px 24px; background: var(--gold); border: none; border-radius: 50px; color: white; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; cursor: pointer; transition: background 0.3s; }
    .ss-owners-banner button:hover { background: var(--gold-dark); }

    /* Search Modal */
    .ss-search-modal { position: fixed; inset: 0; background: rgba(250,249,247,0.97); backdrop-filter: blur(18px); z-index: 99; display: flex; align-items: flex-start; justify-content: center; padding-top: 18vh; opacity: 0; visibility: hidden; transition: opacity 0.3s; }
    .ss-search-modal.open { opacity: 1; visibility: visible; }
    .ss-search-inner { width: 100%; max-width: 620px; padding: 0 24px; }
    .ss-search-field { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
    .ss-search-field span { font-size: 32px; color: var(--gold); }
    .ss-search-field input { flex:1; background: transparent; border: none; border-bottom: 2px solid var(--border); font-size: 24px; padding: 8px 0; outline: none; }
    .ss-search-field input:focus { border-color: var(--gold); }
    .ss-trending p, .ss-suggested p { font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #999; margin-bottom: 12px; font-weight: 600; }
    .ss-trending span { display: inline-block; padding: 6px 16px; background: var(--hover-bg); border-radius: 20px; font-size: 13px; margin: 4px; cursor: pointer; transition: background 0.2s, color 0.2s; }
    .ss-trending span:hover { background: rgba(201,168,106,0.15); color: var(--gold-dark); }
    .ss-suggested-item { display: flex; gap: 12px; padding: 8px; border-radius: 8px; cursor: pointer; transition: background 0.2s; }
    .ss-suggested-item:hover { background: var(--hover-bg); }
    .ss-suggested-item span.material-symbols-outlined { font-size: 28px; color: var(--gold); }

    /* Cart */
    .ss-cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.45); backdrop-filter: blur(6px); z-index: 100; opacity: 0; visibility: hidden; transition: opacity 0.35s; }
    .ss-cart-overlay.open { opacity: 1; visibility: visible; }
    .ss-cart-drawer { position: fixed; top: 0; right: 0; width: 440px; max-width: 92vw; height: 100vh; background: #FAF9F7; z-index: 101; transform: translateX(100%); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); display: flex; flex-direction: column; box-shadow: 0 24px 64px rgba(0,0,0,0.11); }
    .ss-cart-drawer.open { transform: translateX(0); }
    .ss-cart-header { display: flex; justify-content: space-between; align-items: center; padding: 24px; border-bottom: 1px solid var(--border); }
    .ss-cart-header h2 { font-size: 20px; font-weight: 600; }
    .ss-cart-items { flex:1; overflow-y: auto; padding: 24px; }
    .ss-cart-item { display: flex; gap: 16px; padding: 12px; background: white; border: 1px solid var(--border); border-radius: 12px; margin-bottom: 16px; }
    .ss-cart-img { width: 80px; height: 96px; background: #f5f0e8; border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .ss-cart-item p { font-size: 13px; margin: 4px 0; }
    .ss-qty { display: flex; align-items: center; gap: 8px; margin-top: 8px; }
    .ss-qty button { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border); background: white; cursor: pointer; }
    .ss-remove { background: none; border: none; color: #e05252; font-size: 12px; margin-top: 8px; cursor: pointer; }
    .ss-price { font-weight: 600; margin-top: 8px; }
    .ss-cart-footer { padding: 24px; border-top: 1px solid var(--border); background: rgba(255,255,255,0.8); }
    .ss-subtotal { display: flex; justify-content: space-between; margin-bottom: 16px; }
    .ss-checkout-btn { width: 100%; padding: 14px; background: var(--gold); color: white; border: none; border-radius: 50px; font-weight: 600; font-size: 14px; text-transform: uppercase; cursor: pointer; transition: background 0.3s; }
    .ss-checkout-btn:hover { background: var(--gold-dark); }
    .ss-cart-footer p:last-child { text-align: center; font-size: 12px; color: #999; margin-top: 8px; }

    /* Mobile menu */
    .ss-mobile-menu { position: fixed; inset: 0; background: #FAF9F7; z-index: 90; transform: translateX(-100%); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); overflow-y: auto; }
    .ss-mobile-menu.open { transform: translateX(0); }
    .ss-mobile-header { display: flex; justify-content: space-between; align-items: center; padding: 20px; border-bottom: 1px solid var(--border); }
    .ss-mobile-links { padding: 20px; }
    .ss-mobile-accordion { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 16px 0; border-bottom: 1px solid var(--border); background: none; font-size: 16px; font-weight: 600; cursor: pointer; }
    .ss-mobile-sub { display: none; padding-left: 16px; }
    .ss-mobile-sub a { display: block; padding: 10px 0; font-size: 14px; color: #555; text-decoration: none; }
    .ss-mobile-link { display: block; padding: 16px 0; border-bottom: 1px solid var(--border); font-weight: 600; color: var(--text); text-decoration: none; }

    /* Account dropdown */
    .ss-account-dropdown { position: absolute; top: calc(100% + 8px); right: -10px; background: rgba(255,255,255,0.97); backdrop-filter: blur(20px); border-radius: 14px; box-shadow: 0 16px 48px rgba(0,0,0,0.09); border: 1px solid var(--border); min-width: 200px; opacity: 0; visibility: hidden; transform: translateY(-6px); filter: blur(2px); transition: opacity 0.25s, transform 0.25s, visibility 0.25s, filter 0.25s; pointer-events: none; z-index: 45; padding: 8px 0; }
    .ss-account-dropdown.open { opacity: 1; visibility: visible; transform: translateY(0); filter: blur(0); pointer-events: auto; }
    .ss-account-dropdown a { display: block; padding: 10px 20px; font-size: 14px; color: #444; text-decoration: none; transition: background 0.2s, color 0.2s; }
    .ss-account-dropdown a:hover { background: var(--hover-bg); color: var(--gold); }
    .ss-separator { border-top: 1px solid var(--border); margin: 4px 0; }
    .ss-logout { color: #e05252; }

    /* Badge */
    .ss-cart-badge { position: absolute; top: -2px; right: -4px; background: var(--gold); color: white; font-size: 10px; min-width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
    @keyframes ssBounceBadge {
      0% { transform: scale(1); } 30% { transform: scale(1.45); } 55% { transform: scale(0.85); } 75% { transform: scale(1.12); } 100% { transform: scale(1); }
    }
    /* Scrolled style */
    #ss-main-nav.scrolled { background: rgba(250,249,247,0.95); box-shadow: 0 4px 32px rgba(0,0,0,0.06); }
    /* Hidden helper for mobile sub */
    .ss-mobile-sub.hidden { display: none; }
    .ss-mobile-sub:not(.hidden) { display: block; }

    /* Responsive */
    @media (max-width: 768px) {
      .ss-mega-panel { position: static; box-shadow: none; border-radius: 0; border: none; background: transparent; backdrop-filter: none; transform: none; filter: none; opacity: 1; visibility: visible; pointer-events: auto; display: none; }
      .ss-mega-panel.open { display: block; }
    }
  `;
  document.head.appendChild(style);
})();
