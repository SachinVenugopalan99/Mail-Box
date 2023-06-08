import {
    INBOX,
    SPAM,
    TRASH,
    DRAFT,
    ALL_MAIL,
    ALL
} from './types'

const getALLMail = ({data}) => {
   return {
        type: ALL_MAIL,
        payload: { data }
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
            type: INBOX,
        }
}

const getAll = () => {
    return {
        type: ALL,
    }
}

export {
    getALLMail,
    getDrafts,
    getTrash,
    getSpam,
    getInbox,
    getAll
}