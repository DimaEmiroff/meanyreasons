import React from 'react';

const ModalFormSignUp = ({ action, setAction }) => {
    return (
        <div className={action ? 'modal active' : 'modal'} onClick={() => setAction(false)}>
            <form className={action ? 'modal-login active' : 'modal-login'} onClick={e => e.stopPropagation()}>
                <div>
                    <input id="name" type="text" placeholder={'print your login'}/>
                </div>
                <div>
                    <input id="email" type="text" placeholder={'print your password'} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ModalFormSignUp;