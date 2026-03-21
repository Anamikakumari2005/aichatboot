import Dashboardclient from '@/components/Dashboardclient'
import { getSession } from '@/lib/getSession'
import React from 'react'

async function page (){
  const session = await getSession()
  return (
    <>
      <Dashboardclient ownerid={session?.user?.id!}/>
    </>
  )
}

export default page
