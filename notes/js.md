#java script notes:

downloaded 'Gsap cdn' for smooth scorlling animations.
and also pasted the 'scroll trigger' , which is a plugin of gsap .

use gsap like: gsap.to("#nav",{
    // write any property yiu want to give to nav
    //or we can access any css property but used camil cases instead of '-' in between
    used scrollTrigger{
        //any property 
    }
})
in this we have to define what thing we are going to trigger "nav"
and what is being scrolled "body"
used top, end and scrub.

FOR CURSOR MOVEMENT:
var crsr= document.querySelector("#cursor")
// created a variable to store cursor element 

document.addEventListener("mousemove", function(dets){
    gsap.to(crsr, {
        x: dets.x,
        y: dets.y,
        duration: 0.1  // smaller = faster, bigger = slower
    });

    gsap.to(crsrblur, {
        x: dets.x - 200,
        y: dets.y - 200,
        duration: 0.5  // makes it smoother
    });
});
// used gsap for smooth motion 

document.querySelectorAll("nav h4") used "all" for selecting multiple elements at once 

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
})// a gsap to add event for mouse enter nad leave 
// could have used normal css but its conflicting with my gsap already applied on the #cursor.

gsap.from("#about-using,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    
   
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 55%",
        end:"top 50%",
        scrub:2

    }
})
//for about us transition

