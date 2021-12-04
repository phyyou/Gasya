import React, { FC, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import { Box } from "@chakra-ui/react";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const options: Highcharts.Options = {
  title: {
    text: "가스 차트(현재 개발중)",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};
const GasChart: FC<HighchartsReact.Props> = (props) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <Box w={"full"}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
        {...props}
      />
    </Box>
  );
};

export default GasChart;
