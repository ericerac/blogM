// --------------- VALIDATION FORM-------------------//
const checkForm = () => {

    if (!this.firstName) {
        this.messageNom = "* Le nom doit être renseigné."
        return false
    } else if (!this.validFirstName(this.firstName)) {
        this.messageNom = ' * Le nom ne doit pas contenir de caractères spéciaux';
        return false
    }

    if (!this.lastName) {
        this.messagePrenom = " * Le prénom doit être renseigné.";
        return false
    } else if (!this.validLastName(this.lastName)) {
        this.messagePrenom = '* Le prénom ne doit pas contenir de caractères spéciaux';
        return false
    }

    if (!this.Email) {
        this.messageEmail = "* l'adresse Email doit être renseignée.";
        return false
    } else if (!this.validEmail(this.Email)) {
        console.log("THIS:EMAIL", this.Email);
        this.messageEmail = '* Adresse email non valide';
        return false
    }
    if (!this.password) {
        this.messagePassword = "* l'adresse Email doit être renseignée.";
        return false
    } else if (!this.validPassword(this.password)) {
        console.log("THIS:PASSWORD", this.password);
        this.messagePassword = '* Mot de passe doit contenir entre 8 a 20 caractères dont 1 majuscule et 1 chiffre * ';
        return false
    }
}
const validFirstName = (firstName) => {
    var re = /^[a-zA-Z-._àâéèêô´`¨ ñÑî'ùûïÏäëüöÖÄçÀÂÉÈÔÙÛÇ]*$/;
    return re.test(firstName);
}
const validLastName = (lastName) => {
    var re = /^[a-zA-Z-._àâéèêô´`¨ ñÑî'ùûïÏäëüöÖÄçÀÂÉÈÔÙÛÇ]*$/;
    return re.test(lastName);
}
const validEmail = (email) => {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
}
const validPassword = (password) => {
    var re = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
    return re.test(password);
}
export default checkForm