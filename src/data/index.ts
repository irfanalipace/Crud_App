import { EmployerOverallPerformTableProps } from "../pages/employer/components/OverallPerformTable";
import { TableProps } from "~/components";

/**
 * table data for the list of employers on the landing page. (it will be removed later on)
 */
export const employersList = [
  {
    name: "FAST BANANA, INC.",
    members: 9123,
    pbm: "Appro-Rx",
    reportDate: "01/14/2023",
    lastDate: "03/24/2023",
  },
  {
    name: "SPEEDY KIWI, LLC",
    members: 720,
    pbm: "MAXOR",
    reportDate: "07/4/2023",
    lastDate: "09/13/2023",
  },
  {
    name: "STRAWBERRY BLITZ",
    members: 4866,
    pbm: "MAXOR",
    reportDate: "07/14/2023",
    lastDate: "02/28/2023",
  },
  {
    name: "MANGO MANIA",
    members: 15279,
    pbm: "True-Rx",
    reportDate: "06/02/2023",
    lastDate: "07/24/2023",
  },
  {
    name: "GRAPES FOR THE CURE LLC",
    members: 208,
    pbm: "CVS Caremark",
    reportDate: "08/14/2023",
    lastDate: "01/24/2023",
  },
  {
    name: "RASPBERRY BLAST",
    members: 390,
    pbm: "True-Rx",
    reportDate: "07/24/2023",
    lastDate: "07/24/2023",
  },
  {
    name: "PAIR OF PEARS",
    members: 9142,
    pbm: "Express Script",
    reportDate: "07/24/2023",
    lastDate: "09/14/2023",
  },
  {
    name: "Dragon fruit fire",
    members: 57,
    pbm: "Appro-Rx",
    reportDate: "12/18/2023",
    lastDate: "03/23/2023",
  },
];

/**
 * table data for the tables in the "OVERALL PLAN PERFORMANCE" section on the employer page
 */
export const planPerformanceTableProps: EmployerOverallPerformTableProps[] = [
  {
    data: [
      { title: "EMPLOYER", amount: "$22,222", percent: "(18.0%)", color: "red.300" },
      { title: "MEMBER", amount: "$1,963", percent: "(-4.2%)", color: "green.300" },
      { title: "TOTAL", amount: "$20,259", percent: "(13.8%)", color: "red.300" },
    ],
  },
  {
    data: [
      { title: "RETAIL", amount: "$9,000", percent: "(1.0%)", color: "red.300" },
      { title: "MAIL", amount: "$2,222.00", percent: "(-2.5%)", color: "green.300" },
      { title: "SPECIALTY", amount: "$10,113.00", percent: "(-1.9%)", color: "green.300" },
      { title: "TOTAL", amount: "$1,963", percent: "(-3.4%)", color: "green.300" },
    ],
  },
  {
    data: [
      { title: "RETAIL", amount: "799", percent: "(1.2%)", color: "red.300" },
      { title: "MAIL", amount: "22", percent: "(1.8%)", color: "red.300" },
      { title: "SPECIALTY", amount: "2", percent: "(1.0%)", color: "red.300" },
      { title: "TOTAL", amount: "823", percent: "(4.0%)", color: "red.300" },
    ],
  },
];

/**
 * table columns for "PLAN COSTS" table in the opened expandable window on the employer page
 */
export const columnsForPlanCostsTable: TableProps["columns"] = [
  { label: "PARTY", id: "party", variant: "secondary", isSortable: false },
  {
    label: ["CURRENT PAY", "Pay Amount", "PMPM", "Percentage"],
    id: "current_pay",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["PRIOR PAY", "Pay Amount", "PMPM", "Percentage"],
    id: "prior_pay",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["CHANGE", "Pay Amount", "PMPM", "Percentage"],
    id: "change",
    variant: "secondary",
    isSortable: false,
  },
];

/**
 * table data for "PLAN COSTS" table in the opended expandable window on the employer page
 */

export const dataForPlanCostsTable = [
  {
    party: "EMPLOYER",
    current_pay: ["$123,456.00", "$1.13", "72.60%"],
    prior_pay: ["$101,234.00", "$0.92", "67.50%"],
    change: ["$222,222.00", "$2.03", "18.00%"],
  },
  {
    party: "MEMBER",
    current_pay: ["$46,802.00", "$0.43", "27.40%"],
    prior_pay: ["$48,765.00", "$0.45", "32.50%"],
    change: ["$1,963.00", "$0.02", "4.20%"],
  },
  {
    party: "TOTAL",
    current_pay: ["$170,258.00", "$1.56", "100.00%"],
    prior_pay: ["$149,999.00", "$1.37", "100.00%"],
    change: ["$20,259.00", "$2.05", "13.80%"],
  },
];

/**
 * table columns for "PHARMACY TYPE BY COST" table in the opened expandable window on the employer page
 */
export const columnsForPharmacyTypeByCostTable: TableProps["columns"] = [
  { label: "TYPE", id: "type", variant: "secondary", isSortable: false },
  {
    label: ["CURRENT COST", "Pay Amount", "Percentage"],
    id: "current_cost",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["PRIOR COST", "Pay Amount", "Percentage"],
    id: "prior_cost",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["CHANGE", "Pay Amount", "Percentage"],
    id: "change",
    variant: "secondary",
    isSortable: false,
  },
];

/**
 * table data for "PHARMACY TYPE BY COST" table in the opended expandable window on the employer page
 */

