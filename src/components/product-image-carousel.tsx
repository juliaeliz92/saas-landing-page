import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
export function ProductCarousel() {
    const plugin = React.useMemo(
        () => Autoplay({ delay: 2000, stopOnInteraction: true }),
        []
    )
    return (
        <Carousel
            plugins={[plugin]}
            className="px-0 mx-0 lg:w-3/4 xl:w-1/2"
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.reset}
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <Card className="py-0 bg-red-100">
                            <CardContent>
                                <picture>
                                    <source
                                        srcSet={`product-image-${index + 1}-desktop.png`}
                                        media="(min-width: 768px)"                                       
                                    />
                                    <img
                                        src={`product-image-${index + 1}-mobile.png`}
                                        alt={`Product ${index + 1}`}
                                    />
                                </picture>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext/> */}
        </Carousel>
    )
}

export default ProductCarousel