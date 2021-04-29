export default function callApi(activePage) {

    return new Promise((resolve, reject) => {
        const url =  `http://localhost:3001/items?_page=${activePage}&_limit=5`;
        fetch(url, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((res) => {
            resolve(res);
            console.log(res);
        })
        .catch((error) => {
            reject(error);
        });
    })
}