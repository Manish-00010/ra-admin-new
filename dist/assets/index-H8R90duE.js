import{r as p,j as s,d as v,R as c,C as i,a as e,b as o}from"./index-B6RK4WsZ.js";import{P as x}from"./prism-DJPzwsyN.js";import{C as l}from"./CardHeader-D0mZSqdG.js";const j=()=>{p.useEffect(()=>{x.highlightAll(),$(".toast-close").on("click",function(){t()});const t=()=>{$(".app-toast").addClass("d-block")};document.getElementById("toastbtn").onclick=()=>{document.querySelectorAll(".toastbtn").forEach(h=>new bootstrap.Toast(h).show())}},[]);const d=()=>{Toastify({text:"Welcome Back ! This is a Toast Notification",duration:3e3,gravity:"centerToast",position:"center",style:{background:"rgb(var(--secondary),1)"}}).showToast()},n=()=>{Toastify({text:"Welcome Back ! This is a Toast Notification",duration:3e3,gravity:"bottom",position:"bottom",style:{background:"rgb(var(--warning),1)"}}).showToast()},r=()=>{Toastify({text:"Welcome Back ! This is a Toast Notification",duration:3e3,position:"right",style:{background:"rgb(var(--info),1)"}}).showToast()},m=()=>{Toastify({text:"Welcome Back ! This is a Toast Notification",duration:3e3,position:"leftToast",style:{background:"rgb(var(--success),1)"}}).showToast()},b=()=>{Toastify({text:"Welcome Back ! This is a Toast Notification",duration:3e3,position:"center",style:{background:"rgb(var(--primary),1)"}}).showToast()},a=t=>{$("."+t.id).removeClass("d-none"),setTimeout(function(){$("."+t.id).addClass("d-none")},5e3)};return s.jsx("div",{children:s.jsxs(v,{fluid:!0,children:[s.jsx(c,{className:"m-1",children:s.jsxs(i,{xs:12,children:[s.jsx("h4",{className:"main-title",children:"Notifications"}),s.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[s.jsx("li",{className:"",children:s.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:s.jsxs("span",{children:[s.jsx("i",{className:"ph-duotone  ph-briefcase f-s-16"})," Ui kits"]})})}),s.jsx("li",{className:"active",children:s.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Notification"})})]})]})}),s.jsxs(c,{children:[s.jsx(i,{xs:12,children:s.jsxs(e,{children:[s.jsxs(l,{className:"code-header",children:[s.jsx("h5",{children:"Bootstrap Toasts"}),s.jsx("a",{"data-bs-toggle":"collapse",href:"#Notification1","aria-expanded":"false","aria-controls":"Notification1",children:s.jsx("i",{className:"ti ti-code source","data-source":"Notifi1"})})]}),s.jsx(o,{children:s.jsxs("div",{className:"row",children:[s.jsxs("div",{className:"col-lg-4 mb-4 mb-lg-0",children:[s.jsx("h6",{className:"mb-3",children:"Default Toast"}),s.jsxs("div",{className:"toast d-block border-primary border-opacity-25 bg-light-primary",role:"alert","aria-live":"assertive","aria-atomic":"true",children:[s.jsxs("div",{className:"toast-header border-primary border-opacity-25 bg-light-primary",children:[s.jsx("img",{src:"../assets/images/logo/3.png",className:"rounded me-2 h-30 w-30 b-r-4 ",alt:""}),s.jsx("strong",{className:"me-auto",children:"Admin"}),s.jsx("div",{className:"bg-primary pt-1 ms-2 b-r-8",children:s.jsx("button",{type:"button",className:"btn-close m-0 p-2 pt-0 mb-1","data-bs-dismiss":"toast","aria-label":"Close"})})]}),s.jsx("div",{className:"toast-body border-primary border-opacity-25",children:"Hello, world! This is a toast message."})]})]}),s.jsxs("div",{className:"col-lg-4 mb-4 mb-lg-0",children:[s.jsx("h6",{className:"mb-3",children:"Custom Content Toast"}),s.jsx("div",{className:"toast custom-content-toast d-block",role:"alert","aria-live":"assertive","aria-atomic":"true",children:s.jsxs("div",{className:"toast-body",children:["Hello, world! This is a toast message.",s.jsxs("div",{className:"mt-2 pt-2 border-top",children:[s.jsx("button",{type:"button",className:"btn btn-primary ",children:"Take action"})," ",s.jsx("button",{type:"button",className:"btn btn-secondary ","data-bs-dismiss":"toast",children:"Close"})]})]})})]}),s.jsxs("div",{className:"col-lg-4 mb-4 mb-lg-0",children:[s.jsx("h6",{className:"mb-3",children:"Color Schemes Toast"}),s.jsx("div",{className:"toast d-block align-items-center bg-primary border-0 mb-3",role:"alert","aria-live":"assertive","aria-atomic":"true",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"toast-body",children:"Hello, world! This is a toast message."}),s.jsx("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"})]})}),s.jsx("div",{className:"toast d-block align-items-center bg-secondary border-0",role:"alert","aria-live":"assertive","aria-atomic":"true",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"toast-body",children:"Hello, world! This is a toast message."}),s.jsx("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"})]})})]})]})}),s.jsx("pre",{className:"Notifi1 collapse mt-3",id:"Notification1",children:s.jsx("code",{className:"language-html",children:`<div class="card">
  <div class="card-header">
    <h5>Bootstrap Toasts</h5>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-md-4">
        <h6 class="mb-3">Default Toast</h6>
        <div class="toast d-block border-primary border-opacity-25 bg-light-primary" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header border-primary border-opacity-25 bg-light-primary">
            <img src="/assets/images/logo/03.png" class="rounded me-2 h-30 w-30 b-r-4 " alt="">
            <strong class="me-auto">Ra-admin</strong>
            <small>11 mins ago</small>
            <div class="bg-primary pt-1 ms-2 b-r-8">
              <button type="button" class="btn-close m-0 p-2 pt-0 mb-1" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
          </div>
          <div class="toast-body border-primary border-opacity-25">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="mb-3">Custom Content Toast</h6>
        <div class="toast d-block" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            Hello, world! This is a toast message.
            <div class="mt-2 pt-2 border-top">
              <button type="button" class="btn btn-primary ">Take action</button>
              <button type="button" class="btn btn-secondary " data-bs-dismiss="toast">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <h6 class="mb-3">Color Schemes Toast</h6>
        <div class="toast d-block align-items-center bg-primary border-0 mb-3" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
        <div class="toast d-block align-items-center bg-secondary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`})})]})}),s.jsx(i,{xs:12,children:s.jsxs(e,{children:[s.jsxs(l,{className:"code-header",children:[s.jsx("h5",{children:"Placement Toasts"}),s.jsx("a",{"data-bs-toggle":"collapse",href:"#Notification2","aria-expanded":"false","aria-controls":"Notification2",children:s.jsx("i",{className:"ti ti-code source","data-source":"Notifi2"})})]}),s.jsxs(o,{children:[s.jsx("button",{type:"button",className:"btn btn-light-primary",id:"toastbtn",children:"Show Toast"}),s.jsxs("div",{className:"toast toastbtn mt-3 bg-light-primary border-primary border-opacity-25 b-r-4",children:[s.jsxs("div",{className:"toast-header bg-light-primary border-primary border-opacity-25",children:[s.jsx("strong",{className:"me-auto",children:"Toast Header"}),s.jsx("div",{className:"bg-primary d-flex-center b-r-8",children:s.jsx("button",{type:"button",className:"btn-close m-0 p-2","data-bs-dismiss":"toast"})})]}),s.jsx("div",{className:"toast-body",children:s.jsx("p",{children:"Some text inside the toast body"})})]})]}),s.jsx("pre",{className:"Notifi2 collapse mt-3",id:"Notification2",children:s.jsx("code",{className:"language-html",children:`<div class="card">
  <div class="card-header">
    <h5>Placement Toasts</h5>
  </div>
  <div class="card-body">
    <button type="button" class="btn btn-light-primary" id="toastbtn">Show Toast</button>
    <div class="toast toastbtn mt-3 bg-light-primary border-primary border-opacity-25 b-r-4">
      <div class="toast-header bg-light-primary border-primary border-opacity-25">
        <strong class="me-auto">Toast Header</strong>
        <div class="bg-primary d-flex-center b-r-8">
          <button type="button" class="btn-close m-0 p-2" data-bs-dismiss="toast"></button>
        </div>
      </div>
      <div class="toast-body">
        <p>Some text inside the toast body</p>
      </div>
    </div>
  </div>
</div>`})})]})}),s.jsx(i,{xs:12,children:s.jsxs(e,{children:[s.jsxs(l,{className:"code-header",children:[s.jsx("h5",{children:"Position Notification"}),s.jsx("a",{"data-bs-toggle":"collapse",href:"#Notification3","aria-expanded":"false","aria-controls":"Notification3",children:s.jsx("i",{className:"ti ti-code source","data-source":"Notifi3"})}),s.jsx("p",{children:"It is Very Easy to Customize and it uses in website application."})]}),s.jsx(o,{children:s.jsxs("div",{className:"app-toast-button d-flex flex-wrap gap-2",children:[s.jsx("button",{className:"btn btn-light-primary toast_top",onClick:b,children:"Top"}),s.jsx("button",{className:"btn btn-light-secondary toast_center",onClick:d,children:"Center"}),s.jsx("button",{className:"btn btn-light-success toast_left",onClick:m,children:"Left"}),s.jsx("button",{className:"btn btn-light-info",onClick:r,children:"Right"}),s.jsx("button",{className:"btn btn-light-warning",onClick:n,children:"Bottom"})]})}),s.jsx("pre",{className:"Notifi3 collapse mt-3",id:"Notification3",children:s.jsx("code",{className:"language-html",children:`<div class="card">
  <div class="card-header">
    <h5>Position Notification</h5>
    <p>It is Very Easy to Customize and it uses in website application.</p>
  </div>
  <div class="card-body">
    <div class="app-toast-button d-flex flex-wrap gap-2">
      <button class="btn btn-light-primary toast_top" id="new-toast">Top</button>
      <button class="btn btn-light-secondary toast_center" id="center-toast">Center</button>
      <button class="btn btn-light-success toast_left" id="left-toast">Left</button>
      <button class="btn btn-light-info" id="right-toast">Right</button>
      <button class="btn btn-light-warning" id="bottom-toast">Bottom</button>
    </div>
  </div>
</div>`})})]})}),s.jsx(i,{xs:12,children:s.jsxs(e,{children:[s.jsxs(l,{className:"code-header",children:[s.jsx("h5",{children:"Color Notification"}),s.jsx("a",{"data-bs-toggle":"collapse",href:"#Notification4","aria-expanded":"false","aria-controls":"Notification4",children:s.jsx("i",{className:"ti ti-code source","data-source":"Notifi4"})}),s.jsx("p",{children:"It is Very Easy to Customize and it uses in website application."})]}),s.jsx(o,{children:s.jsxs("div",{className:"app-toast-button",children:[s.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[s.jsx("button",{id:"app-toast-primary",className:"btn btn-light-primary toast-primary",onClick:t=>a(t.target),children:"Primary"}),s.jsx("button",{id:"app-toast-secondary",className:"btn btn-light-secondary toast-secondary",onClick:t=>a(t.target),children:"Secondary"}),s.jsx("button",{id:"app-toast-success",className:"btn btn-light-success toast-success",onClick:t=>a(t.target),children:"Success"}),s.jsx("button",{id:"app-toast-danger",className:"btn btn-light-danger toast-danger",onClick:t=>a(t.target),children:"Danger"}),s.jsx("button",{id:"app-toast-warning",className:"btn btn-light-warning toast-warning",onClick:t=>a(t.target),children:"Warning"}),s.jsx("button",{id:"app-toast-info",className:"btn btn-light-info toast-info",onClick:t=>a(t.target),children:"Info"}),s.jsx("button",{id:"app-toast-light",className:"btn btn-light-light toast-light",onClick:t=>a(t.target),children:"Light"}),s.jsx("button",{id:"app-toast-dark",className:"btn btn-light-dark toast-dark",onClick:t=>a(t.target),children:"Dark"})]}),s.jsxs("div",{className:"app-color-toast app-toast-primary d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-primary",children:[s.jsx("i",{className:"ti ti-download f-s-22"})," This is a Primary toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-primary"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-secondary d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsx("div",{className:"toast-icon text-secondary"}),s.jsxs("div",{className:"toast-title text-secondary",children:[s.jsx("i",{className:"ti ti-butterfly f-s-22"}),"This is a Secondary toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-secondary"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-success d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsx("div",{className:"toast-icon text-success"}),s.jsxs("div",{className:"toast-title text-success",children:[s.jsx("i",{className:"ti ti-award f-s-22"})," This is a success toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-success"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-danger d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-danger",children:[s.jsx("i",{className:"ti ti-power f-s-22"})," This is a Danger toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-danger"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-warning d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-warning",children:[s.jsx("i",{className:"ti ti-alert-triangle f-s-22"})," This is a Warning toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-warning"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-info d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-info",children:[s.jsx("i",{className:"ti ti-inbox f-s-22"})," This is a Info toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-info"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-light d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-dark",children:[s.jsx("i",{className:"ti ti-download f-s-22"})," This is a Light toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-dark"})})]}),s.jsxs("div",{className:"app-color-toast app-toast-dark d-none",children:[s.jsxs("div",{className:"toast-item",children:[s.jsxs("div",{className:"toast-title text-dark",children:[s.jsx("i",{className:"ti ti-world-download f-s-22"})," This is a Dark toast message."]}),s.jsx("div",{className:"toast-line"})]}),s.jsx("div",{className:"toast-close",children:s.jsx("i",{className:"fa fa-close text-dark"})})]})]})}),s.jsx("pre",{className:"Notifi4 collapse mt-3",id:"Notification4",children:s.jsx("code",{className:"language-html",children:`<div class="card">
  <div class="card-header">
    <h5>Position Notification</h5>
    <p>It is Very Easy to Customize and it uses in website application.</p>
  </div>
  <div class="card-body">
    <div class="app-toast-button">
      <div class="d-flex gap-2 flex-wrap">
        <button id="app-toast-primary" class="btn btn-light-primary toast-primary" onclick="handleToast(this)">Primary</button>
        <button id="app-toast-secondary" class="btn btn-light-secondary toast-secondary" onclick="handleToast(this)">Secondary</button>
        <button id="app-toast-success" class="btn btn-light-success toast-success" onclick="handleToast(this)">Success</button>
        <button id="app-toast-danger" class="btn btn-light-danger toast-danger" onclick="handleToast(this)">Danger</button>
        <button id="app-toast-warning" class="btn btn-light-warning toast-warning" onclick="handleToast(this)">Warning</button>
        <button id="app-toast-info" class="btn btn-light-info toast-info" onclick="handleToast(this)">Info</button>
        <button id="app-toast-light" class="btn btn-light-light toast-light" onclick="handleToast(this)">Light</button>
        <button id="app-toast-dark" class="btn btn-light-dark toast-dark" onclick="handleToast(this)">Dark</button>
      </div>
      <div class="app-color-toast app-toast-primary d-none">
        <div class="toast-item">
          <div class="toast-title text-primary">
            <i class="ti ti-download f-s-22"></i> This is a Primary toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-primary"></i></div>
      </div>
      <div class="app-color-toast app-toast-secondary d-none">
        <div class="toast-item">
          <div class="toast-icon text-secondary"></div>
          <div class="toast-title text-secondary">
            <i class="ti ti-butterfly f-s-22"></i>This is a Secondary toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-secondary"></i></div>
      </div>
      <div class="app-color-toast app-toast-success d-none">
        <div class="toast-item">
          <div class="toast-icon text-success"></div>
          <div class="toast-title text-success">
            <i class="ti ti-award f-s-22"></i> This is a success toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-success"></i></div>
      </div>
      <div class="app-color-toast app-toast-danger d-none">
        <div class="toast-item">
          <div class="toast-title text-danger">
            <i class="ti ti-power f-s-22"></i> This is a Danger toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-danger"></i></div>
      </div>
      <div class="app-color-toast app-toast-warning d-none">
        <div class="toast-item">
          <div class="toast-title text-warning">
            <i class="ti ti-alert-triangle f-s-22"></i> This is a Warning toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-warning"></i></div>
      </div>
      <div class="app-color-toast app-toast-info d-none">
        <div class="toast-item">
          <div class="toast-title text-info">
            <i class="ti ti-inbox f-s-22"></i> This is a Info toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-info"></i></div>
      </div>
      <div class="app-color-toast app-toast-light d-none">
        <div class="toast-item">
          <div class="toast-title text-dark">
            <i class="ti ti-download f-s-22"></i> This is a Light toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-dark"></i></div>
      </div>
      <div class="app-color-toast app-toast-dark d-none">
        <div class="toast-item">
          <div class="toast-title text-dark">
            <i class="ti ti-world-download f-s-22"></i> This is a Dark toast message.
          </div>
          <div class="toast-line"></div>
        </div>
        <div class="toast-close"><i class="fa fa-close text-dark"></i></div>
      </div>
    </div>
  </div>
</div>`})})]})})]})]})})};export{j as default};
