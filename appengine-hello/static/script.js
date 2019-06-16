"use strict";

function fetchMessage() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "/hello", false);
    xmlHttp.send(null);
    document.getElementById("message").innerHTML = xmlHttp.responseText;
}