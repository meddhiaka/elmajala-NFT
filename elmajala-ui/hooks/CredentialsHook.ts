"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function InitCredentials() {
    useEffect(() => {
        initOrLogout(1)
    }, [])
}

export function initOrLogout(choice: number) {
    if (choice == 1) {
        // init feature (first time)
        if ((localStorage.getItem("permission") === null) && (typeof window !== 'undefined')) {
            if (typeof window !== 'undefined') {
                localStorage.setItem("permission", "false")
                localStorage.setItem("address", "")
                localStorage.setItem("balance", "")
                console.log("init ok")
            }
        }
    } else if (choice == 2) {
        // logout feature
        if ((localStorage.getItem("permission") === "true") && (typeof window !== 'undefined')) {
            if (typeof window !== 'undefined') {
                localStorage.setItem("permission", "false")
                localStorage.setItem("address", "")
                localStorage.setItem("balance", "")
                console.log("logout ok")
            }
        }
    }
} 