export async function onRequest(context) {
    const { request } = context;
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Max-Age": "86400"
    };

    if (request.method === "OPTIONS") {
        return new Response("", { status: 200, headers: corsHeaders });
    }

    try {
        let texts = [];
        let targetLang = "en";

        if (request.method === "POST") {
            const body = await request.json();
            texts = body.texts || [];
            targetLang = body.lang || "en";
        } else {
            const urlObj = new URL(request.url);
            const single = urlObj.searchParams.get("text");
            if (single) texts = [single];
            targetLang = urlObj.searchParams.get("lang") || "en";
        }

        if (targetLang === "en" || texts.length === 0) {
            return new Response(JSON.stringify({ translated: texts }), {
                status: 200,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            });
        }

        const translated = await Promise.all(texts.map(async (txt) => {
            if (!txt) return "";
            const gUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${encodeURIComponent(targetLang)}&dt=t&q=${encodeURIComponent(txt)}`;
            const res = await fetch(gUrl, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                }
            });
            if (!res.ok) return txt;
            const data = await res.json();
            if (Array.isArray(data) && Array.isArray(data[0])) {
                return data[0].map(part => part[0]).join("");
            }
            return txt;
        }));

        return new Response(JSON.stringify({ translated }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "public, max-age=86400",
                ...corsHeaders
            }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json", ...corsHeaders }
        });
    }
}