 // Get all the image elements by their class name
 const images = document.querySelectorAll('.linkimg');

 // Convert the NodeList to an array using Array.from
 const imageArray = Array.from(images);

 // Add a click event listener to each image
 imageArray.forEach(image => {
     image.addEventListener('click', function(event) {
         // Prevent the default click behavior of the image
         event.preventDefault();

         // Get the parent card element
         const cardContent = this.parentNode;

         // Get the link URL from the associated anchor (a) element
         const linkElement = cardContent.querySelector('a.title');
         const link = linkElement.getAttribute('href');

         // Check if the link is not empty
         if (link) {
             // Open the link in a new tab
             window.open(link, '_blank');
         }
     });
 });