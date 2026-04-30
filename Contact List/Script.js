let form = document.getElementById("form")
let addContent = document.getElementById("contact-btn");
let save = document.getElementById("save-btn");
let cancel = document.getElementById("cancel-btn");
let bodyContainer = document.getElementById("body-container");
//user-input
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("mail")
let phoneInput = document.getElementById("pn")
let birthdayInput = document.getElementById("bd")

//Thses functions Show and Hide content when user clicks on the add content, save, and cancel button
function contentBtn() {
    let display= form.style.display;
    if(display == "none"){
        form.style.display = "";
        addContent.style.display = "none"       
    }

}

save.addEventListener("click", showHideContent)
cancel.addEventListener("click", showHideContent)

function showHideContent(event){
    event.preventDefault();
    let display = addContent.style.display;
    if(display == "none"){
        form.style.display = "none";
        addContent.style.display = ""       
    }
    else if(display == ""){
        addContent.style.display = "none";
    }
}


//Function will Display/Save User input into the contact list
let buttonClickedCount =  0
let row;
function saveBtn(){
    if(nameInput.value == "" || emailInput.value == "" || phoneInput.value == "" || birthdayInput.value == ""  ){
        alert("Please fill in the your contact infromation below.")
        
    }
    else if(row !== undefined){
        
        Array.from(row[2].children)[0].textContent = nameInput.value
            
        
        Array.from(row[3].children)[0].textContent = emailInput.value
            
        
        Array.from(row[4].children)[0].textContent = phoneInput.value
            
        
        Array.from(row[5].children)[0].textContent = birthdayInput.value
            

        cancelBtn()
        row = undefined
        }
    // else if(nameInput.value == "" || emailInput.value == "" || phoneInput.value == "" || birthdayInput.value == ""){
    //     parent.alert("Please fill in the your contact infromation below.")
    // }
    else{
        let inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input-container")
        

        let editImg = document.createElement("img");
        editImg.src="edit-button.png";
        ;
        editImg.addEventListener("click", function (){
            row = Array.from(this.parentElement.children)
            nameInput.value = name.textContent
            emailInput.value = email.textContent
            phoneInput.value = phoneNumber.textContent
            birthdayInput.value = birthday.textContent
            console.log(birthdayInput.value)
            contentBtn()

        })
        inputContainer.append(editImg);
        
        let deleteImg = document.createElement("img");
        deleteImg.src="delete.png";
        deleteImg.addEventListener("click", function (){
            inputContainer.remove()
            color()   
        });
        inputContainer.append(deleteImg);


        let input1 = document.createElement("div");
        input1.classList.add("input")
        let name = document.createElement("p") 
        name.textContent += nameInput.value
        input1.append(name);
        inputContainer.append(input1);

        let input2 = document.createElement("div");
        input2.classList.add("input")
        let email = document.createElement("p") 
        email.textContent += emailInput.value
        input2.append(email);
        inputContainer.append(input2);

        let input3 = document.createElement("div");
        input3.classList.add("input")
        let phoneNumber = document.createElement("p") 
        phoneNumber.textContent += phoneInput.value
        input3.append(phoneNumber);
        inputContainer.append(input3);

        let input4 = document.createElement("div");
        input4.classList.add("input")
        let birthday = document.createElement("p") 
        birthday.textContent += (birthdayInput.value)
        input4.append(birthday);
        inputContainer.append(input4);




        bodyContainer.append(inputContainer)
        buttonClickedCount++

        cancelBtn()
        color()
        }
}
    function color(){
        let bodyArray = Array.from(bodyContainer.children)
        for(i = 0; i < bodyArray.length; i++){
   
            if(i % 2 === 1){
                let row = bodyArray[i].children
                let prevClass = row[2].classList[1]
                if(prevClass == undefined){
                    row[2].classList.add("darkColor") 
                    row[3].classList.add("darkColor") 
                    row[4].classList.add("darkColor") 
                    row[5].classList.add("darkColor") 
                }
                else{
                row[2].classList.replace(`${prevClass}`, 'darkColor')
                row[3].classList.replace(`${prevClass}`, 'darkColor')
                row[4].classList.replace(`${prevClass}`, 'darkColor')
                row[5].classList.replace(`${prevClass}`, 'darkColor')}
            }
            else{
                let row = bodyArray[i].children
                let prevClass = row[2].classList[1]
                if(prevClass == undefined){
                    row[2].classList.add("lightColor") 
                    row[3].classList.add("lightColor") 
                    row[4].classList.add("lightColor") 
                    row[5].classList.add("lightColor") 
                }
                else{
                
                row[2].classList.replace(`${prevClass}`, 'lightColor')
                row[3].classList.replace(`${prevClass}`, 'lightColor')
                row[4].classList.replace(`${prevClass}`, 'lightColor')
                row[5].classList.replace(`${prevClass}`, 'lightColor')
                }
            }
    }}






//Function will Cancel/Reset User input  
function cancelBtn(){
    nameInput.value = ""
    emailInput.value= ""
    phoneInput.value = ""
    birthdayInput.value= ""
}

//Function will delete User Contact
function deleteUserInfo(){
   console.log(this.value)
   inputContainer = document.getElementById(this.value)
   inputContainer.remove()
}
