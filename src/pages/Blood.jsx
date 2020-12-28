import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import logo from "../resources/images/logo2em.svg";

export default function Blood() {
    const [donationsData, setDonationsData]= useState([])
    var [abrhM, setAbrhM]= useState(0);
    var [arhM, setArhM]=useState(0);
    var [brhM, setBrhM]=useState(0);
    var [abrhP, setAbrhP]=useState(0);
    var arhm;
    var brhm;
    var abrhm;
    var abrhp;
    
    useEffect(()=>{
        const unsubscribe = db.collection('donations').onSnapshot((snapshot)=>
        {
            if(!snapshot){
                return;
            }
            setDonationsData(snapshot.docs.map(doc =>                              
           ({
               id: doc.id,        //the unique 'auto' ids
               data: doc.data(),  //the data inside the doc(coll>doc>data)
           })
           ))
        } ) ;
     //    console.log(posters[0].data.name);
    //  getPercentagesForBlood();
    db.collection("counts").doc("ARh-").get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().ARhM)
          setArhM(doc.data().ARhM)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    db.collection("counts").doc("BRh-").get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().BRhM)
          setBrhM(doc.data().BRhM)
        } else {
             
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
       
    
    db.collection("counts").doc("ABRh-").get().then(function(doc) {
        if (doc.exists) {
          setAbrhM(doc.data().ABRhM)
        } else {
             
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
       
    
    db.collection("counts").doc("ABRh+").get().then(function(doc) {
        if (doc.exists) {
          setAbrhP(doc.data().ABRhP)
          console.log(abrhp)
          
        } else {
             
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

      
    
        return () => {      //when comp cleansup/unmount(cleansup is better), (always) detach this real time listener after it's done using it(best def)
            unsubscribe();  //this is for optimization
        }
    },[])
    

   
    


    
         

    
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
                <h4 class="jumbotron-heading">Availability</h4>
            </div>
        </section>
        <div class="container py-1 ">
            <div class="table-responsive" data-show-pagination-switch="true">
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>

                            <th>Blood type</th>
                            <th>Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ABRh-</td>
                            <td class="td-progress">
                                <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: `${abrhM}%`}} role="progressbar" aria-valuemin="0" aria-valuemax="100">{abrhM}%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg">ABRh+</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: `${abrhP}%`}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">{abrhP}%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td>ARh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: `${arhM}%`}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">{arhM}%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td class="bg">BRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: `${brhM}%`}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">{brhM}%</div>
                                </div>
                            </td>
                        </tr>
                        
                       
                    </tbody>
                </table>
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

  
        </div>
    )
}
