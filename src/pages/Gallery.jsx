import { images } from '../data/images.js'

function Gallery() {
  return (
    <section>
      <h1>Image Gallery</h1>
      <p className="muted">
        {images.length} self-hosted raster assets (PNG / JPG / JPEG). Use these
        to test Cloudflare compression and Polish image optimization.
      </p>
      <div className="grid">
        {images.map((img) => (
          <figure key={img.src} className="card">
            <img src={img.src} alt={img.src} loading="lazy" width={img.w} height={img.h} />
            <figcaption>
              <span className="badge">{img.type}</span>
              <code>{img.src}</code>
              <span className="muted">
                {img.w}&times;{img.h}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
