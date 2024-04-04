
let heightFilled = false;
let weightFilled= false;
let ageFilled = false;
let genderFilled = false;
let validation = false;
let bmiResult = 0.00;

let bmiStatus = document.getElementById('bmi-status')
let bmiNumber = document.getElementById('bmi-number')
let bmiDescription = document.getElementById('bmi-desc')
let bmiExplanation1 = document.getElementById('bmi-explanation1')
let bmiExplanation2 = document.getElementById('bmi-explanation2')
let bmiExplanation3 = document.getElementById('bmi-explanation3')
 

//Function pada button
let button = document.querySelector('#calculate-button')
button.addEventListener('click', (event) => {
    event.preventDefault();
    bmiCount();
});


function validationsuccess(){

    // Variable untuk penggunaan pada Function validation & BMI Count (Pengambilan data dari html)
    let gender = document.querySelector('input[name="sex"]:checked');
    let weight = parseInt(document.querySelector('#berat').value);
    let age = parseInt(document.querySelector('#umur').value);
    let height = parseInt(document.querySelector('#tinggi').value);

    if(gender == null){
        document.getElementById('gender-error').innerHTML = 'Choose your Gender!'
        // genderFilled = false;
    } 
    else {
        genderFilled = true;
    }

    if(weight == null || isNaN(weight)){
        document.getElementById('weight-error').innerHTML = 'Insert Weight!'
        // weightFilled = false;
    }
    else {
        weightFilled = true;
    }

    if (age == null || isNaN(age)){
        document.getElementById('age-error').innerHTML = "Insert Age!"
        // ageFilled = false;
    }
    else {
        ageFilled = true;
    }

    if(height == null || isNaN(height)) {
        document.getElementById('height-error').innerHTML = "Insert Height!"
        heightFilled = false;
    }
    else {
        heightFilled = true;
    }

    if (genderFilled == true && weightFilled == true && ageFilled == true && heightFilled == true){
        validation = true
    }

    else {
        validation = false
    }

    return validation

}


function bmiCount(){

    let weight = parseInt(document.querySelector('#berat').value);
    let height = parseInt(document.querySelector('#tinggi').value);

    if (validationsuccess()) {
        console.log("success")
        bmi = (weight/ ((height * height)/10000)).toFixed(2);


        if (bmi < 18.5) {
            bmiStatus.innerHTML = "Under weight";
            bmiNumber.innerHTML = bmi;
            bmiDescription.innerHTML= "You are underweight"
            bmiExplanation1.innerHTML="Hasil BMI dibawah 18.5"
            bmiExplanation2.innerHTML="Orang dengan BMI kurang dari 18,5 termasuk dalam kategori ini. Kondisi ini bisa disebabkan oleh berbagai faktor, termasuk diet yang tidak seimbang, masalah kesehatan seperti gangguan makan, atau metabolisme yang cepat. Orang yang kurus mungkin memiliki risiko kekurangan nutrisi dan masalah kesehatan lainnya seperti penurunan energi, kelemahan otot, kerentanan terhadap infeksi, dan masalah kesehatan reproduksi."
            bmiExplanation3.innerHTML="BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakir seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda"
        }
        else if (bmi >= 18.5 && bmi < 25.0){
            bmiStatus.innerHTML = 'Normal (Ideal) weight';
            bmiNumber.innerHTML = bmi;
            bmiDescription.innerHTML= "Your body weight is Ideal"
            bmiExplanation1.innerHTML="Hasil BMI diantara 18.5 dan 25.0"
            bmiExplanation2.innerHTML="Orang dengan BMI antara 18,5 hingga 24,9 termasuk dalam kategori ini. Ini dianggap sebagai rentang berat badan yang sehat dan biasanya menunjukkan risiko yang lebih rendah terhadap berbagai masalah kesehatan. Orang dalam kategori ini diharapkan untuk mempertahankan pola makan seimbang dan gaya hidup aktif untuk menjaga kesehatan mereka."
            bmiExplanation3.innerHTML="BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakir seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda"
        }
        else if (bmi >= 25.0 && bmi < 30.0){
            bmiStatus.innerHTML = 'Over weight';
            bmiNumber.innerHTML = bmi;
            bmiDescription.innerHTML= "You are overweight"
            bmiExplanation1.innerHTML="Hasil BMI diantara 25.0 dan 30.0"
            bmiExplanation2.innerHTML="Orang dengan BMI antara 25 hingga 29,9 termasuk dalam kategori ini. Kondisi ini menunjukkan kelebihan lemak tubuh yang dapat meningkatkan risiko terhadap masalah kesehatan seperti diabetes tipe 2, penyakit jantung, tekanan darah tinggi, penyakit hati, dan beberapa jenis kanker. Langkah-langkah untuk menurunkan berat badan, seperti mengubah pola makan dan meningkatkan aktivitas fisik, dapat membantu mengurangi risiko kesehatan yang terkait dengan kelebihan berat badan."
            bmiExplanation3.innerHTML="BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakir seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda"
        }
        else if (bmi >= 30.0){
            bmiStatus.innerHTML = 'Obese'
            bmiNumber.innerHTML = bmi;
            bmiDescription.innerHTML= "You are considered Obese"
            bmiExplanation1.innerHTML="Hasil BMI diatas 30.0"
            bmiExplanation2.innerHTML="Orang dengan BMI 30 atau lebih termasuk dalam kategori obesitas. Obesitas adalah kondisi serius yang meningkatkan risiko terhadap berbagai masalah kesehatan kronis, termasuk diabetes tipe 2, penyakit jantung, stroke, penyakit hati, gangguan pernapasan, dan beberapa jenis kanker. Pengelolaan obesitas sering melibatkan kombinasi perubahan gaya hidup, seperti diet sehat dan aktivitas fisik yang teratur, serta mungkin perawatan medis atau intervensi seperti konseling gizi atau program penurunan berat badan yang dipantau oleh profesional kesehatan."
            bmiExplanation3.innerHTML="BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakir seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda"
        }   

    }
    console.log("unsuccess")



     

    }


