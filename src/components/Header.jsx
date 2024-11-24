import React from "react";


const Header = ({changeCategory, currentCategory}) => {
    return (
        <>
        <div className="container mt-4">
            <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid">
                <h1 className="display-1  font-weight-bolder"><a class="text-light text-decoration-none" href="#">
                    <b>{ `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}  Feeds`}</b>  
                  
                </a></h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link" onClick={() => changeCategory('home')}  href="#">For you</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link active" onClick={() => changeCategory('arts')} href="#">Arts</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick={() => changeCategory('us')} href="#">United states</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" onClick={() => changeCategory('world')} href="#">World</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
        </>
    )
}

export default Header