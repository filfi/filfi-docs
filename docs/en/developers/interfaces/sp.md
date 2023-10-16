# Solidity API

## 🖊️ `spSignWithMiner`

Service Provider Signature (A signature from the service provider is required to change the node's owner to a smart contract, otherwise the signature will fail)

```solidity
function spSignWithMiner() public onlySp
```
 
## 💰 `payOpsSecurityFund`

Service provider pays operational security deposit

**Parameters:**

- `id`: Asset bundle ID

```solidity
function payOpsSecurityFund(uint256 id) public payable onlySp
```

## 💰 `withdrawOpsSecurityFund`

Service provider withdraws operational security deposit

**Parameters:**

> id: Asset bundle id  

```solidity
function withdrawOpsSecurityFund(uint256 id) public onlySp
```

## 💰 `spWithdraw`

Service provider withdraws earnings

**Parameters:**

> id: Asset bundle id 

```solidity
function spWithdraw(uint256 id) public onlySp
```

## 🛠️ setMinerBackOwner

Set the owner address to take over the node after the fundraising plan expires

**Parameters:**

> minerOwner: The address to which the smart contract transfers the owner's rights of the node

```solidity
function setMinerBackOwner(bytes minerOwner) public
```

## 💰 `opsFundReward`

Returns the reward amount for the SP under the asset bundle

**Parameters:**

- `id`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | SP's reward amount |

```solidity
function opsFundReward(uint256 id) public view returns (uint256)
```

## 💰 `spWillReleaseReward`

Get the number of unclaimed rewards of the SP in the asset bundle

**Parameters:**

- `id`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of unclaimed SP rewards |

```solidity
function spWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `spRewardAvailableLeft`

Get the number of SP rewards currently available for withdrawal in the asset bundle

**Parameters:**

- `id`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP rewards available for withdrawal |

```solidity
function spRewardAvailableLeft(uint256 id) public view returns (uint256 amountReturn)
```

## 🔍 `spFine`

Get the total fines incurred during the operation of the SP under the asset bundle

**Parameters:**

- `key`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total fine amount |

```solidity
function spFine(uint256 key) public view returns (uint256)
```

## 🔍 `spRewardLock`

Get the number of locked SP rewards under the asset bundle

**Parameters:**

- `key`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of locked SP rewards |

```solidity
function spRewardLock(uint256 key) public view returns (uint256)
```

## 🔍 `gotSpReward`

Get the number of SP rewards already claimed under the asset bundle

**Parameters:**

- `key`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP rewards already claimed |

```solidity
function gotSpReward(uint256 key) public view returns (uint256)
```

## 🔍 `opsCalcFund`

Get the number of SP security deposits under the asset bundle

**Parameters:**

- `key`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of SP security deposits |

```solidity
function opsCalcFund(uint256 key) public view returns (uint256)
```

## 🔍 `opsSecurityFundRemain`

Get the remaining number of SP security deposits under the asset bundle

**Parameters:**

- `key`: Asset bundle ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Remaining number of SP security deposits |

```solidity
function opsSecurityFundRemain(uint256 key) public view returns (uint256)
```