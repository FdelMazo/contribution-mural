var link_default = "<a href='https://github.com/FdelMazo/contribution-mural'>"
var texto_default = "<img class='img-icon' src='favicon.ico'> Visiten el repo para contribuir! <img class='img-icon' src='favicon.ico'>"
var API = "https://api.github.com/repos/fdelmazo/contribution-mural/pulls?state=all"

$(document).ready(function(){

    hit_API()

    var clicked = false
    var commit = document.getElementById("commit");
    commit.innerHTML = link_default + texto_default;
    content.forEach(function(img) {
        jQuery('<img/>', {
            src: img.src,
            'data-author': img.data_author,
            alt: img.alt,
            mouseover: function(ev) {
                if(clicked) return
                update_msg(ev)
            },
            click: function(ev) {
                update_msg(ev);
                clicked = !clicked
            },
            mouseleave: function() {
                if(clicked) return;
                clean_msg();
            }
        }).appendTo('body');
    });

    function update_msg(evt){
        var imagen = evt.target
        var msg = imagen.alt;
        var author = $(imagen).data('author')
        var author_link = "<a href='https://github.com/"+author+"'>" + '@' + author + '</a>'
        commit.innerHTML = author_link + ' dice: ' + msg;
    }

    function clean_msg(){
        commit.innerHTML = link_default + texto_default;
    }

    function hit_API(){
        $.ajax({
            url: API,
            method: 'GET',
            success: function(data) {
                update_PRs(data)
            }
        })
    }

    function update_PRs(data){
        var open = $('#pr-open')
        var closed = $('#pr-closed')
        var open_count = 0
        var closed_count = 0
        data.forEach(pr => {
            if (pr.state == "closed") closed_count++
            else if (pr.state == "open") open_count++
        })
        open.text(open_count)
        closed.text(closed_count)
    }
    

})

