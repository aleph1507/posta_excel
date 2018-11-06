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
  var btnPrintSpec = $(".btnPrintSpec");
  var btnPrintAdresnici = $(".btnPrintAdresnici");
  var adresniciHTML = '';

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

  function specsTable(e) {
    axios.get('/specs/' + $(e.target).data('spec'))
      .then(function(response){
        var user;
        var barcodes = [];
        var adresnici = response.data;
        var bcs = document.getElementById('barcodes');
        var table_spec = document.getElementById('table_spec');
        var specsTable = '<table class="table table-striped table-hover table-sm">';
        bcs.innerHTML = '';
        console.log('response.data', response.data);
        $.each(response.data, function(index, value) {
          bc = document.createElement('img');
          bc.setAttribute('id', 'barcode' + index);
          bcs.appendChild(bc);
          JsBarcode(bc, response.data[index][adresnik.seriski]);
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
            specsTable += '<td>' +
              '<button class="btn btn-sm btn-outline-dark pAdresnica" data-index="' + index + '">Print</a>' + '</td>';
          specsTable += '</tr>';
        });
        specsTable += '</table>';
        table_spec.innerHTML = specsTable;
        showSpecsModal();
        axios.post('/user/info')
        .then(function(response){
          user = response.data;
          $('.pAdresnica').on('click', function(e){
            barcode = document.getElementById('barcode' + $(e.target).data('index'));
            printAdresnica(adresnici[$(e.target).data('index')], user, barcode);
          });
        })
        .catch(function(error){
          toastr.error(error, 'There\'s been an error fetching the user');
        });
      })
      .catch(function(error){
        toastr.error(error, 'There\'s been an error reading the data');
      });
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
      location.reload();
      toastr.success('Document Saved', 'Success');
      modal.css({'display' : 'none'});
    })
    .catch(function(error) {
      toastr.error(error, 'There\'s been an error');
    });
  });

  function setupPrintSpec(e) {
    console.log('setupPrintSpec');
    var spec_bcs = document.getElementById('barcodes');
    var spec_bc;

    entries = null;
    spec = null;
    for(i = 0; i<specs.length; i++){
      if(specs[i].id == $(e.target).data('spec')){

        spec = specs[i];
        break;
      }
    }
    axios.get('/specs/' + spec.id)
    .then(function(response){
      spec_bc = document.createElement('img');
      // spec_bc.setAttribute('id', '')
      spec_bcs.appendChild(spec_bc);
      JsBarcode(spec_bc, spec.barcode);
      printSpec(response.data, spec, spec_bc);
    })
    .catch(function(error){
      toastr.error(error, 'There\'s been an error reading the data')
    })
  }

  function printAdresnici(e){
    // console.log('printAdresnici');
    // console.log('spec data.spec: ', $(e.target).data('spec'));
    spec = entries = user = null;
    docEnd = "</body></html>";
    onLoadScript = "<script type='application/javascript'>window.onload = function(){window.print(); window.onfocus = function() {setTimeout(function(){window.close()},3);} } </script>";
    docEnd = docEnd;
    // axios.get('/specs/' . $(e.target).data('spec'))
    axios.post('/user/info')
    .then(function(response) {
      user = response.data;
      // console.log('user:', user)
      axios.get('/specs/' + $(e.target).data('spec'))
      .then(function(response) {
        adresniciHTML = '';
        entries = response.data;
        var bcs = document.getElementById('barcodes');
        bcs.innerHTML = '';
        console.log('entries: ', entries);
        for(i = 0; i<entries.length; i++){
          bc = document.createElement('img');
          bc.setAttribute('id', 'barcode' + entries[i].id);
          bcs.appendChild(bc);
          JsBarcode(bc, entries[i]['Сериски']);
          // console.log(entries[i]['Сериски']);
        }
        console.log('bcs');
        console.log(bcs);
        console.log('entries.length: ', entries.length);
        for(ai = 0; ai<entries.length; ai++){
          console.log('VO FOR');
          barcode = document.getElementById('barcode' + entries[ai].id);
          console.log('vo for, barcode, ai: ', barcode, ai);
          aHTML = printAdresnica(entries[ai], user, barcode, true, ai == 0) + '</div>';
          // console.log('aHTML: ');
          // console.log(aHTML);
          adresniciHTML += '<br>' + aHTML + '<br>' + aHTML;
        }

        adresniciHTML += onLoadScript + docEnd;
        // console.log('adresniciHTML: ', adresniciHTML);
        printWindow = window.open();
        printWindow.document.write(adresniciHTML);
        printWindow.document.close();
        // console.log('winHTML: ', winHTML);
      })
      // .catch(function(error) {
      //   toastr.error(error, 'There\'s been an error reading the data');
      // });
    })
    .catch(function(error) {
      toastr.error(error, 'There\'s been an error obtaining the user data');
    });

  }

  btnShowSpec.on('click', specsTable);

  btnPrintSpec.on('click', setupPrintSpec);

  btnPrintAdresnici.on('click', printAdresnici);

});
