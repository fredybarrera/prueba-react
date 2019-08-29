import Client from './client';

export const getAll = () => {
    const promise = Client('https://jsonplaceholder.typicode.com/posts');
    return promise;
}