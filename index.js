const hamburger = document.querySelector(".hamburger")
const slideContainer = document.querySelector(".slide-container")
const sidebar = document.querySelector(".sidebar")
const categories = document.querySelector(".categories")
const mainFirstContainer = document.querySelector(".main-first-container")
const mainSecondContainer = document.querySelector(".main-second-container")
const mainShortsSection = document.querySelector(".main-shorts-section")
const mainShortsContainer = document.querySelector(".main-shorts-container")
const videoContainer = document.querySelector(".main-content");
let video = document.querySelectorAll(".myVideo");
const shortsPageColFirst = document.querySelector(".shorts-page-col-first")
const shortsPageColSecond = document.querySelector(".shorts-page-col-second")
// const shortVideos = document.querySelector(".shortVideo")
// let shortsPage = document.querySelectorAll(".shorts-page-video")

hamburger.addEventListener("click", function () {
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none"; 
        slideContainer.style.display = "block";
        categories.style.marginLeft = "14rem";
        categories.style.width = "86%";
        mainFirstContainer.style.marginLeft = "14rem";
        mainFirstContainer.style.width = "84%";
        mainSecondContainer.style.marginLeft = "14rem";
        mainSecondContainer.style.width = "84vw";
        mainShortsSection.style.marginLeft = "14rem";
        mainShortsSection.style.width = "84%";
        mainShortsContainer.style.marginLeft = "14rem";
        mainShortsContainer.style.width = "84%";
        shortsPageColFirst.style.marginLeft = "14rem"
    } else {
        sidebar.style.display = "block";
        slideContainer.style.display = "none";
        categories.style.marginLeft = "";
        categories.style.width="";
        mainFirstContainer.style.marginLeft = "";
        mainFirstContainer.style.width = "";
        mainSecondContainer.style.marginLeft = "";
        mainSecondContainer.style.width = "";
        mainShortsSection.style.marginLeft = "";
        mainShortsSection.style.width = "";
        mainShortsContainer.style.marginLeft = "";
        mainShortsContainer.style.width = "";
    }
});


// video.forEach((ele)=>{
// ele.addEventListener("mouseover", () => {
//   // console.log("Hover detected");
//   ele.play()
// });

// ele.addEventListener("mouseleave", () => {
//   // console.log("Hover detected");
//   ele.pause();
//   ele.currentTime  = 0;
// });
// })


video.forEach((ele) => {
  // Create span to show remaining time
  const timeSpan = document.createElement("span");
  timeSpan.style.position = "absolute";
  timeSpan.style.right = "0.5rem";
  timeSpan.style.bottom = "0.8rem";
  timeSpan.style.background = "rgba(0,0,0,0.7)";
  timeSpan.style.color = "white";
  timeSpan.style.padding = "2px 5px";
  timeSpan.style.fontSize = "12px";
  timeSpan.style.borderRadius = "4px";
  timeSpan.style.display = "none"; // hide by default
  ele.parentElement.style.position = "relative"; // make parent relative
  // ele.parentElement.style.zIndex = -1; // make parent relative
  ele.parentElement.appendChild(timeSpan);

  let intervalId;

  ele.addEventListener("mouseover", () => {
    ele.play();
    timeSpan.style.display = "block";

    // Start updating remaining time
    intervalId = setInterval(() => {
      const remaining = ele.duration - ele.currentTime;
      // Format remaining time as MM:SS
      const mins = Math.floor(remaining / 60);
      const secs = Math.floor(remaining % 60).toString().padStart(2, "0");
      timeSpan.textContent = `${mins}:${secs}`;
    }, 500);
  });

  ele.addEventListener("mouseout", () => {
    ele.pause();
    ele.currentTime = 0;
    timeSpan.style.display = "none";

    // Stop updating remaining time
    clearInterval(intervalId);
  });
});



// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       shortsVideos.play();
//     }else{
//       shortsVideos.pause();
//     }
//   })
// },{
//   threshold:0.5
// });
// observer.observe(shortsVideos);




