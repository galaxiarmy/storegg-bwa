import Image from 'next/image'

interface MenuItemProps {
    title: string;
    icon: 'ic-menu-overview' | 'ic-menu-card' | 'ic-menu-log-out' | 
          'ic-menu-message' | 'ic-menu-reward' | 'ic-menu-setting' | 'ic-menu-transaction'
}

export default function MenuItem(props: MenuItemProps) {
    const {title, icon} = props
    return (
        <div className="item active mb-30">
            <div className='me-3'>
            <Image src={`/icon/${icon}.svg`} width={25} height={25}  />
            </div>      
            <p className="item-title m-0">
                 <a href="" className="text-lg text-decoration-none">{title}</a>
            </p>
        </div>
    )
}
