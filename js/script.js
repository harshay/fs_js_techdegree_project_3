/*
Full Stack Javascript Treehouse Techdegree
Name : Harshay Raipancholi
Project Number : 3
*/

//select form name element
name_elm     = document.getElementById("name");
//select the job role text box on the form
job_role_elm = document.getElementById("title");

job_role_elm.addEventListner("change", (event) => {

    console.log(event.target.value);

});



//set focus on page load
name_elm.focus();