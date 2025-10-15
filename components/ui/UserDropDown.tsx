'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./button";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useRouter } from 'next/navigation';
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";

const UserDropDown = () => {
 const router = useRouter();

 const handleSignOut = async () => {
   router.push('/sign-in');
 }
 const user = {name : 'John Doe', email: 'fila@gmail.com'};
  return (
  <DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="ghost" className="flex items-center gap-3 text-gray-4 hover:text-yellow-100">
    <Avatar className="h-8 w-8">
      <AvatarFallback className="bg-yellow-500 text-amber-500 text-sm font-bold">{user.name[0]}</AvatarFallback>
    </Avatar>
    <div className="hidden md:flex-col items-start">
      <span className="text-base font-medium text-gray-400">{user.name}</span>
    </div>
    </Button></DropdownMenuTrigger>
  <DropdownMenuContent className="text-gray-400">
    <DropdownMenuLabel>
      <div className="flex relative items-center gap-3 py-2">
      <Avatar className="h-10 w-10">
        <AvatarImage src="https://avatars.githubusercontent.com/u/153423955?s=280&v=4"></AvatarImage>
         <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
        {user.name[0]}
          </AvatarFallback>
      </Avatar>
       <div className="flex flex-col">
      <span className="text-base font-medium text-gray-400">{user.name}</span>
      <span className="text-sm text-gray-500"></span>
    </div>
    </div>
    </DropdownMenuLabel>
  <DropdownMenuSeparator className="bg-gray-600"/>
    <DropdownMenuItem onClick={handleSignOut} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition:color cursor-pointer">
      <LogOut className="mr-2 h-4 w-4"/> Sign Out
    </DropdownMenuItem>
    <DropdownMenuSeparator className="hidden sm:block gb-gray-600"/>
    <nav className="sm:hidden">
      <NavItems/>
    </nav>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default UserDropDown