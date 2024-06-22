let imgBox = document.getElementById('img-box');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrtext');
function generateQr(){
    if(qrText.value.length > 0){
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrText.value;
        imgBox.classList.add('img-show');
    }
    else{
        qrText.classList.add('error')
        qrText.style.border = '1px solid red'
        setTimeout(() => {
            qrText.classList.remove('error')
            qrText.style.border = '1px solid #494eea'; 
        }, 1000);

    }
    
}
