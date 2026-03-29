import Link from 'next/link';

const sections = [
  {
    title: 'Getting Started',
    description: 'Create your account and upload your first file in minutes.',
    href: '/docs/getting-started',
    icon: '🚀',
  },
  {
    title: 'User Guide',
    description: 'Learn how to manage files, domains, and account settings.',
    href: '/docs/user-guide',
    icon: '📖',
  },
  {
    title: 'Integrations',
    description: 'Connect ShareX, Flameshot, PowerShell, Python, and more.',
    href: '/docs/integrations',
    icon: '🔗',
  },
  {
    title: 'API Reference',
    description: 'Programmatic access to file uploads and domain management.',
    href: '/docs/api',
    icon: '⚙️',
  },
  {
    title: 'Security',
    description: 'VirusTotal scanning, HIBP checks, and password protection.',
    href: '/docs/security',
    icon: '🔒',
  },
  {
    title: 'Self-Hosting',
    description: 'Deploy your own Emberly instance on any infrastructure.',
    href: '/docs/self-hosting',
    icon: '🖥️',
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col flex-1 w-full max-w-5xl px-4 py-16 mx-auto">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium border rounded-full border-fd-border text-fd-muted-foreground">
          Open Source · File Sharing · Self-hostable
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl text-fd-foreground">
          Emberly Documentation
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-fd-muted-foreground">
          Everything you need to upload, share, and manage files from quick
          screenshots to large documents, with custom domains and API access.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Get Started →
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-fd-border text-fd-foreground font-medium text-sm hover:bg-fd-accent transition-colors"
          >
            Browse Docs
          </Link>
        </div>
      </div>

      {/* Section grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="flex flex-col gap-2 p-5 transition-colors border group rounded-xl border-fd-border bg-fd-card hover:border-fd-ring hover:bg-fd-accent"
          >
            <span className="text-2xl">{s.icon}</span>
            <span className="font-semibold transition-colors text-fd-foreground group-hover:text-fd-primary">
              {s.title}
            </span>
            <span className="text-sm leading-relaxed text-fd-muted-foreground">
              {s.description}
            </span>
          </Link>
        ))}
      </div>

      {/* Footer nudge */}
      <p className="mt-12 text-sm text-center text-fd-muted-foreground">
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

