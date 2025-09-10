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
Document.queryselector
document.addEventListener("mousemove",function(dets){

})