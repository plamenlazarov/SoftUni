$(function() {
    var answers,
        answer,
        correctAnswers = 0,
        timer = $('#timer'),
        minutes,
        seconds = 300,
        count = 0;


    if(!localStorage.answers) {
        answers = {};
    } else {
        answers = JSON.parse(localStorage.getItem('answers'));
    }

    $('input:radio').on('change', function() {

    });

    var countdownTimer = setInterval(function() {
        minutes = Math.round((seconds - 30) / 60);
        var remainingSeconds = seconds % 60;

        if(remainingSeconds < 10) {
            remainingSeconds = '0' + remainingSeconds;
        }

        timer.text(minutes + ':' + remainingSeconds);

        if(seconds === 0) {
            clearInterval(countdownTimer);
        } else {
            seconds--;
        }

    }, 1000);

    $('form').on('submit', function(e) {
        e.preventDefault();
        var radioButtons = $('input[type="radio"]:checked', 'form');
        radioButtons.each(function(index) {
            var btnValue = radioButtons[index].value;
            answer = $(radioButtons[index]).parent().text().trim();
            answers[answer] = btnValue;
            localStorage.setItem('answers', JSON.stringify(answers));
        });

        $.each(JSON.parse(localStorage.answers), function(key, value) {
            count++;
            if(value === 'correct') {
                correctAnswers++;
            }
        });

        $('#output').text((correctAnswers / count * 100).toFixed(2) + '%');
        localStorage.clear();
        clearInterval(countdownTimer);
    });
});
