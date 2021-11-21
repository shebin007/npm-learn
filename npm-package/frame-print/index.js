module.exports = function print(msg) {
    let frameborder = '';
    for (let i = 0; i < msg.length; i++) {
        frameborder += '#';
    }
    console.log(frameborder);
    console.log(msg);
    console.log(frameborder);
}