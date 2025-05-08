import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo & Mobile Menu Trigger */}
        <div className="flex items-center mr-8">
          {/* Desktop Logo */}
          <Link href="/" className="hidden md:flex font-bold text-xl">
            Lyrics Pinyin
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Link
                href="#"
                className="font-bold text-xl flex md:hidden items-center gap-2"
              >
                Lyrics Pinyin
              </Link>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[80%] sm:w-[350px] md:hidden"
            >
              <SheetHeader>
                <SheetTitle>Lyrics Pinyin</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                <Link
                  href="/lyrics"
                  className="block px-2 py-1 hover:text-primary"
                >
                  Lyrics
                </Link>
                <Link
                  href="/artists"
                  className="block px-2 py-1 hover:text-primary"
                >
                  Artists
                </Link>
                <Link
                  href="/about"
                  className="block px-2 py-1 hover:text-primary"
                >
                  About
                </Link>
                <Link
                  href="/#faq"
                  className="block px-2 py-1 hover:text-primary"
                >
                  Help
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href="/lyrics">Lyrics</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                asChild
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Actions */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/#faq">Help</Link>
            </Button>
          </div>
          <Button size="sm" asChild>
            <Link href={"/lyrics"}>Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
