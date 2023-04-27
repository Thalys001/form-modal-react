import { Fragment, useState } from 'react'
import './style.css'

const Modal = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <button className='btn btn-primary' onClick={toggle}> Abrir Modal</button>
      <div className={`modal ${show && 'show'}`} onClick={toggle}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2 className="title">Título</h2>
            <h2 className="modal-close" onClick={toggle}>
              x
            </h2>
          </div>
          <div className="modal-body">
            <div className="form-control">
              <label>Nome</label>
              <input type="text" placeholder='Digite seu nome...' />
              <label>Email</label>
              <input type="text" placeholder='Digite seu email...' />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-cancel">Cancelar</button>
            <button className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;