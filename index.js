function player1choice() {
    const choice = Number(prompt("Please select your choice: \n 1. Rock \n 2. Paper \n 3. Scissor"));
    if (choice > 3) {
        alert("Invalid Choice")
        return;
    }
    reset();
    document.getElementById("player1choice").value = choice;
    
}

function player2choice() {
    const choice = Number(prompt("Please select your choice: \n 1. Rock \n 2. Paper \n 3. Scissor"));
    if (choice > 3) {
        alert("Invalid Choice")
        return;
    }
    reset();
    document.getElementById("player2choice").value = choice;

}
function fight() {
    const player1choice = document.getElementById("player1choice").value;
    const player2choice = document.getElementById("player2choice").value;
    const rock = 1;
    const paper = 2;
    const scissor = 3;

    var audio = new Audio('audio/batobato.mp3');
    audio.play();

    setTimeout(function() {
        if (player1choice == player2choice) {
            document.getElementById("winner").innerHTML = "Draw!"
            return;
        }
        document.getElementById("player1default").setAttribute("hidden", "hidden");;
        document.getElementById("player2default").setAttribute("hidden", "hidden");
    
        if (player1choice == 1) {
    
            if (player2choice == 2) {
                document.getElementById("player1rock").removeAttribute("hidden");
                document.getElementById("player2paper").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 2 wins"
            }
    
            if (player2choice == 3) {
                document.getElementById("player1rock").removeAttribute("hidden");
                document.getElementById("player2scissors").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 1 wins"

            }
    
            return;
        }
    
        if (player1choice == 2) {
            
            if (player2choice == 1) {
                document.getElementById("player1paper").removeAttribute("hidden");
                document.getElementById("player2rock").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 1 wins"

            }
    
            if (player2choice == 3) {
                document.getElementById("player1paper").removeAttribute("hidden");
                document.getElementById("player2scissors").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 2 wins"
            }
    
            return;
        }
    
        if (player1choice == 3) {
    
            if (player2choice == 1) {
                document.getElementById("player1scissors").removeAttribute("hidden");
                document.getElementById("player2rock").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 1 wins"
            }
    
            if (player2choice == 2) {
                document.getElementById("player1scissors").removeAttribute("hidden");
                document.getElementById("player2paper").removeAttribute("hidden");
                document.getElementById("winner").innerHTML = "Player 2 wins"
            }
    
            return;
        }
    }, 2000);

    
}

function reset() {
    document.getElementById("player1default").removeAttribute("hidden");
    document.getElementById("player2default").removeAttribute("hidden");

    document.getElementById("player1rock").setAttribute("hidden", "hidden");
    document.getElementById("player1paper").setAttribute("hidden", "hidden");
    document.getElementById("player1scissors").setAttribute("hidden", "hidden");

    document.getElementById("player2rock").setAttribute("hidden", "hidden");
    document.getElementById("player2paper").setAttribute("hidden", "hidden");
    document.getElementById("player2scissors").setAttribute("hidden", "hidden");

}