<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Upload Excel</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
  </head>
  <body>
    <div class="full d-flex flex-column justify-content-center align-items-center">
      <div class="upload_file">
        <label class="btn btn-lg btn-outline-dark input-btn">
          <input type="file" class="upload-input d-none" id="upload_excel" name="upload_excel">
            Upload Excel
        </label>
      </div>
    </div>

    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
          <div class="table_xlsx" id="table_xlsx"></div>
          <div class="row mt-5">
            <div class="col-xs-10 col-md-6">
              <a href="#"
                id="btnSaveExcel"
                class="btn btn-lg btn-outline-primary w-100">Save</a>
            </div>
            <div class="col-xs-10 col-md-6">
              <a href="#" class="btn btn-lg btn-outline-info w-100 cancel">Cancel</a>
            </div>
          </div>
      </div>
    </div>

    <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
    <script type="text/javascript" src="{{asset('js/script.js')}}"></script>
  </body>
</html>
