# Solidity API

## 🖊️ `spSignWithMiner`

Service provider signature (needs to change the node's owner to a smart contract through the service provider's signature, otherwise the signature fails)

```solidity
function spSignWithMiner() public onlySp
```
 
## 💰 `payOpsSecurityFund`

Service provider pays operation security deposit

**Parameters:**

- `id`: Asset package ID

```solidity
function payOpsSecurityFund(uint256 id) public payable onlySp
```

## 💰 `withdrawOpsSecurityFund`

Service provider withdraws operation security deposit

**Parameters:**

> id: Asset package ID  

```solidity
function withdrawOpsSecurityFund(uint256 id) public onlySp
```

## 💰 `spWithdraw`

Service provider withdraws earnings

**Parameters:**

> id: Asset package ID   

```solidity
function spWithdraw(uint256 id) public onlySp
```

## 🛠️ setMinerBackOwner

Set the owner address that takes over the node after the fundraising plan expires

**Parameters:**

> minerOwner: The address to which the smart contract transfers the owner's authority of the node 

```solidity
function setMinerBackOwner(bytes minerOwner) public
```

## 💰 `opsFundReward`

Returns the reward amount of the SP under the asset package

**Parameters:**

- `id`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | SP's reward amount |

```solidity
function opsFundReward(uint256 id) public view returns (uint256)
```

## 💰 `spWillReleaseReward`

Get the number of unreleased earnings of the SP in the asset package

**Parameters:**

- `id`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP's unreleased earnings |

```solidity
function spWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `spRewardAvailableLeft`

Get the number of SP's currently available earnings in the asset package

**Parameters:**

- `id`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP's available earnings |

```solidity
function spRewardAvailableLeft(uint256 id) public view returns (uint256 amountReturn)
```

## 🔍 `spFine`

Get the total fine generated during the operation of the SP under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total fine amount |

```solidity
function spFine(uint256 key) public view returns (uint256)
````

## 🔍 `spRewardLock`

Get the number of locked rewards of the SP under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP's locked rewards |

```solidity
function spRewardLock(uint256 key) public view returns (uint256)
````

## 🔍 `gotSpReward`

Get the number of rewards received by the SP under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP's received rewards |

```solidity
function gotSpReward(uint256 key) public view returns (uint256)
````

## 🔍 `opsCalcFund`

Get the number of security deposits of the SP under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP's security deposits |

```solidity
function opsCalcFund(uint256 key) public view returns (uint256)
````

## 🔍 `opsSecurityFundRemain`

Get the remaining number of security deposits of the SP under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Remaining number of SP's security deposits |

```solidity
function opsSecurityFundRemain(uint256 key) public view returns (uint256)
````