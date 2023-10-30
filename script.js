function loadingAnimation(){
    gsap.from("#nav #title",{
        y:100,
        opacity:0,
        delay:0.4,
        duration:0.9,
        stagger:0.3
    })
}
function sheryAnimation(){
    Shery.mouseFollower();
    Shery.makeMagnet("#nmag");
    Shery.makeMagnet("#vicon i");
    Shery.makeMagnet("#aerotxt");
    Shery.makeMagnet("#beetxt");
    Shery.makeMagnet("#chetxt");
    Shery.makeMagnet("#esptxt");
    Shery.makeMagnet("#motive p");
    Shery.makeMagnet("#headings2 #h2");
    Shery.makeMagnet("#headings3 #h3");
    Shery.hoverWithMediaCircle("#midimgwrapper" /* Element to target.*/, {
    images: ["cof.png"]
    });
}

sheryAnimation();
loadingAnimation();
