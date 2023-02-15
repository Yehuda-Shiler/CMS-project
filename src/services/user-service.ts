import { userModel } from '../models/item.model';

export async function cheakLogin (user:any) {
    const SECRET_KEY = 'secret_key';


    const user1 = await userModel.exists({username: user.username, password: user.password})
//     ,function (err, doc) {
//       if (err || !doc)
//         console.log('Invalid username or password');
//     else{
//       //const token = jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, {
//         //expiresIn: '1h'
//      // });
//      console.log('doc ' + doc?._id)//{ token };
//     }
//   //return response;
// });
console.log('user1 ' + user1)
return user1;
}

module.exports = { cheakLogin }