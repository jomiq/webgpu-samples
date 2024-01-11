(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return d},hu:function(){return p}});var r=t(5893),i=t(9008),a=t.n(i),o=t(1163),s=t(7294),l=t(9147),u=t.n(l);t(7319);let c=e=>{let n=(0,s.useRef)(null),i=(0,s.useRef)(null),l=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:i}=e;return{name:n,...function(e){let n;let i=null;{i=document.createElement("div");let a=t(4631);n=a(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){i&&t&&(t.appendChild(i),n.setOption("value",e))}})})}}}(i)}}),e.sources),c=(0,s.useRef)(null),d=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376),r=new n.GUI({autoPlace:!1});return r.domElement.style.position="relative",r.domElement.style.zIndex="1000",r}},[]),p=(0,s.useRef)(null),f=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),m=(0,o.useRouter)(),v=m.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[g,h]=(0,s.useState)(null),[b,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(v?x(v[1]):x(l[0].name),d&&c.current)for(c.current.appendChild(d.domElement);d.__controllers.length>0;)d.__controllers[0].remove();f&&p.current&&(f.dom.style.position="absolute",f.showPanel(1),p.current.appendChild(f.dom));let t={active:!0},r=()=>{t.active=!1};try{let i=n.current;if(!i)throw Error("The canvas is not available");let a=e.init({canvas:i,pageState:t,gui:d,stats:f});a instanceof Promise&&a.catch(e=>{console.error(e),h(e)})}catch(o){console.error(o),h(o)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),g?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(g)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:p}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,ref:i,children:(0,r.jsx)("div",{className:u().sourceFileScrollContainer,onScroll(e){let n=e.currentTarget,t=n.scrollWidth-n.clientWidth-n.scrollLeft;n.scrollLeft>25?i.current.setAttribute("data-left","true"):i.current.setAttribute("data-left","false"),t>25?i.current.setAttribute("data-right","true"):i.current.setAttribute("data-right","false")},children:(0,r.jsx)("ul",{children:l.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":b==e.name,onClick(){x(e.name)},children:e.name})},n))})})}),l.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":b==e.name},n))]})]})},d=e=>(0,r.jsx)(c,{...e});function p(e,n){if(!e)throw Error(n)}},6167:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(6416),i=t(5671),a="////////////////////////////////////////////////////////////////////////////////\n// Utilities\n////////////////////////////////////////////////////////////////////////////////\nvar<private> rand_seed : vec2<f32>;\n\nfn init_rand(invocation_id : u32, seed : vec4<f32>) {\n  rand_seed = seed.xz;\n  rand_seed = fract(rand_seed * cos(35.456+f32(invocation_id) * seed.yw));\n  rand_seed = fract(rand_seed * cos(41.235+f32(invocation_id) * seed.xw));\n}\n\nfn rand() -> f32 {\n  rand_seed.x = fract(cos(dot(rand_seed, vec2<f32>(23.14077926, 232.61690225))) * 136.8168);\n  rand_seed.y = fract(cos(dot(rand_seed, vec2<f32>(54.47856553, 345.84153136))) * 534.7645);\n  return rand_seed.y;\n}\n\n////////////////////////////////////////////////////////////////////////////////\n// Vertex shader\n////////////////////////////////////////////////////////////////////////////////\nstruct RenderParams {\n  modelViewProjectionMatrix : mat4x4<f32>,\n  right : vec3<f32>,\n  up : vec3<f32>\n}\n@binding(0) @group(0) var<uniform> render_params : RenderParams;\n\nstruct VertexInput {\n  @location(0) position : vec3<f32>,\n  @location(1) color : vec4<f32>,\n  @location(2) quad_pos : vec2<f32>, // -1..+1\n}\n\nstruct VertexOutput {\n  @builtin(position) position : vec4<f32>,\n  @location(0) color : vec4<f32>,\n  @location(1) quad_pos : vec2<f32>, // -1..+1\n}\n\n@vertex\nfn vs_main(in : VertexInput) -> VertexOutput {\n  var quad_pos = mat2x3<f32>(render_params.right, render_params.up) * in.quad_pos;\n  var position = in.position + quad_pos * 0.01;\n  var out : VertexOutput;\n  out.position = render_params.modelViewProjectionMatrix * vec4<f32>(position, 1.0);\n  out.color = in.color;\n  out.quad_pos = in.quad_pos;\n  return out;\n}\n\n////////////////////////////////////////////////////////////////////////////////\n// Fragment shader\n////////////////////////////////////////////////////////////////////////////////\n@fragment\nfn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {\n  var color = in.color;\n  // Apply a circular particle alpha mask\n  color.a = color.a * max(1.0 - length(in.quad_pos), 0.0);\n  return color;\n}\n\n////////////////////////////////////////////////////////////////////////////////\n// Simulation Compute shader\n////////////////////////////////////////////////////////////////////////////////\nstruct SimulationParams {\n  deltaTime : f32,\n  seed : vec4<f32>,\n}\n\nstruct Particle {\n  position : vec3<f32>,\n  lifetime : f32,\n  color    : vec4<f32>,\n  velocity : vec3<f32>,\n}\n\nstruct Particles {\n  particles : array<Particle>,\n}\n\n@binding(0) @group(0) var<uniform> sim_params : SimulationParams;\n@binding(1) @group(0) var<storage, read_write> data : Particles;\n@binding(2) @group(0) var texture : texture_2d<f32>;\n\n@compute @workgroup_size(64)\nfn simulate(@builtin(global_invocation_id) global_invocation_id : vec3<u32>) {\n  let idx = global_invocation_id.x;\n\n  init_rand(idx, sim_params.seed);\n\n  var particle = data.particles[idx];\n\n  // Apply gravity\n  particle.velocity.z = particle.velocity.z - sim_params.deltaTime * 0.5;\n\n  // Basic velocity integration\n  particle.position = particle.position + sim_params.deltaTime * particle.velocity;\n\n  // Age each particle. Fade out before vanishing.\n  particle.lifetime = particle.lifetime - sim_params.deltaTime;\n  particle.color.a = smoothstep(0.0, 0.5, particle.lifetime);\n\n  // If the lifetime has gone negative, then the particle is dead and should be\n  // respawned.\n  if (particle.lifetime < 0.0) {\n    // Use the probability map to find where the particle should be spawned.\n    // Starting with the 1x1 mip level.\n    var coord : vec2<i32>;\n    for (var level = u32(textureNumLevels(texture) - 1); level > 0; level--) {\n      // Load the probability value from the mip-level\n      // Generate a random number and using the probabilty values, pick the\n      // next texel in the next largest mip level:\n      //\n      // 0.0    probabilites.r    probabilites.g    probabilites.b   1.0\n      //  |              |              |              |              |\n      //  |   TOP-LEFT   |  TOP-RIGHT   | BOTTOM-LEFT  | BOTTOM_RIGHT |\n      //\n      let probabilites = textureLoad(texture, coord, level);\n      let value = vec4<f32>(rand());\n      let mask = (value >= vec4<f32>(0.0, probabilites.xyz)) & (value < probabilites);\n      coord = coord * 2;\n      coord.x = coord.x + select(0, 1, any(mask.yw)); // x  y\n      coord.y = coord.y + select(0, 1, any(mask.zw)); // z  w\n    }\n    let uv = vec2<f32>(coord) / vec2<f32>(textureDimensions(texture));\n    particle.position = vec3<f32>((uv - 0.5) * 3.0 * vec2<f32>(1.0, -1.0), 0.0);\n    particle.color = textureLoad(texture, coord, 0);\n    particle.velocity.x = (rand() - 0.5) * 0.1;\n    particle.velocity.y = (rand() - 0.5) * 0.1;\n    particle.velocity.z = rand() * 0.3;\n    particle.lifetime = 0.5 + rand() * 3.0;\n  }\n\n  // Store the new particle value\n  data.particles[idx] = particle;\n}\n",o="struct UBO {\n  width : u32,\n}\n\nstruct Buffer {\n  weights : array<f32>,\n}\n\n@binding(0) @group(0) var<uniform> ubo : UBO;\n@binding(1) @group(0) var<storage, read> buf_in : Buffer;\n@binding(2) @group(0) var<storage, read_write> buf_out : Buffer;\n@binding(3) @group(0) var tex_in : texture_2d<f32>;\n@binding(3) @group(0) var tex_out : texture_storage_2d<rgba8unorm, write>;\n\n\n////////////////////////////////////////////////////////////////////////////////\n// import_level\n//\n// Loads the alpha channel from a texel of the source image, and writes it to\n// the buf_out.weights.\n////////////////////////////////////////////////////////////////////////////////\n@compute @workgroup_size(64)\nfn import_level(@builtin(global_invocation_id) coord : vec3<u32>) {\n  _ = &buf_in;\n  let offset = coord.x + coord.y * ubo.width;\n  buf_out.weights[offset] = textureLoad(tex_in, vec2<i32>(coord.xy), 0).w;\n}\n\n////////////////////////////////////////////////////////////////////////////////\n// export_level\n//\n// Loads 4 f32 weight values from buf_in.weights, and stores summed value into\n// buf_out.weights, along with the calculated 'probabilty' vec4 values into the\n// mip level of tex_out. See simulate() in particle.wgsl to understand the\n// probability logic.\n////////////////////////////////////////////////////////////////////////////////\n@compute @workgroup_size(64)\nfn export_level(@builtin(global_invocation_id) coord : vec3<u32>) {\n  if (all(coord.xy < vec2<u32>(textureDimensions(tex_out)))) {\n    let dst_offset = coord.x    + coord.y    * ubo.width;\n    let src_offset = coord.x*2u + coord.y*2u * ubo.width;\n\n    let a = buf_in.weights[src_offset + 0u];\n    let b = buf_in.weights[src_offset + 1u];\n    let c = buf_in.weights[src_offset + 0u + ubo.width];\n    let d = buf_in.weights[src_offset + 1u + ubo.width];\n    let sum = dot(vec4<f32>(a, b, c, d), vec4<f32>(1.0));\n\n    buf_out.weights[dst_offset] = sum / 4.0;\n\n    let probabilities = vec4<f32>(a, a+b, a+b+c, sum) / max(sum, 0.0001);\n    textureStore(tex_out, vec2<i32>(coord.xy), probabilities);\n  }\n}\n",s="src/sample/particles/main.ts";let l=async e=>{let n,{canvas:t,pageState:i,gui:s}=e,l=await navigator.gpu.requestAdapter(),u=await l.requestDevice();if(!i.active)return;let c=t.getContext("webgpu"),d=window.devicePixelRatio;t.width=t.clientWidth*d,t.height=t.clientHeight*d;let p=navigator.gpu.getPreferredCanvasFormat();c.configure({device:u,format:p,alphaMode:"premultiplied"});let f=u.createBuffer({size:24e5,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE}),m=u.createRenderPipeline({layout:"auto",vertex:{module:u.createShaderModule({code:a}),entryPoint:"vs_main",buffers:[{arrayStride:48,stepMode:"instance",attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:16,format:"float32x4"}]},{arrayStride:8,stepMode:"vertex",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:u.createShaderModule({code:a}),entryPoint:"fs_main",targets:[{format:p,blend:{color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"},alpha:{srcFactor:"zero",dstFactor:"one",operation:"add"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"less",format:"depth24plus"}}),v=u.createTexture({size:[t.width,t.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),g=u.createBuffer({size:96,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=u.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:g}}]}),b={colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:v.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},x=u.createBuffer({size:48,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(x.getMappedRange()).set([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),x.unmap();let _=1,w=1,P=1;{let y=await fetch("../assets/img/webgpu.png"),B=await createImageBitmap(await y.blob());for(;_<B.width||w<B.height;)_*=2,w*=2,P++;n=u.createTexture({size:[B.width,B.height,1],mipLevelCount:P,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),u.queue.copyExternalImageToTexture({source:B},{texture:n},[B.width,B.height])}{let E=u.createComputePipeline({layout:"auto",compute:{module:u.createShaderModule({code:o}),entryPoint:"import_level"}}),U=u.createComputePipeline({layout:"auto",compute:{module:u.createShaderModule({code:o}),entryPoint:"export_level"}}),G=u.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),T=u.createBuffer({size:_*w*4,usage:GPUBufferUsage.STORAGE}),S=u.createBuffer({size:_*w*4,usage:GPUBufferUsage.STORAGE});u.queue.writeBuffer(G,0,new Int32Array([_]));let M=u.createCommandEncoder();for(let C=0;C<P;C++){let O=_>>C,L=w>>C,R=0==C?E.getBindGroupLayout(0):U.getBindGroupLayout(0),A=u.createBindGroup({layout:R,entries:[{binding:0,resource:{buffer:G}},{binding:1,resource:{buffer:1&C?T:S}},{binding:2,resource:{buffer:1&C?S:T}},{binding:3,resource:n.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:C,mipLevelCount:1})}]});if(0==C){let z=M.beginComputePass();z.setPipeline(E),z.setBindGroup(0,A),z.dispatchWorkgroups(Math.ceil(O/64),L),z.end()}else{let F=M.beginComputePass();F.setPipeline(U),F.setBindGroup(0,A),F.dispatchWorkgroups(Math.ceil(O/64),L),F.end()}}u.queue.submit([M.finish()])}let I={simulate:!0,deltaTime:.04},V=u.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});Object.keys(I).forEach(e=>{s.add(I,e)});let j=u.createComputePipeline({layout:"auto",compute:{module:u.createShaderModule({code:a}),entryPoint:"simulate"}}),q=u.createBindGroup({layout:j.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:V}},{binding:1,resource:{buffer:f,offset:0,size:24e5}},{binding:2,resource:n.createView()}]}),N=t.width/t.height,W=r._E.perspective(2*Math.PI/5,N,1,100),k=r._E.create(),D=r._E.create();requestAnimationFrame(function e(){if(!i.active)return;u.queue.writeBuffer(V,0,new Float32Array([I.simulate?I.deltaTime:0,0,0,0,100*Math.random(),100*Math.random(),1+Math.random(),1+Math.random()])),r._E.identity(k),r._E.translate(k,r.R3.fromValues(0,0,-3),k),r._E.rotateX(k,-.2*Math.PI,k),r._E.multiply(W,k,D),u.queue.writeBuffer(g,0,new Float32Array([D[0],D[1],D[2],D[3],D[4],D[5],D[6],D[7],D[8],D[9],D[10],D[11],D[12],D[13],D[14],D[15],k[0],k[4],k[8],0,k[1],k[5],k[9],0]));let n=c.getCurrentTexture();b.colorAttachments[0].view=n.createView();let t=u.createCommandEncoder();{let a=t.beginComputePass();a.setPipeline(j),a.setBindGroup(0,q),a.dispatchWorkgroups(Math.ceil(781.25)),a.end()}{let o=t.beginRenderPass(b);o.setPipeline(m),o.setBindGroup(0,h),o.setVertexBuffer(0,f),o.setVertexBuffer(1,x),o.draw(6,5e4,0,0),o.end()}u.queue.submit([t.finish()]),requestAnimationFrame(e)})},u=()=>(0,i.Tl)({name:"Particles",description:"This example demonstrates rendering of particles simulated with compute shaders.",gui:!0,init:l,sources:[{name:s.substring(21),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport particleWGSL from './particle.wgsl';\nimport probabilityMapWGSL from './probabilityMap.wgsl';\n\nconst numParticles = 50000;\nconst particlePositionOffset = 0;\nconst particleColorOffset = 4 * 4;\nconst particleInstanceByteSize =\n  3 * 4 + // position\n  1 * 4 + // lifetime\n  4 * 4 + // color\n  3 * 4 + // velocity\n  1 * 4 + // padding\n  0;\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const particlesBuffer = device.createBuffer({\n    size: numParticles * particleInstanceByteSize,\n    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,\n  });\n\n  const renderPipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: particleWGSL,\n      }),\n      entryPoint: 'vs_main',\n      buffers: [\n        {\n          // instanced particles buffer\n          arrayStride: particleInstanceByteSize,\n          stepMode: 'instance',\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: particlePositionOffset,\n              format: 'float32x3',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: particleColorOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n        {\n          // quad vertex buffer\n          arrayStride: 2 * 4, // vec2<f32>\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 2,\n              offset: 0,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: particleWGSL,\n      }),\n      entryPoint: 'fs_main',\n      targets: [\n        {\n          format: presentationFormat,\n          blend: {\n            color: {\n              srcFactor: 'src-alpha',\n              dstFactor: 'one',\n              operation: 'add',\n            },\n            alpha: {\n              srcFactor: 'zero',\n              dstFactor: 'one',\n              operation: 'add',\n            },\n          },\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n\n    depthStencil: {\n      depthWriteEnabled: false,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize =\n    4 * 4 * 4 + // modelViewProjectionMatrix : mat4x4<f32>\n    3 * 4 + // right : vec3<f32>\n    4 + // padding\n    3 * 4 + // up : vec3<f32>\n    4 + // padding\n    0;\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: renderPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  //////////////////////////////////////////////////////////////////////////////\n  // Quad vertex buffer\n  //////////////////////////////////////////////////////////////////////////////\n  const quadVertexBuffer = device.createBuffer({\n    size: 6 * 2 * 4, // 6x vec2<f32>\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  // prettier-ignore\n  const vertexData = [\n    -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0,\n  ];\n  new Float32Array(quadVertexBuffer.getMappedRange()).set(vertexData);\n  quadVertexBuffer.unmap();\n\n  //////////////////////////////////////////////////////////////////////////////\n  // Texture\n  //////////////////////////////////////////////////////////////////////////////\n  let texture: GPUTexture;\n  let textureWidth = 1;\n  let textureHeight = 1;\n  let numMipLevels = 1;\n  {\n    const response = await fetch('../assets/img/webgpu.png');\n    const imageBitmap = await createImageBitmap(await response.blob());\n\n    // Calculate number of mip levels required to generate the probability map\n    while (\n      textureWidth < imageBitmap.width ||\n      textureHeight < imageBitmap.height\n    ) {\n      textureWidth *= 2;\n      textureHeight *= 2;\n      numMipLevels++;\n    }\n    texture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      mipLevelCount: numMipLevels,\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.STORAGE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n    device.queue.copyExternalImageToTexture(\n      { source: imageBitmap },\n      { texture: texture },\n      [imageBitmap.width, imageBitmap.height]\n    );\n  }\n\n  //////////////////////////////////////////////////////////////////////////////\n  // Probability map generation\n  // The 0'th mip level of texture holds the color data and spawn-probability in\n  // the alpha channel. The mip levels 1..N are generated to hold spawn\n  // probabilities up to the top 1x1 mip level.\n  //////////////////////////////////////////////////////////////////////////////\n  {\n    const probabilityMapImportLevelPipeline = device.createComputePipeline({\n      layout: 'auto',\n      compute: {\n        module: device.createShaderModule({ code: probabilityMapWGSL }),\n        entryPoint: 'import_level',\n      },\n    });\n    const probabilityMapExportLevelPipeline = device.createComputePipeline({\n      layout: 'auto',\n      compute: {\n        module: device.createShaderModule({ code: probabilityMapWGSL }),\n        entryPoint: 'export_level',\n      },\n    });\n\n    const probabilityMapUBOBufferSize =\n      1 * 4 + // stride\n      3 * 4 + // padding\n      0;\n    const probabilityMapUBOBuffer = device.createBuffer({\n      size: probabilityMapUBOBufferSize,\n      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n    });\n    const buffer_a = device.createBuffer({\n      size: textureWidth * textureHeight * 4,\n      usage: GPUBufferUsage.STORAGE,\n    });\n    const buffer_b = device.createBuffer({\n      size: textureWidth * textureHeight * 4,\n      usage: GPUBufferUsage.STORAGE,\n    });\n    device.queue.writeBuffer(\n      probabilityMapUBOBuffer,\n      0,\n      new Int32Array([textureWidth])\n    );\n    const commandEncoder = device.createCommandEncoder();\n    for (let level = 0; level < numMipLevels; level++) {\n      const levelWidth = textureWidth >> level;\n      const levelHeight = textureHeight >> level;\n      const pipeline =\n        level == 0\n          ? probabilityMapImportLevelPipeline.getBindGroupLayout(0)\n          : probabilityMapExportLevelPipeline.getBindGroupLayout(0);\n      const probabilityMapBindGroup = device.createBindGroup({\n        layout: pipeline,\n        entries: [\n          {\n            // ubo\n            binding: 0,\n            resource: { buffer: probabilityMapUBOBuffer },\n          },\n          {\n            // buf_in\n            binding: 1,\n            resource: { buffer: level & 1 ? buffer_a : buffer_b },\n          },\n          {\n            // buf_out\n            binding: 2,\n            resource: { buffer: level & 1 ? buffer_b : buffer_a },\n          },\n          {\n            // tex_in / tex_out\n            binding: 3,\n            resource: texture.createView({\n              format: 'rgba8unorm',\n              dimension: '2d',\n              baseMipLevel: level,\n              mipLevelCount: 1,\n            }),\n          },\n        ],\n      });\n      if (level == 0) {\n        const passEncoder = commandEncoder.beginComputePass();\n        passEncoder.setPipeline(probabilityMapImportLevelPipeline);\n        passEncoder.setBindGroup(0, probabilityMapBindGroup);\n        passEncoder.dispatchWorkgroups(Math.ceil(levelWidth / 64), levelHeight);\n        passEncoder.end();\n      } else {\n        const passEncoder = commandEncoder.beginComputePass();\n        passEncoder.setPipeline(probabilityMapExportLevelPipeline);\n        passEncoder.setBindGroup(0, probabilityMapBindGroup);\n        passEncoder.dispatchWorkgroups(Math.ceil(levelWidth / 64), levelHeight);\n        passEncoder.end();\n      }\n    }\n    device.queue.submit([commandEncoder.finish()]);\n  }\n\n  //////////////////////////////////////////////////////////////////////////////\n  // Simulation compute pipeline\n  //////////////////////////////////////////////////////////////////////////////\n  const simulationParams = {\n    simulate: true,\n    deltaTime: 0.04,\n  };\n\n  const simulationUBOBufferSize =\n    1 * 4 + // deltaTime\n    3 * 4 + // padding\n    4 * 4 + // seed\n    0;\n  const simulationUBOBuffer = device.createBuffer({\n    size: simulationUBOBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  Object.keys(simulationParams).forEach((k) => {\n    gui.add(simulationParams, k);\n  });\n\n  const computePipeline = device.createComputePipeline({\n    layout: 'auto',\n    compute: {\n      module: device.createShaderModule({\n        code: particleWGSL,\n      }),\n      entryPoint: 'simulate',\n    },\n  });\n  const computeBindGroup = device.createBindGroup({\n    layout: computePipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: simulationUBOBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: particlesBuffer,\n          offset: 0,\n          size: numParticles * particleInstanceByteSize,\n        },\n      },\n      {\n        binding: 2,\n        resource: texture.createView(),\n      },\n    ],\n  });\n\n  const aspect = canvas.width / canvas.height;\n  const projection = mat4.perspective((2 * Math.PI) / 5, aspect, 1, 100.0);\n  const view = mat4.create();\n  const mvp = mat4.create();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    device.queue.writeBuffer(\n      simulationUBOBuffer,\n      0,\n      new Float32Array([\n        simulationParams.simulate ? simulationParams.deltaTime : 0.0,\n        0.0,\n        0.0,\n        0.0, // padding\n        Math.random() * 100,\n        Math.random() * 100, // seed.xy\n        1 + Math.random(),\n        1 + Math.random(), // seed.zw\n      ])\n    );\n\n    mat4.identity(view);\n    mat4.translate(view, vec3.fromValues(0, 0, -3), view);\n    mat4.rotateX(view, Math.PI * -0.2, view);\n    mat4.multiply(projection, view, mvp);\n\n    // prettier-ignore\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      new Float32Array([\n        // modelViewProjectionMatrix\n        mvp[0], mvp[1], mvp[2], mvp[3],\n        mvp[4], mvp[5], mvp[6], mvp[7],\n        mvp[8], mvp[9], mvp[10], mvp[11],\n        mvp[12], mvp[13], mvp[14], mvp[15],\n\n        view[0], view[4], view[8], // right\n\n        0, // padding\n\n        view[1], view[5], view[9], // up\n\n        0, // padding\n      ])\n    );\n    const swapChainTexture = context.getCurrentTexture();\n    // prettier-ignore\n    renderPassDescriptor.colorAttachments[0].view = swapChainTexture.createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      const passEncoder = commandEncoder.beginComputePass();\n      passEncoder.setPipeline(computePipeline);\n      passEncoder.setBindGroup(0, computeBindGroup);\n      passEncoder.dispatchWorkgroups(Math.ceil(numParticles / 64));\n      passEncoder.end();\n    }\n    {\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n      passEncoder.setPipeline(renderPipeline);\n      passEncoder.setBindGroup(0, uniformBindGroup);\n      passEncoder.setVertexBuffer(0, particlesBuffer);\n      passEncoder.setVertexBuffer(1, quadVertexBuffer);\n      passEncoder.draw(6, numParticles, 0, 0);\n      passEncoder.end();\n    }\n\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst Particles: () => JSX.Element = () =>\n  makeSample({\n    name: 'Particles',\n    description:\n      'This example demonstrates rendering of particles simulated with compute shaders.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './particle.wgsl',\n        contents: particleWGSL,\n        editable: true,\n      },\n      {\n        name: './probabilityMap.wgsl',\n        contents: probabilityMapWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default Particles;\n"},{name:"./particle.wgsl",contents:a,editable:!0},{name:"./probabilityMap.wgsl",contents:o,editable:!0}],filename:s});var c=u},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileScrollContainer:"SampleLayout_sourceFileScrollContainer__LsNEm",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);