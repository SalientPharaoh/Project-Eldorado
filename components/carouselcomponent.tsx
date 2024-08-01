"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/carousel";

export function AppleCardsCarousel() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className="w-full h-full mt-20">
            <h2 className="ml-10 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4535C1] to-[#ca628c] dark:to-[#4535C1] dark:from-[#ca628c]">
                Discover, Invest, Prosper</h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    const contents = [
        {
            title: "Invest Smartly: Navigating the Startup Stock Market",
            description: "The startup stock market presents unique opportunities and challenges for investors. Navigating this market requires a deep understanding of emerging industries, company valuations, and growth potential. Investors must consider factors such as market demand, competitive landscape, and the scalability of business models. By leveraging data analytics and market insights, investors can identify promising startups that align with their risk tolerance and investment goals, making informed decisions that maximize returns while mitigating risks."
        },
        {
            title: "Empower Your Portfolio: Investing in Emerging Startups",
            description: "Investing in emerging startups offers a unique avenue for diversifying your portfolio and accessing high-growth opportunities. This type of investment requires a strategic approach, focusing on due diligence, market research, and the potential for innovation. By carefully evaluating startup founders, business plans, and market traction, investors can empower their portfolios with assets that have the potential for substantial growth, while also supporting the development of innovative solutions."
        },
        {
            title: "Riding the Wave: How Market Trends Impact Startup Investments",
            description: "Market trends play a crucial role in determining the success of startup investments. Understanding these trends, such as technological advancements, consumer behavior shifts, and regulatory changes, can provide valuable insights for investors. Analyzing data from various sectors and identifying emerging patterns can help investors predict market movements and strategically position their investments in startups poised to capitalize on these trends, thereby enhancing potential returns."
        }
    ];

    return (
        <>
            {contents.map((content, index) => (
                <div
                    key={"content-" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700 dark:text-neutral-200">
                            {content.title}
                        </span>{" "}
                        {content.description}
                    </p>
                </div>
            ))}
        </>
    );
};


const data = [
    {
        category: "Investment Strategies",
        title: "Invest Smartly: Navigating the Startup Stock Market.",
        src: "/1.jpg",
        content: <DummyContent />,
    },
    {
        category: "Startup Investment",
        title: "Empower Your Portfolio: Investing in Emerging Startups.",
        src: "/2.jpg",
        content: <DummyContent />,
    },
    {
        category: "Market Trends",
        title: "Riding the Wave: How Market Trends Impact Startup Investments.",
        src: "/3.jpg",
        content: <DummyContent />,
    },

    {
        category: "Financial Growth",
        title: "Unleashing Potential: Grow Your Wealth with Startup Stocks",
        src: "/4.jpg",
        content: <DummyContent />,
    },
    {
        category: "Investment Strategies",
        title: "From Seed to Success: Crafting Winning Investment Strategies in Startups.",
        src: "/5.jpg",
        content: <DummyContent />,
    },
    {
        category: "Financial Growth",
        title: "Discover Tomorrow: Investing in Innovative Startups Today.",
        src: "/2.jpg",
        content: <DummyContent />,
    },
];
