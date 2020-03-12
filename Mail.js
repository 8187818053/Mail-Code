var nodemailer = require('nodemailer')

var trasport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'udayshanker1235@gmail.com',
        pass:'udaykumar1235'
    }
})
var MailOptions ={
    from:'udayshanker1235@gmail.com',
    to:'udayshanker1235@gmail.com',
    subject:'Welcome',
    text:"These is My First Node Js Mail Program!"
}
trasport.sendMail(MailOptions,function(error,info){

    if(error)
    {
        console.log(error)
    }
    else{
        console.log("Email sent:"+info.response)
    }
})