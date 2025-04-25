'use client';

type MobileMenuProps = {
    activeMenu: boolean;
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileMenu({ activeMenu, setActiveMenu }: MobileMenuProps) {
    return (
        <div 
            className={`absolute top-12 w-full z-50 bg-black transition-all duration-300 ${activeMenu} ? 'opacity-100' : 'opacity-0 pointer-evens-none'`}
            onClick={() => {setActiveMenu(!activeMenu)}}
        >
            MOBILE MENU
        </div>
    )
}