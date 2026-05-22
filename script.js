const toggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("is-menu-open", isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-menu-open");
    }
  });
}

const header = document.querySelector("[data-header]");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const faqItems = document.querySelectorAll("[data-faq-list] details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", (event) => {
    const activeItem = event.currentTarget;

    if (!(activeItem instanceof HTMLDetailsElement) || !activeItem.open) {
      return;
    }

    faqItems.forEach((otherItem) => {
      if (otherItem !== activeItem) {
        otherItem.removeAttribute("open");
      }
    });
  });
});
