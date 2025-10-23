const preguntas = [
  ["¿Qué busca la robótica humanoide?", ["Imitar las capacidades humanas", "Crear autos", "Fabricar teléfonos"], "a"],
  ["¿Quién diseñó uno de los primeros autómatas?", ["Leonardo da Vinci", "Isaac Newton", "Nikola Tesla"], "a"],
  ["¿Qué robot fue creado por Honda?", ["ASIMO", "Pepper", "Atlas"], "a"],
  ["¿Qué función tienen los actuadores?", ["Mover el robot", "Detectar color", "Emitir sonido"], "a"],
  ["¿Qué permite la inteligencia artificial?", ["Aprender y tomar decisiones", "Conectarse a internet", "Brillar con luz"], "a"],
  ["¿Dónde se aplica la robótica humanoide?", ["Educación y salud", "Solo en fábricas", "Agricultura"], "a"],
  ["¿Qué país lideró la robótica en los años 70?", ["Japón", "México", "Alemania"], "a"],
  ["¿Qué parte del robot contiene sensores visuales?", ["Cabeza", "Pies", "Manos"], "a"],
  ["¿Qué representa Camila con su proyecto?", ["El futuro de la ingeniería", "Un experimento de arte", "Un robot doméstico"], "a"],
  ["¿Qué reto plantea la IA?", ["Ética y empleo", "Velocidad de internet", "Consumo eléctrico"], "a"]
];

window.onload = function() {
  const contenedor = document.getElementById("preguntas");
  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("pregunta");
    div.innerHTML = `
      <p>${i + 1}. ${p[0]}</p>
      <label><input type="radio" name="q${i}" value="a"> ${p[1][0]}</label>
      <label><input type="radio" name="q${i}" value="b"> ${p[1][1]}</label>
      <label><input type="radio" name="q${i}" value="c"> ${p[1][2]}</label>
    `;
    contenedor.appendChild(div);
  });
};

function verificar() {
  let puntos = 0;
  for (let i = 0; i < preguntas.length; i++) {
    const seleccion = document.querySelector(`input[name="q${i}"]:checked`);
    if (seleccion && seleccion.value === preguntas[i][2]) puntos++;
  }
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Has acertado ${puntos} de ${preguntas.length} preguntas.`;
  if (puntos === preguntas.length) resultado.textContent += " 🎉 ¡Excelente, eres un experto!";
}
