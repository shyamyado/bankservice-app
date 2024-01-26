import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogDetail, applyService } from "../../redux/actions/catalogActions";
import { useParams } from 'react-router-dom';


const CatalogDetail = () => {
    const { id } = useParams();
    const catalogDetail = useSelector(state => state.catalogState.catalogDetail);
    const dispatch = useDispatch();
    const [isApplyClicked, setIsApplyClicked] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    useEffect(() => {
        dispatch(getCatalogDetail(id));
    }, [dispatch]);

    console.log(catalogDetail);

    const handleApplyClick = () => {
        setIsApplyClicked(true);
        alert("apply");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleApplySubmit = () => {
        const applyData = {
            "itemId": id,
            "name": formData.name,
            "email": formData.email,
            "phone": formData.phone
        }
        dispatch(applyService(applyData));
    };

    return (
        <>
            {(
                <div className="row py-5">
                    <div className="col-md-4">
                        <img src={catalogDetail.image}
                            class="tab-image" />
                    </div>
                    <div className="col-md-8">
                        <h3 className="page-title">{catalogDetail.name}</h3>
                        <div className="post-description padding-medium">
                            <p>
                                <strong>
                                    {catalogDetail.description}
                                </strong>
                            </p>
                            <h6> Catalog details:</h6>
                            <p>
                                <span className="me-2"><strong>{catalogDetail.shortDescription}</strong>,</span>

                            </p>
                            <h6>Benefits:</h6>
                            <ul className="inner-list">
                                <li>{catalogDetail.name} </li>
                                <li>{catalogDetail.description} </li>
                                <li>{catalogDetail.shortDescription} </li>
                                <li>Joining Fees : {catalogDetail.joiningFees} </li>
                                <li>Annual Fees : {catalogDetail.annualFees} </li>
                            </ul>

                            {!isApplyClicked && (
                                <button type="button" className="btn btn-primary" onClick={handleApplyClick}>
                                    Apply
                                </button>
                            )}

                            {isApplyClicked && (
                                <div className="container mt-4">
                                    <div className="row">
                                        <div className="col-md-6 offset-md-3">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">Email:</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">Phone:</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Enter Phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </div>
                                                <button type="button" className="btn btn-primary" onClick={handleApplySubmit}>
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}


                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

export default CatalogDetail;
