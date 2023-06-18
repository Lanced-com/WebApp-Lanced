"use client"

import Api from "@/utils/api"
import { useEffect, useState } from "react"

const JoinAsFreeLancer = () => {
    const [cutomers, setCustomers] = useState<any>({})

    useEffect(() => {
        (async function() {
            const res = await Api.getCustomers()
            console.log('res: ', res)
        })()
    }, [])

    return (
        <div className="h-screen w-screen bg-gray-800/80 flex justify-center items-center">
            <h1>DETAILS OF HIRERS</h1>
            {Object.keys(cutomers).map((customer, idx) => {
                console.log('asdasdasd:', customer)
                return (
                    <h1 key={idx}>Hello</h1>
                )
            })}
        </div>
    )
}

export default JoinAsFreeLancer