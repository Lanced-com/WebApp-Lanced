"use client"

import Card from "@/app/components/Card"
import Api from "@/utils/api"
import { useEffect, useState } from "react"

import { ImSpinner2 } from "react-icons/im"

const JoinAsHirer = () => {
    const [users, setUsers] = useState<any>(null)
    const [loading, setLoading] = useState<any>()

    useEffect(() => {
        setLoading(<ImSpinner2 className="w-12 h-12 animate-spin" />)
        ;(async function () {
            const res = await Api.getUsers()
            setTimeout(() => {
                setLoading(null)
                setUsers(res.data)
            }, 5000)
        })()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800/80">
            <h1>DETAILS OF FREELANCERS</h1>
            <div className="mt-20">
                {loading}
                {users &&
                    Object.keys(users).map((user, idx) => {
                        return <Card key={idx} {...users[user]} />
                    })}
            </div>
        </div>
    )
}

export default JoinAsHirer
