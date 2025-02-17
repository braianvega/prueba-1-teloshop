'use client'

import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store"
import Link from "next/link"
import { BsCart4, BsSearch } from "react-icons/bs"
export const TopMenu = () => {

    const openMenu=useUIStore(state=>state.openSideMenu)
    return (
        <nav className="flex px-5 justify-between items-center w-full">

            {/* logo */}
            <div>
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                    <span> | Shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href={'/category/men'}>
                    Men
                </Link>
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href={'/category/women'}>
                    Women
                </Link>
                <Link
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    href={'/category/kid'}>
                    Kid
                </Link>

            </div>

            {/* search, cart, menu */}
            <div className="flex items-center">
                <Link href={'/search'} className="mx-2">
                    <BsSearch className="w-5 h-5" />
                </Link>
                <Link href={'/cart'} className="mx-2">
                    <div className="relative">
                        <span
                            className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                            3
                        </span>
                        <BsCart4 className="w-5 h-5" />
                    </div>
                </Link>
                <button
                    className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
                    onClick={()=>openMenu()}
                    >
                    Menu
                </button>
            </div>

        </nav>

    )
}
