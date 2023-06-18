import {BiSearch} from 'react-icons/bi'
import { BsFillBugFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Navbar = () => {
    return (
        <div className="bg-gray-800/80 w-full text-3xl p-5 flex justify-between">
            {/* <BiSearch className='h-10 w-10' /> */}
            <div className='flex w-[15%] justify-between'>
                <BsFillBugFill />
                <h1 className="font-['Arial']">LANCED.COM</h1>
            </div>
            <div className='pr-5'>
                <CgProfile className='hover:cursor-pointer'/>
            </div>
        </div>
    )
}

export default Navbar