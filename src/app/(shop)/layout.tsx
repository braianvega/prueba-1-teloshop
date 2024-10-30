import { SideMenu, TopMenu } from "@/components";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <TopMenu />
            <SideMenu />
            <div className="px-0 sm:px-12">
                {children}
            </div>
        </div>
    )
} 