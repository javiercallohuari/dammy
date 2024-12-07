document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');
    let index = 0;

    setInterval(() => {
        images.forEach(img => img.classList.remove('fade'));
        images[index].classList.add('fade');
        index = (index + 1) % images.length;
    }, 3000);
});
