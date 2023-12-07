import React from "react";

import { Card as ChakraCard, Flex } from "@chakra-ui/react";

import { Text } from "../../atoms/Text";
import { UpGreenArrow, DownRedArrow } from "../../icons";

export interface InfoCardProps {
  title: string;
  value: string;
  percent: number;
  prior: number;
  total?: number;
  reversals?: number;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  percent,
  prior,
  total,
  reversals,
}) => {
  const isPositive = percent && percent >= 0;
  const isNegative = percent && percent < 0;
  return (
    <ChakraCard backgroundColor="lightgray.300" py={5} justifyContent="center">
      <Flex direction="column" justifyContent="center" justifyItems="center" gap={0.7}>
        {title && (
          <Text
            textTransform="uppercase"
            fontSize={12}
            fontWeight="semibold"
            color="primary.300"
            textAlign="center"
          >
            {title}
          </Text>
        )}
        {value && (
          <Text fontSize={24} fontWeight="semibold" color="primary.300" textAlign="center">
            {value}
          </Text>
        )}
        <Flex direction="row" justifyContent="center" gap={2}>
          {isPositive && <UpGreenArrow width="20px" height="20px" />}
          {isNegative && <DownRedArrow width="20px" height="20px" />}
          {(percent ? true : false) && (
            <Text
              fontSize={17}
              fontWeight="medium"
              textTransform="uppercase"
              color={percent > 0 ? "green.main" : "red.main"}
              textAlign="center"
            >
              {Math.abs(percent).toLocaleString()}%
            </Text>
          )}
        </Flex>
        {(prior ? true : false) && (
          <Text fontSize={14} textTransform="uppercase" color="gray.800" textAlign="center">
            {prior.toLocaleString()} (Prior)
          </Text>
        )}
        {total && (
          <Text
            fontSize={14}
            fontWeight="semibold"
            textTransform="uppercase"
            color="primary.300"
            textAlign="center"
          >
            Total: {total.toLocaleString()}
          </Text>
        )}
        {reversals && (
          <Text
            fontSize={14}
            fontWeight="semibold"
            textTransform="uppercase"
            color="red.main"
            textAlign="center"
          >
            Reversals: {reversals.toLocaleString()}
          </Text>
        )}
      </Flex>
    </ChakraCard>
  );
};
