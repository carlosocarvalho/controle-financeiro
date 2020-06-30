export default interface Target {
  item: {
    title: {
      color: string;
      size: string;
    };
    value: {
      color: string;
      size: string;
    };
    percentual: {
      background: string;
    };

    label: {
      color: string;
      size: string;
    };
  };

  deposit: {
    header: {
      title: {
        color: string;
        size: string;
      };
    };
    title: {
      color: string;
      size: string;
    };
    value: {
      color: string;
      size: string;
    };
    label: {
      color: string;
      size: string;
    };
  };
}
