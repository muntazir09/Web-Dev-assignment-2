document.addEventListener("DOMContentLoaded", function () {
    const homeBtn = document.querySelector(".home-btn");
    const navBar = document.querySelector(".nav_bar");

    homeBtn.addEventListener("click", () => {
        homeBtn.classList.toggle("active");
        navBar.classList.toggle("active");
    });

    const dots = document.querySelectorAll(".nav_dots");
    const imgs = document.querySelectorAll(".img1");
    const items = document.querySelector(".items");

    var sliderNav = function (manual) {
        dots.forEach((dot) => dot.classList.remove("active"));
        dots[manual].classList.add("active");

        imgs.forEach((img, index) => {
            img.classList.remove("active");
            if (index === manual) {
                img.classList.add("active");
                updateTextContent(index);
            }
        });
    };

    var updateTextContent = function (index) {
        const textContents = [
            {
                title: "BARBARIAN",
                subtitle: "Unleash the primal terror within the shadows of savagery.",
                description: "In the chilling depths of an ancient and forgotten realm, where the echoes of primal screams resonate through the desolate landscapes, 'Barbarian' unveils a nightmarish tale. As an unsuspecting group of explorers ventures into the heart of a cursed wilderness, they awaken an age-old malevolence that hungers for the fear coursing through their veins.",
            },
            {
                title: "SCENE-1",
                subtitle: "Unleash the primal terror within the shadows of savagery.",
                description: "In the spine-tingling horror film, a small town is plagued by an ancient curse that awakens a nightmarish creature from the depths of darkness. The creature, a grotesque manifestation of ancient evil, lurks in the shadows, leaving a trail of terror in its wake.",
            },
            {
                title: "SCENE-2",
                subtitle: "Unleash the primal terror within the shadows of savagery.",
                description: " Each encounter with the nightmarish entity peels away the layers of reality, plunging the protagonists into a nightmarish realm where the boundaries between the living and the macabre blur.",
            },
            {
                title: "SCENE-3",
                subtitle: "Unleash the primal terror within the shadows of savagery.",
                description: "In the sinister heart of an unsuspecting town, a ghastly creature, disguised in human form, prowls the dimly lit streets, its malevolence seeping into every shadow. Beneath the veneer of normalcy, a nightmarish entity preys on the unsuspecting residents, feeding on their deepest fears and darkest secrets.",
            },
            // Add more objects for other images as needed
        ];

        const { title, subtitle, description } = textContents[index];
        items.querySelector("h1").textContent = title;
        items.querySelector("h2").textContent = subtitle;
        items.querySelector("p").textContent = description;
    };

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            sliderNav(i);
        });
    });

    // Set the first image and text content as active by default
    sliderNav(0);
});
