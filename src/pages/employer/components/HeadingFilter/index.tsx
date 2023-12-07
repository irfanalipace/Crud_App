import React from "react";

import { Box, Flex, SimpleGrid, Radio, RadioGroup } from "@chakra-ui/react";

import { Select } from "~/components";
import { Setting, Download } from "~/components/icons";

export const EmployerHeadingFilter: React.FC = () => {
  return (
    <Box>
      <Flex flexDirection="row" justifyContent="flex-end" alignItems="center" gap={3}>
        <Setting width={69} height={70} />
        <Download width={64} height={86} />
      </Flex>
      <SimpleGrid columns={3} spacing={6}>
        <Select
          width="341px"
          options={[{ label: "Year to Date", value: "year_to_date" }]}
          placeholder="Choose option"
        />
        <Select
          width="341px"
          options={[
            { label: "2022", value: "2022" },
            { label: "2023", value: "2023" },
          ]}
          label="Period 1"
          placeholder="Choose option"
        />
        <Select
          width="341px"
          label="Period 2"
          options={[
            { label: "2022", value: "2022" },
            { label: "2023", value: "2023" },
          ]}
          placeholder="Choose option"
        >
          <RadioGroup>
            <SimpleGrid columns={2} spacing={3}>
              <Radio value="2022">2022</Radio>
              <Radio value="2023">2023</Radio>
              {/* Add more Radio components for additional options */}
            </SimpleGrid>
          </RadioGroup>
        </Select>
      </SimpleGrid>
    </Box>
  );
};
