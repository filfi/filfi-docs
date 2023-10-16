# Solidity API

## 🚀 `startRaisePlan`

Initiator starts the fundraising plan

**Parameters:**

- `id`: Asset package ID

```solidity
function startRaisePlan(uint256 id) public onlyRaiser
```

## 💰 `paySecurityFund` 

Initiator pays the security deposit

**Parameters:**

- `id`: Asset package ID
- `value`: Amount of the security deposit

```solidity
function paySecurityFund(uint256 id) public payable onlyRaiser
```

## 💰`withdrawSecurityFund`

Withdraw the initiator's security deposit

**Parameters:**

- `id`: Asset package ID

```solidity
function withdrawSecurityFund(uint256 id) public onlyRaiser
```

## 💰 `raiserWithdraw`

The initiator withdraws the profit

**Parameters:**

- `id`: Asset package ID

```solidity
function raiserWithdraw(uint256 id) public onlyRaiser
```

## 🚫 `closeRaisePlan`

Initiator closes the fundraising plan

**Parameters:**

- `id`: Asset package ID

```solidity
function closeRaisePlan(uint256 id) public onlyRaise
```

### 💰 `raiserWillReleaseReward`

Get the number of unreleased rewards of the asset package initiator

**Parameters:**

- `id`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of unreleased rewards of the initiator |

```solidity
function raiserWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `raiserRewardAvailableLeft`

Get the number of rewards that the initiator of the asset package can withdraw

**Parameters:**

- `id`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of rewards that the initiator can withdraw |

```solidity
function raiserRewardAvailableLeft(uint256 id) public view returns (uint256)
```

## 🔍 `gotRaiserReward`

Get the number of rewards that the initiator of the asset package has received

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Number of rewards that the initiator has received |

```solidity
function gotRaiserReward(uint256 key) public view returns (uint256)
```

## 🔍 `securityFundRemain`

Get the remaining amount of the initiator's security deposit in the asset package

**Parameters:**

- `key`: Asset package ID

**Function Returns:**

| Type | Description |
| :-----------: | :-----------: |
| uint256 | Remaining amount of the initiator's security deposit |

```solidity
function securityFundRemain(uint256 key) public view returns (uint256)
```