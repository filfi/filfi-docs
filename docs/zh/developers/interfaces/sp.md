# Solidity API

## 🖊️ `spSignWithMiner`

服务商签名(需要通过服务商签名将节点的owner变更成智能合约，否则签名失败)

```solidity
function spSignWithMiner() public onlySp
```
 
## 💰 `payOpsSecurityFund`

服务商缴纳运维保证金

**参数:**

- `id`: 资产包ID

```solidity
function payOpsSecurityFund(uint256 id) public payable onlySp
```

## 💰 `withdrawOpsSecurityFund`

服务商提取运维保证金

**参数:**

> id: 资产包id  

```solidity
function withdrawOpsSecurityFund(uint256 id) public onlySp
```

## 💰 `spWithdraw`

服务商提取收益

**参数:**

> id: 资产包id  

```solidity
function spWithdraw(uint256 id) public onlySp
```

## 🛠️ setMinerBackOwner

设置募集计划到期后，接管节点的owner地址

**参数:**

> minerOwner: 智能合约将节点的owner权限移交的地址 

```solidity
function setMinerBackOwner(bytes minerOwner) public
```

## 💰 `opsFundReward`

返回资产包下SP的奖励金额

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP的奖励金额 |

```solidity
function opsFundReward(uint256 id) public view returns (uint256)
```

## 💰 `spWillReleaseReward`

获取资产包SP未释放的收益数量

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP未释放的收益数量 |

```solidity
function spWillReleaseReward(uint256 id) public view returns (uint256)
```

## 💰 `spRewardAvailableLeft`

获取资产包SP当前可提取的收益数量

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP可提取收益数量 |

```solidity
function spRewardAvailableLeft(uint256 id) public view returns (uint256 amountReturn)
```

## 🔍 `spFine`

获取资产包下，SP运维过程中，产生的总罚金

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 总罚金金额 |

```solidity
function spFine(uint256 key) public view returns (uint256)
````

## 🔍 `spRewardLock`

获取资产包下，SP锁定的奖励数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP锁定的奖励数量 |

```solidity
function spRewardLock(uint256 key) public view returns (uint256)
````

## 🔍 `gotSpReward`

获取资产包下，SP已领取的奖励数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP已领取的奖励数量 |

```solidity
function gotSpReward(uint256 key) public view returns (uint256)
````

## 🔍 `opsCalcFund`

获取资产包下，SP保证金数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP保证金数量 |

```solidity
function opsCalcFund(uint256 key) public view returns (uint256)
````

## 🔍 `opsSecurityFundRemain`

获取资产包下，SP保证金剩余数量

**参数:**

- `key`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | SP保证金剩余数量 |

```solidity
function opsSecurityFundRemain(uint256 key) public view returns (uint256)
````