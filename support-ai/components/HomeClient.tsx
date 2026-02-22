import React from 'react'
import {motion} from "motion/react"

function HomeClient() {
  return (
    <div className='min-h-screen bg-linear-to-br from-white to-zinc-50
     text-zinc-900 overflow-x-hidden'>
        <motion.div
        className='fixed-top-0 left-0 bg-white/70 backdrop-blur-xl border-b
        border-zinc-200'
        >

        </motion.div>

    </div>
  )
}

export default HomeClient