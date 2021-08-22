const cloud = require('wx-server-sdk')
const Token = require('Token')

// 云函数入口函数
exports.main = async (event, context) => {
  account = event.account
  password = event.password
  
  const db = cloud.database()
  db.collection('personal_info').doc('todo-identifiant-aleatoire').get({
    success: function(res) {
      // res.data 包含该记录的数据
      console.log(res.data)
    }
  })
var myres
  db.collection('personal_info').where({
    _id: account
  }).get({
    success: function(res) {
      myres = res
    console.log(res)
   }
  })

  if(true){
    return {
      status:"success",
      token:Token.encrypt({account:account},'5h'),
      account:account,
      password:password,
      res: myres
    }
  }
  else {
    return {
      status:"fail",
      token:"",
      account:account,
      password:password,
    }
  }
 
}

