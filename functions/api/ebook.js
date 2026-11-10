const MASTER_CODES = ["CSA2026", "BLUEPRINT2026", "CHRISTINE75", "DIVINE75"];

function computeBookCode(slug) {
    let hash = 0;
    const str = "CSA_SECRET_2026_" + slug;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    const codeNum = Math.abs(hash % 9000) + 1000;
    return `CSA-${codeNum}`;
}

export async function onRequest(context) {
    const { request } = context;
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    };

    if (request.method === "OPTIONS") {
        return new Response("", { status: 200, headers: corsHeaders });
    }

    const urlObj = new URL(request.url);
    const slug = (urlObj.searchParams.get("slug") || "").trim();
    const code = (urlObj.searchParams.get("code") || "").trim().toUpperCase();
    const action = urlObj.searchParams.get("action") || "verify";

    if (!slug) {
        return new Response(JSON.stringify({ error: "Missing book slug" }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders }
        });
    }

    const expectedBookCode = computeBookCode(slug);
    const isValid = MASTER_CODES.includes(code) || code === expectedBookCode || code === "UNLOCK30";

    if (action === "verify") {
        if (isValid) {
            return new Response(JSON.stringify({
                unlocked: true,
                slug,
                pdfUrl: `/manuscripts/pdfs/${slug}.pdf`,
                magicLink: `${urlObj.origin}/books/${slug}/?unlock=${expectedBookCode}#interactive-reader`,
                bookCode: expectedBookCode
            }), {
                status: 200,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            });
        } else {
            return new Response(JSON.stringify({
                unlocked: false,
                error: "Invalid unlock code. Please check your purchase confirmation email or use your Magic Link."
            }), {
                status: 403,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            });
        }
    }

    return new Response(JSON.stringify({ error: "Unknown action" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
    });
}
