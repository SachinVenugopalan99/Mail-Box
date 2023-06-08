import { mailList } from '../data/data';
import {
    INBOX,
    SPAM,
    TRASH,
    DRAFT,
    ALL_MAIL
} from './types'

const getMails = (type) => {
    const res = mailList?.filter((item) => item.tag === type);
    return res;
}

const initialState = {
    allMails: [...mailList],
    mails: [...getMails('inbox')]
};

export const reducer = (state=initialState, action) => {
    switch(action?.type) {
       case INBOX: 
       return {...state, mails: [...getMails('inbox')]};
       case SPAM: 
       return {...state, mails: [...getMails('spam')]};
       case TRASH: 
       return {...state, mails: [...getMails('trash')]};
       case DRAFT: 
       return {...state, mails: [...getMails('draft')]};
       case ALL_MAIL: 
       return {...state, mails: [...mailList]};
       default:
        return state;
    }
}