// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const catButton = document.getElementById("catButton");
    const catSound = document.getElementById("catSound");
    const backgroundTune = document.getElementById("backgroundTune");
  
    // When the Cat Button is clicked...
    catButton.addEventListener("click", function () {
      // Play a cute meow sound
      catSound.currentTime = 0;
      catSound.play();
  
      // Optionally start background music if not already playing
      if (backgroundTune.paused) {
        backgroundTune.play();
      }
  
      // Trigger additional playful CSS animations (e.g., add a class)
      document.getElementById("home").classList.add("cat-transition");
  
      // For a seamless experience, scroll to the About section after a short delay
      setTimeout(function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      }, 1000);
    });
  });
  