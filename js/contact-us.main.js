 //contacts start
            sectionNumber++;

            let tlTitle7 = MarcBassil.timeline({paused: true});
            tlTitle7.fromTo(titles[sectionNumber], {y: "100%"},{y: "0", duration: 0.2,});
            tlTitle7.fromTo(titles[sectionNumber - 1], {y: "0"}, {y: "-100%", duration: 0.2,}, 0);


            let tl7 = MarcBassil.timeline();
            let st7 = ScrollTrigger.create({
                trigger: "body",
                scrub:parseInt(scrubPower)/100,
                start: "0 -" + (scrollDurationHome * (sectionNumber - 1) + projectBlocksScroll + newsBlocksScroll + addBlocksScroll*4),
                end: "+=" + (scrollDurationHome),
                onToggle: ({progress, direction, isActive}) => {
                    if (!isActive && direction > 0) {
                        if (!skipMode) tlTitle7.play();
                        $('.header__menu li').removeClass('active');
                        $('.header__menu li').eq(6).addClass('active');
                    } else if (isActive && direction < 0) {
                        if (!skipMode) tlTitle7.reverse();
                        $('.header__menu li').removeClass('active');
                        $('.header__menu li').eq(5).addClass('active');
                    }
                },
                animation: tl7
            });


            let titlesContacts = MarcBassil.utils.toArray(".contacts .content__title > *");
            titlesContacts.forEach((title, index) => {
                if (index % 2 === 0) {
                    tl7.from(title, {autoAlpha: 0, right: -600 - 100 * index, ease: Power1.easeOut}, 0);
                } else {
                    tl7.from(title, {autoAlpha: 0, left: -600 - 100 * index, ease: Power1.easeOut}, 0);
                }
            });
            tl7.from('.contacts .contacts__copyright', {autoAlpha: 0, bottom: -300, ease: Power1.easeOut}, 0);

            let menuContacts = MarcBassil.utils.toArray(".contacts .contacts__menu > li > *");
            menuContacts.forEach((title, index) => {
                tl7.from(title, {autoAlpha: 0, right: -700 - 150 * index, ease: Power1.easeOut}, 0);
            });

            let tl71 = MarcBassil.timeline();
            let st71 = ScrollTrigger.create({
                trigger: "body",
                scrub:parseInt(scrubPower)/100,
                start: "0 -" + (scrollDurationHome * (sectionNumber - 1) + projectBlocksScroll + newsBlocksScroll + scrollDurationHome / 2 + addBlocksScroll*4),
                end: "+=" + (scrollDurationHome / 2),
                animation: tl71
            });
            tl71.from('.contacts .content__subtitle', {autoAlpha: 0, top: -200, ease: Power1.easeOut}, 0);
            tl71.from('.contacts .content__brief', {autoAlpha: 0, left: -400, ease: Power1.easeOut}, 0);
            tl71.from('.contacts .content__form', {autoAlpha: 0, right: -400, ease: Power1.easeOut}, 0);
            //contacts end+