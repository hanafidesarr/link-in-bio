const siteConfig = {
  links: [
    { title: "Official Website", description: "Discover Axeonsoft and our digital products.", url: "https://axeonsoft.com/", icon: "globe" },
    { title: "Catbox Studio Games", description: "Explore and play our games.", url: "https://games.axeonsoft.com/", image: "/assets/logo-catbox.png" },
    { title: "Google Play", description: "Explore our Android games and applications.", url: "https://play.google.com/store/apps/developer?id=Axeonsoft", icon: "play" }
  ]
};

const icons = {
  globe: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 9h-3.03a15.6 15.6 0 0 0-1.2-5.02A8.03 8.03 0 0 1 18.92 11ZM12 4c.82 1.12 1.85 3.5 1.9 7h-3.8c.05-3.5 1.08-5.88 1.9-7ZM9.31 5.98A15.6 15.6 0 0 0 8.11 11H5.08a8.03 8.03 0 0 1 4.23-5.02ZM5.08 13h3.03a15.6 15.6 0 0 0 1.2 5.02A8.03 8.03 0 0 1 5.08 13ZM12 20c-.82-1.12-1.85-3.5-1.9-7h3.8c-.05 3.5-1.08 5.88-1.9 7Zm2.69-1.98a15.6 15.6 0 0 0 1.2-5.02h3.03a8.03 8.03 0 0 1-4.23 5.02Z"/></svg>',
  gamepad2: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 6h9a5.5 5.5 0 0 1 5.3 7l-1.1 4a2.5 2.5 0 0 1-4.4.9L14.5 15h-5l-1.8 2.9a2.5 2.5 0 0 1-4.4-.9l-1.1-4A5.5 5.5 0 0 1 7.5 6Zm0 3a2.5 2.5 0 0 0-2.4 3.1l1.1 4 .8-1.3A2.5 2.5 0 0 1 9.1 13h5.8a2.5 2.5 0 0 1 2.1 1.8l.8 1.3 1.1-4A2.5 2.5 0 0 0 16.5 9h-9ZM7 10v1H6v1h1v1h1v-1h1v-1H8v-1H7Zm8.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm2 2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#00C9FF" d="M3.1 2.8c-.4.4-.6 1-.6 1.8v14.8c0 .8.2 1.4.6 1.8L12.2 12 3.1 2.8Z"/><path fill="#00A86B" d="m15.2 15-3 3-9.1-9.2L12.2 12l3 3Z"/><path fill="#FFD23F" d="m12.2 12 3-3 5.4 3.1c.7.4.7 1 0 1.4L15.2 15l-3-3Z"/><path fill="#FF4B55" d="m3.1 2.8 9.1 9.2 3-3-10.8-6.2c-.5-.3-1-.3-1.3 0Z"/></svg>'
};

const linkList = document.querySelector("#link-list");
linkList.innerHTML = siteConfig.links.map((link) => `
  <a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
    <span class="link-icon">${link.image ? `<img src="${link.image}" alt="" />` : icons[link.icon]}</span>
    <span class="link-copy"><span class="link-title">${link.title}</span><span class="link-description">${link.description}</span></span>
    <svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>
  </a>
`).join("");
