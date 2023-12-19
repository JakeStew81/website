window.onload = init;

function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let text = textInput.value;
    if (text == "") {
        alert("Please enter a songname");
    } else {
        let li = document.createElement("li");
        li.innerHTML = text;
        let ul = document.getElementById("playlist");
        ul.appendChild(li);
    }
    save(text);
}

function init() {
    let button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
    loadPlaylist();
    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' +
                          loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
}