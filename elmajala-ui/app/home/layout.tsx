"use client"
import { initOrLogout } from "@/hooks/CredentialsHook";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const router: AppRouterInstance = useRouter();
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    useEffect(() => {
        const checkPermission = () => {
            if (typeof window !== 'undefined') {
                const permission = localStorage.getItem("permission") === "true";
                setHasPermission(permission);
                if (!permission) {
                    router.push("/");
                }
            }
        };
        checkPermission();
    }, []);

    if (hasPermission === null) {
        return <div>Loading...</div>;
    }

    if (!hasPermission) {
        return null;
    }

    return (
        <section>
            <button onClick={() => {
                initOrLogout(2)
                router.push("/")
            }}>logout</button>
            {children}
        </section>
    );
}
