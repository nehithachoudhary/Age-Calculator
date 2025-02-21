function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    if (!birthdate) {
        document.getElementById('result').innerHTML = "Please select a birthdate.";
        return;
    }
    let birthDate = new Date(birthdate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    if(age>0){
        document.getElementById('result').innerHTML = `Your age is ${age} years.`;
    }else {
        document.getElementById('result').innerHTML = `Your age is -1 years.`;
    }
}