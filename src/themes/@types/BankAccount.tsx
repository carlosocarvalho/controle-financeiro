interface ItemModalBankAccount {
  item: {
    borderColor: string;
    icon: {
      background: string;
    };
    label: {
      color: string;
      size: string;
    };
    padding: string;
    title: {
      color: string;
      size: string;
    };
  };
}

interface ModalBankAccount {
  title: {
    color: string;
    size: string;
  };
  item: ItemModalBankAccount;
}

export default interface BankAccount {
  modal: ModalBankAccount;
}
