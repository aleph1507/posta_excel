@extends('layouts.app')
  @section('content')
      <div class="row">

        <div class="col-xs-12 col-md-6 offset-md-3">
          <div class="table-responsive mt-5">
            <table class="table table-striped table-hover table-sm">
              <thead class="thead-dark">
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Barcode</th>
                <th scope="col">See Spec</th>
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
                  </tr>
                @endfor
              </tbody>
            </table>
          </div>

          {{$specs->links()}}
        </div>

        <div class="col-xs-12 col-md-1">
          <div class="full d-flex flex-column justify-content-center align-items-start">
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
          <div class="row mt-5">
            <div class="col-xs-10 col-md-6">
              <a href="#"
                id="btnSaveExcel"
                class="btn btn-lg btn-outline-primary w-100">Print</a>
            </div>
            <div class="col-xs-10 col-md-6">
              <a href="#" class="btn btn-lg btn-outline-info w-100 cancel">Cancel</a>
            </div>
          </div>
      </div>
    </div>

  @endsection
