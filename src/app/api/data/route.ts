import dbConnect from "@/lib/dbConnect";
import Data from "@/models/Data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const device = searchParams.get('device');
    const limit = Number(searchParams.get('limit'));
    if (!device || isNaN(limit)) {
        return Response.json({ code: 400, message: "bad request" });
    }
    await dbConnect();
    const data = await Data.find({ device })
        .sort({ createdAt: 'desc' })
        .limit(Number(limit))
        .exec();
    return Response.json({ code: 200, message: 'ok', data });
}

export async function POST(request: NextRequest) {
    try {
        const { device, light, moisture } = await request.json();
        const now = new Date();
        const data = new Data({
            device,
            light,
            moisture,
            createdAt: now,
            updatedAt: now,
        });
        await data.save();
        return Response.json({ code: 200, message: 'ok' });
    } catch (error) {
        return Response.json({ code: 400, message: 'internal error' });
    }
}