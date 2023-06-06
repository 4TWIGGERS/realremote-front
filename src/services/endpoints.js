const v = 'https://realremote.io/';

const ENDPOINTS = {
   signIn: { method: 'post', uri: `${v}client/login` },
   signUp: { method: 'post', uri: `${v}client/register` },
   GetEmail: { method: 'post', uri: `${v}email/get` },
   UnsubscribeEmail: { method: 'post', uri: `${v}email/unsubscribe` },
   SendEmail: { method: 'post', uri: `${v}email/send` },
   CreateJob: { method: 'post', uri: `${v}create/job` },
   DeleteJob: { method: 'post', uri: `${v}delete/job/:id` },
   EditJob: { method: 'post', uri: `${v}edit/job/:id` },
   SearchJob: { method: 'post', uri: `${v}search/job` },
   JobPagination: { method: 'post', uri: `${v}job/pagination` },
   TokenAdd: { method: 'post', uri: `${v}token/add` },
   NotificationSend: { method: 'post', uri: `${v}notification/send` },
   TokenEdit: { method: 'post', uri: `${v}token/edit` },
   UnSubscribe: { method: 'post', uri: `${v}email/unsubscribe` },
};

export default ENDPOINTS;
