class blogpageobject{

    btnblog="a[title='Blogs'] span[role='button']"
    btnnewblog="//button[contains(text(),'নতুন ব্লগ')]"//xpath
    txttitle="input[placeholder='লিখুন শিরোনাম']"
    selectcategory="select[class='form-control']"
    txtbescription=".ql-editor.ql-blank"
    seltimage="//i[@class='fa fa-image']"//xpath
    btnsubmit="button[type='submit']"

    blogbutton(){
        cy.get(this.btnblog).click({force:true}) 
    }
    newblogbutton(){
        cy.xpath(this.btnnewblog).click({force:true})
    }
    blogtitle(titletext){
        cy.get(this.txttitle).type(titletext)
    }
    categoryselection(){
        cy.get(this.selectcategory).select('প্রশিক্ষণ').should('have.value','10')
    }
    blogdescription(description){
        cy.get(this.txtbescription).type(description)
    }
    selectimage(){
        cy.xpath(this.seltimage)
    }
    submitbutton(){
        cy.get(this.btnsubmit).click({force:true})
    }




}
export default blogpageobject