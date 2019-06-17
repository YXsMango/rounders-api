

async function hello(req, res) {
    return res.json({ message: "Hello World" });
}

module.exports = {
    hello
};
