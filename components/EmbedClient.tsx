'use client'
import { navigate } from 'next/dist/client/components/segment-cache/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'


function EmbedClient({ ownerid }: { ownerid: string }) {
    const navigate = useRouter()
    const [copied, setCopied] =  useState(false)
    const embedCode =     `    <script
     src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js"
    data-owner-id="${ownerid}">
    </script>`
    const copyCode=()=>{
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }
    return (


        <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden '>
            <div className=' flex mx-auto justify-between items-center px-6 h-16 max-w-7xl'>
                <div className='text-lg font-semibold tracking-tight' onClick={() => navigate.push("/")}>Support<span className='text-zinc-400'>AI</span></div>
                <button className='px-4 py-2 rounded-lg border border-zinc-300 text-sm hover:bg-zinc-300 transition' onClick={() => navigate.push("/dashboard")}>Back to Dashboard</button>
            </div>

            <div className='flex justify-center px-4 py-14'>
                <div className='w-full max-w-3xl py-10  rounded-2xl shadow-xl bg-white p-10'>
                    <h1 className='font-bold text-3xl pb-4'> Embed ChatBot</h1>
                    <p>Copy and paste this code before<code>&lt;/body&gt;</code></p>
                    <div className='relative bg-zinc-900 text-zinc-100 rounded-xl  text-sm font-mono mb-10'><pre className='overflow-x-auto'>{embedCode}</pre>
                    <button className='absolute top-2 flex justify-center rounded-full  cursor-pointer text-center right-3 bg-white text-zinc-900 font-medium px-3 py-1.5 hover:bg-zinc-200 transition'onClick={copyCode}>{copied?"Copied!!":"Copy"}</button>
                    </div>

                <ol className='mt-14 mb-5'>
                    <li>copy the embed script</li>
                    <li>paste it before the closing body tag</li>
                    <li>Reload your website</li>
                </ol>

                <div className='relative flex flex-col'>
                    <h1>Live preview</h1>
                    <p>this is how the chatbot will appear on your webssite</p>
                    <div className='absolute bottom-24 right-6 w-64  rounded-xl shadow-xl border bg-black border-zinc-200 text-white px-3 py-2 justify-between flex items-center'>
                        <span>customer support</span>
                        <span>❌</span>
                    </div>
                </div>

                </div>
            </div>
        </div>


    )
}

export default EmbedClient
