import React, { ComponentType } from "react";

import { withAuthenticationRequired } from "@auth0/auth0-react";

import { PageLoader } from "~/components";

interface AuthGuardProps {
  component: ComponentType;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  });

  return <Component />;
};
