import { ReactNode, useContext, useRef } from 'react';
import { CloseIcon } from '../icons/CloseIcon';

interface Props {
  height: string;
  width: string;
  close: Function;
  children: ReactNode;
}

export function BaseModal({ height, width, close, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  function handleCloseModal() {
    modalRef.current?.classList.add('fade-out-animation');
    setTimeout(() => {
      close();
    }, 300);
  }

  return (
    <div
      ref={modalRef}
      className="flex flex-col fixed top-[10%] left-[50%] translate-x-[-50%] bg-color-white shadow-[0_0_1px_black] rounded-lg fade-in-animation"
      style={{
        width,
        height,
      }}
    >
      <div className="flex justify-end items-center p-[8px] border-b">
        <button
          className="rounded-sm bg-color-white hover:brightness-96 cursor-pointer"
          onClick={handleCloseModal}
        >
          <CloseIcon width="32px" height="32px" />
        </button>
      </div>
      <div className="flex size-full p-[16px]">{children}</div>
    </div>
  );
}
