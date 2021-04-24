import UserInfo from "./UserInfo.js"

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
                    <UserInfo 
                        slip="1"
                        name="Josh Hall"
                        length="24"
                        cost = "2000"
                        lift = "yes"
                        available = "yes"
                    />
                    <UserInfo 
                        slip="2"
                        name="Zach Hall"
                        length="12"
                        cost = "2000"
                        lift = "No"
                        available = "yes"
                    /> 
                     <UserInfo 
                        slip="3"
                        name="Nick Hall"
                        length="20"
                        cost = "2000"
                        lift = "yes"
                        available = "No"
                    /> 
                     <UserInfo 
                        slip="4"
                        name="Tim"
                        length="24"
                        cost = "2000"
                        lift = "No"
                        available = "No"
                    /> 
                    <UserInfo 
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