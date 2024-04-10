"use client"

import Image from "next/image"
import { toast } from "./ui/use-toast"
import Web3 from "web3"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import { SquareIcon, SquareX } from "lucide-react"
import { Button } from "./ui/button"
import { Skeleton } from "./ui/skeleton"
import { PuffLoader } from "react-spinners"
import { useRouter } from "next/navigation"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function ConnectButton() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [buttonLoading, setButtonLoading] = useState<boolean>(false)
    const [metaAccounts, setMetaAccounts] = useState<string[]>([])
    const [skeletons, setSkeletons] = useState<boolean>(true)
    const router: AppRouterInstance = useRouter()

    async function ConnectWallet() {
        if (typeof (window as any).ethereum === "undefined") {
            toast({
                variant: "destructive",
                title: "Avertissement !",
                description: "Pas d'extension Metamask détectée, Essayez de l'installer..."
            })
        } else {
            setButtonLoading(true)
            const web3 = new Web3((window as any).ethereum)
            await (window as any).ethereum.enable();
            setTimeout(async () => {
                setIsOpen(true)
            }, 2000)
            setTimeout(async () => {
                const accounts = await web3.eth.getAccounts()
                console.log(accounts)
                setSkeletons(false)
                await (window as any).ethereum.request({
                    method: "eth_requestAccounts"
                })
                setMetaAccounts(accounts)
            }, 5000)

        }
    }

    return (
        <AlertDialog open={isOpen}>
            <AlertDialogTrigger asChild>
                {
                    typeof window !== "undefined" && localStorage.getItem("permission") === "true"? (
                <p>hello</p>
                ): (
                <button
                    onClick={ConnectWallet}
                    className="inline-flex text-xs sm:text-base font-medium h-9 px-3 sm:h-12 sm:px-6 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    {
                        buttonLoading ? (
                            <span className="w-64 flex flex-row justify-center"><PuffLoader size={30} color="white" /></span>
                        ) : (
                            <>Se Connecter avec MetaMask <span className="ml-2 inline-block"><Image src={"/metamask.png"} alt="" height={22} width={22} /></span>
                            </>
                        )
                    }
                </button>
                )}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <div className="flex flex-row justify-between">
                    <AlertDialogTitle className="my-auto">Sélectionnez votre adresse:</AlertDialogTitle>
                    <SquareX size={25} color="white" onClick={() => setIsOpen(false)} className="cursor-pointer my-auto" />
                </div>
                {
                    metaAccounts.length >= 1 && metaAccounts.map((e: string) => (
                        <Button
                            onClick={async () => {
                                const web3 = new Web3((window as any).ethereum)
                                const balance = await web3.eth.getBalance(e)
                                if (typeof window !== 'undefined') {

                                    localStorage.setItem("permission", "true")
                                    localStorage.setItem("address", e)
                                    localStorage.setItem("balance", BigInt(balance).toString())
                                }
                                router.push("/home")
                            }}
                            variant={"outline"}
                        >{e}</Button>
                    ))
                }
                {
                    skeletons && (
                        <div className="space-y-1 mx-auto">
                            <Skeleton className="my-1 h-8 w-[400px] sm:w-[400px] md:w-[300px] lg:w-[460px]" />
                            <Skeleton className="my-1 h-8" />
                            <Skeleton className="my-1 h-8" />
                        </div>
                    )
                }
            </AlertDialogContent>
        </AlertDialog>
    )
}