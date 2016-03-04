$(function() {
    var greeting,
        totalVisits,
        sessionVisits;

    if(!localStorage.name) {
        localStorage.name = prompt('Please enter your name');
    }

    if(!localStorage.totalVisits) {
        localStorage.totalVisits = 0;
    }

    if(!sessionStorage.sessionVisits) {
        sessionStorage.sessionVisits = 0;
    }

    localStorage.totalVisits++;
    sessionStorage.sessionVisits++;

    greeting = $('<p>Hello ' + localStorage.name + '</p>');
    totalVisits = $('<p> Total Visits: ' + localStorage.totalVisits + '</p>');
    sessionVisits = $('<p> Sesstion Visits: ' + sessionStorage.sessionVisits + '</p>')
    $('body').append(greeting, totalVisits, sessionVisits);
});
