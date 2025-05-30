import { NavUser } from '@/components/ui/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { PATH } from '@/routes/path';
import { Clapperboard, LayoutDashboard, Slack, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AppSidebar() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: 'Dashboard',
      url: PATH.DASHBOARD,
      icon: LayoutDashboard,
    },
    {
      name: 'Users Management',
      url: PATH.USER_MANAGEMENT,
      icon: Users,
    },
    {
      name: 'Movies Management',
      url: PATH.MOVIE_MANAGEMENT,
      icon: Clapperboard,
    },
  ];
  return (
    <Sidebar>
      <SidebarHeader className='p-3'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:!p-1.5'>
              <a href='#'>
                <Slack className='!size-5' />
                <span className='text-base font-semibold'>Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='p-4'>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} className='py-5' onClick={() => navigate(item.url)}>
                {item.icon && <item.icon />}
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: 'shadcn',
            email: 'm@example.com',
            avatar: 'https://github.com/shadcn.png',
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
