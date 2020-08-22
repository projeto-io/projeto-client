import http from './lib/http';

export const signUp = user => http.post('/auth/signup', user);

export const signIn = user => http.post('/auth/signin', user);

export const checkEmail = email => http.post('/auth/me', { email });