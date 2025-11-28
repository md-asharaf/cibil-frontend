export default function CustomerStats() {
    return (
        <section className="w-full flex flex-col items-center justify-center px-4 py-12">
            <div className=" bg-primary text-primary-foreground rounded px-14 py-10 w-full  shadow-xl">


                <h2 className="text-3xl md:text-6xl font-bold leading-tight">
                    Total customers who use<br />our service
                </h2>

                <div className="flex flex-wrap sm:gap-12 gap-6  mt-10">
                    <div>
                        <p className="text-3xl font-semibold">1,346,891</p>
                        <p className="text-primary-foreground/80 mt-1">Personal Customer</p>
                    </div>

                    <div>
                        <p className="text-3xl font-semibold">125,678</p>
                        <p className="text-primary-foreground/80 mt-1">Business Customer</p>
                    </div>
                </div>
            </div>
            <div className="bg-primary/80 h-7  w-[97%]  mx-auto rounded-b "></div>
            <div className="bg-primary/30 h-7  w-[94%]  mx-auto rounded-b "></div>

        </section>
    );
}
