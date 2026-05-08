import UserFeedbackCarousel from "@/components/user-feedback-carousel"

export function Feedbacks() {
    return (
        <section id="testimonials" className="container mx-auto flex justify-center py-12 flex-col">
            <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">What Our Customers Say</h2>
            <UserFeedbackCarousel />
        </section>
    )
}

export default Feedbacks