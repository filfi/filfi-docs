# Introduction to FilFi Architecture

FilFi is a decentralized application platform based on smart contracts, aiming to provide users with simple, secure, and reliable services. The following is a detailed introduction to the FilFi architecture.

## Smart Contract Architecture

At the core of FilFi is a smart contract-based architecture, ensuring transparency and verifiability of all operations.

<!-- [![FilFi Architecture Diagram](/files/filfi-design.png)](/files/filfi-design.png) -->
<a href="/files/filfi-design.png" target="_blank">
  <img src="/files/filfi-design.png" alt="Architecture Diagram" />
</a>

As shown in the diagram above, FilFi's architecture includes a key component: the Oracle. Due to the current limitations of the Filecoin network, it is not possible to directly obtain reward and penalty data from the chain. Therefore, it is necessary to use the Oracle to push this data to the smart contract.

## Oracle

The Oracle, as an independent component, is responsible for pushing offline reward and penalty data to the smart contract. Although this design introduces a certain degree of centralization risk, rest assured that the oracle's role is limited to passing reward data to the contract.

In order to cope with the possible cessation of FilFi operations, a fallback plan is built into the smart contract. When a node expires, after all linear rewards are released, the contract will automatically withdraw all available balances of the miner and allocate them according to the following priorities:

1. Builder's pledged coins
2. Builder's earnings
3. Sponsor's earnings
4. SP's pledged coins
5. SP's earnings

This design ensures that even in the event of FilFi ceasing operations, users' funds can still be allocated according to predetermined rules, safeguarding users' interests.