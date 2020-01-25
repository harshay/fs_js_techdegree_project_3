/*
Full Stack Javascript Treehouse Techdegree
Name : Harshay Raipancholi
Project Number : 3
*/

//select form name element
const name_elm     = document.getElementById("name");
//select the job role text box on the form
const job_role_elm = document.getElementById("title");
//create a text box for the job role element which will be visible when other is clicked
const job_role_elm_other =  document.createElement("input");
job_role_elm_other.type = "text";
//create a text box for the job role element which will be visible when other is clicked
const shirt_elm =  document.getElementsByClassName("shirt")[0];
//
const form_parent =  document.getElementsByClassName("container")[0];
//
const main_form = document.getElementsByTagName("form")[0];

/***********************************************************************************************/

//set focus on page load
name_elm.focus();

/***********************************************************************************************/
main_form.insertBefore(job_role_elm_other,shirt_elm);

//hide text box by default
job_role_elm_other.style.display = "none";

job_role_elm.addEventListener('change', (event) => {

    if(event.target.value.toLowerCase() === "other") {

        job_role_elm_other.style.display = "";

    } else {

        job_role_elm_other.style.display = "none";

    };

});

/***********************************************************************************************/
