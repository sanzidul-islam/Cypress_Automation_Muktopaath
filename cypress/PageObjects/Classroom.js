class classroompageobject{

    //login username and pass
    txtemail ="#email"
    txtpass ="#password"
    btnlogin= "//button[@class='btn submitBtn bn']"

    // classroom
    btnclassroom ="a[title='Classroom'] span[role='button']"
    btnnewclass =".link"
    //
    txtclassname= "//input[@placeholder='ক্লাসরুমের নাম লিখুন']"
    btndate="label[for='start_time_date_picker-input']"
    btndatenow=".datepicker-button-content"
    btnconvey="(//i[@class='far fa-circle'])[3]"
    btnclassroomsubmit= "button[type='submit']"
    invstudent="input[placeholder='একটি নাম, মোবাইল বা ইমেল টাইপ করুন']"
    student="div[class='name']"
    stbuttoninv=".invite_btn"
    

    setemail(UserName){
        cy.get(this.txtemail).type(UserName)
    }

    setpass(Password){
        cy.get(this.txtpass).type(Password)
    }

    clickLogin()
    {
        cy.xpath(this.btnlogin).click({force: true})
    }

    ClickClassroom(){
        cy.get(this.btnclassroom).click({force: true})
    }

    clicknewclass(){
        cy.get(this.btnnewclass).click({force: true})
    }

    setclassname(classname){
        cy.xpath(this.txtclassname).type(classname)
    }

    clickbtndate(){
        cy.get(this.btndate).click({force: true})
    }
    clickbtnow(){
        cy.get(this.btndatenow).click({force: true})
    }
    clickconvey(){
        cy.xpath(this.btnconvey).click({force: true})
    }

    clickclassroomsubmitbutton(){
        cy.get(this.btnclassroomsubmit).click({force:true})
    }
    setnumber(stnumber){
        cy.get(this.invstudent).type(stnumber)
    }
    clickstudentid(){
        cy.get(this.student).click({force:true})
    }
    invitestudent(){
        cy.get(this.stbuttoninv).click({force:true})
    }



}
export default classroompageobject;