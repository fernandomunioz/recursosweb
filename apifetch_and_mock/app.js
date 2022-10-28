import { serviceBack } from "./serviceBack.js";
// usando el servicio
false && serviceBack.get('/users/1')
.then(dat=>{
    if (dat) console.log(dat)
    else console.log('Error');
})
.catch(e=>null)



serviceBack.post('/login',{
    name:'juan carlos'
})
.then(dat=>{
    if (dat) console.log(dat)
    else console.log('Error');
})
.catch(e=>null)


false && put('/users',1,{
    name:'juan carlos'
})
.then(dat=>{
    if (dat) console.log(dat)
    else console.log('Error');
})
.catch(e=>null)


false && del('/users',11)
.then(dat=>{
    if (dat) console.log(dat)
    else console.log('Error');
})
.catch(e=>null)
