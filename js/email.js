/* This script hides the email address as an array of integers. Obviously, this
 * allows any regular person to see my email address but prevents stupid web
 * crawlers from accessing it.
 */

/* Here's the actual address. */
const addr = [157, 140, 139, 158, 139, 151, 144, 143, 138, 147, 144,
              140, 191, 152, 146, 158, 150, 147, 209, 156, 144, 146];

/* Generates an XORed list of character codes for email anonymity */
const generate_addr = (string) => {
    var chars = [];
    for (let i = 0; i < string.length; i++) {
        chars.push(string.charCodeAt(i) ^ 255);
    }
    return chars;
}

/* Retrieves the original string from this XORed list */
const retrieve_addr = () => {
    var result = [];
    for (let i = 0; i < addr.length; i++) {
        result.push(addr[i] ^ 255);
    }
    return String.fromCharCode.apply(null, result);
}

/* Opens a mailto: link to the """decrypted""" address */
const mail_to = () => {
    window.location.assign("mailto:" + retrieve_addr());
}
