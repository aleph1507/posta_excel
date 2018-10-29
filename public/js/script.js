$(document).ready(function() {
  var adresnik = new function() {
    this.ime = 'Име на примач';
    this.adresa = 'Адреса на примач';
    this.mesto = 'Место на примач';
    this.telefon = 'Телефон на примач';
    this.tezina = 'Тежина';
    this.p_otkup = 'Повратен откуп';
    this.p_dokument = 'Повратен документ';
    this.zabeleska = 'Забелешка';
    this.seriski = 'Сериски';
  }

  var modal = $('#myModal');
  var showSpecs = $('#showSpecs');
  var json_object = null;
  var btnSaveExcel = $("#btnSaveExcel");
  var btnShowSpec = $(".btnShowSpec");

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

  function showSpecsModal() {
    showSpecs.css({'display' : 'block'});
    $(".close, .cancel").on('click', function(e) {
      showSpecs.css({'display' : 'none'});
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

  btnShowSpec.on('click', function(e) {
    axios.get('/specs/' + $(e.target).data('spec'))
    .then(function(response){
      var table_spec = document.getElementById('table_spec');
      var specsTable = '<table class="table table-striped table-hover table-sm">';
      $.each(response.data, function(index, value) {
        specsTable += '<tr>';
          specsTable += '<td>' + response.data[index][adresnik.ime] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.adresa] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.mesto] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.telefon] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.tezina] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.p_otkup] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.p_dokument] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.zabeleska] + '</td>';
          specsTable += '<td>' + response.data[index][adresnik.seriski] + '</td>';
        specsTable += '</tr>';
      });
      specsTable += '</table>';
      table_spec.innerHTML = specsTable;
      showSpecsModal();
    })
    .catch(function(error){
      toastr.error(error, 'There\'s been an error reading the data');
    });
  });

})
