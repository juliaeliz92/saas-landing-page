export function FeatureItem({ title, description, imgSrc, imgAlt }: { title: string; description: string; imgSrc: string; imgAlt: string }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-4">
            <img src={imgSrc} alt={imgAlt} />
            <div className="flex flex-col md:ml-8 md:w-1/3 lg:w-3/4 text-center md:text-left ">
                <h3 className="text-xl font-bold mb-2 mt-8">{title}</h3>
                <p className="text-gray-500 mb-4">{description}</p>
            </div>
        </div>
    )
}

export default FeatureItem