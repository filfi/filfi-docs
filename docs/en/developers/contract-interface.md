# Solidity API

---

### Modifiers:
### onlyManager
> Manager permission: Push encapsulation progress, rewards, and penalties.
```solidity
modifier onlyManager()
```

### onlyRaiser
> Organizer permission
```solidity
modifier onlyRaiser()
```

### onlySp
> SP (Service Provider) permission
```solidity
modifier onlySp()
```
&nbsp;
&nbsp;
&nbsp;
&nbsp;
---

### Functions:

### paySecurityFund

```solidity
function paySecurityFund(uint256 id) public payable onlyRaiser
```

### startRaisePlan

```solidity
function startRaisePlan(uint256 id) public onlyRaiser
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
---

### spSignWithMiner

```solidity
function spSignWithMiner() public onlySp
```

### payOpsSecurityFund

```solidity
function payOpsSecurityFund(uint256 id) public payable onlySp
```

### withdrawOpsSecurityFund
> id: Asset package ID  
```solidity
function withdrawOpsSecurityFund(uint256 id) public onlySp
```

### withdrawSecurityFund

```solidity
function withdrawSecurityFund(uint256 id) public onlySp
```

### spWithdraw

```solidity
function spWithdraw(uint256 id) public onlySp
```


&nbsp;
&nbsp;
&nbsp;
&nbsp;
---

### setMinerBackOwner

```solidity
function setMinerBackOwner(bytes minerOwner) public
```

### raiserWithdraw

```solidity
function raiserWithdraw(uint256 id) public
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;
---

### timedPlanState

```solidity
function timedPlanState(uint256 id) public view returns (uint256)
```

### backOwner

```solidity
function backOwner() public
```

### closeRaisePlan

```solidity
function closeRaisePlan(uint256 id) public
```


### opsFundReward

```solidity
function opsFundReward(uint256 id) public view returns (uint256)
```

### staking

```solidity
function staking(uint256 id) public payable
```

### raiseExpire

```solidity
function raiseExpire(uint256 id) public
```

### startPreSeal

```solidity
function startPreSeal(uint256 id) public
```

### getBack

```solidity
function getBack(uint256 id, address account) public view returns (uint256, uint256)
```

### unStaking

```solidity
function unStaking(uint256 id) public
```

### investorWithdraw

```solidity
function investorWithdraw(uint256 id) public
```



### raiserWillReleaseReward

```solidity
function raiserWillReleaseReward(uint256 id) public view returns (uint256)
```

### raiserRewardAvailableLeft

```solidity
function raiserRewardAvailableLeft(uint256 id) public view returns (uint256)
```

### spWillReleaseReward

```solidity
function spWillReleaseReward(uint256 id) public view returns (uint256)
```

### spRewardAvailableLeft

```solidity
function spRewardAvailableLeft(uint256 id) public view returns (uint256 amountReturn)
```

### pushOldAssetPackValue

```solidity
function pushOldAssetPackValue(uint256 id, uint256 totalPledge, uint256 released, uint256 willRelease) public
```

### pushSealProgress

```solidity
function pushSealProgress(uint256 id, uint256 amount) public
```

### pushFinalProgress

```solidity
function pushFinalProgress(uint256 id, uint256 amount) public
```

### destroyNode

```solidity
function destroyNode(uint256 id) public
```

### pushSpFine

```solidity
function pushSpFine(uint256 id, uint256 fineAmount) public
```

### pushPledgeReleased

```solidity
function pushPledgeReleased(uint256 id, uint256 released) public
```

### availableRewardOf

```solidity
function availableRewardOf(uint256 id, address addr) public view returns (uint256)
```

### totalRewardOf

```solidity
function totalRewardOf(uint256 id, address addr) public view returns (uint256)
```

### willReleaseOf

```solidity
function willReleaseOf(uint256 id, address addr) public view returns (uint256)
```

### getToolAddr

```solidity
function getToolAddr() public pure returns (address tool, address miner, address process, address processSecond)
```