'use client'
import React, { useEffect } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
function Dashboardclient({ ownerid }: { ownerid: string }) {
    const navigate = useRouter()
    const [businessName, setBusinessName] = useState ("")
    const [supportEmail, setSupportEmail] = useState("")
    const [knowledge, setKnowledge] = useState("")
    const [loading, setLoading] = useState(false)
    const [saved, setSaved] = useState(false)

    useEffect (()=>{
        if (ownerid) {
            const handleGetDetails=async ()=>{
                 try {
            const result=await axios.post("/api/settings/get",{ownerid})
           setBusinessName(result.data.businessName)
           setSupportEmail(result.data.supportEmail)
           setKnowledge(result.data.knowledge)
        } catch (error) {
            console.log(error);
            
        }
            }
            handleGetDetails()
        }
    },[ownerid])

    const handleSettings=async ()=>{
        setLoading(true)
        try {
            const result=await axios.post("/api/settings",{ownerid,businessName,supportEmail,knowledge})
            console.log(result.data);
            setLoading(false)
            setSaved(true)
            setTimeout(() => 
                setSaved(false)
             ,3000);
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }
    }
    return (
        <div className='min-h-screen bg-zinc-50 text-zinc-900 '>
            <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} >
                <div className=' flex mx-auto justify-between items-center px-6 h-16 max-w-7xl'>
                    <div className=' cursor-pointer text-lg font-semibold tracking-tight' onClick={() => navigate.push("/")}>Support<span className='text-zinc-400'>AI</span></div>
                    <button className='border rounded-lg py-2 px-2 border-zinc-700 hover:bg-zinc-300 transition font-bold cursor-pointer' onClick={()=>navigate.push("/embed")}>Embed chatbot</button>
                </div>
            </motion.div>

            <div className='flex justify-center px-4 py-14 '>
                <motion.div
                className='w-full max-w-3xl py-10  rounded-2xl shadow-xl bg-white p-10 '
                >
                <div className='mt-2'>
                    <h1 className=' font-bold text-3xl'>Chatbot setting</h1>
                    <p className='py-4'>Manage your AI Chatbot knowledge and business details</p>
                    <div className='mb-10'>
                        <h1 className='font-semibold text-2xl mb-5'>Business Details</h1>
                        <div className='space-y-2 flex flex-col gap-4 w-full'>
                            <input type="text" className='rounded-xl bg-zinc-200 border-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80' name="" id="" placeholder='Businees name'onChange={(e)=>setBusinessName(e.target.value)} value={businessName}/>
                            <input type="text" className='rounded-xl bg-zinc-200 border-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80' name="" id="" placeholder='Support Email ' onChange={(e)=>setSupportEmail(e.target.value)} value={supportEmail}/>
                        </div>
                    </div>
                    <div className='mb-'>
                        <h1 className='font-semibold text-2xl mb-5'>Knowledge</h1>
                        <p className=' mb-4'>Add FAQs, policies, delivery info, refunds, etc.</p>
                        <div className=' flex flex-col  '>
                            <textarea className='w-full items-start h-40 rounded-xl bg-zinc-200 border-zinc-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80' name="" id="" placeholder='knowlege' onChange={(e)=>setKnowledge(e.target.value)} value={knowledge}/>
                        </div>
                    </div>

                    {/* ............................. */}

                    <div className='flex items-center gap-5'>
                        <motion.button
                        whileHover={{scale:1.03}}
                        whileTap={{scale:0.97}}
                        disabled={loading}
                        onClick={handleSettings}
                        className='px-7 rounded-xl bg-black text-white font-medium hover:bg-zinc-800 transition disabled:opacity-60 mt-6 py-2'
                        >
                            {loading? "saving..." :"save"}
                        </motion.button>
                        {saved &&
                        <motion.span>
                            ✅ Setting saved
                        </motion.span>}
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Dashboardclient
