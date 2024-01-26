import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog, getOfferByCategory } from "../../redux/actions/catalogActions";
import eventBus from '../../event/eventBus';

const Catalog = () => {

  const [receivedData, setReceivedData] = useState(null);
  const allCatalogData = useSelector(state => state.catalogState.catalog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatalog(1, 10));
    const eventHandler = (data) => {
      dispatch(getOfferByCategory(data));
      setReceivedData(data);
    };


    eventBus.on('menu', eventHandler);
    return () => {
      eventBus.off('menu', eventHandler);
    };

  }, [dispatch]);


 

  console.log(allCatalogData);
  return (
    <>
      <div className="product-container">
        <div className="row">
          {allCatalogData &&
            allCatalogData.map((item) => (
              <div className="col-lg-3 col-sm-6" key={item.id}>
                <div className="product-item">
                  <Link to={`/${item.id}`} className='link-class'>
                    <div className="product">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="product-image"
                      />
                      <ul className="icons">
                        <li className="icon">
                          <span className="fas fa-expand-arrows-alt"></span>
                        </li>
                        <li className="icon mx-3">
                          <span className="far fa-heart"></span>
                        </li>
                        <li className="icon">
                          <span className="fas fa-shopping-bag"></span>
                        </li>
                      </ul>
                    </div>
                    <h3>{item.name}</h3>
                    <div className="title">
                      <ul >
                        <li>{item.description}</li>
                        <li>{item.shortDescription}</li>
                        <li>Joining Fees: ${item.joiningFees}</li>
                        <li>Annual Fees: ${item.annualFees}</li>
                      </ul>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>


    </>
  );
};

export default Catalog;
