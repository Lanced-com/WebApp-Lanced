import Link from "next/link"

const Header = () => {
    return (
        <div className="flex justify-between w-full h-[700px] bg-gray-800/60">
            <div className="flex bg-white/40 h-full w-[50%] justify-center items-center">
                <Link href={'/routes/join-as-freelancer'} className="p-5 bg-gray-800/80 border border-black rounded-md transition-all hover:bg-gray-800/40">
                    JOIN AS FREELANCER
                </Link>
            </div>
            <div className="flex bg-white/80 h-full w-[50%] justify-center items-center">
                <Link href={'/routes/join-to-hire'} className="p-5 text-black border border-black rounded-md transition-all hover:bg-gray-800/40">
                    JOIN TO HIRE
                </Link>
            </div>
        </div>
    )
}

export default Header
