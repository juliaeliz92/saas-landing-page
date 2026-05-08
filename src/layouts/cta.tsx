import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <section className="container mx-auto flex flex-col md:flex-row justify-center py-12 px-4 md:px-12">
            <div className="flex flex-col md:justify-center">
                <h1 className="text-4xl font-bold text-center">Saas Landing Page</h1>
                <p className="text-center mt-6 text-lg text-gray-600 mx-2 lg:mx-12">
                    Landing pages crafted for subscription products, startups, and product launches.
                </p>
                <Button className="px-6 mt-8 block mx-auto" size="lg">
                    See real results
                </Button>
            </div>
            <picture>
                <source srcSet="wallet-desktop.png" />
                <img
                    src="wallet-mobile.png"
                    alt="wallet"
                    className="mx-auto mt-12 rounded-lg shadow-lg md:mt-0"
                />
            </picture>
        </section>
    )
}   

export default CTA