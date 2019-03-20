import { BASEURL } from './AppConfig';
import cookies from 'react-cookies';

const Helper = (url, method, data) => {
    let token = cookies.load('access_token') === undefined ? '' : cookies.load('access_token');
    if (method === "GET") {
        return (
            fetch(BASEURL + url)
                .then((res) => {
                    return res.json();
                })
        );
    } else if (method === 'POST') {
        return (
            fetch(BASEURL + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            })
                .then((res) => {
                    return res.json();
                })
        );
    }
}


export default Helper;