/**
 * long description for the file
 *
 * @summary This file handles the communications sent from the client
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-08 18:11:45 
 * Last modified  : 2018-04-08 20:20:42
 */

// Declare sending IP
const URL = "http://34.242.179.249:8020/";
// var URL = "http://172.16.0.104:8020/";

// declare mail validation patternn
var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports =(data)=>{
    console.log(data);

    var validEmail = (data.email).match(pattern);
    //console.log('validmail ',validEmail);

    if (data.name == '' && (validEmail == null || data.email == '')) {
        $("#email").css('border-color', 'red');
        $("#name").css('border-color', 'red');
        alert('MESSAGE NOT SENT \n Please enter your email address and name.');
    } else if (validEmail == null || data.email == '') {
        $("#email").css('border-color', 'red');
        alert('MESSAGE NOT SENT \n Please enter a valid email address.');
    } else if (data.name == '') {
        $("#name").css('border-color', 'red');
        alert('MESSAGE NOT SENT \n Please enter your name.');
    } else {
        //sendMail(data);
        console.log('Message can be sent');
    }

    const sendMail = (data) => {
        $.ajax({

        });
    };
};