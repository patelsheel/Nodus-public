document.addEventListener("DOMContentLoaded", () => {
    const features = [
        {
            title: "Always Connected",
            subtitle: "Green state – All good",
            description:
                "Ethernet and internet are healthy. Nodus Status confirms your gateway, DNS, and public IP are all reachable so you can work without worry.",
            image: "assets/state-green.png",
            accent: "card-accent-green",
        },
        {
            title: "LAN Only",
            subtitle: "Yellow state – WAN / DNS issue",
            description:
                "Router is fine but something’s off beyond it. Gateway responds but DNS or public-IP checks fail. Nodus suggests next steps so you can restore full connectivity.",
            image: "assets/state-yellow.png",
            accent: "card-accent-yellow",
        },
        {
            title: "Offline",
            subtitle: "Red state – No DHCP",
            description:
                "169.x.x.x address detected: no lease. Your Mac has no valid IP. Check cables, reboot the router, or contact your ISP — Nodus has the diagnostics ready.",
            image: "assets/state-red.png",
            accent: "card-accent-red",
        },
    ];

    const slider = document.getElementById("feature-slider");

    // Clear any previous content (avoids accidental duplication)
    slider.innerHTML = '<h2 class="section-title">Network States</h2>';

    features.forEach((f) => {
        const card = document.createElement("div");
        card.className = `card ${f.accent}`;

        card.innerHTML = `
      <div class="card-text">
        <h3>${f.title}</h3>
        <p class="subtitle">${f.subtitle}</p>
        <p>${f.description}</p>
      </div>
      <div class="card-image">
        <img src="${f.image}" alt="${f.title}" />
      </div>
    `;

        slider.appendChild(card);
    });
});


// Scroll animation for fade-in elements
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  fadeEls.forEach(el => observer.observe(el));
});
