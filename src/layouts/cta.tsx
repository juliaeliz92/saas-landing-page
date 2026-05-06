import { Button } from "@/components/ui/button"

export function CTA() {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center py-12 my-12 px-4 md:px-12">
            <div className="flex md:flex-col md:justify-center">
                <h1 className="text-4xl font-bold text-center">Saas Landing Page</h1>
                <p className="text-center mt-6 text-lg text-gray-600 mx-2 lg:mx-12">
                    A modern and responsive landing page template for your SaaS product.
                </p>
                <Button className="px-6 mt-8 block mx-auto" size="lg">
                    CTA
                </Button>
            </div>
            <>
                <picture>
                    <source srcSet="wallet-desktop.png" />
                    <img
                        src="wallet-mobile.png"
                        alt="wallet"
                        className="mx-auto mt-12 rounded-lg shadow-lg md:mt-0"
                    />
                </picture>
            </>
        </div>
    )
}   

export default CTA