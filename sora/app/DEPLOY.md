# Sora · Deploy Guide

Cómo poner Sora en un URL público que un amigo pueda abrir, y cómo prepararla para App Store / Play Store.

---

## 1 · Compartir con un amigo en 5 minutos (Netlify drag-and-drop)

La forma más rápida. **No requiere terminal, no requiere cuenta paga.**

1. Abre https://app.netlify.com/drop en tu navegador.
2. Arrastra la carpeta completa `/Users/jacobeid/life/lacompania/sora/app/` sobre la zona de drop.
3. Espera ~30 segundos. Netlify te da un URL tipo `https://radiant-marigold-12345.netlify.app`.
4. **Renombra el sitio** (opcional) en Site Settings → Site Name → escribe `sora-panama` → quedará `https://sora-panama.netlify.app`.
5. Comparte el URL por WhatsApp/iMessage. Tu amigo abre, ve la app real.

**Para que se vea como app nativa en su teléfono:**

- **iPhone (Safari):** Abre el URL → toca el ícono de compartir (cuadrito con flecha) → "Añadir a pantalla de inicio" → el ícono de SORA aparece en home, abre en pantalla completa sin barra de navegador.
- **Android (Chrome):** Abre el URL → Chrome muestra banner "Instalar" automáticamente → tap → ícono en home.

Esto **ya es funcionalmente una app**: trabaja offline (service worker), tiene ícono, splash, pantalla completa, vibración háptica, cámara cuando se necesite. La única diferencia con App Store es la distribución.

---

## 2 · Deploy con un nombre permanente (Cloudflare Pages · gratis)

Si quieres un URL estable que no cambie cada vez que actualizas:

```bash
# Una vez:
brew install cloudflared

# Cada deploy:
cd /Users/jacobeid/life/lacompania/sora/app
npx wrangler pages deploy . --project-name=sora
```

Resultado: `https://sora.pages.dev` o un dominio custom si conectas uno.

**Alternativa Netlify CLI** (mejor si ya usaste drag-and-drop):

```bash
brew install netlify-cli
cd /Users/jacobeid/life/lacompania/sora/app
netlify deploy --prod --dir .
```

---

## 3 · Dominio propio (sora.lacompania.io o similar)

Una vez deployado (Netlify o Cloudflare):

