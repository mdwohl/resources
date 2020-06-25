var dogs = prompt('How many dogs do you want?');
var welcome;

    if (dogs > 4) {
        welcome = 'Your number is too many! You may want to reconsider.';
    } else {
        welcome = 'Your number is a good number of dogs.';
    }
    document.write(welcome);

    