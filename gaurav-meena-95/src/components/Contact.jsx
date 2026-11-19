import { useState } from 'react';
import { Section, SectionHeading, Reveal, MailIcon, GitHubIcon, LinkedInIcon, PillLink } from './SiteUI';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatusMsg(null);

    const payload = {
      access_key: 'dd25791c-130c-4214-94d3-44a361cf950d',
      name: formData.name,
      email: formData.email,
      message: formData.message,
      from_name: 'Gaurav Meena Portfolio',
      subject: `New Message from ${formData.name}`,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMsg({ type: 'success', text: 'Message delivered successfully! I will reply shortly.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMsg({ type: 'error', text: 'Problem sending message. Please email me directly.' });
      }
    } catch {
      setStatusMsg({ type: 'error', text: 'Network error. Please email me directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionHeading title="get in touch" />

      <Reveal>
        <div className="rounded-xl border border-portfolio-border bg-portfolio-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-portfolio-border/70 pb-6 mb-6">
            <div>
              <p className="text-[14px] text-portfolio-muted leading-relaxed">
                open to engineering roles, agentic ai, and high-impact software projects.
              </p>
              <p className="text-xs font-mono text-portfolio-muted mt-1 break-all">
                {PERSONAL_INFO.email} · {PERSONAL_INFO.phone}
              </p>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-md bg-portfolio-text px-4 py-2 text-[13px] font-medium text-portfolio-bg transition-colors hover:bg-portfolio-text/90 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <MailIcon className="h-4 w-4" />
              {copied ? 'copied to clipboard' : 'copy email'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-portfolio-muted mb-1">name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="your name"
                  className="w-full rounded-md border border-portfolio-border bg-portfolio-bg px-3 py-2 text-xs text-portfolio-text placeholder:text-portfolio-muted/50 focus:border-white/40 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-portfolio-muted mb-1">email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full rounded-md border border-portfolio-border bg-portfolio-bg px-3 py-2 text-xs text-portfolio-text placeholder:text-portfolio-muted/50 focus:border-white/40 focus:outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-portfolio-muted mb-1">message</label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="write a quick note..."
                className="w-full rounded-md border border-portfolio-border bg-portfolio-bg px-3 py-2 text-xs text-portfolio-text placeholder:text-portfolio-muted/50 focus:border-white/40 focus:outline-none font-mono resize-none"
              />
            </div>

            {statusMsg && (
              <p className={`text-xs font-mono ${statusMsg.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                {statusMsg.text}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="rounded-md border border-portfolio-border px-4 py-2 text-xs font-mono text-portfolio-text hover:border-white/25 hover:bg-white/5 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {submitting ? 'sending...' : 'send message'}
            </button>
          </form>

          {/* Social links row */}
          <div className="mt-8 pt-6 border-t border-portfolio-border/70 flex flex-wrap items-center gap-3">
            <PillLink href={PERSONAL_INFO.socials.github}>
              <GitHubIcon className="h-3.5 w-3.5" /> github
            </PillLink>
            <PillLink href={PERSONAL_INFO.socials.linkedin}>
              <LinkedInIcon className="h-3.5 w-3.5" /> linkedin
            </PillLink>
            <PillLink href={PERSONAL_INFO.socials.leetcode}>
              leetcode
            </PillLink>
            <PillLink href={PERSONAL_INFO.socials.codeforces}>
              codeforces
            </PillLink>
            <PillLink href={PERSONAL_INFO.socials.codechef}>
              codechef
            </PillLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
