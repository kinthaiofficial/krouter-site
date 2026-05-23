export const en = {
  nav: {
    agents: 'Agents',
    providers: 'Providers',
    download: 'Download',
    docs: 'Docs',
    github: 'GitHub',
  },
  hero: {
    eyebrow: 'Intelligent LLM Router',
    h1: 'Save 50–80% on every AI agent request',
    sub: 'krouter routes Claude Code, Cursor, OpenClaw, and Hermes to the cheapest available provider — automatically. No config. No re-entering keys.',
    cta_primary: 'Download for macOS',
    cta_secondary: 'View on GitHub',
  },
  features: {
    heading: 'Everything you need',
    sub: 'One proxy. Every provider. Zero extra configuration.',
    items: [
      {
        title: 'Smart Routing',
        desc: 'Saver / Balanced / Quality presets. Requests route within the same protocol — no conversion, no information loss.',
      },
      {
        title: 'Zero Config',
        desc: 'krouter inherits your existing agent API keys and endpoints automatically. Nothing to re-enter.',
      },
      {
        title: 'Budget Control',
        desc: 'Set a daily hard stop. SSE alerts fire at 80% and 95% so you never get a surprise bill.',
      },
      {
        title: 'Free Token Hub',
        desc: 'Curated directory of free-tier providers. One-click setup — no credit card required.',
      },
      {
        title: 'Fully Private',
        desc: 'Runs locally. API keys are never stored on disk. Zero data uploaded. MIT license.',
      },
    ],
  },
  agents: {
    heading: 'Works with your existing agents',
    sub: 'krouter inherits agent configurations automatically — zero re-configuration.',
    note: 'Any agent that speaks OpenAI-compatible or Anthropic-compatible protocol works.',
  },
  providers: {
    heading: 'Routes across all major providers',
    sub: 'krouter picks the cheapest provider that fits the request — in real time.',
  },
  how: {
    heading: 'Up and running in two steps',
    steps: [
      {
        num: '01',
        title: 'Install krouter',
        desc: 'Download and run. krouter auto-connects to your existing Claude Code, Cursor, and other agent configurations in seconds.',
      },
      {
        num: '02',
        title: 'Every request routes automatically',
        desc: 'Each API call is evaluated against all connected providers in real time. The cheapest compatible option wins.',
      },
    ],
  },
  cta: {
    heading: 'Start saving today',
    sub: 'Free and open source. No account required.',
    download: 'Download krouter',
    github: 'Star on GitHub',
  },
  footer: {
    copy: '© 2026 kinthai.ai',
    github: 'GitHub',
    license: 'MIT License',
    tagline: 'Intelligent LLM routing for AI agents.',
  },
  download: {
    heading: 'Download krouter',
    sub: 'Available for macOS, Linux, and Windows.',
    latest: 'Latest release',
    macos: 'macOS (DMG)',
    linux_deb: 'Linux (DEB)',
    linux_rpm: 'Linux (RPM)',
    windows: 'Windows (EXE)',
    checksums: 'Checksums',
    changelog: 'View changelog',
  },
  changelog: {
    heading: 'Changelog',
    sub: 'Release notes and version history.',
  },
  docs: {
    heading: 'Getting Started',
  },
} as const;

export type I18nKeys = typeof en;
