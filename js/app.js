var dogs = prompt('How many dogs do you want?');
var welcome;

    if (dogs > 4) {
        welcome = 'That is too many!';
    } else if (dogs < 4) {
        welcome = 'That is a good number of dogs.';
    }