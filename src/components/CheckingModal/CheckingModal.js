import React from 'react';

const CheckingModal = ({ closeModal, onRemovedList }) => {
  return (
    <div className="fixed top-[200px] left-0 right-0 bottom-0 flex flex-col z-[99] xl:w-400px xl:h-200px lg:w-300px lg:h-150px xs:w-250px xs:h-130px bg-middle-gray rounded-5px">
      <div className="fixed flex items-center justify-center xl:w-400px xl:h-200px lg:w-300px lg:h-150px xs:w-250px xs:h-130px z-[99] bg-deep-gray rounded-5px">
        <div className="flex flex-col items-center justify-between xl:py-20px xs:py-[40px] h-[150px] text-white">
          <p className="xl:text-1.25rem lg:text-1rem xs:text-0.875rem ">
            일정을 삭제하시겠습니까?
          </p>
          <div className="flex justify-between xl:w-[230px] lg:w-180px xs:w-130px">
            <button
              className="xl:w-100px xl:h-[35px] xl:text-0.938rem lg:w-80px lg:h-30px lg:text-0.813rem xs:w-[55px] xs:h-20px xs:text-0.625rem bg-main-blue rounded-5px tracking-[1px]"
              onClick={onRemovedList}
            >
              삭제할게요
            </button>
            <button
              className="xl:w-100px xl:h-[35px] xl:text-0.938rem lg:w-80px lg:h-30px lg:text-0.813rem xs:w-[55px] xs:h-20px xs:text-0.625rem bg-main-blue rounded-5px tracking-[1px]"
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
