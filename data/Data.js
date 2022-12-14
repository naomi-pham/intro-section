const Data = {
    nav: {
        navLeft: [
            {
                id: 1,
                name: "Features",
                values: [
                    {
                        id: 1, 
                        icon: "images/icon-todo.svg",
                        name: "TodoList"
                    },
                    {
                        id: 2, 
                        icon: "images/icon-calendar.svg",
                        name: "Calendar"
                    },
                    {
                        id: 3, 
                        icon: "images/icon-reminders.svg",
                        name: "Reminders"
                    },
                    {
                        id: 4, 
                        icon: "images/icon-planning.svg",
                        name: "Planning"
                    },
                ]
            },
            {
                id: 2,
                name: "Company",
                values: [
                    {
                        id: 1,
                        name: "History"
                    }, 
                    {
                        id: 2,
                        name: "OurTeam"
                    },
                    {
                        id: 3,
                        name: "Blog"
                    }

                ]
            },
            {
                id: 3,
                name: "Career",
                link: "/career",
            },
            {
                id: 4,
                name: "About",
                link: "/about",
            }

        ],
        navRight: [
            "Login", 
            "Register"
        ]
        
    },
    intro: {
        title: "Make remote work",
        description: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
        action: "Learn more",
        clients: [
            {
                id: 1, 
                link: "#",
                img: "images/client-databiz.svg",
                altText: "Databiz"
            },
            {
                id: 2, 
                link: "#",
                img: "images/client-audiophile.svg",
                altText: "audiophile"
            },
            {
                id: 3, 
                link: "#",
                img: "images/client-meet.svg",
                altText: "meet"
            },
            {
                id: 4, 
                link: "#",
                img: "images/client-maker.svg",
                altText: "maker"
            },
        ],
        heroImage: {
            mobile: "images/image-hero-mobile.png",
            desktop: "images/image-hero-desktop.png",
            altText: "hero image"
        }
    }
}

export default Data