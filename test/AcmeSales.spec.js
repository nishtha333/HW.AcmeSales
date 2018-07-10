const expect = require('chai').expect;
const acmeSales = require('../src/AcmeSales');

describe('Acme Sales', () => {
    it('exists', () => {
        expect(acmeSales).to.be.ok;
    });

    it('returns empty object if the inputs are empty arrays', () => {
        expect(acmeSales.generateCustomerSalesMap([], [])).to.eql({});  
    });

    it('generates customer-sales map: tests for customers with no sales, single sale and multiple sales', () => {
        const sales = [ {customerId: 1, orderId: 1, total: 30}, 
                        {customerId: 2, orderId: 2, total: 45}, 
                        {customerId: 1, orderId: 3, total: 25}];
        const customers = [{id: 1, name: 'moe'}, {id: 2, name: 'larry'}, {id:3, name: 'joe'}];
        const expectedResult = {moe: 55, larry: 45, joe: 0};
        expect(acmeSales.generateCustomerSalesMap(sales, customers)).to.eql(expectedResult);    
    });
});

