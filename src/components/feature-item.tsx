export function FeatureItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default FeatureItem