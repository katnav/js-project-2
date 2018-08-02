//$('table').on('mouseup keyup', 'input[type=number]', () => calculateTotals());





$(document).ready(function() {
$('form').on('mouseup keyup', 'input[type=number]', () => calculateItemPrice());

    function calculateItemPrice() {

        const itemQty = $('input[name=itemQty').val();
        const itemUnitPrice = $('input[name=itemUnitPrice]').val();
        const itemPrice = (itemQty * itemUnitPrice);
        //console.log(itemPrice);
        $('.itemPrice').text(formatCurrency(itemPrice));

    };



});

$('.addItem').click(function() {
        // const itemName = $('input[name=itemName').val();
        // const itemQty = $('input[name=itemNQty').val();
        const newItem = "<tr class='item'><td><input placeholder='Enter item description' name='itemName' autofocus></td> <td>$<input type='number' name='itemUnitPrice'></td> <td><input type='number' name='itemQty'></td> <td class='itemPrice'></td> </tr>";
        $('tbody').append(newItem);
    });

function formatCurrency(amount) {
    return `$${Number(amount).toFixed(2)}`;
}

// $(document).ready(function(){
//         $(".add-row").click(function(){
//             var name = $("#name").val();
//             var email = $("#email").val();
//             var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + name + "</td><td>" + email + "</td></tr>";
//             $("table tbody").append(markup);
//         });

//         // Find and remove selected table rows
//         $(".delete-row").click(function(){
//             $("table tbody").find('input[name="record"]').each(function(){
//                 if($(this).is(":checked")){
//                     $(this).parents("tr").remove();
//                 }
//             });
//         });
//     });


// $('.btn-add-row').on('click', () => {
//   const $lastRow = $('.item:last');
//   const $newRow = $lastRow.clone();

//   $newRow.find('input').val('');
//   $newRow.find('td:last').text('$0.00');
//   $newRow.insertAfter($lastRow);

//   $newRow.find('input:first').focus();
// });

// function calculateTotals() {
//   const subtotals = $('.item').map((idx, val) => calculateSubtotal(val)).get();
//   const total = subtotals.reduce((a, v) => a + Number(v), 0);
//   $('.total td:eq(1)').text(formatAsCurrency(total));
// }

