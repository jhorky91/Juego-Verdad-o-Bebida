import { create } from "zustand";
import { supabase } from "../supabase/supabase.config.jsx";

export const useAuthStore = create(() => ({
  loginGoogle: async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  },
  logout: async () => {
    await supabase.auth.signOut();
  },
}));
