import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import SidebarProfileButton from "@/app/ui/sidebar/SidebarProfileButton";

const RootSidebar = () => {
  return (
    <Sidebar collapsible={"icon"}>
      <SidebarHeader className={"items-center group-data-[state=expanded]:items-end"}>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>최근 페이지</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <HomeIcon />
                    <p>{"홈"}</p>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Suspense fallback={<Skeleton className={"h-12 w-full bg-gray-200"} />}>
          <SidebarProfileButton />
        </Suspense>
      </SidebarFooter>
    </Sidebar>
  );
};

export default RootSidebar;
