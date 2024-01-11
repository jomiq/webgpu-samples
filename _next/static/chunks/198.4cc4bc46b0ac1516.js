(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return d},hu:function(){return m}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),l=t(9147),c=t.n(l);t(7319);let u=e=>{let n=(0,s.useRef)(null),a=(0,s.useRef)(null),l=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),u=(0,s.useRef)(null),d=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376),r=new n.GUI({autoPlace:!1});return r.domElement.style.position="relative",r.domElement.style.zIndex="1000",r}},[]),m=(0,s.useRef)(null),p=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),g=(0,o.useRouter)(),h=g.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[v,f]=(0,s.useState)(null),[x,w]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(h?w(h[1]):w(l[0].name),d&&u.current)for(u.current.appendChild(d.domElement);d.__controllers.length>0;)d.__controllers[0].remove();p&&m.current&&(p.dom.style.position="absolute",p.showPanel(1),m.current.appendChild(p.dom));let t={active:!0},r=()=>{t.active=!1};try{let a=n.current;if(!a)throw Error("The canvas is not available");let i=e.init({canvas:a,pageState:t,gui:d,stats:p});i instanceof Promise&&i.catch(e=>{console.error(e),f(e)})}catch(o){console.error(o),f(o)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),v?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(v)})]}):null]}),(0,r.jsxs)("div",{className:c().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:m}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:u}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:c().sourceFileNav,ref:a,children:(0,r.jsx)("div",{className:c().sourceFileScrollContainer,onScroll(e){let n=e.currentTarget,t=n.scrollWidth-n.clientWidth-n.scrollLeft;n.scrollLeft>25?a.current.setAttribute("data-left","true"):a.current.setAttribute("data-left","false"),t>25?a.current.setAttribute("data-right","true"):a.current.setAttribute("data-right","false")},children:(0,r.jsx)("ul",{children:l.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick(){w(e.name)},children:e.name})},n))})})}),l.map((e,n)=>(0,r.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":x==e.name},n))]})]})},d=e=>(0,r.jsx)(u,{...e});function m(e,n){if(!e)throw Error(n)}},1198:function(e,n,t){"use strict";var r="src/sample/helloTriangleMSAA/main.ts";t.r(n);var a=t(5671),i=t(1974),o=t(2690);let s=async e=>{let{canvas:n,pageState:t}=e,r=await navigator.gpu.requestAdapter(),a=await r.requestDevice();if(!t.active)return;let s=n.getContext("webgpu"),l=window.devicePixelRatio;n.width=n.clientWidth*l,n.height=n.clientHeight*l;let c=navigator.gpu.getPreferredCanvasFormat();s.configure({device:a,format:c,alphaMode:"premultiplied"});let u=a.createRenderPipeline({layout:"auto",vertex:{module:a.createShaderModule({code:i.Z}),entryPoint:"main"},fragment:{module:a.createShaderModule({code:o.Z}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list"},multisample:{count:4}}),d=a.createTexture({size:[n.width,n.height],sampleCount:4,format:c,usage:GPUTextureUsage.RENDER_ATTACHMENT}),m=d.createView();requestAnimationFrame(function e(){if(!t.active)return;let n=a.createCommandEncoder(),r={colorAttachments:[{view:m,resolveTarget:s.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"discard"}]},i=n.beginRenderPass(r);i.setPipeline(u),i.draw(3),i.end(),a.queue.submit([n.finish()]),requestAnimationFrame(e)})},l=()=>(0,a.Tl)({name:"Hello Triangle MSAA",description:"Shows multisampled rendering a basic triangle.",init:s,sources:[{name:r.substring(29),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  const texture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    sampleCount,\n    format: presentationFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  const view = texture.createView();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view,\n          resolveTarget: context.getCurrentTexture().createView(),\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'discard',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst HelloTriangleMSAA: () => JSX.Element = () =>\n  makeSample({\n    name: 'Hello Triangle MSAA',\n    description: 'Shows multisampled rendering a basic triangle.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default HelloTriangleMSAA;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:i.Z,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:o.Z,editable:!0}],filename:r});n.default=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileScrollContainer:"SampleLayout_sourceFileScrollContainer__LsNEm",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2690:function(e,n){"use strict";n.Z="@fragment\nfn main() -> @location(0) vec4<f32> {\n  return vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},1974:function(e,n){"use strict";n.Z="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n    vec2(0.0, 0.5),\n    vec2(-0.5, -0.5),\n    vec2(0.5, -0.5)\n  );\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);