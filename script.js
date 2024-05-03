let tl = gsap.timeline()
tl.to(".bg", {
    width: "0",
    duration: 1

})
tl.from(".img >img", {
    opacity: 0,
    duration: 3

})