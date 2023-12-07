import type { ReactNode } from "react";

import { Box, Grid } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Meta />
      <Grid height="100vh" templateRows="1fr auto 1fr" minHeight="100vh" backgroundColor="white">
        <Header />
        <Box width="full" as="main" height="100%" overflow="auto">
          {children}
        </Box>
        <Footer />
      </Grid>
    </Box>
  );
};

export default Layout;
