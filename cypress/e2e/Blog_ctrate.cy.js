import classroompageobject from "../PageObjects/Classroom";
import blogpageobject from "../PageObjects/Blog";
describe('create course',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

        
        Cypress._.times(1, () => {

            it('Create classroom', () => {
                cy.visit('https://muktopaath.gov.bd/login')
    
                cy.fixture('blog_data').then((data)=> {

                    const lb = new classroompageobject
                    const lc = new blogpageobject
                    
                    lb.setemail(data.UserName)
                    lb.setpass(data.Password)
                    lb.clickLogin()
                    cy.wait(5000)

                    lc.blogbutton()
                    cy.wait(2000)
                    lc.newblogbutton()
                    lc.blogtitle(data.blogtitle1)
                    lc.categoryselection()
                    lc.blogdescription(data.description1)
                    lc.selectimage()
                    lc.submitbutton()
                    
                    


                    

              
              
              


                })
            })
    
        })

})