

function hello(req, res) {
    console.log("Hello World!");
    return res.json({ message: "Hello World" })
}

module.exports = {
    hello
};