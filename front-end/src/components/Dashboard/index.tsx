
import SidePanel from './LeftPanel';
import StragtegiesGrid from './Strategies';
import Dashboardlayout from '@/layout/DashboardLayout';


export default function Dashboard() {

    return (
        <Dashboardlayout>
            <SidePanel />
            <StragtegiesGrid />
        </Dashboardlayout>
    )
}
