(function () {
    window.addEventListener('load', function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register("/serviceWorker.js")
            .then(function(registration) {
                console.log("serviceWorker registed.");
            }).catch(function(error) {
                console.log("serviceWorker error.", error);
                //console.warn("serviceWorker error.", error);
            });
        }
    });
})();