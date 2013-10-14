// alert dialog dismissed
function alertDismissed() {
    // do something
}

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        //document.getElementById('scan').addEventListener('click', this.scan, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    // Application Constructor
    initialize2: function () {
        this.bindEvents();
        this.Scan();
    },

    Scan: function () {
        console.log('[Barcode.js - Scan: function ] - Scanning...');

        navigator.notification.alert(
            '[Barcode.js - Scan: function ] - Scanning...', // message
            alertDismissed,                                 // callback
            'Scanning',                                     // title
            'Done!'                                         // buttonName
        );

        window.plugins.barcodeScanner.scan(
            function (result) {
                alert("Scanned Code: " + result.text
                        + ". Format: " + result.format
                        + ". Cancelled: " + result.cancelled);
            }, function (error) {
                alert("Scan failed: " + error);
            });
    },

    //alertDismissed: function() {
    //    console.log('Função chamada alertDesmissed()');
    //},

    Mensagem: function(){
        navigator.notification.alert(
            'Função de testes da biblioteca barcode.js',    // message
            alertDismissed,                                 // callback
            'Testes',                                       // title
            'Done'                                          // buttonName
        );
    },

    TestesAlert: function () {
        alert('Chamada a função TestesAlert');
    }
};