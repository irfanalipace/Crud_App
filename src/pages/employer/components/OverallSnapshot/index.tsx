import React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import { ExpandableWindow, InfoCard } from "~/components";

export const EmployerOverallSnapshot: React.FC = () => {
  return (
    <Box marginTop="30px">
      <ExpandableWindow isExpandable={false} title="Snapshot">
        <SimpleGrid columns={4} spacing={5}>
          <InfoCard title="Members" value="9,123" percent={2.2} prior={8987} />
          <InfoCard
            title="Net paid claim count"
            value="34,123"
            percent={1.3}
            prior={33890}
            total={35217}
            reversals={1094}
          />
          <InfoCard title="Net rx count pmpm" value="4.80" percent={2.3} prior={4.91} />
          <InfoCard title="GDR" value="55%" percent={-6.7} prior={8987} />
        </SimpleGrid>
      </ExpandableWindow>
    </Box>
  );
};
