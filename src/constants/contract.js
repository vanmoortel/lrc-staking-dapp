export const STAKING = {
  address: '0xF4662bB1C4831fD411a95b8050B3A5998d8A4A5b',
  jsonInterface: [{
    constant: true, inputs: [{ internalType: 'address', name: 'user', type: 'address' }], name: 'getUserStaking', outputs: [{ internalType: 'uint256', name: 'withdrawalWaitTime', type: 'uint256' }, { internalType: 'uint256', name: 'rewardWaitTime', type: 'uint256' }, { internalType: 'uint256', name: 'balance', type: 'uint256' }, { internalType: 'uint256', name: 'pendingReward', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'total', outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }, { internalType: 'uint64', name: 'depositedAt', type: 'uint64' }, { internalType: 'uint64', name: 'claimedAt', type: 'uint64' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'withdraw', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'numAddresses', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'lrcAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'claim', outputs: [{ internalType: 'uint256', name: 'claimedAmount', type: 'uint256' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [], name: 'claimOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'getTotalStaking', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'MIN_CLAIM_DELAY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'renounceOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'address', name: '_protocolFeeVaultAddress', type: 'address' }], name: 'setProtocolFeeVault', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'stake', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'MIN_WITHDRAW_DELAY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'protocolFeeVaultAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'stakings', outputs: [{ internalType: 'uint256', name: 'balance', type: 'uint256' }, { internalType: 'uint64', name: 'depositedAt', type: 'uint64' }, { internalType: 'uint64', name: 'claimedAt', type: 'uint64' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'pendingOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    inputs: [{ internalType: 'address', name: '_lrcAddress', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {
    anonymous: false,
    inputs: [{
      indexed: false, internalType: 'address', name: 'feeVaultAddress', type: 'address',
    }],
    name: 'ProtocolFeeVaultChanged',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: true, internalType: 'address', name: 'user', type: 'address',
    }, {
      indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
    }],
    name: 'LRCStaked',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: true, internalType: 'address', name: 'user', type: 'address',
    }, {
      indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
    }],
    name: 'LRCWithdrawn',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: true, internalType: 'address', name: 'user', type: 'address',
    }, {
      indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
    }],
    name: 'LRCRewarded',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: true, internalType: 'address', name: 'previousOwner', type: 'address',
    }, {
      indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
    }],
    name: 'OwnershipTransferred',
    type: 'event',
  }],
};

export const FEE = {
  address: '0x4b89f8996892d137c3dE1312d1dD4E4F4fFcA171',
  jsonInterface: [{
    inputs: [{ internalType: 'address', name: '_lrcAddress', type: 'address' }], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, {
    anonymous: false,
    inputs: [{
      indexed: false, internalType: 'uint256', name: 'amountDAO', type: 'uint256',
    }, {
      indexed: false, internalType: 'uint256', name: 'amountBurn', type: 'uint256',
    }],
    name: 'DAOFunded',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
    }],
    name: 'LRCClaimed',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: true, internalType: 'address', name: 'previousOwner', type: 'address',
    }, {
      indexed: true, internalType: 'address', name: 'newOwner', type: 'address',
    }],
    name: 'OwnershipTransferred',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: false, internalType: 'uint256', name: 'time', type: 'uint256',
    }],
    name: 'SettingsUpdated',
    type: 'event',
  }, {
    anonymous: false,
    inputs: [{
      indexed: false, internalType: 'address', name: 'token', type: 'address',
    }, {
      indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256',
    }],
    name: 'TokenSold',
    type: 'event',
  }, { payable: true, stateMutability: 'payable', type: 'fallback' }, {
    constant: true, inputs: [], name: 'DAO_PERDENTAGE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'REWARD_PERCENTAGE', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'claimOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'claimStakingReward', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'daoAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'fundDAO', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'getProtocolFeeStats', outputs: [{ internalType: 'uint256', name: 'accumulatedFees', type: 'uint256' }, { internalType: 'uint256', name: 'accumulatedBurn', type: 'uint256' }, { internalType: 'uint256', name: 'accumulatedDAOFund', type: 'uint256' }, { internalType: 'uint256', name: 'accumulatedReward', type: 'uint256' }, { internalType: 'uint256', name: 'remainingFees', type: 'uint256' }, { internalType: 'uint256', name: 'remainingBurn', type: 'uint256' }, { internalType: 'uint256', name: 'remainingDAOFund', type: 'uint256' }, { internalType: 'uint256', name: 'remainingReward', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'lrcAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [], name: 'pendingOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [], name: 'renounceOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'sellTokenForLRC', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'tokenSellerAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ internalType: 'address', name: '_userStakingPoolAddress', type: 'address' }, { internalType: 'address', name: '_tokenSellerAddress', type: 'address' }, { internalType: 'address', name: '_daoAddress', type: 'address' }], name: 'updateSettings', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'userStakingPoolAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function',
  }],
};

export const TOKEN = {
  address: '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',
  jsonInterface: [{
    constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'approve', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_value', type: 'uint256' }], name: 'burn', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_subtractedValue', type: 'uint256' }], name: 'decreaseApproval', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_owner', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'burnFrom', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ name: 'accounts', type: 'address[]' }, { name: 'amounts', type: 'uint256[]' }], name: 'batchTransfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_value', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_addedValue', type: 'uint256' }], name: 'increaseApproval', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function',
  }, {
    constant: true, inputs: [], name: 'totalBurned', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function',
  }, {
    inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor',
  }, { payable: true, stateMutability: 'payable', type: 'fallback' }, {
    anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }, { indexed: true, name: 'spender', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Approval', type: 'event',
  }, {
    anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event',
  }, {
    anonymous: false, inputs: [{ indexed: true, name: 'burner', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Burn', type: 'event',
  }],
};
