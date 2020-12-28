import React from 'react'
import { db } from '../firebase';
import logo from "../resources/images/logo2em.svg";

export default function Donation() {
    const donate=()=>{
       const donationDetails= Array.from(document.querySelectorAll("#form input,select")).reduce((acc,input,select)=>({...acc, [input.id]: input.value, [select.id]:select.value}),{})
       delete donationDetails.undefined 
       console.log(donationDetails);

        // add to firestore
       
        if(donationDetails.bloodtype=='ABRh+'){
            console.log("ABRh+ blood type")
            // bloodData.data.amount
            var docRefa = db.collection("counts").doc("ABRh+");
           
            docRefa.get().then(function(doc) {
                if (doc.exists) {
                       docRefa.set({
                        ABRhP: doc.data().ABRhP + 1
                    })
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        }
        else if(donationDetails.bloodtype=='ABRh-'){
            
            
            var docRefb = db.collection("counts").doc("ABRh-");
            docRefb.get().then(function(doc) {
                if (doc.exists) {
                    if(doc.data().ABRhM){
                       docRefb.set({
                        ABRhM: doc.data().ABRhM + 1
                    })
                    }
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        }

        else if(donationDetails.bloodtype=='BRh-'){
           
            var docRefc = db.collection("counts").doc("BRh-");
           
            docRefc.get().then(function(doc) {
                if (doc.exists) {
                    console.log("ji")
                    
                       docRefc.set({
                        BRhM: doc.data().BRhM + 1
                    })
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        }

        else if(donationDetails.bloodtype=='ARh-'){
            console.log("ARh- blood type")
            // bloodData.data.amount
            
          
            var docRefd = db.collection("counts").doc("ARh-");
           
            docRefd.get().then(function(doc) {
                if (doc.exists) {
                
                       docRefd.set({
                        ARhM: doc.data().ARhM + 1
                    })
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
            
        }
        var docRef = db.collection("donations").doc();
        donationDetails.id=docRef.id;
        docRef.set(donationDetails)
        .then(function(docRef) {
            // console.log("Document written with ID: ", docRef.id);
            document.getElementById("form").reset();
            console.log("donation successfull");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
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
                <h4 class="jumbotron-heading">Blood Donation</h4>
            </div>
        </section>
        <div class="container p-2">
            <div class>

                <h4 class="mb-3">Blood Donation</h4>
                <form id="form" class="needs-validation" novalidate>
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">Name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" onChange={(e)=> e.target.value} required />
                            <div class="invalid-feedback">
                                Name is required
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">Lastname</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" onChange={(e)=> e.target.value} required />
                            <div class="invalid-feedback">
                                Lastname is required
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label for="email">E-mail</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control" id="email" placeholder="adres@email.com" required />
                            <div class="invalid-feedback" style={{width: "100%"}}>
                                E-mail is required
                            </div>
                        </div>
                    </div>

                    <hr class="mb-4"/>
                    <h5 class="mb-3">Address</h5>
                    <div class="mb-3">
                        <label for="street">Street</label>
                        <input type="text" class="form-control" id="street" required />
                        <div class="invalid-feedback">
                            Please enter a valid address
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="state">State</label>
                            <select class="custom-select d-block w-100"name="state" id="state" required>
                                <option  >Choose a state</option>
                                <option value="Mazowieckie">Mazowieckie</option>
                                <option value="Kujawsko-pomorskie" >Kujawsko-pomorskie</option>
                                <option value="Górnośląskie">Górnośląskie</option>
                                <option value="Małopolska">Małopolska</option>
                            </select>
                            <div class="invalid-feedback">
                                Choose a state
                            </div>
                        </div>
                        <div class="col-md-5 mb-3">
                            <label for="city">City</label>
                            <select class="custom-select d-block w-100" id="city" required>
                                <option value={(e)=>e.target.value} >Choose a city</option>
                                <option>Warszawa</option>
                                <option>Poznań</option>
                                <option>Toruń</option>
                                <option>Wrocław</option>
                                <option>Karków</option>
                            </select>
                            <div class="invalid-feedback">
                                Choose a city
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="postalcode">Post code</label>
                            <input type="text" class="form-control" id="postalcode" placeholder="" required />
                            <div class="invalid-feedback">
                                Post code is required
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4" />
                    <h5 class="mb-3">Blood type</h5>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <label for="bloodtype">Blood type</label>
                            <select class="custom-select d-block w-100" id="bloodtype" required>
                                <option >Choose blood type</option>
                                <option>ABRh-</option>
                                <option>ARh-</option>
                                <option>BRh-</option>
                                <option>ABRh+</option>
                            </select>
                            <div class="invalid-feedback">
                                Choose a blood type
                            </div>
                        </div>
                        <div class="col-md-5 mb-3">
                            <label for="amount">Amount</label>
                            <select class="custom-select d-block w-100" id="amount" required>
                                <option >Choose amount</option>
                                <option>300 ml</option>
                                <option>600 ml</option>
                                <option>1200 ml</option>
                                <option>1500 ml</option>
                                <option>1800 ml</option>
                            </select>
                            <div class="invalid-feedback">
                                Choose amount
                            </div>
                        </div>
                    </div>
                    <hr class="mb-4" />
                    <div class="row">
                        <button onClick={donate} class="btn btn-danger btn-block" type="button" id="donationButton">
                            Donate!
                        </button>
                        <div class="modal fade" id="oddajKrew" tabindex="-1" role="dialog"
                            aria-labelledby="oddajKrewLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="oddajKrewLabel">Good job</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        Your blood has been automatically donated online
                                    </div>
                                    <div class="modal-footer">
                                        <a href="/home" class="btn btn-danger btn-block">Finish</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <footer class="container py-5">
        <div class="row">
            <div class="col-12 col-md">
                <img alt="logo" src={logo}/>
            </div>
            <div class="col-6 col-md">
                <h5>Szpitale</h5>
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
    {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>
    <script>
        (function () {
            'use strict';
            window.addEventListener('load', function () {
                var forms = document.getElementsByClassName('needs-validation');
                var validation = Array.prototype.filter.call(forms, function (form) {
                    document.getElementById("donationButton").addEventListener('click', function (event) {
                        
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        if(form.checkValidity() === true){
                            $('#oddajKrew').modal('show');
                        }
                        form.classList.add('was-validated');
                    }, false);
                });
            }, false);
        })();
    </script> */}
        </div>
    )
}
