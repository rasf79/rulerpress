import React from "react";
import { PreviewProvider } from "strapi-plugin-preview-content";
import useDataManager from "../../../../hooks/useDataManager";

function connect(WrappedComponent, select) {
  return function (props) {
    // eslint-disable-next-line react/prop-types
    const selectors = select();
    const { slug } = useDataManager();

    return (
      <PreviewProvider {...selectors} {...props.allowedActions} slug={slug}>
        <WrappedComponent {...props} {...selectors} />
      </PreviewProvider>
    );
  };
}

export default connect;
