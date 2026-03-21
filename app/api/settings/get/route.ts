import Settings from "@/app/model/settings.model";
import connectDb from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest) {
    try {
        const {ownerid} = await req.json()
        if(!ownerid){
            return NextResponse.json(
                {message : "owner id is requir"},
                {status:400}
            )
        }
        await connectDb()
        const setting=await Settings.findOne(
            {ownerid}
        )
        return NextResponse.json(setting)
    } catch (error) {
        return NextResponse.json(
            {message:`get setttings error ${error}`},
            {status:500}
        )
    }
}

