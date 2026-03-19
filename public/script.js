// youtube video-----------------------------------------------------------------------------------------------------------------
const videoModal = document.getElementById("videoModal");
if (videoModal) {
    videoModal.addEventListener("hidden.bs.modal", function () {
        const iframe = document.getElementById("youtubeVideo");
        if (iframe) {
            iframe.src = iframe.src;
        }
    });
}

// form-----------------------------------------------------------------------------------------------------------------
let MyForm = document.getElementById("MyData");
if (MyForm) {
    const errorSpans = {};
    
    document.querySelectorAll("#MyData input").forEach(input => {
        const span = input.nextElementSibling; // assumes <small> immediately after input
        if(span && span.classList.contains("error_msg")){
            errorSpans[input.id] = span;
        }
    });
    MyForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        let isFormValid = true;
        let name = document.getElementById("use_name");
        let email = document.getElementById("use_email");
        let mobile = document.getElementById("use_mob");
        let date = document.getElementById("use_date");
        let ppl = document.getElementById("use_ppl");

        document.querySelectorAll("#MyData input").forEach(input => {
            input.classList.remove("error", "success");
            if(errorSpans[input.id]){
                errorSpans[input.id].innerText = "";
            }
        });
        
        // NAME
        const name_pattern = /^[A-Za-z\s]+$/;
        if (!name.value.trim()) {
            name.classList.add("error");
            errorSpans[name.id].innerText = "Please enter your name";
            isFormValid = false;
        } else if (!name_pattern.test(name.value.trim())) {
            name.classList.add("error");
            errorSpans[name.id].innerText = "Name should contain letters only";
            isFormValid = false;
        } else {
            name.classList.add("success");
        }

        // EMAIL
        const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            email.classList.add("error");
            errorSpans[email.id].innerText = "Please enter your email";
            isFormValid = false;
        } else if (!mail_pattern.test(email.value.trim())) {
            email.classList.add("error");
            errorSpans[email.id].innerText = "Enter a valid email";
            isFormValid = false;
        } else {
            email.classList.add("success");
        }

        // MOBILE
        const mob_Pattern = /^[6-9]\d{9}$/;
        if (!mobile.value.trim()) {
            mobile.classList.add("error");
            errorSpans[mobile.id].innerText = "Please enter your mobile number";
            isFormValid = false;
        } else if (!mob_Pattern.test(mobile.value.trim())) {
            mobile.classList.add("error");
            errorSpans[mobile.id].innerText = "Enter a valid mobile number";
            isFormValid = false;
        } else {
            mobile.classList.add("success");
        }

        // DATE
        if (!date.value.trim()) {
            date.classList.add("error");
            errorSpans[date.id].innerText = "Please select a date";
            isFormValid = false;
        } else {
            date.classList.add("success");
        }

        // PEOPLE
        if (!ppl.value.trim()) {
            ppl.classList.add("error");
            errorSpans[ppl.id].innerText = "Please enter number of people";
            isFormValid = false;
        } else if (Number(ppl.value) <= 0) {
            ppl.classList.add("error");
            errorSpans[ppl.id].innerText = "Enter number greater than 0";
            isFormValid = false;
        } else {
            ppl.classList.add("success");
        }
        
        if (isFormValid) {
            const User_Info = {
                "Full Name": name.value,
                "Email ID": email.value,
                "Mobile Number": mobile.value,
                "Reserve Date": date.value,
                "No of People": ppl.value
            };
            alert(`Thank you ${User_Info["Full Name"]}... Your Form Submitted Successfully ✅`);
            console.log(User_Info);
            MyForm.reset();
            
            document.querySelectorAll("#MyData input").forEach(input => {
                input.classList.remove("error", "success");
                if(errorSpans[input.id]){
                    errorSpans[input.id].innerText = "";
                }
            });
        }
    });
}

