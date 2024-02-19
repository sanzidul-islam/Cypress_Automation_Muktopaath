class coursepageobject{

    btncourse ="a[title='Course']"
    btnnewcourse=".link"
    txtcoursetitle="input[placeholder='এখানে লিখুন']"
    btnnext1="div[class='form_button'] button"
    selectdropdown=".repeat_dropdown"
    btnnext2="div[id='__nuxt'] button:nth-child(2)"
    txtcourseinfo1="//div[@class='course_create_from']//div[1]//input[1]"
    txtcourseinfo2="//div[@class='form_input']//div[2]//input[1]"
    btnnext3="//button[contains(text(),'পরবর্তী')]"
    btnnewlesson="//button[contains(text(),'নিউ লেসন')]"
    btnvideolesson="//div[@class='popup-root']//div[4]//div[2]"
    txtvideolessontitle="//input[@placeholder='শিরোনাম লিখুন']"
    txtvideourl="//input[@placeholder='ইউআরএল']"
    btnvideolessonsave="//span[@class='save_button']"

    coursebutton(){
        cy.get(this.btncourse).click({force:true}) 
    }
    newcoursebutton(){
        cy.get(this.btnnewcourse).click({force:true}) 
    }
    coursetitle(coursetitle1){
        cy.get(this.txtcoursetitle).type(coursetitle1)
    }
    nextbutton1(){
        cy.get(this.btnnext1).click({force:true})
    }
    dropdownselect(){
        cy.get(this.selectdropdown).select('বৈদেশিক কর্মসংস্থান').should('have.value', '12')
           
    }
    nextbutton2(){
        cy.get(this.btnnext2).click({force:true})
    }
    courseinformation1(courseinfo1){
        cy.xpath(this.txtcourseinfo1).type(courseinfo1)
    }
    courseinformation2(courseinfo2){
        cy.xpath(this.txtcourseinfo2).type(courseinfo2)
    }
    nextbutton3(){
        cy.xpath(this.btnnext3).click({force:true})
    }
    newlessonbutton(){
        cy.xpath(this.btnnewlesson).click({force:true})
    }
    videolessonbutton(){
        cy.xpath(this.btnvideolesson).click({force:true})
    }

    videolessontitle(videotit){
        cy.xpath(this.txtvideolessontitle).clear().type(videotit)
    }
    videolessonurl(videourl){
        cy.xpath(this.txtvideourl).type(videourl)
    }
    savebuttonvideo(){
        cy.xpath(this.btnvideolessonsave).click({force:true})
    }

    videolessontitlematch(){
        cy.xpath(this.txtvideolessontitle)
    }




}
export default coursepageobject;