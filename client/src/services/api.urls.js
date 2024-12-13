export const API_URLS = {
    saveSentEmail: {
        endpoint: 'save',
        method: 'POST'
    },
    saveDraftEmail: {
        endpoint: 'save-draft',
        method: 'POST'
    },
    getEmailFromType: {
        endpoint: 'emails',
        method: 'GET'
    },
    toggleStarredMail: {
        endpoint: 'starred',
        method: 'POST'
    },
    deleteEmail: {
        endpoint: 'delete',
        method: 'DELETE'
    },
    moveEmailsToBin: {
        endpoint: 'bin',
        method: 'POST'
    }
}