import React, { FC } from "react";
import { Stack } from "@chakra-ui/react";
import GasBox from "./GasBox";
import useGas from "@lib/hooks/useGas";
import useETHPrice from "@lib/hooks/useETHPrice";

const GasBoxView: FC = () => {
  const { gas } = useGas();
  const { data: ethData } = useETHPrice();
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      marginTop={"3rem"}
      spacing={{ base: "4", md: "24" }}
    >
      {gas && ethData && (
        <>
          <GasBox ETH={gas.low} KRW={ethData[0].trade_price * gas.low} />
          <GasBox
            ETH={gas.standard}
            KRW={ethData[0].trade_price * gas.standard}
          />
          <GasBox ETH={gas.fast} KRW={ethData[0].trade_price * gas.fast} />
        </>
      )}
    </Stack>
  );
};

export default GasBoxView;
