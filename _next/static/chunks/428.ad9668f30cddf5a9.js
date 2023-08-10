(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[428],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return l},hu:function(){return m}});var r=t(5893),a=t(9008),i=t.n(a),s=t(1163),o=t(7294),u=t(9147),c=t.n(u);t(7319);let d=e=>{let n=(0,o.useRef)(null),a=(0,o.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),u=(0,o.useRef)(null),d=(0,o.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),l=(0,o.useRef)(null),m=(0,o.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),h=(0,s.useRouter)(),p=h.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[f,g]=(0,o.useState)(null),[x,v]=(0,o.useState)(null);return(0,o.useEffect)(()=>{p?v(p[1]):v(a[0].name),d&&u.current&&u.current.appendChild(d.domElement),m&&l.current&&(m.dom.style.position="absolute",m.showPanel(1),l.current.appendChild(m.dom));let t={active:!0},r=()=>{t.active=!1};try{let i=n.current;if(!i)throw Error("The canvas is not available");let s=e.init({canvas:i,pageState:t,gui:d,stats:m});s instanceof Promise&&s.catch(e=>{console.error(e),g(e)})}catch(o){console.error(o),g(o)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(f)})]}):null]}),(0,r.jsxs)("div",{className:c().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:l}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:u}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:c().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick(){v(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":x==e.name},n))]})]})},l=e=>(0,r.jsx)(d,{...e});function m(e,n){if(!e)throw Error(n)}},3428:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return d}});var r=t(3560),a=t(5671);let i={vertexStride:32,positionsOffset:0,normalOffset:12,uvOffset:24};var s="struct Uniforms {\n  viewProjectionMatrix : mat4x4f\n}\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\n\n@group(1) @binding(0) var<uniform> modelMatrix : mat4x4f;\n\nstruct VertexInput {\n  @location(0) position : vec4f,\n  @location(1) normal : vec3f,\n  @location(2) uv : vec2f\n}\n\nstruct VertexOutput {\n  @builtin(position) position : vec4f,\n  @location(0) normal: vec3f,\n  @location(1) uv : vec2f,\n}\n\n@vertex\nfn vertexMain(input: VertexInput) -> VertexOutput {\n  var output : VertexOutput;\n  output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;\n  output.normal = normalize((modelMatrix * vec4(input.normal, 0)).xyz);\n  output.uv = input.uv;\n  return output;\n}\n\n@group(1) @binding(1) var meshSampler: sampler;\n@group(1) @binding(2) var meshTexture: texture_2d<f32>;\n\n// Static directional lighting\nconst lightDir = vec3f(1, 1, 1);\nconst dirColor = vec3(1);\nconst ambientColor = vec3f(0.05);\n\n@fragment\nfn fragmentMain(input: VertexOutput) -> @location(0) vec4f {\n  let textureColor = textureSample(meshTexture, meshSampler, input.uv);\n\n  // Very simplified lighting algorithm.\n  let lightColor = saturate(ambientColor + max(dot(input.normal, lightDir), 0.0) * dirColor);\n\n  return vec4f(textureColor.rgb * lightColor, textureColor.a);\n}",o="src/sample/renderBundles/main.ts";let u=async e=>{let n,a,o,{canvas:u,pageState:c,gui:d,stats:l}=e,m=await navigator.gpu.requestAdapter(),h=await m.requestDevice();if(!c.active)return;let p={useRenderBundles:!0,asteroidCount:5e3};d.add(p,"useRenderBundles"),d.add(p,"asteroidCount",1e3,1e4,1e3).onChange(()=>{I(),D()});let f=u.getContext("webgpu"),g=window.devicePixelRatio||1;u.width=u.clientWidth*g,u.height=u.clientHeight*g;let x=navigator.gpu.getPreferredCanvasFormat();f.configure({device:h,format:x,alphaMode:"premultiplied"});let v=h.createShaderModule({code:s}),b=h.createRenderPipeline({layout:"auto",vertex:{module:v,entryPoint:"vertexMain",buffers:[{arrayStride:i.vertexStride,attributes:[{shaderLocation:0,offset:i.positionsOffset,format:"float32x3"},{shaderLocation:1,offset:i.normalOffset,format:"float32x3"},{shaderLocation:2,offset:i.uvOffset,format:"float32x2"}]}]},fragment:{module:v,entryPoint:"fragmentMain",targets:[{format:x}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),w=h.createTexture({size:[u.width,u.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),y=h.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});{let M=await fetch(new t.U(t(9836)).toString()),S=await createImageBitmap(await M.blob());n=h.createTexture({size:[S.width,S.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),h.queue.copyExternalImageToTexture({source:S},{texture:n},[S.width,S.height])}{let B=await fetch(new t.U(t(475)).toString()),P=await createImageBitmap(await B.blob());a=h.createTexture({size:[P.width,P.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),h.queue.copyExternalImageToTexture({source:P},{texture:a},[P.width,P.height])}let T=h.createSampler({magFilter:"linear",minFilter:"linear"});function E(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:32,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=[],s=[];n=Math.max(3,Math.floor(n)),t=Math.max(2,Math.floor(t));let o=r.R3.create(),u=r.R3.create(),c=r.R3.create(),d=0,l=[];for(let m=0;m<=t;m++){let h=[],p=m/t,f=0;0===m?f=.5/n:m===t&&(f=-.5/n);for(let g=0;g<=n;g++){let x=g/n;if(g==n)r.R3.copy(o,u);else if(0==g||0!=m&&m!==t){let v=e+(Math.random()-.5)*2*a*e;u[0]=-v*Math.cos(x*Math.PI*2)*Math.sin(p*Math.PI),u[1]=v*Math.cos(p*Math.PI),u[2]=v*Math.sin(x*Math.PI*2)*Math.sin(p*Math.PI),0==g&&r.R3.copy(u,o)}i.push(...u),r.R3.copy(u,c),r.R3.normalize(c,c),i.push(...c),i.push(x+f,1-p),h.push(d++)}l.push(h)}for(let b=0;b<t;b++)for(let w=0;w<n;w++){let y=l[b][w+1],M=l[b][w],S=l[b+1][w],B=l[b+1][w+1];0!==b&&s.push(y,M,B),b!==t-1&&s.push(M,S,B)}return{vertices:new Float32Array(i),indices:new Uint16Array(s)}}(e,n,t,a),s=h.createBuffer({size:i.vertices.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(s.getMappedRange()).set(i.vertices),s.unmap();let o=h.createBuffer({size:i.indices.byteLength,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0});return new Uint16Array(o.getMappedRange()).set(i.indices),o.unmap(),{vertices:s,indices:o,indexCount:i.indices.length}}function U(e,n){let t=h.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!0});new Float32Array(t.getMappedRange()).set(n),t.unmap();let r=h.createBindGroup({layout:b.getBindGroupLayout(1),entries:[{binding:0,resource:{buffer:t}},{binding:1,resource:T},{binding:2,resource:e.createView()}]});return r}let R=r._E.create();r._E.identity(R);let G=E(1);G.bindGroup=U(n,R);let C=[E(.01,8,6,.15),E(.013,8,6,.15),E(.017,8,6,.15),E(.02,8,6,.15),E(.03,16,8,.15)],_=[G];function I(){for(let e=_.length;e<=p.asteroidCount;++e){let n=1.7*Math.random()+1.25,t=Math.random()*Math.PI*2,i=Math.sin(t)*n,s=(Math.random()-.5)*.015,o=Math.cos(t)*n;r._E.identity(R),r._E.translate(R,[i,s,o],R),r._E.rotateX(R,Math.random()*Math.PI,R),r._E.rotateY(R,Math.random()*Math.PI,R),_.push({...C[e%C.length],bindGroup:U(a,R)})}}I();let A={colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:w.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},O=u.width/u.height,j=r._E.perspective(2*Math.PI/5,O,1,100),F=r._E.create(),L=h.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:y}}]});function N(e){e.setPipeline(b),e.setBindGroup(0,L);let n=0;for(let t of _)if(e.setBindGroup(1,t.bindGroup),e.setVertexBuffer(0,t.vertices),e.setIndexBuffer(t.indices,"uint16"),e.drawIndexed(t.indexCount),++n>p.asteroidCount)break}function D(){let e=h.createRenderBundleEncoder({colorFormats:[x],depthStencilFormat:"depth24plus"});N(e),o=e.finish()}D(),requestAnimationFrame(function e(){if(!c.active)return;l.begin();let n=function(){let e=r._E.identity();r._E.translate(e,r.R3.fromValues(0,0,-4),e);let n=Date.now()/1e3;return r._E.rotateZ(e,.1*Math.PI,e),r._E.rotateX(e,.1*Math.PI,e),r._E.rotateY(e,.05*n,e),r._E.multiply(j,e,F),F}();h.queue.writeBuffer(y,0,n.buffer,n.byteOffset,n.byteLength),A.colorAttachments[0].view=f.getCurrentTexture().createView();let t=h.createCommandEncoder(),a=t.beginRenderPass(A);p.useRenderBundles?a.executeBundles([o]):N(a),a.end(),h.queue.submit([t.finish()]),l.end(),requestAnimationFrame(e)})},c=()=>(0,a.Tl)({name:"Render Bundles",description:"This example shows how to use render bundles. It renders a large number of\n      meshes individually as a proxy for a more complex scene in order to demonstrate the reduction\n      in JavaScript time spent to issue render commands. (Typically a scene like this would make use\n      of instancing to reduce draw overhead.)",gui:!0,stats:!0,init:u,sources:[{name:o.substring(25),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\nimport { createSphereMesh, SphereLayout } from '../../meshes/sphere';\n\nimport meshWGSL from './mesh.wgsl';\n\ninterface Renderable {\n  vertices: GPUBuffer;\n  indices: GPUBuffer;\n  indexCount: number;\n  bindGroup?: GPUBindGroup;\n}\n\nconst init: SampleInit = async ({ canvas, pageState, gui, stats }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n\n  const settings = {\n    useRenderBundles: true,\n    asteroidCount: 5000,\n  };\n  gui.add(settings, 'useRenderBundles');\n  gui.add(settings, 'asteroidCount', 1000, 10000, 1000).onChange(() => {\n    // If the content of the scene changes the render bundle must be recreated.\n    ensureEnoughAsteroids();\n    updateRenderBundle();\n  });\n\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const shaderModule = device.createShaderModule({\n    code: meshWGSL,\n  });\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: shaderModule,\n      entryPoint: 'vertexMain',\n      buffers: [\n        {\n          arrayStride: SphereLayout.vertexStride,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: SphereLayout.positionsOffset,\n              format: 'float32x3',\n            },\n            {\n              // normal\n              shaderLocation: 1,\n              offset: SphereLayout.normalOffset,\n              format: 'float32x3',\n            },\n            {\n              // uv\n              shaderLocation: 2,\n              offset: SphereLayout.uvOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: shaderModule,\n      entryPoint: 'fragmentMain',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the sphere is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  // Fetch the images and upload them into a GPUTexture.\n  let planetTexture: GPUTexture;\n  {\n    const response = await fetch(\n      new URL('../../../assets/img/saturn.jpg', import.meta.url).toString()\n    );\n    const imageBitmap = await createImageBitmap(await response.blob());\n\n    planetTexture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n    device.queue.copyExternalImageToTexture(\n      { source: imageBitmap },\n      { texture: planetTexture },\n      [imageBitmap.width, imageBitmap.height]\n    );\n  }\n\n  let moonTexture: GPUTexture;\n  {\n    const response = await fetch(\n      new URL('../../../assets/img/moon.jpg', import.meta.url).toString()\n    );\n    const imageBitmap = await createImageBitmap(await response.blob());\n\n    moonTexture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n    device.queue.copyExternalImageToTexture(\n      { source: imageBitmap },\n      { texture: moonTexture },\n      [imageBitmap.width, imageBitmap.height]\n    );\n  }\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  // Helper functions to create the required meshes and bind groups for each sphere.\n  function createSphereRenderable(\n    radius: number,\n    widthSegments = 32,\n    heightSegments = 16,\n    randomness = 0\n  ): Renderable {\n    const sphereMesh = createSphereMesh(\n      radius,\n      widthSegments,\n      heightSegments,\n      randomness\n    );\n\n    // Create a vertex buffer from the sphere data.\n    const vertices = device.createBuffer({\n      size: sphereMesh.vertices.byteLength,\n      usage: GPUBufferUsage.VERTEX,\n      mappedAtCreation: true,\n    });\n    new Float32Array(vertices.getMappedRange()).set(sphereMesh.vertices);\n    vertices.unmap();\n\n    const indices = device.createBuffer({\n      size: sphereMesh.indices.byteLength,\n      usage: GPUBufferUsage.INDEX,\n      mappedAtCreation: true,\n    });\n    new Uint16Array(indices.getMappedRange()).set(sphereMesh.indices);\n    indices.unmap();\n\n    return {\n      vertices,\n      indices,\n      indexCount: sphereMesh.indices.length,\n    };\n  }\n\n  function createSphereBindGroup(\n    texture: GPUTexture,\n    transform: Float32Array\n  ): GPUBindGroup {\n    const uniformBufferSize = 4 * 16; // 4x4 matrix\n    const uniformBuffer = device.createBuffer({\n      size: uniformBufferSize,\n      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n      mappedAtCreation: true,\n    });\n    new Float32Array(uniformBuffer.getMappedRange()).set(transform);\n    uniformBuffer.unmap();\n\n    const bindGroup = device.createBindGroup({\n      layout: pipeline.getBindGroupLayout(1),\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: sampler,\n        },\n        {\n          binding: 2,\n          resource: texture.createView(),\n        },\n      ],\n    });\n\n    return bindGroup;\n  }\n\n  const transform = mat4.create();\n  mat4.identity(transform);\n\n  // Create one large central planet surrounded by a large ring of asteroids\n  const planet = createSphereRenderable(1.0);\n  planet.bindGroup = createSphereBindGroup(planetTexture, transform);\n\n  const asteroids = [\n    createSphereRenderable(0.01, 8, 6, 0.15),\n    createSphereRenderable(0.013, 8, 6, 0.15),\n    createSphereRenderable(0.017, 8, 6, 0.15),\n    createSphereRenderable(0.02, 8, 6, 0.15),\n    createSphereRenderable(0.03, 16, 8, 0.15),\n  ];\n\n  const renderables = [planet];\n\n  function ensureEnoughAsteroids() {\n    for (let i = renderables.length; i <= settings.asteroidCount; ++i) {\n      // Place copies of the asteroid in a ring.\n      const radius = Math.random() * 1.7 + 1.25;\n      const angle = Math.random() * Math.PI * 2;\n      const x = Math.sin(angle) * radius;\n      const y = (Math.random() - 0.5) * 0.015;\n      const z = Math.cos(angle) * radius;\n\n      mat4.identity(transform);\n      mat4.translate(transform, [x, y, z], transform);\n      mat4.rotateX(transform, Math.random() * Math.PI, transform);\n      mat4.rotateY(transform, Math.random() * Math.PI, transform);\n      renderables.push({\n        ...asteroids[i % asteroids.length],\n        bindGroup: createSphereBindGroup(moonTexture, transform),\n      });\n    }\n  }\n  ensureEnoughAsteroids();\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n  const modelViewProjectionMatrix = mat4.create();\n\n  const frameBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.identity();\n    mat4.translate(viewMatrix, vec3.fromValues(0, 0, -4), viewMatrix);\n    const now = Date.now() / 1000;\n    // Tilt the view matrix so the planet looks like it's off-axis.\n    mat4.rotateZ(viewMatrix, Math.PI * 0.1, viewMatrix);\n    mat4.rotateX(viewMatrix, Math.PI * 0.1, viewMatrix);\n    // Rotate the view matrix slowly so the planet appears to spin.\n    mat4.rotateY(viewMatrix, now * 0.05, viewMatrix);\n\n    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  // Render bundles function as partial, limited render passes, so we can use the\n  // same code both to render the scene normally and to build the render bundle.\n  function renderScene(\n    passEncoder: GPURenderPassEncoder | GPURenderBundleEncoder\n  ) {\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, frameBindGroup);\n\n    // Loop through every renderable object and draw them individually.\n    // (Because many of these meshes are repeated, with only the transforms\n    // differing, instancing would be highly effective here. This sample\n    // intentionally avoids using instancing in order to emulate a more complex\n    // scene, which helps demonstrate the potential time savings a render bundle\n    // can provide.)\n    let count = 0;\n    for (const renderable of renderables) {\n      passEncoder.setBindGroup(1, renderable.bindGroup);\n      passEncoder.setVertexBuffer(0, renderable.vertices);\n      passEncoder.setIndexBuffer(renderable.indices, 'uint16');\n      passEncoder.drawIndexed(renderable.indexCount);\n\n      if (++count > settings.asteroidCount) {\n        break;\n      }\n    }\n  }\n\n  // The render bundle can be encoded once and re-used as many times as needed.\n  // Because it encodes all of the commands needed to render at the GPU level,\n  // those commands will not need to execute the associated JavaScript code upon\n  // execution or be re-validated, which can represent a significant time savings.\n  //\n  // However, because render bundles are immutable once created, they are only\n  // appropriate for rendering content where the same commands will be executed\n  // every time, with the only changes being the contents of the buffers and\n  // textures used. Cases where the executed commands differ from frame-to-frame,\n  // such as when using frustrum or occlusion culling, will not benefit from\n  // using render bundles as much.\n  let renderBundle;\n  function updateRenderBundle() {\n    const renderBundleEncoder = device.createRenderBundleEncoder({\n      colorFormats: [presentationFormat],\n      depthStencilFormat: 'depth24plus',\n    });\n    renderScene(renderBundleEncoder);\n    renderBundle = renderBundleEncoder.finish();\n  }\n  updateRenderBundle();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    stats.begin();\n\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n\n    if (settings.useRenderBundles) {\n      // Executing a bundle is equivalent to calling all of the commands encoded\n      // in the render bundle as part of the current render pass.\n      passEncoder.executeBundles([renderBundle]);\n    } else {\n      // Alternatively, the same render commands can be encoded manually, which\n      // can take longer since each command needs to be interpreted by the\n      // JavaScript virtual machine and re-validated each time.\n      renderScene(passEncoder);\n    }\n\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    stats.end();\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst RenderBundles: () => JSX.Element = () =>\n  makeSample({\n    name: 'Render Bundles',\n    description: `This example shows how to use render bundles. It renders a large number of\n      meshes individually as a proxy for a more complex scene in order to demonstrate the reduction\n      in JavaScript time spent to issue render commands. (Typically a scene like this would make use\n      of instancing to reduce draw overhead.)`,\n    gui: true,\n    stats: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './mesh.wgsl',\n        contents: meshWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/sphere.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/sphere.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default RenderBundles;\n"},{name:"./mesh.wgsl",contents:s,editable:!0},{name:"../../meshes/sphere.ts",contents:t(8557).Z}],filename:o});var d=c},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},8557:function(e,n){"use strict";n.Z="import { vec3 } from 'wgpu-matrix';\n\nexport interface SphereMesh {\n  vertices: Float32Array;\n  indices: Uint16Array;\n}\n\nexport const SphereLayout = {\n  vertexStride: 8 * 4,\n  positionsOffset: 0,\n  normalOffset: 3 * 4,\n  uvOffset: 6 * 4,\n};\n\n// Borrowed and simplified from https://github.com/mrdoob/three.js/blob/master/src/geometries/SphereGeometry.js\nexport function createSphereMesh(\n  radius: number,\n  widthSegments = 32,\n  heightSegments = 16,\n  randomness = 0\n): SphereMesh {\n  const vertices = [];\n  const indices = [];\n\n  widthSegments = Math.max(3, Math.floor(widthSegments));\n  heightSegments = Math.max(2, Math.floor(heightSegments));\n\n  const firstVertex = vec3.create();\n  const vertex = vec3.create();\n  const normal = vec3.create();\n\n  let index = 0;\n  const grid = [];\n\n  // generate vertices, normals and uvs\n  for (let iy = 0; iy <= heightSegments; iy++) {\n    const verticesRow = [];\n    const v = iy / heightSegments;\n\n    // special case for the poles\n    let uOffset = 0;\n    if (iy === 0) {\n      uOffset = 0.5 / widthSegments;\n    } else if (iy === heightSegments) {\n      uOffset = -0.5 / widthSegments;\n    }\n\n    for (let ix = 0; ix <= widthSegments; ix++) {\n      const u = ix / widthSegments;\n\n      // Poles should just use the same position all the way around.\n      if (ix == widthSegments) {\n        vec3.copy(firstVertex, vertex);\n      } else if (ix == 0 || (iy != 0 && iy !== heightSegments)) {\n        const rr = radius + (Math.random() - 0.5) * 2 * randomness * radius;\n\n        // vertex\n        vertex[0] = -rr * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI);\n        vertex[1] = rr * Math.cos(v * Math.PI);\n        vertex[2] = rr * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI);\n\n        if (ix == 0) {\n          vec3.copy(vertex, firstVertex);\n        }\n      }\n\n      vertices.push(...vertex);\n\n      // normal\n      vec3.copy(vertex, normal);\n      vec3.normalize(normal, normal);\n      vertices.push(...normal);\n\n      // uv\n      vertices.push(u + uOffset, 1 - v);\n      verticesRow.push(index++);\n    }\n\n    grid.push(verticesRow);\n  }\n\n  // indices\n  for (let iy = 0; iy < heightSegments; iy++) {\n    for (let ix = 0; ix < widthSegments; ix++) {\n      const a = grid[iy][ix + 1];\n      const b = grid[iy][ix];\n      const c = grid[iy + 1][ix];\n      const d = grid[iy + 1][ix + 1];\n\n      if (iy !== 0) indices.push(a, b, d);\n      if (iy !== heightSegments - 1) indices.push(b, c, d);\n    }\n  }\n\n  return {\n    vertices: new Float32Array(vertices),\n    indices: new Uint16Array(indices),\n  };\n}\n"},475:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/moon.4c08987edf01a109.jpg"},9836:function(e,n,t){"use strict";e.exports=t.p+"static/assets/img/saturn.630a019530ef5704.jpg"}}]);