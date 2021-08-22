const cloud = require('wx-server-sdk')
const Token = require('Token')
cloud.init()
// 云函数入口函数
var myres;
var flag = 0;
exports.main = async (event, context) => {
  account = event.account
  password = event.password
  
  const db = cloud.database()
  
  await db.collection('personal_info').doc(parseInt(account)).get().then(res => {
    // res.data 包含该记录的数据
    console.log(res.data)
    flag = 1
    myres=res.data;
    if(res.data.password==password){
      console.log("in!");
     
    }
    
  })
  console.log(flag);
  while(flag == 1){
    return {
      status:"success",
      token:Token.encrypt({account:account},'5h'),
      res: myres,
      account:account,
      password:password,
    }
  }
  
}

