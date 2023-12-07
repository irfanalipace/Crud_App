import React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { EmployerOverallPerformTable } from "../OverallPerformTable/";
import { ExpandableWindow, Table } from "~/components";
import {
  columnsForPlanCostsTable,
  dataForPlanCostsTable,
  columnsForPharmacyTypeByCostTable,
  dataForPharmacyTypeByCostTable,
  columnsForPharmacyTypeByCountTable,
  dataForPharmacyTypeByCountTable,
  planPerformanceTableProps,
} from "~/data";

export const EmployerOverallPerformTables: React.FC = () => {
  return (
    <Box>
      <SimpleGrid columns={3} spacing={5} marginTop={8}>
        <ExpandableWindow
          title="PLAN COSTS"
          isExpandable
          expandedChildren={
            <Table columns={columnsForPlanCostsTable} data={dataForPlanCostsTable} />
          }
        >
          <EmployerOverallPerformTable data={planPerformanceTableProps[0].data} />
        </ExpandableWindow>
        <ExpandableWindow
          title="PHARMACY TYPE (BY COST)"
          expandedTitle="PHARMACY TYPE BY COST"
          isExpandable
          expandedChildren={
            <Table
              columns={columnsForPharmacyTypeByCostTable}
              data={dataForPharmacyTypeByCostTable}
            />
          }
        >
          <EmployerOverallPerformTable data={planPerformanceTableProps[1].data} />
        </ExpandableWindow>
        <ExpandableWindow
          title="PHARMACY TYPE (BY COUNT)"
          expandedTitle="PHARMACY TYPE BY COUNT"
          isExpandable
          expandedChildren={
            <Table
              columns={columnsForPharmacyTypeByCountTable}
              data={dataForPharmacyTypeByCountTable}
            />
          }
        >
          <EmployerOverallPerformTable data={planPerformanceTableProps[2].data} />
        </ExpandableWindow>
      </SimpleGrid>
    </Box>
  );
};
