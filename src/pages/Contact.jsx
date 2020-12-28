import React from 'react'
import logo from "../resources/images/logo2em.svg";

export default function Contact() {
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
                <h4 class="jumbotron-heading">Contact</h4>
            </div>
        </section>
        <div class="container marketing">
            <div class="row text-center">
                <div class="col-lg-4">
                    <i class="fas fa-user-nurse fa-10x pb-3"></i>
                    <h2>Nurse</h2>
                    <p>Call the nurse</p>
                    <p><a class="btn btn-danger" href="tel:123132123" role="button">Call <i
                                class="fas fa-phone"></i></a></p>
                </div>
                <div class="col-lg-4">
                    <i class="fas fa-user-tie fa-10x pb-3"></i>
                    <h2>Blood Transfer Director</h2>
                    <p>Call the Director</p>
                    <p><a class="btn btn-danger" href="tel:123132123" role="button">Call <i
                                class="fas fa-phone"></i></a></p>
                </div>
                <div class="col-lg-4">
                    <i class="fas fa-headset fa-10x pb-3"></i>
                    <h2>Client service</h2>
                    <p>Call client service</p>
                    <p><a class="btn btn-danger" href="tel:123132123" role="button">Call <i
                                class="fas fa-phone"></i></a></p>
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
        </div>
    )
}
