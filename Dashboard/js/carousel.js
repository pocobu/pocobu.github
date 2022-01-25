const waktuSekarang = document.getElementById("waktuSekarang");
const today = new Date().toLocaleDateString();

console.log(today);

waktuSekarang.innerHTML = today;
