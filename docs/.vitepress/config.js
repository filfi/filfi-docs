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
        text: "📢 简介",
        items: [
          { text: "FILFI简介", link: "/en/introduction" },
          { text: "参与方式", link: "/en/introduction" },
          { text: "安全审计", link: "/zh/introduction/audit.md" },
          { text: "常见问题", link: "/zh/introduction/problems.md" },
          { text: "FIL教程", link: "/en/introduction" },
          { text: "路线图", link: "/zh/introduction/roadmap.md" },
          { text: "联系我们", link: "/zh/introduction/contact.md" },
        ],
      },
      {
        text: "💹 产品逻辑",
        items: [
          {
            text: "系统角色",
            items: [
              {text: "主办人", link: "/en/developers/contract-address-mainnet"},
              {text: "SP", link: "/en/developers/contract-address-mainnet"},
              {text: "建设者", link: "/en/developers/contract-address-mainnet"},
            ]
          },
          {
            text: "系统功能",
            items: [
              {text: "创建募集计划", link: "/en/developers/contract-address-calibration"},
              {text: "挂载节点", link: "/en/developers/contract-address-calibration"},
              {text: "建设者质押", link: "/en/developers/contract-address-calibration"},
            ]
          },
        ],
      },

      {
        text: "📖 开发者",
        items: [
          {text: "系统架构", link: "/zh/developers/architecture.md"},
          {
            text: "合约接口", link: "/zh/developers/interfaces/index.md",
            items: [
              {text: "通用接口", link: "/zh/developers/interfaces/common.md"},
              {text: "主办人", link: "/zh/developers/interfaces/raiser.md"},
              {text: "服务商(SP)", link: "/zh/developers/interfaces/sp.md"},
            ]
          },
          {
            text: "合约地址", link: "/zh/developers/address/index.md",
            items: [
              {text: "主网", link:"/zh/developers/address/mainnet.md"},
              {text: "测试网", link:"/zh/developers/address/calibration.md"},
            ]
          },
          {
            text: "Bug赏金计划", link: "/zh/developers/bugBounty.md"
          }
        ]
      }

    ],

    footer: {
      message: "footer message",
      copyright:
        'Copyright © 2022-present <a href="https://github.com/filfi">Filfi</a>',
    },
  },
};

