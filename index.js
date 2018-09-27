var link_default = "<a href='https://github.com/FdelMazo/contribution-mural'>"
var texto_default = "Visiten el repo para contribuir! "

$(document).ready(function(){

    var clicked = false
    var img = document.getElementsByTagName("img");
    var commit = document.getElementById("commit");
    commit.innerHTML = link_default + texto_default;
    for (var i = 0; i < img.length; i++) {
        img[i].addEventListener("mouseover", update_msg, false)
        img[i].addEventListener("click", update_msg, false)
        img[i].addEventListener("click", cliquear)
        img[i].addEventListener("mouseleave", clean_msg)
    }

    function update_msg(evt){
        if(clicked) return;
        var imagen = evt.target
        var msg = imagen.alt;
        var author = $(imagen).data('author') 
        var author_link = "<a href='https://github.com/"+author+"'>" + '@' + author + '</a>'
        commit.innerHTML = author_link + get_random_msg() + msg;
    }

    function cliquear(){
        clicked = !clicked
    }

    function clean_msg(){
        if(clicked) return;
        commit.innerHTML = link_default + texto_default;
    }

    function get_random_msg(){
        var quotes = [
            ' dice: ',
            ' aporta: ',
            ' nos comenta: ',
        ]
        var quote = quotes[Math.floor(Math.random() * quotes.length)];
        return quote
    }
})

