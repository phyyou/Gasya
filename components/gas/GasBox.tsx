import { Box, Stat, StatHelpText, StatNumber, Heading } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  ETH?: number;
  KRW?: number;
}

const GasBox: FC<Props> = ({ ETH, KRW }) => {
  return (
    <Box>
      <Heading textAlign={"center"} size={"sm"}>
        평균
      </Heading>
      <Box
        shadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"12px"}
        width={"12.5rem"}
        height={"7.5rem"}
      >
        <Stat paddingTop={"8"} textAlign={"center"}>
          <StatNumber textShadow={"0 4px 8px rgb(0 0 0 / 25%)"}>
            {ETH && ETH.toFixed(5) + " ETH"}
          </StatNumber>
          <StatHelpText>{KRW?.toLocaleString()}원</StatHelpText>
        </Stat>
      </Box>
    </Box>
  );
};

export default GasBox;
