import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import UserFeedback from "./user-feedback";

const feedbacks = [
    {
        feedback: "This product has completely transformed our workflow: the onboarding was seamless, the support team responded within minutes, and the results were visible from day one.",
        avatar: "avatar-1.webp",
        name: "John Doe",
        title: "CEO, TechCorp",
        rating: 5
    },
    {
        feedback: "I love how intuitive the platform feels, with helpful analytics and a clean interface that saves time every day. The landing page increased our demo requests by 30% within one week",
        avatar: "avatar-2.webp",
        name: "Jane Smith",
        title: "Marketing Manager, InnovateX",
        rating: 5
    }
];

export function UserFeedbackCarousel() {
    const plugin = React.useMemo(
        () => Autoplay({ delay: 2000, stopOnInteraction: true }),
        []
    )
    return (
        <div className="flex justify-center">
            <Carousel
                plugins={[plugin]}
                className="w-[60vw] md:w-3/4 lg:w-[70vw] xl:w-[60vw]"
                onMouseEnter={plugin.stop}
                onMouseLeave={plugin.reset}
            >
                <CarouselContent className="flex items-center">
                    {feedbacks.map((feedback, index) => (
                        <CarouselItem key={index}>
                            <UserFeedback {...feedback} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    )
}

export default UserFeedbackCarousel