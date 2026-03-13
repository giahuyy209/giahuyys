// Change main image in product detail
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnail-images img');
    thumbnails.forEachthumb 
        thumb.classList.remove('active');
        if (thumb.src === src) 
            thumb.classList.add