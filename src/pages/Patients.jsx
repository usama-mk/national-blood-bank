import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import logo from '../resources/images/logo2em.svg';

export default function Patients() {

  const [patients, setPatients]= useState([])
  var edit=false;
  var eid="";

  useEffect(()=>{
    db.collection("patients").onSnapshot((snapshot)=>{
      if(!snapshot){
         return
      }
     setPatients(snapshot.docs.map((doc)=>(
       {
         id: doc.id,
         data: doc.data()
       }
     )))
    })
  },[])

  const submitPatient=()=>{
    const patientDetails= Array.from(document.querySelectorAll("#form select,input,select")).reduce((acc,input,select)=>({...acc, [input.id]: input.value, [select.id]:select.value}),{})
    delete patientDetails.undefined 
    console.log(patientDetails);
    if(!edit){
      var docRef = db.collection("patients").doc();
      patientDetails.id=docRef.id;
    }
    else{
      var docRef = db.collection("patients").doc(eid);
      patientDetails.id=eid;
    }
    docRef.set(patientDetails)
    .then(function(docRef) {
        // console.log("Document written with ID: ", docRef.id);
        document.getElementById("myForm").reset();
    
        console.log("patient added successfull");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

   const rowPatientData=(id, number, firstName, lastName, bloodType)=>{
     return <tr>
              <td>{number}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{bloodType}</td>
              <td class="text-center">
                <button onClick={()=>{deletePatient(id)}} class="btn btn-sm btn-danger"><i class="fas fa-user-minus"></i></button>
                <button onClick={()=>{editPatient(id)}}  data-toggle="modal"
          data-target="#editPatient" class="btn btn-sm btn-primary"><i class="fas fa-user-edit"></i></button>
              </td>
            </tr>
    
   }

   const deletePatient=(id)=>{
    db.collection("patients").doc(id).delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
   }

   const editPatient=(id)=>{
     edit= true;
     eid=id;
     
    //  db.collection("patients").doc({id}).update({
       
    //  })
   } 

    return (
        <div>       
  <header>
    <div class="navbar shadow-sm">
      <div class="container d-flex justify-content-start">
        <span class="navbar-brand d-flex">
          <img alt="logo" src={logo}/>
          <strong><a class="brand" href="/">National Blood Donation System</a></strong>
        </span>
      </div>
    </div>
  </header>
  <main class="bg-light">
    <section class="jumbotron text-center py-2">
      <div class="container">
        <h4 class="jumbotron-heading">Patients</h4>
      </div>
    </section>
    <div class="container py-1 ">
      <div class="table-responsive" data-show-pagination-switch="true">
        <table class="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last name</th>
              <th>Blood type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
             {/* {rowPatientData("1.1.1", "1", "MK", "Kay","B+")} */}
             {patients.map((patient)=>{
                
               return rowPatientData(patient.data.id,"1", patient.data.firstName, patient.data.lastName, patient.data.bloodtype )
             })}
              
          
   
            
          </tbody>
        </table>
      </div>
      <div class="row">
        <button type="button" class="btn btn-danger btn-block" data-toggle="modal"
          data-target="#editPatient">
          Add patient
        </button>
      </div>
      {/* modal */}
      <div class="modal fade" id="editPatient" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Patient</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form class="needs-validation" id="myForm" novalidate="">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label>Name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" required=""/>
                    <div class="invalid-feedback">
                      Imię jest wymagane
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder=""   required=""/>
                    <div class="invalid-feedback">
                      Nazwisko jest wymagane
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email">E-mail</label>
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">@</span>
                    </div>
                    <input type="text" class="form-control" id="email" placeholder="adres@email.com" required=""/>
                    <div class="invalid-feedback" style={{width: "100%"}}>
                      Adres e-mail jest wymagany
                    </div>
                  </div>
                </div>
                <hr class="mb-4"/>
                <h5 class="mb-3">Address</h5>
                <div class="mb-3">
                  <label for="street">Street</label>
                  <input type="text" class="form-control" id="street" required=""/>
                  <div class="invalid-feedback">
                    Wpisz prawidłowy adres
                  </div>
                </div>
                <div class="form-row">
                  <div class="col-md-6 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" id="state" required="">
                      <option value="">Wybierz województwo</option>
                      <option>Mazowieckie</option>
                      <option>Kujawsko-pomorskie</option>
                      <option>Górnośląskie</option>
                      <option>Małopolska</option>
                    </select>
                    <div class="invalid-feedback">
                      Wybierz województwo
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="postalcode">Post code</label>
                    <input type="text" class="form-control" id="postalcode" placeholder="" required=""/>
                    <div class="invalid-feedback">
                      Kod pocztowy jest wymagany
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="city">City</label>
                  <input type="text" class="form-control" id="city" placeholder="" required=""/>
                  <div class="invalid-feedback">
                    Wybierz miasto
                  </div>
                </div>
                <hr class="mb-4"/>
                <h5 class="mb-3">Grupa krwi</h5>
                <div class="row">
                  <div class="col-md-4 mb-3">
                    <label for="bloodtype">Grupa krwi</label>
                    <select class="custom-select d-block w-100" id="bloodtype" required="">
                      <option value="">Wybierz grupę krwi</option>
                      <option>ABRh-</option>
                      <option>ARh-</option>
                      <option>BRh-</option>
                      <option>ABRh+</option>
                    </select>
                    <div class="invalid-feedback">
                      Wybierz grupę krwi
                    </div>
                  </div>
                  <div class="col-md-5 mb-3">
                    <label for="amount">Ilość</label>
                    <select class="custom-select d-block w-100" id="amount" required="">
                      <option value="">Wybierz ilość</option>
                      <option>300 ml</option>
                      <option>600 ml</option>
                      <option>1200 ml</option>
                      <option>1500 ml</option>
                      <option>1800 ml</option>
                    </select>
                    <div class="invalid-feedback">
                      Wybierz ilość
                    </div>
                  </div>
                </div>

              </form>
            </div>
            <div class="modal-footer">
              <div class="row">
                <div class="col-6" data-dismiss="modal" > <a  class="btn btn-warning btn-block">
                    <i class="fas fa-times"></i></a></div>
                <div class="col-6" onClick={submitPatient} data-dismiss="modal"  > <a id="submitPatient"  class="btn btn-success">
                    <i class="fas fa-check"></i></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
          document.getElementById("submitPatient").addEventListener('click', function (event) {

            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            if (form.checkValidity() === true) {
              $('#editPatient').modal('show');
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
