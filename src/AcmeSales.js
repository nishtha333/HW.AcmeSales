/*
Note: Prof solution uses reduce to populate the results (called memo) and return that
*/

module.exports = {
    //Go through each customer, filter the relevant details from sales and reduce them to a total amount
    generateCustomerSalesMap: (sales, customers) => {
        const results = {};
        customers.forEach((element) => {
            let filteredSales = sales.filter((s) => s.customerId === element.id);
            if(!filteredSales.length) {
                results[element.name] = 0;
            }
            else if (filteredSales.length === 1) {
                results[element.name] = filteredSales[0].total;
            }
            else {
                results[element.name] = filteredSales.reduce((previous, current) => {
                                                        return previous.total + current.total;
                                                    }); 
            }          
        });
        return results;
    }
}