import React from "react"
import { Link } from "react-router-dom"

export const Nav = ()=>{
    return(
        <React.Fragment>
            <div className="row bg-primary py-3 d-flex alighn-item-center">
                <div className="col-3">

                   <Link to="/" style={{textDecoration: 'none'}}> <h2 className="text-white text-center"> <i className='fas fa-book-open'></i>FlashCards</h2></Link>
                </div>
                <div className="col-6">
                    <form>
                        <input type="text" className="form-control " id="search" placeholder="type to search..."/>
                    </form>
                </div>
                <div className="col-3 text-center mt-1">
                    <Link to= "/browse" className="btn btn-warning">Browser Cards</Link>
                </div>
           </div>
        </React.Fragment>
    )
}