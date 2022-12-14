// function showPosition(event){
//     console.log("X axis:" + event.clientX + " | Y axis:" + event.clientY)
// }
console.log('pogiko');
const anchor = document.getElementById('anchor');
anchor.ondragstart = function() { return false; };
//calculate position of achor elements
const rect = anchor.getBoundingClientRect();
//get the middle of achor
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const angelDeg = angle(mouseX, mouseY, anchorX, anchorY)
    // console.log(angelDeg);

    //rotate the eye
    const eyes = document.querySelectorAll('.eye')//array of eyes
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angelDeg}deg)`;
        eye.ondragstart = function() { return false; };

    });
    //HUE
    anchor.style.filter = `hue-rotate(${angelDeg}deg)`
})
//comput angle deg
function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;

    const rad = Math.atan2(dy, dx);
    //convert to degree
    const deg = rad * 180 / Math.PI;
    return deg
}
