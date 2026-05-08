import FeatureItem from "@/components/feature-item"

const features = [
    {
        title: "Feature One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "cards-icon-mobile.png",
        imgAlt: "Feature One Image",
    },
    {
        title: "Feature Two",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "coin-icon-mobile.png",
        imgAlt: "Feature Two Image",
    },
    {
        title: "Feature Three",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        imgSrc: "purse-icon-mobile.png",
        imgAlt: "Feature Three Image",
    }
]

export function Features() {
    return (
        <section id="features" className="container mx-auto py-12 px-6 md:px-12 lg:flex lg:flex-col lg:items-center lg:justify-between">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">What makes this page work?</h2>
            <div className="lg:flex">
                <div className="flex flex-col justify-center">
                    {features.map((feature, index) => (
                        <FeatureItem
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            imgSrc={feature.imgSrc}
                            imgAlt={feature.imgAlt}
                        />
                    ))}
                </div>
                <div className="lg:flex lg:items-center xl:justify-center">
                    <picture>
                        <source srcSet="wallet-app-desktop.png" media="(min-width: 768px)" />
                        <img src="wallet-app-mobile.png"
                            alt="Wallet App" className="mx-auto mt-6 bg-purple-100 rounded-md md:w-3/4 lg:w-[50vw] lg:h-auto xl:w-[35vw]" />
                    </picture>
                </div>
            </div>
        </section>
    )
}

export default Features