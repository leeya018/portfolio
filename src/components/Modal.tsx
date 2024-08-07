import { Fragment, ReactNode } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { ModalStore } from "@/mobx/modalStore";

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
              <div className="relative ">
                <div
                  className="text-black z-10 text-3xl cursor-pointer absolute top-2 right-2 hover:scale-105 "
                  onClick={() => ModalStore.closeModal()}
                >
                  X
                </div>
                {/* <Dialog.Panel className="w-[50vw] rounded-md max-w-full transform overflow-hidden   p-6 text-left align-middle shadow-xl transition-all"> */}
                <Dialog.Panel
                  className={`w-[90vw] lg:w-[50vw] rounded-md max-w-full transform overflow-hidden   p-6 text-left align-middle shadow-xl transition-all  ${bgColor}`}
                >
                  {children}
                </Dialog.Panel>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
