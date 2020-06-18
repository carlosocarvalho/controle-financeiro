import React from "react";

export const useModalForm = () => {
  const [data, setData] = React.useState({ visible: false });

  const update = React.useCallback((data: any) => {
    setData(data);
  }, []);

  return {
    data,
    update,
  };
};
