# CSASHOPONLINE (`csashoponline.com`)

**One Message. Three Audiences. The Same Savior.**

Official Astro + Tailwind CSS website for **The Divine Blueprint Series** by **Christine A.** -- 30-day biblical journeys revealing Jesus in the Old Testament, tailored specifically for:

1. **The Spiritual Seeker** (`#D4AF37` Deep Gold) -- Evidence, Messianic prophecies, and ancient patterns.
2. **The New Believer** (`#6B8E7B` Sage Green) -- Warm, grace-filled, 5-minute daily readings.
3. **The Children's Edition (Ages 4-8)** (`#4A90E2` Sky Blue) -- Clean, interactive biblical truth, coloring, and object lessons.

## Deploying on Cloudflare Pages

1. Log in to your **Cloudflare Dashboard** -> **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
2. Select `blossomjc7/CSASHOPONLINEBOOKS`.
3. Configure Build Settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Environment variables**: `NODE_VERSION` = `20`
4. Click **Save and Deploy**.
5. Under **Custom domains**, add `csashoponline.com` and `www.csashoponline.com`.