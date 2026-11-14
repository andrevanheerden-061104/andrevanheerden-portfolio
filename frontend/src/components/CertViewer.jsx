import { useEffect, useState } from 'react'

/* Opens a certificate PDF in a pop-up over the page (no new tab).
   Phones that can't show PDFs inline fall back to the image version. */
export default function CertViewer({ pdf, img, title = 'Certificate', className = '', children }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open && (
        <div className="cert-modal" role="dialog" aria-modal="true" aria-label={title} onClick={() => setOpen(false)}>
          <div className="cert-modal-box" onClick={(e) => e.stopPropagation()} onContextMenu={(e) => e.preventDefault()}>
            <div className="cert-modal-bar">
              <span>{title}</span>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close">✕</button>
            </div>
            <object data={`${pdf}#toolbar=0&navpanes=0&view=Fit`} type="application/pdf" className="cert-modal-pdf" aria-label={title}>
              <img src={img} alt={title} className="cert-modal-img" />
            </object>
          </div>
        </div>
      )}
    </>
  )
}
