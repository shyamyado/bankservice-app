import React from 'react';
import axios from 'axios';
import eventBus from '../../event/eventBus';

const Header = () => {

    const handleLinkClick = async (category) => {
        eventBus.emit('menu', category)
        // try {
        //   const response = await axios.get(`http://localhost:8080/api/v1/Catalog/category/${category}`);
        //   console.log(response.data); 
        // } catch (error) {
        //   console.error('Error fetching data:', error);
        // }
      };

    return (
        <>
            <nav class="navbar navbar-expand-md navbar-light bg-white">
                <div class="container-fluid p-0"> <a class="navbar-brand text-uppercase fw-800" href="#"><span class="border-red pe-2">StoneX Bank</span></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNav" aria-controls="myNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="fas fa-bars"></span> </button>
                    <div class="collapse navbar-collapse" id="myNav">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" aria-current="page" href="#" onClick={() => handleLinkClick('All')}>All</a>
                            <a class="nav-link" href="#" onClick={() => handleLinkClick('Debit')}>Debit</a>
                            <a class="nav-link" href="#" onClick={() => handleLinkClick('Credit')}>Credit</a>
                            <a class="nav-link" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
