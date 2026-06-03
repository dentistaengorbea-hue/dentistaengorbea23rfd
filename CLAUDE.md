# Clínica Dental Gorbea — Project Guide

## Business Info
| Campo | Valor |
|-------|-------|
| WhatsApp | `56977491560` — usar en todos los links `wa.me` |
| Dirección | Arturo Prat 896, Gorbea, La Araucanía |
| Horario | Lunes–Sábado 10:00–21:00 |
| Fundadores | Dr. Ignacio San Martín · Dr. Nicolás Gallardo |
| Servicios core | Diseño de sonrisas (adultos +40), Implantes dentales, Odontología integral |

## Design Tokens
| Variable CSS | Valor | Uso |
|-------------|-------|-----|
| `--bg` | `#000000` | Fondo principal |
| `--bg-section` | `#080808` | Secciones alternas |
| `--bg-card` | `#111111` | Cards |
| `--accent` | `#f19f05` | CTAs, highlights |
| `--accent-logo` | `#7a6200` | Color del logo |
| `--accent-mid` | `#c9a84c` | Tercer color armónico |
| `--text` | `#f2f2f2` | Encabezados, texto principal |
| `--text-muted` | `#999999` | Cuerpo de texto |

## File Structure
```
index.html       — landing page principal
equipo.html      — página del equipo
css/styles.css   — todos los estilos
js/main.js       — interactividad (nav móvil, scroll, animaciones)
```

## SEO — Reglas obligatorias
- El `<h1>` de `index.html` debe contener "dentista gorbea" o "clínica dental gorbea" de forma natural
- Cada sección (`#servicios`, `#nosotros`, `#contacto`) necesita `<h2>` con al menos una keyword de la tabla
- Cards de servicios usan `<h3>` con "Gorbea" o la especialidad explícita
- `<title>` y `<meta description>` de cada página incluyen keywords primarias + "gorbea"
- Escribir en español chileno natural — no forzar keywords
- `equipo.html`: los `<h2>` y `<h3>` mencionan "dentistas gorbea" o "equipo odontológico gorbea"

## Target Keywords
| Intención | Keywords |
|-----------|----------|
| Servicio + ciudad | dentista gorbea, clínica dental gorbea, odontólogo gorbea |
| Servicio específico | implantes dentales gorbea, diseño de sonrisa gorbea, blanqueamiento dental gorbea |
| Urgencia / precio | dentista urgencia gorbea, dentista económico gorbea, hora dental gorbea |
| Adultos | dentista adultos mayores gorbea, prótesis dental gorbea, rehabilitación oral gorbea |
| Zona | dentista en gorbea, dentista La Araucanía |

## WhatsApp Message Templates
- General: `https://wa.me/56977491560?text=Hola,%20quiero%20agendar%20una%20hora%20dental%20en%20Gorbea`
- Diseño de sonrisas: `https://wa.me/56977491560?text=Hola,%20me%20interesa%20el%20diseño%20de%20sonrisas`
- Implantes: `https://wa.me/56977491560?text=Hola,%20me%20interesa%20conocer%20sobre%20implantes%20dentales`
