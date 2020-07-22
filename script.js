function saySomething() {
    var text = [
        "no", "si", "quiza", "deberias", "piensalo", "plantealo",
        "afrontalo", "discutelo", "dialogalo", "dialoga", "seguro",
        "claro", "no creo", "si creo", "negativo", "afirmativo"
    ]

    var random = Math.floor(Math.random() * text.length);

    document.getElementById("bola").innerHTML = text[random];
}