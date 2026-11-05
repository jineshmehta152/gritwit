import { NextResponse } from 'next/server'
import Razorpay from 'razorpay'

export async function POST(req: Request) {
  try {
    const { amount, currency = 'INR', receipt, notes } = await req.json()

    const key_id = process.env.RAZORPAY_KEY_ID || 'rzp_test_placeholder_key'
    const key_secret = process.env.RAZORPAY_KEY_SECRET || 'placeholder_secret'

    // If actual keys are not yet provided in .env, simulate or create order
    if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
      const razorpay = new Razorpay({
        key_id,
        key_secret,
      })

      const order = await razorpay.orders.create({
        amount: Math.round(Number(amount) * 100), // amount in paise
        currency,
        receipt: receipt || `rcpt_${Date.now()}`,
        notes: notes || {},
      })

      return NextResponse.json({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        key_id,
        mode: 'live_or_test',
      })
    } else {
      // Demo / fallback order for instant out-of-the-box readiness
      const mockOrderId = `order_${Math.random().toString(36).substring(2, 12)}`
      return NextResponse.json({
        id: mockOrderId,
        amount: Math.round(Number(amount) * 100),
        currency,
        key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_default',
        mode: 'mock',
      })
    }
  } catch (error: any) {
    console.error('Razorpay order creation error:', error)
    return NextResponse.json(
      { error: error?.message || 'Failed to create Razorpay order' },
      { status: 500 }
    )
  }
}

