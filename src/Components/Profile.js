import React from 'react'
// import '../Profile.css';
import Photo from './photo.jpeg';



export default function Profile() {
    return (
        <div>
            <div className="container bg-primary">
                <div className="row my-3">
                    <div className="col-md-6 col-xs-12 col-sm-12  bg-danger">
                        <div className="card m-2" >
                        <div className="row ">
                            <div className="col-md-4 col-sm-3 col-xs-3">
                            <img src={Photo} className="img-fluid   rounded" alt="profile Image"/>
                            </div>
                            <div className="col-md-8 col-sm-9 col-xs-9">
                            <div className="card-body m-3 ">
                                <h5 className="card-title">Abhishek Singh</h5>
                                <p className="card-text">I am Graduate Fresher</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12 col-sm-12">
                    One of two columns
                    </div>
                </div>
            </div>
        </div>
    )
}
