// ss-footer.js
(function () {
  "use strict";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    const container = document.getElementById("ss-footer");
    if (!container) {
      console.warn("SS Footer: container #ss-footer not found.");
      return;
    }

    // Inject footer HTML
    container.innerHTML = `
      <footer class="ss-footer ">
        <!-- Main footer content -->
        <div class="ss-footer-grid ">
          <!-- Column 1: Brand + About -->
          <div class="ss-footer-col ss-footer-brand">
            <a href="index.html" class="ss-footer-logo">
              <img class="h-[100px] md:h-[150px] w-auto transition-all duration-300 hover:scale-[1.04] hover:brightness-110" src="assests/images/ss-fabrics-logo.png" alt="SS Fabrics" />
            </a>
            <p class="ss-footer-description">
              Redefining luxury textiles since 1985. Crafting premium fabrics for the modern Pakistani wardrobe.
            </p>
            <!-- Social icons -->
            <div class="ss-footer-socials">
              <a href="https://www.facebook.com/share/14jRjMbsveA/?mibextid=wwXIfr" target="_blank" aria-label="Facebook" class="ss-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/ssfabrics096?igsh=djA4bzdvb3g4aGxu" target="blank" aria-label="Instagram" class="ss-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@ss.fabrics096?_r=1&_t=ZS-986xyDgnThx" target="_blank" aria-label="TikTok" class="ss-social-icon">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.231V2h-3.057v13.233a2.889 2.889 0 11-2.889-2.889c.226 0 .447.027.659.077V9.32a5.947 5.947 0 00-.659-.036A5.946 5.946 0 1015.82 15.23V8.687a7.835 7.835 0 004.77 1.621V7.251a4.8 4.8 0 01-1.001-.565z"/>
  </svg>
</a>
            </div>
          </div>

          <!-- Column 2: Shop -->
          <div class="ss-footer-col">
            <h3 class="ss-footer-heading">Shop</h3>
            <ul class="ss-footer-links">
              <li><a href="men.html">Men</a></li>
              <li><a href="women.html">Women</a></li>
              <li><a href="jewellery.html">Jewellery</a></li>
            </ul>
          </div>

          <!-- Column 3: Customer Service -->
          <div class="ss-footer-col">
            <h3 class="ss-footer-heading">Customer Service</h3>
            <ul class="ss-footer-links">
              <li><a href="contact-us.html">Contact Us</a></li>
              <li><a href="terms&conditions.html">Terms & Conditions</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Privacy Policy</a></li>
              </ul>
              
          </div>

          <!-- Column 4: About -->
          <div class="ss-footer-col">
            <h3 class="ss-footer-heading">About SS Fabrics</h3>
            <ul class="ss-footer-links">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="ss-footer-bottom">
          <div class="ss-footer-bottom-inner">
            <p class="ss-footer-copy">&copy; 2026 SS Fabrics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    // Inject the custom CSS for the footer
    injectStyles();
  }

  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      /* Footer variables */
      .ss-footer {
        --gold: #C9A86A;
        --gold-dark: #B8954F;
        --text: #1B1B1B;
        --text-secondary: #666;
        --border: #EAE6DF;
        --bg: #FAF9F7;
        --hover-bg: rgba(201,168,106,0.08);
        --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
      }

      .ss-footer {
        background: var(--bg);
        border-top: 1px solid var(--border);
        padding: 64px 0 0 0;
        font-family: 'Inter', system-ui, sans-serif;
        color: var(--text-secondary);
        transition: background 0.3s;
      }

      .ss-footer-grid {
        max-width: 1500px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
        gap: 48px;
        padding: 0 32px 48px 32px;
      }

      .ss-footer-col {
        display: flex;
        flex-direction: column;
      }

      .ss-footer-logo {
        display: inline-block;
        margin-bottom: 16px;
        cursor: pointer;
      }

      .ss-footer-description {
        font-size: 13px;
        line-height: 1.6;
        color: #777;
        margin-bottom: 24px;
        max-width: 260px;
      }

      .ss-footer-socials {
        display: flex;
        gap: 10px;
        margin-top: 4px;
        flex-wrap: wrap;
      }

      .ss-social-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: var(--border);
        color: #555;
        transition: all 0.3s var(--ease);
        text-decoration: none;
        flex-shrink: 0;
      }
      .ss-social-icon:hover {
        background: var(--gold);
        color: white;
        transform: translateY(-2px);
      }
      .ss-social-icon svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
        display: block;
      }

      .ss-footer-heading {
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #999;
        margin-bottom: 20px;
        position: relative;
        padding-bottom: 8px;
        display: inline-block;
      }
      .ss-footer-heading::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 20px;
        height: 2px;
        background: var(--gold);
        border-radius: 2px;
      }

    .ss-footer-links li a {
  position: relative;
  display: inline-block;
  font-size: 13.5px;
  color: #555;
  text-decoration: none;
  transition: color 0.3s var(--ease);
}

.ss-footer-links li a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1.5px;
  background: var(--gold);
  transition: width 0.35s var(--ease);
}

.ss-footer-links li a:hover {
  color: var(--gold);
}

.ss-footer-links li a:hover::after {
  width: 100%;
}
      /* Bottom bar */
      .ss-footer-bottom {
        border-top: 1px solid var(--border);
        background: rgba(255,255,255,0.5);
        backdrop-filter: blur(12px);
      }
      .ss-footer-bottom-inner {
        max-width: 1500px;
        margin: 0 auto;
        padding: 24px 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .ss-footer-copy {
        font-size: 12.5px;
        color: #888;
        margin: 0;
      }

      /* Responsive */
      @media (max-width: 1024px) {
        .ss-footer-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          padding: 0 24px 40px 24px;
        }
      }
      @media (max-width: 640px) {
  .ss-footer {
    padding-top: 48px;
  }

  .ss-footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
    text-align: center;
  }

  .ss-footer-col {
    align-items: center;
  }

  .ss-footer-heading::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .ss-footer-description {
    max-width: 100%;
  }

  .ss-footer-socials {
    justify-content: center;
    gap: 8px;
  }

  .ss-social-icon {
    width: 34px;
    height: 34px;
  }

  .ss-footer-bottom-inner {
    justify-content: center;
    text-align: center;
  }
}
    `;
    document.head.appendChild(style);
  }
})();
