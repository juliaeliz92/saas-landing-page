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
import { IconMenu, IconX } from "@tabler/icons-react"
import NavbarMenuList from "./navbar-menu-list"

export function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full gap-4 p-4">
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuLink>Wallet</NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-2">
                <NavbarMenuList style="hidden md:flex" />
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
                        <NavbarMenuList style="flex flex-col gap-4 w-full"/>
                    </DrawerContent>
                </Drawer>
            </div>
        </nav>
    )
}

export default Navbar