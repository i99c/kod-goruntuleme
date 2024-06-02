function openTab(evt, tabName) {
    var i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.style.backgroundColor = "#666";
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".tablink").click();
});
