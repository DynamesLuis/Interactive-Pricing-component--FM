const $slider = document.getElementById("mySlider");
const $pageviews = document.querySelector(".pageviews");
const $perMonth = document.querySelector(".perMonth span");
const $toggle = document.querySelector("#checkbox");
const pageOptions = ["10K", "50K", "100K", "500K", "1M"];
const priceOptions = ["8", "12", "16", "24", "36"];
let val = $slider.value;


$slider.addEventListener("input", updateSlider);
$toggle.addEventListener('input', showPrices);
updateSlider();


function updateSlider() {
    val = $slider.value;
    const percent = (val / (pageOptions.length - 1)) * 100;
    $slider.style.setProperty("--value", percent + "%");
    showPrices();
}

function showPrices() {
    let pricePerMonth = parseInt(priceOptions[val]).toFixed(2);

    if ($toggle.checked) {
        pricePerMonth = pricePerMonth - (pricePerMonth * .25);
    }

    $pageviews.textContent = `${pageOptions[val]} pageviews`;
    $perMonth.textContent = `$${pricePerMonth}`
}
