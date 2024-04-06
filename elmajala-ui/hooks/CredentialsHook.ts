"use client"

import { useEffect } from "react"

export default function InitCredentials() {
    useEffect(()=> {
        if (localStorage.getItem("permission") === null) {
            localStorage.setItem("permission", "false"),
            localStorage.setItem("address", "")
            localStorage.setItem("balance", "")
            console.log("init ok")
          }
    }, [])
}