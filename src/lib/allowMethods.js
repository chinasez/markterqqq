export function allowMethods(methods) {
    return function (handler) {
        return async (req, res) => {
            if (!methods.includes(req.method)) {
                res.setHeader('Allow', methods);
                return res.status(405).json({error : `Method ${req.method} Not Allowed ` });
            }

            return handler(req, res);
        }
    }
}