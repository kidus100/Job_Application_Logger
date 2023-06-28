

getDate = () => {
    var today = new Date();
    var options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour:"numeric",
        minute:"numeric",
    };
    date = today.toLocaleString("en-US", options);

    return date;
}


module.exports = getDate;