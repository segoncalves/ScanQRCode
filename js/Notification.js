// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    // Empty
}

// alert dialog dismissed
function alertDismissed() {
    // do something
}

// Show a custom alertDismissed
//
function showAlert() {
    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
}

// process the promptation dialog result
function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

// Show a custom prompt dialog
//
function showPrompt() {
    navigator.notification.prompt(
        'Please enter your name',  // message
        onPrompt,                  // callback to invoke
        'Registration',            // title
        ['Ok', 'Exit'],             // buttonLabels
        'Jane Doe'                 // defaultText
    );
}

// Beep three times
//
function playBeep() {
    navigator.notification.beep(3);
}

// Vibrate for 2 seconds
//
function vibrate() {
    navigator.notification.vibrate(2000);
}