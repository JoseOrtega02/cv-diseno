const htmlElement = document.querySelector("html");
// traemos nuestro elemento html utilizando document.querySelector
const toogleButton = document.querySelector("#toggle");
// traemos nuestro botón

toogleButton.addEventListener("click", () => darkMode());
// le añadimos un escuchador de eventos para el evento 'click' que dispare la función darkMode

const darkMode = () => {
  htmlElement.classList.contains("dark")
    ? htmlElement.classList.remove("dark")
    : htmlElement.classList.add("dark");
};
// esta función verifica si la etiqueta html posee la clase dark. Si la posee, la remueve, si no la posee la añade.

const btn = document.querySelector(".btn");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (menu.classList.contains("hidden")) {
    btn.innerHTML = `<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="w-6 h-6"
    >
      <path
        fill-rule="evenodd"
        d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
        clip-rule="evenodd"
      />
    </svg>
`;
  } else {
    console.log("black");
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 fill-quinaryDark">
<path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
</svg>
`;
  }
});
