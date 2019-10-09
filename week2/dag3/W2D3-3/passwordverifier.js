const passwordVerifier = password => {
    if (!password) throw 'Het wachtwoord mag niet leeg zijn';
    else if (password.length <= 8) throw 'Het wachtwoord moet meer dan 8 tekens zijn';
    else if (!password.match(/[A-Z]/)) throw 'Het wachtwoord moet een hoofdletter bevatten';
    else if (!password.match(/[a-z]/)) throw 'Het wachtwoord moet een kleine letter bevatten';
    else if (!password.match(/[0-9]/)) throw 'Het wachtwoord moet een cijfer bevatten';
    else return password;
};

module.exports = passwordVerifier;