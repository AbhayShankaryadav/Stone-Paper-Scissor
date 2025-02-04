const computer = document.querySelector(".comp img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".comp-points ");
const playerPoints = document.querySelector(".player-points");
const options = document.querySelectorAll(".option button");
const victory = document.querySelector(".heading")



options.forEach((option) => {
    option.addEventListener("click", () => {
      computer.classList.add("shakeComputer");
      player.classList.add("shakePlayer");
                              
      setTimeout(() => {
        computer.classList.remove("shakeComputer");
        player.classList.remove("shakePlayer");

        /*compimg/stoneComputer.png*/
        player.src = "playerimg/"+option.innerHTML+"Player.png";
        const choice = ["STONE", "PAPER", "SCISSOR"];
        let arrayNo = Math.floor(Math.random() * 3);
        let computerChoice = choice[arrayNo];
        computer.src = "compimg/"+computerChoice+"Computer.png";
  
        let cPoints = parseInt(computerPoints.innerHTML);
        let pPoints = parseInt(playerPoints.innerHTML);
        let decession = String(victory.innerHTML);
  
        if (option.innerHTML === "STONE") {
          if (computerChoice === "PAPER")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "SCISSOR")
            playerPoints.innerHTML = pPoints + 1;
        } else if (option.innerHTML === "PAPER") {
          if (computerChoice === "SCISSOR")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "STONE")
            playerPoints.innerHTML = pPoints + 1;
        } else {
          if (computerChoice === "STONE")
            computerPoints.innerHTML = cPoints + 1;
          else if (computerChoice === "PAPER")
            playerPoints.innerHTML = pPoints + 1;
        }
      }, 900);
    });
  });