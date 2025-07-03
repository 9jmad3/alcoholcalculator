
// document.getElementById("calcForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const peso = +document.getElementById("peso").value;
//   const sexo = document.getElementById("sexo").value;
//   const edad = +document.getElementById("edad").value;
//   const tiempo = +document.getElementById("tiempo").value;
//   const volumen = +document.getElementById("volumen").value;
//   const graduacion = +document.getElementById("graduacion").value;
//   const comida = document.getElementById("comida").checked;

//   const r = sexo === "hombre" ? 0.7 : 0.6;
//   const gramosAlcohol = (volumen / 1000) * (graduacion / 100) * 0.8 * 1000;
//   let bacEst = gramosAlcohol / (r * peso);
//   let tasaEliminacion = 0.15;
//   if (edad > 50) tasaEliminacion *= 0.9;
//   bacEst -= tasaEliminacion * tiempo;
//   if (bacEst < 0) bacEst = 0;
//   if (comida) bacEst *= 0.85;
//   const aireEspirado = (bacEst / 2.1) * 1000;

//   document.getElementById("aireEspirado").textContent = aireEspirado.toFixed(2);
//   document.getElementById("bac").textContent = bacEst.toFixed(2);
//   const legal = aireEspirado < 250;
//   document.getElementById("legalidad").textContent = legal
//     ? "✅ Dentro del límite legal (≤ 0.25 mg/L)"
//     : "🚨 Fuera del límite legal (> 0.25 mg/L)";
//   document.getElementById("legalidad").className = legal
//     ? "text-success fw-bold"
//     : "text-danger fw-bold";

//   const resDiv = document.getElementById("resultado");
//   resDiv.style.display = "block";
//   resDiv.classList.remove("fadeOut");
//   resDiv.classList.add("resultado");
// });

document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const peso = +document.getElementById("peso").value;
  const sexo = document.getElementById("sexo").value;
  const edad = +document.getElementById("edad").value;
  const tiempo = +document.getElementById("tiempo").value;
  const volumen = +document.getElementById("volumen").value;
  const graduacion = +document.getElementById("graduacion").value;
  const comida = document.getElementById("comida").checked;

  const r = sexo === "hombre" ? 0.7 : 0.6;

  // Cálculo de gramos de alcohol puro consumido
  const gramosAlcohol = (volumen / 1000) * (graduacion / 100) * 0.8 * 1000;

  // Cálculo inicial de BAC
  let bacEst = gramosAlcohol / (r * peso);

  // Eliminación por el tiempo (0.15 g/L por hora)
  let tasaEliminacion = 0.15;
  if (edad > 50) tasaEliminacion *= 0.9; // Reducción si >50 años

  bacEst -= tasaEliminacion * tiempo;
  if (bacEst < 0) bacEst = 0;

  // Reducción si ha comido
  if (comida) bacEst *= 0.85;

  // Tasa en aire espirado (mg/L)
  const aireEspirado = (bacEst / 2.1) * 1000;

  const aireEspiradoEtilometro = (bacEst / 2.1);

  // Límite legal
  const legal = aireEspirado < 250;

  // Mostrar resultados
  document.getElementById("bac").textContent = bacEst.toFixed(2);
  document.getElementById("aireEspirado").textContent = aireEspirado.toFixed(2);
  document.getElementById("etilometro").textContent = aireEspiradoEtilometro.toFixed(2) + " mg/L";
  
  document.getElementById("legalidad").textContent = legal
    ? "✅ Dentro del límite legal (≤ 0.25 mg/L)"
    : "🚨 Fuera del límite legal (> 0.25 mg/L)";
  document.getElementById("legalidad").className = legal
    ? "text-success fw-bold"
    : "text-danger fw-bold";

  // Mostrar la caja de resultado con animación
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.classList.remove("fadeOut");
  resultado.classList.add("resultado");
});
