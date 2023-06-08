import {
    INBOX,
    SPAM,
    TRASH,
    DRAFT,
    ALL_MAIL
} from './types'

const getALLMail = () => {
   return {
        type: ALL_MAIL
    }
}

const getDrafts = () => {
    return {
            type: DRAFT
        }
}

const getTrash = () => {
    return {
            type: TRASH
        }
}

const getSpam = () => {
    return {
            type: SPAM
        }
}

const getInbox = () => {
    return {
            type: INBOX
        }
}

export {
    getALLMail,
    getDrafts,
    getTrash,
    getSpam,
    getInbox
}