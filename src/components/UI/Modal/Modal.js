import React from 'react';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({ show, modalClosed, children }) => {
	return (
		<>
			<Backdrop show={show} clicked={modalClosed} />
			<div
				className="Modal"
				style={{
					transform: show ? 'translateY(0)' : 'translateY(-100vh)',
					opacity: show ? '1' : '0',
				}}
			>
				{children}
			</div>
		</>
	);
};

export default React.memo(
	Modal,
	(prevProps, nextProps) =>
		nextProps.show === prevProps.show && nextProps.children === prevProps.children
);
