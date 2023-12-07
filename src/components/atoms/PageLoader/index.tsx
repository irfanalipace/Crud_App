import React from "react";

import { Flex } from "@chakra-ui/react";

import { Text } from "../Text";

export const PageLoader: React.FC = () => {
  return (
    <Flex width="full" align="center" minHeight="100vh">
      <Text width="full" textAlign="center" margin="auto" fontSize="30px">
        Loading ...
      </Text>
    </Flex>
  );
};
