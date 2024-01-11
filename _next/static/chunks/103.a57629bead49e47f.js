(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return f},hu:function(){return m}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),c=t(9147),u=t.n(c);t(7319);let l=e=>{let n=(0,s.useRef)(null),a=(0,s.useRef)(null),c=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),l=(0,s.useRef)(null),f=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376),r=new n.GUI({autoPlace:!1});return r.domElement.style.position="relative",r.domElement.style.zIndex="1000",r}},[]),m=(0,s.useRef)(null),d=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),p=(0,o.useRouter)(),h=p.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[g,x]=(0,s.useState)(null),[v,b]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(h?b(h[1]):b(c[0].name),f&&l.current)for(l.current.appendChild(f.domElement);f.__controllers.length>0;)f.__controllers[0].remove();d&&m.current&&(d.dom.style.position="absolute",d.showPanel(1),m.current.appendChild(d.dom));let t={active:!0},r=()=>{t.active=!1};try{let a=n.current;if(!a)throw Error("The canvas is not available");let i=e.init({canvas:a,pageState:t,gui:f,stats:d});i instanceof Promise&&i.catch(e=>{console.error(e),x(e)})}catch(o){console.error(o),x(o)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(g)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:m}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:l}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,ref:a,children:(0,r.jsx)("div",{className:u().sourceFileScrollContainer,onScroll(e){let n=e.currentTarget,t=n.scrollWidth-n.clientWidth-n.scrollLeft;n.scrollLeft>25?a.current.setAttribute("data-left","true"):a.current.setAttribute("data-left","false"),t>25?a.current.setAttribute("data-right","true"):a.current.setAttribute("data-right","false")},children:(0,r.jsx)("ul",{children:c.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){b(e.name)},children:e.name})},n))})})}),c.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":v==e.name},n))]})]})},f=e=>(0,r.jsx)(l,{...e});function m(e,n){if(!e)throw Error(n)}},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return i},MO:function(){return o},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,i=32,o=36,s=new Float32Array([1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,1,0,1,-1,-1,1,1,0,0,1,0,0,1,-1,1,1,1,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,1,0,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,-1,1,-1,1,0,1,0,1,0,0,-1,1,1,1,0,1,1,1,0,1,1,1,-1,1,1,1,0,1,1,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,1,-1,1,0,1,0,1,1,0,-1,-1,-1,1,0,0,0,1,0,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,-1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,0,-1,-1,1,1,0,0,1,1,1,0,1,-1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,0,1,-1,-1,-1,1,0,0,0,1,1,1,-1,1,-1,1,0,1,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,-1,-1,1,1,0,0,1,0,1,-1,1,-1,1,0,1,0,1,1,0])},5103:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(6416),a=t(5671),i=t(4655),o=t(3569),s="@binding(1) @group(0) var mySampler: sampler;\n@binding(2) @group(0) var myTexture: texture_2d<f32>;\n\n@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  let texColor = textureSample(myTexture, mySampler, fragUV * 0.8 + vec2(0.1));\n  let f = select(1.0, 0.0, length(texColor.rgb - vec3(0.5)) < 0.01);\n  return f * texColor + (1.0 - f) * fragPosition;\n}\n",c="src/sample/fractalCube/main.ts";let u=async e=>{let{canvas:n,pageState:t}=e,a=await navigator.gpu.requestAdapter(),c=await a.requestDevice();if(!t.active)return;let u=n.getContext("webgpu"),l=window.devicePixelRatio;n.width=n.clientWidth*l,n.height=n.clientHeight*l;let f=navigator.gpu.getPreferredCanvasFormat();u.configure({device:c,format:f,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,alphaMode:"premultiplied"});let m=c.createBuffer({size:i.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(m.getMappedRange()).set(i.zS),m.unmap();let d=c.createRenderPipeline({layout:"auto",vertex:{module:c.createShaderModule({code:o.Z}),entryPoint:"main",buffers:[{arrayStride:i.O$,attributes:[{shaderLocation:0,offset:i.v8,format:"float32x4"},{shaderLocation:1,offset:i.Ax,format:"float32x2"}]}]},fragment:{module:c.createShaderModule({code:s}),entryPoint:"main",targets:[{format:f}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),p=c.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),h=c.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),g=c.createTexture({size:[n.width,n.height],format:f,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),x=c.createSampler({magFilter:"linear",minFilter:"linear"}),v=c.createBindGroup({layout:d.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:x},{binding:2,resource:g.createView()}]}),b={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:p.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},w=n.width/n.height,S=r._E.perspective(2*Math.PI/5,w,1,100),C=r._E.create();requestAnimationFrame(function e(){if(!t.active)return;let a=function(){let e=r._E.identity();r._E.translate(e,r.R3.fromValues(0,0,-4),e);let n=Date.now()/1e3;return r._E.rotate(e,r.R3.fromValues(Math.sin(n),Math.cos(n),0),1,e),r._E.multiply(S,e,C),C}();c.queue.writeBuffer(h,0,a.buffer,a.byteOffset,a.byteLength);let o=u.getCurrentTexture();b.colorAttachments[0].view=o.createView();let s=c.createCommandEncoder(),l=s.beginRenderPass(b);l.setPipeline(d),l.setBindGroup(0,v),l.setVertexBuffer(0,m),l.draw(i.MO),l.end(),s.copyTextureToTexture({texture:o},{texture:g},[n.width,n.height]),c.queue.submit([s.finish()]),requestAnimationFrame(e)})},l=()=>(0,a.Tl)({name:"Fractal Cube",description:"This example uses the previous frame's rendering result        as the source texture for the next frame.",init:u,sources:[{name:c.substring(23),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport sampleSelfWGSL from './sampleSelf.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n\n    // Specify we want both RENDER_ATTACHMENT and COPY_SRC since we\n    // will copy out of the swapchain texture.\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleSelfWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  // We will copy the frame's rendering results into this texture and\n  // sample it on the next frame.\n  const cubeTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: presentationFormat,\n    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,\n  });\n\n  // Create a sampler with linear filtering for smooth interpolation.\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n  const modelViewProjectionMatrix = mat4.create();\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.identity();\n    mat4.translate(viewMatrix, vec3.fromValues(0, 0, -4), viewMatrix);\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0),\n      1,\n      viewMatrix\n    );\n\n    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n\n    const swapChainTexture = context.getCurrentTexture();\n    // prettier-ignore\n    renderPassDescriptor.colorAttachments[0].view = swapChainTexture.createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount);\n    passEncoder.end();\n\n    // Copy the rendering results from the swapchain into |cubeTexture|.\n    commandEncoder.copyTextureToTexture(\n      {\n        texture: swapChainTexture,\n      },\n      {\n        texture: cubeTexture,\n      },\n      [canvas.width, canvas.height]\n    );\n\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst FractalCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Fractal Cube',\n    description:\n      \"This example uses the previous frame's rendering result \\\n       as the source texture for the next frame.\",\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: './sampleSelf.frag.wgsl',\n        contents: sampleSelfWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default FractalCube;\n"},{name:"../../shaders/basic.vert.wgsl",contents:o.Z,editable:!0},{name:"./sampleSelf.frag.wgsl",contents:s,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:c});var f=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileScrollContainer:"SampleLayout_sourceFileScrollContainer__LsNEm",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n]);\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"}}]);