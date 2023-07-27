function validate() {
    user_zipcode = document.forms["myForm"]["zipcode"].value;
    const re = /^[0-9]{5}$/;

    if (user_zipcode == "" || re.test(user_zipcode)) {
        return true;
    } else {
        alert("Invalid zipcode, please try again.");
        return false;
    }
}
