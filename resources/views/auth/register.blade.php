@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus>

                                @if ($errors->has('name'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>


                        <div class="form-group row">
                            <label for="address" class="col-md-4 col-form-label text-md-right">Address</label>

                            <div class="col-md-6">
                                <input id="adresa" type="address" class="form-control{{ $errors->has('address') ? ' is-invalid' : '' }}"
                                  name="address" value="{{ old('address') }}" required>

                                @if ($errors->has('address'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('address') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="opstina" class="col-md-4 col-form-label text-md-right">Municipality</label>

                            <div class="col-md-6">
                              <input type="text" name="opstina" id="opstina"
                              class="form-control{{ $errors->has('opstina') ? ' is-invalid' : '' }}"
                              value="">

                              @if ($errors->has('opstina'))
                                <span class="invalid-feedback" role="alert">
                                  <strong>{{ $errors->first('opstina') }}</strong>
                                </span>
                              @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="PO" class="col-md-4 col-form-label text-md-right">PO</label>

                            <div class="col-md-6">
                              <input type="text" name="PO" id="PO"
                              class="form-control{{ $errors->has('PO') ? ' is-invalid' : '' }}"
                              value="">

                              @if ($errors->has('PO'))
                                <span class="invalid-feedback" role="alert">
                                  <strong>{{ $errors->first('PO') }}</strong>
                                </span>
                              @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="kontakt_lice_telefon" class="col-md-4 col-form-label text-md-right">Contact Person / Phone</label>

                            <div class="col-md-6">
                              <input type="text" class="form-control{{ $errors->has('kontakt_lice_telefon') ? ' is-invalid' : '' }}"
                              name="kontakt_lice_telefon" id="kontakt_lice_telefon" value="">

                              @if ($errors->has('kontakt_lice_telefon'))
                                <span class="invalid-feedback" role="alert">
                                  <strong>{{ $errors->first('kontakt_lice_telefon') }}</strong>
                                </span>
                              @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
