
module.exports = function (address) {
    // Copied from mozilla/browserid which got it from...
    // http://blog.gerv.net/2011/05/html5_email_address_regexp/
    var parts = address.split("@");

    return /^[\w.!#$%&'*+\-/=?\^`{|}~]+@[a-z\d-]+(\.[a-z\d-]+)+$/i.test(address)
           // total address allwed to be 254 bytes long
           && address.length <= 254
           // local side only allowed to be 64 bytes long
           && parts[0] && parts[0].length <= 64
           // domain side allowed to be up to 253 bytes long
           && parts[1] && parts[1].length <= 253;
};
