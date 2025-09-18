const slider = document.getElementById("mySlider");

const options = ["10K", "50K", "100K", "500K", "1M"];

function updateSlider() {
    const val = slider.value;
    //value.textContent = options[val];

    // Calcular porcentaje para el gradiente
    const percent = (val / (options.length - 1)) * 100;
    slider.style.setProperty("--value", percent + "%");
}

slider.addEventListener("input", updateSlider);
updateSlider(); // inicial