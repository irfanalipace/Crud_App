import { Flex, Box } from "@chakra-ui/react";

import { EmployerHeadingFilter } from "./components/HeadingFilter";
import { EmployerHeadingTitle } from "./components/HeadingTitle";
import { EmployerNetworkUtilTable } from "./components/NetworkUtilTable";
import { EmployerOverallPerformTables } from "./components/OverallPerformTables";
import { EmployerOverallSnapshot } from "./components/OverallSnapshot";
import { EmployerRxOverviewChart } from "./components/RxOverviewChart";
import { Heading } from "~/components";

const Employer: React.FC = () => {
  return (
    <Flex
      width="full"
      flexDirection="column"
      align="center"
      alignSelf="flex-start"
      justifyContent="space-between"
      px="70px"
      py="20px"
    >
      <Flex flexDirection="row" justifyContent="space-between" width="full">
        <EmployerHeadingTitle />
        <EmployerHeadingFilter />
      </Flex>
      <Box width="full" marginTop="50px">
        <Heading
          fontSize={36}
          fontWeight="bold"
          color="primary.200"
          alignSelf="flex-start"
          textTransform="uppercase"
        >
          Overall plan performance
        </Heading>
        <EmployerOverallSnapshot />
        <EmployerOverallPerformTables />
        <EmployerRxOverviewChart />
        <EmployerNetworkUtilTable />
      </Box>
    </Flex>
  );
};

export default Employer;
