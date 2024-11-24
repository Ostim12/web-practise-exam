const swapBTN = document.getElementById("swap-btn")
const wolfImage = document.getElementById("wolfImage")

let wolfImgers =["forest", "mountain","prairie"]
let wolfAltText =["wolf in a forest", "wolf on top of a mountain", "wolf in a prairie"]
let wolfnumber = 0

swapBTN.addEventListener("click", function (){
    wolfnumber += 1;
    if (wolfnumber == 3){
      wolfnumber =0
    }
    wolfImage.src = "img/" + wolfImgers[wolfnumber] + "-wolf.webp"
    wolfImage.alt = wolfAltText[wolfnumber]
  }
)
