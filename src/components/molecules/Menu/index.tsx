import React from "react";

import {
  Menu as ChakraMenu,
  MenuButtonProps,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

import { Heading } from "../../atoms/Heading";
import { ChevronDown } from "../../icons";

export interface MenuProps extends MenuButtonProps {
  items: {
    label: string;
    onClick: (label: string) => void;
    id: string | number;
  }[];
  label: string;
}

export const Menu: React.FC<MenuProps> = ({ items, label, ...rest }) => {
  return (
    <ChakraMenu>
      <MenuButton
        px={3}
        borderWidth={1}
        borderColor="primary.main"
        borderStyle="solid"
        borderRadius="md"
        height="45px"
        _hover={{ borderColor: "primary.700" }}
        {...rest}
      >
        <Flex justifyContent="space-between" gap={10}>
          <Heading variant="secondary" fontSize={"20px"} fontWeight={600}>
            {label}
          </Heading>{" "}
          <ChevronDown />
        </Flex>
      </MenuButton>
      <MenuList>
        {items.map(item => (
          <MenuItem onClick={() => item.onClick(item.label)} key={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </ChakraMenu>
  );
};
