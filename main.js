function showContact() {
    if (document.getElementById("discordcontact").style.opacity == "1") {
        document.getElementById("discordcontact").style.opacity = "0";
        document.getElementById("discordcontact").style.userSelect = "none";
    } else {
        document.getElementById("discordcontact").style.opacity = "1";
        document.getElementById("discordcontact").style.userSelect = "text";
    }
}