import { Link } from '@inertiajs/react';
import { CalendarDays, LayoutGrid, Pill, Receipt, Users } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import appointments from '@/routes/appointments';
import invoices from '@/routes/invoices';
import patients from '@/routes/patients';
import prescriptions from '@/routes/prescriptions';
import type { NavItem } from '@/types';

// Seuls les modules qui ont un contrôleur figurent ici : en ajouter un au fur et à mesure.
const mainNavItems: NavItem[] = [
    { title: 'Tableau de bord', href: dashboard(), icon: LayoutGrid },
    { title: 'Patients', href: patients.index(), icon: Users },
    { title: 'Rendez-vous', href: appointments.index(), icon: CalendarDays },
    { title: 'Prescriptions', href: prescriptions.index(), icon: Pill },
    { title: 'Facturation', href: invoices.index(), icon: Receipt },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
