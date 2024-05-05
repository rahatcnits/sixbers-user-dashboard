const tabsBox = document.querySelector(".tabs-box"),
  allTabs = tabsBox.querySelectorAll(".tab");

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsBox.querySelector(".active").classList.remove("active");
    tab.classList.add("active");
  });
});

// tab content show

const menuContents = document.querySelectorAll(".tab_content");

allTabs.forEach((menuTab, index) => {
  menuTab.addEventListener("click", (e) => {
    allTabs.forEach((menuTab) => {
      menuTab.classList.remove("active");
    });
    menuTab.classList.add("active");

    menuContents.forEach((menuContent) => {
      menuContent.classList.remove("active");
    });
    menuContents[index].classList.add("active");
  });
});
