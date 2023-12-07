import { Box, Flex, Grid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useClients } from "~/api";
import { ExpandableWindow, Heading, Table, TableProps, Select } from "~/components";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const columns: TableProps["columns"] = [
    { label: "Name", id: "client_name", variant: "primary", isSortable: true },
    { label: "Members", id: "total_members", variant: "secondary", isSortable: true },
    { label: "PBM", id: "pbm", variant: "secondary", isSortable: true },
    { label: "Created Date", id: "created_at", variant: "secondary", isSortable: true },
    { label: "Updated Date", id: "updated_at", variant: "secondary", isSortable: true },
  ];

  const { data, isFetching } = useClients();

  return (
    <Grid gap="2rem" px="6rem" py="2rem">
      <Box>
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Heading color="primary.main">Financial Reporting</Heading>
          <Select
            width="364px"
            height="45px"
            options={[
              { label: "Name", value: "name" },
              { label: "Members", value: "members" },
              { label: "PBM", value: "pbm" },
              { label: "Report Date", value: "report_date" },
              { label: "Last Update", value: "last_update" },
            ]}
            placeholder="Filter"
          />
        </Flex>
        <Box width="100%" height="2px" backgroundColor="primary.main" maxWidth="156px" mt={4} />
      </Box>
      <ExpandableWindow isExpandable={false} title="Employers">
        <Table
          isLoading={isFetching}
          columns={columns}
          data={data}
          onClickRow={(index: number) => {
            console.log(`Row Index = ${index}`);
            navigate(`/employer`);
          }}
        />
      </ExpandableWindow>
    </Grid>
  );
};

export default Home;
