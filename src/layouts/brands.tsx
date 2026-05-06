export function Brands() {
    return (
        <div className="w-full py-12 my-12 px-4 md:px-8">
            <div className="container mx-auto flex items-center justify-center">
               <picture>
                    <source srcSet="./brands-desktop.png" media="(min-width: 768px)" />
                    <img src="./brands-mobile.png" alt="Brands" className="object-contain" />
                </picture>
            </div>
        </div>
    );
}

export default Brands;