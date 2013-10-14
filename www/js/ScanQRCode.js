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

        //navigator.notification.alert(
        //    '[Barcode.js - Scan: function ] - Scanning...', // message
        //    alertDismissed,                                 // callback
        //    'Scanning',                                     // title
        //    'Done!'                                         // buttonName
        //);

        try {
            window.plugins.barcodeScanner.scan(
                function (result) {
                    alert("Scanned Code: " + result.text
                            + ". Format: " + result.format
                            + ". Cancelled: " + result.cancelled);
                }, function (error) {
                    alert("Scan failed: " + error);
                });
        } catch (e) {
            txt = "Error Message: " + e.message + "\n\n";
            txt += "Error Code: ";
            txt += e.number & 0xFFFF
            txt += "<br />";
            txt += "Error Name: " + e.name;
            txt += "Click OK to continue.\n\n";
            alert(txt);
        }
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
    },

    ScanBarcodeDemo: function () {
        console.log('Funcao ScanBarcodeDemo. Calling...');

        try {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        }
        catch (e) {
            txt = "Error Message: " + e.message + "\n\n";
            txt += "Error Code: ";
            txt += e.number & 0xFFFF
            txt += "<br />";
            txt += "Error Name: " + e.name;
            txt += "Click OK to continue.\n\n";
            alert(txt);
        }

        scanner.scan(function (result) {

            alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);

            console.log("Scanner result: \n" +
                 "text: " + result.text + "\n" +
                 "format: " + result.format + "\n" +
                 "cancelled: " + result.cancelled + "\n");

            //
            //document.getElementById("info").innerHTML = result.text;
            console.log(result);
            /*
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }
            */

        }, function (error) {
            console.log("Scanning failed: ", error);
        });
    },
};