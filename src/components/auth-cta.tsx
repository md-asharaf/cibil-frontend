import { Button } from "./ui/button";

export function AuthCTA() {
    return (
        <div className="flex flex-col sm:flex-row w-full gap-8 items-center justify-between bg-background  px-8 md:py-24  rounded-lg  text-center md:text-left">
            <div className="text-center">
                <h1 className="md:text-6xl text-4xl font-bold text-start">Are you ready to take the <br />next step?</h1>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center  md:gap-24 gap-10">
                <p className="text-lg sm:text-xl text-muted-foreground" >Life is a series of milestones, and when it <br /> comes to finances, information is your <br /> greatest and most valuable asset.</p>
                <Button className="shadow  rounded bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition text-lg py-6 px-8">
                    Get Started
                </Button>
            </div>
        </div>
    );
}