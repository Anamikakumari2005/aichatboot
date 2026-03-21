"use client"
import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "motion/react"
import { useState } from 'react'
import { title } from 'process'
import { data, desc } from 'motion/react-client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const HomeClient = ({ email }: { email: string }) => {

  const handlelogin = () => {
    window.location.href = "/api/auth/login"
  }
  const Dashboard = () => {
    window.location.href = "/"
  }

  const firstLetter = email ? email[0].toUpperCase() : ""
  const [open, setOpen] = useState(false)
  const popupref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (popupref.current && !popupref.current.contains(e.target as Node))
        setOpen(false)
    }

    document.addEventListener("mousedown", handler)
    return () =>
      document.removeEventListener("mousedown", handler)
  }, [])

  const navigate=useRouter()
  const feature=[
    {
      title: "plug & play",
      desc: "Add the chatbot to your site with a single script tag"
    },
    {
      title: "Admin Controlled",
      desc: "Your Controlled exactly what the ai know and answer"
    },
    {
      title: "Always online",
      desc: "Your customer get instant support 24/7"
    }
  ]

  const handleLogOut = async ()=>{
    try {
      const result = await axios.get("/api/auth/logout")
      window.location.href = "/"
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='min-h-screen bg-linear-to-br from-white to-zinc-50 text-zinc-900 overflow-x-hidden '>
      <motion.div initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} >
        <div className=' flex mx-auto justify-between items-center px-6 h-16 max-w-7xl'>
          <div className='text-lg font-semibold tracking-tight'>Support<span className='text-zinc-400'>AI</span></div>
          {email ? <div className='relative' ref={popupref}>
            <button onClick={() => setOpen(!open)} className='bg-black rounded-full cursor-pointer text-white w-10 h-10 flex items-center justify-center font-semibold hover:bg-gray-700 '> {firstLetter}</button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className=' right-0 border border-zinc-200  py-2  mt-3 w-40 bg-white rounded-xl shadow-xl overflow-hidden flex flex-col'>


                  <button className=' hover:bg-zinc-200 w-full cursor-pointer py-2 px-3 h-full'onClick={()=>navigate.push("/dashboard")}>Dashboard</button>
                  <button className='text-red-500 hover:bg-zinc-200 w-full  py-2 px-3 h-full cursor-pointer' onClick={handleLogOut}>Logout</button>

                </motion.div>

              )}
            </AnimatePresence>

          </div> : <button onClick={handlelogin} className='bg-black rounded-full cursor-pointer py-2 text-white px-4 flex hover:bg-zinc-600 transition disabled:opacity-60  items-center'>Login</button>}
        </div>
      </motion.div>

      {/* ......................................................................................................................... */}

      <section className='pt-30 relative pb-30 pd-20 px-4'>
        <div className='pl-28 mx-auto grid md:grid-cols-2 grid-cols-1 gap-20 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>

            <h1 className='font-semibold text-3xl'>AI Customer support <br />
              Built for Modern Websites
            </h1>
            <p className=' mt-6 max-w-xl'>add a powerful AI chatbot to your website in minutes.
              let your customer get instant answer using your own bussinees knowledge
            </p>
            <div className='gap-3 flex mt-10'>
              {email ? <button className='text-white bg-black rounded-full cursor-pointer py-2 px-4 hover:bg-zinc-700 transition disabled:opacity-60' onClick={()=>navigate.push("/dashboard")}>Go to Dashboard</button> :
                <button className='text-white bg-black rounded-full cursor-pointer py-2 px-4 hover:bg-zinc-700 transition disabled:opacity-60' onClick={handlelogin}>Get started</button>}
              <a href='#feature' className='text-white bg-black rounded-full cursor-pointer py-2 px-4 hover:bg-zinc-700 transition disabled:opacity-60' >Learn More</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }} className='relative'>
            <div className='shadow-2xl rounded-2xl border border-zinc-200 p-6 mr-30 '>
              <div className=' text-black px-5 p-3'>
                Live chat Preview
              </div>

              <div className='  space-y-3'>
                <div className=' bg-zinc-600 rounded-2xl  ml-auto py-2 px-8 text-white w-fit'>Do you have xl size heels</div>
                <div className=' bg-zinc-300 rounded-2xl py-2 text-black w-fit px-8 '>yes please check my website...!</div>
              </div>

           
              <motion.div
              animate={{y:[0,-12,0]}}
              transition={{repeat:Infinity , duration:3}}
              className='absolute -bottom-6 right-19 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-xl bg-black'
              >
                💬
              </motion.div>
               </div>
          </motion.div>
          
        </div>
      </section>

      <section id='feature' className='bg-zinc-50 py-20 px-6 border-t border-zinc-200'>
        <div className='max-w-6xl mx-auto'>
          <motion.div className='font-semibold text-3xl text-center'
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1 , y:0}}
          viewport={{once:false}}
          transition={{duration:0.5}}

           >
            why Businesses Choose SupportAI
          </motion.div>

          {/* .............................................................................................................................. */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
            {feature.map((f,index)=>(
              <motion.div 
              key={index}
              initial={{opacity:0,y:40}}
          whileInView={{opacity:1 , y:0}}
          viewport={{once:false}}
          transition={{ delay: index *0.1}}
          className='bg-white rounded-2xl p-8 shadow-lg border border-zinc-200'
              >
                <h1 className='font-bold text-lg'>{f.title}</h1>
                <p>{f.desc}</p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
        <footer className='py-10 text-center '>
          &copy; {new Date().getFullYear()} SupportAI. All rights reserved.
        </footer>

    </div>
  )
}

export default HomeClient
