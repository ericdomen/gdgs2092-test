"use strict";(self.webpackChunksistema_ventas_app=self.webpackChunksistema_ventas_app||[]).push([[171],{4171:(T,m,i)=>{i.r(m),i.d(m,{LoginModule:()=>F});var u=i(6895),g=i(3060),r=i(4006),t=i(4650),f=i(252),p=i(4859),l=i(9549),h=i(7392),d=i(3546),v=i(4144),c=i(782);function C(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.getErrorMessage("username")," ")}}function L(o,a){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",e.getErrorMessage("password")," ")}}const Z=[{path:"",component:(()=>{class o{constructor(e,n){this.fb=e,this.authSvc=n,this.hide=!0,this.loginForm=this.fb.group({username:["",[r.kI.required]],password:["",[r.kI.required,r.kI.minLength(3)]]})}ngOnInit(){}onLogin(){this.loginForm.invalid||this.authSvc.login(this.loginForm.value).subscribe(n=>{console.log(n)})}getErrorMessage(e){let n="";var s=this.loginForm.get(e);return null!=s&&(s.hasError("required")?n="Campo requerido":s.hasError("minlength")&&(n="El m\xednimo de caracteres son 5")),n}isValidField(e){var n=this.loginForm.get(e),s=!1;return null!=n&&(s=n.touched||n.dirty&&!n.valid),s}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(f.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:22,vars:8,consts:[["cols","1","rowHeight","100%",1,"fondo"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"full-width"],["type","text","formControlName","username","matInput",""],[4,"ngIf"],["formControlName","password","matInput","","autocomplete","new-password",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-grid-list",0)(1,"mat-grid-tile")(2,"mat-card")(3,"mat-card-content")(4,"h1"),t._uU(5,"Inicio de sesi\xf3n"),t.qZA(),t.TgZ(6,"form",1),t.NdJ("ngSubmit",function(){return n.onLogin()}),t.TgZ(7,"mat-form-field",2)(8,"mat-label"),t._uU(9,"Usuario"),t.qZA(),t._UZ(10,"input",3),t.YNc(11,C,2,1,"mat-error",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14,"Contrase\xf1a"),t.qZA(),t._UZ(15,"input",5),t.TgZ(16,"button",6),t.NdJ("click",function(){return n.hide=!n.hide}),t.TgZ(17,"mat-icon"),t._uU(18),t.qZA()(),t.YNc(19,L,2,1,"mat-error",4),t.qZA(),t.TgZ(20,"button",7),t._uU(21,"Acceder"),t.qZA()()()()()()),2&e&&(t.xp6(2),t.ekj("mat-elevation-z8",!0),t.xp6(4),t.Q6J("formGroup",n.loginForm),t.xp6(5),t.Q6J("ngIf",n.isValidField("username")),t.xp6(4),t.Q6J("type",n.hide?"password":"text"),t.xp6(3),t.Oqu(n.hide?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",n.isValidField("password")),t.xp6(1),t.Q6J("disabled",n.loginForm.invalid))},dependencies:[u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,p.lW,l.TO,l.KE,l.hX,l.R9,h.Hw,d.a8,d.dn,v.Nt,c.Il,c.DX],styles:[".fondo[_ngcontent-%COMP%]{height:100%;background:rgb(2,0,36);background:linear-gradient(58deg,rgb(2,0,36) 0%,rgb(9,9,121) 37%,rgb(0,212,255) 100%)}mat-card[_ngcontent-%COMP%]{max-width:40%;text-align:center}.full-width[_ngcontent-%COMP%], button[_ngcontent-%COMP%]{width:100%}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(Z),g.Bz]}),o})();var y=i(3806);let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,r.UX,b,y.q]}),o})()}}]);