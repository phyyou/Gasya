import { GasAPI } from "@lib/types/gas";

const apiKeyToken = process.env.apiKeyToken;

interface EtherscanData {
  status: string;
  message: string;
  result: {
    LastBlock: string;
    SafeGasPrice: string;
    ProposeGasPrice: string;
    FastGasPrice: string;
    suggestBaseFee: string;
    gasUsedRatio: string;
  };
}

export async function getGasFromEtherscan() {
  const etherscanRes = await fetch(
    `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${apiKeyToken}`
  );
  const data: EtherscanData = await etherscanRes.json();
  const resData: GasAPI = {
    low: +data.result.SafeGasPrice * 0.000021,
    standard: +data.result.ProposeGasPrice * 0.000021,
    fast: +data.result.FastGasPrice * 0.000021,
  };
  if (resData.standard === null) return null;
  return resData;
}
