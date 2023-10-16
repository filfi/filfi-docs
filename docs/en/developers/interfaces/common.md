# Solidity API

## ⏳ `timedPlanState`

Get the status of the fundraising plan

**Parameters:**

- `id`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Current status of the fundraising plan: 0: Waiting to start 1: Fundraising 2: Fundraising plan closed 3: Fundraising successful 4: Fundraising failed 9: Destroyed |


```solidity
function timedPlanState(uint256 id) public view returns (uint256)
```

## 🔄 `backOwner`

Return the node owner authority to the owner address set by the service provider

```solidity
function backOwner() public
```

## 💰 `staking`

Builder's pledge

**Parameters:**

- `id`: Asset package ID

```solidity
function staking(uint256 id) public payable
```

## 📦 `startPreSeal`

Enter the sealing period in advance. It will only be executed when the fundraising reaches the minimum fundraising target. After execution, the FIL of the fundraising will be transferred to the miner, and the SP can start sealing.

**Parameters:**

- `id`: Asset package ID

```solidity
function startPreSeal(uint256 id) public
```

## 💰 `getBack`

If the minimum target of the fundraising plan is not reached and the fundraising fails, this interface returns the number of returned pledge coins and interest.

**Parameters:**

- `id`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of returned pledge coins |
| uint256 | Interest gained |

```solidity
function getBack(uint256 id, address account) public view returns (uint256, uint256)
```

## 💰 `unStaking`

After the fundraising plan fails, retrieve the pledge coins and interest

**Parameters:**

- `id`: Asset package ID

```solidity
function unStaking(uint256 id) public
```

## 💰 `investorWithdraw`

Builder withdraws earnings

**Parameters:**

- `id`: Asset package ID

```solidity
function investorWithdraw(uint256 id) public
```

## 💰 `availableRewardOf`

Get the earnings that can be withdrawn under the asset package for a certain address

**Parameters:**

- `id`: Asset package ID
- `addr`: Query address

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Amount of earnings that can be withdrawn |


```solidity
function availableRewardOf(uint256 id, address addr) public view returns (uint256)
```

## 💰 `totalRewardOf`

Get the total earnings of a certain address under the asset package

**Parameters:**

- `id`: Asset package ID
- `addr`: Query address

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total earnings amount |


```solidity
function totalRewardOf(uint256 id, address addr) public view returns (uint256)
```


## 💰 `willReleaseOf`

Get the earnings to be released under the asset package for a certain address

**Parameters:**

- `id`: Asset package ID
- `addr`: Query address

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Amount of earnings to be released |


```solidity
function willReleaseOf(uint256 id, address addr) public view returns (uint256)
```


## 🔍 `getToolAddr`

Get the relevant contract address

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| address | Tool contract address |
| address | Contract address interacting with Miner |
| address | Logic contract address |
| address | Extended logic contract address |


```solidity
function getToolAddr() public pure returns (address tool, address miner, address process, address processSecond)
```


## 🔍 `totalRewardAmount`

Get the total earnings of the current asset package

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total earnings amount of the asset package |


```solidity
function totalRewardAmount(uint256 key) public view returns (uint256)
```


## 🔍 `totalReleasedRewardAmount`

Get the total released earnings of the current asset package

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total released earnings amount of the asset package |


```solidity
function totalReleasedRewardAmount(uint256 key) public view returns (uint256)
````


## 🔍 `pledgeTotalAmount`

Get the total amount of fundraising for the asset package

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Total amount of fundraising for the asset package |


```solidity
function pledgeTotalAmount(uint256 key) public view returns (uint256)
````


## 🔍 `gotFilFiReward`

Get the number of rewards received by the filfi platform under the current asset package

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of rewards received by the platform |


```solidity
function gotFilFiReward(uint256 key) public view returns (uint256)
````