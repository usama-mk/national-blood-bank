import React, { useState } from 'react'
import { db } from '../firebase';
import logo from '../resources/images/logo2em.svg';

export default function Author() {
    const[heading, setHeading]= useState("")
    const[body, setBody]=useState("");
    const[edit, setEdit]= useState(false);

    const toggleEdit=()=>{
        setEdit(prevValue=> !prevValue);
    }

   const  _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log('do validate');
          setEdit(prevValue=> !prevValue);
          db.collection("authorInfo").doc("AgdH9NKp3yC3V20KmhMw").set({
            heading:  heading,
            body: body,
             
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
         
    
        }
      }
     const handleChange= (e)=>{
        const {value, name} = e.target;
        console.log(name);
        if(name=="heading"){
            setHeading(value)
        }
       else if(name=="body"){
           setBody(value)
       }
      }

    return (
        <div>
            
    <header>
        <div class="navbar shadow-sm">
            <div class="container d-flex justify-content-start">
                <span class="navbar-brand d-flex">
                    <img alt="logo" src={logo}/>
                    <strong><a class="brand" href="/home">National Blood Donation System</a></strong>
                </span>
            </div>
        </div>
    </header>

    <main class="bg-light">

        <section class="jumbotron text-center py-2">
            <div class="container">
            <i class="fas fa-edit" onClick={toggleEdit}></i>  {
                edit? 
               < input style={{background: "transparent", }} onKeyDown={_handleKeyDown} name="heading" type="text" onChange={handleChange} value={heading}/>
                :<h4 class="jumbotron-heading">{heading}</h4>
            }
            <i class="fas fa-edit" onClick={toggleEdit}></i>  {
                edit? 
               < input style={{background: "transparent", }} onKeyDown={_handleKeyDown} name="body" type="text" onChange={handleChange} value={body}/>
                :<h4 class="jumbotron-heading">{body}</h4>
            }
            <h6 class="jumbotron-body">No more info here</h6>
            </div>
        </section>

    </main>

    <footer class="container py-5">
        <div class="row">
            <div class="col-12 col-md">
                <img alt="logo" src={logo}/>
            </div>
            <div class="col-6 col-md">
                <h5>Hospitals</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="http://brodnowski.pl/">Brudnowski</a></li>
                    <li><a class="text-muted" href="https://www.szpitalpraski.pl/">Praski</a></li>
                    <li><a class="text-muted" href="https://www.pib-nio.pl/">Narodowy Instytut Onkologiczny</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Other links</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="/contact">Contact</a></li>
                    <li><a class="text-muted" href="/author">Author</a></li>
                </ul>
            </div>
        </div>
    </footer>

 
        </div>
    )
}
