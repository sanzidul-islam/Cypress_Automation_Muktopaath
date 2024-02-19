import classroompageobject from "../PageObjects/Classroom";
import coursepageobject from "../PageObjects/Course";
const faker = require('faker');
describe('create course',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
        })

        const randomName = faker.name.findName();

        Cypress._.times(1, () => {

            it('Create classroom', () => {
                cy.visit('https://muktopaath.gov.bd/login')
    
                cy.fixture('course_data').then((data)=> {

                    const lb = new classroompageobject
                    const lc = new coursepageobject
                    
                    lb.setemail(data.UserName)
                    lb.setpass(data.Password)
                    lb.clickLogin()
                    cy.wait(5000)
                    lc.coursebutton()
                    cy.wait(2000)
                    lc.newcoursebutton()
                    lc.coursetitle(randomName)
                    lc.nextbutton1()
                    cy.xpath("//button[contains(text(),'পূর্ববর্তী')]").click()
                    cy.get("input[placeholder='এখানে লিখুন']").should('be.visible').invoke('text').as('textboxValue');
                    lc.nextbutton1()
                    lc.dropdownselect()
                    lc.nextbutton2()
                    lc.courseinformation1(data.courseinfo1)
                    lc.courseinformation2(data.courseinfo2)
                    lc.nextbutton3()
                    cy.wait(3000)
                    //lesson 01
                    lc.newlessonbutton()
                    lc.videolessonbutton()
                    lc.videolessontitle(data.videotit)
                    lc.videolessonurl(data.videourl)
                    lc.savebuttonvideo()
                    //lesson 02
                    cy.wait(3000)
                    lc.newlessonbutton()
                    lc.videolessonbutton()
                    lc.videolessontitle(data.videotit)
                    lc.videolessonurl(data.videourl)
                    lc.savebuttonvideo()
                    cy.wait(3000)

                    cy.xpath("//span[contains(text(),'ড্যাশবোর্ড')]").click()
                    cy.wait(3000)
                    cy.get("div.course_list_item:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h4:nth-child(1)").invoke('text').then((text) => {
                        // 'text' now contains the stored value from the text box
                        // Perform your assertions
                        expect(text).to.equal('textboxValue');
                    })


                    

              
              
              


                })
            })
    
        })

})