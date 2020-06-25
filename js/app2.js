var today = new Date();
var hourNow = today.getHours();
var dogs

if (hourNow < 18) {
    dogs = "It's between 10AM and 6PM. Shelters are open and it's a good time to get a dog!";
}   else if (hourNow < 10) {
    dogs = "It's before 10AM or after 6PM -- wait until the shelters are open to get a dog!";
}
document.write(dogs)