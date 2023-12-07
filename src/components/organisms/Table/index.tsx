import React, { useMemo, useState } from "react";

import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useTheme,
  Flex,
  Box,
  Skeleton,
} from "@chakra-ui/react";

import { Heading } from "../../../components";
import { ChevronDown } from "../../../components/icons";

type SortConfig = { direction: "asc" | "desc" | null; key: string | null };

interface IColumn {
  id: string;
  label: string | string[];
  variant: "primary" | "secondary";
  isSortable?: boolean;
}

interface HeadColumProps {
  data: IColumn;
  onSort: (key: string) => void;
  sortConfig: SortConfig;
}

export interface TableProps {
  columns: IColumn[];
  data: any[];
  onClickRow?: (index: number) => void;
  isLoading?: boolean;
}

export const Table: React.FC<TableProps> = ({ columns, data, onClickRow, isLoading = false }) => {
  const theme = useTheme();

  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });

  const sortedData = useMemo(() => {
    const sortableItems = [...data];

    if (isLoading) {
      const loadingData: Record<string, "loading"> = {};

      columns.forEach(val => {
        loadingData[val.id] = "loading";
      });

      return Array(5).fill(loadingData);
    }
    if (sortConfig.key !== null && sortConfig.direction !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.direction === "asc") {
          return a[sortConfig.key!] > b[sortConfig.key!] ? 1 : -1;
        }
        if (sortConfig.direction === "desc") {
          return a[sortConfig.key!] < b[sortConfig.key!] ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig, isLoading]);
  return (
    <TableContainer>
      <ChakraTable>
        <Thead>
          <Tr>
            {columns.map(column => (
              <HeadColumn
                key={"head-" + column.id}
                sortConfig={sortConfig}
                onSort={(key: string) => {
                  setSortConfig(prev => ({
                    key: prev.direction === "desc" ? null : key,
                    direction:
                      prev.key !== key || prev.direction === null
                        ? "asc"
                        : prev.direction === "desc"
                        ? null
                        : "desc",
                  }));
                }}
                data={column}
              />
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((item, index) => (
            <Tr
              onClick={() => onClickRow && onClickRow(index)}
              key={"tr-" + index}
              sx={{
                height: "92px",
                "&:nth-of-type(even)": {
                  backgroundColor: theme?.colors?.lightgray["main"] + "1A",
                  height: "58px",
                },
                _hover: { backgroundColor: "blue.100" },
                border: "none",
                cursor: onClickRow ? "pointer" : "default",
              }}
            >
              {columns.map(column => (
                <Td textAlign="center" key={"td-" + column.id} border="none">
                  <Skeleton startColor="gray.100" endColor="gray.300" isLoaded={!isLoading}>
                    {Array.isArray(item[column.id]) && (
                      <Flex direction="row" justifyContent="space-around">
                        {(item[column.id] as string[]).map((eachValue, index_1) => (
                          <Heading
                            key={"item-" + index_1}
                            variant="secondary"
                            fontSize={column.variant === "primary" ? "xl" : "base"}
                            color={column.variant === "primary" ? "primary.main" : "lightgray.main"}
                            textDecoration={column.variant === "primary" ? "underline" : "none"}
                            fontWeight={500}
                          >
                            {eachValue}
                          </Heading>
                        ))}
                      </Flex>
                    )}
                    {!Array.isArray(item[column.id]) && (
                      <Heading
                        variant="secondary"
                        fontSize={column.variant === "primary" ? "xl" : "base"}
                        color={column.variant === "primary" ? "primary.main" : "lightgray.main"}
                        textDecoration={column.variant === "primary" ? "underline" : "none"}
                        fontWeight={500}
                      >
                        {item[column.id]}
                      </Heading>
                    )}
                  </Skeleton>
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

const HeadColumn: React.FC<HeadColumProps> = ({ data, onSort, sortConfig }) => {
  const { isSortable, label, id } = data;

  return (
    <Th
      onClick={() => isSortable && onSort(id)}
      cursor={isSortable ? "pointer" : "initial"}
      bgColor={"primary.main"}
      textAlign="center"
      color="white"
      height="106px"
      px={3}
      sx={{
        "&:last-child": { borderRight: "0px" },
        "&:first-of-type": { borderLeft: "0px" },
        borderColor: "#FFF",
        borderStyle: "solid",
        borderLeftWidth: "8px",
        borderRightWidth: "8px",
        borderTopWidth: "5px",
      }}
    >
      <Flex alignItems="center" justifyContent="center" gap={2}>
        {isSortable && <Box w={6} />}
        {Array.isArray(label) && (label as string[]).length > 0 && (
          <Flex direction="column" gap={4}>
            <Heading variant="secondary" fontSize="xl" fontWeight={500}>
              {(label as string[])[0]}
            </Heading>
            <Flex direction="row" justifyContent="space-around" gap={20}>
              {(label as string[]).map((eachValue, index) => {
                if (index > 0) {
                  return (
                    <Heading
                      key={"label-" + index}
                      textTransform="none"
                      fontSize="16px"
                      fontWeight="medium"
                    >
                      {eachValue}
                    </Heading>
                  );
                }
              })}
            </Flex>
          </Flex>
        )}
        {!Array.isArray(label) && (
          <Heading variant="secondary" fontSize="xl" fontWeight={500}>
            {label}
          </Heading>
        )}
        {isSortable && (
          <Box
            transitionDuration="0.3s"
            transform={`rotate(${sortConfig.direction === "asc" ? "0" : "180deg"})`}
            opacity={id === sortConfig.key && sortConfig.direction ? 1 : 0}
          >
            <ChevronDown height={24} width={24} color="white" />
          </Box>
        )}
      </Flex>
    </Th>
  );
};
