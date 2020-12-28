import React, { useEffect, useState, useContext } from 'react'
import '../resources/styles/brand.css';
import myFaceImg from '../resources/images/myface.jpg';
import logo from '../resources/images/logo2em.svg';
import { firebaseApp } from '../firebase';
import Button from '@material-ui/core/Button';
import { LoginContext } from './Login/LoginContext';


export default function Home() {
    const [user, setUser] = useContext(LoginContext);
    
    const handleLogout= ()=>{
        firebaseApp.auth().signOut().then(()=>{
            window.location.assign("/");
        });
        
    }
   
    return (
        <body>
        <header>
            <div class="navbar shadow-sm">
                <div class="container d-flex justify-content-space-between">
                    <span class="navbar-brand d-flex">
                        <img alt="logo" src={logo}/>
                        <strong><a class="brand" href="/home">National Blood Donation System</a></strong>
                    </span>
                    <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}} >
                        <h5>Logged in as: {user.email} </h5>
                        {user && <Button size="small" onClick={handleLogout}>
                    <h6 style={{color:"white", background:"#dc3545", borderRadius:"50px", padding:"10px"}}>Log Out</h6>
                </Button>}
                    </div>
                </div>
            </div>
        </header>
    
        <main class="bg-light">
    
            <section class="jumbotron text-center py-2">
                <div class="container">
                    <h4 class="jumbotron-heading">Main page</h4>
                </div>
            </section>
    
            <div class="album py-5">
                <div class="container">
    
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
    
                                <div class="card-body">
                                    <h5 class="card-title">List of patients</h5>
    
                                    <p class="card-text">List of patients</p>
                                    <div class="d-flex">
                                        <div class="btn-group">
                                            <a href="./patients" class="btn btn-sm btn-danger">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
    
                                <div class="card-body">
                                    <h5 class="card-title">Donate blood</h5>
    
                                    <p class="card-text">
                                        Donate your blood!
                                    </p>
                                    <div class="d-flex">
                                        <div class="btn-group">
                                            <a href="/donation" class="btn btn-sm btn-danger">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
    
                                <div class="card-body">
                                    <h5 class="card-title">Availability</h5>
    
                                    <p class="card-text">Availability of blood </p>
                                    <div class="d-flex">
                                        <div class="btn-group">
                                            <a  href="/blood" class="btn btn-sm btn-danger">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
    
                                <div class="card-body">
                                    <h5 class="card-title">Contact</h5>
    
                                    <p class="card-text">Contact us!</p>
                                    <div class="d-flex">
                                        <div class="btn-group">
                                            <a href="/contact" class="btn btn-sm btn-danger">View</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-md-4">
                            <div class="card mb-4 shadow-sm">
                                <img class="card-img-top" alt="Photo of the author"
                                    style={{height: "320px", width: "100%", display: "block"}} src={myFaceImg}
                                    data-holder-rendered="true"/>
                                <div class="card-body">
                                    <h5 class="card-title">Author</h5>
    
                                    <p class="card-text">Author info</p>
                                    <div class="d-flex">
                                        <div class="btn-group">
                                            <a href="/author" class="btn btn-sm btn-danger">View</a>
                                        </div>
                                    </div>
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
    
    </body>
    )
}
