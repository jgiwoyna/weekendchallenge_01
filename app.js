$(document).ready(function() {
    var array = [];
    var totalSalary = 0;
    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();


      var values = {};
      var fields = $('#employeeinfo').serializeArray();

      fields.forEach(function(element, index, array) {
        values[element.name] = element.value;
      });

      console.log(values);

      $('#employeeinfo').find('input[type=text]').val('');

      appendDom(values);
      newSalary(values);
    });

    function appendDom(empInfo) {
      $('#table').append('<tr>' +
    '<td>' + empInfo.employeefirstname + '</td>' +
    '<td>' + empInfo.employeelastname + '</td>' +
    '<td>' + empInfo.idnumber + '</td>' +
    '<td>' + empInfo.jobtitle + '</td>' +
    '<td>' + empInfo.annualsalary + '</td>' +
  '</tr>');
    }

      function newSalary(empInfo) {
        totalSalary += parseInt(empInfo.annualsalary);
        totalSalary /= 12;
        $("#totalSalary").text(totalSalary);
      }


});
