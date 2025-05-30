import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';
import { AppSidebar } from './app-sidebar';
import { SiteHeader } from '@/components/ui/side-header';

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider
      style={{
        '--sidebar-width': 'calc(var(--spacing) * 72)',
        '--header-height': 'calc(var(--spacing) * 14)',
      }}
    >
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className='flex flex-1 flex-col'>
          <div className='@container/main flex flex-1 flex-col gap-2'>
            <div className='flex flex-col gap-4 p-4 md:gap-6 md:p-6'>{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
