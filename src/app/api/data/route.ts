import axios from 'axios'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const limit = request.nextUrl.searchParams.get('limit')
    const device = request.nextUrl.searchParams.get('device')

    return await fetch(`http://localhost:8080/api/data?device=${device}&limit=${limit}`).then(r => r.json());
}
