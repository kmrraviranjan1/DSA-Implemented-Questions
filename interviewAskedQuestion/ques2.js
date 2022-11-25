// Given n email addresses of different domains, please send an email to the first address(in alphabetical order) of each domain. Please assume a function sendmail() to send the emails.
// (note: give general solution).
// Input Array = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com','jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com'].

// Expected Output - Below is the  order of address in which sendmail function is going to send mail.
//                                 abc@channelier.com
//                                 abc@yahoo.com
//                                 abc@gmail.com
//                                 abc@hotmail.com

const input = ['ghi@hotmail.com', 'def@yahoo.com', 'ghi@gmail.com', 'abc@channelier.com', 'abc@hotmail.com', 'def@hotmail.com', 'abc@gmail.com', 'abc@yahoo.com', 'def@channelier.com', 'jkl@hotmail.com', 'ghi@yahoo.com', 'def@gmail.com']

function runProgram(input) {
    let domainMap = {}

    for (let id = 0; id < input.length; id++) {
        let [username,domain]=input[id].split('@')
        if(domainMap[domain]){
            domainMap[domain]= [...domainMap[domain],username]
        } else{
            domainMap[domain] =[username]
        }
    }

    let emailList =[]

    for( domain  in domainMap){
        let [firstUserName] = domainMap[domain].sort((a,b)=>(a.localeCompare(b)))
        emailList.push(`${firstUserName}@${domain}`)
    }

    return emailList
}
const result = runProgram(input)
console.log("result: ", result);