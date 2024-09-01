"use strict"
// 1
const images = document.querySelectorAll('.image');
const galleryArr = Array.from(images);
const items = document.querySelectorAll('.gallery li');
let currentIndex = 0;

const addClass = function(index) {
    items.forEach(item => item.classList.remove('full-image-container'));
    galleryArr.forEach(image => image.classList.remove('full-image'));
    items[index].classList.add('full-image-container');
    items[index].style.display = 'block';
    galleryArr[index].classList.add('full-image');
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentIndex++;
        if (currentIndex >= galleryArr.length) {
            currentIndex = 0; 
        }
        addClass(currentIndex);
    } else if (event.key === 'ArrowLeft') {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = galleryArr.length - 1;
        }
        addClass(currentIndex);
    }
});
// 2
const boxes = document.querySelector('#boxes');
const amountInput = document.querySelector('#amount');
const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

function createBoxes(amount) {
    boxes.innerHTML = '';
    for (let i = 0; i < amount; i++) {
        const newDiv = document.createElement('div');
        newDiv.style.height = `${30 + i * 10}px`;
        newDiv.style.width = `${30 + i * 10}px`;
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        newDiv.style.backgroundColor = randomColor;
        boxes.appendChild(newDiv);
    }
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

createBtn.addEventListener('click', () => {
    const amount = parseInt(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
        createBoxes(amount);
    }
});
destroyBtn.addEventListener('click', destroyBoxes);