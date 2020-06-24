var welcome
var dogs

if location = 'YES' {
    welcome = 'See links below for adoption resources.';
} else {
    Response.sendRedirect("https://www.google.com");

    if (dogs > 4) {
        welcome = 'That is too many!';
    } else if (dogs < 4) {
        welcome = 'That is a good number of dogs.';
    }