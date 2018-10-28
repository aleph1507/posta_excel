$(document).ready(function() {
  var modal = $('#myModal');
  var json_object = null;
  var btnSaveExcel = $("#btnSaveExcel");

  function makeTable(json_xlsx){
    var table = document.createElement("table");
    var mc = makeModalContent();
    $(table).addClass("table table-striped table-hover table-sm");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }

  function make_modal() {
    modal.css({'display' : 'block'});
    $(".close, .cancel").on('click', function(e) {
      modal.css({'display' : 'none'});
    });
  }

  $("#upload_excel").on('change', function(e){
    var reader = new FileReader();
    var table_xlsx = document.getElementById('table_xlsx');

    reader.onload = function(e) {
      var data = e.target.result;
      var workbook = XLSX.read(data, {
        type: 'binary'
      });

      json_object = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
      table_xlsx.innerHTML = XLSX.utils.sheet_to_html(workbook.Sheets[workbook.SheetNames[0]]);
      make_modal();
      $('#upload_excel').val(null);
    }

    reader.onerror = function(ex){
      toastr.error(error, 'There\'s been an error reading the excel document');
    }

    reader.readAsBinaryString(e.target.files[0]);
  });

  btnSaveExcel.on('click', function(e) {
    console.log('json_object');
    console.log(json_object);
    axios.post('/specs/store', {
      data: JSON.stringify(json_object)
    })
    .then(function(response) {
      toastr.success('Document Saved', 'Success');
      modal.css({'display' : 'none'});
    })
    .catch(function(error) {
      toastr.error(error, 'There\'s been an error');
    });
  });
})
