import{a as Z}from"./chunk-SU6K5TTW.js";import{$a as oe,Aa as d,Ga as se,Ia as q,K as N,L as h,M as ie,N as L,Oa as g,P as y,S as ne,W as M,Xa as f,Y as $,Z as u,a as p,b as m,ca as W,eb as ae,fa as v,gb as z,ha as re,j as Q,ja as _,ka as E,o as ee,ta as o,u as te,wa as C}from"./chunk-LESZ26IY.js";var ye=(()=>{let e=class e{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(n){return new(n||e)(o(C),o(_))},e.\u0275dir=u({type:e});let i=e;return i})(),S=(()=>{let e=class e extends ye{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=v(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),A=new y(""),Pe={provide:A,useExisting:h(()=>xe),multi:!0},xe=(()=>{let e=class e extends S{writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=v(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,s){n&1&&g("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[f([Pe]),d]});let i=e;return i})(),ke={provide:A,useExisting:h(()=>ve),multi:!0};function Ge(){let i=Z()?Z().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Te=new y(""),ve=(()=>{let e=class e extends ye{constructor(t,n,s){super(t,n),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ge())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(n){return new(n||e)(o(C),o(_),o(Te,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){n&1&&g("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[f([ke]),d]});let i=e;return i})();function je(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var Y=new y(""),_e=new y("");function Be(i){return je(i.value)?{required:!0}:null}function le(i){return null}function Ce(i){return i!=null}function Ve(i){return oe(i)?Q(i):i}function De(i){let e={};return i.forEach(r=>{e=r!=null?p(p({},e),r):e}),Object.keys(e).length===0?null:e}function be(i,e){return e.map(r=>r(i))}function Ue(i){return!i.validate}function Ae(i){return i.map(e=>Ue(e)?e:r=>e.validate(r))}function Re(i){if(!i)return null;let e=i.filter(Ce);return e.length==0?null:function(r){return De(be(r,e))}}function K(i){return i!=null?Re(Ae(i)):null}function He(i){if(!i)return null;let e=i.filter(Ce);return e.length==0?null:function(r){let t=be(r,e).map(Ve);return te(t).pipe(ee(De))}}function J(i){return i!=null?He(Ae(i)):null}function ue(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Le(i){return i._rawValidators}function $e(i){return i._rawAsyncValidators}function X(i){return i?Array.isArray(i)?i:[i]:[]}function x(i,e){return Array.isArray(i)?i.includes(e):i===e}function de(i,e){let r=X(e);return X(i).forEach(n=>{x(r,n)||r.push(n)}),r}function ce(i,e){return X(e).filter(r=>!x(i,r))}var k=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=K(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=J(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},D=class extends k{get formDirective(){return null}get path(){return null}},b=class extends k{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},G=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},We={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Bt=m(p({},We),{"[class.ng-submitted]":"isSubmitted"}),Ut=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(b,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){n&2&&q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),Rt=(()=>{let e=class e extends G{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(D,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){n&2&&q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var F="VALID",P="INVALID",V="PENDING",w="DISABLED";function Me(i){return(B(i)?i.validators:i)||null}function qe(i){return Array.isArray(i)?K(i):i||null}function Ee(i,e){return(B(e)?e.asyncValidators:i)||null}function ze(i){return Array.isArray(i)?J(i):i||null}function B(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ze(i,e,r){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new N(1e3,"");if(!t[r])throw new N(1001,"")}function Xe(i,e,r){i._forEachChild((t,n)=>{if(r[n]===void 0)throw new N(1002,"")})}var T=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===F}get invalid(){return this.status===P}get pending(){return this.status==V}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(de(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(de(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ce(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(t=>{t.disable(m(p({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(p({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=F,this._forEachChild(t=>{t.enable(m(p({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(p({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===F||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:F}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let r=Ve(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((t,n)=>t&&t._find(n),this)}getError(e,r){let t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?P:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(P)?P:F}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){B(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=qe(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ze(this._rawAsyncValidators)}},j=class extends T{constructor(e,r,t){super(Me(r),Ee(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){Xe(this,!0,e),Object.keys(e).forEach(t=>{Ze(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(t=>{let n=this.controls[t];n&&n.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,n)=>{t.reset(e?e[n]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>t._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,t,n)=>((t.enabled||this.disabled)&&(r[n]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((n,s)=>{t=r(t,n,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var U=new y("CallSetDisabledState",{providedIn:"root",factory:()=>R}),R="always";function Ye(i,e){return[...e.path,i]}function Fe(i,e,r=R){we(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Je(i,e),et(i,e),Qe(i,e),Ke(i,e)}function he(i,e){i.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function Ke(i,e){if(e.valueAccessor.setDisabledState){let r=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(r),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(r)})}}function we(i,e){let r=Le(i);e.validator!==null?i.setValidators(ue(r,e.validator)):typeof r=="function"&&i.setValidators([r]);let t=$e(i);e.asyncValidator!==null?i.setAsyncValidators(ue(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();he(e._rawValidators,n),he(e._rawAsyncValidators,n)}function Je(i,e){e.valueAccessor.registerOnChange(r=>{i._pendingValue=r,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ie(i,e)})}function Qe(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ie(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ie(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function et(i,e){let r=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};i.registerOnChange(r),e._registerOnDestroy(()=>{i._unregisterOnChange(r)})}function tt(i,e){i==null,we(i,e)}function it(i,e){if(!i.hasOwnProperty("model"))return!1;let r=i.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function nt(i){return Object.getPrototypeOf(i.constructor)===S}function rt(i,e){i._syncPendingControls(),e.forEach(r=>{let t=r.control;t.updateOn==="submit"&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function st(i,e){if(!e)return null;Array.isArray(e);let r,t,n;return e.forEach(s=>{s.constructor===ve?r=s:nt(s)?t=s:n=s}),n||t||r||null}var ot={provide:D,useExisting:h(()=>at)},I=Promise.resolve(),at=(()=>{let e=class e extends D{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new E,this.form=new j({},K(t),J(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){I.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),Fe(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){I.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){I.then(()=>{let n=this._findContainer(t.path),s=new j({});tt(s,t),n.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){I.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){I.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,rt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(n){return new(n||e)(o(Y,10),o(_e,10),o(U,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,s){n&1&&g("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:[M.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[f([ot]),d]});let i=e;return i})();function fe(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function pe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var lt=class extends T{constructor(e=null,r,t){super(Me(r),Ee(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),B(r)&&(r.nonNullable||r.initialValueIsDefault)&&(pe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){fe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){fe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){pe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ut={provide:b,useExisting:h(()=>dt)},ge=Promise.resolve(),dt=(()=>{let e=class e extends b{constructor(t,n,s,a,l,c){super(),this._changeDetectorRef=l,this.callSetDisabledState=c,this.control=new lt,this._registered=!1,this.name="",this.update=new E,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=st(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),it(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Fe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){ge.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,s=n!==0&&z(n);ge.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ye(t,this._parent):[t]}};e.\u0275fac=function(n){return new(n||e)(o(D,9),o(Y,10),o(_e,10),o(A,10),o(ae,8),o(U,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[M.None,"disabled","isDisabled"],model:[M.None,"ngModel","model"],options:[M.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[f([ut]),d,W]});let i=e;return i})(),Lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var ct={provide:A,useExisting:h(()=>ft),multi:!0};var ht=(()=>{let e=class e{constructor(){this._accessors=[]}add(t,n){this._accessors.push([t,n])}remove(t){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===t){this._accessors.splice(n,1);return}}select(t){this._accessors.forEach(n=>{this._isSameGroup(n,t)&&n[1]!==t&&n[1].fireUncheck(t.value)})}_isSameGroup(t,n){return t[0].control?t[0]._parent===n._control._parent&&t[1].name===n.name:!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=ie({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ft=(()=>{let e=class e extends S{constructor(t,n,s,a){super(t,n),this._registry=s,this._injector=a,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=ne(U,{optional:!0})??R}ngOnInit(){this._control=this._injector.get(b),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(t){this._state=t===this.value,this.setProperty("checked",this._state)}registerOnChange(t){this._fn=t,this.onChange=()=>{t(this.value),this._registry.select(this)}}setDisabledState(t){(this.setDisabledStateFired||t||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",t),this.setDisabledStateFired=!0}fireUncheck(t){this.writeValue(t)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}};e.\u0275fac=function(n){return new(n||e)(o(C),o(_),o(ht),o(re))},e.\u0275dir=u({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,s){n&1&&g("change",function(){return s.onChange()})("blur",function(){return s.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[f([ct]),d]});let i=e;return i})();var pt={provide:A,useExisting:h(()=>Oe),multi:!0};function Se(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function gt(i){return i.split(":")[0]}var Oe=(()=>{let e=class e extends S{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),s=Se(n,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=gt(t);return this._optionMap.has(n)?this._optionMap.get(n):t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=v(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,s){n&1&&g("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([pt]),d]});let i=e;return i})(),$t=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Se(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(_),o(C),o(Oe,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),mt={provide:A,useExisting:h(()=>Ne),multi:!0};function me(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function yt(i){return i.split(":")[0]}var Ne=(()=>{let e=class e extends S{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let s=t.map(a=>this._getOptionId(a));n=(a,l)=>{a._setSelected(s.indexOf(l.toString())>-1)}}else n=(s,a)=>{s._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let s=[],a=n.selectedOptions;if(a!==void 0){let l=a;for(let c=0;c<l.length;c++){let O=l[c],H=this._getOptionValue(O.value);s.push(H)}}else{let l=n.options;for(let c=0;c<l.length;c++){let O=l[c];if(O.selected){let H=this._getOptionValue(O.value);s.push(H)}}}this.value=s,t(s)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=yt(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=v(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,s){n&1&&g("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[f([mt]),d]});let i=e;return i})(),Wt=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(me(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(me(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(_),o(C),o(Ne,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var vt=(()=>{let e=class e{constructor(){this._validator=le}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):le,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,features:[W]});let i=e;return i})();var _t={provide:Y,useExisting:h(()=>Ct),multi:!0};var Ct=(()=>{let e=class e extends vt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=z,this.createValidator=t=>Be}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=v(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,s){n&2&&se("required",s._enabled?"":null)},inputs:{required:"required"},features:[f([_t]),d]});let i=e;return i})();var Vt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=$({type:e}),e.\u0275inj=L({});let i=e;return i})();var qt=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:U,useValue:t.callSetDisabledState??R}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=$({type:e}),e.\u0275inj=L({imports:[Vt]});let i=e;return i})();export{xe as a,ve as b,Ut as c,Rt as d,at as e,dt as f,Lt as g,ft as h,Oe as i,$t as j,Wt as k,Ct as l,qt as m};
