"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScrollReset({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        // Disable browser scroll restoration
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }

        // Always scroll to top
        window.scrollTo(0, 0);
    }, [pathname]); // runs on refresh + route change

    return <>{children}</>;
}
