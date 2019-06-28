function xuly() {
    let years = parseInt(document.getElementById("years").value);
    let isLeapYear = false;
    let isCheckYear4 = years % 4 == 0;
    if (isCheckYear4) {
        let isCheckYear100 = years % 100 == 0;
        if (isCheckYear100) {
            let isCheckYear400 = years % 400 == 0
            if (isCheckYear400) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }
    if(isLeapYear){
        alert("is a leap year");
    }
    else {
        alert("is not a leap year");
    }

}