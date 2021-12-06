import Footer from "./Footer"
import MenuItem from "./MenuItem"
import Profile from "./Profile"

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {
    const {activeMenu} = props;
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem href="/member" active={activeMenu === "overview"} icon="ic-menu-overview" title="Overview" />
                    <MenuItem href="/member/transactions" active={activeMenu === "transactions"} icon="ic-menu-transaction" title="Transactions" />
                    <MenuItem href="/member" icon="ic-menu-message" title="Message" />
                    <MenuItem href="/member" icon="ic-menu-card" title="Card" />
                    <MenuItem href="/member" icon="ic-menu-reward" title="Rewards" />
                    <MenuItem href="/member/edit-profile" active={activeMenu === "settings"} icon="ic-menu-setting" title="Settings" />
                    <MenuItem href="/sign-in" icon="ic-menu-log-out" title="Log Out" />






                </div>
                <Footer />
                
            </div>
        </section>
    )
}
