var link_default = "<a href='https://github.com/FdelMazo/contribution-mural'>"
var texto_default = "Visiten el repo para contribuir! "

$(document).ready(function(){

    // Init
    var clicked = false
    var commit = document.getElementById("commit");
    commit.innerHTML = link_default + texto_default;
    content.forEach(function(img) {
        jQuery('<img/>', {
            src: img.src,
            'data-author': img.data_author,
            alt: img.alt,
            mouseover: function(ev) {
                update_msg(ev)
            },
            click: function(ev) {
                update_msg(ev);
                cliquear();
            },
            mouseleave: function() {
                clean_msg();
            }
        }).appendTo('body');
    });

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

