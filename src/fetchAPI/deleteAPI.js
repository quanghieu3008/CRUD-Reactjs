export default function callAPI(id){
    // console.log(' delete id.....',id);
    
    return new Promise((resolve,reject)=>{
        
        const url ='http://localhost:3001/items/'+id ;
        fetch(url,{
            method:'DELETE',
           

        })
        .then((response)=> response.json())
        .then((res) =>{
            resolve(res);
        })
        .catch((error)=> {
            reject(error);
        });
    });
}