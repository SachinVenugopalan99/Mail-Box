import { useState, useEffect, useRef } from "react";
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
  getInbox,
  getAll
} from '../store/actions';
import { useSelector } from "react-redux";

const MainLayout = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const params = window.location.pathname.split('/')[2];
  const searchTerm = window.location.search.split('=')[1];
  const navigate = useNavigate();

  const mailList = useSelector((state) => state?.mails);
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);

  const mailUrl = 'https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123';
  const getMails = () => {  
      try{
        fetch(mailUrl)
        .then(response => response.json())
        .then(  
          data => dispatch(getALLMail({ data }))
        ).then(() =>dispatch(getInbox())); 
      } catch {

      }
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    getMails();
  }, [])

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
        dispatch(getAll());
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