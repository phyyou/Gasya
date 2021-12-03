import { Container, VStack, Box, Img, Heading, Text } from "@chakra-ui/react";
import GasBoxView from "@components/gas/GasBoxView";
import GasChart from "@components/gas/GasChart";
import { getGasFromEtherscan } from "@lib/api/gas";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

interface Props {
  fallback: object;
  children?: ReactNode;
}

const Home: NextPage<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={fallback}>
      <Container as={"main"}>
        <VStack mt={{ base: "6", md: "12" }} spacing={"8"}>
          <Box d={"flex"} flexDir={"column"} alignItems={"center"}>
            <Img
              alt={"Logo-Gasya"}
              src={"/icons/gasya.svg"}
              w={{ base: 16, md: 32 }}
            ></Img>
            <Heading
              mt={4}
              textShadow={"0 4px 8px rgb(0 0 0 / 25%)"}
              size={"xl"}
            >
              가스야
            </Heading>
            <Text mt={2} size={"sm"}>
              현재 가스비를 확인합니다.
            </Text>
          </Box>
          <GasBoxView />
          <GasChart />
        </VStack>
      </Container>
    </SWRConfig>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  // This is where the error occurs
  const gas = await getGasFromEtherscan();
  return {
    props: {
      fallback: {
        "/api/gas": gas,
      },
    },
    revalidate: 10,
  };
};