// Contact form-----------------------------------------------------------------------------------------------------------------
let PostData = document.getElementById("GetData");
if (PostData) {
    const errorSpans = {};
    document.querySelectorAll("#GetData input, #GetData textarea").forEach(input => {
        const span = input.nextElementSibling;
        if(span && span.classList.contains("error_msg")){
            errorSpans[input.id] = span;
        }
    });

    PostData.addEventListener("submit", function (e) {
        e.preventDefault();

        let isFormValid = true;
        let name = document.getElementById("en_name");
        let email = document.getElementById("en_mail");
        let subject = document.getElementById("en_sub");
        let message = document.getElementById("en_msg");

        document.querySelectorAll("#GetData input, #GetData textarea").forEach(input => {
            input.classList.remove("error","success");
            if(errorSpans[input.id]){
                errorSpans[input.id].innerText = "";
            }
        });

        // NAME
        const name_pattern = /^[A-Za-z\s]+$/;
        if (!name.value.trim()) {
            name.classList.add("error");
            errorSpans[name.id].innerText = "Please enter your name";
            isFormValid = false;
        }
        else if (!name_pattern.test(name.value.trim())) {
            name.classList.add("error");
            errorSpans[name.id].innerText = "Name should contain letters only";
            isFormValid = false;
        }
        else {
            name.classList.add("success");
        }

        // EMAIL
        const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            email.classList.add("error");
            errorSpans[email.id].innerText = "Please enter your email";
            isFormValid = false;
        }
        else if (!mail_pattern.test(email.value.trim())) {
            email.classList.add("error");
            errorSpans[email.id].innerText = "Enter a valid email";
            isFormValid = false;
        }
        else {
            email.classList.add("success");
        }

        // SUBJECT
        const sub_pattern = /^[A-Za-z\s]+$/;
        if (!subject.value.trim()) {
            subject.classList.add("error");
            errorSpans[subject.id].innerText = "Please enter subject";
            isFormValid = false;
        }
        else if (!sub_pattern.test(subject.value.trim())) {
            subject.classList.add("error");
            errorSpans[subject.id].innerText = "Subject should contain letters only";
            isFormValid = false;
        }
        else {
            subject.classList.add("success");
        }

        // MESSAGE
        if (!message.value.trim()) {
            message.classList.add("error");
            errorSpans[message.id].innerText = "Please enter message";
            isFormValid = false;
        }
        else {
            message.classList.add("success");
        }


        if (isFormValid) {
            const User_Info = {
                "Full Name": name.value,
                "Email ID": email.value,
                "Subject": subject.value,
                "Message": message.value
            };
            alert(`Thank you ${User_Info["Full Name"]}... Your Form Submitted Successfully ✅`);
            console.log(User_Info);
            PostData.reset();

            document.querySelectorAll("#GetData input, #GetData textarea").forEach(input => {
                input.classList.remove("error","success");
                if(errorSpans[input.id]){
                    errorSpans[input.id].innerText = "";
                }
            });
        }
    });
}

// Footer Email Form-----------------------------------------------------------------------------------------------------------------
const MyForm1 = document.getElementById("MyData1");
if (MyForm1) {
    const con_email = document.getElementById("con_mail");
    const errorSpan = MyForm1.querySelector("small.error_msg"); 
    MyForm1.addEventListener("submit", function(e) {
        e.preventDefault();
        con_email.classList.remove("error", "success");
        errorSpan.innerText = "";
        let valid = true;

        const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!con_email.value.trim()) {
            con_email.classList.add("error");
            errorSpan.innerText = "Please enter your email";
            valid = false;
        } else if (!mail_pattern.test(con_email.value.trim())) {
            con_email.classList.add("error");
            errorSpan.innerText = "Enter a valid email";
            valid = false;
        } else {
            con_email.classList.add("success");
        }
        
        if (valid) {
            alert("Thank you! Your Mail Submitted Successfully ✅");
            console.log({ "Email ID": con_email.value });
            MyForm1.reset();
            con_email.classList.remove("success");
        }
    });
    con_email.addEventListener("input", function() {
        con_email.classList.remove("error");
        errorSpan.innerText = "";
    });
}

// class form -------------------------------------------------------------------------------------------
const newsletterSection = document.querySelector(".newsletter");
if (newsletterSection) {
    const forms = document.querySelectorAll(".newsletter-form");
    forms.forEach(function(form){

        const emailInput = form.querySelector(".newsletter-email");
        const errorSpan = form.querySelector(".error_msg");

        form.addEventListener("submit", function(e){
            e.preventDefault();

            emailInput.classList.remove("error","success");
            errorSpan.innerText = "";

            const mail_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailInput.value.trim()){
                emailInput.classList.add("error");
                errorSpan.innerText = "Please enter your email";
            }
            else if(!mail_pattern.test(emailInput.value.trim())){
                emailInput.classList.add("error");
                errorSpan.innerText = "Enter a valid email";
            }
            else{
                emailInput.classList.add("success");
                alert("Thank you! Your Mail Submitted Successfully ✅");
                console.log({
                    email: emailInput.value
                });
                form.reset();
                emailInput.classList.remove("success");
            }
        });

        emailInput.addEventListener("input", function(){
            emailInput.classList.remove("error");
            errorSpan.innerText = "";
        });
    });
}