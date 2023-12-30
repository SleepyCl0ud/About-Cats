{
  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const themeName = document.querySelector(".themeName");
    const tableHeader = document.querySelector(".table__cell--header");

    themeName.innerText = body.classList.contains("dark") ? "Ciemny" : "Jasny";
    body.classList.toggle("dark");
    tableHeader.classList.toggle("table__cell--dark");
  };

  const init = () => {
    const changeBackgroundButton = document.querySelector(".button");

    changeBackgroundButton.addEventListener("click", toggleBackground);
  };

  init();
}
