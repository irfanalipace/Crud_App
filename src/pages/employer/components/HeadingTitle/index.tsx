import React from "react";

import { Box, Flex, Divider } from "@chakra-ui/react";

import { Heading, Text } from "~/components";

export const EmployerHeadingTitle: React.FC = () => {
  return (
    <Box>
      <Heading
        fontWeight="bold"
        fontSize="40"
        color="primary.200"
        sx={{ WebkitTextStrokeWidth: "medium" }}
      >
        Fast Banana, Inc.
      </Heading>
      <Flex flexDirection="row" marginTop={1}>
        <Text fontWeight="medium" fontSize={24} color="secondary.800">
          Maxor/
        </Text>
        <Text fontWeight="medium" fontSize={24} color="primary.800">
          Appro-Rx
        </Text>
      </Flex>
      <Divider backgroundColor="primary.200" my={3} borderBottomWidth={2}></Divider>
      <Text
        textTransform="uppercase"
        fontWeight="meidum"
        fontSize={20}
        color="primary.300"
        marginTop={4}
      >
        Most recent data: 08/2023
      </Text>
      <Text
        textTransform="uppercase"
        fontWeight="meidum"
        fontSize={20}
        color="primary.300"
        marginTop={3}
      >
        Oldest data available: 07/2017
      </Text>
    </Box>
  );
};
