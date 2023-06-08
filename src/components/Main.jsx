import { useState, useEffect } from "react";
import ContentHeader from "./ContentHeader";
import EmailDetails from "./EmailDetails";
import EmailList from "./EmailList";

const Main = (props) => {
  const {mailList, selectedTab} = props;
  const [emailDetails, setEmailDetails] = useState([]);

  useEffect(() => {
   if (mailList?.length) {
    setEmailDetails(mailList[0])
   }
  }, [mailList])

  const setDetails = (data) => {
    setEmailDetails(data);
  }

  return (
    <main className="flex flex-col w-full bg-dark-600 h-full">
      <ContentHeader 
      />
      <div className="flex flex-row" style={{ height: "calc(100% - 84px)" }}>
        <EmailList 
        mails={mailList}
        setDetails={setDetails}
        emailDetails={emailDetails}
        selectedTab={selectedTab}
        />
        <EmailDetails 
        details={emailDetails}
        />
      </div>
    </main>
  );
}

export default Main;