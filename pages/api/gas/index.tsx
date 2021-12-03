import { getGasFromEtherscan } from "@lib/api/gas";
import { GasAPI } from "@lib/types/gas";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GasAPI>
) {
  const data = await getGasFromEtherscan();
  if (data === null) {
    res.status(429);
    return;
  }
  res.status(200).json(data);
}
