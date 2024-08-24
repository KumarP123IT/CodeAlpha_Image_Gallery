const images = [
    '/img/image1.jpg',
    '/img/image2.jpg',
    '/img/image3.jpg',
    '/img/image4.jpg',
    '/img/image4.jpg',
    '/img/image5.jpg',
    '/img/image6.jpg',
    '/img/image7.jpg',
    '/img/image8.jpg',
    '/img/image9.jpg',
    '/img/image10.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.style.opacity = 0;
    setTimeout(() => {
        galleryImage.src = images[index];
        galleryImage.style.opacity = 1; 
        updateThumbnails();
    }, 500); 
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
}

function currentImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}


showImage(currentIndex);
