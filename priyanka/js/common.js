"use strict";
gsap.registerPlugin(ScrollTrigger);
jQuery(document).ready(function ($) {
    // document start

    Fancybox.bind('[data-fancybox]', {
        // Custom options for all galleries
    });


    let headerLogo = document.querySelector(".com-logo");
    let bnnrImgWrpr = document.querySelector(".bnr-main-img-wrppr");
    let womenImg = document.querySelector(".bnr-person");
    let bnnrContentMain = document.querySelector(".bnr-next-scroll-sec");
    let cardImg = document.querySelector(".bnr-next-scroll-col-left-wrap");
    let cardContent = document.querySelector(".bnr-next-scroll-col-rgt-wrap");
    let matchMedia = gsap.matchMedia();

    matchMedia.add("(min-width: 992px)", () => {
        gsap.set([headerLogo, bnnrImgWrpr], {
            scale: 1.5,
            opacity: 0.15,
        });
        gsap.set(womenImg, {
            yPercent: 0,
        });
        gsap.set(bnnrContentMain, {
            opacity: 0,
        });
        gsap.set(cardImg, {
            xPercent: -50,
            rotate: 0,
            opacity: 0,
        });
        gsap.set(cardContent, {
            yPercent: 50,
            opacity: 0,
        });
        gsap.from(".meet-with-vid", {
            rotationX: -45,
            transformOrigin: "50% 50% -50vw",
            // opacity: 0,
            duration: 0.85,
            ease: "expoScale(0.5,7,none)",
            scrollTrigger: {
                trigger: ".meet-with-vid-outtr",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,

            }
        })

        let loadTimeline = gsap.timeline();
        loadTimeline
            .to(headerLogo, {
                scale: 1,
                opacity: 1,
                duration: 1,
                transformOrigin: "center center",
                ease: "power2.out"
            })
            .to(bnnrImgWrpr, {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "<");

        let scrollTimeline = gsap.timeline();
        scrollTimeline.to(womenImg, {
            yPercent: 5,
            duration: 1.5,
            opacity: 0,
            ease: "none"
        })
            .to(bnnrContentMain, {
                opacity: 1,
                duration: 0.3,
                ease: "none"
            }, "-=0.6")
            .to(cardImg, {
                xPercent: 0,
                opacity: 1,
                rotate: -7.08,
                duration: 0.5,
                ease: "none"
            }, "-=0.1")
            .to(cardContent, {
                yPercent: 0,
                opacity: 1,
                duration: 0.5,
                ease: "none"
            }, "<");

        ScrollTrigger.create({
            trigger: ".bnr-sec-main",
            start: "top top",
            end: "+=100%",
            animation: scrollTimeline,
            pin: true,
            // markers: true,
            scrub: 1.5,
        });
    });
    matchMedia.add("(max-width: 991px)", () => {
        gsap.set(bnnrContentMain, {
            opacity: 0,
        });

        let scrollTimeline = gsap.timeline();

        scrollTimeline.to(bnnrContentMain, {
            opacity: 1,
            duration: 0.5,
            ease: "none"
        }, "-=0.6")
            .to(cardImg, {
                yPercent: -30,
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: cardImg,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                    // markers: true,
                },
            }, "-=0.1")
            .to(cardContent, {
                yPercent: -35,
                opacity: 1,
                duration: 0.8,
                ease: "none",
                scrollTrigger: {
                    trigger: cardContent,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                    invalidateOnRefresh: true,
                    // markers: true,
                },
            }, "<");
    });


    //scroll to parallax effect
    if ($("[data-parallax]").length) {
        document.querySelectorAll("[data-parallax]").forEach((el) => {
            let pr_val = Number(el.dataset.parallax) * 100;
            gsap.to(el, {
                yPercent: pr_val,
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.3,
                    invalidateOnRefresh: true,
                    // markers: true,
                },
            });
        });
    }



    // document end

})


