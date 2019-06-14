import axios from 'axios';
import handleError from './handleError';
import api from './api';

const SERVER_DOMAIN = api.url;;
const getHeaders = () => {
  return {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path) => {
  return new Promise((resolve, reject) => {
    axios.get(`${SERVER_DOMAIN}${path}`, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};
// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.patch(`${SERVER_DOMAIN}${path}`, data, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${SERVER_DOMAIN}${path}`, data, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};
// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (path) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${SERVER_DOMAIN}${path}`, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};




//Usagggggggggeeeeeeeeeeeeeee
// import { get } from './apiUtils';
// get('/user/5')
//   .then(data => {
    
//     // do something with User #5
//   })
//   .catch(errorMessage => {
//     // the error has already been handled by handleError
//     // the message get's passed here
//     // do something like store it in redux, etc.
//   });




//fetchPosts() { return axios.get(api.posts) }