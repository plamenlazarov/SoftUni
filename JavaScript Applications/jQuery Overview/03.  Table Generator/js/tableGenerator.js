$(function() {
    var data = $.parseJSON('[{"manufacturer":"BMW","model":"E92 320i","year":2011,"price":50000,"class":"Family"},' +
                           '{"manufacturer":"Porsche","model":"Panamera","year":2012,"price":100000,"class":"Sport"},' +
                               '{"manufacturer":"Peugeot","model":"305","year":1978,"price":1000,"class":"Family"}]');

    var $table = $('<table><thead>' +
                  '<tr><th>Manufacturer</th><th>Model</th><th>Year</th><th>Price</th><th>Class</th></tr></thead></table>');
    $('body').append($table);

   data.forEach(function(obj) {
       var $manufactuter = $('<td>' + obj.manufacturer + '</td>'),
           $model = $('<td>' + obj.model + '</td>'),
           $year = $('<td>' + obj.year + '</td>'),
           $price = $('<td>' + obj.price + '</td>'),
           $type = $('<td>' + obj.class + '</td>'),
           $tr = $('<tr/>');

       $tr.append($manufactuter, $model, $year, $price, $type);
       $tr.appendTo('table');


   });


});
