// ss-faq.js
(function () {
  "use strict";

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function init() {
    const container = document.getElementById("ss-faq");
    if (!container) {
      console.warn("SS FAQ: container #ss-faq not found.");
      return;
    }

    // Inject FAQ HTML
    container.innerHTML = `
      <section class="ss-faq-section" id="faq">
        <!-- Section Header -->
        <div class="ss-faq-header">
          <span class="ss-faq-label">Got Questions?</span>
          <h2 class="ss-faq-title">Frequently Asked Questions</h2>
          <div class="ss-faq-divider"></div>
          <p class="ss-faq-subtitle">Everything you need to know about our premium fabrics, jewelry, ordering process, and more.</p>
        </div>

        <!-- FAQ Grid -->
        <div class="ss-faq-grid-wrapper">
          <div class="ss-faq-grid">
            <!-- Column 1 -->
            <div class="ss-faq-column">
              <!-- FAQ Item 1 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">What is your delivery time in Pakistan?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>We deliver across Pakistan within 3-5 business days for major cities (Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad). For remote areas, delivery may take 5-7 business days. Same-day delivery is available in select cities for orders placed before 12 PM.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 2 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Do you offer Cash on Delivery (COD) in Pakistan?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Yes, we offer Cash on Delivery (COD) across all cities in Pakistan. You can pay in cash when your order arrives. We also accept online payments via credit/debit cards, Easypaisa, JazzCash, and bank transfers for your convenience.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 3 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">What are your fabric prices in Pakistani Rupees (PKR)?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Our fabric prices range from PKR 1,500 to PKR 15,000 per yard depending on the quality and type. Premium silk and handwoven fabrics are priced higher, while our everyday cotton and linen blends start from PKR 1,500. All prices are inclusive of taxes.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 4 - Jewelry Question 1 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">What type of jewelry do you offer?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>We offer a curated collection of premium jewelry including gold-plated, sterling silver, and semi-precious stone pieces. Our collection features bridal sets, daily wear, earrings, necklaces, bangles, rings, and custom-made pieces for special occasions. All jewelry is crafted with high-quality materials and attention to detail.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 5 - Jewelry Question 2 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Is your jewelry tarnish-free and suitable for daily wear?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Yes, all our jewelry is crafted with high-quality materials that are tarnish-resistant and hypoallergenic. Our gold-plated pieces feature multiple layers of anti-tarnish coating, and our sterling silver is 925 certified. Each piece comes with care instructions to maintain its shine and longevity.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Column 2 -->
            <div class="ss-faq-column">
              <!-- FAQ Item 6 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Do you offer lawn fabric for summers?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Yes, we stock premium lawn fabric collections exclusively for the summer season. Our lawn range includes both printed and embroidered options, perfect for Pakistan's hot weather. The new summer collection arrives in March and sells out quickly.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 7 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Do you offer stitched clothes or only unstitched fabric?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>We offer both options! You can buy unstitched fabric in 2.5-3 yard cuts for shalwar kameez, or choose from our ready-to-wear collection of pret, semiformal, and formal wear. We also provide custom tailoring services at select stores.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 8 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">What's your return and exchange policy?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>We offer a 7-day exchange policy for unstitched fabric and ready-to-wear items in Pakistan. Items must be unused, unwashed, and with original tags. For fabric, we allow exchange if the length is intact. Custom-stitched pieces are non-returnable unless defective.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 9 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Do you have wedding and formal wear collections?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Yes, we have an exclusive luxury collection for weddings and formal events featuring embellished fabrics, raw silk, jamawar, and bridal wear. Visit our store for a personalized bridal consultation or shop online for our formal wear collection.</p>
                  </div>
                </div>
              </div>

              <!-- FAQ Item 10 -->
              <div class="ss-faq-item">
                <button class="ss-faq-question" aria-expanded="false">
                  <span class="ss-faq-question-text">Do you offer discounts on bulk orders?</span>
                  <span class="ss-faq-icon">
                    <svg class="ss-faq-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </span>
                </button>
                <div class="ss-faq-answer">
                  <div class="ss-faq-answer-content">
                    <p>Yes, we offer special discounts on bulk fabric orders of 10+ yards. We also have seasonal sales, Ramadan specials, and Eid collections with exclusive deals. Sign up for our newsletter to get notified about upcoming sales and promotions.</p>
                  </div>
                </div>
              </div>

              

         
      </section>
    `;

    // Initialize FAQ functionality
    initFAQ();

    // Inject styles
    injectStyles();
  }

  function initFAQ() {
    const faqItems = document.querySelectorAll(".ss-faq-item");

    faqItems.forEach((item) => {
      const question = item.querySelector(".ss-faq-question");
      const answer = item.querySelector(".ss-faq-answer");
      const icon = item.querySelector(".ss-faq-icon");

      if (question) {
        question.addEventListener("click", function () {
          const isOpen = item.classList.contains("ss-faq-open");

          // Close all other items in the same column
          const column = item.closest(".ss-faq-column");
          if (column) {
            const siblings = column.querySelectorAll(".ss-faq-item");
            siblings.forEach((sibling) => {
              if (
                sibling !== item &&
                sibling.classList.contains("ss-faq-open")
              ) {
                const siblingAnswer = sibling.querySelector(".ss-faq-answer");
                const siblingIcon = sibling.querySelector(".ss-faq-icon");
                sibling.classList.remove("ss-faq-open");
                if (siblingAnswer) {
                  siblingAnswer.style.maxHeight = "0";
                }
                if (siblingIcon) {
                  siblingIcon.style.transform = "rotate(0deg)";
                }
              }
            });
          }

          // Toggle current item
          if (isOpen) {
            item.classList.remove("ss-faq-open");
            if (answer) {
              answer.style.maxHeight = "0";
            }
            if (icon) {
              icon.style.transform = "rotate(0deg)";
            }
          } else {
            item.classList.add("ss-faq-open");
            if (answer) {
              answer.style.maxHeight = answer.scrollHeight + "px";
            }
            if (icon) {
              icon.style.transform = "rotate(45deg)";
            }
          }
        });
      }
    });

    // Optional: Open first item by default
    // const firstItem = document.querySelector('.ss-faq-item');
    // if (firstItem) {
    //   const firstQuestion = firstItem.querySelector('.ss-faq-question');
    //   if (firstQuestion) firstQuestion.click();
    // }
  }

  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      /* FAQ Section Variables */
      .ss-faq-section {
        --gold: #C9A86A;
        --gold-dark: #B8954F;
        --text: #1B1B1B;
        --text-secondary: #666;
        --border: #EAE6DF;
        --bg: #FAF9F7;
        --ease: cubic-bezier(0.22, 0.61, 0.36, 1);
        padding: 80px 0;
        background: transparent;
        font-family: 'Inter', system-ui, sans-serif;
      }

      /* Header */
      .ss-faq-header {
        text-align: center;
        margin-bottom: 64px;
        max-width: 1500px;
        margin-left: auto;
        margin-right: auto;
        padding: 0 32px;
      }

      .ss-faq-label {
        display: block;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: var(--gold);
        margin-bottom: 12px;
      }

      .ss-faq-title {
        font-size: 32px;
        font-weight: 300;
        color: var(--text);
        margin-bottom: 16px;
        letter-spacing: -0.02em;
      }

      .ss-faq-divider {
        width: 48px;
        height: 1px;
        background: var(--gold);
        margin: 0 auto 24px;
      }

      .ss-faq-subtitle {
        color: #888;
        font-size: 14px;
        font-weight: 300;
        max-width: 560px;
        margin: 0 auto;
        line-height: 1.6;
      }

      /* Grid */
      .ss-faq-grid-wrapper {
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 32px;
      }

      .ss-faq-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
      }

      .ss-faq-column {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      /* FAQ Items */
      .ss-faq-item {
        background: white;
        border: 1px solid var(--border);
        border-radius: 12px;
        overflow: hidden;
        transition: all 0.3s var(--ease);
      }

      .ss-faq-item:hover {
        border-color: rgba(201, 168, 106, 0.3);
      }

      .ss-faq-item.ss-faq-open {
        border-color: var(--gold);
        box-shadow: 0 2px 16px rgba(201, 168, 106, 0.08);
      }

      .ss-faq-item.ss-faq-open .ss-faq-question-text {
        color: var(--gold);
      }

      .ss-faq-question {
        width: 100%;
        text-align: left;
        padding: 20px 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: background 0.2s;
        font-family: inherit;
      }

      .ss-faq-question:hover {
        background: rgba(0, 0, 0, 0.02);
      }

      .ss-faq-question-text {
        font-size: 14px;
        font-weight: 500;
        color: var(--text);
        transition: color 0.3s;
        letter-spacing: 0.01em;
        flex: 1;
      }

      .ss-faq-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        color: var(--gold);
        transition: transform 0.3s var(--ease);
      }

      .ss-faq-icon-svg {
        width: 20px;
        height: 20px;
      }

      .ss-faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s var(--ease);
      }

      .ss-faq-answer-content {
        padding: 0 24px 20px 24px;
      }

      .ss-faq-answer-content p {
        font-size: 13.5px;
        line-height: 1.7;
        color: #777;
        font-weight: 300;
        margin: 0;
      }

      .ss-faq-link {
        color: var(--gold);
        text-decoration: none;
        transition: color 0.2s;
      }

      .ss-faq-link:hover {
        color: var(--gold-dark);
        text-decoration: underline;
      }

      /* CTA Banner */
      .ss-faq-cta {
        margin-top: 48px;
        text-align: center;
        background: white;
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 40px 32px;
        transition: all 0.3s var(--ease);
      }

      .ss-faq-cta:hover {
        border-color: rgba(201, 168, 106, 0.3);
      }

      .ss-faq-cta-title {
        font-size: 20px;
        font-weight: 500;
        color: var(--text);
        margin-bottom: 8px;
        letter-spacing: -0.01em;
      }

      .ss-faq-cta-text {
        font-size: 14px;
        color: #888;
        max-width: 480px;
        margin: 0 auto 24px;
        font-weight: 300;
        line-height: 1.6;
      }

      .ss-faq-cta-buttons {
        display: flex;
        flex-direction: row;
        gap: 16px;
        justify-content: center;
        flex-wrap: wrap;
      }

      .ss-faq-btn-primary,
      .ss-faq-btn-secondary {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 28px;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.3s var(--ease);
        font-family: inherit;
        letter-spacing: 0.03em;
      }

      .ss-faq-btn-primary {
        background: var(--gold);
        color: white;
      }

      .ss-faq-btn-primary:hover {
        background: var(--gold-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(201, 168, 106, 0.3);
      }

      .ss-faq-btn-secondary {
        background: transparent;
        color: var(--text);
        border: 1px solid var(--border);
      }

      .ss-faq-btn-secondary:hover {
        background: rgba(0, 0, 0, 0.02);
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
      }

      .ss-faq-btn-icon {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .ss-faq-section {
          padding: 60px 0;
        }

        .ss-faq-header {
          padding: 0 20px;
          margin-bottom: 40px;
        }

        .ss-faq-title {
          font-size: 26px;
        }

        .ss-faq-grid-wrapper {
          padding: 0 20px;
        }

        .ss-faq-grid {
          grid-template-columns: 1fr;
          gap: 12px;
        }

        .ss-faq-question {
          padding: 16px 18px;
        }

        .ss-faq-question-text {
          font-size: 13px;
        }

        .ss-faq-answer-content {
          padding: 0 18px 16px 18px;
        }

        .ss-faq-answer-content p {
          font-size: 13px;
        }

        .ss-faq-cta {
          padding: 32px 20px;
          margin-top: 36px;
        }

        .ss-faq-cta-title {
          font-size: 18px;
        }

        .ss-faq-cta-buttons {
          flex-direction: column;
          align-items: center;
        }

        .ss-faq-btn-primary,
        .ss-faq-btn-secondary {
          width: 100%;
          justify-content: center;
        }
      }

      @media (max-width: 480px) {
        .ss-faq-section {
          padding: 40px 0;
        }

        .ss-faq-title {
          font-size: 22px;
        }

        .ss-faq-subtitle {
          font-size: 13px;
        }

        .ss-faq-cta {
          padding: 24px 16px;
        }
      }
    `;
    document.head.appendChild(style);
  }
})();
