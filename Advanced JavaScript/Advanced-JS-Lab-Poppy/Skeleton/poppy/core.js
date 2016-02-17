function pop(type, title, message) {
    var popup;
    switch (type) {
        // TODO: Implement various popup types
    case 'success':
        popup = poppy.success(title, message, type);
        break;
    case 'info':
        popup = poppy.info(title, message, type);
        break;
    case 'error':
        popup = poppy.error(title, message, type);
        break;
    case 'warning':
        popup = poppy.warning(title, message, type);
        break;
    }

    // generate view from view factory
    var view = createPopupView(popup);

    processPopup(view, popup);
}

function processPopup(domView, popup) {
    // TODO: Implement popup logic
    domView.style.transition = '2000ms';
    domView.style.opacity = 0;
    document.body.appendChild(domView);

    setTimeout(function() {
        domView.style.opacity = 1;
    }, 500);

    if(popup._popupData.type === 'success') {
        fadeOut(domView, popup);
    }

    if(popup._popupData.type === 'info') {
        var closeButton = domView.getElementsByClassName('poppy-close-button')[0];
        closeButton.addEventListener('click', function(e) {
            fadeOut(domView, popup);
        });
    }

    if(popup._popupData.type === 'error') {
        domView.addEventListener('click', function(e) {
            fadeOut(domView, popup);
        });
    }

    if(popup._popupData.type === 'warning') {
        domView.addEventListener('click', function(e) {
            popup._popupData.callback();
        });
    }
}

function fadeOut(popupDom, popup) {
    setTimeout(function() {
        popupDom.style.opacity = 0;
    }, popup._popupData.timeOut);

    setTimeout(function() {
        document.body.removeChild(popupDom);
    }, popup._popupData.timeOut)
}

pop('success', 'Success!', 'You have successfully registered!');
pop('info', 'Did you know...?', 'Nakov is only 22 years old!');
pop('error', 'Error', 'Invalid username/password.');
pop('warning', 'Warning', 'Please validate your email.');
