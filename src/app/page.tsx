import Image from "next/image"
import Navbar from "./components/Navbar"
import Header from "./components/Header"

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen relative">
            <Navbar />
            <Header />
        </main>
    )
}
