import React from "react";
import { CategorieProvider } from "../../Categories/Context";
import { CalendarProvider } from "../../Calendar/Context";
import { BankAccountProvider } from "../../BankAccount/Context";
import { KeyboardProvider } from "../../Keyboard/Context";
import { RecurrentProvider } from "../../Recurrent/Context";
import CastModal from "../../CastModal";
import { CashContext } from "../../CastModal/Context";

type CastFormProps = {
  onClose?: Function ;
};

const CastForm: React.FC<CastFormProps> = ({ onClose }) => {
  const { show } = React.useContext(CashContext);
  // React.useEffect(() => {
  //   if (!show  && onClose) onClose();
  // }, [show]);
  return (
    <>
      <CategorieProvider>
        <CalendarProvider>
          <BankAccountProvider>
            <KeyboardProvider>
              <RecurrentProvider>
                <CastModal />
              </RecurrentProvider>
            </KeyboardProvider>
          </BankAccountProvider>
        </CalendarProvider>
      </CategorieProvider>
    </>
  );
};

CastForm.defaultProps = {
    onClose: () => {}
}

export default CastForm;
