$(document).ready(function () {
    $('#math_functions_form').on('submit', function (e) {
        e.preventDefault();
        var expctedAns;
        var number1 = parseInt($('#number1').val());
        var number2 = parseInt($('#number2').val());
        var operation = $('#operation :selected').val();
        var data = {
            opd1: number1,
            opd2: number2,
            opn: operation,
        };
        // console.log(data);
        $.ajax({
            url: './operations',
            type: 'POST',
            data: JSON.stringify(data),
            // success function
            success: function (response) {
                console.log(response);
                switch (data.opn) {
                    case 'ADD':
                        expctedAns = data.opd1 + data.opd2;
                        break;
                    case 'SUB':
                        expctedAns = data.opd1 - data.opd2;
                        break;
                    case 'MUL':
                        expctedAns = data.opd1 * data.opd2;
                        break;
                    case 'DIV':
                        expctedAns = data.opd1 / data.opd2;
                        break;
                    default:
                       break;
                         }
               var isPassed;
               if(expctedAns!==response){
                  isPassed = "No";
                   var row = "<tr class=\"bg-danger\">"+
                          "<td>"+data.opd1+"</td>"+
                          "<td>"+data.opd2+"</td>" +
                          "<td>"+response+"</td>" +
                          "<td>"+expctedAns+"</td>" +
                          "<td>"+isPassed+"</td>" +
                          "<td><a><i class=\"fa fa-remove text-danger\"></i></a></td>" +
                          "</tr>";

                   
               }
               else{
                  isPassed = "Yes";
                     var row = "<tr class=\"bg-success\">"+
                          "<td>"+data.opd1+"</td>"+
                          "<td>"+data.opd2+"</td>" +
                          "<td>"+response+"</td>" +
                          "<td>"+expctedAns+"</td>" +
                          "<td>"+isPassed+"</td>" +
                          "<td><a><i class=\"fa fa-remove text-danger\"></i></a></td>" +
                          "</tr>";
               }

                $('#results').append(row);

            },
            // error function 
            error: function (err) {
                alert("Oops" + err.message);
            }
        });


    });

    $('#results').on('click', 'tr a', function (e) {
        e.preventDefault();
        $(this).parents('tr').remove();
    });

});