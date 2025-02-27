import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export const Dashboard = () => {


    const [state, setState] = useState({        
        series: [{
          name: 'Income',
          type: 'column',
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
          name: 'Cashflow',
          type: 'column',
          data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
          name: 'Revenue',
          type: 'line',
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            stacked: false
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: [1, 1, 4]
          },
          title: {
            text: 'XYZ - Stock Analysis (2009 - 2016)',
            align: 'left',
            offsetX: 110
          },
          xaxis: {
            categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
          },
          yaxis: [
            {
              seriesName: 'Income',
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              },
              title: {
                text: "Income (thousand crores)",
                style: {
                  color: '#008FFB',
                }
              },
              tooltip: {
                enabled: true
              }
            },
            {
              seriesName: 'Cashflow',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#00E396'
              },
              labels: {
                style: {
                  colors: '#00E396',
                }
              },
              title: {
                text: "Operating Cashflow (thousand crores)",
                style: {
                  color: '#00E396',
                }
              },
            },
            {
              seriesName: 'Revenue',
              opposite: true,
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#FEB019'
              },
              labels: {
                style: {
                  colors: '#FEB019',
                },
              },
              title: {
                text: "Revenue (thousand crores)",
                style: {
                  color: '#FEB019',
                }
              }
            },
          ],
          tooltip: {
            fixed: {
              enabled: true,
              position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
              offsetY: 30,
              offsetX: 60
            },
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          }
        },
      
      
    });
    
  return (
    <>
    <div className="bg-gray-600 p-6">

{/* <!-- Dashboard Container --> */}
<div className="w-full">
    
    {/* <!-- Top Stats Section --> */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* <!-- Total Debit --> */}
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
                <h1 className="text-black font-medium text-lg ">Total Debit</h1>
                <div className="text-black text-lg font-semibold">PKR 0.00</div>
            </div>
            <p className="text-green-500 text-sm mt-2">↑ 11% Since last month</p>
        </div>

        {/* <!-- Total Credit --> */}
        <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center justify-between">
                <h1 className="text-black font-medium text-lg ">Total Credit</h1>
                <div className="text-black text-lg font-semibold">PKR 0.00</div>
            </div>
            <p className="text-green-500 text-sm mt-2">↑ 10% Since last month</p>
        </div>

        {/* <!-- Total Customers --> */}
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
            <h1 className="text-black font-medium text-lg ">Total Customers</h1>
            <div className="text-black text-lg font-semibold">0</div>
            </div>
            <p className="text-red-500 text-sm mt-2">↓ 14% Since last month</p>
        </div>

    </div>

    {/* <!-- Task Progress --> */}
    <div className='md:flex w-full md:gap-x-2'>
    <div className="bg-white p-6 mt-6 rounded-xl shadow-lg w-[30%] h-fit">
        <h1 className="text-black font-medium text-lg">Task Progress</h1>
        <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
            <div className="bg-blue-500 h-3 rounded-full w-[75%]" ></div>
        </div>
        <p className="text-right text-sm font-semibold mt-1">75.5%</p>
    </div>

    {/* <!-- Sales Chart Placeholder --> */}
    <div className="bg-white p-6 mt-6 rounded-xl shadow-lg w-[70%]">
        <div className="flex justify-between items-center">
            <h3 className="text-gray-500">Sales</h3>
            <button className="px-4 py-1 bg-blue-500 text-white rounded-lg text-sm">Sync</button>
        </div>
        <div className="mt-4 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 w-full">
        <div className ="w-full">
                <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
              </div>
        </div>
    </div>
    </div>
</div>

</div>
        </>
  )
}
