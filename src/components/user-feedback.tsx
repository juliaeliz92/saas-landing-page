
import { Card, CardContent } from "@/components/ui/card"

const colors = ["bg-yellow-100", "bg-purple-100", "bg-green-100", "bg-blue-100", "bg-pink-100"]

const getColor = (name: string) => {
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return colors[hash % colors.length];
};

export function UserFeedback({ feedback, avatar, name, rating}: { feedback: string; avatar: string; name: string; rating: number }) {
    return (
        <Card className={`${getColor(name)} w-full shadow-md rounded-lg`}>
            <CardContent className="flex flex-col items-center p-6 md:p-12">
            <q className="text-gray-500 font-bold md:text-lg">{feedback}</q>
            <div className="flex items-center mt-4 md:w-full md:mt-6">
                <img src={avatar} alt={`${name}'s avatar`} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col justify-center ml-2">
                    <h3 className="text-md md:text-lg font-bold text-black">{name}</h3>
                    <p className="text-yellow-500">{'⭐'.repeat(rating)}</p>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}

export default UserFeedback