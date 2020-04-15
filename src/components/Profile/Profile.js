import React, {useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import extProps from './propTypes';
import Chart from "react-apexcharts";
import ShortAddressCopyButton from "../ShortAddressCopyButton";
import StakeProfileMenu from "./BlockiesMenu";
import AmountSpan from "./AmountSpan";
import Skeleton from "@material-ui/lab/Skeleton";

const defaultOption = {
  chart: {
    toolbar: {
      show: false
    },
    sparkline: {
      enabled: true
    }
  },
  dataLabels: {
    enabled: false
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded',
      columnWidth: '70%'
    }
  },
  stroke: {
    show: true,
    color: '#495368',
    curve: 'smooth',
    width: 2
  },
  fill: {
    color: '#5383ff',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.3,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0,
      stops: [0, 100]
    }
  },
  colors: ['#5383ff'],
  legend: {
    show: false
  },
  labels: [],
  xaxis: {
    crosshairs: {
      width: 1
    }
  },
  yaxis: {
    min: 0
  }
};
const defaultData = [
  {
    name: 'Token',
    data: []
  }
];

const Profile = React.memo(({ classes, messages, walletAddress, stake, pendingReward, tokenAge,
                                   stakeTotal, feesTotal, share, tokenAgeList, onEditAddress, onLogout, isLoading, isChartLoading }) => {
  const [chartData, setChartData] = useState(defaultData);
  const [chartOption, setChartOption] = useState(defaultOption);

  useEffect(() => {
    if (!!tokenAgeList && !!tokenAgeList.length && !chartData[0].data.length) {
      setChartOption({
        ...chartOption,
        labels: tokenAgeList.map((_, i) => (tokenAgeList.length - i) + ' Day')
      });
      setChartData([{
        ...chartData[0],
        data: tokenAgeList,
      }]);
    }
  }, [tokenAgeList, chartOption, chartData, setChartData, setChartOption]);

  return (
    <>
      <StakeProfileMenu messages={messages} walletAddress={walletAddress} onLogout={onLogout} onEditAddress={onEditAddress} />
      <ShortAddressCopyButton messages={messages} walletAddress={walletAddress} />
      <div className={classes.divYourStake}>
        <AmountSpan title={messages['Your Stake']} number={stake} messages={messages} isShowLoopring isXl isLoading={isLoading} />
      </div>

      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <AmountSpan title={messages['Your Pending Reward']} number={pendingReward} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={6}>
          <AmountSpan title={messages['Your Token Age']} number={tokenAge} isDay format="(0.0a)" isLoading={isChartLoading} />
        </Grid>
      </Grid>
      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <AmountSpan title={messages['Total Stake']} number={stakeTotal} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={4}>
          <AmountSpan title={messages['Total Reward']} number={feesTotal} isShowLoopring isLoading={isLoading} />
        </Grid>
        <Grid item xs={4}>
          <AmountSpan title={messages['Your Share']} number={share} isPercent isLoading={isChartLoading} format="(0.000a)" />
        </Grid>
      </Grid>
      <div className="divider my-4" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div className="card-header border-0 d-block">
              <span className="text-uppercase pb-1 pt-1 text-black d-block text-center font-weight-bold font-size-lg">
                {messages['Staked Tokens Age Distribution']}
              </span>
          </div>
          { !!chartData[0].data.length && !isChartLoading ? (
            <Chart
              options={chartOption}
              series={chartData}
              type="area"
              height={150}
            />
          ) : (<Skeleton height={150} />)}
        </Grid>
      </Grid>
    </>
  );
});

Profile.propTypes = extProps;

export default Profile;
