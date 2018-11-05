@extends('layouts.app')
  @section('content')
    <script type="text/javascript" src="{{asset('js/JsBarcode.all.min.js')}}"></script>
    <div id="barcode" class="d-none"></div>
    <div class="screen">
      <script type="text/javascript">
        var specs = [];
      </script>
        <div class="d-none" id="barcodes"></div>
        <div class="row">
          <div class="col-xs-12 col-md-6 offset-md-3">
            <div class="table-responsive mt-5">
              <table class="table table-striped table-hover table-sm">
                <thead class="thead-dark">
                  <th scope="col">#</th>
                  <th scope="col">User</th>
                  <th scope="col">Barcode</th>
                  <th scope="col">See Spec</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Print Spec</th>
                  <th scope="col">Print Adresnici</th>
                </thead>
                <tbody>
                  @for($i=0; $i<count($specs); $i++)
                    <tr>
                      <th scope="row">{{($specs->currentPage() - 1) * $specs->perPage() + $i + 1}}</th>
                      <td>{{$specs[$i]->user->name}}</td>
                      <td>{{$specs[$i]->barcode}}</td>
                      <td>
                        <button data-spec="{{$specs[$i]->id}}" class="btn btn-outline-info btn-sm btnShowSpec">
                          Spec {{($specs->currentPage() - 1) * $specs->perPage() + $i + 1}}
                        </button>
                      </td>
                      <td>{{$specs[$i]->created_at}}</td>
                      <td>
                        <button data-spec="{{$specs[$i]->id}}" type="button" name="printSpec"
                          class="btn btn-outline-info btn-sm btnPrintSpec">Print Spec</button>
                      </td>
                      <td>
                        <button data-spec="{{$specs[$i]->id}}" type="button" name="printAdresnici"
                          class="btn btn-outline-info btn-sm btnPrintAdresnici">Print Adresnici</button>
                      </td>
                    </tr>
                    <script type="text/javascript">
                      specs[<?php echo $i; ?>] = <?php echo json_encode($specs[$i]); ?>;
                    </script>
                  @endfor
                </tbody>
              </table>
            </div>

            {{$specs->links()}}
          </div>

          <div class="col-xs-12 col-md-1">
            <div class="full d-flex flex-column justify-content-start align-items-start">
              <div class="upload_file">
                <label class="btn btn-lg btn-outline-dark input-btn rounded-circle">
                  <input type="file" class="upload-input d-none" id="upload_excel" name="upload_excel">
                  +
                </label>
              </div>
            </div>
          </div>
        </div> {{-- /row --}}

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

      <div id="showSpecs" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
            <div class="table_spec" id="table_spec"></div>
            <div class="row mt-3">
              <div class="col-xs-10 col-md-10 offset-1">
                <a href="#" class="btn btn-block btn-outline-info w-100 cancel">Close</a>
              </div>
            </div>
        </div>
      </div>
  </div>

  <script type="text/javascript" src="{{asset('print/spec.js')}}"></script>
  <script type="text/javascript" src="{{asset('print/adresnica.js')}}"></script>

  @endsection
