$(document).ready(function() {

    //add a new row
    $('.add-item').on('click', function(e) {
        e.preventDefault();

        //declare variable for new row
        let newItem = $(
            "<tr class='item new-item'><td><input placeholder='Item' name='itemName' autofocus></td> <td>$<input type='number' name='itemUnitPrice' placeholder='0.00'></td> <td><input type='number' name='itemQty' placeholder='0'></td> <td class='item-price'>$0.00</td><td><div class='delete'><i class='fas fa-minus-circle'></i><div></td> </tr>"
        );

        //display new row with fadeIn animation
        $('#invoice-details tr').eq(-4).before([newItem]);
        newItem.hide();
        newItem.fadeIn("slow");

        // get value of item price for computing the total
        $(newItem).find('input[name=itemPrice]').val('');


        // set focus on first input each time a new row is displayed;
        $('input[name=itemName]').focus();
    });


    // set focus on textarea when edit icon is clicked
    $('.invoice-info').on("mouseup", ".inv-num", function(e) {
        $('#invoice-num').show().focus();
    });

    $('.invoice-info').on("mouseup", ".inv-duedate", function(e) {
        $("#due-date").show().focus();
    });

    $('.customer-info').on("mouseup", ".inv-date", function(e) {
        $('#invoice-date').show().focus();
    });

    $('.customer-info').on("mouseup", ".inv-cname", function(e) {
        $("#customer-name").show().focus();
    });

    $('.customer-info').on("mouseup", ".inv-caddress1", function(e) {
        $("#customer-address-1").show().focus();
    });

    $('.customer-info').on("mouseup", ".inv-caddress2", function(e) {
        $("#customer-address-2").show().focus();
    });

    $('#invoice-details').on("mouseup", ".inv-tax", function(e) {
        $("#tax-rate").show().focus();
    });




    $('#invoice-details').on('click', '.delete', function() {
        $(this).closest('tr').remove();
        calculateTotals();

    });


    //format currency with decimal and comma
    const formatCurrency = (amount) => {

        return `${Number(amount).toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 2})}`;

    };

    //compute row price
    const calculateItemPrice = (item) => {

        //get values from inputs
        let itemQty = $('input[name=itemQty]', item).val();
        let itemUnitPrice = $('input[name=itemUnitPrice]', item).val();

        //compute and format row price
        let itemPrice = (itemQty * itemUnitPrice);
        $('.item-price', item).text(formatCurrency(itemPrice));

        return itemPrice;

    };

    //update row price as you input the values
    $('#invoice-details').on('mouseup keyup', 'input[type=number]', () => calculateTotals());

    //calculate totals
    const calculateTotals = () => {

        //variable to hold all row prices
        let itemPrices = $('.item').map((index, val) => calculateItemPrice(val)).get();

        //reduce all row prices to its sum and format subtotal
        let subtotal = itemPrices.reduce((index, val) => index + Number(val), 0);
        $('.subtotal').text(formatCurrency(subtotal));

        //get value of tax from input and covert to decimal
        let tax = $('input[name=taxRate]').val() / 100;

        //compute tax amount
        let taxAmount = subtotal * tax;

        //compute total
        let total = subtotal + taxAmount;

        //format currency
        $('.tax-amount').text(formatCurrency(taxAmount));
        $('.total').text(formatCurrency(total));
        $('.amount-due').text(formatCurrency(total));


    };



});