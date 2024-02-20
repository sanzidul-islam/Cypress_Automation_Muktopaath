import classroompageobject from "../PageObjects/Classroom";
import tutorialpageobject from "../PageObjects/Tutorial";
describe('create course',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

        
        Cypress._.times(1, () => {

            it('Create classroom', () => {
                cy.visit('https://muktopaath.gov.bd/login')
    
                cy.fixture('tutorial_data').then((data)=> {

                    const lb = new classroompageobject
                    const lc = new tutorialpageobject
                    
                    lb.setemail(data.UserName)
                    lb.setpass(data.Password)
                    lb.clickLogin()
                    cy.wait(5000)

                    lc.tutorialbutton()
                    cy.wait(2000)
                    lc.newtutorialbutton()
                    lc.tutorialtitle(data.tutorialtit1)
                    lc.categoriselection()
                    lc.desctiption(data.tdescription1)
                    lc.selecttime()
                    lc.tutorialthumbnail()
                    lc.tutorialvideo()
                    lc.submitbutton()
                })
            })
    
        })

})