import React, { memo } from 'react';
import "./EmailCard.css";

const EmailCard = (props) => {
  const {
    email,
    isSelected,
    setDetails
  } = props;
  return (
    <div
      className={`${
        isSelected
          ? "bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl"
          : ""
      } flex flex-row py-10 px-6 hover:bg-gradient-to-br from-dark-200 to-dark-300 cursor-pointer rounded-3xl drop-shadow-2xl`}
      onClick={() => setDetails(email)}
    >
      <div className={`w-12 h-10 mt-3 rounded-xl bg-blue-100`}></div>
      <div className="flex flex-col w-full ml-3">
        <div className="flex items-center mt-2">
          <span className="text-xs text-light-500 font-medium mr-auto">
            Inkle
          </span>
        </div>
        <span className="text-sm text-light-200 font-medium mt-2">
          {email.subject}
        </span>
        <span className="clamp text-xs font-normal text-light-500 mt-4 w-full">
          {email.body}
        </span>
      </div>
    </div>
  );
}

export default memo(EmailCard);