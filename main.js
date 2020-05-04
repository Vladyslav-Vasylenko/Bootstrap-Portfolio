$(document).ready(function(e){
    $win = $(window);
    $navbar = $("#header");
    $toggle = $(".toggle-button");
    let width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(()=> toggle_onclick($win, $navbar, width));

    $toggle.click((e)=> $navbar.toggleClass('toggle-left'));

});

let toggle_onclick = ($win, $navbar, width) => $win.width() <= 768 ? $navbar.css({left:`-${width}px`}) : $navbar.css({left:'0px'});

let typed = new Typed('#typed',{
    strings:[
        'Front End Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

let typed_2 = new Typed('#typed_2',{
    strings:[
        'Front End Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});