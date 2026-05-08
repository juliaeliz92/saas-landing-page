import { Button } from "@/components/ui/button"

export function Footer() {
    return (
        <footer id="contact" className="text-white py-6">
            <div className="container mx-auto px-5">
                <img src="wallet-logo.png" alt="logo" className="mb-4 md:ml-12" />
                <div className="flex flex-col md:flex-row-reverse justify-around gap ">
                    <div className="flex flex-col md:justify-center md:w-[30vw]">
                        <label className="block mb-4" htmlFor="email">Updates right to your inbox</label>
                        <div className="flex flex-col gap-2 lg:flex-row">
                            <input type="email" id="email" placeholder="Email address" className="w-full p-2 rounded-md bg-gray-800 " />
                            <Button size="lg" className="w-full lg:w-1/4">
                                CTA
                            </Button>
                        </div>
                    </div>
                    <div className="my-10 flex flex-col gap-4">
                        <a href="#">Terms of Use</a>
                        <a href="#">Cookies Policy</a>
                        <a href="#">Privacy Policy</a>
                        <p>&copy; 2026 SaaS Landing Page. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer