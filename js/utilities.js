
function getElementValueById(id, type) {
    const element = document.getElementById(id);
    const value = element.value;
    const valuInt = parseInt(value);

    if (isNaN(value)) {
        alert("Please enter a number");
        element.value = "";
        return;
    } else if(value < 1) {
        alert('Input field canot be epmty [] or greater than 0');
        element.value = "";
    } else {
        element.value = "";
        return valuInt;
    }
}
