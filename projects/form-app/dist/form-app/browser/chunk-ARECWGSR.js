import{a as N,b as V,c as q,d as P,e as G,f as R,g as I,h as Q,l as T,m as L}from"./chunk-WGRBQLEO.js";import{d as w,e as k,g as A}from"./chunk-SU6K5TTW.js";import{Fa as p,Ha as C,Ja as c,Ka as t,La as e,Ma as l,Na as h,Oa as D,Pa as S,Ra as E,Sa as b,Ta as x,Ua as v,Va as n,Wa as d,X as _,Ya as F,Za as M,da as g,ea as y,sa as m}from"./chunk-LESZ26IY.js";var H=["form"],J=["personalForm"],O=()=>["/access"];function z(o,a){o&1&&(t(0,"p"),n(1,"El nombre es obligatorio"),e())}function B(o,a){if(o&1&&p(0,z,2,0,"p"),o&2){S();let s=v(5);c(0,s.form.controls.name.errors!=null&&s.form.controls.name.errors.required?0:-1)}}function K(o,a){o&1&&(t(0,"p"),n(1,"El apellido es obligatorio"),e())}function U(o,a){if(o&1&&p(0,K,2,0,"p"),o&2){S();let s=v(5);c(0,s.form.controls.surname.errors!=null&&s.form.controls.surname.errors.required?0:-1)}}var te=(()=>{let a=class a{onSubmit(f){console.log(f),console.log(this.personalForm.value),this.userData=this.personalForm.value}};a.\u0275fac=function(u){return new(u||a)},a.\u0275cmp=_({type:a,selectors:[["isdi-personal"]],viewQuery:function(u,i){if(u&1&&(E(H,7),E(J,7)),u&2){let r;b(r=x())&&(i.form=r.first),b(r=x())&&(i.personalForm=r.first)}},standalone:!0,features:[F],decls:63,vars:10,consts:[["form","","personalForm","ngForm"],["routerLinkActive","router-link-active",3,"routerLink"],[3,"ngSubmit"],["for","name"],["type","text","name","name","required","","ngModel",""],["for","surname"],["type","text","name","surname","required","","ngModel",""],["for","birthdate"],["type","date","name","birthdate","ngModel",""],["type","radio","name","radioGroup","value","male","ngModel",""],["for","option1"],["type","radio","name","radioGroup","value","female","ngModel",""],["for","option2"],["type","radio","name","radioGroup","value","other","ngModel",""],["for","option3"],["type","radio","name","radioGroup","value","no-tell","ngModel",""],["for","option4"],["for","email"],["type","email","name","email","required","","ngModel",""],["type","checkbox","name","newsletter","value","S\xED","ngModel",""],["for","accept"],["type","checkbox","name","newsletterAccept","value","No","ngModel",""],["for","rejcts"],["type","submit","value","Submit"]],template:function(u,i){if(u&1){let r=h();t(0,"nav")(1,"a",1),n(2,"Siguiente"),e()(),t(3,"form",2,0),D("ngSubmit",function(j){return g(r),y(i.onSubmit(j))}),t(6,"div")(7,"label",3),n(8,"Nombre:"),e(),l(9,"input",4),p(10,B,1,1),e(),t(11,"div")(12,"label",5),n(13,"Apellido:"),e(),l(14,"input",6),p(15,U,1,1),e(),t(16,"div")(17,"label",7),n(18,"Fecha de nacimiento:"),e(),l(19,"input",8),e(),t(20,"div")(21,"p"),n(22,"G\xE9nero:"),e(),l(23,"input",9),t(24,"label",10),n(25,"Hombre"),e(),l(26,"input",11),t(27,"label",12),n(28,"Mujer"),e(),l(29,"input",13),t(30,"label",14),n(31,"Otro"),e(),l(32,"input",15),t(33,"label",16),n(34,"Prefiero no decirlo"),e()(),t(35,"div")(36,"label",17),n(37,"Email:"),e(),l(38,"input",18),e(),t(39,"div")(40,"p"),n(41,"Ap\xFAntate a nuestra newsletter"),e(),l(42,"input",19),t(43,"label",20),n(44,"S\xED"),e(),l(45,"input",21),t(46,"label",22),n(47,"No"),e()(),t(48,"div")(49,"ul")(50,"li"),n(51),e(),t(52,"li"),n(53),e(),t(54,"li"),n(55),e(),t(56,"li"),n(57),e(),t(58,"li"),n(59),e(),t(60,"li"),n(61),e()()(),l(62,"input",23),e()}if(u&2){let r=v(5);m(),C("routerLink",M(9,O)),m(9),c(10,r.form.controls.name.touched&&r.form.controls.name.invalid?10:-1),m(5),c(15,r.form.controls.surname.touched&&r.form.controls.surname.invalid?15:-1),m(36),d(i.userData==null?null:i.userData.name),m(2),d(i.userData==null?null:i.userData.surname),m(2),d(i.userData==null?null:i.userData.birthdate),m(2),d(i.userData==null?null:i.userData.radioGroup),m(2),d(i.userData==null?null:i.userData.email),m(2),d(i.userData==null?null:i.userData.birthdate)}},dependencies:[A,w,k,L,I,V,N,Q,q,P,T,R,G]});let o=a;return o})();export{te as default};