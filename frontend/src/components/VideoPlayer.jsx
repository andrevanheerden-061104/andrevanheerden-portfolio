import { useEffect, useRef, useState } from 'react'

const fmt = (t) => {
  if (!Number.isFinite(t)) return '0:00'
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

const Play = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
)
const Pause = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" /></svg>
)
const Speaker = ({ muted }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
    {muted ? (
      <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    ) : (
      <path d="M15.5 9a4 4 0 010 6M18 6.5a7.5 7.5 0 010 11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    )}
  </svg>
)
const Expand = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* A video with only play/pause, seeking, volume and full screen:
   no download, no playback speed, no picture-in-picture. */
export default function VideoPlayer({ src, poster, title, caption }) {
  const wrap = useRef(null)
  const vid = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)
  const [time, setTime] = useState(0)
  const [dur, setDur] = useState(0)
  const [vol, setVol] = useState(1)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const v = vid.current
    if (!v) return undefined
    const on = {
      play: () => { setPlaying(true); setStarted(true) },
      pause: () => setPlaying(false),
      ended: () => setPlaying(false),
      timeupdate: () => setTime(v.currentTime),
      loadedmetadata: () => setDur(v.duration),
      durationchange: () => setDur(v.duration),
      volumechange: () => { setVol(v.volume); setMuted(v.muted) },
    }
    Object.entries(on).forEach(([k, f]) => v.addEventListener(k, f))
    return () => Object.entries(on).forEach(([k, f]) => v.removeEventListener(k, f))
  }, [])

  const toggle = () => {
    const v = vid.current
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }
  const seek = (e) => {
    const v = vid.current
    v.currentTime = (Number(e.target.value) / 1000) * (v.duration || 0)
  }
  const setVolume = (e) => {
    const v = vid.current
    v.volume = Number(e.target.value)
    v.muted = v.volume === 0
  }
  const toggleMute = () => {
    const v = vid.current
    v.muted = !v.muted
    if (!v.muted && v.volume === 0) v.volume = 0.6
  }
  const fullscreen = () => {
    const el = wrap.current
    if (document.fullscreenElement) document.exitFullscreen?.()
    else if (el.requestFullscreen) el.requestFullscreen()
    else vid.current.webkitEnterFullscreen?.() // iPhone
  }
  const onKey = (e) => {
    if (e.key === ' ' || e.key === 'k') { e.preventDefault(); toggle() }
    if (e.key === 'ArrowRight') vid.current.currentTime += 5
    if (e.key === 'ArrowLeft') vid.current.currentTime -= 5
  }

  const pct = dur ? (time / dur) * 100 : 0

  return (
    <figure className={`vp ${playing ? 'is-playing' : ''} ${started ? 'is-started' : ''}`}>
      <div ref={wrap} className="vp-screen" onKeyDown={onKey}>
        <video
          ref={vid}
          src={src}
          poster={poster}
          playsInline
          preload="metadata"
          controlsList="nodownload noplaybackrate noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          onClick={toggle}
          aria-label={title}
        />
        <button type="button" className="vp-big" onClick={toggle} aria-label={playing ? 'Pause' : `Play ${title}`}>
          {playing ? <Pause /> : <Play />}
        </button>
        <div className="vp-bar">
          <button type="button" className="vp-btn" onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>
            {playing ? <Pause /> : <Play />}
          </button>
          <span className="vp-time">{fmt(time)}</span>
          <input
            className="vp-seek"
            type="range"
            min="0"
            max="1000"
            step="1"
            value={Math.round(pct * 10)}
            onChange={seek}
            style={{ '--p': `${pct}%` }}
            aria-label="Seek"
          />
          <span className="vp-time">{fmt(dur)}</span>
          <div className="vp-vol">
            <button type="button" className="vp-btn" onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'}>
              <Speaker muted={muted || vol === 0} />
            </button>
            <input
              className="vp-volume"
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : vol}
              onChange={setVolume}
              style={{ '--p': `${(muted ? 0 : vol) * 100}%` }}
              aria-label="Volume"
            />
          </div>
          <button type="button" className="vp-btn" onClick={fullscreen} aria-label="Full screen">
            <Expand />
          </button>
        </div>
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
