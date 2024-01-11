(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[841],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return c},hu:function(){return f}});var r=t(5893),i=t(9008),a=t.n(i),o=t(1163),s=t(7294),u=t(9147),l=t.n(u);t(7319);let d=e=>{let n=(0,s.useRef)(null),i=(0,s.useRef)(null),u=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:i}=e;return{name:n,...function(e){let n;let i=null;{i=document.createElement("div");let a=t(4631);n=a(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){i&&t&&(t.appendChild(i),n.setOption("value",e))}})})}}}(i)}}),e.sources),d=(0,s.useRef)(null),c=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376),r=new n.GUI({autoPlace:!1});return r.domElement.style.position="relative",r.domElement.style.zIndex="1000",r}},[]),f=(0,s.useRef)(null),m=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),p=(0,o.useRouter)(),g=p.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[y,E]=(0,s.useState)(null),[v,h]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(g?h(g[1]):h(u[0].name),c&&d.current)for(d.current.appendChild(c.domElement);c.__controllers.length>0;)c.__controllers[0].remove();m&&f.current&&(m.dom.style.position="absolute",m.showPanel(1),f.current.appendChild(m.dom));let t={active:!0},r=()=>{t.active=!1};try{let i=n.current;if(!i)throw Error("The canvas is not available");let a=e.init({canvas:i,pageState:t,gui:c,stats:m});a instanceof Promise&&a.catch(e=>{console.error(e),E(e)})}catch(o){console.error(o),E(o)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),y?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(y)})]}):null]}),(0,r.jsxs)("div",{className:l().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:f}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:d}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:l().sourceFileNav,ref:i,children:(0,r.jsx)("div",{className:l().sourceFileScrollContainer,onScroll(e){let n=e.currentTarget,t=n.scrollWidth-n.clientWidth-n.scrollLeft;n.scrollLeft>25?i.current.setAttribute("data-left","true"):i.current.setAttribute("data-left","false"),t>25?i.current.setAttribute("data-right","true"):i.current.setAttribute("data-right","false")},children:(0,r.jsx)("ul",{children:u.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){h(e.name)},children:e.name})},n))})})}),u.map((e,n)=>(0,r.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":v==e.name},n))]})]})},c=e=>(0,r.jsx)(d,{...e});function f(e,n){if(!e)throw Error(n)}},841:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(5671),i="struct Time {\n  value : f32,\n}\n\nstruct Uniforms {\n  scale : f32,\n  offsetX : f32,\n  offsetY : f32,\n  scalar : f32,\n  scalarOffset : f32,\n}\n\n@binding(0) @group(0) var<uniform> time : Time;\n@binding(0) @group(1) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) v_color : vec4<f32>,\n}\n\n@vertex\nfn vert_main(\n  @location(0) position : vec4<f32>,\n  @location(1) color : vec4<f32>\n) -> VertexOutput {\n  var fade = (uniforms.scalarOffset + time.value * uniforms.scalar / 10.0) % 1.0;\n  if (fade < 0.5) {\n    fade = fade * 2.0;\n  } else {\n    fade = (1.0 - fade) * 2.0;\n  }\n  var xpos = position.x * uniforms.scale;\n  var ypos = position.y * uniforms.scale;\n  var angle = 3.14159 * 2.0 * fade;\n  var xrot = xpos * cos(angle) - ypos * sin(angle);\n  var yrot = xpos * sin(angle) + ypos * cos(angle);\n  xpos = xrot + uniforms.offsetX;\n  ypos = yrot + uniforms.offsetY;\n\n  var output : VertexOutput;\n  output.v_color = vec4(fade, 1.0 - fade, 0.0, 1.0) + color;\n  output.Position = vec4(xpos, ypos, 0.0, 1.0);\n  return output;\n}\n\n@fragment\nfn frag_main(@location(0) v_color : vec4<f32>) -> @location(0) vec4<f32> {\n  return v_color;\n}\n",a="src/sample/animometer/main.ts";let o=async e=>{let n,t,a,{canvas:o,pageState:s,gui:u}=e,l=await navigator.gpu.requestAdapter();(0,r.hu)(l,"requestAdapter returned null");let d=await l.requestDevice();if(!s.active)return;let c=document.createElement("div");c.style.color="white",c.style.background="black",c.style.position="absolute",c.style.top="10px",c.style.left="10px";let f=document.createElement("pre");c.appendChild(f),o.parentNode?o.parentNode.appendChild(c):console.error("canvas.parentNode is null");let m=new URLSearchParams(window.location.search),p={numTriangles:Number(m.get("numTriangles"))||2e4,renderBundles:Boolean(m.get("renderBundles")),dynamicOffsets:Boolean(m.get("dynamicOffsets"))},g=o.getContext("webgpu"),y=window.devicePixelRatio;o.width=o.clientWidth*y,o.height=o.clientHeight*y;let E=navigator.gpu.getPreferredCanvasFormat();g.configure({device:d,format:E,alphaMode:"premultiplied",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});let v=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",minBindingSize:4}}]}),h=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",minBindingSize:20}}]}),T=d.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform",hasDynamicOffset:!0,minBindingSize:20}}]}),B=4*Float32Array.BYTES_PER_ELEMENT,b=d.createPipelineLayout({bindGroupLayouts:[v,h]}),P=d.createPipelineLayout({bindGroupLayouts:[v,T]}),_=d.createShaderModule({code:i}),x={layout:"auto",vertex:{module:_,entryPoint:"vert_main",buffers:[{arrayStride:2*B,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:B,format:"float32x4"}]}]},fragment:{module:_,entryPoint:"frag_main",targets:[{format:E}]},primitive:{topology:"triangle-list",frontFace:"ccw",cullMode:"none"}},S=d.createRenderPipeline({...x,layout:b}),A=d.createRenderPipeline({...x,layout:P}),w=d.createBuffer({size:6*B,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});function F(){let e;let n=p.numTriangles,t=5*Float32Array.BYTES_PER_ELEMENT,r=256*Math.ceil(t/256),i=r/Float32Array.BYTES_PER_ELEMENT,a=d.createBuffer({size:n*r+Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM}),o=new Float32Array(n*i),s=Array(n);for(let u=0;u<n;++u)o[i*u+0]=.2*Math.random()+.2,o[i*u+1]=1.8*(Math.random()-.5),o[i*u+2]=1.8*(Math.random()-.5),o[i*u+3]=1.5*Math.random()+.5,o[i*u+4]=10*Math.random(),s[u]=d.createBindGroup({layout:h,entries:[{binding:0,resource:{buffer:a,offset:u*r,size:6*Float32Array.BYTES_PER_ELEMENT}}]});let l=d.createBindGroup({layout:T,entries:[{binding:0,resource:{buffer:a,offset:0,size:6*Float32Array.BYTES_PER_ELEMENT}}]}),c=n*r,f=d.createBindGroup({layout:v,entries:[{binding:0,resource:{buffer:a,offset:c,size:Float32Array.BYTES_PER_ELEMENT}}]}),m=14680064/Float32Array.BYTES_PER_ELEMENT;for(let y=0;y<o.length;y+=m){let B=Math.min(o.length-y,m);d.queue.writeBuffer(a,y*Float32Array.BYTES_PER_ELEMENT,o.buffer,o.byteOffset+y*Float32Array.BYTES_PER_ELEMENT,B*Float32Array.BYTES_PER_ELEMENT)}function b(e){p.dynamicOffsets?e.setPipeline(A):e.setPipeline(S),e.setVertexBuffer(0,w),e.setBindGroup(0,f);let t=[0];for(let i=0;i<n;++i)p.dynamicOffsets?(t[0]=i*r,e.setBindGroup(1,l,t)):e.setBindGroup(1,s[i]),e.draw(3)}let P=new Float32Array([0]),_={colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},x=d.createRenderBundleEncoder({colorFormats:[E]});b(x);let F=x.finish();return function(n){void 0===e&&(e=n),P[0]=(n-e)/1e3,d.queue.writeBuffer(a,c,P.buffer),_.colorAttachments[0].view=g.getCurrentTexture().createView();let t=d.createCommandEncoder(),r=t.beginRenderPass(_);p.renderBundles?r.executeBundles([F]):b(r),r.end(),d.queue.submit([t.finish()])}}new Float32Array(w.getMappedRange()).set([0,.1,0,1,1,0,0,1,-.1,-.1,0,1,0,1,0,1,.1,-.1,0,1,0,0,1,1]),w.unmap();let L=F(),G=()=>{L=F()};void 0===u?console.error("GUI not initialized"):(u.add(p,"numTriangles",0,2e5).step(1).onFinishChange(G),u.add(p,"renderBundles"),u.add(p,"dynamicOffsets"));let M=!0;requestAnimationFrame(function e(r){if(!s.active)return;let i=0;void 0!==n&&(i=r-n),n=r;let o=performance.now();L(r);let u=performance.now()-o;void 0===a&&(a=i),void 0===t&&(t=u),a=.8*a+.2*i,t=.8*t+.2*u,M&&(f.innerHTML="Avg Javascript: ".concat(t.toFixed(2)," ms\nAvg Frame: ").concat(a.toFixed(2)," ms"),M=!1,setTimeout(()=>{M=!0},100)),requestAnimationFrame(e)})},s=()=>(0,r.Tl)({name:"Animometer",description:"A WebGPU port of the Animometer MotionMark benchmark.",gui:!0,init:o,sources:[{name:a.substring(22),contents:"import { assert, makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport animometerWGSL from './animometer.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  assert(adapter, 'requestAdapter returned null');\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n\n  const perfDisplayContainer = document.createElement('div');\n  perfDisplayContainer.style.color = 'white';\n  perfDisplayContainer.style.background = 'black';\n  perfDisplayContainer.style.position = 'absolute';\n  perfDisplayContainer.style.top = '10px';\n  perfDisplayContainer.style.left = '10px';\n\n  const perfDisplay = document.createElement('pre');\n  perfDisplayContainer.appendChild(perfDisplay);\n  if (canvas.parentNode) {\n    canvas.parentNode.appendChild(perfDisplayContainer);\n  } else {\n    console.error('canvas.parentNode is null');\n  }\n\n  const params = new URLSearchParams(window.location.search);\n  const settings = {\n    numTriangles: Number(params.get('numTriangles')) || 20000,\n    renderBundles: Boolean(params.get('renderBundles')),\n    dynamicOffsets: Boolean(params.get('dynamicOffsets')),\n  };\n\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n    usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const timeBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          minBindingSize: 4,\n        },\n      },\n    ],\n  });\n\n  const bindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          minBindingSize: 20,\n        },\n      },\n    ],\n  });\n\n  const dynamicBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n          hasDynamicOffset: true,\n          minBindingSize: 20,\n        },\n      },\n    ],\n  });\n\n  const vec4Size = 4 * Float32Array.BYTES_PER_ELEMENT;\n  const pipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [timeBindGroupLayout, bindGroupLayout],\n  });\n  const dynamicPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [timeBindGroupLayout, dynamicBindGroupLayout],\n  });\n\n  const shaderModule = device.createShaderModule({\n    code: animometerWGSL,\n  });\n  const pipelineDesc: GPURenderPipelineDescriptor = {\n    layout: 'auto',\n    vertex: {\n      module: shaderModule,\n      entryPoint: 'vert_main',\n      buffers: [\n        {\n          // vertex buffer\n          arrayStride: 2 * vec4Size,\n          stepMode: 'vertex',\n          attributes: [\n            {\n              // vertex positions\n              shaderLocation: 0,\n              offset: 0,\n              format: 'float32x4',\n            },\n            {\n              // vertex colors\n              shaderLocation: 1,\n              offset: vec4Size,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: shaderModule,\n      entryPoint: 'frag_main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      frontFace: 'ccw',\n      cullMode: 'none',\n    },\n  };\n\n  const pipeline = device.createRenderPipeline({\n    ...pipelineDesc,\n    layout: pipelineLayout,\n  });\n\n  const dynamicPipeline = device.createRenderPipeline({\n    ...pipelineDesc,\n    layout: dynamicPipelineLayout,\n  });\n\n  const vertexBuffer = device.createBuffer({\n    size: 2 * 3 * vec4Size,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n\n  // prettier-ignore\n  new Float32Array(vertexBuffer.getMappedRange()).set([\n    // position data  /**/ color data\n    0, 0.1, 0, 1,     /**/ 1, 0, 0, 1,\n    -0.1, -0.1, 0, 1, /**/ 0, 1, 0, 1,\n    0.1, -0.1, 0, 1,  /**/ 0, 0, 1, 1,\n  ]);\n  vertexBuffer.unmap();\n\n  function configure() {\n    const numTriangles = settings.numTriangles;\n    const uniformBytes = 5 * Float32Array.BYTES_PER_ELEMENT;\n    const alignedUniformBytes = Math.ceil(uniformBytes / 256) * 256;\n    const alignedUniformFloats =\n      alignedUniformBytes / Float32Array.BYTES_PER_ELEMENT;\n    const uniformBuffer = device.createBuffer({\n      size: numTriangles * alignedUniformBytes + Float32Array.BYTES_PER_ELEMENT,\n      usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,\n    });\n    const uniformBufferData = new Float32Array(\n      numTriangles * alignedUniformFloats\n    );\n    const bindGroups = new Array(numTriangles);\n    for (let i = 0; i < numTriangles; ++i) {\n      uniformBufferData[alignedUniformFloats * i + 0] =\n        Math.random() * 0.2 + 0.2; // scale\n      uniformBufferData[alignedUniformFloats * i + 1] =\n        0.9 * 2 * (Math.random() - 0.5); // offsetX\n      uniformBufferData[alignedUniformFloats * i + 2] =\n        0.9 * 2 * (Math.random() - 0.5); // offsetY\n      uniformBufferData[alignedUniformFloats * i + 3] =\n        Math.random() * 1.5 + 0.5; // scalar\n      uniformBufferData[alignedUniformFloats * i + 4] = Math.random() * 10; // scalarOffset\n\n      bindGroups[i] = device.createBindGroup({\n        layout: bindGroupLayout,\n        entries: [\n          {\n            binding: 0,\n            resource: {\n              buffer: uniformBuffer,\n              offset: i * alignedUniformBytes,\n              size: 6 * Float32Array.BYTES_PER_ELEMENT,\n            },\n          },\n        ],\n      });\n    }\n\n    const dynamicBindGroup = device.createBindGroup({\n      layout: dynamicBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n            offset: 0,\n            size: 6 * Float32Array.BYTES_PER_ELEMENT,\n          },\n        },\n      ],\n    });\n\n    const timeOffset = numTriangles * alignedUniformBytes;\n    const timeBindGroup = device.createBindGroup({\n      layout: timeBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n            offset: timeOffset,\n            size: Float32Array.BYTES_PER_ELEMENT,\n          },\n        },\n      ],\n    });\n\n    // writeBuffer too large may OOM. TODO: The browser should internally chunk uploads.\n    const maxMappingLength =\n      (14 * 1024 * 1024) / Float32Array.BYTES_PER_ELEMENT;\n    for (\n      let offset = 0;\n      offset < uniformBufferData.length;\n      offset += maxMappingLength\n    ) {\n      const uploadCount = Math.min(\n        uniformBufferData.length - offset,\n        maxMappingLength\n      );\n\n      device.queue.writeBuffer(\n        uniformBuffer,\n        offset * Float32Array.BYTES_PER_ELEMENT,\n        uniformBufferData.buffer,\n        uniformBufferData.byteOffset + offset * Float32Array.BYTES_PER_ELEMENT,\n        uploadCount * Float32Array.BYTES_PER_ELEMENT\n      );\n    }\n\n    function recordRenderPass(\n      passEncoder: GPURenderBundleEncoder | GPURenderPassEncoder\n    ) {\n      if (settings.dynamicOffsets) {\n        passEncoder.setPipeline(dynamicPipeline);\n      } else {\n        passEncoder.setPipeline(pipeline);\n      }\n      passEncoder.setVertexBuffer(0, vertexBuffer);\n      passEncoder.setBindGroup(0, timeBindGroup);\n      const dynamicOffsets = [0];\n      for (let i = 0; i < numTriangles; ++i) {\n        if (settings.dynamicOffsets) {\n          dynamicOffsets[0] = i * alignedUniformBytes;\n          passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);\n        } else {\n          passEncoder.setBindGroup(1, bindGroups[i]);\n        }\n        passEncoder.draw(3);\n      }\n    }\n\n    let startTime: number | undefined = undefined;\n    const uniformTime = new Float32Array([0]);\n\n    const renderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: undefined as GPUTextureView, // Assigned later\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear' as const,\n          storeOp: 'store' as const,\n        },\n      ],\n    };\n\n    const renderBundleEncoder = device.createRenderBundleEncoder({\n      colorFormats: [presentationFormat],\n    });\n    recordRenderPass(renderBundleEncoder);\n    const renderBundle = renderBundleEncoder.finish();\n\n    return function doDraw(timestamp: number) {\n      if (startTime === undefined) {\n        startTime = timestamp;\n      }\n      uniformTime[0] = (timestamp - startTime) / 1000;\n      device.queue.writeBuffer(uniformBuffer, timeOffset, uniformTime.buffer);\n\n      renderPassDescriptor.colorAttachments[0].view = context\n        .getCurrentTexture()\n        .createView();\n\n      const commandEncoder = device.createCommandEncoder();\n      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n\n      if (settings.renderBundles) {\n        passEncoder.executeBundles([renderBundle]);\n      } else {\n        recordRenderPass(passEncoder);\n      }\n\n      passEncoder.end();\n      device.queue.submit([commandEncoder.finish()]);\n    };\n  }\n\n  let doDraw = configure();\n\n  const updateSettings = () => {\n    doDraw = configure();\n  };\n  if (gui === undefined) {\n    console.error('GUI not initialized');\n  } else {\n    gui\n      .add(settings, 'numTriangles', 0, 200000)\n      .step(1)\n      .onFinishChange(updateSettings);\n    gui.add(settings, 'renderBundles');\n    gui.add(settings, 'dynamicOffsets');\n  }\n\n  let previousFrameTimestamp: number | undefined = undefined;\n  let jsTimeAvg: number | undefined = undefined;\n  let frameTimeAvg: number | undefined = undefined;\n  let updateDisplay = true;\n\n  function frame(timestamp: number) {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    let frameTime = 0;\n    if (previousFrameTimestamp !== undefined) {\n      frameTime = timestamp - previousFrameTimestamp;\n    }\n    previousFrameTimestamp = timestamp;\n\n    const start = performance.now();\n    doDraw(timestamp);\n    const jsTime = performance.now() - start;\n    if (frameTimeAvg === undefined) {\n      frameTimeAvg = frameTime;\n    }\n    if (jsTimeAvg === undefined) {\n      jsTimeAvg = jsTime;\n    }\n\n    const w = 0.2;\n    frameTimeAvg = (1 - w) * frameTimeAvg + w * frameTime;\n    jsTimeAvg = (1 - w) * jsTimeAvg + w * jsTime;\n\n    if (updateDisplay) {\n      perfDisplay.innerHTML = `Avg Javascript: ${jsTimeAvg.toFixed(\n        2\n      )} ms\\nAvg Frame: ${frameTimeAvg.toFixed(2)} ms`;\n      updateDisplay = false;\n      setTimeout(() => {\n        updateDisplay = true;\n      }, 100);\n    }\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst Animometer: () => JSX.Element = () =>\n  makeSample({\n    name: 'Animometer',\n    description: 'A WebGPU port of the Animometer MotionMark benchmark.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './animometer.wgsl',\n        contents: animometerWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default Animometer;\n"},{name:"./animometer.wgsl",contents:i,editable:!0}],filename:a});var u=s},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileScrollContainer:"SampleLayout_sourceFileScrollContainer__LsNEm",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);