export const dataForPharmacyTypeByCostTable = [
  {
    type: "RETAIL",
    current_cost: ["$897,432.00", "58.70%"],
    prior_cost: ["$888,432.00", "58.00%"],
    change: ["$9,000.00", "1.0%"],
  },
  {
    type: "MAIL",
    current_cost: ["$87,654.00", "5.70%"],
    prior_cost: ["$89,876.00", "5.90%"],
    change: ["$2,222.00", "-2.50%"],
  },
  {
    type: "SPECIALTY",
    current_cost: ["$543,210.00", "35.50%"],
    prior_cost: ["$553,323.00", "36.10%"],
    change: ["$10,113.00", "-1.90%"],
  },
  {
    type: "TOTAL",
    current_cost: ["$1,528,296.00", "100.00%"],
    prior_cost: ["$1,531,631.00", "100.00%"],
    change: ["$1,963.00", "-3.40%"],
  },
];

/**
 * table columns for "PHARMACY TYPE BY COUNT" table in the opened expandable window on the employer page
 */
export const columnsForPharmacyTypeByCountTable: TableProps["columns"] = [
  { label: "TYPE", id: "type", variant: "secondary", isSortable: false },
  {
    label: ["CURRENT COUNT", "Net Rx Count", "Percentage"],
    id: "current_count",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["PRIOR COUNT", "Net Rx Count", "Percentage"],
    id: "prior_count",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["CHANGE", "Net Rx Count", "Percentage"],
    id: "change",
    variant: "secondary",
    isSortable: false,
  },
];

/**
 * table data for "PHARMACY TYPE BY COUNT" table in the opended expandable window on the employer page
 */

export const dataForPharmacyTypeByCountTable = [
  {
    type: "RETAIL",
    current_count: ["67,890", "97.90%"],
    prior_count: ["67,091", "98.00%"],
    change: ["799", "1.20%"],
  },
  {
    type: "MAIL",
    current_count: ["1,234", "1.80%"],
    prior_count: ["1,212", "1.80%"],
    change: ["22", "1.80%"],
  },
  {
    type: "SPECIALTY",
    current_count: ["192", "0.30%"],
    prior_count: ["190", "0.30%"],
    change: ["2", "1.00%"],
  },
  {
    type: "TOTAL",
    current_count: ["69,316", "100.00%"],
    prior_count: ["68,493", "100.00%"],
    change: ["823", "4.00%"],
  },
];

/**
 * data for bar chart in the "RX OVERVIEW" section on the employer page
 */
export const rxOverviewData = [
  [
    { x: "2020", y: 300000 },
    { x: "2021", y: 265000 },
    { x: "2022", y: 210000 },
    { x: "2023", y: 210000 },
  ],
  [
    { x: "2020", y: 280000 },
    { x: "2021", y: 280000 },
    { x: "2022", y: 150000 },
    { x: "2023", y: 150000 },
  ],
  [
    { x: "2020", y: 225000 },
    { x: "2021", y: 225000 },
    { x: "2022", y: 260000 },
    { x: "2023", y: 260000 },
  ],
];

/**
 * table columns for "NETWORK UTILIZATION" table on the employer page
 */
export const columnsForNetworkUtilTable: TableProps["columns"] = [
  { label: "PHARMACY", id: "pharmacy", variant: "secondary", isSortable: false },
  {
    label: ["GENERIC 30-DAY SUPPLY", "Net Rx Count", "Gross Cost", "AWP Discount"],
    id: "day_30",
    variant: "secondary",
    isSortable: false,
  },
  {
    label: ["GENERIC 30-DAY SUPPLY", "Net Rx Count", "Gross Cost", "AWP Discount"],
    id: "day_90",
    variant: "secondary",
    isSortable: false,
  },
  { label: "COMBINED DISCOUNT", id: "discount", variant: "secondary", isSortable: false },
  { label: "LIMITED NETWORK SAVING EST.", id: "est", variant: "secondary", isSortable: false },
];

/**
 * table data for "NETWORK UTILIZATION" table on the employer page
 */
export const dataForNetworkUtilTable = [
  {
    pharmacy: "CVS",
    day_30: ["12,978", "$392,972", "76.76%"],
    day_90: ["7,013", "$417,687", "82.13%"],
    discount: "79.45%",
    est: "",
  },
  {
    pharmacy: "WAL-MART",
    day_30: ["7,257", "$169,756", "82.33%"],
    day_90: ["3,042", "$103,339", "90.09%"],
    discount: "86.21%",
    est: "",
  },
  {
    pharmacy: "WALGREENS",
    day_30: ["6,633", "$202,604", "77.04%"],
    day_90: ["2,518", "$151,477", "82.00%"],
    discount: "79.52%",
    est: "",
  },
  {
    pharmacy: "KROGER",
    day_30: ["5,444", "$69,073", "91.16%"],
    day_90: ["2,316", "$42,706", "94.45%"],
    discount: "92.81%",
    est: "",
  },
  {
    pharmacy: "MEIJER",
    day_30: ["2,776", "$30,347", "92.19%"],
    day_90: ["953", "$19,920", "93.76%"],
    discount: "92.98%",
    est: "",
  },
  {
    pharmacy: "ALL OTHERS",
    day_30: ["4,369", "$64,444", "90.23%"],
    day_90: ["1,145", "$23,194", "93.52%"],
    discount: "91.88%",
    est: "",
  },
];
