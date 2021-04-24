import SlipInfo from "./SlipInfo.js"

function SlipsPage() {
    return (
        <div className="slipsContainer">
            <h1>Slips Information</h1>
            <div className="tableContainer">
                <div id="table">
                    <div class="tr">
                        <div class="td tdHeader">Slip Number</div>
                        <div class="td tdHeader">Owner</div>
                        <div class="td tdHeader" >Length</div>
                        <div class="td tdHeader">Price per year</div>
                        <div class="td tdHeader" >Lift</div>
                        <div class="td tdHeader">Avaiable</div>
                    </div>
                    <SlipInfo 
                        slip="1"
                        name="Josh Hall"
                        id= "46832"
                        length="24"
                        cost = "2000"
                        lift = "yes"
                        available = "yes"
                    />
                    <SlipInfo 
                        slip="2"
                        name="Zach Hall"
                        length="12"
                        cost = "2000"
                        lift = "No"
                        available = "yes"
                    /> 
                     <SlipInfo 
                        slip="3"
                        name="Nick Hall"
                        length="20"
                        cost = "2000"
                        lift = "yes"
                        available = "No"
                    /> 
                     <SlipInfo 
                        slip="4"
                        name="Tim"
                        length="24"
                        cost = "2000"
                        lift = "No"
                        available = "No"
                    /> 
                    <SlipInfo 
                        slip="5"
                        name="Mitch"
                        length="12"
                        cost = "1000"
                        lift = "yes"
                        available = "yes"
                    /> 
                </div>
            </div>
        </div>
    )}
  export default SlipsPage;