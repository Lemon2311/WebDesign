document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.image-container');

    document.addEventListener('mousemove', function(e) {
      const containerRect = container.getBoundingClientRect();
      // Calculate the center of the image
      const centerX = containerRect.left + containerRect.width / 2;
      const centerY = containerRect.top + containerRect.height / 2;
      
      // Calculate the distance of the mouse from the center of the image
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Adjust sensitivity based on window size
      const sensitivityX = window.innerWidth / 60;
      const sensitivityY = window.innerHeight / 70;
      
      // Convert distance to a suitable rotation angle, now taking window size into account
      const rotateY = mouseX / sensitivityX;
      const rotateX = -(mouseY / sensitivityY);
  
      // Apply the rotation
      container.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
  