// Set Default image index (first image)
let imageIndex = 0;
// Show Default image index (first image)
imgShw(imageIndex);

function imgShw(x) {
    // Add the button call value to imageIndex
    imageIndex += x;

    const image = document.getElementsByClassName('image');
    const mark = document.getElementsByClassName('mark');

    // Set all images into display: none
    for(i = 0; i < image.length; i++) {
        image[i].style.display = "none";
    }

    // Remove active class from indigators
    for(i = 0; i < mark.length; i++) {
        mark[i].className = mark[i].className.replace(" active", "");
    }

    // Show first image after click next button in last image
    if(imageIndex > image.length -1) {
        imageIndex = 0;
    }

    // When click prev button from first image, it will shows last image
    if (imageIndex < 0) {
        imageIndex = image.length -1;
    }

    // Add display block current image
    image[imageIndex].style.display = "block";
    // Add active class selected image shows
    mark[imageIndex].classList.add('active');
};