import { Button } from "@/components/ui/button"
import { DonutChart } from "@/components/pie-chart"

export function Header() {
    return (
        <header className="w-full py-12">
            <div className="my-6 px-4 pb-12">
                <h1 className="text-4xl font-bold text-center">Saas Landing Page</h1>
                <p className="text-center mt-6 text-lg text-gray-600">
                    A modern and responsive landing page template for your SaaS product.
                </p>
                <Button className="px-6 mt-8 block mx-auto" size="lg">
                    Get Started
                </Button>
            </div>
            <div className="relative pt-12">
                <div className="w-full min-h-25 absolute bg-cyan-100 bottom-0 z-0 aspect-[3/2] curved-top" />
                <div className="mx-5 bg-gray-800 relative z-1 rounded-t-2xl p-4">
                    <div className="bg-black z-2 rounded-2xl">
                        <h6 className="pl-6 pt-6 underline decoration-yellow-500 underline-offset-8">Monthly plan</h6>
                        <DonutChart />
                    </div>
                </div>
            </div>
        </header>
    )
}
