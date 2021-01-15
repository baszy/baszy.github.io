/* This script sets the color scheme of the webpage.*/
window.onload = () => { load_scheme(); }

const schemes = [
    ["--text-color", "#666666",
     "--background-color", "#ffffff"],
    ["--text-color", "#eaeaea",
     "--background-color", "#303030"]]

const set_scheme = (scheme) => {
    document.cookie = "Scheme=" + scheme.toString() + "; SameSite=None; Secure";
    var root = document.querySelector(":root");
    for (let i = 0; i < schemes[scheme].length; i += 2) {
        root.style.setProperty(schemes[scheme][i], schemes[scheme][i + 1]);
    }
}

const load_scheme = () => {
    /* Yes, eval isn't safe, but this code is running on YOUR computer, not mine. */
    set_scheme(eval(document.cookie.split("=")[1]));
}
