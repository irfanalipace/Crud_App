import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { PageLoader } from "./components/atoms/PageLoader";
import Layout from "./layout";
import { ReactQueryProvider } from "./lib";
import Routings from "./router/Routings";
import { setToken } from "./store/slices/authslice";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const fetchData = async (): Promise<void> => {
    try {
      const accessToken = await getAccessTokenSilently();
      dispatch(setToken(accessToken));
    } catch (e) {
      console.log(e);
    }
  };

  return !isLoading ? (
    <ReactQueryProvider>
      <ChakraProvider theme={theme}>
        <Layout>
          <Routings />
        </Layout>
      </ChakraProvider>
    </ReactQueryProvider>
  ) : (
    <PageLoader />
  );
};

export default App;
