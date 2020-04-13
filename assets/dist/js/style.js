
	$('.owl-carousel').owlCarousel({
    loop:true, // vòng lặp
    margin:10, // khoảng cách các item
    nav:true, // kích hoạt 2 nút next và prev
    responsive:{ // kích hoạt responsive với giá trị tính theo đơn vị pixel
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.carousel-2').owlCarousel({
    loop:true, // vòng lặp
    margin:10, // khoảng cách các item
    nav:true, // kích hoạt 2 nút next và prev
    responsive:{ // kích hoạt responsive với giá trị tính theo đơn vị pixel
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



$(".nutlentren").click(function () {

   $("html, body").animate({scrollTop: 0}, 1000);
});