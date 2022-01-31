import { Business } from "./Business.js";
import { getBusinesses, NyStates, getManufacturedBusinesses, getPurchasingAgent} from "./database.js";
const purchasingAgents = getPurchasingAgent();

const mainContainer = document.querySelector("#container")
const newYorkContainer = document.querySelector(".businessList--newYork")
const manufacturingContainer = document.querySelector(".businessList--manufacturing")
const purchasingAgentContainer = document.querySelector(".agent")

export const BusinessList = () => {
    let businessArray = getBusinesses()
    mainContainer.innerHTML = "<h1>Active Businesses </h1>"

    businessArray.forEach(
        (businessObject) => {
            mainContainer.innerHTML += Business(businessObject)
        }
    );

    newYorkContainer.innerHTML += "<h2> New York Businessses</h2>"
    let NYBusinesses = NyStates
    NYBusinesses.forEach(
        (businessObject) => {
            newYorkContainer.innerHTML += Business(businessObject)
        }
    );

    manufacturingContainer.innerHTML += "<h2> Manufacturing </h2>"
    let manufacturedBusinesses = getManufacturedBusinesses
    manufacturedBusinesses.forEach(
        (businessObject) => {
            manufacturingContainer.innerHTML += Business(businessObject)
        }
    );

}

const purchasingAgentObj = (agentObj) => {
    return `<section class="purchaseAgent">
            <h3 class=""agent__name>${agentObj.fullName}</h3>
            <div class="agent__info">
            <dl> 
               <dt> ${agentObj.company} </dt>
                <dt> ${agentObj.phoneWork} </dt>
              </dl>
            </div>
        </section>`
}

export const Agents = () => {
    purchasingAgentContainer.innerHTML += "<h2> Purchasing Agents </h2>"
    purchasingAgents.forEach(
        (purchasingAgent) => {
            purchasingAgentContainer.innerHTML += purchasingAgentObj(purchasingAgent)
        }
    );
}
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */
                        let businessArray = getBusinesses()

                        const searchedBusiness = (businessObj) => {
                            return `<section class="searchedBusiness">
                                    <h3 class=""business__name>${businessObj.companyName}</h3>
                                    <div class="business__info">
                                    <dl> 
                                        <dt> ${businessObj.phoneWork} </dt>
                                      </dl>
                                    </div>
                                </section>`
                        }
                   const userSearch= document.getElementById("companySearch").value

                    const foundBusiness =  businessArray.find(business=> business.companyName.includes(userSearch))/** implement .find() method here */
                
                    companySearchResultArticle.innerHTML += searchedBusiness(foundBusiness)
                }
        });


        const agentSearchResultArticle = document.querySelector(".foundAgents")
     
document
    .querySelector("#agentSearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.

                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example: business.agentName.includes(keyPressEvent.target.value)
                    */
                        const searchedAgent = (agentObj) => {
                            return `<section class="purchaseAgent">
                            <h3 class=""agent__name>${agentObj.fullName}</h3>
                            <div class="agent__info">
                            <dl> 
                               <dt> ${agentObj.company} </dt>
                                <dt> ${agentObj.phoneWork} </dt>
                              </dl>
                            </div>
                        </section>`
                        }
                   const userSearch= document.getElementById("agentSearch").value

                    const foundAgent =  purchasingAgents.find(purchasingAgents=> purchasingAgents.fullName.includes(userSearch))/** implement .find() method here */
                
                    agentSearchResultArticle.innerHTML += searchedAgent(foundAgent)
                }
        });


