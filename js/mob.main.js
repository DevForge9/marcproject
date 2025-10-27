document.addEventListener("DOMContentLoaded", function() {
    let toggleBtn = document.querySelector("#toggleMenu button");
    let menu = document.querySelector(".header__menu");

    toggleBtn.addEventListener("click", function() {
        console.log("Ok clicked");
        menu.classList.toggle("show");
    });
});

  const video = document.getElementById("scrollVideo");

  // Create an observer to detect visibility of the video
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Video is visible — resume play if user had played it
          if (!video.paused && video.currentTime > 0) {
            video.play();
          }
        } else {
          // Video not visible — pause it
          if (!video.paused) {
            video.pause();
          }
        }
      });
    },
    {
      threshold: 0.5, // 50% of video must be visible
    }
  );

  observer.observe(video);
