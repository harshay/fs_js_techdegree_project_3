/*
Full Stack Javascript Treehouse Techdegree
Name : Harshay Raipancholi
Project Number : 3
*/

/***********************************************************************************************/
//basic info section

//select form name element
const name_elm           = document.getElementById("name");
const email_elm           = document.getElementById("email");
//select the job role text box on the form
const job_role_elm       = document.getElementById("title");
//create a text box for the job role element which will be visible when other is clicked
const job_role_elm_other =  document.createElement("input");
job_role_elm_other.type  = "text";
//create a text box for the job role element which will be visible when other is clicked
const shirt_elm          =  document.getElementsByClassName("shirt")[0];
//
const form_parent        =  document.getElementsByClassName("container")[0];
//
const main_form          = document.getElementsByTagName("form")[0];

/***********************************************************************************************/
//set focus on page load
name_elm.focus();

/***********************************************************************************************/
main_form.insertBefore(job_role_elm_other,shirt_elm);

//hide text box by default
job_role_elm_other.style.display = "none";


//detect drop down selection change and display text box if 'other' is selected (hidden by default)
job_role_elm.addEventListener('change', (event) => {

    if(event.target.value.toLowerCase() === "other") {

        job_role_elm_other.style.display = "";

    } else {

        job_role_elm_other.style.display = "none";

    };

});
/***********************************************************************************************/
//tshirt info

// theme selection element
const design_theme_elm      = document.getElementById("design");
//
// colours selection element
const colour_theme_elm      = document.getElementById("color");
//select specific colour options
const tomato_option         = document.querySelector('option[value="tomato"]');
const cornflowerblue_option = document.querySelector('option[value="cornflowerblue"]');
const no_colour_option      = document.createElement("option");

no_colour_option.textContent = "Please select a T-shirt Theme";
colour_theme_elm.appendChild(no_colour_option);

//default value displayed on the colours drop down ; i.e. when the page loads
no_colour_option.setAttribute("selected","selected");

const colour_theme_elm_children = document.getElementById("color").children;

//function will unhide all colours in the colours drop down
const unhide_all_colours = () => {

     for(i=0;i < colour_theme_elm_children.length; i += 1) {
        
        colour_theme_elm_children[i].style.display = "";
    };
};

//hide all colours ; when theme is selected
const hide_all_colours = () => {
    
        unhide_all_colours();

        //hide all except select theme option
        for(i=0;i < colour_theme_elm_children.length; i += 1) {
           
            if(colour_theme_elm_children[i].value.toLowerCase() !== "select theme") {

            colour_theme_elm_children[i].style.display = "none";

            };
        };
        
    cornflowerblue_option.removeAttribute("selected");
    tomato_option.removeAttribute("selected");    
    no_colour_option.setAttribute("selected","selected");
        
};

//run on page load
hide_all_colours();

/*
"Theme - JS Puns"
*/
const theme_jspuns_colours = () => {

    //hide unwanted
    for(i=0;i < colour_theme_elm_children.length; i += 1) {       
    
        if(colour_theme_elm_children[i].value === "tomato" || colour_theme_elm_children[i].value === "steelblue" || colour_theme_elm_children[i].value === "dimgrey" || colour_theme_elm_children[i].value ===  "Please select a T-shirt Theme"){

            colour_theme_elm_children[i].style.display = "none";
        }  
    };

    no_colour_option.removeAttribute("selected");
    tomato_option.removeAttribute("selected");
    cornflowerblue_option.setAttribute("selected", "selected");

};

/*
"Theme - I ♥ JS"
*/
const theme_ilovejs_colours = () => {
        
    //hide unwanted
    for(i=0;i < colour_theme_elm_children.length; i += 1) {       
    
        if(colour_theme_elm_children[i].value === "cornflowerblue" || colour_theme_elm_children[i].value === "darkslategrey" || colour_theme_elm_children[i].value === "gold" || colour_theme_elm_children[i].value ===  "Please select a T-shirt Theme"){

            colour_theme_elm_children[i].style.display = "none";
        }  
    };

    no_colour_option.removeAttribute("selected");
    cornflowerblue_option.removeAttribute("selected");
    tomato_option.setAttribute("selected", "selected");

};

//add event lister to theme drop down; change colours displayed depending on theme selected
design_theme_elm.addEventListener('change', (event) => {

    //unhide all colours
    unhide_all_colours();

    if(event.target.value.toLowerCase() === "select theme") {

        hide_all_colours();

    } else if (event.target.value === "js puns") {
        
        theme_jspuns_colours();

    }
    else {

        theme_ilovejs_colours();

    };
});

/************************************************************************************************/
//register for activities section

const form_main                = document.getElementsByTagName("form")[0];

//select activites elements
const reg_main                 = document.getElementsByClassName("activities")[0];
const reg_main_input_children  = reg_main.getElementsByTagName("input"); 

//select activites elements by tagerting directly
const reg_all                  = document.querySelector('input[name="all"]');
const reg_js_frameworks        = document.querySelector('input[name="js-frameworks"]');
const reg_js_libs              = document.querySelector('input[name="js-libs"]');
const reg_express              = document.querySelector('input[name="express"]');
const reg_node                 = document.querySelector('input[name="node"]');
const reg_build_tools          = document.querySelector('input[name="build-tools"]');
const reg_npm                  = document.querySelector('input[name="npm"]');

//create and append element that will display the total cost
const total_cost_div           = document.createElement("div");
total_cost_div.innerHTML       = "Total Cost is $" + 0;
const payment_info_main        = reg_main.nextElementSibling;
form_main.insertBefore(total_cost_div,payment_info_main);


