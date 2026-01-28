import { NextResponse } from 'next/server';
import { subscribeSchema } from '@/app/lib/schemas/newsletter';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = subscribeSchema.safeParse(body);
    if (!result.success) {
      const first = result.error.issues[0];
      return NextResponse.json({ error: first.message }, { status: 400 });
    }

    const { email } = result.data;
    const normalizedEmail = email.toLowerCase();

    //await saveSubscription(normalizedEmail);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Subscribe error:', err);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
