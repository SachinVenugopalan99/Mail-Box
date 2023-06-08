import EmailCard from "./EmailCard";
import "./EmailList.css";

export default function EmailList(props) {
  const {mails, emailDetails, setDetails, selectedTab} = props;
  return (
    <div className="flex flex-col bg-dark-500 w-6/12 mr-1 px-0 h-full">
      <div className="flex items-center py-6 px-10">
        <span className="font-light text-xl text-light-200">{selectedTab}</span>
        <div className="ml-2 w-5 h-4 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-2xs font-normal text-light-200">
        {mails?.length}
        </div>
      </div>
      <div className="px-10 pb-5">
      </div>
      <div className="flex flex-col px-10 pb-10 overflow-y-auto">
        {mails?.map((email) => (
          <EmailCard key={email?.id} isSelected={email?.id === emailDetails?.id} setDetails={setDetails} email={email}/>
        ))}
      </div>
    </div>
  );
}