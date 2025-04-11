/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Log or process the payment confirmation data
    console.log('Received Irembo callback:', data);

    // TODO: Save to database or update order/payment status here

    return NextResponse.json({ message: 'Request received successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error handling Irembo callback:', error);
    return NextResponse.json({ message: 'Failed to process callback' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
     return NextResponse.json({ message: 'GET Callback received (Testing)' });
   }
   
