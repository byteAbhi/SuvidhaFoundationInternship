document.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");
  const navUl = document.querySelector(".nav-ul");
  const icon=document.querySelector("#navbar #icon");
  const scrollThreshold = 50; // Change this value as needed

  if (window.scrollY > scrollThreshold) {
    navbar.classList.add("scrolled");
    logo.classList.add("image");
    navUl.classList.add("ulItems");
    icon.classList.add("icon");
  } else {
    navbar.classList.remove("scrolled");
    logo.classList.remove("image");
    navUl.classList.remove("ulItems");
    icon.classList.remove("icon");
  }
});



//  active function 
document.querySelectorAll('.nav-ul .nav-item a').forEach(item => {
  item.addEventListener('click', function(event) {
      // Prevent the default action
      event.preventDefault();
      
      // Remove 'active' class from all items
      document.querySelectorAll('.nava-ul .nav-item').forEach(nav => {
          nav.classList.add('active');
      });

      // Add 'active' class to the clicked item
      this.parentElement.classList.remove('active');
  });
});

// const button = document.getElementById('callUsButton');

// button.addEventListener('mouseenter', () => {
//     button.classList.add('hovered');
//     button.classList.remove('reset');
// });

// button.addEventListener('mouseleave', () => {
//     button.classList.remove('hovered');
//     button.classList.add('reset');
// });

document.addEventListener("DOMContentLoaded", function () {
  const playVideoButton = document.getElementById("play-video");
  const videoOverlay = document.getElementById("video-overlay");
  const overlayCloseElements = document.querySelectorAll(
    ".video-overlay, .video-overlay-close"
  );

  playVideoButton.addEventListener("click", function (e) {
    e.preventDefault();
    openVideoOverlay();
  });

  overlayCloseElements.forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      closeVideoOverlay();
    });
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "Escape") {
      closeVideoOverlay();
    }
  });

  function openVideoOverlay() {
    videoOverlay.classList.add("open");
    const iframe = document.createElement("iframe");
    iframe.width = "660";
    iframe.height = "415";
    iframe.src = "https://www.youtube.com/embed/ngElkyQ6Rhs";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    videoOverlay.appendChild(iframe);
  }

  function closeVideoOverlay() {
    if (videoOverlay.classList.contains("open")) {
      videoOverlay.classList.remove("open");
      const iframe = videoOverlay.querySelector("iframe");
      if (iframe) {
        videoOverlay.removeChild(iframe);
      }
    }
  }
});


// onclick side displaying
function navClick() {
  const acoor = document.getElementsByClassName('side-nav');

  for (let i = 0; i < acoor.length; i++) {
    if (acoor[i].style.display === "none") {
      acoor[i].style.display = "flex";
    } else {
      acoor[i].style.display = "none";
    }
  }
}

function hoverEnter(){
  const enterhover=document.getElementById("hover-id");
  console.log("mouse enter")
  enterhover.style.display="none" ? enterhover.style.display="block" : enterhover.style.display="none";
}

function hoverLeave(){
  const enterhover=document.getElementById("hover-id");
  enterhover.style.display="block" ? enterhover.style.display="none" : enterhover.style.display="block";
  enterhover.classList.add('active')
}
function hoverEnter1(){
  const enterhover=document.getElementById("hover-id-1");
  console.log("mouse enter")
  enterhover.style.display="none" ? enterhover.style.display="block" : enterhover.style.display="none";
  enterhover.classList.add('active')
}

function hoverLeave1(){
  const enterhover=document.getElementById("hover-id-1");
  enterhover.style.display="block" ? enterhover.style.display="none" : enterhover.style.display="block";
  console.log("mouse leave")
}
 
 


