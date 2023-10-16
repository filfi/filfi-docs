import type { DefaultTheme } from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
  siteTitle: "FilFi Documentation",
  nav: [
    { text: "Introduction", link: "/zh/introduction/" },
    // { text: "DAO", link: "/zh/dao/" },
  ],
  sidebar: [
    {
      text: "📢 Introduction",
      items: [
        { text: "FILFI Introduction", link: "/en/introduction/" },
        // { text: "Participation Method", link: "/en/introduction" },
        { text: "Security Audit", link: "/en/introduction/audit" },
        { text: "FAQ", link: "/en/introduction/problems" },
        // { text: "FIL Tutorials", link: "/en/introduction" },
        // { text: "Roadmap", link: "/en/introduction/roadmap" },
        { text: "Contact Us", link: "/en/introduction/contact" },
      ],
    },
    // {
    //   text: "💹 Product Logic",
    //   items: [
    //     {
    //       text: "System Roles",
    //       items: [
    //         {text: "Host", link: "/en/developers/contract-address-mainnet"},
    //         {text: "SP", link: "/en/developers/contract-address-mainnet"},
    //         {text: "Builder", link: "/en/developers/contract-address-mainnet"},
    //       ]
    //     },
    //     {
    //       text: "System Functions",
    //       items: [
    //         {text: "Create Fundraising Plan", link: "/en/developers/contract-address-calibration"},
    //         {text: "Mount Node", link: "/en/developers/contract-address-calibration"},
    //         {text: "Builder Staking", link: "/en/developers/contract-address-calibration"},
    //       ]
    //     },
    //   ],
    // },

    {
      text: "📖 Developers",
      items: [
        // { text: "System Architecture", link: "/en/developers/architecture" },
        {
          text: "Contract Interfaces",
          link: "/en/developers/interfaces/index",
          items: [
            { text: "Common Interfaces", link: "/en/developers/interfaces/common" },
            { text: "Host", link: "/en/developers/interfaces/raiser" },
            { text: "Service Provider (SP)", link: "/en/developers/interfaces/sp" },
          ],
        },
        {
          text: "Contract Addresses",
          link: "/en/developers/address/index",
          items: [
            { text: "Mainnet", link: "/en/developers/address/mainnet" },
            { text: "Testnet", link: "/en/developers/address/calibration" },
          ],
        },
        {
          text: "Bug Bounty Program",
          link: "/en/developers/bug-bounty",
        },
      ],
    },
  ]
}