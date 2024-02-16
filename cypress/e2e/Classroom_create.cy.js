import classroompageobject from "../PageObjects/Classroom";
const faker = require('faker');
describe('Create classroom', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })

    const randomName = faker.name.findName();

    Cypress._.times(1, () => {

          it('Create classroom', () => {
            cy.visit('https://muktopaath.gov.bd/login')

            cy.fixture('class_data').then((data)=> {

              const lb = new classroompageobject

              lb.setemail(data.UserName)
              lb.setpass(data.Password)
              lb.clickLogin()
              cy.wait(5000)
              lb.ClickClassroom()
              lb.clicknewclass()
              lb.setclassname(randomName)
              lb.clickbtndate()
              lb.clickbtnow()
              lb.clickconvey()
              lb.clickclassroomsubmitbutton()
              lb.setnumber(data.stnumber1)
              cy.wait(5000)
              lb.clickstudentid()
              lb.invitestudent()



            })
            
            
          })
        
      })

})