# Asset Security Plan in Extreme Situations

In extreme cases where the FilFi page cannot be opened, we understand the importance of user fund security and have developed a series of measures to ensure the safety and integrity of user funds:

- **Stability of smart contracts**: All user funds are securely managed by smart contracts, not on centralized servers. This means that in the event of extreme situations where the FilFi page cannot be opened, users can still directly interact with the smart contract to withdraw their funds thanks to the protection of blockchain technology.

- **Automatic withdrawal function**: When the node expires, the smart contract has been designed to allow users to independently withdraw their pledged coins and corresponding rewards. This ensures that users do not need to rely on any centralized service or intervention to receive their due funds.

- **Open source and transparency**: Our smart contract code is open source and has been professionally audited by a third party to ensure its security and functional integrity. This provides users with a transparent platform where they can view and verify the operation of the contract at any time.

- **Detailed operation guide**: To help users withdraw funds smoothly under any circumstances, we provide a detailed smart contract operation guide. These guides will guide users on how to interact with smart contracts, ensuring that they can withdraw pledged coins and rewards without obstacles in extreme situations.

In summary, we have taken comprehensive measures to ensure that in extreme situations where the FilFi page cannot be opened, user funds are not lost and they can easily withdraw their pledged coins and rewards.

> Kind reminder: Some operations may incur gas fees, please ensure that your wallet has sufficient FIL to pay the related fees.

## 1. Preparations before use

### 1.1 Backup key information

- Contract address: Please first copy and save the contract address of the pledge plan you participate in. This address can be found at the bottom of the details page of the fundraising plan.
- Plan ID: You can find and copy the plan ID in the address bar of your browser.

    ![1](/files/plan_address.png)

    ![2](/files/plan_id.png)

### 1.2 FilFi contract source code

You can view our contract source code at the following link: [FilFi contract source code](https://github.com/filfi/letsfil-contracts/blob/main/contracts/LetsFilControler.sol)

### 1.3 Wallet used

Please ensure that you have access and control to the wallet that you used when pledging this plan.

### 1.4 Plan status

Please note that you can only proceed with the following operations when the plan meets the condition of "the node has expired, and the pledged coins have been fully linearly released."

## 2. Transfer earnings from node to Miner address

All funds are securely stored on the miner nodes managed by the smart contract. In order for users to receive their pledged coins and earnings, funds must first be pulled from the miner nodes to the smart contract. This pull operation requires gas fees, so please ensure that your wallet has sufficient balance to pay these fees.

Anybody can perform the pull operation, and it only needs to be performed once. Once the funds are successfully pulled into the smart contract, users can withdraw their invested pledged coins and corresponding earnings at any time.

### Operation steps

1. Open the push method: Open the blockchain browser [Filfox](https://filfox.info/zh), enter the following address in the search box in the upper right corner: 0x3670f9b8d1AAC971fEa76526C92d6155682a01Bf

    ![Image](/files/filfox_header.png)

2. Click at the bottom [Contract] - [Contract Write] - [Dropdown Arrow]

    ![Image](/files/filfox_contract_point.png)

3. Enter the smart contract address and plan id of the plan pledged by the user, and click [Write]

    ![Image](/files/filfox_contract_call.png)

## 3. Withdraw pledged coins and rewards from Miner address

To withdraw pledged coins, you need to interact with the smart contract. For this, we recommend using Remix IDE, a popular online Solidity IDE and tool, which provides developers with an intuitive interface to write, test, and deploy smart contracts. With Remix, you can easily interact with your smart contract to perform the operation of withdrawing pledged coins.

### Operation steps:

1. Open [Remix IDE](https://remix.ethereum.org/)

    ![Image](/files/remix_first.png)

2. Prepare source code, contract address, fundraising plan ID

    Source code: [GitHub](https://github.com/filfi/letsfil-contracts/blob/main/contracts/LetsFilControler.sol)

    Contract address:

    ![Image](/files/remix_plan_address.png)

    Plan ID:

    ![Image](/files/remix_plan_id.png)

3. Import contract

    Select the "contracts" directory, create a new file

    ![Image](/files/remix_new_file.png)

    Name the file LetsFilController.sol, then copy the source code into the file

    ![Image](/files/remix_source.png)

    Select the "contracts" folder, "right-click" -> New Folder, name it "interfaces",

    Then select "interfaces" -> New File, name it ”ILetsFilPackInfo.sol“, the directory structure after creation is as follows:

    Copy the content of ILetsFilPackInfo.sol in the source code into Remix

    ![Image](/files/remix_folder.png)

    ![Image](/files/remix_folder2.png)

4. Compile contract

    Open "LetsFilController.sol", set parameters:

    Compilation version: 0.8.17

    Enable optimization parameter: Enable optimization = 200

    Then "Ctrl + S" to save the contract, the contract will be automatically compiled. If the "compilation successful status" as shown in the figure appears, it means successful compilation

    ![Image](/files/remix_runs.png)

5. Load, run contract

    First click the "deploy" button of Remix, then you need to configure the following information:

    Environment: select metamask (recommended)

    Account: Use the wallet that invests in the fundraising plan, and make sure that there is enough Fil in the wallet to pay for Gas

    Contract: select LetsFilController.sol

    Contract address: Fill in the contract address of the fundraising plan in the input box after "At Address"

    Finally, click "At Address" to load the contract

    > Kind reminder: Make sure the wallet address is the address that invested in the fundraising plan at that time.

    ![Image](/files/remix_deploy.png)

6. After the contract is successfully loaded, all callable methods of the contract will appear

    ![Image](/files/remix_call.png)

7. Call the method to withdraw earnings and retrieve pledges

    (1) Builder's withdrawal method: investorWithdraw
         Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_withdraw.png)

    (2) Builder's pledge retrieval method: unStaking
          Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_unstaking.png)

    (3) Originator's withdrawal method: raiserWithdraw (when the asset pack has only one originator)
          Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_raiserwithdraw.png)

    (4) Originator's withdrawal method: sponsorWithdraw (when the asset pack has multiple originators)
          Enter the corresponding "asset pack ID" and the originator's own wallet address, click "transact" to execute the contract

    ![Image](/files/remix_sponorwithdraw.png)

    (5) Service provider SP's withdrawal method: spWithdraw
          Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_spwithdraw.png)

    (6) Service provider SP's operation margin withdrawal method: withdrawOpsSecurityFund
          Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_withdrawops.png)

    (7) Service provider SP's operation margin earnings withdrawal method: withdrawFundReward
          Enter the corresponding "asset pack ID", click "transact" to execute the contract

    ![Image](/files/remix_withdrawfundreward.png)
