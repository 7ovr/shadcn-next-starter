import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

import { ImageResponse } from 'next/og'

import { getSiteUrl } from '@/lib/site-url'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

// The light theme from src/app/globals.css: Satori resolves no CSS variables, so the card repeats the values.
const INK = '#0a0a0a'
const MUTED = '#737373'
const LINE = '#e5e5e5'
const BUTTON = '#171717'

async function loadGoogleFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}`,
    // An old user agent gets a TTF, which Satori reads; newer ones get WOFF2, which it does not.
    {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)' },
    },
  ).then((response) => response.text())
  const src = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1]
  if (!src) throw new Error(`Font not found: ${family} ${weight}`)
  return fetch(src).then((response) => response.arrayBuffer())
}

type LoadedFont = { name: string; data: ArrayBuffer; weight: 400 | 700; style: 'normal' }

let fontsPromise: Promise<LoadedFont[]> | null = null

function getFonts(): Promise<LoadedFont[]> {
  fontsPromise ??= (async () => {
    try {
      const [heading, brand, regular] = await Promise.all([
        loadGoogleFont('Oxanium', 700),
        loadGoogleFont('Syne', 700),
        loadGoogleFont('Oxanium', 400),
      ])
      return [
        { name: 'Oxanium', data: heading, weight: 700, style: 'normal' },
        { name: 'Syne', data: brand, weight: 700, style: 'normal' },
        { name: 'Oxanium', data: regular, weight: 400, style: 'normal' },
      ] satisfies LoadedFont[]
    } catch {
      // A failed font fetch must fall back to the default face, not break the build.
      return []
    }
  })()
  return fontsPromise
}

// The card is drawn at build time, before the site serves anything, so the mark is read off disk.
let markPromise: Promise<string> | null = null

function getMark(): Promise<string> {
  markPromise ??= readFile(join(process.cwd(), 'public', 'brand', '7ovr-mark.svg')).then(
    (svg) => `data:image/svg+xml;base64,${svg.toString('base64')}`,
  )
  return markPromise
}

export type OgImageOptions = {
  title: string
  eyebrow?: string
  description?: string
  cta?: string
}

export async function createOgImage({
  title,
  eyebrow,
  description,
  cta = 'Get The Starter',
}: OgImageOptions) {
  const [fonts, mark] = await Promise.all([getFonts(), getMark()])
  const domain = getSiteUrl().replace(/^https?:\/\//, '')

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        backgroundImage:
          'radial-gradient(circle at 88% 6%, rgba(23,23,23,0.07), transparent 42%), radial-gradient(circle at 4% 100%, rgba(10,10,10,0.05), transparent 38%)',
        padding: 72,
        fontFamily: 'Oxanium',
        color: INK,
      }}
    >
      {/* The mark, oversized and faint, so the card reads as 7Ovr even at timeline size. */}
      <img
        src={mark}
        width={520}
        height={520}
        alt=""
        style={{ position: 'absolute', top: 120, right: -110, opacity: 0.06 }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src={mark} width={40} height={40} alt="" />
        <span style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: 34 }}>7Ovr</span>
        <span style={{ fontSize: 30, color: LINE }}>/</span>
        <span style={{ fontWeight: 400, fontSize: 28, color: MUTED }}>Landing</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {eyebrow ? (
          <span style={{ fontWeight: 400, fontSize: 22, letterSpacing: 3, color: MUTED }}>
            {eyebrow.slice(0, 40).toUpperCase()}
          </span>
        ) : null}
        <span
          style={{
            fontWeight: 700,
            fontSize: 64,
            lineHeight: 1.08,
            letterSpacing: -2.5,
            maxWidth: 1056,
          }}
        >
          {title}
        </span>
        {description ? (
          <span
            style={{
              fontWeight: 400,
              fontSize: 25,
              lineHeight: 1.45,
              color: MUTED,
              maxWidth: 840,
            }}
          >
            {description.slice(0, 120)}
          </span>
        ) : null}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: BUTTON,
            color: '#ffffff',
            borderRadius: 12,
            padding: '16px 28px',
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          {cta.slice(0, 36)}
        </div>
        <span style={{ fontWeight: 400, fontSize: 24, color: MUTED }}>{domain}</span>
      </div>

      {/* A neutral rule along the bottom edge, so the card holds its shape on white timelines. */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 10,
          backgroundImage: `linear-gradient(90deg, ${INK}, ${LINE})`,
        }}
      />
    </div>,
    { ...OG_SIZE, ...(fonts.length ? { fonts } : {}) },
  )
}
