let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');

function scrollGallery(direction) {
    const galleryContainer = document.querySelector('.gallery-container');
    const scrollAmount = 300;
    const totalWidth = galleryContainer.scrollWidth;
    const containerWidth = galleryContainer.clientWidth;
    const maxScrollLeft = totalWidth - containerWidth;

    if (direction === 1) {
        galleryContainer.scrollLeft += scrollAmount; //scroll right
        if (galleryContainer.scrollLeft >= maxScrollLeft) {
            galleryContainer.scrollLeft = 0; //reset
        }
    }
    else if (direction === -1) {
        galleryContainer.scrollLeft -= scrollAmount; // Scroll left
        if (galleryContainer.scrollLeft <= 0) {
            galleryContainer.scrollLeft = maxScrollLeft; //go to end if you reach beginning   
        }
    }
}

function updateGallery() {
    const offset = -currentIndex * (galleryItems[0].offsetWidth + 20); // 20 is the margin between items
    document.querySelector('.gallery-container').style.transform = `translateX(${offset}px)`;
}