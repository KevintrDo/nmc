    const images = [
      { name: 'Bloody Mary', path: 'images/image1.jpg' },
      { name: 'Gin Fizz', path: 'images/image2.jpg' },
      { name: 'Old Fashion', path: 'images/image3.jpg' },
      { name: 'Margarita', path: 'images/image4.jpg' },
      { name: 'Mojito', path: 'images/image5.jpg' }
    ];

    // Function to change the displayed image
    function changeImage(imagePath) {
      document.getElementById('displayedImage').src = imagePath;
    }

    // Create buttons for each image
    const buttonsContainer = document.getElementById('buttons');
    images.forEach((image, index) => {
      const button = document.createElement('button');
      button.textContent = image.name;
      button.addEventListener('click', () => {
        changeImage(image.path);
      });
      buttonsContainer.appendChild(button);
    });