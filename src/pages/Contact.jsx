import { contacts } from '../data/contacts.js'

function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p className="muted">
        {contacts.length} randomly generated email addresses rendered as{' '}
        <code>mailto:</code> links &mdash; used to test Cloudflare Scrape Shield
        email obfuscation.
      </p>
      <ul className="contacts">
        {contacts.map((c) => (
          <li key={c.email} className="card">
            <strong>{c.name}</strong>
            <a href={`mailto:${c.email}`}>{c.email}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
