export const siteConfig = {
  name: "CGEN",
  description: "CineGen($CGEN) introduces a decentralized, permissionless protocol on Solana that enables users to fund and access AI-generated media through a tokenized system",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://www.cinegen.xyz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://www.cinegen.xyz",
    title: "CGEN",
    description: "CineGen($CGEN) introduces a decentralized, permissionless protocol on Solana that enables users to fund and access AI-generated media through a tokenized system",
    siteName: "CGEN"
  },
  twitter: {
    card: "summary",
    title: "CGEN",
    description: "CineGen($CGEN) introduces a decentralized, permissionless protocol on Solana that enables users to fund and access AI-generated media through a tokenized system",
    creator: "@cgenprotocol"
  },
  links: {
    twitter: "https://twitter.com/cgenprotocol",
    github: "https://github.com/cgenprotocol"
  }
};

export type SiteConfig = typeof siteConfig;
