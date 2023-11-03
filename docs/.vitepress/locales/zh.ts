import type { DefaultTheme } from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
  siteTitle: "FilFi 文档", 
  nav: [
    { text: "项目介绍", link: "/zh/introduction/" },
    // { text: "DAO", link: "/zh/dao/" },
  ],
  sidebar: [
    {
      text: "📢 简介",
      items: [
        { text: "FILFI简介", link: "/zh/introduction/" },
        // { text: "参与方式", link: "/en/introduction" },
        { text: "安全审计", link: "/zh/introduction/audit" },
        { 
          text: "常见问题", 
          items: [
            {
              "text": "资产安全方案",
              "link": "/zh/problems/emergency.md"
            }
          ],
          link: "/zh/problems/problems" },
        // { text: "FIL教程", link: "/en/introduction" },
        // { text: "路线图", link: "/zh/introduction/roadmap" },
        { text: "联系我们", link: "/zh/introduction/contact" },
      ],
    },
    // {
    //   text: "💹 产品逻辑",
    //   items: [
    //     {
    //       text: "系统角色",
    //       items: [
    //         {text: "主办人", link: "/en/developers/contract-address-mainnet"},
    //         {text: "SP", link: "/en/developers/contract-address-mainnet"},
    //         {text: "建设者", link: "/en/developers/contract-address-mainnet"},
    //       ]
    //     },
    //     {
    //       text: "系统功能",
    //       items: [
    //         {text: "创建募集计划", link: "/en/developers/contract-address-calibration"},
    //         {text: "挂载节点", link: "/en/developers/contract-address-calibration"},
    //         {text: "建设者质押", link: "/en/developers/contract-address-calibration"},
    //       ]
    //     },
    //   ],
    // },

    {
      text: "📖 开发者",
      items: [
        { text: "系统架构", link: "/zh/developers/architecture" },
        {
          text: "合约接口",
          link: "/zh/developers/interfaces/index",
          items: [
            { text: "通用接口", link: "/zh/developers/interfaces/common" },
            { text: "主办人", link: "/zh/developers/interfaces/raiser" },
            { text: "服务商(SP)", link: "/zh/developers/interfaces/sp" },
          ],
        },
        {
          text: "合约地址",
          link: "/zh/developers/address/index",
          items: [
            { text: "主网", link: "/zh/developers/address/mainnet" },
            { text: "测试网", link: "/zh/developers/address/calibration" },
          ],
        },
        {
          text: "Bug赏金计划",
          link: "/zh/developers/bug-bounty",
        },
      ],
    },
  ]
}