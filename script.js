var crsr= document.querySelector("#cursor")
gsap.to("#nav",{
    backgroundColor:"black",
    height:"125px",
    duration:0.5,
    
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -8%",
     markers:"true",
     scrub:2,
    } 

})
gsap.to("#main",{
    backgroundColor:"black",

    scrollTrigger:{
    triger:"#main",
    scroller:"body",
    start:"top -26%",
    markers:"true",
    end:"top -70%",
    scrub:2,
}
})
var crsrblur= document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(dets){
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
        duration: 0.3  // smaller = faster, bigger = slower
    });

    gsap.to(crsrblur, {
        x: dets.x - 200,
        y: dets.y - 200,
        duration: 0.9  // makes it smoother
    });
});
