
const Token = require('Token')

// 云函数入口函数
exports.main = async (event, context) => {
  account = event.account
  password = event.password
  
  if(account == "001" && password =="1750000"){
    return {
      status:"success",
      token:Token.encrypt({account:account},'5h'),
      account:account,
      password:password,
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

