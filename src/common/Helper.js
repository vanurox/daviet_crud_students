import { BASEURL } from './AppConfig';

const Helper = (url, method, data) => {
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
                    'Content-Type': 'application/json'
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