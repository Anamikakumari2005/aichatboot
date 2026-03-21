import Settings from "@/app/model/settings.model";
import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest) {
    try {
        const{ownerid,businessName,supportEmail,knowledge} = await req.json()
        if(!ownerid){
            return NextResponse.json(
                {message : "owner id is requar"},
                {status:404}
            )
        }
        await connectDb()
        const settings=await Settings.findOneAndUpdate(
            {ownerid},
           {ownerid,businessName,supportEmail,knowledge},
           {new:true,upsert:true}
        )
        return NextResponse.json(settings)
    } catch (error) {
        return NextResponse.json(
            {message:`setttings error ${error}`},
            {status:500}
        )
    }
}

