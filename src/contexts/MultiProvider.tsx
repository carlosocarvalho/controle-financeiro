import React from "react";

type MultProviderProps = {
  providers: Array<any>;
};

const MultiProvider = (props: any) => {
  let content = props.children || null;
  if (!props.providers) {
    throw "MultiProvider: Missing providers prop";
  }

  if (!props.children) {
    throw "MultiProvider: Missing children";
  }
  const numberOfProviders = props.providers.length;

  if (!numberOfProviders) {
    // Providers prop is empty, r
    return content;
  }

  props.providers.forEach((provider: any) => {
    content = React.cloneElement(provider, null, content);
  });

  return content;
};


export default MultiProvider;
