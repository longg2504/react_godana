// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const chartData = (categories, seriesData) => ({
  height: 480,
  type: 'bar',
  options: {
    chart: {
      id: 'bar-chart',
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%'
      }
    },
    xaxis: {
      type: 'category',
      categories: categories
    },
    legend: {
      show: true,
      fontSize: '14px',
      fontFamily: `'Roboto', sans-serif`,
      position: 'bottom',
      offsetX: 20,
      labels: {
        useSeriesColors: false
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8
      }
    },
    fill: {
      type: 'solid'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: true
    }
  },
  series: seriesData
});

export default chartData;
