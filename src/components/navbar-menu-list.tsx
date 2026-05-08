import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const lists = [
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
]

export function NavbarMenuList({ style }: { style?: string }) {
    return (
        <NavigationMenu className="max-w-full">
            <NavigationMenuList className={`${style || ''} gap-4`}>
                {lists.map((list) => (
                    <NavigationMenuLink key={list.href} render={<a href={list.href} />} className="hover:bg-gray-700 transition-colors">
                        {list.name}
                    </NavigationMenuLink>
                ))}
                <Button className="px-4 py-2" variant="outline">
                    Sign Up
                </Button>
                <Button className="px-4 py-2">Login</Button>
            </NavigationMenuList>
        </NavigationMenu>  
    )
} 

export default NavbarMenuList
