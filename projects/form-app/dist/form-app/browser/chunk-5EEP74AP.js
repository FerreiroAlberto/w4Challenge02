import{b as q,c as N,d as V,e as k,f as R,g as L,i as Q,j as P,k as I,l as O,m as B}from"./chunk-WGRBQLEO.js";import{d as D,e as M,g as T}from"./chunk-SU6K5TTW.js";import{Fa as c,Ha as p,Ja as u,Ka as t,La as e,Ma as f,Na as b,Oa as h,Pa as _,Ra as g,Sa as x,Ta as C,Ua as v,Va as i,Wa as S,X as y,Ya as A,Za as E,da as w,ea as F,sa as l}from"./chunk-LESZ26IY.js";var J=["form"],U=["accessForm"],j=()=>["/personal"],z=()=>["/confirmation"];function H(n,r){n&1&&(t(0,"p"),i(1,"El nombre es obligatorio"),e())}function K(n,r){if(n&1&&c(0,H,2,0,"p"),n&2){_();let m=v(7);u(0,m.form.controls.username.errors!=null&&m.form.controls.username.errors.required?0:-1)}}function W(n,r){n&1&&(t(0,"p"),i(1,"Este campo es obligatorio"),e())}function X(n,r){if(n&1&&c(0,W,2,0,"p"),n&2){_();let m=v(7);u(0,m.form.controls.password.errors!=null&&m.form.controls.password.errors.required?0:-1)}}var ne=(()=>{let r=class r{ngOnInit(){console.dir(this.form.nativeElement),console.dir(this.accessForm)}onSubmit(d){console.log(d),console.log(this.accessForm.value),this.userData=this.accessForm.value}};r.\u0275fac=function(s){return new(s||r)},r.\u0275cmp=y({type:r,selectors:[["isdi-access"]],viewQuery:function(s,a){if(s&1&&(g(J,7),g(U,7)),s&2){let o;x(o=C())&&(a.form=o.first),x(o=C())&&(a.accessForm=o.first)}},standalone:!0,features:[A],decls:43,vars:10,consts:[["form","","accessForm","ngForm"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"ngSubmit"],["for","username"],["type","text","name","username","required","","ngModel",""],["for","password"],["type","password","name","password","required","","ngModel",""],["for","repeatPassword"],["type","password","name","repeatPassword","required","","ngModel",""],["for","accountType"],["name","accountType","required","","ngModel",""],["value",""],["value","personal"],["value","pro"],["value","business"],["type","submit",3,"disabled"]],template:function(s,a){if(s&1){let o=b();t(0,"nav")(1,"a",1),i(2,"Anterior"),e(),t(3,"a",1),i(4,"Siguiente"),e()(),t(5,"form",2,0),h("ngSubmit",function(G){return w(o),F(a.onSubmit(G))}),t(8,"div")(9,"label",3),i(10,"Usuario:"),e(),f(11,"input",4),c(12,K,1,1),e(),t(13,"div")(14,"label",5),i(15,"Contrase\xF1a:"),e(),f(16,"input",6),c(17,X,1,1),t(18,"label",7),i(19,"Repita contrase\xF1a:"),e(),f(20,"input",8),e(),t(21,"div")(22,"label",9),i(23,"Tipo de cuenta:"),e(),t(24,"select",10)(25,"option",11),i(26,"Selecciones tipo de cuenta"),e(),t(27,"option",12),i(28,"Personal"),e(),t(29,"option",13),i(30,"Pro"),e(),t(31,"option",14),i(32,"Business"),e()()(),t(33,"div")(34,"ul")(35,"li"),i(36),e(),t(37,"li"),i(38),e(),t(39,"li"),i(40),e()()(),t(41,"button",15),i(42,"Enviar"),e()()}if(s&2){let o=v(7);l(),p("routerLink",E(8,j)),l(2),p("routerLink",E(9,z)),l(9),u(12,o.form.controls.username.touched&&o.form.controls.username.invalid?12:-1),l(5),u(17,o.form.controls.password.touched&&o.form.controls.password.invalid?17:-1),l(19),S(a.userData==null?null:a.userData.username),l(2),S(a.userData==null?null:a.userData.accountType),l(2),S(a.userData==null?null:a.userData.password),l(),p("disabled",o.invalid)}},dependencies:[T,D,M,B,L,P,I,q,Q,N,V,O,R,k]});let n=r;return n})();export{ne as default};