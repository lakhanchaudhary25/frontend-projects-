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
        duration: 0.4  // smaller = faster, bigger = slower
    });

    gsap.to(crsrblur, {
        x: dets.x - 175,
        y: dets.y - 175,
        duration: 0.9 // makes it smoother
    });
});
 var h4= document.querySelectorAll("#nav h4")
 h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(crsr, {
      scale: 3,
      border: "1px solid white",
      backgroundColor: "transparent",
      duration: 0.2,
      ease: "power2.out"
    });
     elem.addEventListener("mouseleave", function() {
    gsap.to(crsr, {
      scale: 1,
      border: "0px solid white",
      backgroundColor: "white",
      duration: 0.2,
      ease: "power2.inOut"
    });
  });
});
})

gsap.from("#about-using,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    
   
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 65%",
        end:"top 60%",
        scrub:2

    }
})

gsap.from(".card",{
    y:70,
    opacity:0,
    duration:1,
    
   
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})
gsap.from("#col1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start:"top 50%",
        end:"top 46%",
        scrub:3


    }
})
gsap.from("#col2",{
    x:60,
    y:60,
    scrollTrigger:{
        trigger:"#col2",
        scroller:"body",
        start:"top 80%",
        end:"top 40%",
        scrub:1,
        


    }
})

