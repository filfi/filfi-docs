# Solidity API

## ⏳ `timedPlanState`

Get the state of the fundraising plan.

**Parameters:**

- `id`: Asset package ID

**Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Current state of the fundraising plan: 0: Waiting to start 1: Fundraising in progress 2: Fundraising plan closed 3: Fundraising successful 4: Fundraising failed 9: Destroyed |

```solidity
function timedPlanState(uint256 id) public view returns (uint256)
```

## 🔄 `backOwner`

Return the ownership of the node to the owner address set by the service provider.

```solidity
function backOwner() public
```

## 💰 `staking`

Stake by the builder.

**Parameters:**

- `id`: Asset package ID

```solidity
function staking(uint256 id) public payable
```

## 📦 `startPreSeal`

Enter the sealing period in advance. It will only be executed when the fundraising reaches the minimum fundraising target. After execution, the raised FIL will be transferred to the miner, and the SP can start the sealing process.

**Parameters:**

- `id`: Asset package ID

```solidity
function startPreSeal(uint256 id) public
```

## 💰 `getBack`

If the minimum target of the fundraising plan is not reached and the fundraising fails, this function returns the amount of pledged coins and interest refunded.

**Parameters:**

- `id`: Asset package ID
- `account`: Query address

**Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Amount of refunded pledged coins |
| uint256 | Obtained interest |

```solidity
function getBack(uint256 id, address account) public view returns (uint256, uint256)
```

## 💰 `unStaking`

Withdraw the staked coins and interest after the fundraising plan fails.

**Parameters:**

- `id`: Asset package ID

```solidity
function unStaking(uint256 id) public
```

## 💰 `investorWithdraw`

Withdraw the earnings by the builder.

**Parameters:**

- `id`: Asset package ID

```solidity
function investorWithdraw(uint256 id) public
```

## 💰 `availableRewardOf`

Get the available rewards for a specific address in an asset package.

**Parameters:**

- `id`: Asset package ID
- `addr`: Query address

**Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Amount of available rewards |

```solidity
function availableRewardOf(uint256 id, address addr) public view returns (uint256)
```

## 💰 `totalRewardOf`

Get the total rewards for a specific address in an asset package.

**Parameters:**

- `id`: Asset package ID
- `addr`: Query address

**Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total amount of rewards |

```solidity
function totalRewardOf(uint256 id, address addr)