import EmbedClient from '@/components/EmbedClient'
import { getSession } from '@/lib/getSession'
import React from 'react'

async function page  () {
    const session= await getSession()
  return (
    <>
      <EmbedClient ownerid={session?.user?.id!}/>
    </>
  )
}

export default page
