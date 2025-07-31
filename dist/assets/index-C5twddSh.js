import{r,j as e,d as w,R as f,C as c,a as m,b as x}from"./index-B6RK4WsZ.js";import{P as y}from"./prism-DJPzwsyN.js";import{C as j}from"./CardHeader-D0mZSqdG.js";const l=a=>{const{value:s,className:d,tag:p="h4",isAmount:v=!1}=a,[t,h]=r.useState(0),i=5e3,n=16;return r.useEffect(()=>{let o;if(s>0){const b=s/(i/n);o=setInterval(()=>{t<s?h(u=>{const g=u+b;return g>s?s:g}):clearInterval(o)},n)}return()=>{clearInterval(o)}},[s,i,n,t]),e.jsx(p,{className:d,children:v?Math.floor(t).toLocaleString("en-IN"):Math.floor(t)})},N=({countValue:a,className:s,tag:d="p",isCountingStart:p})=>{const[v,t]=r.useState(0),h=5e3,i=16;return r.useEffect(()=>{let n;if(p){t(0);const o=a/(h/i);n=setInterval(()=>{t(b=>{const u=b+o;return u>=a?a:u})},i)}return()=>clearInterval(n)},[p,a,h,i]),e.jsx(d,{className:s,children:Math.floor(v)})},P=()=>{r.useEffect(()=>{y.highlightAll()},[]);const[a,s]=r.useState(!0),d=()=>{s(!1),setTimeout(()=>{s(!0)},100)};return e.jsx("div",{children:e.jsxs(w,{fluid:!0,children:[e.jsx(f,{className:"m-1",children:e.jsxs(c,{xs:12,children:[e.jsx("h4",{className:"main-title",children:"Count up"}),e.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[e.jsx("li",{className:"",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:e.jsxs("span",{children:[e.jsx("i",{className:"ph-duotone  ph-briefcase-metal f-s-16"})," Advance UI"]})})}),e.jsx("li",{className:"active",children:e.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Count up"})})]})]})}),e.jsxs(f,{children:[e.jsx(c,{xs:12,children:e.jsxs(m,{children:[e.jsxs(j,{className:"code-header",children:[e.jsx("h5",{children:"Simple"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#simple1","aria-expanded":"false",children:e.jsx("i",{className:"ti ti-code source","data-source":"av1"})}),e.jsxs("div",{className:"text-secondary mt-2",children:["Explore CountUp.js for additional examples. For more examples, visit the official ",e.jsx("a",{href:"https://inorganik.github.io/countUp.js/",className:"text-danger text-d-underline",children:"CountUp.js"})," website."]})]}),e.jsxs(x,{children:[e.jsxs("div",{className:"simple-counter mt-4",children:[e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx("span",{children:"$"}),e.jsx(l,{className:"counter",tag:"p",value:150})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Income"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx(l,{className:"counter",tag:"div",value:85}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-down text-danger"}),"Projects"]})]}),e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx(l,{className:"counter",tag:"p",value:60}),e.jsx("span",{children:"%"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Achievement"]})]})]}),e.jsx("pre",{className:"av1 collapse mt-3",id:"simple1",children:e.jsx("code",{className:"language-html",children:`
<div class="simple-counter">
    <div class="simple">
        <div>
            <span>$</span>
            <p class="counter" data-count="150">0</p>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Income</p>
    </div>
    <div class="simple">
        <div class="counter" data-count="85">0</div>
        <p><i class="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
    </div>
    <div class="simple">
        <div>
            <p class="counter" data-count="60">0</p>
            <span>%</span>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
    </div>
</div>
`})})]})]})}),e.jsx(c,{xs:12,children:e.jsxs(m,{children:[e.jsxs(j,{className:"code-header",children:[e.jsx("h5",{children:"Customized"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#customized1","aria-expanded":"false",children:e.jsx("i",{className:"ti ti-code source","data-source":"av1"})}),e.jsx("div",{className:"text-secondary mt-2",children:"You can enhance CountUp's appearance and behavior by integrating our extended Bootstrap classes."})]}),e.jsxs(x,{children:[e.jsxs("div",{className:"customized-counter mt-4",children:[e.jsxs("div",{className:"customized",children:[e.jsx("i",{className:"ti ti-apps"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx("span",{children:"$"}),e.jsx(l,{className:"counter f-w-500 f-s-30 text-dark",tag:"p",value:500})]}),e.jsx("p",{children:"Respected Companies"})]}),e.jsxs("div",{className:"customized",children:[e.jsx("i",{className:"ti ti-report-analytics"}),e.jsx(l,{className:"counter",tag:"div",value:75}),e.jsx("p",{children:"Analytical Reports"})]}),e.jsxs("div",{className:"customized",children:[e.jsx("i",{className:"ti ti-brand-paypal"}),e.jsxs("div",{className:"d-flex align-items-center",children:[e.jsx(l,{className:"counter f-w-500 f-s-30 text-dark",tag:"p",value:40}),e.jsx("span",{children:"%"})]}),e.jsx("p",{children:"Protected Payments"})]})]}),e.jsx("pre",{className:"av1 collapse mt-3",id:"customized1",children:e.jsx("code",{className:"language-html",children:`
 <div class="customized-counter mt-4">
    <div class="customized">
        <i class="ti ti-apps"></i>
        <div class="d-flex align-items-center">
            <span>$</span>
            <p class="counter f-w-500 f-s-30 text-dark" data-count="500">0</p>
        </div>
        <p>Respected Companies</p>
    </div>
    <div class="customized">
        <i class="ti ti-report-analytics"></i>
        <div class="counter" data-count="75">0</div>
        <p>Analytical Reports</p>
    </div>
    <div class="customized">
        <i class="ti ti-brand-paypal"></i>
        <div class="d-flex align-items-center">
            <p class="counter f-w-500 f-s-30 text-dark" data-count="40">0</p>
            <span>%</span>
        </div>
        <p>Protected Payments</p>
    </div>
</div>
 `})})]})]})}),e.jsx(c,{xs:12,children:e.jsxs(m,{children:[e.jsxs(j,{className:"code-header",children:[e.jsx("h5",{children:"Update Data"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#updatedata1","aria-expanded":"false",children:e.jsx("i",{className:"ti ti-code source","data-source":"av1"})}),e.jsx("div",{className:"text-secondary mt-2",children:"For guidance on resetting a CountUp instance with a new value and configuration to dynamically update the displayed value, consult the official documentation of CountUp.js for detailed API usage and examples."})]}),e.jsxs(x,{children:[e.jsxs("div",{className:"simple-counter mt-4",children:[e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx("span",{children:"$"}),e.jsx(N,{countValue:200,isCountingStart:a,tag:"p",className:"counter update-counter"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Income"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{children:e.jsx(N,{countValue:81,isCountingStart:a,tag:"p",className:"counter update-counter"})}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-down text-danger"}),"Projects"]})]}),e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx(N,{countValue:60,isCountingStart:a,tag:"p",className:"counter update-counter"}),e.jsx("span",{children:"%"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Achievement"]})]})]}),e.jsx("div",{children:e.jsx("button",{className:"btn btn-light-primary",id:"startCounter",onClick:d,children:"Update Data"})})]}),e.jsx("pre",{className:"av1 collapse mt-3",id:"updatedata1",children:e.jsx("code",{className:"language-html",children:`
<div class="simple-counter">
    <div class="simple">
        <div>
            <span>$</span>
            <p class="counter" data-count="150">0</p>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Income</p>
    </div>
    <div class="simple">
        <div class="counter" data-count="85">0</div>
        <p><i class="ti ti-arrow-narrow-down text-danger"></i>Projects</p>
    </div>
    <div class="simple">
        <div>
            <p class="counter" data-count="60">0</p>
            <span>%</span>
        </div>
        <p><i class="ti ti-arrow-narrow-up text-success"></i>Achievement</p>
    </div>
    <div>
        <button class="btn btn-light-primary" id="startCounter">Update Data</button>
    </div>
</div>
`})})]})]})}),e.jsx(c,{xs:12,children:e.jsxs(m,{children:[e.jsxs(j,{className:"code-header",children:[e.jsx("h5",{children:"Under Tab Sections"}),e.jsx("a",{"data-bs-toggle":"collapse",href:"#undertab1","aria-expanded":"false",children:e.jsx("i",{className:"ti ti-code source","data-source":"av1"})}),e.jsx("div",{className:"text-secondary mt-2",children:"Experience a demo featuring CountUp, triggered only when it enters the viewport within a tab container."})]}),e.jsxs(x,{children:[e.jsxs("div",{className:"mt-3 under-tab-section",children:[e.jsxs("ul",{className:"nav nav-tabs app-tabs-primary under-tab justify-content-center",id:"Basic",role:"tablist",children:[e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link active",id:"one-tab","data-bs-toggle":"tab","data-bs-target":"#tab-one",type:"button",role:"tab","aria-controls":"tab-one","aria-selected":"true",children:"Tab-1"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link",id:"two-tab","data-bs-toggle":"tab","data-bs-target":"#tab-two",type:"button",role:"tab","aria-controls":"tab-two","aria-selected":"false",children:"Tab-2"})}),e.jsx("li",{className:"nav-item",role:"presentation",children:e.jsx("button",{className:"nav-link",id:"three-tab","data-bs-toggle":"tab","data-bs-target":"#tab-three",type:"button",role:"tab","aria-controls":"tab-three","aria-selected":"false",children:"Tab-3"})})]}),e.jsxs("div",{className:"tab-content",id:"BasicContent",children:[e.jsx("div",{className:"tab-pane fade show active",id:"tab-one",role:"tabpanel","aria-labelledby":"one-tab",tabIndex:"0",children:e.jsx("div",{className:"simple-counter mt-4",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx("span",{children:"$"}),e.jsx("p",{className:"counter","data-count":"150",children:"0"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Income"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"85",children:"0%"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-down text-danger"}),"Projects"]})]}),e.jsxs("div",{className:"simple",children:[e.jsxs("div",{children:[e.jsx("p",{className:"counter","data-count":"150",children:"0"}),e.jsx("span",{children:"%"})]}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Achievement"]})]})]})})}),e.jsx("div",{className:"tab-pane fade",id:"tab-two",role:"tabpanel","aria-labelledby":"two-tab",tabIndex:"0",children:e.jsx("div",{className:"simple-counter mt-4",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"110",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Income"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"65",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-down text-danger"}),"Projects"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"3200",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Achievement"]})]})]})})}),e.jsx("div",{className:"tab-pane fade",id:"tab-three",role:"tabpanel","aria-labelledby":"three-tab",tabIndex:"0",children:e.jsx("div",{className:"simple-counter mt-4",children:e.jsxs("div",{className:"d-flex gap-3",children:[e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"100",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Income"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"70",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-down text-danger"}),"Projects"]})]}),e.jsxs("div",{className:"simple",children:[e.jsx("div",{className:"counter","data-count":"1200",children:"0"}),e.jsxs("p",{children:[e.jsx("i",{className:"ti ti-arrow-narrow-up text-success"}),"Achievement"]})]})]})})})]})]}),e.jsx("pre",{className:"av1 collapse mt-3",id:"undertab1",children:e.jsx("code",{className:"language-html",children:`
            <div class="simple-counter">
    <ul class="nav nav-tabs app-tabs-primary" id="Basic" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="one-tab" data-bs-toggle="tab"
              data-bs-target="#tab-one" type="button" role="tab" aria-controls="tab-one"
              aria-selected="true">Tab-1</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="two-tab" data-bs-toggle="tab" data-bs-target="#tab-two"
              type="button" role="tab" aria-controls="tab-two" aria-selected="false">Tab-2</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="three-tab" data-bs-toggle="tab" data-bs-target="#tab-three"
              type="button" role="tab" aria-controls="tab-three" aria-selected="false">Tab-3</button>
        </li>
    </ul>
    <div class="tab-content" id="BasicContent">
        <div class="tab-pane fade show active" id="tab-one" role="tabpanel"
        aria-labelledby="one-tab" tabindex="0">
        ...
        </div>
        <div class="tab-pane fade" id="tab-two" role="tabpanel" aria-labelledby="two-tab"
        tabindex="0">
        ...
        </div>
        <div class="tab-pane fade" id="tab-three" role="tabpanel" aria-labelledby="three-tab"
        tabindex="0">
        ...
        </div>
    </div>
</div>

            `})})]})]})}),e.jsx(c,{xs:12,children:e.jsx(m,{children:e.jsxs(x,{children:[e.jsxs("div",{className:"mb-3",children:[e.jsx("h5",{className:"mb-1",children:"Introduction"}),e.jsx("ul",{className:"list-disc ms-3",children:e.jsx("li",{className:"text-secondary",children:e.jsx("a",{href:"#",children:"CountUp.js is a self-reliant, lightweight JavaScript class, perfect for swiftly creating animations that present numerical data in an engaging manner. Refer to the Official Website and GitHub repository for additional insights."})})})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h5",{className:"mb-1",children:"Use"}),e.jsx("ul",{className:"list-disc ms-3",children:e.jsx("li",{className:"text-secondary",children:e.jsx("a",{href:"#",children:"The styling and script bundles for CountUp.js are distinct from our overarching bundle and need manual inclusion and initiation on associated pages."})})}),e.jsx("pre",{className:"",children:e.jsx("code",{className:"language-html",children:'<script src="assets/js/countup.js"><\/script>       '})})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("h5",{className:"mb-1",children:"Initiation"}),e.jsxs("ul",{className:"list-disc ms-3",children:[e.jsx("li",{className:"text-secondary",children:e.jsxs("a",{href:"#",children:["Including CountUp in your project involves adding the HTML attribute ",e.jsx("code",{})," to the CountUp element, accompanied by the target counting value set using. For a comprehensive range of options, including loop parameters and more, please review the detailed choices below."]})}),e.jsx("li",{className:" text-secondary",children:e.jsx("a",{href:"#",children:"You have the ability to programmatically control CountUp instances. To explore additional options for Smooth Scroll, refer to the official plugin site for comprehensive information."})})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h5",{className:"mb-1",children:"Document Markup Guide"}),e.jsx("ul",{className:"list-disc ms-3",children:e.jsx("li",{className:" text-secondary",children:e.jsx("a",{href:"#",children:"Configuring specific settings in CountUp is achieved through HTML attributes. Below are references for each. For a full range of options, please review the official documentation."})})})]})]})})})]})]})})};export{P as default};
