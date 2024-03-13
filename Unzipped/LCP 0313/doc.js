"use strict";

let btn = document.querySelector("#btn1");

function btnClicked() {
    return alert("Button clicked!");
}

btn.addEventListener("click", btnClicked);

