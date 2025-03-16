
import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavigationProps {
  handleLinkClick: () => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ handleLinkClick }) => {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">Features</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-pink-500/50 to-violet-500/50 p-6 no-underline outline-none focus:shadow-md"
                      href="#features"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium text-white">
                        Create Beautiful Photo Memories
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Express your creativity with our premium photo booth experiences
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <Link
                    to="/pica-pica-booth"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Pica Pica Booth</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Vibrant colorful photo strips with stickers
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/digibooth"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Digibooth</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Modern digital photo experience with filters
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kpop-photo-booth"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">K-pop Photo Booth</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Create memories with your favorite K-pop idols
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vintage-photobooth"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Vintage Photobooth</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Nostalgic retro-styled photo experiences
                    </p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wedding-photobooth"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Wedding Photobooth</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Elegant layouts for wedding memories
                    </p>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#how-it-works" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">How It Works</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#testimonials" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="#pricing" className="px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors">Pricing</a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[200px]">
                <li>
                  <Link
                    to="/about"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">About</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Blog</div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={handleLinkClick}
                  >
                    <div className="text-sm font-medium leading-none">Contact</div>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
