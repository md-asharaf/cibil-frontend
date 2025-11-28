import {
    RefreshCw,
    FileText,
    TrendingUp,
    Target,
    User,
    Building2,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const WhyHowSection = () => {
    const cards = [
        {
            icon: RefreshCw,
            title: "Scoring",
            description: "A credit score or credit score is an assessment in the form of a number that reflects a person or debtor, about the possibility of you paying off credit in the next loan application.",
            link: "Learn About Scoring"
        },
        {
            icon: FileText,
            title: "Benefit",
            description: "Your credit score can determine how much your loan and credit card applications are approved. Not only that, with a credit score you are given the freedom to choose the bank and lender that provides the best offer.",
            link: "Learn About Services"
        },
        {
            icon: TrendingUp,
            title: "Understand your credit",
            description: "Credit can be complicated. But it doesn't have to be. Learning responsible credit behavior can set you up to reach your goals. Find out what's in your Equifax credit report, how your credit scores are calculated, and how to get on track in your credit journey.",
            link: "Learn About Credit"
        },
        {
            icon: Target,
            title: "Reach your financial goals",
            description: "Life is a series of milestones, and when it comes to finances, knowledge is your most valuable asset. If you're planning to buy a home, purchase a car, or take out a loan, find out what potential lenders are looking for.",
            link: "Learn About Financial Goals"
        },
        {
            icon: User,
            title: "Personal credit",
            description: "Personal credit scoring is the application of financial risk forecasting. It becomes an even important task as financial institutions have been experiencing serious competition and challenges.",
            link: "Learn About Personal Credit"
        },
        {
            icon: Building2,
            title: "Business credit",
            description: "Every business is singular, and every customer interaction is a highly personalized 1:1 proposition. But in each instance, our goal is simple: To work with our customers to create data-driven solutions that are as personal as they are profitable at every point along their customer's journey.",
            link: "Learn About Business Credit"
        }
    ];

    return (
        <section className="w-full bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className=" mx-auto ">
                {/* Partner Banner */}
                <div className="bg-secondary rounded-sm p-4 sm:p-6 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-primary-foreground text-sm sm:text-base ">
                        Rating is calculated together <br /> with our trusted partners
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <div className="bg-transparent px-4 py-1 rounded text-xs sm:text-sm font-semibold text-primary">
                            <Image src="/h1.png" alt="ojk" width={100} height={80} />
                        </div>
                        <div className="bg-transparent px-4 py-1 rounded text-xs sm:text-sm font-semibold text-primary">
                            <Image src="/h2.png" alt="ojk" width={100} height={80} />
                        </div>
                        <div className="bg-transparent px-4 py-1 rounded text-xs sm:text-sm font-semibold text-primary">
                            <Image src="/h3.png" alt="ojk" width={100} height={80} />
                        </div>
                    </div>
                </div>

                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-2xl">
                        What is important to know about your credit rating
                    </h2>
                    <Link
                        href="#"
                        className="text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
                    >
                        See All Learning Section
                    </Link>
                </div>

                {/* Cards Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mx-auto">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            className="group relative h-96 overflow-hidden border border-border rounded-sm p-6 sm:p-8 hover:shadow-xl transition-all duration-300m justify-between"
                        >
                            <CardHeader className="p-0 mb-4">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                                    <card.icon className="w-6 h-6 text-primary-foreground" />
                                </div>

                                <CardTitle className="text-xl sm:text-2xl md:text-4xl font-bold mt-4 ">
                                    {card.title}
                                </CardTitle>

                                <CardDescription className="text-sm sm:text-base text-black/80 leading-relaxed mt-2">
                                    {card.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="p-0">
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 text-primary font-medium 
                     text-sm sm:text-base hover:text-primary/80 transition-colors group"
                                >
                                    {card.link}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHowSection;