import init, { text_diff } from './rust_diff.js';

const oldtextArea = document.getElementById('input_old');
const newtextArea = document.getElementById('input_new');
async function run() {
    await init();
    oldtextArea.addEventListener("blur", (event) => {
        document.getElementById("preview").innerHTML = text_diff(event.target.value, newtextArea.value);
    });
    newtextArea.addEventListener("blur", (event) => {
        document.getElementById("preview").innerHTML = text_diff(oldtextArea.value, event.target.value);
    });
}
run();

