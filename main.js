// player's move
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
plrmove = 'O';

var counter=0;

function checkWinner() {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        return true;
    }
    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        return true;
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8]) {
        return true;
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        return true;
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        return true;
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        return true;
    }
    else if (arr[0] == arr[4] && arr[4] == arr[8]) {
        return true;
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        return true;
    }
    else {
        return false;
    }
}

function mkmove(i) {
    // alert(i.textContent);
    counter++;
    // check winning condition
    var winnerfound = checkWinner();

    if (winnerfound == true) {
        alert("winner alredy found !");
    }
    else {
        if (i.textContent != 'X' && i.textContent != 'O') {
            var chance;
            if (plrmove === 'X') {
                plrmove = 'O';
            }
            else
                plrmove = 'X';

            var position = i.textContent;
            i.textContent = plrmove;
            document.getElementById(position).style.color = "white";
            chance = plrmove;
            document.getElementById(chance).style.backgroundColor = "rgb(228, 102, 102)";

            if (chance == "X")
                chance = "O";
            else
                chance = "X";
            document.getElementById(chance).style.backgroundColor = "rgb(102, 228, 102)";
            // alert(i.textContent);
            arr[position] = i.textContent;
            // alert(arr);
        }
        winnerfound = checkWinner();
        if (winnerfound == true) {
            alert("congratulations!🥳  player  " + plrmove + " is winner");
            counter--;
        }
        else if(counter==9)
        {
            alert("Draw !");
        }
    }
}

function Restart() {
    var ask = confirm("are you sure ?");
    // alert(ask);
    if (ask) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        document.getElementById("0").innerHTML = 0;
        document.getElementById("1").innerHTML = 1;
        document.getElementById("2").innerHTML = 2;
        document.getElementById("3").innerHTML = 3;
        document.getElementById("4").innerHTML = 4;
        document.getElementById("5").innerHTML = 5;
        document.getElementById("6").innerHTML = 6;
        document.getElementById("7").innerHTML = 7;
        document.getElementById("8").innerHTML = 8;
        document.getElementById("0").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("1").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("2").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("3").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("4").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("5").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("6").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("7").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("8").style.color = "rgba(8, 58, 72, 0)";

        // counter = 0
        counter=0;
    }
}

