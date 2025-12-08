import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// GemLab Platform - Minimal placeholder edge function
// This function deploys successfully but is NOT used by the application
// Application uses Supabase Auth natively (client-side)

serve(async () => {
  return new Response(
    JSON.stringify({ 
      message: 'GemLab - Frontend-only application',
      status: 'This edge function is intentionally minimal',
      auth: 'Uses Supabase Auth natively on client-side',
      version: '1.0',
      deployed: true
    }),
    { 
      headers: { 'Content-Type': 'application/json' },
      status: 200 
    }
  )
})
