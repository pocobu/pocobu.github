const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// let toggle = (button) => {
//   let element = document.getElementById("ngumpet");
//   let hidden = element.removeAttribute("hidden");

//   if (hidden) {
//     element.removeAttribute("hidden");
//     button.innerText = "Hide Span";
//   } else {
//     element.setAttribute("hidden", "hidden");
//     button.innerText = "Show Span";
//   }
// };

// function Ngumpet() {
//   let x = document.getElementById("ngumpet");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

const bacaSelengkapnya1 = document.getElementById("bacaSelengkapnya1");

const ngumpetSatu = document.getElementById("ngumpetSatu");
function NgumpetSatu() {
  ngumpetSatu.removeAttribute("hidden");
  bacaSelengkapnya1.style.display = "none";
}

// if (ngumpetSatu.removeAttribute("hidden")) {
//   bacaSelengkapnya1.innerHTML = "Lebih Sedikit";
// } else {
//   ngumpetSatu.setAttribute("hidden", "hidden");
//   bacaSelengkapnya1.innerHTML = "Baca Selengkapnya";
// }

const bacaSelengkapnya2 = document.getElementById("bacaSelengkapnya2");
const ngumpetDua = document.getElementById("ngumpetDua");
function NgumpetDua() {
  ngumpetDua.removeAttribute("hidden");
  bacaSelengkapnya2.style.display = "none";
}

const bacaSelengkapnya3 = document.getElementById("bacaSelengkapnya3");
const ngumpetTiga = document.getElementById("ngumpetTiga");
function NgumpetTiga() {
  ngumpetTiga.removeAttribute("hidden");
  bacaSelengkapnya3.style.display = "none";
}
