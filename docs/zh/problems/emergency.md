# 极端情况下资产安全方案

在FilFi出现页面无法打开等极端情况下，我们深知用户资金安全的重要性，并已经制定了一系列措施来确保用户资金的安全和完整性：

- **智能合约的稳固性**：所有用户的资金都被智能合约安全地管理，而非中心化的服务器上。这意味着，万一出现FilFi页面无法打开等极端情况时，由于区块链技术的保护，用户仍可以直接与智能合约互动来提取他们的资金。

- **自动提取功能**：当节点到期后，智能合约已被设计为允许用户自主提取其质押币和相应的奖励。这确保了用户无需依赖任何中心化的服务或介入来领取他们应得的资金。

- **开源和透明性**：我们的智能合约代码是开源的，并已经过第三方的专业审计，以确保其安全性和功能完整性。这为用户提供了一个透明的平台，使他们可以随时查看和验证合约的操作。

- **详细的操作指南**：为了帮助用户在任何情况下都能顺利提取资金，我们提供了一套详细的智能合约操作指南。这些指南将指导用户如何与智能合约互动，确保他们能够在极端情况下无障碍地提取质押币和奖励。

综上所述，我们已经采取了全面的措施，确保在FilFi页面无法打开等极端情况下，用户的资金安全不受损失，并且能够轻松地提取他们的质押币和奖励。

> 温馨提示：某些操作可能会产生gas费用，请确保您的钱包内存有充足的FIL以支付相关费用。

## 1. 使用前准备

### 1.1 备份关键信息

- 合约地址：请先复制并保存您所参与质押计划的合约地址。该地址可以在募集计划的详情页底部找到。
- 计划ID：您可以在浏览器的地址栏中找到并复制计划ID。

    ![1](/files/plan_address.png)

    ![2](/files/plan_id.png)

### 1.2 FilFi合约源码

您可以在以下链接查看我们的合约源码：[FilFi合约源码](https://github.com/filfi/letsfil-contracts/blob/main/contracts/LetsFilControler.sol)

### 1.3 使用的钱包

请确保您有访问权和控制权的钱包，这是您在质押该计划时使用的钱包。

### 1.4 计划状态

请注意，只有当计划满足“节点已到期，并且质押币已线性释放完毕”的条件时，您才能进行后续操作。

## 2. 将收益从节点转至Miner地址

所有资金都被安全地存放在由智能合约管理的矿工节点上。为了使用户能够领取其质押币和收益，首先必须将资金从矿工节点拉取到智能合约中。这个拉取操作需要消耗gas费用，因此请确保您的钱包中有足够的余额来支付这些费用。

拉取操作任何人都可以执行，且仅需要执行一次。一旦资金成功被拉取到智能合约，用户便可以随时领取其投资的质押币和相应的收益。

### 操作步骤

1. 打开推送方法：打开区块链浏览器Filfox，在右上角搜索框输入以下地址：0x3670f9b8d1AAC971fEa76526C92d6155682a01Bf

    ![图片](/files/filfox_header.png)

2. 点击底部【合约】-【合约写】-【下拉箭头】

    ![图片](/files/filfox_contract_point.png)

3. 分别输入用户所质押的计划的智能合约地址和计划id，点击【写】

    ![图片](/files/filfox_contract_call.png)

## 3. 从Miner地址提取质押币和奖励

为了提取质押币，您需要与智能合约进行交互。为此，我们推荐使用Remix IDE，它是一个流行的在线Solidity IDE和工具，专门为开发者提供了一个直观的界面来编写、测试和部署智能合约。通过Remix，您可以轻松地与您的智能合约进行交互，从而实现提取质押币的操作。

### 操作步骤：

1. 打开Remix IDE

    ![图片](/files/remix_first.png)

2. 准备好源码、合约地址、募集计划ID

    源码：[GitHub](https://remix.ethereum.org/)

    合约地址：

    ![图片](/files/remix_plan_address.png)

    计划ID:

    ![图片](/files/remix_plan_id.png)

3. 导入合约

    选中"contracts"目录，新建文件

    ![图片](/files/remix_new_file.png)

    将文件命名为LetsFilController.sol，然后将源码复制到文件中

    ![图片](/files/remix_source.png)

    选中"contracts"文件夹，"右击" -> New Folder, 命名为"interfaces",

    然后选中"interfaces" -> New File, 命名为”ILetsFilPackInfo.sol“, 创建后的目录结构如图：

    将源码中ILetsFilPackInfo.sol 内容拷贝到Remix中

    ![图片](/files/remix_folder.png)

    ![图片](/files/remix_folder2.png)

4. 编译合约

    打开"LetsFilController.sol", 设置参数：

    编译版本：0.8.17

    打开优化参数：Enable optimization = 200

    然后 "Ctrl + S"保存合约，合约会自动编译。如果出现如图的“编译成功状态”，表示成功编译

    ![图片](/files/remix_runs.png)

5. 加载、运行合约

    首先点击Remix的"部署"按钮，然后需要配置一下信息：

    Environment：选择metamask（推荐）

    Account：使用投资募集计划的钱包，并且确保钱包中的Fil足够支付Gas

    Contract：选择LetsFilController.sol

    合约地址: 在“At Address”后的输入框，填写募集计划的合约地址

    最后，点击"At Address"加载合约

    > 温馨提示：确保钱包地址是当时投资募集计划的地址。

    ![图片](/files/remix_deploy.png)

6. 加载合约成功后，会出现合约的所有可调用方法

    ![图片](/files/remix_call.png)

7. 调用提取收益和取回质押的方法

    （1）建设者提取收益方法：investorWithdraw
         填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_withdraw.png)

    （2）建设者取回质押方法：unStaking
          填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_unstaking.png)

    （3）发起人提取收益方法：raiserWithdraw (资产包只有一个发起人的情况)
          填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_raiserwithdraw.png)

    （4）发起人提取收益方法：sponsorWithdraw (资产包有多个发起人的情况)
          填入对应的"资产包ID"和发起人自己的钱包地址，点击"transact"执行合约

    ![图片](/files/remix_sponorwithdraw.png)

    （5）服务商SP提取收益方法：spWithdraw
          填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_spwithdraw.png)

    （6）服务商SP提取运维保证金方法：withdrawOpsSecurityFund
          填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_withdrawops.png)

    （7）服务商SP提取运维保证金的收益方法：withdrawFundReward
          填入对应的"资产包ID"，点击"transact"执行合约

    ![图片](/files/remix_withdrawfundreward.png)