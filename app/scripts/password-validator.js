let commonPasswordArr;


const getCommonPasswords = async function fetchPws() {
    const response = await fetch("http://localhost:3000/passwords");
    const passwords = await response.text();
    commonPasswordArr = passwords.split('\n');
};

function checkEnteredPassword(){
    let passwordInputValue = $("#passwordField").val();
    if(checkLengthPassword(passwordInputValue)){
        //Checks the Length of Password to see if it's within recommendations of 8 and 64 characters
        if(checkIfAscii(passwordInputValue)){
            //Checks to see if the password contains only ascii values
            if(checkCommonPasswords(passwordInputValue, commonPasswordArr)){
                //Checks the dictionary of common passwords to see if password entered is not in dictionary
                $("#passwordResult").html("<div>Password is valid.</div>");
            }
            else{
                $("#passwordResult").html("<div>Password is invalid as it is a common password. Please try typing a more complex password.</div>");
            }
        }
        else{
            $("#passwordResult").html("<div>Password contains non-ASCII values. Please only type ASCII values.</div>");
        }
       
    }
    else{
        $("#passwordResult").html("<div>Password Length Requirement is not met. Password has to be between 8 and 64 characters.</div>");
    }

}

function checkLengthPassword(passwordInput){
    if(passwordInput.length >=8 && passwordInput.length <=64){
        return true;
    }
    else{
        return false;
    }
}

function checkIfAscii(passwordInput){
    return (/^[\x00-\x7F]*$/).test(passwordInput);
}

function checkCommonPasswords(passwordInput, commonPasswordsArr){
    if (!commonPasswordsArr.includes(passwordInput)){
        return true;
    }
    else{
        return false;
    }
}

getCommonPasswords();