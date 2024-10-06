describe('Api Adopet',()=>{
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3YmE5YjI0Ni02OWMyLTRjMWEtYWM2ZC01MmQ0ZDA3Y2ZiNjQiLCJhZG9wdGVyTmFtZSI6Ik1pY2hlbCBGb3VjYXVsdCIsImlhdCI6MTcyODIyNDY3OSwiZXhwIjoxNzI4NDgzODc5fQ.qf116WMtgk53CinvNo9FrOsStsHK2gge5J6G3zs_VC8` 

    it('Mensagens da API',()=>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
            headers: {authorization}
    
        }).then((res)=>  {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')

        })

})

   

    

})