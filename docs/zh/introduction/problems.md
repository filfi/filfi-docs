# 如何转FIL？

以下是一些常见的FIL转移方法及其相关资源链接：

- **官方指南**：[https://filecointldr.io/how-to-buy-fil](https://filecointldr.io/how-to-buy-fil)
- **Metamask**：[https://metamask.io/](https://metamask.io/)
- **Foxwallet**：[https://foxwallet.com/](https://foxwallet.com/)
- **币安**：[https://accounts.binance.com/enx/login](https://accounts.binance.com/enx/login)
- **欧易**：[https://www.okx.com/cn/web3](https://www.okx.com/cn/web3)
- **Hiwallet**：[https://www.hiwallet.org/](https://www.hiwallet.org/)
- **Brave**：[https://brave.com/zh/wallet/](https://brave.com/zh/wallet/)
- **TP钱包**：[https://tokenpocketl.org/](https://tokenpocketl.org/)

> **提示**：支持地址`f410`和`0x`的都可以。你可以将FVM地址复制到Filfox浏览器查看对应的`f410`地址，然后输入相应的`f410`地址进行转账。

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# 网络问题如何解决
1. **更新到最新版**
2. **检查钱包余额**
   - 确保余额足以支付 `gas` 费用
3. **使用 VPN**
   - 尝试访问 [google.com](https://www.google.com/)，确保 VPN 代理无问题
4. **切换 VPN 节点**
   - 如果连接仍然有问题，考虑更换到其他 VPN 节点

&nbsp;
&nbsp;
&nbsp;
&nbsp;


# FILFI支持哪些钱包
- **[Metamask](https://metamask.io/)**
- **[TokenPocket](https://www.tokenpocket.pro/)**
- **[FoxWallet](https://foxwallet.com/)**


&nbsp;
&nbsp;
&nbsp;
&nbsp;
  
# 如何在 FILFI 网站无法访问时取回 FIL

由于奖励和质押币都存储在智能合约中，如果 FILFI 的网站不能访问，您需要满足以下条件来取回 FIL:

### 必要条件：

- **合约地址**：可以在募集计划的每个页面中找到。
- **合约源码**：目前正在审计，并即将开源。
- **投资的钱包私钥**

有了合约地址和合约源码后，您可以使用 **Remix** 来调用合约的提币方法并取回您的资产。

### 操作步骤：

1. 访问 [Remix IDE](https://remix.ethereum.org/)
2. 在左侧菜单，选择 **File Explorers**，然后点击 **Create New File**，给文件命名后，将智能合约源代码粘贴进去。
3. 再次在左侧菜单，选择 **Solidity compiler**，然后点击 **Compile**。
4. 选择 **Deploy & run transactions**。在 **Environment** 选项中，选择适合的环境，例如 **Injected Provider**（如使用 Metamask）。
5. 在 **Contract** 下拉菜单中选择你刚编译的合约。
6. 在 **At Address** 输入你的合约地址，然后点击旁边的 **At Address** 按钮。这会加载你的智能合约实例。
7. 下方将显示你的合约方法，你可以直接点击它们进行调用。

> **注意**：部分方法调用可能需要支付 gas 费用。确保您的钱包中有足够的 FIL 来支付这些费用。


&nbsp;
&nbsp;
&nbsp;
&nbsp;

# 年化收益的计算方式
首先，我们从质押币的投入开始：
- **优先质押币总投入**：`35,000`
- **劣后质押币配比**：根据5%计算，但请注意计算方式是 `(35,000 / 95%) * 5%`，因此数值为：`1,842.1`
- **总质押币**：`36,842.1`

接着，我们看节点的产出：
- **节点总产出**：`26,400`
- **投资人分成**：按70%计算，即 `26,400 * 0.7 = 18,480`

基于上述数据，我们可以得到的回报率：
- **投资回报率**：`(18,480 / 36,842.1) * 100 = 50.16%`
- **节点有效期**：`540天 (1.5年)`
- **年化回报率**：`50.16% / 1.5 = 33.44%`

### 请注意以下差别：
- 投资人的总投入需要**加上劣后质押币**，才能与70%分成匹配。
- 劣后质押币是按5%配比，但它**不是**直接`35000 * 5%`，而是`(35000 / 95%) * 5% =  1,842.1`。
