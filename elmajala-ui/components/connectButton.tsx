import Image from "next/image"
import { toast } from "./ui/use-toast"
import { useContext } from "react"


export default async function ConnectButton() {
    return (
        <button
            onClick={
                function () {
                    toast({
                        variant: "destructive",
                        title: "Avertissement !",
                        description: "Pas d'extension Metamask détectée, Essayez de l'installer..."
                    })
                }
            }
            className="inline-flex text-xs sm:text-base font-medium h-9 px-3 sm:h-12 sm:px-6 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Se Connecter avec MetaMask <span className="ml-2 inline-block"><Image src={"/metamask.png"} alt="" height={22} width={22} /></span>
        </button>
    )
}