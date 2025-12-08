import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// GemLab Platform - Minimal placeholder for KV Store
// This function deploys successfully but is NOT used by the application
// Application is 100% frontend-only

serve(async () => {
  return new Response(
    JSON.stringify({ 
      status: 'disabled',
      message: 'KV Store not used - application is frontend-only',
      version: '1.0',
      deployed: true
    }),
    { 
      headers: { 'Content-Type': 'application/json' },
      status: 200 
    }
  )
})
