import React, { PropsWithChildren } from "react";

import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithNavigate = ({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null => {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_DOMAIN as string;
  const clientId = import.meta.env.VITE_APP_AUTH0_CLIENTID as string;
  const redirectUri = window.location.origin;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
