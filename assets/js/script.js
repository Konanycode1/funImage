const imgConnect = document.querySelector('.imgConnect');
const imgCle = document.querySelector('.imgCle')
const imgDetect = document.querySelector('.imgDetect')
const absolCle = document.querySelector('.absolCle')
const imgchange = document.querySelector('.imgchange')

imgConnect.addEventListener('mouseover', function(e) {
    const srcImg = e.target.getAttribute('src')
    imgchange.setAttribute('src',srcImg)
    absolCle.classList.remove('hidden')
    const classesToAdd = 'flex justify-center items-center';
    const classesArray = classesToAdd.split(' ');

    for (const className of classesArray) {
        absolCle.classList.add(className);
    }
    
});

imgCle.addEventListener('mouseover', function(e) {
    // Cette fonction sera exécutée lorsque le survol commencera
    const srcImg = e.target.getAttribute('src')
    imgchange.setAttribute('src',srcImg)
    absolCle.classList.remove('hidden')
    const classesToAdd = 'flex justify-center items-center';
    const classesArray = classesToAdd.split(' ');

    for (const className of classesArray) {
        absolCle.classList.add(className);
    }
   
});
imgDetect.addEventListener('mouseover', function(e) {
    const srcImg = e.target.getAttribute('src')
    imgchange.setAttribute('src',srcImg)
    absolCle.classList.remove('hidden')
    const classesToAdd = 'flex justify-center items-center';
    const classesArray = classesToAdd.split(' ');

    for (const className of classesArray) {
        absolCle.classList.add(className);
    }
});

imgchange.addEventListener('mouseleave', function(e) {
    console.log(e.target)
    absolCle.classList.add('hidden')
});