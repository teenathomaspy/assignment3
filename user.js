
const loadUsers = async() =>{
    try{

   
    const response = await fetch ('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
        const responseData = await response.json();
        console.log(responseData);
        if(responseData){
            let load ='';
           const loadedData =  responseData.map(user => {
            //load += '<div class=container-item>'+user.name+'</div>';

            load += '<div class=card><div class=card-body><h4 class=card-title>'+user.name+'</h4><p class=card-text>'+user.address.street +', ' +user.address.suite+'</p></div></div>';
 
            });
            console.log(load);
            document.getElementById('userContainer').innerHTML=load;

        }
    }   
}catch (err){
    throw new  Error('Something went wrong!!');
}
}