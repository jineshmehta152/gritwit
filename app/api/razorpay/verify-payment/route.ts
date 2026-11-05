import { NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(req: Request) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, studentDetails } = await req.json()

    const secret = process.env.RAZORPAY_KEY_SECRET

    if (secret && razorpay_signature) {
      const generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex')

      if (generatedSignature !== razorpay_signature) {
        return NextResponse.json({ success: false, error: 'Signature verification failed' }, { status: 400 })
      }
    }

    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      studentDetails,
      enrolmentId: `GW-${Math.floor(100000 + Math.random() * 900000)}`,
      timestamp: new Date().toISOString()
    })
  } catch (error: any) {
    console.error('Verify payment error:', error)
    return NextResponse.json({ success: false, error: error?.message || 'Verification failed' }, { status: 500 })
  }
}

