let list = document.querySelector(".slider .list");
let item = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".slider .dots li");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = item.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
};

prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }
    reloadSlider();
};

let refreshSlider = setInterval(() => {
    next.click();
}, 5000);

function reloadSlider() {
    let checkLeft = item[active].offsetLeft; // Sửa "items" thành "item"
    list.style.left = -checkLeft + "px"; // Sửa "computedStyleMap.left" thành "style.left"
    let lastActive = document.querySelector(".slider .dots li.active");
    if (lastActive) {
        lastActive.classList.remove("active");
    }
    dots[active].classList.add("active");
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {
        next.click();
    }, 5000); // Giữ thời gian đồng nhất với `refreshSlider`
}

dots.forEach((li, key) => {
    li.addEventListener("click", function () {
        active = key;
        reloadSlider();
    });
});
