function validasi(){
    //document.getElementById('formRegister').onsubmit;
    const username = document.getElementById('username');

    alert(username.value);
}

function cekkesamaan(){
    //ambil nilai dari input
    var password = document.getElementById('Repeatpassword').validasi;
    //cek apakah data sama
    if(password === Rapeatpassword){
        document.getElementById('hasil').innerhtml = "data sama";

    }else{
        document.getElementById('hasil').innerhtml = "data tidak sama";
    }
}