const qS = (el) => document.querySelector(el);
const qSAll = (el) => document.querySelectorAll(el);

const grauF = qS("#fahrenheit");
const grauC = qS("#celsius");

const buttonConvert = qS("#convert");
const buttonReset = qS("#reset");

const convert = () => {
  let f = grauF.value;
  let c = grauC.value;
  if (f != "") {
    grauC.value = "";
    c = (f - 32) / 1.8;
    qS(".result h2").textContent = `${f} ºF é igual a ${c.toFixed(1)} ºC`;
    qS(".result").style.display = "flex";
  } else if (c != "") {
    grauF.value = "";
    f = "";
    f = 1.8 * c + 32;
    qS(".result h2").textContent = `${c} ºC é igual a ${f.toFixed(1)} ºF`;
    qS(".result").style.display = "flex";
  }
  grauC.value = null;
  grauF.value = null;
};

const reset = () => {
  grauF.value = "";
  grauC.value = "";
  qS(".result").style.display = "none";
};

buttonConvert.addEventListener("click", convert);

buttonReset.addEventListener("click", reset);
