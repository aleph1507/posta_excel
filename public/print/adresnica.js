function printAdresnica(adresnica, user, bc){
  console.log('bc:');
  console.log(bc);
  console.log('adresnica', adresnica);
  console.log('user', user);
  var styleArr = [];
  var style = '';
  styleArr.push('@page {size: landscape;}');
  styleArr.push('* {font-family: Arial, sans-serif;} p, td, .signDiv{font-size:0.9em;} div {font-size:0.93em;} .sm{font-size: 0.8em}');
  styleArr.push('.cont {border: 1px solid black;}');
  styleArr.push('.padded {padding:1%;}');
  styleArr.push('.padded-sides {padding:0 1%;}');
  styleArr.push('.margined {margin:1%;}');
  styleArr.push('.margined-top {margin-top:1%;}');
  styleArr.push('.margined-bottom {margin-bottom:1%;}');
  styleArr.push('.header {display:flex; justify-content:space-between; align-items:center;}');
  styleArr.push('.header-logo {max-width: 25%;}');
  styleArr.push('.border-btn {border-bottom:1px solid black;}');
  styleArr.push('.bordered {border:1px solid black;}');
  styleArr.push('.inline-small {display:inline; width:30%;}');
  styleArr.push('.caption {background-color:lightgrey; width:60%;}');
  styleArr.push('.caption-full {background-color:lightgrey; width:100%;}');
  styleArr.push('.isprakac {width: 100%; display:flex;}');
  styleArr.push('.isprakac-levo {width: 60%;}');
  styleArr.push('.isprakac-desno {width: 40%;}');
  styleArr.push('.hs {display:flex; flex-direction:row;}');
  styleArr.push('.fhs {display:flex; flex-direction: column; width:50%;}');
  styleArr.push('.rhs {display:flex; width:50%;}');
  styleArr.push('.rhsls {display:flex; flex-direction: column; width:60%;}');
  styleArr.push('.rhsrs {display:flex; flex-direction: column; width:40%;}');
  styleArr.push('.lbc {position:relative; max-width:35%;}');
  // bc = document.createElement('svg');
  // bc.setAttribute('id', 'barcode');


  for(i = 0; i<styleArr.length; i++){
    style += styleArr[i];
  }
  docStart = '<html><head><style>';
  docStart += style;
  docStart += '</style></head><body>' + '<div class="cont">';
  docEnd = "</div></body></html>";
  onLoadScript = "<script type='application/javascript'>window.onload = function(){window.print(); window.onfocus = function() {setTimeout(function(){window.close()},3);} } </script>";
  docEnd = onLoadScript + docEnd;
  header = '<div class="header">' +
              '<div class="padded">' +
                '<img class="lbc" src=' + bc.src + '>' +
              '</div>' +
              '<h2 style="margin:0;text-align:center;width:100%;">Адресница</h2>' +
              '<img src=' + tpl_logo + ' class="header-logo">' +
            '</div>';

            // adresa: "qwe"
            // created_at: "2018-10-30 13:46:56"
            // id: 2
            // kontakt_lice_telefon: "qwe"
            // name: "123"
            // opstina: "qwe"
            // postenski_broj: "qwe"
            // updated_at: "2018-10-30 13:46:56"

  isprakac = '<h5 class="caption margined">1. Испраќач</h5>' +
             '<div class="isprakac margined">' +
               '<div class="isprakac-levo">' +
                 '<label>Име и Презиме / Име на фирма</label>' +
                 '<div class="border-btn">' + user.name + '</div>' +
                 '<label>Адреса</label>' +
                 '<div class="border-btn">' + user.adresa + '</div>' +
                 '<label>Општина</label>' +
                 '<div class="border-btn">' + user.opstina + '</div>' +
                 '<label>Поштенски број</label>' +
                 '<div class="border-btn">' + user.postenski_broj + '</div>' +
                 '<label>Контакт лице / Телефон</label>' +
                 '<div class="border-btn">' + user.kontakt_lice_telefon + '</div>' +
               '</div>' +
               '<div class="isprakac-desno padded-sides">' +
                 '<label>Потпис на испраќач</label>' +
                 '<div class="border-btn">' + '\xa0' + '</div>' +
                 '<label>Време на прием</label>' +
                 '<div class="bordered">' + '\xa0' + '</div>' +
                 '<label>Датум на прием</label>' +
                 '<div class="bordered">' + '\xa0' + '</div>' +
                 '<label>' + '\xa0' + '</label>' +
                 '<div>' + '\xa0' + '</div>' +
                 '<label>Курир (шифра/потпис)</label>' +
                 '<div class="border-btn">' + '\xa0' + '</div>' +
               '</div>' +
              '</div>';

              // Адреса на примач: "Карл Либкнеџт 7/1-4 СКОпје "
              // Забелешка: "пов док 2 ком "
              // Име на примач: "Зујка Костадинова "
              // Место на примач: "Центар (Центар)"
              // Повратен документ: "1"
              // Повратен откуп: "0"
              // Сериски: "SERISKI2452"
              // Тежина: "10"
              // Телефон на примач: "38970337396"

  primac = '<h5 class="caption margined">2. Примач</h5>' +
             '<div class="isprakac margined">' +
               '<div class="isprakac-levo">' +
                 '<label>Име и Презиме / Име на фирма</label>' +
                 '<div class="border-btn">' + adresnica['Име на примач'] + '</div>' +
                 '<label>Адреса</label>' +
                 '<div class="border-btn">' + adresnica['Адреса на примач'] + '</div>' +
                 '<label>Општина</label>' +
                 '<div class="border-btn">' + adresnica['Место на примач'] + '</div>' +
                 '<label>Поштенски број</label>' +
                 '<div class="border-btn">' + '\xa0' + '</div>' +
                 '<label>Контакт лице / Телефон</label>' +
                 '<div class="border-btn">' + adresnica['Телефон на примач'] + '</div>' +
               '</div>' +
               '<div class="isprakac-desno padded-sides">' +
                 '<label>Потпис на примач</label>' +
                 '<div class="border-btn">' + '\xa0' + '</div>' +
                 '<label>Време на испорака</label>' +
                 '<div class="bordered">' + '\xa0' + '</div>' +
                 '<label>Датум на испорака</label>' +
                 '<div class="bordered">' + '\xa0' + '</div>' +
                 '<label>' + '\xa0' + '</label>' +
                 '<div>' + '\xa0' + '</div>' +
                 '<label>Курир (шифра/потпис)</label>' +
                 '<div class="border-btn">' + '\xa0' + '</div>' +
               '</div>' +
              '</div>';


  lhs = '<div class="fhs">' + isprakac + primac + '</div>';

  rhsls = '<div class="rhsls margined">' +
            '<h5 class="caption-full" style="margin:0;"> 3. Вид на услуга</h5>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Ден за ден</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Датум на достава</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Денес за утре</span></div><br>' +

            '<h5 class="caption-full margined-top"> 4. Дополнителни услуги</h5>' +
            '<div class="hs">' +
              '<div class="fhs">' +
                '<span>Поштарина</span>' +
                '<div class="bordered">\xa0</div>' +
              '</div>' +
              '<div class="fhs">' +
                '<h5 class="caption-full margined" style="margin-top:0;"> 5. Плаќа (заокружи)</h5>' +
                '<div style="display:flex; justify-content:flex-end;">' +
                  '<div class="bordered padded">ИФ</div>' +
                  '<div class="bordered padded">ПФ</div>' +
                  '<div class="bordered padded">ИГ</div>' +
                  '<div class="bordered padded">ПГ</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="hs">' +
              '<div class="fhs">' +
                '<span>Осигурување на пратка</span>' +
                '<div class="bordered">\xa0</div>' +
              '</div>' +
              '<div class="fhs">' +
                '<h5 class="margined" style="margin-top:0;"> \xa0</h5>' +
                '<div style="display:flex; justify-content:flex-end;">' +
                  '<div class="bordered padded">ИФ</div>' +
                  '<div class="bordered padded">ПФ</div>' +
                  '<div class="bordered padded">ИГ</div>' +
                  '<div class="bordered padded">ПГ</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="hs">' +
              '<div class="fhs">' +
                '<span>Повратен откуп</span>' +
                '<div class="bordered">\xa0</div>' +
              '</div>' +
              '<div class="fhs">' +
                '<h5 class="margined" style="margin-top:0;"> \xa0</h5>' +
                '<div style="display:flex; justify-content:flex-end;">' +
                  '<div class="padded">\xa0</div>' +
                  '<div class="padded">\xa0</div>' +
                  '<div class="padded">\xa0</div>' +
                  '<div class="padded">\xa0</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="hs">' +
              '<div class="fhs">' +
                '<span>Провизија</span>' +
                '<div class="bordered">\xa0</div>' +
              '</div>' +
              '<div class="fhs">' +
                '<h5 class="margined" style="margin-top:0;"> \xa0</h5>' +
                '<div style="display:flex; justify-content:flex-end;">' +
                  '<div class="bordered padded">ИФ</div>' +
                  '<div class="bordered padded">ПФ</div>' +
                  '<div class="bordered padded">ИГ</div>' +
                  '<div class="bordered padded">ПГ</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="hs">' +
              '<div class="fhs">' +
                '<span>Повратен документ</span>' +
                '<div class="bordered">\xa0</div>' +
              '</div>' +
              '<div class="fhs">' +
                '<h5 class="margined" style="margin-top:0;"> \xa0</h5>' +
                '<div style="display:flex; justify-content:flex-end;">' +
                  '<div class="bordered padded">ИФ</div>' +
                  '<div class="bordered padded">ПФ</div>' +
                  '<div class="bordered padded">ИГ</div>' +
                  '<div class="bordered padded">ПГ</div>' +
                '</div>' +
              '</div>' +
            '</div>' +

            '<div class="bordered margined-top">Нова Пошта доо<br>улица 1550 бр. 14 Визбегово<br>02/313 88 88 078 88 88 55</div>' +

            '<h5 class="caption-full"> 8. Забелешка</h5>' +
          '</div>';
  rhsrs = '<div class="rhsrs">' +
            '<span class="margined-top" style="margin-top: 25%;">Сериски број</span>' +
            '<div class="bordered">' + adresnica['Сериски'] + '</div>' +
            '<div class="caption-full" style="margin-top:5%;"> 6. Вид на пратка</div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Број на писма</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Број на пакети</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Вкупна тежина(kg)</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Висина(m)</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Должина(m)</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Ширина(m)</span></div>' +
            '<div style="display:flex;" class="margined-top"><div class="bordered inline-small">\xa0</div> <span>Вк. волумен(m<sup>2</sup>)</span></div>' +

            '<div class="caption-full" style="margin-top:5%;"> 7. Начин на испорака(заокружи)</div>' +
            '<span>Адреса/Адреса</span>' +
            '<span>Адреса/Пошта</span>' +
            '<span>Пошта/Пошта</span>' +
            '<span>Пошта/Адреса</span>' +
          '</div>';

  rhs = '<div class="rhs" style="border-bottom: 1px solid black; padding-bottom: 1.5%;">' + rhsls + rhsrs + '</div>';

  hs = '<div class="hs" style="position:relative;">' + lhs + rhs + '</div>';

  note = '<p style="padding:1%;">сo потпис испраќачот и примачот потврдуваат дека сите наведени податоци се вистинити и точни со што Нова Пошта не одговара за евентуалните последици заради неисправно пополнета адресница</p>';

  PS = '<span class="sm" style="position:relative; left: 60%;">info@novaposta.mk reklamacii@novaposta.mk</span>';

  winHTML = docStart + header + hs + note + PS + docEnd;
  printWindow = window.open();
  printWindow.document.write(winHTML);
  printWindow.document.close();

}


var tpl_logo = 'data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QQSaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0idXVpZDo1RDIwODkyNDkzQkZEQjExOTE0QTg1OTBEMzE1MDhDOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNDJGQkU3QUMxRUQxMUU2Qjg1RUY1OEI5RUY4MjUwRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDJGQkU3OUMxRUQxMUU2Qjg1RUY1OEI5RUY4MjUwRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBJbGx1c3RyYXRvciBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InV1aWQ6OWM3OTA3ZTItMDhmOC00YTQwLWE1NDAtNGMzZTAzMzkxMjc4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZCRTQ2QTI0RDIzMUU1MTE5NEZBRkZEQjVG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';
