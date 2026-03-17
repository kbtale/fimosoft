import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = (context, next) => {
    const { pathname } = context.url;

    // Only handle redirection for the root path
    if (pathname === '/') {
        const acceptLanguage = context.request.headers.get('accept-language');
        
        if (acceptLanguage) {
            // Pick the first/primary language tag
            const preferredLang = acceptLanguage.split(',')[0].toLowerCase();
            
            // Check if it's any form of Spanish (es, es-ES, es-VE, etc.)
            if (preferredLang.startsWith('es')) {
                return context.redirect('/es/');
            }
        }
    }

    return next();
};