1. Compra el dominio (Cloudflare Registrar es lo más barato; Namecheap también).
2. En Netlify/Cloudflare Pages → Domain Settings → Add custom domain → escribe `sora.tudominio.com`.
3. Cambia los DNS (CNAME) según las instrucciones que te muestren. ~10 min para propagar.
4. HTTPS se configura solo (Let's Encrypt automático).

Sugerencias de dominio:
- `sora.lacompania.io`
- `sorapanama.com`
- `experienciasora.com`

---

## 4 · App Store + Play Store (PWA wrap con Capacitor)

La app actual es una **PWA** (Progressive Web App). Para poner el mismo código en App Store y Play Store, la opción más rápida y mantenible en 2026 es **Capacitor** (Ionic). No hay que reescribir nada — Capacitor envuelve la PWA en un contenedor nativo.

### Setup inicial (una vez)

```bash
cd /Users/jacobeid/life/lacompania/sora
npm init -y
npm install @capacitor/core @capacitor/cli
npx cap init "Sora" "io.lacompania.sora" --web-dir=app
npx cap add ios
npx cap add android
```

### Cada vez que actualices la app

```bash
# Copia los assets actualizados al proyecto nativo
npx cap copy

# Abre Xcode (iOS) o Android Studio
npx cap open ios     # → archive → upload a App Store Connect
npx cap open android # → build APK → upload a Play Console
```

### Costos y tiempos

| Plataforma | Cuota anual | Tiempo de revisión |
|---|---|---|
| Apple App Store | $99/año (Apple Developer) | 1-3 días primera vez |
| Google Play | $25 una vez | ~3 horas |

### Lo que App Store / Play va a pedir

- **Capturas**: 6.7" (iPhone 14 Pro Max) y 6.5" (Plus models). Genera con la galería del preview en pantalla completa.
- **Descripción** (4000 chars): copia desde `events-playbook.html` el contenido de la sección "Filosofía".
- **Privacy policy URL**: requerido. Página estática simple. Puedo generarte una.
- **Sign-in con Apple**: solo si tienes login social (no es el caso ahora).
- **Permisos**: Cámara (cuando uses scanner), Ubicación (cuando uses la pantalla "Cerca"), Notificaciones.

---

## 5 · Alternativa: TestFlight para beta privada

Si no quieres pasar revisión de App Store todavía (formato cambia rápido), distribuye por **TestFlight** a un grupo de hasta 10,000 usuarios con solo email:

1. Apple Developer ($99/año, necesario)
2. Capacitor → `npx cap open ios` → Xcode → Archive
3. Upload → App Store Connect → TestFlight tab → invita por email
4. Tus amigos reciben link → instalan TestFlight gratis → abren tu app

Ventajas: revisión es 1 día, no permanente. Para iterar rápido con los primeros 100 usuarios beta antes del App Store oficial es perfecto.

---

## 6 · Checklist pre-deploy

Antes de compartir el URL público:

- [ ] Cambiar `SORA-2026` por un código real privado (en `index.html`, función `checkInvite`)
- [ ] Cambiar el nombre default "Abraham" si no eres tú quien hace la demo
- [ ] Verificar que el manifest.webmanifest tenga el `start_url` correcto
- [ ] Probar "Añadir a pantalla de inicio" en iPhone y Android propios
- [ ] Probar que las cards de Cerca y Conecta funcionen con touch (no solo mouse)
- [ ] Verificar que el modal de video se cierra correctamente
- [ ] Hacer fix de Localización: actualmente es mock, antes de prod conectar a `navigator.geolocation`
- [ ] Decidir si los precios y eventos son reales o seguir demo data
- [ ] Verificar service worker funciona offline (toggle Airplane Mode en iPhone)

---

## 7 · Backend (cuando esté listo)

La PWA actual es 100% client-side (localStorage). Para que dos usuarios vean los mismos eventos / RSVPs / matches reales, necesitarás backend. Opciones rankeadas por velocidad:

1. **Supabase** (~2 días para llegar a v1): Postgres + auth + realtime + storage gratis hasta 500MB. Sirve para los próximos 5000 usuarios.
2. **Convex** (~1 día): backend full TypeScript con realtime nativo. Más caro a escala pero más rápido para prototipo.
3. **Firebase** (~2 días): la opción Google. Funciona bien pero vendor lock-in.

Yo recomiendo **Supabase**. Schema inicial necesario:

```sql
-- profiles
create table profiles (id uuid pk, name text, bio text, prefs jsonb, party_type text, party_size int, created_at timestamptz);

-- events
create table events (id text pk, name text, where text, dates daterange, capacity int, price_cents int, status text);

-- rsvps
create table rsvps (id uuid pk, profile_id uuid, event_id text, attendance text, transport text, room text, paid bool, created_at timestamptz);

-- experiences
create table experiences (id text pk, name text, category text, dur_hours numeric, price_cents int, location text, video_url text, included jsonb);

-- bookings (for experiences)
create table bookings (id uuid pk, profile_id uuid, experience_id text, status text, when_at timestamptz);

-- matches (Conecta)
create table swipes (id uuid pk, swiper_id uuid, target_id uuid, event_id text, direction text, created_at timestamptz);
create table matches (id uuid pk, a uuid, b uuid, event_id text, matched_at timestamptz);
```

Total time de PWA → producción real: **~5-7 días con un desarrollador**.

---

## 8 · El path recomendado

**Fase 1 · hoy mismo:** Drag-drop a Netlify → comparte URL con 5 amigos → recoge feedback en 48h.

**Fase 2 · próxima semana:** Dominio propio + custom URL + service worker activo + ajustes según feedback.

**Fase 3 · próximas 2 semanas:** Capacitor + TestFlight + 50 beta users.

**Fase 4 · próximo mes:** Backend Supabase + App Store oficial + Play Store oficial.

---

*Sora · La Compañía · 2026*
