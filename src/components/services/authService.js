import http from './httpService'
//import jwtDecode from 'jwt-decode'
import { jwtDecode } from 'jwt-decode'

import Url from '../../config.json'
//import baseUrl from '../../configFn'
import axios from 'axios'
const apiEndPoint = '/auth'
const tokenKey = 'token'
//http.setJwt(getJwt())

export async function login(email, password) {
  logout()
  const { data: jwt } = await axios.post(Url.apiUrl + apiEndPoint, {
    email,
    password,
  })
  localStorage.setItem(tokenKey, jwt)
  //   console.log('Kwasi Adabo')
}

export function loginWithJwt(jwt) {
  logout()
  localStorage.setItem(tokenKey, jwt)
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey)
    //console.log(jwtDecode(jwt));
    return jwtDecode(jwt)
  } catch (ex) {
    return null
  }
}

export function logout() {
  localStorage.removeItem(tokenKey)
}

export function getJwt() {
  return localStorage.getItem(tokenKey)
}

const exportAuth = {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
}

export default exportAuth
