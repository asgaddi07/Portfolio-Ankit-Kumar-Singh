const firebaseConfig = {

    apiKey: "AIzaSyCNO7MKPFRpankMhcLF5nKqxhE-qwrntpM",
  
    authDomain: "porfoliocontactme.firebaseapp.com",
  
    databaseURL: "https://porfoliocontactme-default-rtdb.firebaseio.com",
  
    projectId: "porfoliocontactme",
  
    storageBucket: "porfoliocontactme.appspot.com",
  
    messagingSenderId: "116639382864",
  
    appId: "1:116639382864:web:4189c9c0f03580a19b8055"
  
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, phone, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        phone: phone,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};