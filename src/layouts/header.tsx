import { Button } from "@/components/ui/button"
import { DonutChart } from "@/components/pie-chart"

export function Header() {
    return (
        <header className="w-full py-12">
            <div className="my-6 px-12 pb-12">
                <h1 className="text-4xl font-bold text-center">Saas Landing Page</h1>
                <p className="text-center mt-6 text-lg text-gray-600">
                    A modern and responsive landing page template for your SaaS product.
                </p>
                <Button className="px-6 mt-8 block mx-auto" size="lg">
                    Get Started
                </Button>
            </div>
            <div className="relative pt-12 flex justify-center">
                <div className="w-full lg:w-[75vw] xl:w-[55vw] min-h-25 md:h-[150px] absolute bg-cyan-100 bottom-0 z-0 md:left-1/2 md:transform md:-translate-x-1/2 aspect-[3/2] curved-top" />
                <div className="mx-10 bg-gray-800 relative z-1 rounded-t-2xl p-4 w-[70vw] md:w-[35vw] lg:w-[25vw] xl:w-[20vw]">
                    <div className="bg-black z-2 rounded-2xl">
                        <h6 className="pl-6 pt-6 underline decoration-yellow-500 underline-offset-8">Monthly plan</h6>
                        <DonutChart />
                    </div>
                </div>
            </div>
        </header>
    )
}
