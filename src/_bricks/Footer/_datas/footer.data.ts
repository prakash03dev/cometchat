export interface MenuItemProps {
    title: string,
    href: string
}
export interface SubmenuProps {
    title?: string,
    items: MenuItemProps[]
}

export interface MenuProps {
    title: string,
    submenu: SubmenuProps[],
}

export const footerData: MenuProps[] = [
    {
        title: "Platforms",
        submenu: [
            {

                title: "Features",
                items: [
                    {
                        title: "Chat & Messaging",
                        href: "#"
                    },
                    {
                        title: "Voice & Video Calls",
                        href: "#"
                    },
                    {
                        title: "Security & Compliance",
                        href: "#"
                    },
                    {
                        title: "Extensions",
                        href: "#"
                    },
                    {
                        title: "Features at a glance ",
                        href: "#"
                    },
                    {
                        title: "Webhooks & Bots",
                        href: "#"
                    },
                    {
                        title: "Moderation",
                        href: "#"
                    },
                    {
                        title: "Analytics & Insights",
                        href: "#"
                    },
                ]
            },
            {
                title: "Implementation",
                items: [
                    {
                        title: "Widgets",
                        href: "#"
                    },
                    {
                        title: "UI Kits",
                        href: "#"
                    },
                    {
                        title: "SDKs & APIs",
                        href: "#"
                    },
                ]
            },
            {
                title: "Technologies",
                items: [
                    {
                        title: "React Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Angular Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Vue Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "IOS Swift Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Android Kotlin Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Android Java Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "React Native Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Ionic/Capacitor Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "WordPress Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Lavarel/PHP Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Flutter Chat SDK & API",
                        href: "#"
                    },
                    {
                        title: "Next.js Chat SDK & API",
                        href: "#"
                    },
                ]
            },
        ]
    },
    {
        title: "Solutions",
        submenu: [
            {
                title: "By Use cases",
                items: [
                    {
                        title: "Social Community",
                        href: "#"
                    },
                    {
                        title: "Marketplace",
                        href: "#"
                    },
                    {
                        title: "Healthcare",
                        href: "#"
                    },
                    {
                        title: "Education",
                        href: "#"
                    },
                    {
                        title: "Virtual Events",
                        href: "#"
                    },
                    {
                        title: "On-Demand Service",
                        href: "#"
                    },
                    {
                        title: "Dating Apps",
                        href: "#"
                    },
                    {
                        title: "Gaming",
                        href: "#"
                    },
                ]
            },
            {
                title: "By Organization Type",
                items: [
                    {
                        title: "Enterprise",
                        href: "#"
                    },
                    {
                        title: "Startups",
                        href: "#"
                    },
                ]
            },
        ]
    },
    {
        title: "Developers",
        submenu: [
            {
                title: "Technologies documentation",
                items: [
                    {
                        title: "React",
                        href: "#"
                    },
                    {
                        title: "Angular",
                        href: "#"
                    },
                    {
                        title: "Vue",
                        href: "#"
                    },
                    {
                        title: "IOS Swift",
                        href: "#"
                    },
                    {
                        title: "Android Kotlin",
                        href: "#"
                    },
                    {
                        title: "Android Java",
                        href: "#"
                    },
                    {
                        title: "React Native",
                        href: "#"
                    },
                    {
                        title: "Ionic/Capacitor",
                        href: "#"
                    },
                    {
                        title: "WordPress",
                        href: "#"
                    },
                    {
                        title: "Lavarel/PHP",
                        href: "#"
                    },
                    {
                        title: "Flutter",
                        href: "#"
                    },
                    {
                        title: "Next.js",
                        href: "#"
                    },
                ]
            },
            {
                title: "Documentation",
                items: [
                    {
                        title: "Documentation",
                        href: "#"
                    },
                    {
                        title: "Product updates",
                        href: "#"
                    },
                    {
                        title: "Tutorials",
                        href: "#"
                    },
                    {
                        title: "Open-source Apps",
                        href: "#"
                    },
                    {
                        title: "Product status",
                        href: "#"
                    },
                    {
                        title: "Glossary",
                        href: "#"
                    },
                ]
            },
        ]
    },

]

export const quickLinksData: MenuProps[] = [
    {
        title: "Resources",
        submenu: [
            {
                title: undefined,
                items: [
                    {
                        title: "Customer stories",
                        href: "#"
                    },
                    {
                        title: "Blog",
                        href: "#"
                    },
                    {
                        title: "Give feedback",
                        href: "#"
                    },
                    {
                        title: "Community forum",
                        href: "#"
                    },
                    {
                        title: "Help center",
                        href: "#"
                    },
                    {
                        title: "Partners",
                        href: "#"
                    },
                ]
            },
        ]
    },
    {
        title: "Competitors",
        submenu: [
            {
                title: undefined,
                items: [
                    {
                        title: "SendBird",
                        href: "#"
                    },
                    {
                        title: "GetStream",
                        href: "#"
                    },
                    {
                        title: "Applozic",
                        href: "#"
                    },
                    {
                        title: "Twilio",
                        href: "#"
                    },
                    {
                        title: "PubNub",
                        href: "#"
                    },
                ]
            },
        ]
    },
    {
        title: "Company",
        submenu: [
            {
                title: undefined,
                items: [
                    {
                        title: "About us",
                        href: "#"
                    },
                    {
                        title: "Careers",
                        href: "#"
                    },
                    {
                        title: "Partners",
                        href: "#"
                    },
                    {
                        title: "Pricing",
                        href: "#"
                    },
                    {
                        title: "Chat with us",
                        href: "#"
                    },
                ]
            },
        ]
    },
]