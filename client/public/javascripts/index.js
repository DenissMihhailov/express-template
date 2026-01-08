import { request } from './fetch.js';

function sendTestData() {
  request({
    url: '/test',
    method: 'POST',
    data: {
      name: 'Deniss',
      age: 21
    }
  })
    .then(result => {
      console.log('SUCCESS:', result);
      alert('Server connected');
    })
    .catch(error => {
      console.error('ERROR:', error.message);
      alert('Server connection error');
    });
}

sendTestData();
