import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function useSession() {
    const [session, setSession] = useState(null);
    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
        };

        getSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        return () => subscription.unsubscribe();
    }, []);
    return session;
}