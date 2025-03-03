
import './App.css';

function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col col-sm-3 col-lg-3 col-md-3">
                    <div className="onee">
                       <div className="one d-flex justify-content-between align-items-center">
                       <h3>Revenue</h3>
                       <h5 style={{color:"red"}}>10%</h5>

                       </div>
                        
                    </div>
                    <div className="col col-sm-3 col-lg-3 col-md-3">
                        <div className="d-flex justify-content-between align-items-center">
                        <i class='bx bxs-home-alt-2'></i><h5 style={{ textAlign: "center" }}>$2.047</h5>
                        </div>
                    </div>


                </div>
                <div className="col col-sm-3 col-lg-3 col-md-3">
                    <div className="one d-flex justify-content-between align-items-center">
                        <h3>Orders</h3>
                        <h5 style={{color:"green"}}>20%</h5>
                    </div>
                    <div className="col col-sm-3 col-lg-3 col-md-3">
                        <div className="d-flex justify-content-between align-items-center">
                        <i class='bx bxs-home-alt-2'></i><h5 style={{ textAlign: "center" }}>$2.047</h5>
                        </div>
                    </div>


                </div>
                <div className="col col-sm-3 col-lg-3 col-md-3">
                    <div className="one d-flex justify-content-between align-items-center">
                        <h3>Dine in</h3>
                        <h5 style={{color:"green"}}>10%</h5>
                    </div>
                    <div className="col col-sm-3 col-lg-3 col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                        <i class='bx bxs-home-alt-2'></i><h5 style={{ textAlign: "center" }}>220</h5>
                        </div>
                    </div>


                </div>
                <div className="col col-sm-3 col-lg-3 col-md-3">
                    <div className="one d-flex justify-content-between align-items-center">
                        <h3>Take away</h3>
                        <h2 style={{color:"red"}}>5%</h2>
                    </div>
                    <div className="col col-sm-3 col-lg-3 col-md-3">
                        <div className="d-flex justify-content-center align-items-center">
                        <i class='bx bxs-home-alt-2'></i>
                        <h5 style={{ textAlign: "center" }}>135</h5>
                        </div>
                    </div>


                </div>

            </div>
        </div>


    );
}

export default App;
