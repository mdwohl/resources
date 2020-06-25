'use strict'

function numberDogs(){
//var dogs = prompt('How many dogs do you want?');

msg = ""
    for (var i = 0; i < 4; i = i + 1){
        var dogs = prompt('How many dogs do you want?')
        if (dogs >= 4){
            alert(parseInt(dogs) + ' dogs is too many! You may want to reconsider.')}
        else if (dogs < 4) {
            var msg = (parseInt(dogs) + ' is a good number of dogs.')

            alert(parseInt(dogs) + ' is a good number of dogs.')
            break;
        }
        else {
           alert('Please enter a valid number of dogs!');
        }
    }
    document.write(msg);
}

numberDogs()
dogTime()

function dogTime(){
var today = new Date();
var hourNow = today.getHours();
var dogTime

    if (hourNow < 18) {
        dogTime = " between 10AM and 6PM. Shelters are open and it's a good time to get a dog!";
    }   else if (hourNow < 10) {
        dogTime = " before 10AM or after 6PM -- wait until the shelters are open to get a dog!";
    }
    document.write(' Ready to get a dog? It is now' + dogTime)
}

confirm('A dog is a lot of work! Press OK to confirm your commitment to your pup.');
