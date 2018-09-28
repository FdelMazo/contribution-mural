var link_default = "<a href='https://github.com/FdelMazo/contribution-mural'>"
var texto_default = "<img class='img-icon' src='favicon.ico'> Visiten el repo para contribuir! <img class='img-icon' src='favicon.ico'>"

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
                update_msg(ev,true)
            },
            click: function(ev) {
                update_msg(ev,false);
                cliquear();
            },
            mouseleave: function() {
                clean_msg();
            }
        }).appendTo('body');
    });

    function update_msg(evt,bymouseover){
        if(clicked && bymouseover) return; // Si clickee y entre a traves de mouseover, no quiero perder el msg clickeado.
        var imagen = evt.target
        var msg = imagen.alt;
        var author = $(imagen).data('author')
        var author_link = "<a href='https://github.com/"+author+"'>" + '@' + author + '</a>'
        commit.innerHTML = author_link + ' dice: ' + msg;
    }

    function cliquear(){
        clicked = !clicked
    }

    function clean_msg(){
        if(clicked) return;
        commit.innerHTML = link_default + texto_default;
    }
})

