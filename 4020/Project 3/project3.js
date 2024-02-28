function changeImage(imagePath) {
  document.getElementById('displayedImage').src = imagePath;
}


document.getElementById('image1').addEventListener('click', function() {
  changeImage('images/image1.jpg');
});
document.getElementById('image2').addEventListener('click', function() {
  changeImage('images/image2.jpg');
});
document.getElementById('image3').addEventListener('click', function() {
  changeImage('images/image3.jpg');
});
document.getElementById('image4').addEventListener('click', function() {
  changeImage('images/image4.jpg');
});
document.getElementById('image5').addEventListener('click', function() {
  changeImage('images/image5.jpg');
});