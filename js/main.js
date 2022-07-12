const advice_id = document.querySelector('.card-advice-id');
const advice_content = document.querySelector('.card-advice-content');
const dice = document.querySelector('.card-advice-dice');
async function fetchAdvice(){
    const adviceFetch = await fetch('https://api.adviceslip.com/advice',{cache: 'no-store'});
    const adviceData = await adviceFetch.json();
    return adviceData;
}
fetchAdvice()
function handleClick(){
    const datas = fetchAdvice();
    datas.then((data) =>{
        advice_id.textContent = 'advice #' + data.slip.id;
        advice_content.textContent = '"' +data.slip.advice + '"';
    })
}
dice.addEventListener('click',handleClick);