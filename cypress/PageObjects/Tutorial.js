import 'cypress-file-upload';
class tutorialpageobject{
    btntutorial="a[title='Tutorials'] span[role='button']"
    btnnewtutorial="div[class='head_info_section bn'] button[class='link']"
    txttutorialtitle="input[placeholder='লিখুন শিরোনাম']"
    categori="select[class='form-control']"
    txtdesctiption=".ql-editor.ql-blank"
    time="input[placeholder='HH:mm:ss']"
    imgthamnail="(//i[@class='fa fa-image'])[1]"  //xpath
    imgtutorial="(//i[@class='fa fa-image'])[2]"
    btnsave="button[type='submit']"

    tutorialbutton(){
        cy.get(this.btntutorial).click({force:true})
    }
    newtutorialbutton(){
        cy.get(this.btnnewtutorial).click({force:true})
    }
    tutorialtitle(tutorialtit1){
        cy.get(this.txttutorialtitle).type(tutorialtit1)
    }
    categoriselection(){
        cy.get(this.categori).select('প্রশিক্ষণ').should('have.value','10')
    }
    desctiption(tdescription1){
        cy.get(this.txtdesctiption).type(tdescription1)
    }
    selecttime(){
        cy.get(this.time).click({force: true});
        cy.xpath("//ul[@class='hours']//li[contains(text(),'00')]").click({force: true});
        cy.xpath("//ul[@class='minutes']//li[contains(text(),'01')]").click({force: true});
        cy.xpath("//ul[@class='seconds']//li[contains(text(),'00')]").click({force: true});
        cy.get(this.time).click({force: true});
        cy.scrollTo(0, 500);
    }
    tutorialthumbnail(){
        const filep='blog.jpg'
        cy.xpath(this.imgthamnail).attachFile(filep)
    }
    tutorialvideo(){
        
        cy.xpath(this.imgtutorial).click({force:true});
        cy.xpath("//span[contains(text(),'ইউআরএল লিঙ্ক যুক্ত করুন')]").click({force:true});
        cy.xpath("//input[@placeholder='লিঙ্ক এখানে']").type("https://www.youtube.com/watch?v=x2lOjVaIKSc")
        cy.xpath("//span[contains(text(),'সেভ')]").click({force: true});
        cy.wait(2000)
        cy.xpath("(//i[@class='bi bi-youtube youtube'])[1]").click({force: true});
        cy.xpath("//span[contains(text(),'বাছাই করুন')]").click({force: true});
        cy.wait(2000)
    }
    submitbutton(){
        cy.get(this.btnsave).click({force:true});
    }
}
export default tutorialpageobject