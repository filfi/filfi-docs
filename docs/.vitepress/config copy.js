export default {
  title: "FilFi",
  description: "FilFi description",

  themeConfig: {
    siteTitle: "FilFi Docs",
    logo: "/logo.svg",
    socialLinks: [{ icon: "github", link: "https://github.com/filfi" }],

    nav: [
      { text: "Guide", link: "/en/guide/" },
      { text: "DAO", link: "/en/dao/" },
    ],

    sidebar: [
      {
        // text: "Introduction",
        items: [{ text: "Introduction", link: "/en/introduction" }],
      },
      {
        text: "Developers",
        items: [
          {text: "Design", link: "/en/developers/design"},
          {
            text: "📝 Contract Address",
            items: [
              {text: "Mainnet", link: "/en/developers/contract-address-mainnet"},
              {text: "Calibration", link: "/en/developers/contract-address-calibration"},
            ]
          },
        ],
      },
      {
        text: "Guide",
        items: [
          { text: "Getting Started", link: "/en/guide/getting-started" },
          { text: "Staker", link: "/en/guide/staker" },
          { text: "Minner", link: "/en/guide/minner" },
          {
            text: "Storage Provider",
            items: [
              { text: "Getting Started", link: "/en/guide/getting-started-sp" },
              { text: "Mint Power NFT", link: "/en/guide/nft" },
              { text: "Collateral & Borrowing", link: "/en/guide/borrow" },
              { text: "Raising & Minning", link: "/en/guide/raise" },
              { text: "SP Foundry", link: "/en/guide/foundry" },
            ],
          },
          {
            text: "Interest Model",
            link: "/en/guide/interest-model",
          },
          {
            text: "Liquidity Fund",
            link: "/en/guide/fund",
          },
          {
            text: "Supported Wallets",
            link: "/en/guide/wallets",
          },
        ],
      },
      {
        text: "Risk",
        items: [
          { text: "Overview", link: "/en/risk/" },
          { text: "Metrics", link: "/en/risk/metrics" },
          { text: "Discovery", link: "/en/risk/discovery" },
          { text: "Liquidation", link: "/en/risk/liquidation" },
        ],
      },
      {
        text: "Security",
        items: [
          { text: "Contract Audits", link: "/en/security/audits" },
          { text: "Bug Bounties", link: "/en/security/bounty" },
        ],
      },
      {
        text: "Technical",
        items: [
          { text: "Networks", link: "/en/technical/networks" },
          { text: "Protocol Contracts", link: "/en/technical/contracts" },
          { text: "Developer Resources", link: "/en/technical/developer" },
        ],
      },
      {
        text: "FilFi DAO",
        items: [
          { text: "Overview", link: "/en/dao/" },
          { text: "Governance", link: "/en/dao/governance" },
          { text: "Validator", link: "/en/dao/validator" },
          { text: "Ambassador", link: "/en/dao/ambassador" },
          { text: "FFI token", link: "/en/dao/ffi" },
          { text: "Foundation", link: "/en/dao/foundation" },
        ],
      },
    ],

    footer: {
      message: "footer message",
      copyright:
        'Copyright © 2022-present <a href="https://github.com/filfi">Filfi</a>',
    },
  },
};

