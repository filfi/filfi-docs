# How to Transfer FIL?

Here are some common methods of transferring FIL along with their relevant resource links:

- **Official Guide**: [https://filecointldr.io/how-to-buy-fil](https://filecointldr.io/how-to-buy-fil)
- **Metamask**: [https://metamask.io/](https://metamask.io/)
- **Foxwallet**: [https://foxwallet.com/](https://foxwallet.com/)
- **Binance**: [https://accounts.binance.com/enx/login](https://accounts.binance.com/enx/login)
- **OKEX**: [https://www.okx.com/cn/web3](https://www.okx.com/cn/web3)
- **Hiwallet**: [https://www.hiwallet.org/](https://www.hiwallet.org/)
- **Brave**: [https://brave.com/zh/wallet/](https://brave.com/zh/wallet/)
- **TP Wallet**: [https://tokenpocketl.org/](https://tokenpocketl.org/)

> **Note**: Both `f410` and `0x` addresses are supported. You can copy your FVM address into the Filfox browser to view the corresponding `f410` address, and then enter the appropriate `f410` address for the transfer.

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# How to Solve Network Problems
1. **Update to the latest version**
2. **Check wallet balance**
   - Ensure the balance is sufficient to pay the `gas` fees
3. **Use a VPN**
   - Try accessing [google.com](https://www.google.com/) to ensure the VPN proxy is functioning properly
4. **Switch VPN nodes**
   - If the connection still has issues, consider switching to another VPN node

&nbsp;
&nbsp;
&nbsp;
&nbsp;


# Which Wallets are Supported by FILFI
- **[Metamask](https://metamask.io/)**
- **[TokenPocket](https://www.tokenpocket.pro/)**
- **[FoxWallet](https://foxwallet.com/)**

&nbsp;
&nbsp;
&nbsp;
&nbsp;

# How to Retrieve FIL when FILFI Website is Unaccessible

Since rewards and staked coins are stored in smart contracts, if the FILFI website is not accessible, you need to meet the following conditions to retrieve your FIL:

### Necessary Conditions:

- **Contract Address**: This can be found on each fundraising plan page.
- **Contract Source Code**: It is currently under audit and will be open-sourced soon.
- **Private Key of the Wallet Used for Investment**

With the contract address and source code, you can use **Remix** to call the contract's withdrawal method and retrieve your assets.

### Steps:

1. Visit [Remix IDE](https://remix.ethereum.org/)
2. On the left menu, select **File Explorers**, then click **Create New File**, name the file, and paste the smart contract source code into it.
3. Again on the left menu, select **Solidity compiler**, then click **Compile**.
4. Select **Deploy & run transactions**. In the **Environment** option, select the appropriate environment, such as **Injected Provider** (if using Metamask).
5. In the **Contract** dropdown menu, select the contract you just compiled.
6. In **At Address**, enter your contract address, then click the **At Address** button next to it. This will load your smart contract instance.
7. The contract methods will be displayed below, and you can directly click on them to call.

> **Note**: Some method calls may require payment of gas fees. Ensure you have enough FIL in your wallet to pay these fees.

&nbsp;
&nbsp;
&nbsp;
&nbsp;