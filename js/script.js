document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.fullscreen-loader').style.display = 'block';

    setTimeout(function () {
        var loader = document.querySelector('.fullscreen-loader');
        loader.style.display = 'none';
        loader.parentNode.removeChild(loader);
    }, 3500);
});