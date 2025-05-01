import Constants from 'expo-constants';

export const supabaseUrl: string =
  Constants.expoConfig!.extra!.EXPO_PUBLIC_SUPABASE_URL;
export const supabaseAnon: string =
  Constants.expoConfig!.extra!.EXPO_PUBLIC_SUPABASE_ANON_KEY;

export const colors = {
  primary: '#808080',
  secondary: '#000',
  background: '#fff',
};
