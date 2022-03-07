function kosong1() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
}

function kosong2(){
    let frm = document.getElementById("formulir");
    frm.a2.value = "";
}

function kosongAll() {
    let frm = document.getElementById("formulir");
    frm.a1.value = "";
    frm.a2.value = "";
    frm.hasil.value = "";
}

function dijumlah() {
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;

    if(isNaN(a) || a == ''){
        alert("harap isi data berupa angka")
    }

    else if (isNaN(b) || b == ''){
        alert("harap isi data berupa angka")
    }

    else {
    let hasil = + a + + b;
    frm.hasil.value = hasil;
    }
}

function dikurang() {
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;
    

    if(isNaN(a) || a == ''){
        alert("harap isi data berupa angka")
    }

    else if (isNaN(b) || b == ''){
        alert("harap isi data berupa angka")
    }

    else {
    let hasil = a - b;
    frm.hasil.value = hasil;
    }
}

function dikali() {
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;
    

    if(isNaN(a) || a == ''){
        alert("harap isi data berupa angka")
    }

    else if (isNaN(b) || b == ''){
        alert("harap isi data berupa angka")
    }

    else {
    let hasil = a * b;
    frm.hasil.value = hasil;
    }
}

function dibagi() {
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;
    

    if(isNaN(a) || a == ''){
        alert("harap isi data berupa angka")
    }

    else if (isNaN(b) || b == ''){
        alert("harap isi data berupa angka")
    }

    else {
    let hasil = + a/b;
    frm.hasil.value = hasil;
    }
}

function dipangkat() {
    let frm = document.getElementById("formulir");
    let a = frm.a1.value;
    let b = frm.a2.value;
    

    if(isNaN(a) || a == ''){
        alert("harap isi data berupa angka")
    }

    else if (isNaN(b) || b == ''){
        alert("harap isi data berupa angka")
    }

    else {
    let hasil = a ** b;
    frm.hasil.value = hasil;
    }
}



