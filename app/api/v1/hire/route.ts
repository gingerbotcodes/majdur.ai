import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { task, bounty, type = "Digital" } = body;
    const authHeader = req.headers.get('authorization');

    // Basic Auth Check (Placeholder for real API Key validation)
    if (!authHeader || !authHeader.startsWith("Bearer sk_")) {
      return NextResponse.json({ error: "Unauthorized. Missing or invalid API Key." }, { status: 401 });
    }

    if (!task || !bounty) {
      return NextResponse.json({ error: "Missing 'task' or 'bounty' fields." }, { status: 400 });
    }

    // Insert Task into DB
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ 
        title: task, 
        bounty: parseInt(bounty), 
        type: type,
        status: 'OPEN'
      }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ 
      success: true, 
      job_id: data.id, 
      status: "pending_human",
      message: "Task dispatched to the workforce." 
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
