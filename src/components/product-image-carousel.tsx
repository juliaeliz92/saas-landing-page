import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
export function ProductCarousel() {
    const plugin = React.useMemo(
        () => Autoplay({ delay: 2000, stopOnInteraction: true }),
        []
    )
    return (
        <Carousel
            plugins={[plugin]}
            className="w-3/4 lg:w-1/2"
            onMouseEnter={plugin.stop}
            onMouseLeave={plugin.reset}
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex items-center justify-center px-4">
                                    <picture>
                                        <source
                                            srcSet={`product-image-${index + 1}-desktop.png`}
                                            media="(min-width: 768px)"
                                            className="bg-red-100"
                                        />
                                        <img
                                            src={`product-image-${index + 1}-mobile.png`}
                                            alt={`Product ${index + 1}`}
                                            className="bg-red-100"
                                        />
                                    </picture>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ProductCarousel