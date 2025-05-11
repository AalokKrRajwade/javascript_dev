const accountId = 14456
let accountEmail = "aalok@google.com"
var accountPassword = "fheiv90" 
accountCity = "Jaipur"
let accountState

// accountId = 32131 // this will give error, because of const
accountEmail = "temp@googole.com"
accountPassword = "vnwo36"
accountCity = "Bengluru"

console.log(accountId)
console.log([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
    prefer not to use var because of issue in block scope and functional scope
*/