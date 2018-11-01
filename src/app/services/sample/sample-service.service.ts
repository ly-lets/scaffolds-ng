import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ServiceBase } from "../servicebase";
import { Sample } from "../../models/sample.model";
import { ResponseMessage } from "../../models/ResponseMessage.model";
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SampleService extends ServiceBase {

  private SampleAPI: string;

  constructor(private http: HttpClient) {
    super();
    this.SampleAPI = super.baseAPI() + "/10";
  }

  getSamples() {
    return this.http.get<ResponseMessage<Sample>>(this.SampleAPI).pipe(
      map(res => { return res }),
      catchError(super.handleError)
    );
  }
}
