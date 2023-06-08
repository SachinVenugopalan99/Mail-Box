import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Main from "../components/Main";
import SideNav from "../components/SideNav";
import { tabs } from "../constants";
import { useDispatch } from "react-redux";
import {
  getALLMail,
  getDrafts,
  getTrash,
  getSpam,
  getInbox
} from '../store/actions';
import { useSelector } from "react-redux";

const MainLayout = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const params = window.location.pathname.split('/')[1];
  const searchTerm = window.location.search.split('=')[1];
  const navigate = useNavigate();

  const mailList = useSelector((state) => state?.mails);
  const dispatch = useDispatch();

  useEffect(() => {
    switch(params) {
      case 'Inbox':
        setSelectedTab('Inbox');
        dispatch(getInbox());
        break;
      case 'Spam':
        setSelectedTab('Spam');
        dispatch(getSpam());
        break;
      case 'Draft':
        setSelectedTab('Draft');
        dispatch(getDrafts());
          break;
      case 'Trash':
        setSelectedTab('Trash');
        dispatch(getTrash());
          break;
      case 'All':
        setSelectedTab('All');
        dispatch(getALLMail());
          break;
      default:
        break;
    }
  }, [params])

  const onTabClick = (tab) => {
    if (searchTerm) {
      navigate(`/${tab.name}/?search=${searchTerm}`)
    } else {
      navigate(`/${tab.name}`);
    }
  }
  return (
    <div className="w-10/12 h-screen flex h-[90vh] bg-blue-200">
      <SideNav 
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={onTabClick}
      />
      <Main 
      mailList={searchTerm ? mailList?.filter((item) => item?.subject?.includes(searchTerm)): mailList}
      selectedTab={selectedTab}
      />
    </div>
  );
}
export default MainLayout;