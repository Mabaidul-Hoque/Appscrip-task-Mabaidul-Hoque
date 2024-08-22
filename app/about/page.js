"use client";
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div style={{minHeight: "50vh", display: "flex", justifyContent: "center", alignItems :"center", flexDirection: "column", gap: 20, color: "red"}}>
            <h1>It's under development!</h1>
            <button style={{padding: 10, cursor: "pointer"}} onClick={()=> router.push("/")}>Go Home</button>
        </div>
    );
}

export default page