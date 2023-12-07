import React, { useRef } from "react";

import { SelectProps as ChakraSelectProps, Select as ChakraSelect, Flex } from "@chakra-ui/react";

import { Heading } from "../Heading";

interface SelectProps extends ChakraSelectProps {
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  variant = "primary",
  options,
  label,
  placeholder,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex direction="column" gap={1} alignSelf="flex-end">
      {label && (
        <Heading
          variant="secondary"
          onClick={() => inputRef.current?.focus()}
          fontSize="xs"
          fontWeight="semibold"
          color="primary.800"
          alignSelf="flex-start"
          marginLeft={5}
        >
          {label}
        </Heading>
      )}
      <ChakraSelect
        ref={inputRef}
        variant={variant}
        borderColor="primary.800"
        backgroundColor="white"
        color="primary.800"
        borderWidth={1}
        borderStyle="solid"
        height="36px"
        fontSize={14}
        px={0}
        borderRadius="md"
        placeholder={placeholder}
        _hover={{ backgroundColor: "whiteAlpha.300", borderColor: "primary.700" }}
        {...props}
      >
        {options.map((option, index) => (
          <option
            value={option.value}
            key={index}
            style={{ color: "black", backgroundColor: "white" }}
          >
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </Flex>
  );
};
