'use client'

import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"
import { BsSearch } from "react-icons/bs"
import { HiOutlineUsers } from "react-icons/hi2"
import { IoLogInOutline, IoLogOutOutline, IoTicketOutline } from "react-icons/io5"
import { LiaTshirtSolid } from "react-icons/lia"
import { MdOutlineCloseFullscreen } from "react-icons/md"
import { RiUserSettingsLine } from "react-icons/ri"

export const SideMenu = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);


    return (
        <div>
            {/* Background */}
            {isSideMenuOpen &&
                (<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />)
            }


            {/* Blur */}

            {isSideMenuOpen &&
                (<div
                    onClick={closeMenu}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />)
            }
            {/* SideMenu */}
            <nav

                className={clsx("fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    { "translate-x-full": !isSideMenuOpen }
                )}>

                <MdOutlineCloseFullscreen
                    className="absolute right-5 top-5 cursor-pointer"
                    size={35}
                    onClick={() => closeMenu()} />


                {/* Input */}
                <div className="relative mt-14">
                    <BsSearch size={20} className="absolute top-2 left-2" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 " />
                </div>

                {/* Menu */}
                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <RiUserSettingsLine size={30} />
                    <span className="ml-3 text-xl">Perfil</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoTicketOutline size={30} />
                    <span className="ml-3 text-xl">Ordenes</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogInOutline size={30} />
                    <span className="ml-3 text-xl">Ingresar</span>
                </Link>
                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <IoLogOutOutline size={30} />
                    <span className="ml-3 text-xl">Salir</span>
                </Link>

                {/* line Separator */}
                <div className="w-full h-px bg-gray-200 my-10" />

                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <LiaTshirtSolid size={30} />
                    <span className="ml-3 text-xl">Productos</span>
                </Link>

                <Link
                    href={'/'}
                    className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
                    <HiOutlineUsers size={30} />
                    <span className="ml-3 text-xl">Clientes</span>
                </Link>
            </nav>


        </div>
    )
}
