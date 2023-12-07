import React, { useState } from "react";

import { Flex, Grid, useTheme } from "@chakra-ui/react";

import { Heading } from "../Heading";

interface IOption {
  label: string;
  value: string | number;
}
export interface SwitchProps {
  options: IOption[];
}

export const Switch: React.FC<SwitchProps> = ({ options }) => {
  const [value, setValue] = useState(options[0].value);
  const theme = useTheme();

  return (
    <Grid
      width="fit-content"
      gridTemplateColumns={`repeat(${options.length}, minmax(174px, 1fr))`}
      backgroundColor={theme?.colors?.yellow["main"] + "1A"}
      borderRadius="full"
    >
      {options.map(option => (
        <Flex
          key={option.value}
          transitionDuration="0.3s"
          justifyContent="center"
          alignItems="center"
          borderRadius="full"
          cursor="pointer"
          height={30}
          backgroundColor={value === option.value ? "yellow.main" : "transparent"}
          onClick={() => setValue(option.value)}
        >
          <Heading
            color={value === option.value ? "white" : "gray.main"}
            fontWeight={500}
            fontSize="md"
            textAlign="center"
            whiteSpace="nowrap"
            textTransform="uppercase"
          >
            {option.label}
          </Heading>
        </Flex>
      ))}
    </Grid>
  );
};
