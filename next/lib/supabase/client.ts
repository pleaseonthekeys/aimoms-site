/**
 * Public Supabase client — uses the anon/publishable key.
 *
 * Safe to use anywhere (Server or Client Components). All access goes through
 * Row Level Security, so this key being public is by design.
 *
 * For privileged writes (e.g. form submissions), use the server client instead:
 * `@/lib/supabase/server`.
 */
import { createClient } from '@supabase/supabase-js';

export function createPublicClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY — check .env.local',
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey);
}
