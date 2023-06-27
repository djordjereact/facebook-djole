import Image from "next/image";
import { FlagIcon, MagnifyingGlassIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/20/solid";
import HeaderIcon from "@/app/components/HeaderIcon";

function Header() {
    return (
        <div>
            {/*Left*/}
            <div className='flex items-center'>
                <Image src='https://links.papareact.com/5me' width={40} height={40} layout='fixed'/>

                <div className='flex ml-2 rounded-full bg-gray-100 p-2'>
                    <MagnifyingGlassIcon className='h-6 text-gray-600' />
                    <input
                        className='flex ml-2 items-center outline-none placeholder-gray-500 bg-transparent'
                        type="text"
                        placeholder='Search Facebook'/>
                </div>
            </div>

            {/*Center*/}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2'>
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>


        </div>
    )
}

export default Header;