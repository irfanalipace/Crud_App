import React from "react";

import {
  Table as ChakraTable,
  Tbody,
  Tr,
  Td,
  Flex,
  TableContainer,
  useTheme,
} from "@chakra-ui/react";

import { Heading } from "~/components";
import { UpRedArrow, DownGreenArrow } from "~/components/icons";

export interface EmployerOverallPerformTableProps {
  data: Record<string, string>[];
  colors?: string[];
}

export const EmployerOverallPerformTable: React.FC<EmployerOverallPerformTableProps> = ({
  data,
}) => {
  const theme = useTheme();
  return (
    <TableContainer>
      <ChakraTable>
        <Tbody>
          {data.map((item, index) => (
            <Tr
              key={"tr-" + index}
              sx={{
                height: "58px",
                "&:nth-of-type(even)": {
                  backgroundColor: theme?.colors?.lightgray["main"] + "1A",
                },
                _hover: { backgroundColor: "blue.100" },
              }}
            >
              <Td textAlign="left" border="none">
                <Heading fontSize="20px" color="primary.300" fontWeight="medium">
                  {item["title"]}
                </Heading>
              </Td>
              <Td textAlign="left" border="none" paddingRight={0}>
                <Flex direction="row" gap={1}>
                  {item["color"] === "red.300" && <UpRedArrow width="34px" height="29px" />}
                  {item["color"] === "green.300" && <DownGreenArrow width="34px" height="29px" />}
                  <Heading fontSize="20px" color={item["color"]} fontWeight="medium">
                    {item["amount"]}
                  </Heading>
                </Flex>
              </Td>
              <Td textAlign="left" border="none" paddingLeft={0}>
                <Heading fontSize="20px" color={item["color"]} fontWeight="medium">
                  {item["percent"]}
                </Heading>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
