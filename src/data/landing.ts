/**
 * Content for the Fadebox landing page, mirrored from the design handoff.
 * Copy is intentional; keep it in sync with product messaging.
 */

/**
 * Primary CTA destinations. The design ships these as anchors; wire them to the
 * real docs/install page and contact/scheduling link when those exist.
 */
export const links = {
  install: "/docs/install", // "Install self-hosted"
  demo: "/contact", // "Request a demo"
  docs: "/docs",
  apiDocs: "/docs/api",
  github: "https://github.com/fadebox",
  contact: "/contact",
};

/**
 * Pricing is a placeholder — the business model is not final. Flip this to
 * `false` to remove the pricing section entirely (also drop the "Pricing" nav
 * link in Nav.astro).
 */
export const showPricing = true;

export interface Feature {
  title: string;
  body: string;
}

export const features: Feature[] = [
  {
    title: "Ephemeral by design",
    body: "Spin up an isolated copy of your whole stack per branch, dev, or demo — destroy it when done.",
  },
  {
    title: "Preview URL per instance",
    body: "Every service gets {instance}-{service}.your-domain with wildcard TLS via built-in ingress.",
  },
  {
    title: "Compose-native templates",
    body: "Service templates are the Compose YAML you already write. No new DSL to learn.",
  },
  {
    title: "Multi-runtime",
    body: "Target local or remote Docker daemons over mTLS. Spread instances across hosts.",
  },
  {
    title: "Template catalog",
    body: "Import ready-made services — Postgres, Redis, RabbitMQ, Keycloak, Mailpit and more.",
  },
  {
    title: "Git value sources",
    body: "Pull config values straight from your repos, so environments track your branches.",
  },
];

export interface Step {
  num: string;
  title: string;
  body: string;
}

export const steps: Step[] = [
  { num: "01", title: "Point at a runtime", body: "Register a Docker daemon and set your ingress domain." },
  { num: "02", title: "Import templates", body: "From the catalog or your own Compose files." },
  { num: "03", title: "Compose an environment", body: "Pick the services a branch of your app needs." },
  { num: "04", title: "Deploy an instance", body: "Get a URL. Tear it down when the branch merges." },
];

export interface Tier {
  name: string;
  price: string;
  body: string;
  cta: string;
  ctaVariant: "primary" | "secondary";
  /** Emphasized tier gets a 2px dark border. */
  emphasized: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Free",
    price: "$0",
    body: "Self-hosted core. Unlimited instances on your own hardware.",
    cta: "Install",
    ctaVariant: "secondary",
    emphasized: false,
  },
  {
    name: "Team",
    price: "TBD",
    body: "SSO, RBAC, multiple projects, priority support.",
    cta: "Contact us",
    ctaVariant: "primary",
    emphasized: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    body: "Air-gapped installs, audit, SLAs. Talk to us about your model.",
    cta: "Talk to sales",
    ctaVariant: "secondary",
    emphasized: false,
  },
];
