class ResponseBuilder {
  data: any = {};
  errors: any = [];
  statusCode: number = 200;
  ok: boolean = true;
  timeStamp: number = Date.now();

  setStatusCode(statusCode: number) {
    this.statusCode = statusCode;
    return this;
  }

  setData(data: any) {
    this.data = data;
    return this;
  }

  setErrors(errors: any) {
    this.errors = errors;
    return this;
  }

  setOK(ok: boolean) {
    this.ok = ok;
    return this;
  }

  build() {
    return this;
  }
}

export default ResponseBuilder;
