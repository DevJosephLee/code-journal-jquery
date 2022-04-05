/* global data */
/* exported data */

let toggleSwitchClicked = false;

$(".toggler-container").click(function() {
  if (!toggleSwitchClicked) {
    $(".toggler-black").attr("class", "toggler-white");
    $(".toggler-container-black").attr("class", "toggler-container-white");
    $(".toggle-text-black").attr("class", "toggle-text-white");
    $(".bg-white").attr("class", "bg-black");
    toggleSwitchClicked = true;
  } else {
    $(".toggler-white").attr("class", "toggler-black");
    $(".toggler-container-white").attr("class", "toggler-container-black");
    $(".toggle-text-white").attr("class", "toggle-text-black");
    $(".bg-black").attr("class", "bg-white");
    toggleSwitchClicked = false;
  }
})

$(".modal-button-container").click(function() {
  $(".hidden").attr("class", "show");
})

$(".no-button").click(function() {
  $(".show").attr("class", "hidden");
})

let lightBulbClicked = false;

$(".light-bulb").click(function() {
  if (!lightBulbClicked) {
    $(".light-bulb-container-black").attr("class", "light-bulb-container-white");
    $(".off").attr("class", "on");
    lightBulbClicked = true;
  } else {
    $(".light-bulb-container-white").attr("class", "light-bulb-container-black");
    $(".on").attr("class", "off");
    lightBulbClicked = false;
  }
})

let intervalId = 0;
const img = $(".carousel-image");
const button = $(".carousel-button");

setInterval(switchImg, 1000)

function switchImg() {
    intervalId++
    for (let i = 0; i < img.length; i++) {
      if (intervalId === parseInt(img[i].getAttribute('data-id'))) {
        img[i].className = 'carousel-image show'
        button[i].className = 'carousel-button black'
      } else {
        img[i].className = 'carousel-image hidden'
        button[i].className = 'carousel-button'
      }
    }
    if (intervalId === 4) {
      intervalId = 0
    }
}

$(".left-button").click(function(event) {
  intervalId--
  for (let i = 0; i < img.length; i++) {
    if (intervalId === parseInt(img[i].getAttribute('data-id'))) {
      img[i].className = 'carousel-image show'
      button[i].className = 'carousel-button black'
    } else {
      img[i].className = 'carousel-image hidden'
      button[i].className = 'carousel-button'
    }
  }
  if (intervalId === 4) {
    intervalId = 0
  }
  var interval = setInterval(switchImg, 1000);
  clearInterval(interval);
})

$(".right-button").click(function(event) {
  intervalId++
  for (let i = 0; i < img.length; i++) {
    if (intervalId === parseInt(img[i].getAttribute('data-id'))) {
      img[i].className = 'carousel-image show'
      button[i].className = 'carousel-button black'
    } else {
      img[i].className = 'carousel-image hidden'
      button[i].className = 'carousel-button'
    }
  }
  if (intervalId === 4) {
    intervalId = 0
  }
  var interval = setInterval(switchImg, 1000);
  clearInterval(interval);
})
