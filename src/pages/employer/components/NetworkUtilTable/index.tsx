import React from "react";

import { Box, Flex } from "@chakra-ui/react";

import { ExpandableWindow, Table, Switch } from "~/components";
import { columnsForNetworkUtilTable, dataForNetworkUtilTable } from "~/data";

export const EmployerNetworkUtilTable: React.FC = () => {
  return (
    <Box marginTop="50px">
      <ExpandableWindow isExpandable={false} title="Network Utilization">
        <Table columns={columnsForNetworkUtilTable} data={dataForNetworkUtilTable} />
        <Flex marginTop="25px" justifyContent="flex-end">
          <Switch
            options={[
              { label: "GENERIC", value: "generic" },
              { label: "BRAND", value: "brand" },
            ]}
          />
        </Flex>
      </ExpandableWindow>
    </Box>
  );
};
