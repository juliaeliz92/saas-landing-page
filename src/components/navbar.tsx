import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { IconMenu, IconX } from "@tabler/icons-react"

export function Navbar() {
    return (
        <div className="flex items-center justify-between w-full gap-4 p-4">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuLink>Wallet</NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2">
                <div className="hidden md:flex items-center gap-2">
                    <Button className="px-4 py-2 mr-2" variant="outline">
                        Sign Up
                    </Button>
                    <Button className="px-4 py-2">Login</Button>
                </div>

                <Drawer
                    direction="right"
                >
                    <DrawerTrigger 
                        className="md:hidden"
                        aria-label="Open menu">
                            <IconMenu />
                    </DrawerTrigger>
                    <DrawerContent className="p-4">
                        <DrawerClose>
                            <IconX stroke={2} />
                        </DrawerClose>
                        <div className="flex flex-col items-center gap-4 mt-8">
                            <Button className="px-4 py-2 w-full" variant="outline">
                                Sign Up
                            </Button>
                            <Button className="px-4 py-2 w-full">Login</Button>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar