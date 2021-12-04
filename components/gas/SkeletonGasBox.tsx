import {
  Box,
  Stat,
  StatHelpText,
  StatNumber,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {
  title?: string;
}

const SkeletonGasBox: FC<Props> = ({ title }) => {
  return (
    <Box>
      <Heading textAlign={"center"} size={"sm"}>
        {title}
      </Heading>
      <Box
        shadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        borderRadius={"12px"}
        width={"12.5rem"}
        height={"7.5rem"}
      >
        <Stat paddingTop={"8"} textAlign={"center"}>
          <StatNumber textShadow={"0 4px 8px rgb(0 0 0 / 25%)"}>
            <SkeletonText />
          </StatNumber>
          <StatHelpText>
            <SkeletonText />
          </StatHelpText>
        </Stat>
      </Box>
    </Box>
  );
};

export default SkeletonGasBox;
