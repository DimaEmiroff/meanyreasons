import React, {useState} from "react";
import ModalFormSignUp from "../modal_form/ModalFormSign_up";

const HeaderButtonSend = () => {
    const [login, setLogin] = useState(false)
        return (
            <div>
                <form className="app-header-btn">
                    <button
                        onClick={() => setLogin(true)}
                        type="button"
                        className="app-header-btnsign">
                        sign up
                    </button>
                    <button
                        onClick={() => setLogin(true)}
                        type="button" className="app-header-btnsignup">
                        sign up
                    </button>
                </form>
                    <ModalFormSignUp
                        action={login}
                        setAction={setLogin}
                    />
            </div>
        );
    };

export default HeaderButtonSend;