import Link from 'next/link';

const sections = [
  {
    title: 'Getting Started',
    description: 'Create your account and upload your first file in minutes.',
    href: '/docs/getting-started',
    label: 'Start here',
  },
  {
    title: 'User Guide',
    description: 'Manage files, domains, teams, and account settings.',
    href: '/docs/user-guide',
    label: 'Explore',
  },
  {
    title: 'Integrations',
    description: 'Connect ShareX, Flicker, Flameshot, PowerShell, Python, and more.',
    href: '/docs/integrations',
    label: 'View integrations',
  },
  {
    title: 'API Reference',
    description: 'Complete REST API documentation for files, domains, and account management.',
    href: '/docs/api',
    label: 'API docs',
  },
  {
    title: 'Security',
    description: 'VirusTotal scanning, HIBP checks, password protection, and encryption.',
    href: '/docs/security',
    label: 'Security docs',
  },
  {
    title: 'Self-Hosting',
    description: 'Deploy your own Emberly instance on any infrastructure.',
    href: '/docs/self-hosting',
    label: 'Self-host',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-5xl px-4 py-16 mx-auto">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium tracking-wide uppercase border rounded-full border-fd-border text-fd-muted-foreground">
          Open Source · File Sharing · Self-hostable
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-fd-foreground">
          Emberly Documentation
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-fd-muted-foreground">
          Everything you need to upload, share, and manage files from quick screenshots to large documents, with custom domains and full API access.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <Link
            href="/docs/api"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-fd-border text-fd-foreground font-medium text-sm hover:bg-fd-accent transition-colors"
          >
            API Reference
          </Link>
        </div>
      </div>

      {/* Section grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="flex flex-col gap-3 p-5 transition-colors border group rounded-xl border-fd-border bg-fd-card hover:border-fd-ring hover:bg-fd-accent"
          >
            <span className="text-base font-semibold transition-colors text-fd-foreground group-hover:text-fd-primary">
              {s.title}
            </span>
            <span className="flex-1 text-sm leading-relaxed text-fd-muted-foreground">
              {s.description}
            </span>
            <span className="mt-auto text-xs font-medium transition-colors text-fd-muted-foreground group-hover:text-fd-primary">
              {s.label} →
            </span>
          </Link>
        ))}
      </div>

      {/* Quick links row */}
      <div className="pt-8 mt-12 border-t border-fd-border">
        <p className="mb-4 text-xs font-medium tracking-wide uppercase text-fd-muted-foreground">
          Quick links
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Plans & Pricing', href: '/docs/getting-started/plans-overview' },
            { label: 'Feature Matrix', href: '/docs/getting-started/feature-matrix' },
            { label: 'Teams & Squads', href: '/docs/user-guide/teams-and-squads' },
            { label: 'Flicker Desktop App', href: '/docs/integrations/flicker' },
            { label: 'Webhooks', href: '/docs/integrations/webhooks' },
            { label: 'Contributing', href: '/docs/self-hosting/contributing' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm rounded-md border border-fd-border text-fd-muted-foreground hover:text-fd-foreground hover:border-fd-ring transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer nudge */}
      <p className="mt-10 text-sm text-center text-fd-muted-foreground">
        Something missing?{' '}
        <a
          href="https://github.com/EmberlyOSS/Website/issues"
          className="underline transition-colors underline-offset-2 hover:text-fd-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue on GitHub
        </a>
      </p>
    </main>
  );
}

