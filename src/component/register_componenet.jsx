/**
 * @description base component of register page
 * @author Yash
 * @version 3.3.0
 * @since 12/11/2018
 * @package react, material-ui/core
 */
import React from 'react';
import { Button, TextField, FormLabel } from '@material-ui/core';
import user_service from '../services/user_service';

/**
 * @description Class Component to render display option we want on page
 * @extends React Component to make it a component
 * @function render to display on webpage & to write html code
 */
class Register_component extends React.Component
{

    /**
     * @description setting value of any text field to some object element declared in constructor
     * @param {Object.props} props 
     * @constructor to set values to object element
     */

    constructor(props) {
        super(props);
        this.state = {
            email_id : "",
            pass_1 : "",
            pass_2 : ""
        };
        // this.email_id_setting_variable = this.email_id_setting_variable.bind(this);
        // this.pass1_setting_variable = this.pass1_setting_variable.bind(this);
        // this.pass_2_setting_variable = this.pass_2_setting_variable.bind(this);
        this.check_both_email_password = this.check_both_email_password.bind(this);
        this.setAll = this.setAll.bind(this);
    }


    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     */

    setAll(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    /**
     * @description these are for setting state object element individually
     */
    // email_id_setting_variable(event) {
    //     this.setState(
    //         {
    //             email_id : event.target.value
    //         }
    //     );
    //     console.log('email_id', this.state.email_id);        
    // }

    // pass1_setting_variable(event) {
    //     this.setState(
    //         {
    //             pass_1 : event.target.value
    //         }
    //     );
    //     console.log('pass1 : ',this.state.pass_1);
    // }

    // pass_2_setting_variable(event) {
    //     this.setState(
    //         {
    //             pass_2 : event.target.value
    //         }
    //     );
    //     console.log('pass_2 : ',this.state.pass_2);  
    //     console.log("pass 2 : : ", event.target.value);
              
    // }

    /**
     * @description method to set value to class state variable
     * @param {Event} evt 
     * @function check_both_email_password to go for register procedure when send button clicked & asked for response from server via request
     */
    check_both_email_password(event)
    {
        event.preventDefault();
        console.log('inside if-else method');

         if(/^[a-z](\.?[a-z0-9]){2,}@g(oogle)?mail\.com$/g.test(this.state.email_id))
         {
             if(/^[a-zA-Z][\w!]{5,9}$/g.test(this.state.password))
             {
                console.log("emaid id : ", this.state.email_id);   
                if(this.state.pass_1 === this.state.pass_2)
                {
                    alert('All good done');
                    console.log('pass 1 : ', this.state.pass_1, 'pass 2 : ', this.state.pass_2);
                    // const redirect_result = 
                    user_service.register_service(this.state.email_id, this.state.pass_1);
                }
             }
             
         }
    }
    render() {
         return (
            <div display = "inline-block" >
                <br/><br/>
                {/* 
                * @des this is when setting all values via single method
                */}
                <TextField label="Email_id" name = "email_id" value = {this.state.email_id} onChange = {this.setAll}></TextField>
                <br/><br/>

                <TextField label="Enter Password" type = "password" name = "pass_1" value = {this.state.pass_1} onChange = {this.setAll}></TextField>
                <br/><br/>

                <TextField label="Enter Password Again" type = "password" name = "pass_2" value = {this.state.pass_2} onChange = {this.setAll}></TextField>

                {/* 
                *@des this is when setting value of each text field individually
                */}

                {/* <TextField label="Email_id" name = "email_id" value = {this.state.email_id} onChange = {this.email_id_setting_variable}></TextField>
                <br/><br/>

                <TextField label="Enter Password" name = "password1" value = {this.state.pass_1} onChange = {this.pass1_setting_variable}></TextField>
                <br/><br/>

                <TextField label="Enter Password Again" name = "password2" value = {this.state.pass_2} onChange = {this.pass_2_setting_variable}></TextField> */}
             
                <br/><br/>
                <a href = "/login" id = "link-display">Already a member</a>
                <Button onClick = {this.check_both_email_password}>Register</Button>
            </div>                
        );
    }
}
/**
 * @exports Register Class as Component in react tech
 */
export default Register_component;
