import React from 'react'
import logo from "../resources/images/logo2em.svg";

export default function Blood() {
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
                                    <div class="progress-bar bg-danger" style={{width: "15%"}} role="progressbar" aria-valuemin="0" aria-valuemax="100">15%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="bg">ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "35%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">35%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "100%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">100%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td class="bg">ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "4%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">4%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "0%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">0%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>

                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "99%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">99%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "20%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">20%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "30%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">30%</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>ABRh-</td>
                            <td class="td-progress">
                               <div class="progress">
                                    <div class="progress-bar bg-danger" style={{width: "10%"}} role="progressbar"
                                        aria-valuemin="0" aria-valuemax="100">10%</div>
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
