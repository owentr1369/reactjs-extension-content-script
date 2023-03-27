import React, { useEffect, useState } from "react";
import { Button, Modal, Tooltip } from 'antd';
import Icon from '../static/icon.png';

import './MyComponent.css';

const text = <span>prompt text</span>;

const MyComponent: React.FC = () => {
  useEffect(() => {
    console.log(Icon);
  })
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="icon">
        <Tooltip placement="left" title={text}>
          <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0094 5.26075L16.4917 0.821157C15.5823 0.28323 14.5504 0 13.5 0C12.4496 0 11.4177 0.28323 10.5083 0.821157L2.99062 5.26075C2.08129 5.79814 1.32621 6.57093 0.801256 7.50146C0.276301 8.432 -3.95273e-05 9.4875 4.24113e-09 10.5619V19.4346C-3.95273e-05 20.509 0.276301 21.5645 0.801256 22.4951C1.32621 23.4256 2.08129 24.1984 2.99062 24.7358L5.48737 26.2192L9.56914 28.629V18.0483L5.48737 20.2508V21.9783L4.78668 21.5637C4.42152 21.348 4.11842 21.0376 3.90795 20.6638C3.69748 20.29 3.58708 19.866 3.5879 19.4346V10.5619C3.58835 10.1322 3.69913 9.71013 3.90915 9.33799C4.11916 8.96585 4.42104 8.65668 4.78457 8.44144L12.3044 4.00185C12.6678 3.78692 13.0802 3.67375 13.5 3.67375C13.9198 3.67375 14.3322 3.78692 14.6956 4.00185L22.2133 8.44144C22.5768 8.65668 22.8787 8.96585 23.0887 9.33799C23.2988 9.71013 23.4095 10.1322 23.41 10.5619V19.4346C23.4095 19.8643 23.2988 20.2864 23.0887 20.6585C22.8787 21.0307 22.5768 21.3398 22.2133 21.5551L21.5126 21.9697V10.0933L17.4309 12.6154V28.629L24.0094 24.7444C24.9199 24.2063 25.6758 23.4321 26.2008 22.4999C26.7259 21.5678 27.0015 20.5105 27 19.4346V10.5619C27 9.4875 26.7237 8.432 26.1987 7.50146C25.6738 6.57093 24.9187 5.79814 24.0094 5.26075Z" fill="#0A855C" />
            <path d="M11.458 17.312V29.6331C12.7759 30.1223 14.2198 30.1223 15.5377 29.6331V13.585L9.56912 17.312H11.458Z" fill="#0A855C" />
          </svg>
        </Tooltip>
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default MyComponent;
