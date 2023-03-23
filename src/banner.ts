function getBanner() {
  const banner = document.createElement("div");
  banner.id = "banner";
  banner.append(
    getSection("Home", onHomeClick),
    getSection("Menu", onMenuClick),
    getSection("Contact", onContactClick)
  );
}

function getSection(title: string, onclick: () => void) {
  const section = document.createElement("div");
  section.classList.add("section", title.toLowerCase());

  const titleDiv = document.createElement("h4");
  titleDiv.textContent = title;
  titleDiv.classList.add("title-text", title.toLowerCase());

  section.append(title);
  section.addEventListener("click", onclick);

  return section;
}
