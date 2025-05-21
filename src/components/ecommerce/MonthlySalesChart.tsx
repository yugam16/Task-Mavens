import { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useTheme } from "../../context/ThemeContext";

export default function MonthlySalesChart() {
  const { theme } = useTheme();

  // Revenue data (replace with your real data if needed)
  const revenueData = [589.12, 840.2, 898.0, 203.0, 400.01, 920.12, 398.0, 882.0, 390.0, 910.0, 410.12, 840.2];
  const totalRevenue = revenueData.reduce((acc, val) => acc + val, 0);

  const options: ApexOptions = {
    colors: [theme === "dark" ? "#7a5af8" : "#5B43F0"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 260,
      toolbar: { show: false },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 0,
        borderRadiusApplication: "end",
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      style: {
        colors: [theme === "dark" ? "#fff" : "#222"],
        fontWeight: 500,
        fontFamily: "Outfit, sans-serif",
      },
      offsetY: -20,
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: Array(12).fill(theme === "dark" ? "#cbd5e1" : "#64748b"),
          fontFamily: "Outfit, sans-serif",
        },
      },
    },
    legend: { show: false },
    yaxis: {
      labels: {
        formatter: (val: number) => val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        style: {
          colors: [theme === "dark" ? "#cbd5e1" : "#64748b"],
          fontFamily: "Outfit, sans-serif",
        },
      },
    },
    title: {
      text: '2023',
      floating: true,
      offsetY: 285,
      align: 'center',
      style: {
        color: theme == "dark" ? 'white' : 'black',
        fontSize: '12px',
        fontWeight: '200',
        fontFamily: 'Outfit, sans-serif',
      }
    },
    grid: {
      borderColor: theme === "dark" ? "#334155" : "#e5e7eb",
      yaxis: { lines: { show: true } },
      xaxis: { lines: { show: false } },
    },
    fill: { opacity: 1 },
    tooltip: {
      x: { show: false },
      y: {
        formatter: (val: number) => `$${val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      },
      theme: theme,
    },
  };
  const series = [
    {
      name: "Revenue",
      data: revenueData,
    },
  ];

  // Topbar state
  const [activeTab, setActiveTab] = useState("Revenue");
  const tabList = ["Revenue", "Orders", "Customers"];

  return (
    <div className="border border-gray-200 rounded-lg bg-gray-100 dark:border-gray-800 dark:bg-gray-900">
      {/* Topbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1 pb-2 border-b border-gray-200 my-2 dark:border-gray-800">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg mx-2 dark:border-gray-800">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-light text-sm transition-colors
                ${activeTab === tab
                  ? "bg-white text-gray-900 shadow-theme-xs dark:bg-gray-800 dark:text-white"
                  : "bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-400"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex col-span-12 items-right gap-3 relative justify-end">
          <button className="rounded-lg border border-gray-200 px-4 py-2 bg-white text-gray-700 font-light shadow-sm flex items-center gap-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
            All Categories
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
          </button>
          <button className="rounded-lg border border-gray-200 px-4 py-2 bg-white text-gray-700 font-light shadow-sm flex items-center gap-2 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
            Jun 2023
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.333 1C11.3993 1 11.4642 1.0194 11.5186 1.05566L11.5693 1.09766C11.6317 1.16007 11.6669 1.24479 11.667 1.33301V2.66699H13.833C14.1036 2.66699 14.3647 2.76076 14.5723 2.93066L14.6582 3.00879C14.8768 3.22749 14.9999 3.52378 15 3.83301V13.833C15 14.1037 14.9054 14.3647 14.7354 14.5723L14.6582 14.6582C14.4394 14.877 14.1424 15 13.833 15H2.16699C1.89627 15 1.63533 14.9054 1.42773 14.7354L1.3418 14.6582C1.123 14.4394 1 14.1424 1 13.833V3.83301C1.00008 3.56224 1.09444 3.30132 1.26465 3.09375L1.3418 3.00879C1.56059 2.79 1.85757 2.66699 2.16699 2.66699H4.33301V1.33301C4.33307 1.26677 4.35341 1.20274 4.38965 1.14844L4.43066 1.09766C4.47758 1.05074 4.53743 1.01962 4.60156 1.00684L4.66699 1C4.73311 1.00006 4.79733 1.01955 4.85156 1.05566L4.90234 1.09766C4.96478 1.16009 4.99991 1.24472 5 1.33301V2.66699H11V1.33301C11.0001 1.26689 11.0196 1.20267 11.0557 1.14844L11.0977 1.09766C11.1601 1.03522 11.2447 1.00009 11.333 1ZM4.66602 10.833C4.36877 10.8334 4.08134 10.9332 3.84863 11.1143L3.75195 11.1973C3.53597 11.4013 3.39484 11.6707 3.34961 11.9619L3.33691 12.0889C3.31956 12.3857 3.40131 12.6787 3.56836 12.9219L3.64551 13.0225C3.86354 13.2829 4.17254 13.45 4.50977 13.4902L4.52539 13.4922L4.54199 13.4932L4.64746 13.499L4.66113 13.5H4.6748C4.98406 13.5 5.28233 13.3924 5.51953 13.1982L5.61816 13.1094C5.86799 12.8594 6.0087 12.5204 6.00879 12.167C6.00879 11.8574 5.90065 11.5586 5.70605 11.3213L5.61816 11.2236C5.36812 10.9736 5.02843 10.833 4.6748 10.833H4.66602ZM7.99902 10.833C7.7018 10.8334 7.41429 10.9331 7.18164 11.1143L7.08594 11.1973C6.86984 11.4013 6.72886 11.6706 6.68359 11.9619L6.66992 12.0889C6.65257 12.3857 6.73439 12.6788 6.90137 12.9219L6.97852 13.0225C7.19664 13.283 7.50631 13.4501 7.84375 13.4902L7.85938 13.4922L7.875 13.4932L7.98047 13.499L7.99414 13.5H8.00879C8.31805 13.4999 8.61637 13.3926 8.85352 13.1982L8.95117 13.1094C9.2011 12.8594 9.34171 12.5205 9.3418 12.167C9.3418 11.8575 9.23447 11.5586 9.04004 11.3213L8.95117 11.2236C8.70124 10.9738 8.3622 10.8331 8.00879 10.833H7.99902ZM11.333 10.833C11.0358 10.8333 10.7483 10.9332 10.5156 11.1143L10.4189 11.1973C10.2029 11.4013 10.0619 11.6706 10.0166 11.9619L10.0029 12.0889C9.98558 12.3858 10.0682 12.6787 10.2354 12.9219L10.3115 13.0225C10.5296 13.283 10.8393 13.4501 11.1768 13.4902L11.1924 13.4922L11.208 13.4932L11.3145 13.499L11.3281 13.5H11.3418C11.6953 13.5 12.0342 13.3593 12.2842 13.1094C12.5341 12.8594 12.6747 12.5205 12.6748 12.167C12.6748 11.8575 12.5676 11.5586 12.373 11.3213L12.2842 11.2236C12.0342 10.9738 11.6953 10.833 11.3418 10.833H11.333ZM4.66602 7.5C4.3687 7.50035 4.08136 7.60008 3.84863 7.78125L3.75195 7.86426C3.53598 8.06832 3.39478 8.33763 3.34961 8.62891L3.33691 8.75488C3.31949 9.05167 3.40145 9.34476 3.56836 9.58789L3.64551 9.68945C3.86353 9.94974 4.17261 10.117 4.50977 10.1572L4.52539 10.1592L4.54199 10.1602L4.64746 10.166L4.66113 10.167H4.6748C4.9842 10.167 5.28228 10.0586 5.51953 9.86426L5.61816 9.77637C5.86817 9.52632 6.00879 9.1866 6.00879 8.83301C6.00871 8.52362 5.90048 8.22549 5.70605 7.98828L5.61816 7.89062C5.36812 7.64058 5.02843 7.5 4.6748 7.5H4.66602ZM7.99902 7.5C7.70174 7.50042 7.41432 7.60004 7.18164 7.78125L7.08594 7.86426C6.86979 8.06834 6.7288 8.33751 6.68359 8.62891L6.66992 8.75488C6.6525 9.05161 6.73453 9.34479 6.90137 9.58789L6.97852 9.68945C7.19663 9.94993 7.50639 10.1171 7.84375 10.1572L7.85938 10.1592L7.875 10.1602L7.98047 10.166L7.99414 10.167H8.00879C8.31819 10.1669 8.61632 10.0587 8.85352 9.86426L8.95117 9.77637C9.20122 9.52632 9.3418 9.18663 9.3418 8.83301C9.34172 8.52376 9.2343 8.22544 9.04004 7.98828L8.95117 7.89062C8.70123 7.64068 8.36225 7.50012 8.00879 7.5H7.99902ZM11.333 7.5C10.9932 7.50038 10.6661 7.63096 10.4189 7.86426C10.2029 8.06833 10.0618 8.33757 10.0166 8.62891L10.0029 8.75488C9.9855 9.05173 10.0684 9.34473 10.2354 9.58789L10.3115 9.68945C10.5296 9.95001 10.8393 10.1171 11.1768 10.1572L11.1924 10.1592L11.208 10.1602L11.3145 10.166L11.3281 10.167H11.3418C11.6512 10.167 11.9493 10.0587 12.1865 9.86426L12.2842 9.77637C12.5342 9.52632 12.6748 9.18663 12.6748 8.83301C12.6747 8.52369 12.5674 8.22546 12.373 7.98828L12.2842 7.89062C12.0342 7.64067 11.6953 7.50003 11.3418 7.5H11.333ZM1.66699 6H14.333V3.33301H1.66699V6Z" fill={theme == "dark" ? "white" : "#0E253C"} stroke={theme == "dark" ? "white" : "#0E253C"} />
            </svg>
          </button>
        </div>
      </div>
      {/* Card */}
      <div className="overflow-hidden rounded-2xl bg-transparent px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white/80">Revenue</h3>
          <div className="flex items-center gap-4">
            <span className="text-base font-light text-gray-600 dark:text-gray-500">Total Revenue: <span className="font-bold text-gray-900 dark:text-white">${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></span>
          </div>
        </div>
        <div className="max-w-full overflow-x-auto custom-scrollbar mt-2">
          <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
            <Chart options={options} series={series} type="bar" height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
