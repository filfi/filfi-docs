# Solidity API

## ⏳ `timedPlanState`

获取募集计划状态

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 募集计划当前状态：0: 等待开始 1:募集中 2: 募集计划关闭 3:募集成功 4:募集失败 9:已销毁 |

```solidity
function timedPlanState(uint256 id) public view returns (uint256)
```

## 🔄 `backOwner`

将节点owner权限归还给服务商设置的owner地址

```solidity
function backOwner() public
```

## 💰 `staking`

建设者质押

**参数:**

- `id`: 资产包ID

```solidity
function staking(uint256 id) public payable
```

## 📦 `startPreSeal`

提前进入封装期。只有在募集达到最小募集目标的情况下才会执行，执行后募集的FIL会转到miner，SP可以开始封装

**参数:**

- `id`: 资产包ID

```solidity
function startPreSeal(uint256 id) public
```

## 💰 `getBack`

没有达到募集计划的最小目标，募集失败，此接口返回退还的质押币数量和利息

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 返还质押币数量 |
| uint256 | 获得的利息 |

```solidity
function getBack(uint256 id, address account) public view returns (uint256, uint256)
```

## 💰 `unStaking`

募集计划募集失败后，取回质押币和利息

**参数:**

- `id`: 资产包ID

```solidity
function unStaking(uint256 id) public
```

## 💰 `investorWithdraw`

建设者提取收益

**参数:**

- `id`: 资产包ID

```solidity
function investorWithdraw(uint256 id) public
```

## 💰 `availableRewardOf`

获取资产包下，某个地址可提取的收益

**参数:**

- `id`: 资产包ID
- `addr`: 查询地址

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 可提取收益数量 |

```solidity
function availableRewardOf(uint256 id, address addr) public view returns (uint256)
```

## 💰 `totalRewardOf`

获取资产包下，某个地址的总收益

**参数:**

- `id`: 资产包ID
- `addr`: 查询地址

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 总收益数量 |

```solidity
function totalRewardOf(uint256 id, address addr) public view returns (uint256)
```



## 💰 `willReleaseOf`

获取资产包下，某个地址待释放的收益

**参数:**

- `id`: 资产包ID
- `addr`: 查询地址

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 待释放收益数量 |

```solidity
function willReleaseOf(uint256 id, address addr) public view returns (uint256)
```

## 🔍 `getToolAddr`

获取相关合约地址

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| address | 工具合约地址 |
| address | 与Miner交互的合约地址 |
| address | 逻辑合约地址 |
| address | 扩展逻辑合约地址 |

```solidity
function getToolAddr() public pure returns (address tool, address miner, address process, address processSecond)
```

## 🔍 `totalRewardAmount`

获取当前资产包总收益

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 资产包总收益数量 |

```solidity
function totalRewardAmount(uint256 id) public view returns (uint256)
```

## 🔍 `totalReleasedRewardAmount`

获取当前资产包已释放的总收益

**参数:**

- `id`: 资产包ID

**函数返回:**

| 类型 | 描述 |
| :-----------: | :-----------: |
| uint256 | 资产包已释放的总收益数量 |

```solidity
function totalReleasedRewardAmount(uint256 id) public view returns (uint256)
```