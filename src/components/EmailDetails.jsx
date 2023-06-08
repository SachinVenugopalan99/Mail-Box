import React, { memo } from 'react';

  const EmailDetails = (props) => {
    const {details} = props;
    return (
      <div className="flex flex-col bg-dark-500 w-2/3">
        {details?.subject && details?.body ? (
          <>
        <div className="flex items-center px-10 my-8">
          <div className="w-10 h-10 rounded-xl bg-red-200 mr-4"></div>
          <span className="text-sm text-light-200 font-medium">
            Inkle
          </span>
        </div>
        <span className="px-10 mt-6 text-lg text-light-100 font-light mb-6 break-words">
          {details?.subject}
        </span>
        <div className="px-10 text-xs text-light-500 break-words">{details?.body}</div>
        </>
        ) : (
          <div className="text-sm text-light-200 font-medium h-full flex items-center justify-center">
          No Emails
        </div>
        )}
      </div>
    );
  }

  export default memo(EmailDetails);