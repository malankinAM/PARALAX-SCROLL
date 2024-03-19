$(".text-group h1, .text-group h3").html(function(index,html){
    return html.replace(/\S/g, '<span>$&</span>');
})

var tl = gsap.timeline();

tl.from(".slide",{
    opacity:0 ,
    delay:1,
})
tl.from("header",{
    y: -20,
    opacity:0 ,
    delay:1,
})
tl.from("header ul li",{
    y: -20,
    opacity:0 ,
    stagger:.2,
})