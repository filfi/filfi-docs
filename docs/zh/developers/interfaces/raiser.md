# Solidity API

## 🚀 `startRaisePlan`

发起人启动募集计划

**参数:**

- `id`: 资产包ID

```solidity
function startRaisePlan(uint256 id) public onlyRaiser
```

## 💰 `paySecurityFund` 

缴纳发起人保证金 

**参数:**

- `id`: 资产包ID
- `value`: 保证金金额

```solidity
function paySecurityFund(uint256 id) public payable onlyRaiser
```

## 💰`withdrawSecurityFund`

提取发起人保证金

**参数:**

- `id`: 资产包ID

```solidity
function withdrawSecurityFund(uint256 id) public onlyRaiser
```

## 💰 `raiserWithdraw`

发起人提取收益

**参数:**

- `id`: 资产包ID

```solidity
function raiserWithdraw(uint256 id) public onlyRaiser
```

## 🚫 `closeRaisePlan`

发起人关闭募集计划

**参数:**

- `id`: 资产包ID

```solidity
function closeRaisePlan(uint256 id) public onlyRaise
```

### 💰 `raiserWillReleaseReward`

获取资产包发起人未释放的收益数量

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 发起人未释放的收益数量 |

```solidity
function raiserWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `raiserRewardAvailableLeft`

获取资产包发起人可提取的收益数量

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 发起人可提取的收益数量 |

```solidity
function raiserRewardAvailableLeft(uint256 id) public view returns (uint256)
```

## 🔍 `gotRaiserReward`

获取资产包下，发起人已领取的奖励数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 发起人已领取的奖励数量 |

```solidity
function gotRaiserReward(uint256 key) public view returns (uint256)
````

## 🔍 `securityFundRemain`

获取资产包下，发起人保证金剩余数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 发起人保证金剩余数量 |

```solidity
function securityFundRemain(uint256 key) public view returns (uint256)
````