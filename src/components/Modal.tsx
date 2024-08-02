import { Fragment, ReactNode } from "react";

import { Dialog, Transition } from "@headlessui/react";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  bgColor: string;
  children: ReactNode;
};

function Modal({ isOpen, closeModal, children, bgColor }: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* <Dialog.Panel className="w-[50vw] rounded-md max-w-full transform overflow-hidden   p-6 text-left align-middle shadow-xl transition-all"> */}
              <Dialog.Panel
                className={`w-[90vw] lg:w-[50vw] rounded-md max-w-full transform overflow-hidden   p-6 text-left align-middle shadow-xl transition-all  ${bgColor}`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
