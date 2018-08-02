

$(document).ready(function() {

    //add a new row when button (.addItem) is clicked
    $('.addItem').on('click', function(e) {
        e.preventDefault();

});


function formatCurrency(amount) {
    return `$${Number(amount).toFixed(2)}`;
};

$('.addItem').on('click', () => {
        let newItem = "<tr class='item'><td><input placeholder='Enter item description' name='itemName' autofocus></td> <td>$<input type='number' name='itemUnitPrice'></td> <td><input type='number' name='itemQty'></td> <td class='itemPrice'>0.00</td> </tr>";
        $('table#invoiceDetails').append(newItem);
        $('input[name=itemName]').focus();

    });



$('table#invoiceDetails').on('mouseup keyup', 'input[type=number]', () => calculateTotals());

    //calculates all
    function calculateTotals() {
        let itemPrices =  $('.item').map((index, val) => calculateItemPrice(val)).get();

        let subtotal = itemPrices.reduce((a, v) => a + Number(v), 0);
        $('.subtotal').text(formatCurrency(subtotal));

        const tax = .13;
        let taxAmount = subtotal * tax;
        let total = subtotal + taxAmount;
        $('.taxAmount').text(formatCurrency(taxAmount));
        $('.total').text(formatCurrency(total));

        return subtotal;
        return taxAmount;


    };

    //calculates item price (row)
    function calculateItemPrice() {
        let itemQty = $('input[name=itemQty]').val();
        let itemUnitPrice = $('input[name=itemUnitPrice]').val();
        let itemPrice = (itemQty * itemUnitPrice);
        console.log(itemPrice);
        $('.itemPrice').text(formatCurrency(itemPrice));

        return itemPrice;

    };


});






