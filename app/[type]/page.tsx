"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Type({ params }: { params: { type: string } }) {
    const router = useRouter();
    useEffect(() => {
        void (async function () {
            router.push(`/${params.type}/short`);
        })();
    }, [router]);

    return;
}
