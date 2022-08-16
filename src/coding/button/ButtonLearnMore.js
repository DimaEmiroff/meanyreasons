import React, {useState} from "react";
import ModalFormLearnMore from "../modal_form/ModalFormLearnMore";

const ButtonLearnMore = () => {
    const [modal, setModal] = useState(false);
    return (
        <>
            <button type="button" onClick={() => setModal(true)} className="Button-learn">Learn More</button>
            <ModalFormLearnMore active={modal} setActive={setModal} />
        </>
    );
}
export default ButtonLearnMore;