import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
);

export function requireAuth(handler) {
    return async (req, res) => {
        const token = req.headers.authorization?.replace('Bearer ', '');

        if (!token) 
            return res.status(401).json({ error: 'No token provided'});
        const { data: { user }, error} = await supabase.auth.getUser(token);

        if (error || !user) 
            return res.status(401).json({ error: 'Invalid or expired token'});
        req.user = user;
        return handler(req, res);
    }
}