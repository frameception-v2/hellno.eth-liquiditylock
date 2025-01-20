export const PROJECT_ID = 'farcaster-frames-template';
export const PROJECT_TITLE = "LiquidityLock Frame";
export const PROJECT_DESCRIPTION = "Lock liquidity and earn rewards";

// LiquidityLock contract details
export const CONTRACT_ADDRESS = "0x719Fdd695Be2b410a22D0F3AC87151e09f069e33"; // Base Mainnet contract address
export const WETH_ADDRESS = "0x4200000000000000000000000000000000000006"; // WETH address on Base
export const HIGHER_ADDRESS = "0x7dbdBF103Bb03c6bdc584c0699AA1800566f0F84"; // HIGHER token address
export const SWAP_ROUTER_ADDRESS = "0x2626664c2603336E57B271c5C0b26F421741e481"; // Swap router address
export const POSITION_MANAGER_ADDRESS = "0x03a520b32C04BF3bEEf7BEb72E919cf822Ed34f1"; // Position manager address

export const LIQUIDITY_LOCK_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "quantity", "type": "uint256" }
    ],
    "name": "donate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
