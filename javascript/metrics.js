const u1Btn = document.querySelector("#U1");
const u2Btn = document.querySelector("#U2");
const w1Btn = document.querySelector("#W1");
const w2Btn = document.querySelector("#W2");
const allShifts = document.querySelector("#allShifts");

const u1Page = document.querySelector(".u1Info");
const u2Page = document.querySelector(".u2Info");
const w1Page = document.querySelector(".w1Info");
const w2Page = document.querySelector(".w2Info");

u1Btn.addEventListener("click", function() {
    u1Page.setAttribute("style", "display: block;");
    u2Page.setAttribute("style", "display: none;");
    w1Page.setAttribute("style", "display: none;");
    w2Page.setAttribute("style", "display: none;");
    u1Btn.classList.add("current-tab");
    u2Btn.classList.remove("current-tab");
    w1Btn.classList.remove("current-tab");
    w2Btn.classList.remove("current-tab");
    allShifts.classList.remove("current-tab");
});

u2Btn.addEventListener("click", function() {
    u1Page.setAttribute("style", "display: none;");
    u2Page.setAttribute("style", "display: block;");
    w1Page.setAttribute("style", "display: none;");
    w2Page.setAttribute("style", "display: none;");
    u1Btn.classList.remove("current-tab");
    u2Btn.classList.add("current-tab");
    w1Btn.classList.remove("current-tab");
    w2Btn.classList.remove("current-tab");
    allShifts.classList.remove("current-tab");
});

w1Btn.addEventListener("click", function() {
    u1Page.setAttribute("style", "display: none;");
    u2Page.setAttribute("style", "display: none;");
    w1Page.setAttribute("style", "display: block;");
    w2Page.setAttribute("style", "display: none;");
    u1Btn.classList.remove("current-tab");
    u2Btn.classList.remove("current-tab");
    w1Btn.classList.add("current-tab");
    w2Btn.classList.remove("current-tab");
    allShifts.classList.remove("current-tab");
});

w2Btn.addEventListener("click", function() {
    u1Page.setAttribute("style", "display: none;");
    u2Page.setAttribute("style", "display: none;");
    w1Page.setAttribute("style", "display: none;");
    w2Page.setAttribute("style", "display: Block;");
    u1Btn.classList.remove("current-tab");
    u2Btn.classList.remove("current-tab");
    w1Btn.classList.remove("current-tab");
    w2Btn.classList.add("current-tab");
    allShifts.classList.remove("current-tab");
});

allShifts.addEventListener("click", function() {
    u1Page.setAttribute("style", "display: block;");
    u2Page.setAttribute("style", "display: block;");
    w1Page.setAttribute("style", "display: block;");
    w2Page.setAttribute("style", "display: block;");
    u1Btn.classList.remove("current-tab");
    u2Btn.classList.remove("current-tab");
    w1Btn.classList.remove("current-tab");
    w2Btn.classList.remove("current-tab");
    allShifts.classList.add("current-tab");
});
