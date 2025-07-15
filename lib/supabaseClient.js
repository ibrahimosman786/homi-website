import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gfaructytjlyqgdksmkq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmYXJ1Y3R5dGpseXFnZGtzbWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1NDM0OTcsImV4cCI6MjA2ODExOTQ5N30.c_v8Y3NxIoMnZOQxx4Dx8GNPFDAZo9DyHs9tDqTlGSw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 