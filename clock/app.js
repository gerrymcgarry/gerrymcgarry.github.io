if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

var date = new Date();
document.getElementById("time").innerHTML = date.toLocaleTimeString();
document.getElementById("date").innerHTML = date.toLocaleDateString();
setInterval( () => {
    var date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString();
    document.getElementById("date").innerHTML = date.toLocaleDateString();
}, 1000);