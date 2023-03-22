export const backgroundColor = [
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(255, 99, 132, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 180, 64, 0.6)",
  " rgba(219,32,101, 0.6)",
  " rgba(255,129,153, 0.6)",
  " rgba(255,170,114, 0.6)",
  " rgba(141,131,119, 0.6)",
  " rgba(255,255,121, 0.6)",
  " rgba(157,55,0, 0.6)",
  " rgba(31,48,83, 0.6)",
  " rgba(0,154,105, 0.6)",
  " rgba(172,156,250, 0.6)",
  " rgba(255,138,238, 0.6)",
];
export const color = [
  "rgba(255, 99, 132, 0.6)",
  "rgba(54, 162, 235, 0.6)",
  "rgba(255, 206, 86, 0.6)",
  "rgba(75, 192, 192, 0.6)",
  "rgba(153, 102, 255, 0.6)",
  "rgba(255, 180, 64, 0.6)",
  " rgba(219,32,101, 0.6)",
  " rgba(255,129,153, 0.6)",
  " rgba(255,170,114, 0.6)",
  " rgba(141,131,119, 0.6)",
  " rgba(255,255,121, 0.6)",
  " rgba(157,55,0, 0.6)",
  " rgba(31,48,83, 0.6)",
  " rgba(0,154,105, 0.6)",
  " rgba(172,156,250, 0.6)",
  " rgba(255,138,238, 0.6)",
];

const options = {
  x: { grid: { borderWidth: 5, lineWidth: 0 } },
  y: {
    beginAtZero: true,
    grid: {
      borderWidth: 5,
      lineWidth: 0,
    },
  },
};

export const pieOptions = {
  backgroundColor: backgroundColor,
  borderWidth: 3,
  // borderColor: 'rgba(0,0,0,0)',
};
export const lineOptions = {
  fill: false,
  lineTension: 0.1,
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: "miter",
  lineWidth: 5,
  borderWidth: 5,
  pointBorderWidth: 2,
  pointHoverRadius: 5,
  pointHoverBorderWidth: 2,
  scales: options,
};
export const barOptions = {
  scales: options,
  borderWidth: 1,
};
