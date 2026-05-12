import { IconCheckFilled } from '@tabler/icons-react';

export function Brands() {
    return (
        <section className="w-full py-12 px-4 md:px-8">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <h2 className="text-xl text-gray-200 font-bold">Trusted by 12 startups and marketing teams. Built for B2B software, fintech, and productivity brands.</h2>
                <picture>
                    <source srcSet="./brands-desktop.webp" media="(min-width: 768px)" />
                    <img src="./brands-mobile.webp" alt="Brands" className="object-contain" />
                </picture>
                <ul className="list-none]">
                    <li className="text-gray-200 text-sm"><IconCheckFilled className="inline-block mr-2" />50% faster launch time for freelance SaaS clients</li>
                    <li className="text-gray-200 text-sm"><IconCheckFilled className="inline-block mr-2" />20+ launch-ready page sections included</li>
                    <li className="text-gray-200 text-sm"><IconCheckFilled className="inline-block mr-2" />Designs optimized for 4.8 star client satisfaction</li>
                </ul>
            </div>
        </section>
    );
}

export default Brands;