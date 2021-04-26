function NewSlip() {

    return (
        <div class="newSlipContainer">
            <form class="newSlipForm">
                    <div class="newSlipQuestion">
                        <label for="slipNumber">Slip Number</label>
                        <input type="number" placeholder="Slip Number" name="slipNumber"></input>
                    </div>
                    <div class="newSlipQuestion">
                        <label for="ownerName">Rented By:</label>
                        <input type="text" placeholder="Renter's Name" name="ownerName"></input>
                    </div>
                    <div class="newSlipQuestion">
                        <label for="newSlipLength">Slip Length</label>
                        <input type="number" placeholder="Slip Length" name="newSlipLength"></input>
                    </div>
                    <div class="newSlipQuestion"> 
                        <label for="newSlipPPY">Price Per Year</label>
                        <input type="number" placeholder="Price Per Year" name="newSlipPPY"></input>
                    </div>
                    <div class="newSlipQuestion"> 
                        <label for="newSlipLift">Lift</label>
                        <select placeholder="Slip Length" name="newSlipLift">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div class="newSlipQuestion"> 
                        <label for="newSlipAvailable">Available?</label>
                        <select placeholder="Available?" name="newSlipAvailable">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
            </form>

                {/* <div>
                    <label for="firstName">First Name</label>
                    <input type="text" placeholder="First Name" name="firstName"></input>
                    <label for="lastName">Last Name</label>
                    <input type="text" placeholder="Last Name" name="lastName"></input>
                    <label for="address">Address</label>
                    <input type="text" placeholder="Address" name="address"></input>
                    <label for="boatName">Boat Name</label>
                    <input type="text" placeholder="Boat Name" name="boatName"></input>
                </div> */}

        </div>
    )
}

export default NewSlip