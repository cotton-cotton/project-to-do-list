import React from 'react';

const CheckingModal = ({ closeModal, onRemovedList }) => {
  return (
    <div className="fixed top-[200px] left-0 right-0 bottom-0 flex flex-col z-[99] w-[400px] h-[200px] bg-middle-gray rounded-[5px]">
      <div className="fixed flex items-center justify-center w-[400px] h-[200px] z-[99] bg-deep-gray rounded-[5px]">
        <div className="flex flex-col items-center justify-between py-20px h-[150px] text-white">
          <p className="text-20px">일정을 삭제하시겠습니까?</p>
          <div className="flex justify-between w-[230px]">
            <button
              className="w-100px h-[35px] bg-main-blue rounded-[5px] text-15px tracking-[1px]"
              onClick={onRemovedList}
            >
              삭제할게요
            </button>
            <button
              className="w-100px h-[35px] bg-main-blue rounded-[5px] text-15px tracking-[1px]"
              onClick={closeModal}
            >
              취소할게요
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckingModal;
