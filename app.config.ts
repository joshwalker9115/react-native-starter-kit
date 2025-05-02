import { DotenvConfigOutput } from 'dotenv';
import 'dotenv/config';

export default ({ config }: { config: DotenvConfigOutput }) => ({
  ...config,
  extra: {
    // These must match your .env to be available at runtime
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    "eas": {
      "projectId": process.env.PROJECT_ID,
    },
  },
});
