

function getElementValueById() {
    const element = document.getElementById('perPlayer');
    const value = element.value;
    const perPlayer = parseInt(value);

    if (isNaN(value)) {
        alert("Please enter a number");
        element.value = "";
        return;
    } else if(value < 1) {
        alert("Per Player ammount field cannot be epmty[] or greater than 0");
        element.value = "";
    } else {
        element.value = "";
        return perPlayer;
    }
}



function manager() {
    const element = document.getElementById('manager');
    const value = element.value;
    const perPlayer = parseInt(value);

    if (isNaN(value)) {
        alert("Please enter a number");
        element.value = "";
        return;
    } else if(value < 1) {
        alert("Manager field cannot be empty[] or greater than 0");
        element.value = "";
    } else {
        element.value = "";
        return perPlayer;
    }
}

function coach() {
    const element = document.getElementById('coach');
    const value = element.value;
    const perPlayer = parseInt(value);

    if (isNaN(value)) {
        alert("Please enter a number");
        element.value = "";
        return;
    } else if(value < 1 ) {
        alert("Coach field cannot be empty[] or greater than 0");
        element.value = "";
    } else {
        element.value = "";
        return perPlayer;
    }
}