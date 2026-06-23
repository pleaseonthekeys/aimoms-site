/**
 * Server-only Supabase client — uses the service_role/secret key, which BYPASSES
 * Row Level Security. Use ONLY in app/api routes (e.g. persisting form submissions).
 *
 * The `import 'server-only'` below makes this module fail the build if it is ever
 * imported into client code — a hard guard so the secret key can never reach the browser.
 */
import 'server-only';
import { createClient } from '@supabase/supabase-js';

export function createServiceClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY — check .env.local',
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
