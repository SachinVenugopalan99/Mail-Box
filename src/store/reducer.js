import {
    INBOX,
    SPAM,
    TRASH,
    DRAFT,
    ALL_MAIL,
    ALL
} from './types'

const getMails = (mailList, type) => {
    const res = mailList?.filter((item) => item.tag === type);
    return res;
}

const initialState = {
    allMails: [],
    mails: []
};

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
       case INBOX: 
       return {...state, mails: [...getMails(state.allMails,'inbox')]};
       case SPAM: 
       return {...state, mails: [...getMails(state.allMails, 'spam')]};
       case TRASH: 
       return {...state, mails: [...getMails(state.allMails, 'trash')]};
       case DRAFT: 
       return {...state, mails: [...getMails(state.allMails, 'draft')]};
       case ALL_MAIL: 
       return {...state, allMails: payload?.data};
       case ALL: 
       return {...state, mails:[...state.allMails]};
       default:
        return state;
    }
}