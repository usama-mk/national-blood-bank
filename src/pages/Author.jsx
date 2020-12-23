import React from 'react'
import logo from '../resources/images/logo2em.svg';

export default function Author() {
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
                <h4 class="jumbotron-heading">_____ __________</h4>
                <h5 class="jumbotron-body">_______</h5>
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
