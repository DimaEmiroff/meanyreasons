import React from 'react'
import './modal.css'

const ModalFormLearnMore = ({ active, setActive }) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <form className={active ? 'modal-form active' : 'modal-form'} onClick={e => e.stopPropagation()}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder={'print your name'}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder={'print your email'} />
                </div>
                    <textarea id="message" placeholder={'print your text message'}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default ModalFormLearnMore;




