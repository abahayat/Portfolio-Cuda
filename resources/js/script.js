$(document).ready(function(){
    
    //Sticky Navbar
    $(".js--services").waypoint(function(direction){
        if (direction == "down"){
                $("nav").addClass("sticky");
            } else {
                $("nav").removeClass("sticky");
            }
    });
    
    //Active Link
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    //MixiTup(portfolio section)
    var mixer = mixitup('.grid-portfolio-container');
    
})

function openNav() {
    document.getElementById('myNav').style.width = "100%";
}

function closeNav() {
    document.getElementById('myNav').style.width = "0%";
}