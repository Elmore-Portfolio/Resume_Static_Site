document.addEventListener("DOMContentLoaded", () => {
  const triggers = [...document.querySelectorAll(".entry-trigger")];

  function setEntry(trigger, expanded) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    trigger.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      setEntry(trigger, trigger.getAttribute("aria-expanded") !== "true");
    });
  });

  function connectGroupToggle(buttonId, sectionId) {
    const button = document.getElementById(buttonId);
    const section = document.getElementById(sectionId);
    if (!button || !section) return;

    button.addEventListener("click", () => {
      const group = [...section.querySelectorAll(".entry-trigger")];
      const shouldExpand = group.some((item) => item.getAttribute("aria-expanded") !== "true");
      group.forEach((item) => setEntry(item, shouldExpand));
      button.textContent = shouldExpand ? "Collapse all" : "Expand all";
    });
  }

  connectGroupToggle("toggle-experience", "experience");
  connectGroupToggle("toggle-education", "education");

  document.getElementById("print-resume")?.addEventListener("click", () => window.print());
  document.getElementById("year").textContent = new Date().getFullYear();
});
