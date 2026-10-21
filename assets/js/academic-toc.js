const toc = document.querySelector(".page-toc details");
const desktop = window.matchMedia("(min-width: 1100px)");

if (toc) {
  const updateToc = () => {
    toc.open = desktop.matches;
  };
  updateToc();
  desktop.addEventListener("change", updateToc);
}
