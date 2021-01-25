function initScroller() {
    new Splide( '.splide', {
        type: "loop",
        perPage: 4,
        perMove: 1,
        direction: "ttb",
        height: "80vh",
        arrows: false,
        pagination: false,
        breakpoints: {
            749: {
                perPage: 7,
            },
        }
    }).mount();
}

function test() {
    //alert("Test Complete!");
    //$("splide .item").css("color", "orange")
    //$("splide a").addClass("test");
    //document.getElementById("splide01-slide01").style.backgroundColor = "blue";

}

$(".item").css("color", "orange")

$(".splide__slide.is-active").css("background-color", "yellow");

$(document).foundation();