//function will enable all checkboxes
const reg_enable_all = () => { 

    for(i=0;i < reg_main_input_children.length; i+=1) {

        reg_main_input_children[i].disabled = false;

    };
};

//function will calculate the total cost of selected activities
const reg_total_cost_func = () => {     
    
let reg_total_cost = 0;
let reg_total_cost_hold = 0;

    for(i=0;i < reg_main_input_children.length; i+=1) {
        
        if(reg_main_input_children[i].checked === true) {                  
            
            reg_total_cost_hold = parseInt(reg_main_input_children[i].getAttribute("data-cost"));              

        };        
        
        //accumulate the cost of all checked boxes
        reg_total_cost = reg_total_cost + reg_total_cost_hold;

        //reset hold value for the next iteration of the loop
        reg_total_cost_hold = 0;
        
    };
    
    return reg_total_cost;
};

//attach event listner which will disable options depending on the boxes checked
reg_main.addEventListener('change', (event) => {

    //enable all checkboxes first
    reg_enable_all();

    if(reg_js_frameworks.checked  === true) { 

            reg_express.disabled  = true;
            
    } else if(reg_express.checked === true) {

       reg_js_frameworks.disabled = true;
    };

    if(reg_js_libs.checked        === true) {

        reg_node.disabled         = true;

    } else if(reg_node.checked    === true) {

        reg_js_libs.disabled      = true;

    };

    if(reg_build_tools.checked    === true) {

        reg_npm.disabled = true;

    } else if(reg_npm.checked     === true) {

        reg_build_tools.disabled  = true;

    };

    //calculate total cost
    total_cost_div.innerHTML = "Total Cost is $" + reg_total_cost_func();

});


/************************************************************************************************/
//payment info 

const pay_type_drop            = document.getElementById("payment");
//payment options
const pay_type_credit_card     = document.getElementById("credit-card");
const pay_type_paypal          = document.getElementById("paypal");
const pay_type_bitcoin         = document.getElementById("bitcoin");
//
const pay_type_credit_card_option  = document.getElementById("cc-num");
const pay_type_zip_code_option     = document.getElementById("zip");
const pay_type_cvv_option          = document.getElementById("cvv");

//
const pay_method               = document.querySelector('option[value="select method"]');
const cc_method                = document.querySelector('option[value="credit card"]');

//on page load
cc_method.setAttribute("selected","selected");
pay_method.style.display       = "none";
pay_type_paypal.style.display  = "none";
pay_type_bitcoin.style.display = "none";

//function will display all payment options
const pay_type_drop_display_all = () => { 

    pay_type_paypal.style.display      = "";
    pay_type_bitcoin.style.display     = "";
    pay_type_credit_card.style.display = "";

}; 

pay_type_drop.addEventListener("change", (event) =>{

    //display all options first
    pay_type_drop_display_all();

     //hide elements we dont need
     if(event.target.value                 === "credit card"){ 

        pay_type_paypal.style.display      = "none";
        pay_type_bitcoin.style.display     = "none";

    } else if (event.target.value          === "bitcoin"){

        pay_type_paypal.style.display      = "none";
        pay_type_credit_card.style.display = "none";
        
    } else if (event.target.value          === "paypal"){

        pay_type_bitcoin.style.display     = "none";
        pay_type_credit_card.style.display = "none";

    };
});

/************************************************************************************************/
//form validation 

//regex test rules
const email_regex                = /\w+[@]\w+[.]\w+/;
const credit_card_number_regex   = /\d{13,16}/;
const zip_code_regex             = /\d{5}/;
const cvv_regex                  = /\d{3}/;

//initial error flags
let name_error_flg               = 0; 
let email_error_flg              = 0; 
let reg_activities_error_flg     = 0; 
let credit_card_number_error_flg = 0; 
let zip_code_error_flg           = 0; 
let cvv_error_flg                = 0; 

//function will flag validation errors with all form elements if they exist
const error_test = () => {

    //reset error flags for every execution
    name_error_flg               = 0; 
    email_error_flg              = 0; 
    reg_activities_error_flg     = 0; 
    credit_card_number_error_flg = 0; 
    zip_code_error_flg           = 0; 
    cvv_error_flg                = 0; 

    if(name_elm.value === "" ){
        
        name_error_flg = 1;         
    };
    if(email_regex.test(email_elm.value) === false ){
        
        email_error_flg = 1;         
    };
    if(reg_total_cost_func() === 0 ){
        
        reg_activities_error_flg = 1;         
    };
    if(credit_card_number_regex.test(pay_type_credit_card_option.value) === false ){
        
        credit_card_number_error_flg = 1;         
    };
    if(zip_code_regex.test(pay_type_zip_code_option.value) === false ){
        
        zip_code_error_flg = 1;         
    };
    if(cvv_regex.test(pay_type_cvv_option.value) === "" ){
        
        cvv_error_flg = 1;         
    };
};

/************************************************************************************************/
//validation error messages on form submission

const submit_button_elm = document.querySelector('button[type="submit"]');

submit_button_elm.addEventListener("click", () => {

    error_test();

    console.log(name_error_flg)              ; 
    console.log(email_error_flg)              ; 
    console.log(reg_activities_error_flg)     ; 
    console.log(credit_card_number_error_flg) ; 
        console.log(zip_code_error_flg)       ; 
            console.log(cvv_error_flg)        ; 



});


/************************************************************************************************/


