# How to transfer FIL?

Here are some common FIL transfer methods and their related resource links:

- **Official Guide**: [https://filecointldr.io/how-to-buy-fil](https://filecointldr.io/how-to-buy-fil)
- **Metamask**: [https://metamask.io/](https://metamask.io/)
- **Foxwallet**: [https://foxwallet.com/](https://foxwallet.com/)
- **Binance**: [https://accounts.binance.com/enx/login](https://accounts.binance.com/enx/login)
- **OKX**: [https://www.okx.com/cn/web3](https://www.okx.com/cn/web3)
- **Hiwallet**: [https://www.hiwallet.org/](https://www.hiwallet.org/)
- **Brave**: [https://brave.com/zh/wallet/](https://brave.com/zh/wallet/)
- **TP Wallet**: [https://tokenpocketl.org/](https://tokenpocketl.org/)

> **Tip**: Both `f410` and `0x` addresses are supported. You can copy the FVM address to the Filfox browser to view the corresponding `f410` address, and then enter the corresponding `f410` address for transfer.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# How to solve network problems
1. **Update to the latest version**
2. **Check wallet balance**
   - Ensure the balance is sufficient to pay `gas` fees
3. **Use VPN**
   - Try to access [google.com](https://www.google.com/), ensure the VPN proxy is working
4. **Switch VPN nodes**
   - If the connection still has problems, consider switching to other VPN nodes

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# Which wallets does FILFI support
- **[Metamask](https://metamask.io/)**
- **[TokenPocket](https://www.tokenpocket.pro/)**
- **[FoxWallet](https://foxwallet.com/)**

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# How to retrieve FIL when FILFI website is inaccessible

Since rewards and pledged coins are stored in smart contracts, if the FILFI website is inaccessible, you need to meet the following conditions to retrieve FIL:

### Necessary conditions:

- **Contract address**: Can be found on each fundraising plan page.
- **Contract source code**: Currently under audit and will be open source soon.
- **Private key of the invested wallet**

With the contract address and contract source code, you can use **Remix** to call the contract's withdrawal method and retrieve your assets.

### Operation steps:

1. Visit [Remix IDE](https://remix.ethereum.org/)
2. In the left menu, select **File Explorers**, then click **Create New File**, name the file, and paste the smart contract source code into it.
3. Again in the left menu, select **Solidity compiler**, then click **Compile**.
4. Select **Deploy & run transactions**. In the **Environment** option, select the appropriate environment, such as **Injected Provider** (if using Metamask).
5. In the **Contract** dropdown menu, select the contract you just compiled.
6. In **At Address**, enter your contract address, then click the **At Address** button next to it. This will load your smart contract instance.
7. The methods of your contract will be displayed below, you can directly click them to call.

> **Note**: Some method calls may require payment of gas fees. Make sure your wallet has enough FIL to pay these fees.

&nbsp;
&nbsp;
&nbsp;
&nbsp;