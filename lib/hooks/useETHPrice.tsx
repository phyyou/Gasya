import { fetcher } from "@lib/fetcher";
import useSWR from "swr";

interface UpbitAPI {
  market: "KRW-ETH";
  trade_date: string;
  trade_time: string;
  trade_date_kst: string;
  trade_time_kst: string;
  trade_timestamp: number;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  prev_closing_price: number;
  change: string;
  change_price: number;
  change_rate: number;
  signed_change_price: number;
  signed_change_rate: number;
  trade_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  highest_52_week_price: number;
  highest_52_week_date: string;
  lowest_52_week_price: number;
  lowest_52_week_date: string;
  timestamp: number;
}

function useETHPrice() {
  const { data, error } = useSWR<Array<UpbitAPI>>(
    "https://api.upbit.com/v1/ticker?markets=KRW-ETH",
    fetcher,
    {
      refreshInterval: 10000,
      onErrorRetry: (_error, key, config, revalidate, { retryCount }) => {
        setTimeout(() => revalidate({ retryCount }), 7000);
      },
    }
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useETHPrice;
