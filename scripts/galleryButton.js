let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');

function scrollGallery(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    updateGallery();
}

function updateGallery() {
    const offset = -currentIndex * (galleryItems[0].offsetWidth + 20); // 20 is the margin between items
    document.querySelector('.gallery-container').style.transform = `translateX(${offset}px)`;
}