

$(document).ready(function() {


    $('.add-item').on('click', function(e) {
        e.preventDefault();

});


$("#invoice-details").on('click','.delete',function(){
       $(this).closest('tr').remove();
       calculateTotals();
     });





function formatCurrency(amount) {
    return `$${Number(amount).toFixed(2)}`;
};

$('.add-item').on('click', () => {
        let newItem = "<tr class='item'><td><input placeholder='Item Name' name='itemName' autofocus></td> <td>$<input type='number' name='itemUnitPrice' placeholder='0.00'></td> <td><input type='number' name='itemQty' placeholder='0'></td> <td class='item-price'>$0.00</td><td><div class='delete'><i class='fas fa-minus-circle'></i><div></td> </tr>";
        $(newItem).find('input[name=itemPrice]').val('');
        //$('#invoice-details').append([newItem]);
        $('#invoice-details tr').eq(-1).before([newItem]);
        $('input[name=itemName]').focus();

    });


//calculate row price as you input value
$('#invoice-details').on('mouseup keyup', 'input[type=number]', () => calculateTotals());


    //calculate subtotal, tax amount, and total
    function calculateTotals() {


        let itemPrices =  $('.item').map((index, val) => calculateItemPrice(val)).get();

        let subtotal = itemPrices.reduce((a, v) => a + Number(v), 0);
        $('.subtotal').text(formatCurrency(subtotal));

        let tax = $('input[name=taxRate]').val() / 100;
        let taxAmount = subtotal * tax;
        let total = subtotal + taxAmount;
        $('.tax-amount').text(formatCurrency(taxAmount));
        $('.total').text(formatCurrency(total));
        $('.amount-due').text(formatCurrency(total));

        return subtotal;
        return taxAmount;


    };



    //calculates item price (row)
    function calculateItemPrice(item) {
        let itemQty = $('input[name=itemQty]', item).val();
        let itemUnitPrice = $('input[name=itemUnitPrice]', item).val();
        let itemPrice = (itemQty * itemUnitPrice);
        console.log(itemPrice);
        $('.item-price', item).text(formatCurrency(itemPrice));

        return itemPrice;

    };


});




