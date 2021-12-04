import React, { FC } from "react";
import {
  CircularProgress,
  Stack,
  Skeleton,
  Box,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/react";
import GasBox from "./GasBox";
import useGas from "@lib/hooks/useGas";
import useETHPrice from "@lib/hooks/useETHPrice";
import SkeletonGasBox from "./SkeletonGasBox";

const GasBoxView: FC = () => {
  const { gas } = useGas();
  const { data: ethData } = useETHPrice();
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      marginTop={"3rem"}
      spacing={{ base: "4", md: "24" }}
    >
      {gas && ethData ? (
        <>
          <GasBox
            title={"느리게"}
            ETH={gas.low}
            KRW={Math.round(ethData[0].trade_price * gas.low)}
          />
          <GasBox
            title={"평균"}
            ETH={gas.standard}
            KRW={Math.round(ethData[0].trade_price * gas.standard)}
          />
          <GasBox
            title={"빠르게"}
            ETH={gas.fast}
            KRW={Math.round(ethData[0].trade_price * gas.fast)}
          />
        </>
      ) : (
        <>
          <SkeletonGasBox title={"느리게"} />
          <SkeletonGasBox title={"평균"} />
          <SkeletonGasBox title={"빠르게"} />
        </>
      )}
    </Stack>
  );
};

export default GasBoxView;
