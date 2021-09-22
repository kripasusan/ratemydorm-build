import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http:HttpClient,public router:Router) { }
  signup(item:any){
    console.log("inside service")
    // return this.http.post("http://localhost:5555/login",{"data":item}) 
     return this.http.post("/api/login",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  login(item:any){
    console.log("inside service");
    return this.http.post<any>("/api/login/check",{"data":item}) 
    // return this.http.post<any>("http://localhost:5555/login/check",{"data":item}) 
  }
  loggedIn(){
    return !! localStorage.getItem('token');
  }
  clgdata(){
    // return this.http.get("http://localhost:5555/clg");
    return this.http.get("/api/clg");

  }
  reivewdata(){
    // return this.http.get("http://localhost:5555/clg/review");
    return this.http.get("/api/clg/review");
  }
  hstlsdata(){
    // return this.http.get("http://localhost:5555/hstls/full");
     return this.http.get("/api/hstls/full");
  }
  hstldata(name:any){
    // return this.http.post("http://localhost:5555/hstls",{"data":name});
    return this.http.post("/api/hstls",{"data":name});

  }
  hstlspec(name:any,gen:any){
    // return this.http.post("http://localhost:5555/hstls/hstlspec",{"data":name,"value":gen});
    return this.http.post("/api/hstls/hstlspec",{"data":name,"value":gen});
  }
  review(data:any,value:any){
    //return this.http.post("http://localhost:5555/hstls/data",{"data":data,"value":value});
    return this.http.post("/api/hstls/data",{"data":data,"value":value});
  }
  clgpicchanger(){
    return !! localStorage.getItem('clgpic');
  }
  addclg(clg:any,hstl:any,review:any){
    // return this.http.post("http://localhost:5555/clg/addclg",{"dataclg":clg,"datahstl":hstl,"datareview":review})
    return this.http.post("/api/clg/addclg",{"dataclg":clg,"datahstl":hstl,"datareview":review})
    .subscribe(()=>console.log("success"));
  }
  addhstl(hstl:any,review:any){
    // return this.http.post("http://localhost:5555/clg/addhstl",{"datahstl":hstl,"datareview":review})
    return this.http.post("/api/clg/addhstl",{"datahstl":hstl,"datareview":review})
    .subscribe(()=>console.log("success"));
  }
  addreview(review:any){
    // return this.http.post("http://localhost:5555/clg/addreview",{"datareview":review})
    return this.http.post("/api/clg/addreview",{"datareview":review})
    .subscribe(()=>console.log("success"));
  }
  adminloggedIn(){
    return !! localStorage.getItem('admin');
  }
  adminlogin(item:any){
    console.log(item);
    // return this.http.post<any>("http://localhost:5555/admin/login",{"data":item})
    return this.http.post<any>("/api/admin/login",{"data":item})

    .subscribe(res=>{ 
      console.log(res.send);
      localStorage.setItem('admin',res.token);
      this.router.navigate(['adminhome']);
    });
  }
  adminaddclg(clg:any){
    // return this.http.post("http://localhost:5555/admin/addclg",{"dataclg":clg})
     return this.http.post("/api/admin/addclg",{"dataclg":clg})
    .subscribe(()=>console.log("this.router.navigate(['/'])"));
  }
  deleteclg(item:any,name:any){
    // return this.http.post("http://localhost:5555/admin/deleteclg",{"data":item,"data1":name})
    return this.http.post("/api/admin/deleteclg",{"data":item,"data1":name})
    .subscribe(()=>console.log("success"));
  }
  deletehstl(item:any,name:any){
    // return this.http.post("http://localhost:5555/admin/deletehstl",{"data":item,"data1":name})
    return this.http.post("/api/admin/deletehstl",{"data":item,"data1":name})
    .subscribe(()=>console.log("success"));
  }
  deletereview(item:any){
    // return this.http.post("http://localhost:5555/admin/deletereview",{"data":item})
     return this.http.post("/api/admin/deletereview",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  approvedreview(item:any){
    // return this.http.post("http://localhost:5555/admin/approvedreview",{"data":item})
    return this.http.post("/api/admin/approvedreview",{"data":item})
    .subscribe(()=>console.log("success"));
  }
  approvereivewdata(){
    // return this.http.get("http://localhost:5555/clg/approvereview");
    return this.http.get("/api/clg/approvereview");
  }
} 
 