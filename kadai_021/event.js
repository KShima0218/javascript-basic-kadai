const timebtn = document.getElementById('btn');

timebtn.addEventListener('click' , ()=>{
    setTimeout(()=> {
        const H2 = document.getElementById('text');
        H2.textContent = 'ボタンをクリックしました'
    },2000);
});