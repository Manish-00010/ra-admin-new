import{r as t,j as a,C as n,a as i,b as O,d as E,R as g}from"./index-B6RK4WsZ.js";import"./RadarSkipPoints-D9QfFpyU.js";import{C as r}from"./CardHeader-D0mZSqdG.js";import{P as F}from"./prism-DJPzwsyN.js";const z={success:(d="")=>{Toastify({text:d,duration:1e3,position:"right",style:{background:"rgb(var(--success),1)"}}).showToast()}},l=({badge:d})=>{t.useEffect(()=>{$(document).on("click",".btn-click",function(){$(".code-container").toggleClass("d-block").toggleClass("d-none")}),$(document).on("click",".box-close",function(){$(".code-container").addClass("d-none").removeClass("d-block")}),$(".list-preview").on("click",function(b){$(".code-preview-popup").removeClass("d-none"),$(".list-item-preview").removeClass("active-preview");let o=$(this).parent();o.addClass("active-preview");let p=o.attr("data-header"),h=o.find("code").html(),v=o.find("code").text();$(".header-preview-text").text(p),$("#previewCodeText").html(h),$(".code-preview-div").html(v)})},[]);const c=(b="")=>{navigator.clipboard.writeText(b),z.success("Copied Successfully!!")};return a.jsxs("li",{className:"list-item-preview d-flex gap-2","data-header":"alert-primary",children:[a.jsx("div",{className:"list-preview w-100",children:a.jsx("span",{className:"collapse-name",children:d.header})}),a.jsxs("span",{className:"collapse-icons d-flex gap-2",children:[a.jsx("span",{onClick:()=>c(d.className),children:a.jsx("i",{className:"ti ti-copy"})}),a.jsx("span",{onClick:()=>c(d.code),children:a.jsx("i",{className:"ti ti-code"})})]}),a.jsx("div",{id:`${d.header}className`,className:"opacity-0 w-0 h-0",children:d.className}),a.jsx("pre",{className:"opacity-0 w-0 h-0 p-0",children:a.jsx("code",{className:"language-html",id:`${d.header}Code`,children:d.code})})]},d.header)},u=[{className:"avtar",header:"avtar-primary",code:`
      <span class="bg-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-secondary",code:`
      <span class="bg-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-success",code:`
      <span class="bg-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-danger",code:`
      <span class="bg-danger h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-warning",code:`
      <span class="bg-warning h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-info",code:`
      <span class="bg-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-light",code:`
      <span class="bg-light h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar-dark",code:`
      <span class="bg-dark h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-primary",code:`
      <span class="text-outline-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-secondary",code:`
      <span class="text-outline-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-success",code:`
      <span class="text-outline-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-danger",code:`
      <span class="text-outline-danger h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-warning",code:`
      <span class="text-outline-warning h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-info",code:`
      <span class="text-outline-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-light",code:`
      <span class="text-outline-light h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"text-outline-dark",code:`
      <span class="text-outline-dark h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{className:"avtar",header:"avtar images",code:`
      <div class="d-flex gap-3 flex-wrap">
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
          <img src="/assets/images/avtar/1.png" alt="" class="img-fluid">
        </div>
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-secondary">
          <img src="/assets/images/avtar/2.png" alt="" class="img-fluid">
        </div>
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
          <img src="/assets/images/avtar/3.png" alt="" class="img-fluid">
        </div>
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-info">
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid">
        </div>
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success">
          <img src="/assets/images/avtar/5.png" alt="" class="img-fluid">
        </div>
        <div class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger">
          <img src="/assets/images/avtar/6.png" alt="" class="img-fluid">
        </div>
      </div>
    `},{header:"avtar size",className:"avtar-size",code:`
      <div class="d-flex gap-3 flex-wrap">
        <span class="bg-secondary h-30 w-30 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-success h-35 w-35 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-info h-40 w-40 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-warning h-45 w-45 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="bg-danger h-50 w-50 d-flex-center b-r-50">
          <i class="fa-solid fa-user"></i>
        </span>
      </div>
    `},{header:"text-light-primary",className:"text-light-primary",code:`
      <span class="text-light-primary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-secondary",className:"text-light-secondary",code:`
      <span class="text-light-secondary h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-success",className:"text-light-success",code:`
      <span class="text-light-success h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-danger",className:"text-light-danger",code:`
      <span class="text-light-danger h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-warning",className:"text-light-warning",code:`
      <span class="text-light-warning h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-info",className:"text-light-info",code:`
      <span class="text-light-info h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-light",className:"text-light-light",code:`
      <span class="text-light-light h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"text-light-dark",className:"text-light-dark",code:`
      <span class="text-light-dark h-45 w-45 d-flex-center b-r-50">
        <i class="fa-solid fa-user"></i>
      </span>
    `},{header:"avtar radious",className:"avtar-radious",code:`
      <div class="d-flex gap-3 flex-wrap">
        <span class="text-light-primary h-45 w-45 d-flex-center b-r-0">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="text-light-secondary h-45 w-45 d-flex-center b-r-6">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="text-light-success h-45 w-45 d-flex-center b-r-10">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="text-light-info h-45 w-45 d-flex-center b-r-14">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="text-light-warning h-45 w-45 d-flex-center b-r-20">
          <i class="fa-solid fa-user"></i>
        </span>
        <span class="text-light-danger h-45 w-45 d-flex-center b-r-30">
          <i class="fa-solid fa-user"></i>
        </span>
      </div>
    `},{header:"Avtar group",className:"avtar-group",code:`
    <div class="d-flex gap-3 flex-wrap">
      <ul class="avatar-group">
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary b-2-light" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-success b-2-light" data-bs-toggle="tooltip" data-bs-title="Eva Bailey">
          <img src="/assets/images/avtar/5.png" alt="" class="img-fluid">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-danger b-2-light" data-bs-toggle="tooltip" data-bs-title="Michael Hughes">
          <img src="/assets/images/avtar/6.png" alt="" class="img-fluid">
        </li>
        <li class="text-bg-secondary h-35 w-35 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="10 More">
          10+
        </li>
      </ul>
      <ul class="avatar-group">
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-danger b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/4.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-success b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-success border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/1.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-warning b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-warning border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/2.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="h-45 w-45 d-flex-center b-r-50 text-bg-info b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres">
          <span class="position-absolute top-0 start-2 p-1 bg-info border border-light rounded-circle"></span>
          <img src="/assets/images/avtar/3.png" alt="" class="img-fluid b-r-50 overflow-hidden">
        </li>
        <li class="text-bg-primary h-35 w-35 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="5 More">
          5+
        </li>
      </ul>
    </div>
  `}],m=[{header:"accordions",className:"app-accordion accordion-primary",code:`
      <div class="card">
        <div class="card-body">
          <div class="accordion app-accordion accordion-primary">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `},{header:"accordions-outline",className:"app-accordion accordion-outline-secondary",code:`
      <div class="card">
        <div class="card-body">
          <div class="accordion app-accordion accordion-outline-secondary">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneOutline" aria-expanded="true" aria-controls="collapseOneOutline">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOneOutline" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwooutline" aria-expanded="false" aria-controls="collapseTwooutline">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwooutline" class="accordion-collapse collapse" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeoutline" aria-expanded="false" aria-controls="collapseThreeoutline">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThreeoutline" class="accordion-collapse collapse" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `},{header:"accordions-light",className:"app-accordion accordion-light-success",code:`
      <div class="accordion app-accordion accordion-light-success" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse show" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    `},{header:"accordions",className:"app-accordion accordion-primary",code:`
      <div class="card">
        <div class="card-body">
          <div class="accordion app-accordion accordion-primary">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `},{header:"accordions-outline",className:"app-accordion accordion-outline-secondary",code:`
      <div class="card">
        <div class="card-body">
          <div class="accordion app-accordion accordion-outline-secondary">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneOutline" aria-expanded="true" aria-controls="collapseOneOutline">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOneOutline" class="accordion-collapse collapse show" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwooutline" aria-expanded="false" aria-controls="collapseTwooutline">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwooutline" class="accordion-collapse collapse" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeoutline" aria-expanded="false" aria-controls="collapseThreeoutline">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThreeoutline" class="accordion-collapse collapse" data-bs-parent="#accordionExampleoutlineoutline">
                <div class="accordion-body">
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `},{header:"accordions-light",className:"app-accordion accordion-light-success",code:`
      <div class="accordion app-accordion accordion-light-success" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse show" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    `},{header:"No icon indicators",className:"app-accordion accordion-light-success",code:`
      <div class="card">
          <div class="card-body">
            <div class="accordion app-accordion accordion-light-danger app-accordion-no-icon" id="accordionnoiconExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseOne" aria-expanded="true" aria-controls="noicon-collapseOne">
                    <i class="ti ti-message-report me-1 f-s-20"></i> What happens if I just pay my ticket?
                  </button>
                </h2>
                <div id="noicon-collapseOne" class="accordion-collapse collapse show">
                  <div class="accordion-body">
                    Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseTwo" aria-expanded="false" aria-controls="noicon-collapseTwo">
                    <i class="ti ti-ticket me-1 f-s-20"></i> Can this ticket affect my job?
                  </button>
                </h2>
                <div id="noicon-collapseTwo" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#noicon-collapseThree" aria-expanded="false" aria-controls="noicon-collapseThree">
                    <i class="ti ti-transition-bottom me-1 f-s-20"></i> How long does it take to resolve my case?
                  </button>
                </h2>
                <div id="noicon-collapseThree" class="accordion-collapse collapse">
                  <div class="accordion-body">
                    It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    `}],f=[{header:"alert-primary",className:"alert alert-primary",code:'<div class="alert alert-primary" role="alert"> Simple primary alert -check it out </div>'},{header:"alert-secondary",className:"alert alert-secondary",code:'<div class="alert alert-secondary" role="alert"> Simple secondary alert -check it out </div>'},{header:"alert-success",className:"alert alert-success",code:'<div class="alert alert-success" role="alert"> Simple success alert -check it out </div>'},{header:"alert-danger",className:"alert alert-danger",code:'<div class="alert alert-danger" role="alert"> Simple danger alert -check it out </div>'},{header:"alert-warning",className:"alert alert-warning",code:'<div class="alert alert-warning" role="alert"> Simple warning alert -check it out </div>'},{header:"alert-info",className:"alert alert-info",code:'<div class="alert alert-info" role="alert"> Simple info alert -check it out </div>'},{header:"alert-light",className:"alert alert-light",code:'<div class="alert alert-light" role="alert"> Simple light alert -check it out </div>'},{header:"alert-dark",className:"alert alert-dark",code:'<div class="alert alert-dark" role="alert"> Simple dark alert -check it out </div>'},{header:"alert-outline-primary",className:"alert alert-outline-primary",code:'<div class="alert alert-outline-primary" role="alert"> outline primary alert -check it out </div>'},{header:"alert-outline-secondary",className:"alert alert-outline-secondary",code:'<div class="alert alert-outline-secondary" role="alert"> outline secondary alert -check it out </div>'},{header:"alert-outline-success",className:"alert alert-outline-success",code:'<div class="alert alert-outline-success" role="alert"> outline success alert -check it out </div>'},{header:"alert-outline-danger",className:"alert alert-outline-danger",code:'<div class="alert alert-outline-danger" role="alert"> outline danger alert -check it out </div>'},{header:"alert-outline-warning",className:"alert alert-outline-warning",code:'<div class="alert alert-outline-warning" role="alert"> outline warning alert -check it out </div>'},{header:"alert-outline-info",className:"alert alert-outline-info",code:'<div class="alert alert-outline-info" role="alert"> outline info alert -check it out </div>'},{header:"alert-outline-light",className:"alert alert-outline-light",code:'<div class="alert alert-outline-light" role="alert"> outline light alert -check it out </div>'},{header:"alert-outline-dark",className:"alert alert-outline-dark",code:'<div class="alert alert-outline-dark" role="alert"> outline dark alert -check it out </div>'},{header:"alert-light-primary",className:"alert alert-light-primary",code:'<div class="alert alert-light-primary" role="alert"> light primary alert -check it out </div>'},{header:"alert-light-secondary",className:"alert alert-light-secondary",code:'<div class="alert alert-light-secondary" role="alert"> light secondary alert -check it out </div>'},{header:"alert-light-success",className:"alert alert-light-success",code:'<div class="alert alert-light-success" role="alert"> light success alert -check it out </div>'},{header:"alert-light-danger",className:"alert alert-light-danger",code:'<div class="alert alert-light-danger" role="alert"> light danger alert -check it out </div>'},{header:"alert-light-warning",className:"alert alert-light-warning",code:'<div class="alert alert-light-warning" role="alert"> light warning alert -check it out </div>'},{className:"alert alert-light-border-secondary",header:"alert alert-light-border-secondary",code:'<div class="alert alert-light-border-secondary" role="alert"> Light-border-secondary alert -check it out  </div>'},{className:"alert alert-light-border-success",header:"alert alert-light-border-success",code:'<div class="alert alert-light-border-success" role="alert"> Light-border-success alert -check it out  </div>'},{className:"alert alert-light-border-danger",header:"alert alert-light-border-danger",code:'<div class="alert alert-light-border-danger" role="alert"> Light-border-danger alert -check it out  </div>'},{className:"alert alert-light-border-warning",header:"alert alert-light-border-warning",code:'<div class="alert alert-light-border-warning" role="alert"> Light-border-warning alert -check it out  </div>'},{className:"alert alert-light-border-info",header:"alert alert-light-border-info",code:'<div class="alert alert-light-border-info" role="alert"> Light-border-info alert -check it out  </div>'},{className:"alert alert-light-border-light",header:"alert alert-light-border-light",code:'<div class="alert alert-light-border-light" role="alert"> Light-border-light alert -check it out  </div>'},{className:"alert alert-light-border-dark",header:"alert alert-light-border-dark",code:'<div class="alert alert-light-border-dark" role="alert"> Light-border-dark alert -check it out  </div>'},{className:"alert alert-border-primary",header:"alert alert-border-primary",code:'<div class="alert alert-border-primary" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-secondary",header:"alert alert-border-secondary",code:'<div class="alert alert-border-secondary" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-success",header:"alert alert-border-success",code:'<div class="alert alert-border-success" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-danger",header:"alert alert-border-danger",code:'<div class="alert alert-border-danger" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-warning",header:"alert alert-border-warning",code:'<div class="alert alert-border-warning" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-info",header:"alert alert-border-info",code:'<div class="alert alert-border-info" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-light",header:"alert alert-border-light",code:'<div class="alert alert-border-light" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-border-dark",header:"alert alert-border-dark",code:'<div class="alert alert-border-dark" role="alert">  Alert with left slide border - check out!  </div>'},{className:"alert alert-label alert-label-primary",header:"alert alert-label alert-label-primary",code:'<div class="alert alert-label alert-label-primary"><p class="mb-0"><i class="ti ti-download label-icon label-icon-primary"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-secondary",header:"alert alert-label alert-label-secondary",code:'<div class="alert alert-label alert-label-secondary"><p class="mb-0"><i class="ti ti-download label-icon label-icon-secondary"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-success",header:"alert alert-label alert-label-success",code:'<div class="alert alert-label alert-label-success"><p class="mb-0"><i class="ti ti-download label-icon label-icon-success"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-danger",header:"alert alert-label alert-label-danger",code:'<div class="alert alert-label alert-label-danger"><p class="mb-0"><i class="ti ti-download label-icon label-icon-danger"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-warning",header:"alert alert-label alert-label-warning",code:'<div class="alert alert-label alert-label-warning"><p class="mb-0"><i class="ti ti-download label-icon label-icon-warning"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-info",header:"alert alert-label alert-label-info",code:'<div class="alert alert-label alert-label-info"><p class="mb-0"><i class="ti ti-download label-icon label-icon-info"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-light",header:"alert alert-label alert-label-light",code:'<div class="alert alert-label alert-label-light"><p class="mb-0"><i class="ti ti-download label-icon label-icon-light"></i> Alert with lable icons - check out!</p><div>'},{className:"alert alert-label alert-label-dark",header:"alert alert-label alert-label-dark",code:'<div class="alert alert-label alert-label-dark"><p class="mb-0"><i class="ti ti-download label-icon label-icon-dark"></i> Alert with lable icons - check out!</p><div>'},{className:"alert custom-alert",header:"Custom Alerts",code:`<div class="alert alert-primary alert-dismissible" role="alert"><div class="d-flex justify-content-between"> <img src="/assets/images/icons/cookie-.png" class="w-35 h-35 me-2" alt="image"> <p class="mb-0"> We have Cookies! We use it to ensure you get the best experience on our website and service </p> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div> </div><br/><div class="alert alert-label alert-label-success justify-content-between" role="alert"><p class="mb-0"> <i class="ti ti-garden-cart label-icon label-icon-success"></i> your order is delayed </p><button type="button" class="btn btn-sm btn-success" data-bs-dismiss="alert"> Accept</button> </div><br/><div class="alert alert-border-info" role="alert"><h6> <i class="ti ti-info-circle f-s-18 me-2 text-info"></i> New Version is now availble </h6><p> With this new Version you have accesss to more customization features and file export options. </p><div class="text-end"> <a href="" class="link-primary text-d-underline" data-bs-dismiss="alert">Don't allow</a> <a href="" class="link-primary text-d-underline ms-2">Allow</a> </div> </div><br/><div class="alert custom-alert p-0" role="alert"><div class="alert-header"> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> </div><div class="alert-body"><h4 class="mb-0 text-center mb-3"> <img src="/assets/images/icons/warning.png" class="w-40 h-40" alt="image"> Under maintenance </h4><p class="mb-3"> Our team is currently checking some errors in this area. We dont't recommend changing any of your settings until the next update. </p><div class="text-end"> <button type="button" class="btn btn-warning">Get more info</button> </div> </div> </div>`}],w=[{header:"background-primary",className:"bg-primary",code:'<button type="button" class="btn bg-primary text-white">bg-primary</button>'},{header:"background-secondary",className:"bg-secondary",code:'<button type="button" class="btn bg-secondary text-white">bg-secondary</button>'},{header:"background-success",className:"bg-success",code:'<button type="button" class="btn bg-success text-white">bg-success</button>'},{header:"background-danger",className:"bg-danger",code:'<button type="button" class="btn bg-danger text-white">bg-danger</button>'},{header:"background-warning",className:"bg-warning",code:'<button type="button" class="btn bg-warning text-white">bg-warning</button>'},{header:"background-info",className:"bg-info",code:'<button type="button" class="btn bg-info text-white">bg-info</button>'},{header:"background-light",className:"bg-light",code:'<button type="button" class="btn bg-light text-white">bg-light</button>'},{header:"background-dark",className:"bg-dark",code:'<button type="button" class="btn bg-dark text-white">bg-dark</button>'},{header:"shades900",className:"bg-primary-900",code:'<button type="button" class="btn bg-primary-900">bg-primary-900</button>'},{header:"shades800",className:"bg-primary-800",code:'<button type="button" class="btn bg-primary-800">bg-primary-800</button>'},{header:"shades700",className:"bg-primary-700",code:'<button type="button" class="btn bg-primary-700">bg-primary-700</button>'},{header:"shades600",className:"bg-primary-600",code:'<button type="button" class="btn bg-primary-600">bg-primary-600</button>'},{header:"shades500",className:"bg-primary-500",code:'<button type="button" class="btn bg-primary-500">bg-primary-500</button>'},{header:"shades400",className:"bg-primary-400",code:'<button type="button" class="btn bg-primary-400">bg-primary-400</button>'},{header:"shades300",className:"bg-primary-300",code:'<button type="button" class="btn bg-primary-300">bg-primary-300</button>'},{header:"bg-outline-primary",className:"bg-outline-primary",code:'<button type="button" class="btn bg-outline-primary">bg-outline-primary</button>'},{header:"bg-outline-secondary",className:"bg-outline-secondary",code:'<button type="button" class="btn bg-outline-secondary">bg-outline-secondary</button>'},{header:"bg-outline-success",className:"bg-outline-success",code:'<button type="button" class="btn bg-outline-success">bg-outline-success</button>'},{header:"bg-outline-danger",className:"bg-outline-danger",code:'<button type="button" class="btn bg-outline-danger">bg-outline-danger</button>'},{header:"bg-outline-warning",className:"bg-outline-warning",code:'<button type="button" class="btn bg-outline-warning">bg-outline-warning</button>'},{header:"bg-outline-info",className:"bg-outline-info",code:'<button type="button" class="btn bg-outline-info">bg-outline-info</button>'},{header:"bg-outline-light",className:"bg-outline-light",code:'<button type="button" class="btn bg-outline-light">bg-outline-light</button>'},{header:"bg-outline-dark",className:"bg-outline-dark",code:'<button type="button" class="btn bg-outline-dark">bg-outline-dark</button>'},{header:"bg-light-primary",className:"bg-light-primary",code:'<button type="button" class="btn bg-light-primary">bg-light-primary</button>'},{header:"bg-light-secondary",className:"bg-light-secondary",code:'<button type="button" class="btn bg-light-secondary">bg-light-secondary</button>'},{header:"bg-light-success",className:"bg-light-success",code:'<button type="button" class="btn bg-light-success">bg-light-success</button>'},{header:"bg-light-danger",className:"bg-light-danger",code:'<button type="button" class="btn bg-light-danger">bg-light-danger</button>'},{header:"bg-light-warning",className:"bg-light-warning",code:'<button type="button" class="btn bg-light-warning">bg-light-warning</button>'},{header:"bg-light-info",className:"bg-light-info",code:'<button type="button" class="btn bg-light-info">bg-light-info</button>'},{header:"bg-light-light",className:"bg-light-light",code:'<button type="button" class="btn bg-light-light">bg-light-light</button>'},{header:"bg-light-dark",className:"bg-light-dark",code:'<button type="button" class="btn bg-light-dark">bg-light-dark</button>'}],y=[{header:"primary",className:"badge text-bg-primary",code:'<span class="badge text-bg-primary">Primary</span>'},{header:"secondary",className:"badge text-bg-secondary",code:'<span class="badge text-bg-secondary">Secondary</span>'},{header:"success",className:"badge text-bg-success",code:'<span class="badge text-bg-success">Success</span>'},{header:"danger",className:"badge text-bg-danger",code:'<span class="badge text-bg-danger">Danger</span>'},{header:"warning",className:"badge text-bg-warning",code:'<span class="badge text-bg-warning">Warning</span>'},{header:"info",className:"badge text-bg-info",code:'<span class="badge text-bg-info">Info</span>'},{header:"light",className:"badge text-bg-light",code:'<span class="badge text-bg-light">Light</span>'},{header:"dark",className:"badge text-bg-dark",code:'<span class="badge text-bg-dark">Dark</span>'},{header:"badge text-outline-primary",className:"badge text-outline-primary",code:'<span class="badge text-outline-primary">Primary</span>'},{header:"badge text-outline-secondary",className:"badge text-outline-secondary",code:'<span class="badge text-outline-secondary">Secondary</span>'},{header:"badge text-outline-success",className:"badge text-outline-success",code:'<span class="badge text-outline-success">Success</span>'},{header:"badge text-outline-danger",className:"badge text-outline-danger",code:'<span class="badge text-outline-danger">Danger</span>'},{header:"badge text-outline-warning",className:"badge text-outline-warning",code:'<span class="badge text-outline-warning">Warning</span>'},{header:"badge text-outline-info",className:"badge text-outline-info",code:'<span class="badge text-outline-info">Info</span>'},{header:"badge text-outline-dark",className:"badge text-outline-dark",code:'<span class="badge text-outline-dark">Dark</span>'},{header:"badge text-light-primary",className:"badge text-light-primary",code:'<span class="badge text-light-primary">Primary</span>'},{header:"badge text-light-secondary",className:"badge text-light-secondary",code:'<span class="badge text-light-secondary">Secondary</span>'},{header:"badge text-light-success",className:"badge text-light-success",code:'<span class="badge text-light-success">Success</span>'},{header:"badge text-light-danger",className:"badge text-light-danger",code:'<span class="badge text-light-danger">Danger</span>'},{header:"badge text-light-warning",className:"badge text-light-warning",code:'<span class="badge text-light-warning">Warning</span>'},{header:"badge text-light-info",className:"badge text-light-info",code:'<span class="badge text-light-info">Info</span>'},{header:"badge text-light-light",className:"badge text-light-light",code:'<span class="badge text-light-light">Light</span>'},{header:"badge text-light-dark",className:"badge text-light-dark",code:'<span class="badge text-light-dark">Dark</span>'},{header:"badges position",className:"",code:`
      <div class="d-flex gap-3 flex-wrap">
        <button type="button" class="btn btn-outline-danger position-relative">
          Offline
          <span class="position-absolute top-0 start-0 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">Offline</span>
          </span>
        </button>
        <br/>
        <button type="button" class="btn btn-outline-warning position-relative">
          Busy
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-warning border border-light rounded-circle">
            <span class="visually-hidden">Busy</span>
          </span>
        </button>
        <br/><br/>
        <button type="button" class="btn btn-outline-success position-relative">
          Online
          <span class="position-absolute top-100 start-0 translate-middle p-1 bg-success border border-light rounded-circle">
            <span class="visually-hidden">Online</span>
          </span>
        </button>
        <br/>
        <button type="button" class="btn btn-outline-secondary position-relative">
          Disable
          <span class="position-absolute top-100 start-100 translate-middle p-1 bg-secondary border border-light rounded-circle">
            <span class="visually-hidden">Disable</span>
          </span>
        </button>
        </div>
    `},{header:"badges icons",className:"",code:`
      <div class="d-flex gap-3 flex-wrap">
        <a href="#" class="position-relative bg-light-primary px-2 py-1 b-r-10">
          <i class="ti ti-shopping-cart f-s-22"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-primary rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
        </a>
        <a href="#" class="position-relative bg-light-secondary px-2 py-1 b-r-10">
          <i class="ti ti-line-dashed f-s-22"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-secondary rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
        </a>
        <a href="#" class="position-relative bg-light-success px-2 py-1 b-r-10">
          <i class="ti ti-speakerphone f-s-22"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-success rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
        </a>
        <a href="#" class="position-relative bg-light-danger px-2 py-1 b-r-10">
          <i class="ti ti-mail f-s-22"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
        </a>
        <a href="#" class="position-relative bg-light-dark px-2 py-1 b-r-10">
          <i class="ti ti-moon-filled f-s-22"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-dark rounded-circle animate__animated animate__fadeIn animate__infinite animate__fast"></span>
        </a>
      </div>
    `},{header:"badges button",className:"",code:`
      <div class="d-flex gap-4 flex-wrap">
        <button type="button" class="btn btn-light-primary">
          Notifications <span class="badge text-bg-primary badge-notification">4</span>
        </button>
        <button type="button" class="btn btn-light-secondary position-relative">
          Disable
          <span class="position-absolute top-0 start-100 translate-middle p-2 bg-secondary border border-light rounded-circle">
            <span class="visually-hidden">Disable</span>
          </span>
        </button>
        <button type="button" class="btn btn-light-success position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success badge-notification">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        <button type="button" class="btn btn-light-danger position-relative">
          Unread
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger badge-notification">
            2
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    `}],x=[{className:"btn btn-primary",header:"btn-primary",code:'<button type="button" class="btn btn-primary">Primary</button>'},{className:"btn btn-secondary",header:"btn-secondary",code:'<button type="button" class="btn btn-secondary">Secondary</button>'},{className:"btn btn-success",header:"btn-success",code:'<button type="button" class="btn btn-success">Success</button>'},{className:"btn btn-danger",header:"btn-danger",code:'<button type="button" class="btn btn-danger">Danger</button>'},{className:"btn btn-warning",header:"btn-warning",code:'<button type="button" class="btn btn-warning">Warning</button>'},{className:"btn btn-info",header:"btn-info",code:'<button type="button" class="btn btn-info">Info</button>'},{className:"btn btn-light",header:"btn-light",code:'<button type="button" class="btn btn-light">Light</button>'},{className:"btn btn-dark",header:"btn-dark",code:'<button type="button" class="btn btn-dark">Dark</button>'},{className:"btn btn-outline-primary",header:"btn-outline-primary",code:'<button type="button" class="btn btn-outline-primary">Primary</button>'},{className:"btn btn-outline-secondary",header:"btn-outline-secondary",code:'<button type="button" class="btn btn-outline-secondary">Secondary</button>'},{className:"btn btn-outline-success",header:"btn-outline-success",code:'<button type="button" class="btn btn-outline-success">Success</button>'},{className:"btn btn-outline-danger",header:"btn-outline-danger",code:'<button type="button" class="btn btn-outline-danger">Danger</button>'},{className:"btn btn-outline-warning",header:"btn-outline-warning",code:'<button type="button" class="btn btn-outline-warning">Warning</button>'},{className:"btn btn-outline-info",header:"btn-outline-info",code:'<button type="button" class="btn btn-outline-info">Info</button>'},{className:"btn btn-outline-light",header:"btn-outline-light",code:'<button type="button" class="btn btn-outline-light">Light</button>'},{className:"btn btn-outline-dark",header:"btn-outline-dark",code:'<button type="button" class="btn btn-outline-dark">Dark</button>'},{className:"btn btn-light-primary",header:"btn-light-primary",code:'<button type="button" class="btn btn-light-primary">Primary</button>'},{className:"btn btn-light-secondary",header:"btn-light-secondary",code:'<button type="button" class="btn btn-light-secondary">Secondary</button>'},{className:"btn btn-light-success",header:"btn-light-success",code:'<button type="button" class="btn btn-light-success">Success</button>'},{className:"btn btn-light-danger",header:"btn-light-danger",code:'<button type="button" class="btn btn-light-danger">Danger</button>'},{className:"btn btn-light-warning",header:"btn-light-warning",code:'<button type="button" class="btn btn-light-warning">Warning</button>'},{className:"btn btn-light-info",header:"btn-light-info",code:'<button type="button" class="btn btn-light-info">Info</button>'},{className:"btn btn-light-light",header:"btn-light-light",code:'<button type="button" class="btn btn-light-light">Light</button>'},{className:"btn btn-light-dark",header:"btn-light-dark",code:'<button type="button" class="btn btn-light-dark">Dark</button>'},{className:"btn btn-primary icon-btn b-r-4",header:"icon-btn",code:'<button type="button" class="btn btn-primary icon-btn b-r-4"><i class="ti ti-capture"></i></button>'},{className:"btn btn-facebook icon-btn b-r-22",header:"btn-facebook",code:'<button type="button" class="btn btn-facebook icon-btn b-r-22"><i class="ti ti-brand-facebook text-white"></i></button>'},{className:"btn btn-twitter icon-btn b-r-22",header:"btn-twitter",code:'<button type="button" class="btn btn-twitter icon-btn b-r-22"><i class="ti ti-brand-twitter text-white"></i></button>'},{className:"btn btn-pinterest icon-btn b-r-22",header:"btn-pinterest",code:'<button type="button" class="btn btn-pinterest icon-btn b-r-22"><i class="ti ti-brand-pinterest text-white"></i></button>'},{className:"btn btn-linkedin icon-btn b-r-22",header:"btn-linkedin",code:'<button type="button" class="btn btn-linkedin icon-btn b-r-22"><i class="ti ti-brand-linkedin text-white"></i></button>'},{className:"btn btn-reddit icon-btn b-r-22",header:"btn-reddit",code:'<button type="button" class="btn btn-reddit icon-btn b-r-22"><i class="ti ti-brand-reddit text-white"></i></button>'},{className:"btn btn-whatsapp icon-btn b-r-22",header:"btn-whatsapp",code:'<button type="button" class="btn btn-whatsapp icon-btn b-r-22"><i class="ti ti-brand-whatsapp text-white"></i></button>'},{className:"btn btn-gmail icon-btn b-r-22",header:"btn-gmail",code:'<button type="button" class="btn btn-gmail icon-btn b-r-22"><i class="ti ti-brand-gmail text-white"></i></button>'},{className:"btn btn-telegram icon-btn b-r-22",header:"btn-telegram",code:'<button type="button" class="btn btn-telegram icon-btn b-r-22"><i class="ti ti-brand-telegram text-white"></i></button>'},{className:"btn btn-youtube icon-btn b-r-22",header:"btn-youtube",code:'<button type="button" class="btn btn-youtube icon-btn b-r-22"><i class="ti ti-brand-youtube text-white"></i></button>'},{className:"btn btn-vimeo icon-btn b-r-22",header:"btn-vimeo",code:'<button type="button" class="btn btn-vimeo icon-btn b-r-22"><i class="ti ti-brand-vimeo text-white"></i></button>'},{className:"btn btn-behance icon-btn b-r-22",header:"btn-behance",code:'<button type="button" class="btn btn-behance icon-btn b-r-22"><i class="ti ti-brand-behance text-white"></i></button>'},{className:"btn btn-github icon-btn b-r-22",header:"btn-github",code:'<button type="button" class="btn btn-github icon-btn b-r-22"><i class="ti ti-brand-github text-white"></i></button>'},{className:"btn btn-skype icon-btn b-r-22",header:"btn-skype",code:'<button type="button" class="btn btn-skype icon-btn b-r-22"><i class="ti ti-brand-skype text-white"></i></button>'},{className:"btn btn-snapchat icon-btn b-r-22",header:"btn-snapchat",code:'<button type="button" class="btn btn-snapchat icon-btn b-r-22"><i class="ti ti-brand-snapchat text-white"></i></button>'}],N=[{className:"card hover-effect",header:"card",code:'<div class="card hover-effect"><div class="card-header"><h6>My Profile</h6></div><div class="card-body"><p>...</p></div><div class="card-footer"><div class="row"><div class="col-6"><i class="ti ti-heart-filled text-danger f-s-16 m-r-5"></i><span> 60 likes</span></div><div class="col-6"><ul class="avatar-group float-end"><li class="h-25 w-25 d-flex-center b-r-50 text-bg-danger b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres"><img src="/assets/images/avtar/4.png" alt="" class="img-fluid b-r-50 overflow-hidden"></li><li class="h-25 w-25 d-flex-center b-r-50 text-bg-info b-2-light position-relative" data-bs-toggle="tooltip" data-bs-title="Sabrina Torres"><img src="/assets/images/avtar/3.png" alt="" class="img-fluid b-r-50 overflow-hidden"></li><li class="text-bg-primary h-25 w-25 d-flex-center b-r-50" data-bs-toggle="tooltip" data-bs-title="5 More">5+</li></ul></div></div></div></div>'},{className:"card hover-effect card-primary",header:"card-primary",code:'<div class="card hover-effect card-primary"><div class="card-header"><h5>primary card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-secondary",header:"card-secondary",code:'<div class="card hover-effect card-secondary"><div class="card-header"><h5>secondary card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-success",header:"card-success",code:'<div class="card hover-effect card-success"><div class="card-header"><h5>success card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-danger",header:"card-danger",code:'<div class="card hover-effect card-danger"><div class="card-header"><h5>danger card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-warning",header:"card-warning",code:'<div class="card hover-effect card-warning"><div class="card-header"><h5>warning card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-info",header:"card-info",code:'<div class="card hover-effect card-info"><div class="card-header"><h5>info card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-light",header:"card-light",code:'<div class="card hover-effect card-light"><div class="card-header"><h5>light card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-dark",header:"card-dark",code:'<div class="card hover-effect card-dark"><div class="card-header"><h5>dark card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-primary",header:"card-outline-primary",code:'<div class="card hover-effect card-outline-primary"><div class="card-header"><h5>Outline card-outline-primary card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-secondary",header:"card-outline-secondary",code:'<div class="card hover-effect card-outline-secondary"><div class="card-header"><h5>Outline card-outline-secondary card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-success",header:"card-outline-success",code:'<div class="card hover-effect card-outline-success"><div class="card-header"><h5>Outline card-outline-success card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-danger",header:"card-outline-danger",code:'<div class="card hover-effect card-outline-danger"><div class="card-header"><h5>Outline card-outline-danger card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-warning",header:"card-outline-warning",code:'<div class="card hover-effect card-outline-warning"><div class="card-header"><h5>Outline card-outline-warning card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-info",header:"card-outline-info",code:'<div class="card hover-effect card-outline-info"><div class="card-header"><h5>Outline card-outline-info card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-light",header:"card-outline-light",code:'<div class="card hover-effect card-outline-light"><div class="card-header"><h5>Outline card-outline-light card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"card hover-effect card-outline-dark",header:"card-outline-dark",code:'<div class="card hover-effect card-outline-dark"><div class="card-header"><h5>Outline card-outline-dark card</h5></div><div class="card-body"><h6>Card body</h6><p>...</p></div></div>'},{className:"col-lg-8 offset-lg-2",header:"icon-bg",code:'<div class="col-lg-8 offset-lg-2"><div class="card hover-effect card-primary"><div class="card-body"><i class="ti ti-alarm icon-bg"></i><h6>Card With icon</h6><p>With supporting text below lead-in to additional content below as a natural.</p></div></div></div>'},{className:"card hover-effect border-primary border-top border-4",header:"border-top",code:'<div class="card hover-effect border-primary border-top border-4"><div class="card-body"><h6>Card With Top border</h6><p>With supporting text below lead-in to additional content below as a natural.</p></div></div>'},{className:"card hover-effect border-secondary border-bottom border-4",header:"border-bottom",code:'<div class="card hover-effect border-secondary border-bottom border-4"><div class="card-body"><h6>Card With Bottom border</h6><p>With supporting text below lead-in to additional content below as a natural.</p></div></div>'},{className:"card hover-effect border-success border-start border-4",header:"border-start",code:'<div class="card hover-effect border-success border-start border-4"><div class="card-body"><h6>Card With Start border</h6><p>With supporting text below lead-in to additional content below as a natural.</p></div></div>'},{className:"card hover-effect border-danger border-end border-4",header:"border-end",code:'<div class="card hover-effect border-danger border-end border-4"><div class="card-body"><h6>Card With End border</h6><p>With supporting text below lead-in to additional content below as a natural.</p></div></div>'}],k=[{header:"app-divider-v",className:"app-divider-v",code:'<div class="app-divider-v"></div>'},{header:"app-divider-v dotted",className:"app-divider-v dotted",code:'<div class="app-divider-v dotted"></div>'},{header:"app-divider-v dashed",className:"app-divider-v dashed",code:'<div class="app-divider-v dashed"></div>'},{header:"app-divider-h",className:"app-divider-h",code:'<div class="app-divider-h"></div>'},{header:"app-divider-h dotted",className:"app-divider-h dotted",code:'<div class="app-divider-h dotted"></div>'},{header:"app-divider-h dashed",className:"app-divider-h dashed",code:'<div class="app-divider-h dashed"></div>'},{header:"app-divider-v justify-content-start",className:"app-divider-v",code:'<div class="app-divider-v" style="justify-content: flex-start;"></div>'},{header:"app-divider-v justify-content-center",className:"app-divider-v",code:'<div class="app-divider-v" style="justify-content: center;"></div>'},{header:"app-divider-v justify-content-end",className:"app-divider-v",code:'<div class="app-divider-v" style="justify-content: flex-end;"></div>'},{header:"app-divider-h align-items-start",className:"app-divider-h",code:'<div class="card h-100"><div class="card-body divider-body d-flex"><div class="app-divider-h align-items-start"></div></div></div>'},{header:"app-divider-h align-items-center",className:"app-divider-h",code:'<div class="card h-100"><div class="card-body divider-body d-flex"><div class="app-divider-h align-items-center"></div></div></div>'},{header:"app-divider-h align-items-end",className:"app-divider-h",code:'<div class="card h-100"><div class="card-body divider-body d-flex"><div class="app-divider-h align-items-end"></div></div></div>'},{header:"app-divider-v primary",className:"app-divider-v primary",code:'<div class="app-divider-v primary"></div>'},{header:"app-divider-v secondary",className:"app-divider-v secondary",code:'<div class="app-divider-v secondary"></div>'},{header:"app-divider-v success",className:"app-divider-v success",code:'<div class="app-divider-v success"></div>'},{header:"app-divider-v danger",className:"app-divider-v danger",code:'<div class="app-divider-v danger"></div>'},{header:"app-divider-v warning",className:"app-divider-v warning",code:'<div class="app-divider-v warning"></div>'},{header:"app-divider-v info",className:"app-divider-v info",code:'<div class="app-divider-v info"></div>'},{header:"app-divider-v light",className:"app-divider-v light",code:'<div class="app-divider-v light"></div>'},{header:"app-divider-v dark",className:"app-divider-v dark",code:'<div class="app-divider-v dark"></div>'},{header:"app-divider-h primary",className:"app-divider-h primary",code:'<div class="app-divider-h primary"></div>'},{header:"app-divider-h secondary",className:"app-divider-h secondary",code:'<div class="app-divider-h secondary"></div>'},{header:"app-divider-h success",className:"app-divider-h success",code:'<div class="app-divider-h success"></div>'},{header:"app-divider-h danger",className:"app-divider-h danger",code:'<div class="app-divider-h danger"></div>'},{header:"app-divider-h warning",className:"app-divider-h warning",code:'<div class="app-divider-h warning"></div>'},{header:"app-divider-h info",className:"app-divider-h info",code:'<div class="app-divider-h info"></div>'},{header:"app-divider-h light",className:"app-divider-h light",code:'<div class="app-divider-h light"></div>'},{header:"app-divider-h dark",className:"app -divider-h dark",code:'<div class="app-divider-h dark"></div>'}],j=[{className:"app-dropdown",header:"app-dropdown",code:`<div class="card">
  <div class="card-body d-flex flex-wrap gap-2">
    <div class="app-dropdown">
      <button class="btn btn-primary border-0 " type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        Clickable Submenu
      </button>
      <div class="dropdown-menu mb-3">
        <a href="#" class="dropdown-item">
          <span> Action</span>
          <i class="ti ti-user-plus ms-auto"></i>
        </a>
        <hr class="dropdown-divider">
        <a class="dropdown-item border-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>More Option</span>
          <i class="ti ti-arrow-badge-right ms-auto"></i>
        </a>
        <div class="dropdown-menu sub-menu">
          <a href="#" class="dropdown-item">
            <span> Action</span>
            <i class="ti ti-user-plus ms-auto"></i>
          </a>
          <a href="#" class="dropdown-item">
            <span>Another action</span>
            <i class="ti ti-circles-relation ms-auto"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="hover-dropdown app-hover-dropdown">
      <button class="btn btn-primary dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
        Hoverable Dropdown
      </button>
      <ul class="dropdown-menu bg-dark">
        <li class="dropdown-item">
          <a href="#">
            <span> Action</span>
          </a>
          <i class="ti ti-user-plus ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Another action</span>
          </a>
          <i class="ti ti-circles-relation ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Something else here</span>
          </a>
          <i class="ti ti-message-circle ms-auto"></i>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li class="hover-dropdown">
          <a role="button" class="dropdown-item waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
            More Option
          </a>
          <ul class="dropdown-menu hover-submenu bg-dark">
            <li class="dropdown-item">
              <a href="#">
                <span> Action</span>
              </a>
              <i class="ti ti-user-plus ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Another action</span>
              </a>
              <i class="ti ti-circles-relation ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Something else here</span>
              </a>
              <i class="ti ti-message-circle ms-auto"></i>
            </li>
          </ul>
        </li>

      </ul>
    </div>

  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown primary",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    primary <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown",code:`<div class="card">
  <div class="card-body d-flex flex-wrap gap-2">
    <div class="app-dropdown">
      <button class="btn btn-primary border-0 " type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
        Clickable Submenu
      </button>
      <div class="dropdown-menu mb-3">
        <a href="#" class="dropdown-item">
          <span> Action</span>
          <i class="ti ti-user-plus ms-auto"></i>
        </a>
        <hr class="dropdown-divider">
        <a class="dropdown-item border-0" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>More Option</span>
          <i class="ti ti-arrow-badge-right ms-auto"></i>
        </a>
        <div class="dropdown-menu sub-menu">
          <a href="#" class="dropdown-item">
            <span> Action</span>
            <i class="ti ti-user-plus ms-auto"></i>
          </a>
          <a href="#" class="dropdown-item">
            <span>Another action</span>
            <i class="ti ti-circles-relation ms-auto"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="hover-dropdown app-hover-dropdown">
      <button class="btn btn-primary dropdown-toggle waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
        Hoverable Dropdown
      </button>
      <ul class="dropdown-menu bg-dark">
        <li class="dropdown-item">
          <a href="#">
            <span> Action</span>
          </a>
          <i class="ti ti-user-plus ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Another action</span>
          </a>
          <i class="ti ti-circles-relation ms-auto"></i>
        </li>
        <li class="dropdown-item">
          <a href="#">
            <span>Something else here</span>
          </a>
          <i class="ti ti-message-circle ms-auto"></i>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li class="hover-dropdown">
          <a role="button" class="dropdown-item waves-effect waves-light" data-bs-toggle="dropdown" data-trigger="hover" aria-expanded="false">
            More Option
          </a>
          <ul class="dropdown-menu hover-submenu bg-dark">
            <li class="dropdown-item">
              <a href="#">
                <span> Action</span>
              </a>
              <i class="ti ti-user-plus ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Another action</span>
              </a>
              <i class="ti ti-circles-relation ms-auto"></i>
            </li>
            <li class="dropdown-item">
              <a href="#">
                <span>Something else here</span>
              </a>
              <i class="ti ti-message-circle ms-auto"></i>
            </li>
          </ul>
        </li>

      </ul>
    </div>

  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown primary",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    primary <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown secondary",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    secondary <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown success",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    success <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown danger",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    danger <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown warning",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    warning <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown info",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    info <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown light",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    light <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"app-dropdown",header:"app-dropdown dark",code:`<div class="btn-group btn-rtl">
  <button type="button" class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    dark <i class="mdi mdi-chevron-down"></i>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>`},{className:"dropdown-menu",header:"dropdown-menu menu-primary",code:`<div class="app-dropdown">
  <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    <i class="ti ti-dots"></i>
  </button>
  <ul class="dropdown-menu menu-primary show">
    <li class="dropdown-item d-flex justify-content-between">
      <span> Action</span>
      <i class="ti ti-user-plus"></i>
    </li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Another action</span>
      <i class="ti ti-circles-relation"></i>
    </li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Something else here</span>
      <i class="ti ti-message-circle"></i>
    </li>
    <li class="dropdown-divider"></li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Settings</span>
      <i class="ti ti-settings"></i>
    </li>
  </ul>
</div>`},{className:"dropdown-menu",header:"dropdown-menu menu-secondary",code:`<div class="app-dropdown">
  <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
    <i class="ti ti-dots"></i>
  </button>
  <ul class="dropdown-menu menu-secondary show">
    <li class="dropdown-item d-flex justify-content-between">
      <span> Action</span>
      <i class="ti ti-user-plus"></i>
    </li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Another action</span>
      <i class="ti ti-circles-relation"></i>
    </li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Something else here</span>
      <i class="ti ti-message-circle"></i>
    </li>
    <li class="dropdown-divider"></li>
    <li class="dropdown-item d-flex justify-content-between">
      <span>Settings</span>
      <i class="ti ti-settings"></i>
    </li>
  </ul>
</div>`},{className:"dropdown-menu",header:"dropdown-menu menu-warning",code:`
      <div class="app-dropdown">
        <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <i class="ti ti-dots"></i>
        </button>
        <ul class="dropdown-menu menu-warning show">
          <li class="dropdown-item d-flex justify-content-between">
            <span> Action</span>
            <i class="ti ti-user-plus"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Another action</span>
            <i class="ti ti-circles-relation"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Something else here</span>
            <i class="ti ti-message-circle"></i>
          </li>
          <li class="dropdown-divider"></li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Settings</span>
            <i class="ti ti-settings"></i>
          </li>
        </ul>
      </div>
    `},{className:"dropdown-menu",header:"dropdown-menu menu-info",code:`
      <div class="app-dropdown">
        <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <i class="ti ti-dots"></i>
        </button>
        <ul class="dropdown-menu menu-info show">
          <li class="dropdown-item d-flex justify-content-between">
            <span> Action</span>
            <i class="ti ti-user-plus"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Another action</span>
            <i class="ti ti-circles-relation"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Something else here</span>
            <i class="ti ti-message-circle"></i>
          </li>
          <li class="dropdown-divider"></li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Settings</span>
            <i class="ti ti-settings"></i>
          </li>
        </ul>
      </div>
    `},{className:"dropdown-menu",header:"dropdown-menu menu-light",code:`
      <div class="app-dropdown">
        <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <i class="ti ti-dots"></i>
        </button>
        <ul class="dropdown-menu menu-light show">
          <li class="dropdown-item d-flex justify-content-between">
            <span> Action</span>
            <i class="ti ti-user-plus"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Another action</span>
            <i class="ti ti-circles-relation"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Something else here</span>
            <i class="ti ti-message-circle"></i>
          </li>
          <li class="dropdown-divider"></li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Settings</span>
            <i class="ti ti-settings"></i>
          </li>
        </ul>
      </div>
    `},{className:"dropdown-menu",header:"dropdown-menu menu-dark",code:`
      <div class="app-dropdown">
        <button class="btn border-0 icon-btn" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
          <i class="ti ti-dots"></i>
        </button>
        <ul class="dropdown-menu menu-dark show">
          <li class="dropdown-item d-flex justify-content-between">
            <span> Action</span>
            <i class="ti ti-user-plus"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Another action</span>
            <i class="ti ti-circles-relation"></i>
          </li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Something else here</span>
            <i class="ti ti-message-circle"></i>
          </li>
          <li class="dropdown-divider"></li>
          <li class="dropdown-item d-flex justify-content-between">
            <span>Settings</span>
            <i class="ti ti-settings"></i>
          </li>
        </ul>
      </div>
    `}],T=[{header:"text-[color]",className:"text-primary",code:'<div class="d-flex flex-wrap gap-2"><span class="text-primary p-2"> - .text-primary</span><span class="text-secondary p-2"> - .text-secondary</span><span class="text-success p-2"> - .text-success</span><span class="text-danger p-2"> - .text-danger</span><span class="text-warning p-2"> - .text-warning</span><span class="text-info p-2"> - .text-info</span><span class="text-light p-2"> - .text-light</span><span class="text-dark p-2"> - .text-dark</span></div>'},{header:"link-[color]",className:"link-primary",code:'<div class="d-flex flex-wrap gap-2"><span class="link-primary p-2"> - .link-primary</span><span class="link-secondary p-2"> - .link-secondary</span><span class="link-success p-2"> - .link-success</span><span class="link-danger p-2"> - .link-danger</span><span class="link-warning p-2"> - .link-warning</span><span class="link-info p-2"> - .link-info</span><span class="link-light p-2"> - .link-light</span><span class="link-dark p-2"> - .link-dark</span></div>'},{header:"txt-bg-[color]",className:"txt-bg-primary",code:'<div class="d-flex flex-wrap gap-2"><span class="txt-bg-primary p-2"> - .txt-bg-primary</span><span class="txt-bg-secondary p-2"> - .txt-bg-secondary</span><span class="txt-bg-success p-2"> - .txt-bg-success</span><span class="txt-bg-danger p-2"> - .txt-bg-danger</span><span class="txt-bg-warning p-2"> - .txt-bg-warning</span><span class="txt-bg-info p-2"> - .txt-bg-info</span><span class="txt-bg-light p-2"> - .txt-bg-light</span><span class="txt-bg-dark p-2"> - .txt-bg-dark</span></div>'},{header:"text-[option]",className:"text-start",code:'<div class="text-lowercase p-2">Text-Lowercase</div><div class="text-uppercase p-2">Text-Uppercase</div><div class="text-capitalize p-2">Text-Capitalize</div><div class="text-center">- Text Align Center</div><div class="text-start">- Text Align Start</div><div class="text-end">- Text Align End</div>'},{header:"text-d-[option]",className:"text-d-underline",code:'<div class="p-2">- Text Decoration<span class="text-d-underline ms-2"> underline </span></div><div class="p-2">- Text Decoration<span class="text-d-line-through ms-2"> line-through </span></div><div class="p-2">- Text Decoration<span class="text-d-overline ms-2"> overline</span></div><div class="p-2">- Text Decoration<span class="text-d-overline-underline ms-2">overline-underline</span></div><div class="p-2">- Text Decoration<span class="text-d-line-underline ms-2">underline-line-through</span>'},{header:"f-fs-[option]",className:"f-fs-normal",code:'<div class="p-2">- Font style<span class="f-fs-normal ms-2">Normal</span></div><div class="p-2">- Font style<span class="f-fs-italic ms-2">Italic</span></div><div class="p-2">- Font style<span class="f-fs-oblique ms-2">Oblique</span></div><div class="p-2">- Font style<span class="f-fs-initial ms-2">Initial</span></div><div class="p-2">- Font style<span class="f-fs-inherit ms-2">Inherit</span></div>'},{header:"Headings",className:"h1-h6",code:'<div class="h1">h1 Fontsize</div><div class="h2">h2 Fontsize</div><div class="h3">h3 Fontsize</div><div class="h4">h4 Fontsize</div><div class="h5">h5 Fontsize</div><div class="h6">h6 Fontsize</div>'},{header:"f-fw-[weight]",className:"f-fw-500",code:'<div class="p-2">- Font weight<span class="f-fw-100 ms-2">f-fw-100* </span></div><div class="p-2">- Font weight<span class="f-fw-200 ms-2">f-fw-200* </span></div><div class="p-2">- Font weight<span class="f-fw-300 ms-2">f-fw-300* </span></div><div class="p-2">- Font weight<span class="f-fw-400 ms-2">f-fw-400* </span></div><div class="p-2">- Font weight<span class="f-fw-500 ms-2">f-fw-500* </span></div><div class="p-2">- Font weight<span class="f-fw-600 ms-2">f-fw-600* </span></div><div class="p-2">- Font weight<span class="f-fw-700 ms-2">f-fw-700* </span></div><div class="p-2">- Font weight<span class="f-fw-800 ms-2">f-fw-800* </span></div><div class="p-2">- Font weight<span class="f-fw-900 ms-2">f-fw-900* </span></div>'},{header:"f-s-[size]",className:"f-s-14",code:'<div class="p-2 f-s-10 ms-2">Size-10 </span></div><div class="p-2 f-s-12 ms-2">Size-12 </span></div><div class="p-2 f-s-14 ms-2">Size-14 </span></div><div class="p-2 f-s-16 ms-2">Size-16 </span></div><div class="p-2 f-s-18 ms-2">Size-18 </span></div><div class="p-2 f-s-20 ms-2">Size-20 </span ></div><div class="p-2 f-s-24 ms-2">Size-24 </span></div><div class="f-s-80 ms-2">Size-80 </span></div>'},{header:"pa-[option]",className:"pd-0",code:'<div class="row"><div class="col"><p class="border pa-16">Padding-16</p></div><div class="col"><p class="border pa-14">Padding-14</p></div><div class="col"><p class="border pa-10">Padding-10</p></div><div class="col"><p class="border pa-8">Padding-8</p></div><div class="col"><p class="border pa-4">Padding-4</p></div></div>'},{header:"pa-t-[option]",className:"pa-t-0",code:'<div class="row"><div class="col"><p class="border pa-t-40">Padding-Top-40</p></div><div class="col"><p class="border pa-t-35">Padding-Top-35</p></div><div class="col"><p class="border pa-t-20">Padding-Top-20</p></div><div class="col"><p class="border pa-t-15">Padding-Top-15</p></div></div>'},{header:"pa-s-[option]",className:"pa-s-0",code:'<div class="row"><div class="col-12"><p class="border pa-s-40">Padding-Start-40</p></div><div class="col-12"><p class="border pa-s-35">Padding-Start-35</p></div><div class="col-12"><p class="border pa-s-20">Padding-Start-20</p></div><div class="col-12"><p class="border pa-s-15">Padding-Start-15</p></div></div>'},{header:"pa-b-[option]",className:"pa-t-0",code:'<div class="row"><div class="col"><p class="border pa-b-40">Padding-Bottom-40</p></div><div class="col"><p class="border pa-b-35">Padding-Bottom-35</p></div><div class="col"><p class="border pa-b-20">Padding-Bottom-20</p></div><div class="col"><p class="border pa-b-15">Padding-Bottom-15</p></div></div>'},{header:"pa-e-[option]",className:"pa-e-0",code:'<div class="row"><div class="col"><p class="border pa-e-40">Padding-End-40</p></div><div class="col"><p class="border pa-e-35">Padding-End-35</p></div><div class="col"><p class="border pa-e-20">Padding-End-20</p></div><div class="col"><p class="border pa-e-15">Padding-End-15</p></div></div>'},{header:"mg-[option]",className:"pd-0",code:'<div class="row"><div class="col-auto mb-2"><div class="border"><div class="mg-40 txt-bg-primary">Margin-40</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-34 txt-bg-dark">Margin-34</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-30 txt-bg-light">Margin-30</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-28 txt-bg-info">Margin-28</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-24 txt-bg-warning">Margin-24</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-20 txt-bg-danger">Margin-20</div></div></div><div class="col-auto mb-2"><div class="border"><div class="mg-14 txt-bg-success">Margin-14</div></div></div><div class="col-auto mb-2"><div class="border"><p class="mg-10 txt-bg-secondary">Margin-10</p></div></div><div class="col-auto mb-2"><div class="border"><p class="mg-4 txt-bg-primary">Margin-4</p></div></div>'},{header:"mg-t-[option]",className:"mg-t-0",code:'<div class="row"><div class="col"><p class="border mg-t-40">margin-Top-40</p></div><div class="col"><p class="border mg-t-35">margin-Top-35</p></div><div class="col"><p class="border mg-t-20">margin-Top-20</p></div><div class="col"><p class="border mg-t-15">margin-Top-15</p></div></div>'},{header:"mg-s-[option]",className:"mg-s-0",code:'<div class="row"><div class="col-12"><p class="border mg-s-40">margin-Start-40</p></div><div class="col-12"><p class="border mg-s-35">margin-Start-35</p></div><div class="col-12"><p class="border mg-s-20">margin-Start-20</p></div><div class="col-12"><p class="border mg-s-15">margin-Start-15</p></div></div>'},{header:"mg-b-[option]",className:"mg-t-0",code:'<div class="row"><div class="col"><p class="border mg-b-40">margin-Bottom-40</p></div><div class="col"><p class="border mg-b-35">margin-Bottom-35</p></div><div class="col"><p class="border mg-b-20">margin-Bottom-20</p></div><div class="col"><p class="border mg-b-15">margin-Bottom-15</p></div></div>'},{header:"mg-e-[option]",className:"mg-e-0",code:'<div class="row"><div class="col-12"><p class="border mg-e-40">margin-End-40</p></div><div class="col-12"><p class="border mg-e-35">margin-End-35</p></div><div class="col-12"><p class="border mg-e-20">margin-End -20</p></div><div class="col-12"><p class="border mg-e-15">margin-End-15</p></div></div>'},{header:"w-[option]",className:"w-50",code:'<div class="w-150 border  p-2 mb-2"> w-150 </div><div class="w-80 border  p-2 mb-2"> w-80 </div><div class="w-60 border  p-2 mb-2"> w-60 </div><div class="w-50 border  p-2 mb-2"> w-50 </div>'},{header:"h-[option]",className:"h-50",code:'<div class="h-150 border  p-2 mb-2"> h-150 </div><div class="h-80 border  p-2 mb-2"> h-80 </div><div class="h-60 border  p-2 mb-2"> h-60 </div><div class="h-50 border  p-2 mb-2"> h-50 </div>'},{header:"b-[option]",className:"border",code:'<div class="app-example"><div class="border">border</div><div class="border-t">border-t</div><div class="border-s">border-s</div><div class="border-e">border-e</div><div class="border-b">border-b</div></div>'},{header:"b-1-[color]",className:"b-1-primary",code:'<div class="app-example"><div class="b-1-primary p-2">b-1-primary</div><div class="b-1-secondary p-2">b-1-secondary</div><div class="b-1-success p-2">b-1-success</div><div class="b-1-danger p-2">b-1-danger</div><div class="b-1-warning p-2">b-1-warning</div><div class="b-1-info p-2">b-1-info</div><div class="b-1-light p-2">b-1-light</div><div class="b-1-dark p-2">b-1-dark</div></div>'},{header:"b-[size]-[color]",className:"b-1-primary",code:'<div class="app-example"><div class="b-1-primary p-2">b-1-primary</div><div class="b-3-secondary p-2">b-3-secondary</div><div class="b-5-success p-2">b-5-success</div><div class="b-7-danger p-2">b-7-danger</div><div class="b-9-warning p-2">b-9-warning</div><div class="b-15-info p-2">b-15-info</div></div>'},{header:"b-r-[option]",className:"b-r-5",code:'<div class="app-example"><div class="b-1-secondary b-r-5">b-r-5</div><div class="b-1-secondary b-r-10">b-r-10</div><div class="b-1-secondary b-r-15">b-r-15</div><div class="b-1-secondary b-r-20">b-r-20</div><div class="b-1-secondary b-r-25">b-r-25</div><div class="b-1-secondary b-r-30">b-r-30</div></div>'}],S=[{header:"progress-primary",className:"progress-bar bg-primary",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-primary" style="width: 12.5%"></div></div>'},{header:"progress-secondary",className:"progress-bar bg-secondary",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-secondary" style="width: 12.5%"></div></div>'},{header:"progress-success",className:"progress-bar bg-success",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-success" style="width: 12.5%"></div></div>'},{header:"progress-danger",className:"progress-bar bg-danger",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-danger" style="width: 12.5%"></div></div>'},{header:"progress-warning",className:"progress-bar bg-warning",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning" style="width: 12.5%"></div></div>'},{header:"progress-info",className:"progress-bar bg-info",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-info" style="width: 12.5%"></div></div>'},{header:"progress-light",className:"progress-bar bg-light",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light" style="width: 12.5%"></div></div>'},{header:"progress-dark",className:"progress-bar bg-dark",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-dark" style="width: 12.5%"></div></div>'},{header:"progress-light-primary",className:"progress-bar bg-light-primary",code:'<div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-primary" style="width: 12.5%"> 12.5% </div></div>'},{header:"progress-light-secondary",className:"progress-bar bg-light-secondary",code:'<div class="progress w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-secondary" style="width: 25%"> 25% </div></div>'},{header:"progress-light-success",className:"progress-bar bg-light-success",code:'<div class="progress w-100" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-success" style="width: 37.5%"> 37.5% </div></div>'},{header:"progress-light-danger",className:"progress-bar bg-light-danger",code:'<div class="progress w-100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-danger" style="width: 50%"> 50% </div></div>'},{header:"progress-light-warning",className:"progress-bar bg-light-warning",code:'<div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-warning" style="width: 62.5%"> 62.5% </div></div>'},{header:"progress-light-info",className:"progress-bar bg-light-info",code:'<div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-info" style="width: 62.5%"> 62.5% </div></div>'},{header:"progress-light-light",className:"progress-bar bg-light-light",code:'<div class="progress w-100" role="progressbar" aria-valuenow="82.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-light" style="width: 82.5%"> 82.5% </div></div>'},{header:"progress-light-dark",className:"progress-bar bg-light-dark",code:'<div class="progress w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light-dark" style="width: 95%"> 95% </div></div>'},{header:"progress-bar-striped",className:"progress-bar progress-bar-striped",code:'<div class="d-flex gap-3 flex-wrap"><div class="progress w-100" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-primary progress-bar-striped" style="width: 12.5%"> 12.5% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" style="width: 25%"> 25% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="37.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 37.5%"> 37.5% </div></div><div class="progress w- 100" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width: 50%"> 50% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="62.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" style="width: 62.5%"> 62.5% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-info progress-bar-striped progress-bar-animated" style="width: 75%"> 75% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="82.5" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-light progress-bar-striped progress-bar-animated" style="width: 82.5%"> 82.5% </div></div><div class="progress w-100" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" style="width: 95%"> 95% </div></div></div>'},{header:"progress sizes",className:"progress",code:'<div class="d-flex flex-column gap-3"><div class="progress h-5"><div class="progress-bar bg-primary h-5" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"></div></div><div class="progress"><div class="progress-bar bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">This is normal size</div></div><div class="progress"><div class="progress-bar bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">This is normal size</div></div><div class="progress h-15"><div class="progress-bar bg-success h-15" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%;"> height 15px</div></div><div class="progress h-15"><div class="progress-bar bg-info h-15" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"> height 15px</div></div><div class="progress h-20"><div class="progress-bar bg-danger h-20" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 70%;"> height 20px</div></div><div class="progress h-25"><div class="progress-bar bg-warning h-25" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 80%;"> height 25px</div></div></div>'},{header:"custom progress",className:"progress-box",code:'<div class="card"><div class="card-body"><div class="row"><div class="col-md-6 mb-3"><div class="d-flex gap-3 flex-wrap"><div class="progress-box bg-light-primary w-100"><div class="progress-content"><div><div class="left d-flex align-items-center"><span class="spinner-border spinner-border-sm me-2 ms-2" role="status" aria-hidden="true"></span>Loading data...</div><div class="right"><i class="fa fa-close"></i></div></div></div><div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-primary h-5" style="width: 100%;"></div></div></div><div class="progress-box bg-light-secondary w-100"><div class="progress-content"><div><div class="left d-flex align-items-center"><b class="me-1 ms-1">75%</b> Processing</div><div class="right"><i class="fa fa-close"></i></div></div></div><div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-secondary h-5" style="width: 75%;"></div></div></div></div></div><div class="col-md-6"><div class="d-flex gap-3 flex-wrap"><div class="progress-box bg-light-success w-100"><div class="progress-content"><div><div class="left d-flex align-items-center"><b class="me-1 ms-1">52%</b> Updating..</div><div class="right"><span class="badge text-bg-success">1 Min</span></div></div></div><div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-success h-5" style="width: 52%;"></div></div></div><div class="progress-box bg-light-danger w-100"><div class="progress-content"><div><div class="left d-flex align-items-center"><i class="ti ti-trash me-1 ms-1"></i> Deleting data <small> (85% remain)</small></div><div class="right"><span class="badge text-bg-danger">1 Min left</span></div></div></div><div class="progress w-100 h-5" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar bg-danger h-5" style="width: 15%;"></div></div></div><br/></div></div></div></div></div></div>'}],A=[{header:"ribbon ribbon-left",className:"ribbon ribbon-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon ribbon-left ribbon-primary">Ribbon</div></div>'},{header:"cross-shadow-ribbon cross-left",className:"cross-shadow-ribbon cross-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="cross-shadow-ribbon cross-left ribbon-primary">Ribbon</div></div>'},{header:"ribbon-shape shape-left",className:"ribbon-shape shape-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-shape shape-left ribbon-primary">Ribbon</div></div>'},{header:"arrow-ribbon arrow-left",className:"arrow-ribbon arrow-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="arrow-ribbon arrow-left ribbon-primary">Ribbon</div></div>'},{header:"ribbon-side side-left",className:"ribbon-side side-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-side side-left ribbon-primary">Ribbon</div></div>'},{header:"ribbon-top top-left",className:"ribbon-top top-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-top top-left ribbon-primary"><i class="fa-solid fa-gift fa-fw"></i></div></div>'},{header:"circle-ribbon circle-left",className:"circle-ribbon circle-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="circle-ribbon circle-left ribbon-primary">50%</div></div>'},{header:"ribbon file-left",className:"ribbon file-left ribbon-primary",code:'<div class="ribbon-file w-120 h-120 bg-primary-500"><div class="ribbon file-left ribbon-primary">25%</div></div>'},{header:"box-ribbon box-left",className:"box-ribbon box-left ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="box-ribbon box-left"><div class="ribbonbox ribbon-primary">Box</div></div></div>'},{header:"ribbon ribbon-[position]",className:"ribbon ribbon-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon ribbon-right ribbon-primary">Ribbon</div></div>'},{header:"ribbon-shape shape-[position]",className:"ribbon-shape shape-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-shape shape-right ribbon-primary">Ribbon</div></div>'},{header:"arrow-ribbon arrow-[position]",className:"arrow-ribbon arrow-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="arrow-ribbon arrow-right ribbon-primary">Ribbon</div></div>'},{header:"ribbon-top top-[position]",className:"ribbon-top top-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-top top-right ribbon-primary"><i class="fa-solid fa-gift fa-fw"></i></div></div>'},{header:"ribbon-side side-[position]",className:"ribbon-side side-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="ribbon-side side-right ribbon-primary">Side</div></div>'},{header:"cross-shadow-ribbon cross-[position]",className:"cross-shadow-ribbon cross-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="cross-shadow-ribbon cross-right ribbon-primary">Side</div></div>'},{header:"circle-ribbon circle-[position]",className:"circle-ribbon circle-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="circle-ribbon circle-right ribbon-primary">25%</div></div>'},{header:"ribbon file-[position]",className:"ribbon file-right ribbon-primary",code:'<div class="ribbon-file w-120 h-120 bg-primary-500"><div class="ribbon file-right ribbon-primary">10%</div></div>'},{header:"box-ribbon box-[position]",className:"box-ribbon box-right ribbon-primary",code:'<div class="ribbon-box w-120 h-120 bg-primary-500"><div class="box-ribbon box-right"><div class="ribbonbox ribbon-primary">Box</div></div></div>'}],C=[{header:"tabs-primary",className:"app-tabs-primary",code:`
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs app-tabs-primary" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="html-tab" data-bs-toggle="tab" data-bs-target="#html-tab-pane" type="button" role="tab" aria-controls="html-tab-pane" aria-selected="true">HTML</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="css-tab" data-bs-toggle="tab" data-bs-target="#css-tab-pane" type="button" role="tab" aria-controls="css-tab-pane" aria-selected="false">CSS</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="php-tab" data-bs-toggle="tab" data-bs-target="#php-tab-pane" type="button" role="tab" aria-controls="php-tab-pane" aria-selected="false">PHP</button>
            </li>
          </ul>
          <div class="tab-content" id="BasicContent">
            <div class="tab-pane fade show active" id="html-tab-pane" role="tabpanel" aria-labelledby="html-tab" tabindex="0">
              <p>Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.</p>
            </div>
            <div class="tab-pane fade" id="css-tab-pane" role="tabpanel" aria-labelledby="css-tab" tabindex="0">
              <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</p>
              <p>CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
            </div>
            <div class="tab-pane fade" id="php-tab-pane" role="tabpanel" aria-labelledby="php-tab" tabindex="0">
              <p>PHP is a popular general-purpose scripting language that is especially suited to web development.</p>
            </div>
          </div>
        </div>
      </div>
    `},{header:"tabs-outline-primary",className:"tab-outline-primary",code:`
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs tab-outline-primary" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"tabs-light",className:"tab-light-primary",code:`
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs tab-light-primary" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"tabs-vertical",className:"vertical-tab",code:`
      <div class="card">
        <div class="card-body vertical-tab">
          <ul class="nav nav-tabs tab-light-secondary ms-3" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"tabs-vertical-right",className:"vertical-right-tab",code:`
      <div class="card">
        <div class="card-body vertical-right-tab">
          <ul class="nav nav-tabs app-tabs-success" id="Outline" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"tabs background",className:"tab-background",code:`
      <ul class="nav nav-tabs tab-primary bg-primary p-1" id="bg" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="features-tab" data-bs-toggle="tab" data-bs-target="#features-tab-pane" type="button" role="tab" aria-controls="features-tab-pane" aria-selected="true"><i class="ti ti-disc pe-1 ps-1"></i> features</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="history-tab" data-bs-toggle="tab" data-bs-target="#history-tab-pane" type="button" role="tab" aria-controls="history-tab-pane" aria-selected="false"><i class="ti ti-history pe-1 ps-1"></i>History</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" type="button" role="tab" aria-controls="reviews-tab-pane" aria-selected="false"><i class="ti ti-star pe-1 ps-1"></i>reviews</button>
        </li>
      </ul>
      <div class="tab-content" id="bgContent">
        <div class="tab-pane fade show active" id="features-tab-pane" role="tabpanel" aria-labelledby="features-tab" tabindex="0">
          <p>The idea is to use <code>:target</code> pseudoclassName to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclassName to show tabs, use anchors with fragment identifiers to switch between them.</p>
        </div>
        <div class="tab-pane fade" id="history-tab-pane" role="tabpanel" aria-labelledby="history-tab" tabindex="0">
          <ol>
            <li>Show only the last tab.</li>
            <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
            <li>Matches a tab, show it and hide all following siblings.</li>
          </ol>
        </div>
        <div class="tab-pane fade" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab" tabindex="0">
          <p>The idea is to use <code>:target</code> pseudoclassName to show tabs, use anchors with fragment identifiers to switch between them. The idea is to use pseudoclassName to show tabs, use anchors with fragment identifiers to switch between them.</p>
        </div>
      </div>
    `},{header:"bottom-tab",className:"bottom-tab",code:`
      <div class="card">
        <div class="card-body bottom-tab">
          <ul class="nav nav-tabs app-tabs-success" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"tab-justify-content-around",className:"justify-content-around",code:`
      <div class="card">
        <div class="card-body">
          <ul class="nav nav-tabs app-tabs-dark justify-content-around" role="tablist">
            <li class="nav-item flex-fill" role="presentation">
              <button class="nav-link w-100 active" id="connect-tab" data-bs-toggle="tab" data-bs-target="#connect-tab-pane" type="button" role="tab" aria-controls="connect-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item flex-fill" role="presentation">
              <button class="nav-link w-100" id="discover-tab" data-bs-toggle="tab" data-bs-target="#discover-tab-pane" type="button" role="tab" aria-controls="discover-tab-pane" aria-selected="false">Discover</button>
            </li>
            <li class="nav-item flex-fill" role="presentation">
              <button class="nav-link w-100" id="order-tab" data-bs-toggle="tab" data-bs-target="#order-tab-pane" type="button" role="tab" aria-controls="order-tab-pane" aria-selected="false">Orders</button>
            </li>
          </ul>
          <div class="tab-content" id="OutlineContent">
            <div class="tab-pane fade show active" id="connect-tab-pane" role="tabpanel" aria-labelledby="connect-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab one.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="discover-tab-pane" role="tabpanel" aria-labelledby="discover-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab two.</h6>
              ...
            </div>
            <div class="tab-pane fade" id="order-tab-pane" role="tabpanel" aria-labelledby="order-tab" tabindex="0">
              <h6 class="mb-1">This is the content of tab three.</h6>
              ...
            </div>
          </div>
        </div>
      </div>
    `},{header:"image as nav link",className:"new-tab",code:`
    <div class="card">
      <div class="card-body">
                    <ul class="nav nav-tabs tab-light-secondary" id="lang-Light" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link gap-2 active" id="lang-home-tab" data-bs-toggle="tab"
                          data-bs-target="#lang-home-tab-pane" type="button" role="tab"
                          aria-controls="lang-home-tab-pane" aria-selected="true">
                          <i class="flag-icon flag-icon-usa"></i>
                          USA
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link gap-2" id="lang-profile-tab" data-bs-toggle="tab"
                          data-bs-target="#lang-profile-tab-pane" type="button" role="tab"
                          aria-controls="lang-profile-tab-pane" aria-selected="false">
                          <i class="flag-icon flag-icon-gbr"></i>
                          GBR
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link gap-2" id="lang-contact-tab" data-bs-toggle="tab"
                          data-bs-target="#lang-contact-tab-pane" type="button" role="tab"
                          aria-controls="lang-contact-tab-pane" aria-selected="false">
                          <i class="flag-icon flag-icon-deu"></i>
                          DEU
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link gap-2" id="lang-about-tab" data-bs-toggle="tab"
                          data-bs-target="#lang-about-tab-pane" type="button" role="tab"
                          aria-controls="lang-about-tab-pane" aria-selected="false">
                          <i class="flag-icon flag-icon-lbr"></i>
                          LBR
                        </button>
                      </li>

                    </ul>
                    <div class="tab-content" id="lang-LightContent">
                      <div class="tab-pane fade show active" id="lang-home-tab-pane" role="tabpanel"
                        aria-labelledby="lang-home-tab" tabindex="0">
                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment
                          identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors
                          with fragment identifiers to switch between them.</p>
                      </div>

                      <div class="tab-pane fade" id="lang-profile-tab-pane" role="tabpanel"
                        aria-labelledby="lang-profile-tab" tabindex="0">
                        <ol>
                          <li>Show only the last tab.</li>
                          <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
                          <li>Matches a tab, show it and hide all following siblings.</li>
                        </ol>
                      </div>

                      <div class="tab-pane fade" id="lang-contact-tab-pane" role="tabpanel"
                        aria-labelledby="lang-contact-tab" tabindex="0">
                        <p>The idea is to use <code>:target</code> pseudoclass to show tabs, use anchors with fragment
                          identifiers to switch between them. The idea is to use pseudoclass to show tabs, use anchors
                          with fragment identifiers to switch between them.</p>
                      </div>

                      <div class="tab-pane fade" id="lang-about-tab-pane" role="tabpanel"
                        aria-labelledby="lang-about-tab" tabindex="0">
                        <ol>
                          <li>Show only the last tab.</li>
                          <li>If <code>:target</code> matches a tab, show it and hide all following siblings.</li>
                          <li>Matches a tab, show it and hide all following siblings.</li>
                        </ol>
                      </div>

                    </div>
                  </div>
    </div>
  `}],W=t.memo(()=>{const d=t.useMemo(()=>y.map((e,s)=>a.jsx(l,{badge:e},s)),[y]),c=t.useMemo(()=>f.map((e,s)=>a.jsx(l,{badge:e},s)),[f]),b=t.useMemo(()=>x.map((e,s)=>a.jsx(l,{badge:e},s)),[x]),o=t.useMemo(()=>N.map((e,s)=>a.jsx(l,{badge:e},s)),[N]),p=t.useMemo(()=>j.map((e,s)=>a.jsx(l,{badge:e},s)),[j]),h=t.useMemo(()=>u.map((e,s)=>a.jsx(l,{badge:e},s)),[u]),v=t.useMemo(()=>C.map((e,s)=>a.jsx(l,{badge:e},s)),[C]),D=t.useMemo(()=>m.map((e,s)=>a.jsx(l,{badge:e},s)),[m]),P=t.useMemo(()=>w.map((e,s)=>a.jsx(l,{badge:e},s)),[w]),M=t.useMemo(()=>S.map((e,s)=>a.jsx(l,{badge:e},s)),[S]),_=t.useMemo(()=>T.map((e,s)=>a.jsx(l,{badge:e},s)),[T]),I=t.useMemo(()=>k.map((e,s)=>a.jsx(l,{badge:e},s)),[k]),L=t.useMemo(()=>A.map((e,s)=>a.jsx(l,{badge:e},s)),[A]);return a.jsx(n,{xs:12,children:a.jsxs("div",{className:"cheatsheet-blocks",children:[a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#badges","aria-expanded":"false","aria-controls":"badges",children:"badges"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"badges",children:a.jsx("ul",{children:d})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:" p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#alerts","aria-expanded":"false","aria-controls":"alerts",children:"alerts"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"alerts",children:a.jsxs("ul",{children:[" ",c," "]})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#buttons","aria-expanded":"false","aria-controls":"buttons",children:"Button"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"buttons",children:a.jsxs("ul",{children:[" ",b," "]})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#cards","aria-expanded":"false","aria-controls":"cards",children:"Cards"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"cards",children:a.jsxs("ul",{children:[" ",o," "]})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#dropdown","aria-expanded":"false","aria-controls":"dropdown",children:"Dropdown"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"dropdown",children:a.jsxs("ul",{children:[" ",p," "]})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#avtar","aria-expanded":"false","aria-controls":"avtar",children:"Avtar"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"avtar",children:a.jsxs("ul",{children:[" ",h," "]})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#tabs","aria-expanded":"false","aria-controls":"tabs",children:"Tabs"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"tabs",children:a.jsx("ul",{children:v})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#accordions","aria-expanded":"false","aria-controls":"accordions",children:"Accordions"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"accordions",children:a.jsx("ul",{children:D})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#background","aria-expanded":"false","aria-controls":"background",children:"Background"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"background",children:a.jsx("ul",{children:P})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#progress","aria-expanded":"false","aria-controls":"progress",children:"Progress"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"progress",children:a.jsx("ul",{children:M})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#helperclassName","aria-expanded":"false","aria-controls":"helperclassName",children:"Helper classNames"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"helperclassName",children:a.jsx("ul",{children:_})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#divider","aria-expanded":"false","aria-controls":"divider",children:"Divider"})}),a.jsx("div",{className:"collapse card-body show p-0",id:"divider",children:a.jsx("ul",{children:I})})]}),a.jsxs(i,{className:"cheatsheets-card box-template-list toggle-card",children:[a.jsx(r,{className:"p-0",children:a.jsx("a",{className:"btn btn-primary w-100 text-start f-s-18 f-w-500 rounded-bottom-0 py-2 box-template-name","data-bs-toggle":"collapse",href:"#ribbon","aria-expanded":"false","aria-controls":"ribbon",children:"Ribbon"})}),a.jsx(O,{className:"collapse show p-0",id:"ribbon",children:a.jsx("ul",{children:L})})]})]})})}),q=()=>(t.useEffect(()=>{new Masonry(".cheatsheet-blocks",{percentPosition:!0}),F.highlightAll()},[]),a.jsxs(E,{fluid:!0,children:[a.jsx(g,{className:" m-1",children:a.jsxs(n,{xs:12,children:[a.jsx("h4",{className:"main-title",children:"Cheatsheet"}),a.jsxs("ul",{className:"app-line-breadcrumbs mb-3",children:[a.jsx("li",{className:"",children:a.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:a.jsxs("span",{children:[a.jsx("i",{className:"ph-duotone  ph-briefcase f-s-16"})," Ui kits"]})})}),a.jsx("li",{className:"active",children:a.jsx("a",{href:"#",className:"f-s-14 f-w-500",children:"Cheatsheet"})})]})]})}),a.jsxs(g,{children:[a.jsx(n,{xs:12,children:a.jsxs("div",{className:"cheatsheet-header",children:[a.jsx("img",{src:"/assets/images/logo/03.png",alt:""}),a.jsx("h2",{children:"Your Ultimate Cheatsheet"}),a.jsx("div",{className:"search-div",children:a.jsxs("div",{className:"input-group b-r-search",children:[a.jsx("span",{className:"input-group-text bg-primary border-0 ",children:a.jsx("i",{className:"ti ti-search"})}),a.jsx("input",{className:"form-control cheatsheet-filter",type:"text",placeholder:"Search...","aria-label":"Search"})]})})]})}),a.jsx(W,{})]}),a.jsxs(g,{className:"code-container code-preview-popup d-none",children:[a.jsx(n,{xs:12,className:"p-0",children:a.jsxs("div",{className:"code-preview-header d-flex justify-content-between mb-3",children:[a.jsx("h4",{className:"m-0 text-white header-preview-text"}),a.jsx("button",{type:"button",className:"box-close",children:a.jsx("i",{className:"fa fa-close"})})]})}),a.jsxs(n,{lg:6,children:[a.jsxs("div",{className:"d-flex align-items-end justify-content-between mg-b-16",children:[a.jsx("h4",{className:"text-white",children:"Code"}),a.jsx("button",{type:"button",className:"btn h-30 w-30 bg-dark text-white p-2 d-flex-center",onClick:()=>copyToClipboard("#previewCodeText"),children:a.jsx("i",{className:"ti ti-copy"})})]}),a.jsx(i,{className:"box-shadow-none code-preview",children:a.jsx("div",{className:"card-body",children:a.jsx("pre",{children:a.jsx("code",{className:"language-html",id:"previewCodeText"})})})})]}),a.jsxs(n,{lg:6,children:[a.jsx("div",{className:"mg-b-16",children:a.jsx("h4",{className:"text-white",children:"Preview"})}),a.jsx(i,{className:" box-shadow-none code-preview",children:a.jsx(O,{className:" code-preview-div"})})]})]})]}));export{q as default};
