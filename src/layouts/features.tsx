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
        <div className="container mx-auto py-12 my-12 px-4 md:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-col">
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
                        alt="Wallet App" className="mx-auto mt-6 bg-purple-100 rounded-md md:w-3/4 lg:w-[50vw] lg:h-auto xl:w-[40vw]" />
                </picture>
            </div>
        </div>
    )
}

export default Features