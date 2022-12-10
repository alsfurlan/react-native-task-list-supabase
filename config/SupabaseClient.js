import { setupURLPolyfill } from "react-native-url-polyfill";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { createClient } from "@supabase/supabase-js";

setupURLPolyfill();

const supabaseUrl = "https://nyjoklqzdikupddjslzn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55am9rbHF6ZGlrdXBkZGpzbHpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3MDIwNTAsImV4cCI6MTk4NjI3ODA1MH0.KlSx6-Q35qu7z4KHTewKTqwpG19aXsKJMjYvtW2oGEA";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    detectSessionInUrl: false,
    storage: AsyncStorage,
  },
});

export default supabase;
