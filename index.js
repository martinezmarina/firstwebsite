var buttonText = document.getElementById("button")
function doThisThing(){  
    if(buttonText.innerHTML === "Good Night"){  
    buttonText.innerHTML = "Good Day";
    document.body.style.setProperty("--primary-color", "dimgrey");
    document.body.style.setProperty("--secondary-color", "black");
    document.body.style.setProperty("--tertiary-color", "white");
    document.body.style.setProperty("--header-image", "url(https://i.pinimg.com/originals/dc/5e/48/dc5e48025d7a347a91ee42cc92a81504.jpg)");
    document.body.style.setProperty("--button-color", "black");
} else {
    buttonText.innerHTML = "Good Night";
    document.body.style.setProperty("--primary-color", "thistle");
    document.body.style.setProperty("--secondary-color", "rgb(173, 173, 100)");
    document.body.style.setProperty("--tertiary-color", "black");
    document.body.style.setProperty("--header-image", "url(https://www.forestrytherapy.com/wp-content/uploads/2018/05/forest-background_home-banner.jpg)");
    document.body.style.setProperty("--button-color", "olive");
}}