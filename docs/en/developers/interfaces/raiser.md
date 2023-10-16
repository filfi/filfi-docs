# Solidity API

## 🚀 `startRaisePlan`

raiser starts the fundraising plan

**Parameters:**

- `id`: Asset package ID

```solidity
function startRaisePlan(uint256 id) public onlyRaiser
```

## 💰 `paySecurityFund` 

Pay the raiser's security deposit 

**Parameters:**

- `id`: Asset package ID
- `value`: Amount of security deposit

```solidity
function paySecurityFund(uint256 id) public payable onlyRaiser
```

## 💰`withdrawSecurityFund`

Withdraw the raiser's security deposit

**Parameters:**

- `id`: Asset package ID

```solidity
function withdrawSecurityFund(uint256 id) public onlyRaiser
```

## 💰 `raiserWithdraw`

Raiser withdraws earnings

**Parameters:**

- `id`: Asset package ID

```solidity
function raiserWithdraw(uint256 id) public onlyRaiser
```

## 🚫 `closeRaisePlan`

Raiser closes the fundraising plan

**Parameters:**

- `id`: Asset package ID

```solidity
function closeRaisePlan(uint256 id) public onlyRaise
```

### 💰 `raiserWillReleaseReward`

Get the number of unreleased earnings of the asset package raiser

**Parameters:**

- `id`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of unreleased earnings of the raiser |

```solidity
function raiserWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `raiserRewardAvailableLeft`

Get the number of earnings available for the asset package raiser to withdraw

**Parameters:**

- `id`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of earnings available for the raiser to withdraw |

```solidity
function raiserRewardAvailableLeft(uint256 id) public view returns (uint256)
```

## 🔍 `gotRaiserReward`

Get the number of rewards received by the raiser under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of rewards received by the raiser |

```solidity
function gotRaiserReward(uint256 key) public view returns (uint256)
````

## 🔍 `securityFundRemain`

Get the remaining amount of the raiser's security deposit under the asset package

**Parameters:**

- `key`: Asset package ID

**Function returns:**


| Type | Description |
| :-----------: | :-----------: |
| uint256 | Remaining amount of the raiser's security deposit |

```solidity
function securityFundRemain(uint256 key) public view returns (uint256)
````