(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();class ge{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i])}get x(){return this.data[0]}set x(e){this.data[0]=e}get y(){return this.data[1]}set y(e){this.data[1]=e}get z(){return this.data[2]}set z(e){this.data[2]=e}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this}toArray(){return[this.data[0],this.data[1],this.data[2]]}}const V={identity(s){return s.fill(0),s[0]=1,s[5]=1,s[10]=1,s[15]=1,s},multiply(s,e,t){let i=e[0],r=e[1],n=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],m=e[10],x=e[11],w=e[12],E=e[13],p=e[14],g=e[15],v=t[0],b=t[1],y=t[2],T=t[3];return s[0]=v*i+b*a+y*d+T*w,s[1]=v*r+b*l+y*u+T*E,s[2]=v*n+b*c+y*m+T*p,s[3]=v*o+b*h+y*x+T*g,v=t[4],b=t[5],y=t[6],T=t[7],s[4]=v*i+b*a+y*d+T*w,s[5]=v*r+b*l+y*u+T*E,s[6]=v*n+b*c+y*m+T*p,s[7]=v*o+b*h+y*x+T*g,v=t[8],b=t[9],y=t[10],T=t[11],s[8]=v*i+b*a+y*d+T*w,s[9]=v*r+b*l+y*u+T*E,s[10]=v*n+b*c+y*m+T*p,s[11]=v*o+b*h+y*x+T*g,v=t[12],b=t[13],y=t[14],T=t[15],s[12]=v*i+b*a+y*d+T*w,s[13]=v*r+b*l+y*u+T*E,s[14]=v*n+b*c+y*m+T*p,s[15]=v*o+b*h+y*x+T*g,s},translate(s,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];if(e===s)s[12]=e[0]*i+e[4]*r+e[8]*n+e[12],s[13]=e[1]*i+e[5]*r+e[9]*n+e[13],s[14]=e[2]*i+e[6]*r+e[10]*n+e[14],s[15]=e[3]*i+e[7]*r+e[11]*n+e[15];else{let o=e[0],a=e[1],l=e[2],c=e[3],h=e[4],d=e[5],u=e[6],m=e[7],x=e[8],w=e[9],E=e[10],p=e[11];s[0]=o,s[1]=a,s[2]=l,s[3]=c,s[4]=h,s[5]=d,s[6]=u,s[7]=m,s[8]=x,s[9]=w,s[10]=E,s[11]=p,s[12]=o*i+h*r+x*n+e[12],s[13]=a*i+d*r+w*n+e[13],s[14]=l*i+u*r+E*n+e[14],s[15]=c*i+m*r+p*n+e[15]}return s},scale(s,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];return s[0]=e[0]*i,s[1]=e[1]*i,s[2]=e[2]*i,s[3]=e[3]*i,s[4]=e[4]*r,s[5]=e[5]*r,s[6]=e[6]*r,s[7]=e[7]*r,s[8]=e[8]*n,s[9]=e[9]*n,s[10]=e[10]*n,s[11]=e[11]*n,s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s},rotateX(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],d=e[10],u=e[11];return e!==s&&(s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[4]=n*r+c*i,s[5]=o*r+h*i,s[6]=a*r+d*i,s[7]=l*r+u*i,s[8]=c*r-n*i,s[9]=h*r-o*i,s[10]=d*r-a*i,s[11]=u*r-l*i,s},rotateY(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[0],o=e[1],a=e[2],l=e[3],c=e[8],h=e[9],d=e[10],u=e[11];return e!==s&&(s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[0]=n*r-c*i,s[1]=o*r-h*i,s[2]=a*r-d*i,s[3]=l*r-u*i,s[8]=n*i+c*r,s[9]=o*i+h*r,s[10]=a*i+d*r,s[11]=l*i+u*r,s},rotateZ(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[0],o=e[1],a=e[2],l=e[3],c=e[4],h=e[5],d=e[6],u=e[7];return e!==s&&(s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=e[11],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[0]=n*r+c*i,s[1]=o*r+h*i,s[2]=a*r+d*i,s[3]=l*r+u*i,s[4]=c*r-n*i,s[5]=h*r-o*i,s[6]=d*r-a*i,s[7]=u*r-l*i,s},invert(s,e){let t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],m=e[11],x=e[12],w=e[13],E=e[14],p=e[15],g=t*a-i*o,v=t*l-r*o,b=t*c-n*o,y=i*l-r*a,T=i*c-n*a,S=r*c-n*l,D=h*w-d*x,P=h*E-u*x,A=h*p-m*x,M=d*E-u*w,R=d*p-m*w,L=u*p-m*E,_=g*L-v*R+b*M+y*A-T*P+S*D;return _?(_=1/_,s[0]=(a*L-l*R+c*M)*_,s[1]=(r*R-i*L-n*M)*_,s[2]=(w*S-E*T+p*y)*_,s[3]=(u*T-d*S-m*y)*_,s[4]=(l*A-o*L-c*P)*_,s[5]=(t*L-r*A+n*P)*_,s[6]=(E*b-x*S-p*v)*_,s[7]=(h*S-u*b+m*v)*_,s[8]=(o*R-a*A+c*D)*_,s[9]=(i*A-t*R-n*D)*_,s[10]=(x*T-w*b+p*g)*_,s[11]=(d*b-h*T-m*g)*_,s[12]=(a*P-o*M-l*D)*_,s[13]=(t*M-i*P+r*D)*_,s[14]=(w*v-x*y-E*g)*_,s[15]=(h*y-d*v+u*g)*_,s):null}};class Ze{constructor(){this.position=new ge(0,0,0),this.rotation=new ge(0,0,0),this.scale=new ge(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),V.identity(this.localMatrix),V.identity(this.worldMatrix),this.parent=null,this.children=[]}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e)}remove(e){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1))}updateLocalMatrix(){V.identity(this.localMatrix),V.translate(this.localMatrix,this.localMatrix,this.position),V.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),V.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),V.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),V.scale(this.localMatrix,this.localMatrix,this.scale)}updateWorldMatrix(){if(this.updateLocalMatrix(),this.parent)V.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix);else for(let e=0;e<16;e++)this.worldMatrix[e]=this.localMatrix[e];for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}}class X{constructor(e,t,i=null,r="GameObject"){this.name=r,this.transform=new Ze,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){this.transform.updateWorldMatrix();const r=i||this.material;this.renderer&&r&&this.renderer.draw(this,e,t,r)}}class xe extends X{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,V.identity(this.projectionMatrix),V.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,r){this.fov=e,this.aspect=t,this.near=i,this.far=r,this.orthographic=!1;const n=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=n/t,o[5]=n,o[10]=(r+i)/(i-r),o[11]=-1,o[14]=2*r*i/(i-r)}setOrthographic(e,t,i,r,n,o){this.near=n,this.far=o,this.orthographic=!0,this.orthoSize=(r-i)/2;const a=this.projectionMatrix,l=1/(e-t),c=1/(i-r),h=1/(n-o);a.fill(0),a[0]=-2*l,a[5]=-2*c,a[10]=2*h,a[12]=(e+t)*l,a[13]=(r+i)*c,a[14]=(o+n)*h,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),V.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e){const t=this.viewMatrix,i=this.projectionMatrix;e.transform.updateWorldMatrix();const r=e.transform.worldMatrix,n=r[12],o=r[13],a=r[14],l=1,c=t[0]*n+t[4]*o+t[8]*a+t[12]*l,h=t[1]*n+t[5]*o+t[9]*a+t[13]*l,d=t[2]*n+t[6]*o+t[10]*a+t[14]*l,u=t[3]*n+t[7]*o+t[11]*a+t[15]*l,m=i[0]*c+i[4]*h+i[8]*d+i[12]*u,x=i[1]*c+i[5]*h+i[9]*d+i[13]*u;i[2]*c+i[6]*h+i[10]*d+i[14]*u;const w=i[3]*c+i[7]*h+i[11]*d+i[15]*u;if(w===0)return[.5,.5];const E=m/w,p=x/w;return[(E+1)*.5,(p+1)*.5]}}class ${constructor(e,t,i){this.gl=e;const r=this.loadShader(e.VERTEX_SHADER,t),n=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,r),e.attachShader(this.program,n),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={}}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const r=this.gl,n=this.getUniformLocation(e);if(n){if(i){i==="1i"?r.uniform1i(n,t):i==="1f"?r.uniform1f(n,t):i==="2fv"?r.uniform2fv(n,t):i==="3fv"?r.uniform3fv(n,t):i==="4fv"?r.uniform4fv(n,t):i==="Matrix4fv"&&r.uniformMatrix4fv(n,!1,t);return}if(typeof t=="number")r.uniform1f(n,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:r.uniform2fv(n,t);break;case 3:r.uniform3fv(n,t);break;case 4:r.uniform4fv(n,t);break;case 16:r.uniformMatrix4fv(n,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){const i=this.gl.createShader(e);return this.gl.shaderSource(i,t),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error("Shader compile error:",this.gl.getShaderInfoLog(i)),this.gl.deleteShader(i),null)}}class Re{constructor(e,t,i,r,n=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=r,this.indices=n,this.count=n?n.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const r=e.getAttribLocation("aTexCoord");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const r=e.getAttribLocation("aNormal");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class Ke{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[];const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),r=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new Re(e,t,i,r)}draw(e,t,i=void 0,r=null){const n=r||e.material;if(!n||!n.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const l=n.shader;l.use(),a.bind(l),l.setUniform("uProjectionMatrix",t.projectionMatrix),l.setUniform("uViewMatrix",t.viewMatrix),l.setUniform("uModelMatrix",e.transform.worldMatrix);let c=0;for(const h in n.uniforms){const d=n.uniforms[h];let u=d.value,m=d.type;(u instanceof WebGLTexture||m==="1i"&&u&&typeof u=="object")&&(o.activeTexture(o.TEXTURE0+c),o.bindTexture(o.TEXTURE_2D,u),(o.isTexture(u)||u instanceof WebGLTexture)&&(u=c,m="1i",c++)),l.setUniform(h,u,m)}a.draw(),this.drawCalls++,this.drawCallDetails.push({object:e?e.name:"Unknown",material:n?n.name:"Unknown",shader:l?l.name||"Shader":"Unknown",target:i?"RenderTarget":"Screen"})}resetDrawCalls(){const e=this.drawCalls,t=[...this.drawCallDetails];return this.drawCalls=0,this.drawCallDetails=[],{count:e,details:t}}}class U{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,r){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const n=this.uniforms[e].value;n[0]=t,n[1]=i,n[2]=r}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,r])}}setVec4(e,t,i,r,n){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=i,o[2]=r,o[3]=n}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,r,n])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}class Y{constructor(e,t,i,r={}){this.gl=e,this.width=t,this.height=i,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,i,0,e.RGBA,e.UNSIGNED_BYTE,null);const n=r.minFilter!==void 0?r.minFilter:e.LINEAR,o=r.magFilter!==void 0?r.magFilter:e.LINEAR,a=r.wrapS!==void 0?r.wrapS:e.CLAMP_TO_EDGE,l=r.wrapT!==void 0?r.wrapT:e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer);const c=e.checkFramebufferStatus(e.FRAMEBUFFER);c!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is not complete: "+c),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,e,t,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}}class Je{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const W=new Je;class Z{static async load(e,t){const r=await(await fetch(t)).text(),n=this.parse(e,r);return new Re(e,n.positions,n.uvs,n.normals)}static parse(e,t){const i=[],r=[],n=[],o=[],a=[],l=[],c=t.split(`
`);for(let h of c){if(h=h.trim(),h.startsWith("#")||h==="")continue;const d=h.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")r.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")n.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const m=d.slice(1);for(let x=1;x<m.length-1;x++){const w=m[0],E=m[x],p=m[x+1];this.processVertex(w,i,r,n,o,a,l),this.processVertex(E,i,r,n,o,a,l),this.processVertex(p,i,r,n,o,a,l)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(l),vertexCount:o.length/3}}static processVertex(e,t,i,r,n,o,a){const l=e.split("/"),c=parseInt(l[0])-1,h=l[1]?parseInt(l[1])-1:-1,d=l[2]?parseInt(l[2])-1:-1,u=t[c];if(n.push(u[0],u[1],u[2]),h>=0){const m=i[h];o.push(m[0],m[1])}else o.push(0,0);if(d>=0){const m=r[d];a.push(m[0],m[1],m[2])}else a.push(0,1,0)}}class et{constructor(){this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);t>-1&&this.passes.splice(t,1)}execute(e,t,i){for(const r of this.passes)r.enabled&&r.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class be{constructor(e,t,i,r="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=r,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}class he extends be{constructor(e,t,i,r=null,n=null,o="ObjectPass"){super(e,t,i,o),this.renderTarget=r,this.materialOverride=n,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const r=this.camera||i;this.camera&&r.updateView();const n=performance.now();if(e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor){this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);let a=this.gl.COLOR_BUFFER_BIT;this.clearDepth&&(a|=this.gl.DEPTH_BUFFER_BIT),this.gl.clear(a)}if(t&&Array.isArray(t))for(const a of t)if(this.materialOverride){let l=this.materialOverride;this.name==="Depth Pass"&&a.depthMaterial?l=a.depthMaterial:this.name==="Normal Pass"&&a.normalMaterial?l=a.normalMaterial:this.name==="Shadow Pass"&&a.shadowMaterial&&(l=a.shadowMaterial),a.render(r,this.renderTarget,l)}else a.render(r,this.renderTarget);else t&&t.render&&t.render(r,this.renderTarget,this.materialOverride);this.renderTarget&&this.renderTarget.unbind();const o=e.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-n}}class Le{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const r=this.gl;let n,o=t;if(e.uniforms&&e.shader){n=e.shader,o={};for(const h in e.uniforms)o[h]=e.uniforms[h].value;t&&(t.bind||t===null)&&(i=t)}else n=e;i?i.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)),n.use(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer);const a=n.getAttribLocation("aVertexPosition");a!==-1&&(r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,r.FLOAT,!1,16,0));const l=n.getAttribLocation("aTexCoord");l!==-1&&(r.enableVertexAttribArray(l),r.vertexAttribPointer(l,2,r.FLOAT,!1,16,8));let c=0;for(const h in o){const d=o[h];d instanceof WebGLTexture?(r.activeTexture(r.TEXTURE0+c),r.bindTexture(r.TEXTURE_2D,d),n.setUniform(h,c,"1i"),c++):n.setUniform(h,d)}r.drawArrays(r.TRIANGLE_STRIP,0,4);for(let h=0;h<c;h++)r.activeTexture(r.TEXTURE0+h),r.bindTexture(r.TEXTURE_2D,null)}}class tt extends be{constructor(e,t,i,r){super(e,t,i,"ViewportComposition"),this.material=r,this.fullScreenQuad=new Le(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const r of this.viewports){const n=Math.floor(r.x*this.width),o=Math.floor(r.y*this.height),a=Math.floor(r.w*this.width),l=Math.floor(r.h*this.height);this.gl.viewport(n,o,a,l);let c=this.buffers.Final;const h=r.pass;this.buffers[h]&&(c=this.buffers[h]),this.material.setUniform("uTexture",c),this.overlay?(this.material.setUniform("uOverlay",this.overlay),this.material.setUniform("uUseOverlay",1)):this.material.setUniform("uUseOverlay",0),this.fullScreenQuad.draw(this.material)}}}class ye extends be{constructor(e,t,i,r,n=null,o="ScreenPass"){super(e,t,i,o),this.material=r,this.renderTarget=n,this.fullScreenQuad=new Le(e),this.inputs={},this.clearColor=null}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const r=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",[this.width,this.height]),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const n=e.resetDrawCalls();this.drawCount=n.count,this.drawDetails=n.details,this.executionTime=performance.now()-r}}class it extends ye{constructor(e,t,i,r,n=null,o="Lighting Pass"){super(e,t,i,r,n,o),this.lightCamera=null}setInputBuffers(e,t,i,r){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t),this.setTexture("uDepthTexture",i),this.setTexture("uShadowMap",r)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){const i=new Float32Array(16);V.multiply(i,t.projectionMatrix,t.viewMatrix);const r=new Float32Array(16);V.multiply(r,e.projectionMatrix,e.viewMatrix);const n=new Float32Array(16);this.invertMatrix(r,n);const o=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:i,uInverseViewProjection:n,uCameraPos:[o.x,o.y,o.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}invertMatrix(e,t){let i=e[0],r=e[1],n=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],m=e[10],x=e[11],w=e[12],E=e[13],p=e[14],g=e[15],v=i*l-r*a,b=i*c-n*a,y=i*h-o*a,T=r*c-n*l,S=r*h-o*l,D=n*h-o*c,P=d*E-u*w,A=d*p-m*w,M=d*g-x*w,R=u*p-m*E,L=u*g-x*E,_=m*g-x*p,C=v*_-b*L+y*R+T*M-S*A+D*P;return C?(C=1/C,t[0]=(l*_-c*L+h*R)*C,t[1]=(n*L-r*_-o*R)*C,t[2]=(E*D-p*S+g*T)*C,t[3]=(m*S-u*D-x*T)*C,t[4]=(c*M-a*_-h*A)*C,t[5]=(i*_-n*M+o*A)*C,t[6]=(p*y-w*D-g*b)*C,t[7]=(d*D-m*y+x*b)*C,t[8]=(a*L-l*M+h*P)*C,t[9]=(r*M-i*L-o*P)*C,t[10]=(w*S-E*y+g*v)*C,t[11]=(u*y-d*S-x*v)*C,t[12]=(l*A-a*R-c*P)*C,t[13]=(i*R-r*A+n*P)*C,t[14]=(E*b-w*T-p*v)*C,t[15]=(d*T-u*b+m*v)*C,!0):!1}}class rt extends ye{constructor(e,t,i,r,n=null,o="Skybox Pass"){super(e,t,i,r,n,o),this.clearColor=null,this.clearDepth=!1}setCamera(e){const t=new Float32Array(16);V.multiply(t,e.projectionMatrix,e.viewMatrix);const i=new Float32Array(16);this.invertMatrix(t,i),this.material.setUniforms({uInverseViewProjection:i,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,r){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uBottomColor:r})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}invertMatrix(e,t){let i=e[0],r=e[1],n=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],m=e[10],x=e[11],w=e[12],E=e[13],p=e[14],g=e[15],v=i*l-r*a,b=i*c-n*a,y=i*h-o*a,T=r*c-n*l,S=r*h-o*l,D=n*h-o*c,P=d*E-u*w,A=d*p-m*w,M=d*g-x*w,R=u*p-m*E,L=u*g-x*E,_=m*g-x*p,C=v*_-b*L+y*R+T*M-S*A+D*P;return C?(C=1/C,t[0]=(l*_-c*L+h*R)*C,t[1]=(n*L-r*_-o*R)*C,t[2]=(E*D-p*S+g*T)*C,t[3]=(m*S-u*D-x*T)*C,t[4]=(c*M-a*_-h*A)*C,t[5]=(i*_-n*M+o*A)*C,t[6]=(p*y-w*D-g*b)*C,t[7]=(d*D-m*y+x*b)*C,t[8]=(a*L-l*M+h*P)*C,t[9]=(r*M-i*L-o*P)*C,t[10]=(w*S-E*y+g*v)*C,t[11]=(u*y-d*S-x*v)*C,t[12]=(l*A-a*R-c*P)*C,t[13]=(i*R-r*A+n*P)*C,t[14]=(E*b-w*T-p*v)*C,t[15]=(d*T-u*b+m*v)*C,!0):!1}}class nt extends ye{constructor(e,t,i,r,n,o="PixelArt Pass"){super(e,t,i,r,n,o)}setInputBuffers(e,t,i){this.setTexture("uSceneTexture",e),this.setTexture("uDepthTexture",t),this.setTexture("uNormalTexture",i)}resize(e,t){super.resize(e,t),this.material.setUniform("uResolution",[e,t])}}class st{constructor(){this.enabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[]},this.lastFrameStart=0,this.fps=0,this.history=[],this.maxHistory=60,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes=[]}endFrame(){this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.currentPass=null)}recordDrawCall(e,t,i,r,n){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:n-r})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}}class ot{static attach(e,t){const i=new st,r=e.execute.bind(e);e.execute=function(o,a,l){i.enabled&&i.beginFrame();const c=e.passes||[];for(let h=0;h<c.length;h++){const d=c[h];if(!d.__profilerInstrumented){const u=d.execute.bind(d),m=d.constructor.name;d.execute=function(x,w,E){i.enabled&&i.beginPass(m),u(x,w,E),i.enabled&&i.endPass()},d.__profilerInstrumented=!0}}r(o,a,l),i.enabled&&i.endFrame()};const n=t.draw.bind(t);return t.draw=function(o,a,l,c){const h=performance.now();n(o,a,l,c);const d=performance.now();if(i.enabled){const u=o?o.name:"Unknown",m=c?c.name:"Unknown";i.recordDrawCall(u,m,0,h,d)}},i.disable(),i}}class at{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const r=t.style.display==="none";t.style.display=r?"flex":"none",i.style.background=r?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(r=>{const n=document.createElement("option");n.value=r,n.text=r,i.appendChild(n)}),i.onchange=r=>t(r.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,r,n){const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${r}px`,height:`${n}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const l=document.createElement("span");l.innerHTML="×",Object.assign(l.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),l.onclick=()=>{o.style.display="none"},l.onmouseover=()=>{l.style.color="#fff"},l.onmouseout=()=>{l.style.color="#888"},a.appendChild(l);const c=document.createElement("div");c.classList.add("window-content"),Object.assign(c.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const h=document.createElement("div");return Object.assign(h.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),o.appendChild(a),o.appendChild(c),o.appendChild(h),this.container.appendChild(o),this.addDragLogic(o,a),this.addResizeLogic(o,h),{content:c,window:o}}addResizeLogic(e,t){let i=!1,r,n,o,a;t.addEventListener("mousedown",h=>{h.preventDefault(),h.stopPropagation(),i=!0,o=h.clientX,a=h.clientY,r=e.offsetWidth,n=e.offsetHeight,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c)});const l=h=>{if(!i)return;const d=r+(h.clientX-o),u=n+(h.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}addDragLogic(e,t){let i=!1,r,n,o,a;t.addEventListener("mousedown",h=>{h.target.tagName!=="BUTTON"&&(i=!0,r=h.clientX,n=h.clientY,o=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const l=h=>{if(!i)return;let d=o+(h.clientX-r),u=a+(h.clientY-n);const m=20;d<m&&(d=0),u<m&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<m&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<m&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class N{constructor(e,t,i,r,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),N.nextNameID=N.nextNameID||0,this.$name.id=`lil-gui-name-${++N.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class lt extends N{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function we(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const ht={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:we,toHexString:we},te={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},dt={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,e,t=1){const i=te.fromHexString(s);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([s,e,t],i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return te.toHexString(r)}},ct={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const i=te.fromHexString(s);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:s,g:e,b:t},i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return te.toHexString(r)}},ut=[ht,te,dt,ct];function ft(s){return ut.find(e=>e.match(s))}class mt extends N{constructor(e,t,i,r){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ft(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=we(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ve extends N{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class pt extends N{constructor(e,t,i,r,n,o){super(e,t,i,"lil-number"),this._initInput(),this.min(r),this.max(n);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},i=g=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+g),this.$input.value=this.getValue())},r=g=>{g.key==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g)*-1))},n=g=>{this._inputFocused&&(g.preventDefault(),i(this._step*this._normalizeMouseWheel(g)))};let o=!1,a,l,c,h,d;const u=5,m=g=>{a=g.clientX,l=c=g.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",w)},x=g=>{if(o){const v=g.clientX-a,b=g.clientY-l;Math.abs(b)>u?(g.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>u&&w()}if(!o){const v=g.clientY-c;d-=v*this._step*this._arrowKeyMultiplier(g),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=g.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",w)},E=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",E),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,g,v,b,y)=>(p-g)/(v-g)*(y-b)+b,t=p=>{const g=this.$slider.getBoundingClientRect();let v=e(p,g.left,g.right,this._min,this._max);this._snapClampSetValue(v)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)},r=p=>{t(p.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)};let o=!1,a,l;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,l=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){const g=p.touches[0].clientX-a,v=p.touches[0].clientY-l;Math.abs(g)>Math.abs(v)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),t(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),x=400;let w;const E=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(m,x)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",E,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class gt extends N{constructor(e,t,i,r){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class vt extends N{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var wt=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function xt(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Me=!1;class G{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:n="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Me&&a&&(xt(wt),Me=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,i,r,n){if(Object(i)===i)return new gt(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new pt(this,e,t,i,r,n);case"boolean":return new lt(this,e,t);case"string":return new vt(this,e,t);case"function":return new ve(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new mt(this,e,t,i)}addFolder(e){const t=new G({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ve||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ve)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class bt{constructor(e,t){this.editor=e,this.gui=new G({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(n=>n.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera"),(this.editor.game.scene||[]).forEach((n,o)=>{const a=n.name||`Object ${o}`;this.gui.add({select:()=>this.editor.selectObject(n)},"select").name(a)})}}class yt{constructor(e,t){this.editor=e,this.container=t,this.gui=new G({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(r=>r.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject";if(t.transform){const r=t.transform,n=this.gui.addFolder(`Transform: ${i}`),o=n.addFolder("Position");o.add(r.position,"x").step(.1).listen().name("X"),o.add(r.position,"y").step(.1).listen().name("Y"),o.add(r.position,"z").step(.1).listen().name("Z");const a=n.addFolder("Rotation");a.add(r.rotation,"x").step(.1).listen().name("X"),a.add(r.rotation,"y").step(.1).listen().name("Y"),a.add(r.rotation,"z").step(.1).listen().name("Z");const l=n.addFolder("Scale");l.add(r.scale,"x").step(.1).listen().name("X"),l.add(r.scale,"y").step(.1).listen().name("Y"),l.add(r.scale,"z").step(.1).listen().name("Z")}if(t instanceof xe){const r=this.gui.addFolder("Camera Settings");r.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const n=r.addFolder("Perspective");n.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),r.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),r.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),r.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),n.open()}if(t.material){const r=this.gui.addFolder("Material");r.add(t.material,"name").name("Material Name").disable().listen(),r.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}}}class Ct{constructor(e,t){this.editor=e,this.container=t,this.gui=new G({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(r=>r.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const r in t){const n=t[r];i.add({select:()=>this.inspect(n)},"select").name(r)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(r=>r.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const r=e.uniforms[i],n=r.value;if(r.type,Array.isArray(n)||n instanceof Float32Array)if(i.toLowerCase().includes("color")&&(n.length===3||n.length===4))t.addColor(r,"value").name(i).listen();else{const a=t.addFolder(i),l=["x","y","z","w"];for(let c=0;c<n.length;c++){const h={get val(){return n[c]},set val(d){n[c]=d}};a.add(h,"val").step(.01).name(l[c]||`[${c}]`).listen()}}else if(typeof n=="number"){const o={get val(){return r.value},set val(l){r.value=l}};let a=t.add(o,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else n instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class Et{constructor(e,t){this.editor=e,this.container=t,this.gui=new G({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,r)=>{const n=this.gui.addFolder(`${r}: ${i.name||"Pass"}`);if(n.add(i,"enabled").name("Active"),n.add(i,"drawCount").name("Draw Calls").disable().listen(),n.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const l={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(c){i.clearColor[0]=c[0],i.clearColor[1]=c[1],i.clearColor[2]=c[2]}};n.addColor(l,"color").name("Clear Color")}i.renderTarget?n.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():n.add({info:"Screen"},"info").name("Target").disable(),i.material&&n.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const o={show:!1},a=n.addFolder("Performance Details");a.add(o,"show").name("List Draw Calls").onChange(l=>{l?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,r)=>{const n=e.addFolder(`Draw ${r}: ${i.object}`);n.add(i,"material").name("Material").disable(),n.add(i,"shader").name("Shader").disable(),n.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class Tt{constructor(e,t){this.editor=e,this.container=t,this.gui=new G({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={fps:0,ms:0,totalDrawCalls:0,totalPasses:0},this.init()}init(){this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>this.update(),500)}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const r=this.passesFolder.addFolder(i.name||"Pass");r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Perf (ms)").disable().listen(),r.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;this.stats.fps=Math.round(1/(this.editor.game.deltaTime||.016)),this.stats.ms=((this.editor.game.deltaTime||.016)*1e3).toFixed(2);let t=0;e.renderQueue&&e.renderQueue.passes&&(this.stats.totalPasses=e.renderQueue.passes.length,e.renderQueue.passes.forEach(i=>{t+=i.drawCount||0})),this.stats.totalDrawCalls=t,e.renderQueue.passes.forEach(i=>{`${i.name}${i.drawCount}`})}}class Ft{constructor(e){this.game=e,this.wm=new at,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new bt(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new yt(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new Ct(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const r=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new Et(this,r.content),this.wm.addNavItem("PASSES",r.window),r.window.style.display="none";const n=this.wm.createWindow("Profiler",20,440,250,250);this.windows.profiler=new Tt(this,n.content),this.wm.addNavItem("PROFILER",n.window),n.window.style.display="none";let o=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(o=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(o,a=>{this.game.setViewports(a)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){e&&(this.windows.inspector.inspect(e),this.windows.inspector.gui.parentElement.style.display==="none"&&(this.windows.inspector.gui.parentElement.style.display="block"))}update(){}}class _t{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const r=Math.PI/2-.01;this.rotation.x=Math.max(-r,Math.min(r,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*e,i=this.camera.transform,r=Math.sin(i.rotation.y),n=Math.cos(i.rotation.y),o=-r,a=-n,l=n,c=-r;let h=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(h-=1),this.keys.d&&(h+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),h!==0||d!==0){const m=Math.sqrt(h*h+d*d);h/=m,d/=m}i.position.x+=(o*d+l*h)*t,i.position.z+=(a*d+c*h)*t,i.position.y+=u*t}}const Ue=`attribute vec4 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
\r
varying highp vec2 vTexCoord;\r
\r
void main() {\r
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\r
    vTexCoord = aTexCoord;\r
}\r
`,St=`precision highp float;\r
varying highp vec2 vTexCoord;\r
uniform highp vec4 uColor;\r
\r
void main() {\r
    gl_FragColor = uColor;\r
}\r
`,de=`precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
varying vec2 vTexCoord;\r
\r
void main() {\r
    // Just forward texture coordinates, no transforms needed for screen-space quad\r
    gl_Position = vec4(aVertexPosition.x, aVertexPosition.y, 0.0, 1.0);\r
    vTexCoord = aTexCoord;\r
}\r
`,Dt=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
uniform sampler2D uTexture;\r
uniform sampler2D uOverlay; // Optional outline texture\r
uniform float uUseOverlay;   // Toggle overlay blending (float 0.0 or 1.0)\r
\r
void main() {\r
    vec4 baseColor = texture2D(uTexture, vTexCoord);\r
    \r
    if (uUseOverlay > 0.5) {\r
        vec4 overlayColor = texture2D(uOverlay, vTexCoord);\r
        // Simple alpha blend: overlay over base\r
        gl_FragColor = vec4(mix(baseColor.rgb, overlayColor.rgb, overlayColor.a), baseColor.a);\r
    } else {\r
        gl_FragColor = baseColor;\r
    }\r
}\r
`,Pt=`precision highp float;\r
\r
attribute vec4 aVertexPosition;\r
\r
uniform mat4 uModelMatrix;\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
\r
void main() {\r
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\r
}\r
`,Ve=`precision highp float;\r
\r
void main() {\r
    float near = 0.1; \r
    float far = 100.0; \r
  \r
    float z = gl_FragCoord.z * 2.0 - 1.0; // Back to NDC \r
    float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); // Linearize\r
  \r
    linearDepth /= far; // Normalize to [0, 1] range\r
\r
    gl_FragColor = vec4(vec3(linearDepth), 1.0);\r
}\r
`,At=`precision highp float;\r
\r
attribute vec4 aVertexPosition;\r
attribute vec3 aVertexNormal;\r
\r
uniform mat4 uModelMatrix;\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
\r
varying vec3 vWorldPos;\r
\r
void main() {\r
    vec4 worldPos = uModelMatrix * aVertexPosition;\r
    vWorldPos = worldPos.xyz;\r
    gl_Position = uProjectionMatrix * uViewMatrix * worldPos;\r
}\r
`,$e=`#extension GL_OES_standard_derivatives : enable\r
precision highp float;\r
\r
varying vec3 vWorldPos;\r
\r
void main() {\r
    // Calculate face normal using derivatives of world position\r
    vec3 dx = dFdx(vWorldPos);\r
    vec3 dy = dFdy(vWorldPos);\r
    vec3 normal = normalize(cross(dx, dy));\r
    \r
    // Remap to 0-1 range for visualization\r
    gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);\r
}\r
`,Mt=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uDepthTexture;\r
uniform sampler2D uNormalTexture;\r
uniform sampler2D uSceneTexture;\r
\r
uniform vec2 uResolution;\r
\r
// Tunable Uniforms\r
uniform float uDepthThreshold;\r
uniform float uNormalThreshold;\r
uniform float uThickness;\r
uniform vec4 uOutlineColor;\r
\r
void main() {\r
    // Determine thickness scale\r
    float thickness = uThickness > 0.0 ? uThickness : 1.0;\r
    vec2 texelSize = (1.0 / uResolution) * thickness;\r
\r
    // Default fallbacks if uniform is 0 (optional, but good for safety)\r
    float dThresh = uDepthThreshold > 0.0 ? uDepthThreshold : 0.5; \r
    float nThresh = uNormalThreshold > 0.0 ? uNormalThreshold : 0.4;\r
\r
    // 1. Sample Center\r
    float depthCenter = texture2D(uDepthTexture, vTexCoord).r;\r
    vec3 normalCenter = texture2D(uNormalTexture, vTexCoord).rgb;\r
\r
    // 2. Sample Neighbors (Top, Right) for finite difference\r
    vec2 uvTop = vTexCoord + vec2(0.0, texelSize.y);\r
    vec2 uvRight = vTexCoord + vec2(texelSize.x, 0.0);\r
\r
    float depthTop = texture2D(uDepthTexture, uvTop).r;\r
    float depthRight = texture2D(uDepthTexture, uvRight).r;\r
\r
    vec3 normalTop = texture2D(uNormalTexture, uvTop).rgb;\r
    vec3 normalRight = texture2D(uNormalTexture, uvRight).rgb;\r
\r
    // 3. Compute Differences\r
    // Depth: simple derivative magnitude\r
    float depthDiff0 = depthCenter - depthTop;\r
    float depthDiff1 = depthCenter - depthRight;\r
    // Scale by 100 to make depth differences more significant relative to threshold\r
    float edgeDepth = sqrt(pow(depthDiff0, 2.0) + pow(depthDiff1, 2.0)) * 100.0;\r
    \r
    // Normal: distance between normal vectors\r
    vec3 normalDiff0 = normalCenter - normalTop;\r
    vec3 normalDiff1 = normalCenter - normalRight;\r
    float edgeNormal = sqrt(dot(normalDiff0, normalDiff0) + dot(normalDiff1, normalDiff1));\r
\r
    // 4. Thresholding\r
    float edge = 0.0;\r
    if (edgeDepth > dThresh) { edge = 1.0; }\r
    if (edgeNormal > nThresh) { edge = 1.0; }\r
\r
    // 5. Output Outline Only\r
    // Transparent where no edge\r
    gl_FragColor = vec4(uOutlineColor.rgb, uOutlineColor.a * edge);\r
}\r
`,Rt=`precision highp float;\r
\r
varying highp vec2 vTexCoord;\r
\r
uniform highp float uTime; \r
uniform highp float uSpeed; \r
uniform vec2 uWind;  \r
uniform float uScale;\r
\r
uniform vec3 uColor1; \r
uniform vec3 uColor2; \r
uniform vec3 uColor3; \r
\r
vec2 hash(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
float gradientNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);\r
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));\r
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
void main() {\r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
\r
    // Layer 1: The Macro "Gust" (Very large, slow-moving shadows)\r
    float n1 = gradientNoise((vTexCoord * uScale * 0.25) + (movement * 0.3));\r
    \r
    // Layer 2: The "Tuft" (Medium scale, standard waving)\r
    float n2 = gradientNoise((vTexCoord * uScale * 1.5) + movement);\r
    \r
    // Layer 3: The "Jitter" (High frequency, moves slightly faster)\r
    // We rotate the wind vector slightly for this layer to create "cross-winds"\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; \r
    float n3 = gradientNoise((vTexCoord * uScale * 4.0) + jitterMovement);\r
\r
    // Combine them with weighted averages\r
    // 20% big gust, 50% main tuft, 30% jitter detail\r
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    \r
    // Smoothstep creates that "hand-painted" clumped look\r
    // Using a tighter range (e.g. -0.3 to 0.4) makes the grass "edges" sharper\r
    n = smoothstep(-0.4, 0.4, n);\r
\r
    vec3 finalColor;\r
    if (n < 0.5) {\r
        finalColor = mix(uColor1, uColor2, n * 2.0);\r
    } else {\r
        finalColor = mix(uColor2, uColor3, (n - 0.5) * 2.0);\r
    }\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}   `,Lt=`precision highp float;\r
\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
varying vec2 vUv;\r
\r
void main() {\r
    vUv = aTexCoord;\r
    gl_Position = vec4(aVertexPosition, 0.0, 1.0);\r
}\r
`,Ut=`precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
uniform sampler2D uDepthTexture;\r
\r
// Shadows & Transform\r
uniform sampler2D uShadowMap;\r
uniform mat4 uInverseViewProjection;\r
uniform mat4 uLightSpaceMatrix;\r
uniform vec3 uCameraPos; \r
uniform float uTime; // Optional for noise\r
\r
uniform vec3 uLightDir;\r
uniform vec3 uLightColor;\r
uniform float uAmbient;\r
\r
// --- SPECULAR UNIFORMS ---\r
uniform float uSpecularStrength;\r
uniform float uShininess;\r
\r
// --- VOLUMETRIC UNIFORMS ---\r
uniform float uVolumetricSteps;\r
uniform float uVolumetricIntensity; \r
uniform float uVolumetricScattering; \r
\r
const int MAX_VOLUMETRIC_STEPS = 50; // Hard limit for loop\r
\r
// Helper for shadow check without bias issues inside volume\r
float isLit(vec3 pos) {\r
    vec4 posLightSpace = uLightSpaceMatrix * vec4(pos, 1.0);\r
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;\r
    projCoords = projCoords * 0.5 + 0.5;\r
    \r
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) \r
        return 0.0; // Outside light cone\r
\r
    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; \r
    float currentDepth = projCoords.z;\r
    \r
    // Slightly larger bias for volume sampling to avoid self-shadowing acne in air\r
    float bias = 0.01; \r
    \r
    return currentDepth - bias > closestDepth ? 0.0 : 1.0; // 1.0 = Lit, 0.0 = Shadow\r
}\r
\r
vec3 calculateVolumetricLight(vec3 startPos, vec3 endPos) {\r
    vec3 rayVector = endPos - startPos;\r
    float rayLength = length(rayVector);\r
    vec3 rayDir = rayVector / rayLength;\r
    \r
    // Max distance for volumetric fog\r
    float maxDist = 50.0;\r
    if(rayLength > maxDist) {\r
        rayLength = maxDist;\r
    }\r
    \r
    float stepSize = rayLength / uVolumetricSteps;\r
    vec3 currentPos = startPos;\r
    \r
    // Simple dither to break banding (using UV)\r
    float dither = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);\r
    currentPos += rayDir * stepSize * dither;\r
\r
    float accumulation = 0.0;\r
\r
    for(int i = 0; i < MAX_VOLUMETRIC_STEPS; i++) {\r
        if(float(i) >= uVolumetricSteps) break;\r
        accumulation += isLit(currentPos);\r
        currentPos += rayDir * stepSize;\r
    }\r
    \r
    accumulation /= uVolumetricSteps;\r
    \r
    // Scattering phase function (simple isotropic for now)\r
    // float phase = 1.0 / (4.0 * 3.14159); \r
    \r
    return uLightColor * accumulation * uVolumetricIntensity; // * phase;\r
}\r
\r
vec3 getWorldPosition(vec2 uv, float depth) {\r
    float near = 0.1;\r
    float far = 100.0;\r
    float linearDepth = depth * far;\r
    \r
    float z_ndc = 1.0; \r
    if (linearDepth > 0.0001) {\r
        z_ndc = (far + near - (2.0 * near * far) / linearDepth) / (far - near);\r
    }\r
    \r
    vec4 clipSpacePosition = vec4(uv * 2.0 - 1.0, z_ndc, 1.0);\r
    vec4 worldPosition = uInverseViewProjection * clipSpacePosition;\r
    \r
    return worldPosition.xyz / worldPosition.w;\r
}\r
\r
float calculateShadow(vec3 worldPos) {\r
    vec4 posLightSpace = uLightSpaceMatrix * vec4(worldPos, 1.0);\r
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;\r
    projCoords = projCoords * 0.5 + 0.5;\r
    \r
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) \r
        return 0.0;\r
\r
    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; \r
    float currentDepth = projCoords.z;\r
    float bias = 0.005; \r
    \r
    return currentDepth - bias > closestDepth ? 1.0 : 0.0;\r
}\r
\r
void main() {\r
    vec4 sceneColor = texture2D(uSceneTexture, vUv);\r
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;\r
    float depthVal = texture2D(uDepthTexture, vUv).r;\r
    \r
    // 1. Reconstruct World Position\r
    vec3 worldPos = getWorldPosition(vUv, depthVal);\r
\r
    // 2. Vectors\r
    vec3 N = normalize(normalOrig * 2.0 - 1.0);\r
    vec3 L = normalize(uLightDir);\r
    vec3 V = normalize(uCameraPos - worldPos); // View Direction\r
    vec3 H = normalize(L + V);                // Halfway Vector (Blinn-Phong)\r
\r
    // 3. Diffuse Component\r
    float diff = max(dot(N, L), 0.0);\r
    \r
    // 4. Specular Component\r
    // Only calculate specular if the surface is facing the light (diff > 0)\r
    float spec = pow(max(dot(N, H), 0.0), uShininess);\r
    vec3 specular = uSpecularStrength * spec * uLightColor;\r
    \r
    // 5. Shadow Calculation\r
    float shadow = calculateShadow(worldPos);\r
    \r
    // 6. Volumetric Lighting\r
    vec3 volumeLight = calculateVolumetricLight(uCameraPos, worldPos);\r
\r
    // 7. Final Radiance Calculation\r
    vec3 ambient = uAmbient * uLightColor;\r
    vec3 diffuse = diff * uLightColor;\r
    \r
    // Shadow affects both Diffuse and Specular, but not Ambient\r
    vec3 lightContribution = (1.0 - shadow) * (diffuse + specular);\r
    \r
    // Add volumetric light (additive blending)\r
    vec3 radiance = (ambient + lightContribution) * sceneColor.rgb + volumeLight;\r
\r
    gl_FragColor = vec4(radiance, sceneColor.a);\r
}`,Vt=`precision highp float;\r
\r
attribute vec4 aVertexPosition;\r
\r
uniform mat4 uModelMatrix;\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
\r
void main() {\r
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aVertexPosition;\r
}\r
`,$t=`precision highp float;\r
\r
void main() {\r
    gl_FragColor = vec4(gl_FragCoord.z, gl_FragCoord.z, gl_FragCoord.z, 1.0);\r
}\r
`,kt=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uDepthTexture;\r
uniform mat4 uInverseViewProjection;\r
uniform vec3 uCameraPos;\r
uniform vec3 uLightDir;\r
uniform float uTime;\r
\r
uniform vec3 uTopColor;\r
uniform vec3 uBottomColor;\r
uniform vec3 uSunColor;\r
\r
// --- STYLIZED UNIFORMS ---\r
uniform float uCloudScale;\r
uniform float uCloudThreshold; \r
uniform float uCloudDensity;    // Global Opacity (0.0 to 1.0)\r
uniform float uCloudCoverage;   // Higher = more clusters appear\r
uniform float uCloudSpeed;\r
uniform vec3  uCloudMainColor;\r
uniform vec3  uCloudShadeColor; \r
\r
vec2 hash22(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return fract(sin(p) * 43758.5453123);\r
}\r
\r
float worley(vec2 p) {\r
    vec2 n = floor(p);\r
    vec2 f = fract(p);\r
    float minDist = 1.0;\r
    for (int y = -1; y <= 1; y++) {\r
        for (int x = -1; x <= 1; x++) {\r
            vec2 g = vec2(float(x), float(y));\r
            vec2 o = hash22(n + g);\r
            o = 0.5 + 0.5 * sin(uTime * uCloudSpeed + 6.2831 * o);\r
            vec2 r = g + o - f;\r
            float d = dot(r, r);\r
            minDist = min(minDist, d);\r
        }\r
    }\r
    return 1.0 - sqrt(minDist);\r
}\r
\r
void main() {\r
    float depth = texture2D(uDepthTexture, vTexCoord).r;\r
    if (depth < 0.99) discard;\r
\r
    vec4 clipPos = vec4(vTexCoord * 2.0 - 1.0, 1.0, 1.0);\r
    vec4 worldPosH = uInverseViewProjection * clipPos;\r
    vec3 worldPos = worldPosH.xyz / worldPosH.w;\r
    vec3 dir = normalize(worldPos - uCameraPos);\r
\r
    // 1. Sky Gradient\r
    vec3 skyColor = mix(uBottomColor, uTopColor, smoothstep(-0.1, 0.8, dir.y));\r
\r
    // 2. Spherical Cloud Logic\r
    vec2 cloudUV = dir.xz / (max(dir.y, 0.01) + 0.2); \r
    vec2 wind = vec2(uTime * uCloudSpeed);\r
    \r
    float n = worley((cloudUV + wind) * uCloudScale);\r
    \r
    // --- DENSITY CONTROL ---\r
    // Subtracting coverage from the noise value determines "how many" spheres survive\r
    float baseMask = n - (1.0 - uCloudCoverage);\r
    float cloudMask = smoothstep(uCloudThreshold, uCloudThreshold + 0.02, baseMask);\r
    \r
    // Fade out at horizon and apply global density/opacity\r
    cloudMask *= smoothstep(0.0, 0.15, dir.y);\r
    float finalOpacity = cloudMask * uCloudDensity;\r
\r
    // 3. Cel-Shaded Volume\r
    float shadowMask = smoothstep(uCloudThreshold + 0.1, uCloudThreshold + 0.12, baseMask);\r
    \r
    // 4. Directional Rim Light\r
    float lightN = worley((cloudUV + wind + normalize(uLightDir.xz) * 0.1) * uCloudScale) - (1.0 - uCloudCoverage);\r
    float rimLight = smoothstep(uCloudThreshold, uCloudThreshold + 0.05, lightN);\r
    \r
    vec3 cloudCol = mix(uCloudShadeColor, uCloudMainColor, shadowMask);\r
    \r
    float sunDot = max(dot(dir, normalize(uLightDir)), 0.0);\r
    cloudCol += uSunColor * pow(sunDot, 15.0) * rimLight * 0.5;\r
\r
\r
    // 5. Final Composition using the Opacity factor\r
    vec3 color = mix(skyColor, cloudCol, finalOpacity);\r
\r
    // Stylized Sun\r
    float sunDisk = smoothstep(0.998, 0.999, sunDot); \r
    color += uSunColor * sunDisk * 1.5;\r
    \r
    gl_FragColor = vec4(color, 1.0);\r
}`,Bt=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
uniform sampler2D uDepthTexture;\r
\r
uniform float uPixelSize;\r
uniform float uColorLevels;\r
uniform vec2 uResolution;\r
\r
// Fine-tuned thresholds\r
uniform float uDepthThreshold;\r
uniform float uNormalThreshold;\r
\r
// Color modifiers for edges\r
uniform float uSilhouetteDarkening; // Very dark for outer edges\r
uniform float uCreaseDarkening;     // Subtler darkening for inner corners\r
\r
void main() {\r
    // 1. PIXELATION\r
    vec2 size = uResolution / uPixelSize;\r
    vec2 uv = floor(vTexCoord * size) / size;\r
    vec2 texelSize = 1.0 / size;\r
\r
    // 2. SAMPLING\r
    float depthCenter = texture2D(uDepthTexture, uv).r;\r
    vec3 normalCenter = texture2D(uNormalTexture, uv).rgb * 2.0 - 1.0;\r
    vec4 sceneColor = texture2D(uSceneTexture, uv);\r
\r
    // Quantize scene color early so edge colors are based on the "flat" art style\r
    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;\r
\r
    float depthEdge = 0.0;\r
    float normalEdge = 0.0;\r
\r
    // 3. EDGE DETECTION LOOP\r
    vec2 offsets[4];\r
    offsets[0] = vec2(1.0, 0.0);\r
    offsets[1] = vec2(-1.0, 0.0);\r
    offsets[2] = vec2(0.0, 1.0);\r
    offsets[3] = vec2(0.0, -1.0);\r
\r
    for(int i = 0; i < 4; i++) {\r
        vec2 neighborUV = uv + offsets[i] * texelSize;\r
        \r
        // Depth logic\r
        float depthNeighbor = texture2D(uDepthTexture, neighborUV).r;\r
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));\r
\r
        // Normal logic\r
        vec3 normalNeighbor = texture2D(uNormalTexture, neighborUV).rgb * 2.0 - 1.0;\r
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));\r
    }\r
\r
    // 4. ADAPTIVE COLOR LOGIC\r
    vec3 finalColor = quantizedColor;\r
\r
    // Is it an internal crease? (Normal-based)\r
    if (normalEdge > uNormalThreshold) {\r
        // Darken the surface color rather than making it black\r
        finalColor = quantizedColor * uCreaseDarkening;\r
    }\r
\r
    // Is it a silhouette? (Depth-based)\r
    // We do this second so silhouette (outer) edges override crease (inner) edges\r
    if (depthEdge > uDepthThreshold) {\r
        // Use a much heavier darkening for the outer silhouette\r
        finalColor = quantizedColor * uSilhouetteDarkening;\r
    }\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,Ce=`attribute vec4 aVertexPosition;\r
attribute vec2 aTexCoord;\r
\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
\r
uniform lowp float uTime; \r
uniform lowp float uSpeed; \r
uniform vec2 uWind;  \r
uniform float uScale;\r
uniform float udisplacement;\r
\r
\r
varying lowp vec2 vTexCoord;\r
varying lowp float vNoise;\r
varying vec3 vWorldPos;\r
\r
// Noise functions must be in both or shared via an include\r
vec2 hash(vec2 p) {\r
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));\r
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);\r
}\r
\r
\r
float gradientNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);\r
    float a = dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0));\r
    float b = dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));\r
    float c = dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));\r
    float d = dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));\r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
void main() {\r
    vec4 worldPos = uModelMatrix * aVertexPosition;\r
    \r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
\r
    // Use World Position XZ for noise so displacement is seamless across objects\r
    vec2 noiseCoord = worldPos.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; \r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    vNoise = smoothstep(-0.4, 0.4, n);\r
\r
    // Displace the Y position based on noise\r
    worldPos.y += vNoise * udisplacement; // Adjust '2.0' for displacement strength\r
\r
    gl_Position = uProjectionMatrix * uViewMatrix * worldPos;\r
    \r
    vTexCoord = aTexCoord;\r
    vWorldPos = worldPos.xyz;\r
}`,Ot=`precision lowp float;\r
\r
varying lowp vec2 vTexCoord;\r
varying lowp float vNoise;\r
varying vec3 vWorldPos;\r
\r
uniform vec3 uColor1; \r
uniform vec3 uColor2; \r
uniform vec3 uColor3; \r
\r
void main() {\r
    float n = clamp(vNoise, 0.0, 1.0);\r
\r
    // 1. Create a smooth transition for the first blend (Deep to Shallow)\r
    // This blend happens between 0.0 and 0.6\r
    float blend1 = smoothstep(0.0, 0.6, n);\r
    vec3 waterBase = mix(uColor1, uColor2, blend1);\r
\r
    // 2. Create a smooth transition for the second blend (Shallow to Foam)\r
    // This blend starts late (at 0.7) and ends at the peak (1.0)\r
    float blend2 = smoothstep(0.7, 1.0, n);\r
    vec3 finalColor = mix(waterBase, uColor3, blend2);\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,F=document.getElementById("glcanvas"),f=F.getContext("webgl")||F.getContext("experimental-webgl");f||alert("Unable to initialize WebGL.");f.getExtension("OES_standard_derivatives");f.getExtension("EXT_shader_texture_lod");f.enable(f.BLEND);f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA);f.enable(f.DEPTH_TEST);f.depthFunc(f.LEQUAL);let ce=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),K=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),ie=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),Nt=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),ue=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),re=new Y(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),ee=new Y(f,1024,1024);const fe=new $(f,Ue,St),zt=new $(f,de,Dt),It=new $(f,Pt,Ve),jt=new $(f,Vt,$t),Ht=new $(f,At,$e),Wt=new $(f,de,Mt),Xt=new $(f,Ue,Rt),Yt=new $(f,Ce,Ot),Gt=new $(f,Lt,Ut),qt=new $(f,de,kt),Qt=new $(f,de,Bt),me=new U(fe,"White"),Ee=new U(fe,"Red"),ke=new U(fe,"Grey"),Be=new U(fe,"Brown"),Oe=new U(Xt,"Noise"),pe=new U(Yt,"Water"),Zt=new $(f,Ce,Ve),Kt=new $(f,Ce,$e),Te=new U(Zt,"Water Depth"),Fe=new U(Kt,"Water Normal"),Q=new U(Gt,"PPL Lighting"),j=new U(qt,"Skybox"),_e=new U(Qt,"PixelArt"),Ne=new U(jt,"ShadowMap"),ze=new U(It,"Depth"),Ie=new U(Ht,"Normal"),je=new U(Wt,"Outline"),He=new U(zt,"Screen");_e.setUniforms({uPixelSize:2,uColorLevels:128,uDepthThreshold:.05,uNormalThreshold:.2,uSilhouetteDarkening:.2,uCreaseDarkening:.7});Q.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.7,.4],uAmbient:.5,uSpecularStrength:.7,uShininess:32,uVolumetricSteps:20,uVolumetricIntensity:.1,uVolumetricScattering:.5});j.setUniforms({uTopColor:[.21,.31,.49],uBottomColor:[1,.51,.32],uSunColor:[1,.33,.1],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.2,uCloudCoverage:.76,uCloudSpeed:.02,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});je.setUniforms({uDepthThreshold:.5,uNormalThreshold:.01,uThickness:1,uOutlineColor:[1,1,1,1]});me.setUniforms({uColor:[1,1,1,1]});Ee.setUniforms({uColor:[1,0,0,1]});ke.setUniforms({uColor:[.4,.4,.4,1]});Be.setUniforms({uColor:[.804,.498,.196,1]});Oe.setUniforms({uColor:[1,1,1,1],uWind:[.1,.2],uSpeed:.7,uScale:1,uColor1:[.3,.38,.2],uColor2:[.35,.55,.15],uColor3:[.85,.85,.85]});const Jt={uWind:[.05,0],uSpeed:5,uScale:.08,udisplacement:.75,uSteepness:.2,uWavelength:25,uColor1:[.094,.271,.494],uColor2:[.196,.404,.624],uColor3:[.8,.8,1]},ei=[pe,Te,Fe];ei.forEach(s=>{s.setUniforms(Jt)});const ti={White:me,Red:Ee,Noise:Oe,Lighting:Q,Skybox:j,PixelArt:_e,Shadow:Ne,Depth:ze,Normal:Ie,Outline:je,Screen:He,Water:pe},I=new Ke(f),z=new xe,O=new xe,H=[],k=new et,ne=new he(f,ee.width,ee.height,ee,Ne,"Shadow Pass");ne.clearColor=[1,1,1,1];ne.autoResize=!1;k.addPass(ne);const We=new he(f,F.width,F.height,K,ze,"Depth Pass");We.clearColor=[1,1,1,1];k.addPass(We);const Xe=new he(f,F.width,F.height,ie,Ie,"Normal Pass");Xe.clearColor=[.5,.5,1,1];k.addPass(Xe);const Ye=new he(f,F.width,F.height,ce,null,"Albedo Pass");Ye.clearColor=[0,0,0,1];k.addPass(Ye);const Se=new it(f,F.width,F.height,Q,re,"Lighting Pass");Se.setInputBuffers(ce.texture,ie.texture,K.texture,ee.texture);k.addPass(Se);const De=new rt(f,F.width,F.height,j,re,"Skybox Pass");De.setInputTexture(K.texture);k.addPass(De);const Ge=new nt(f,F.width,F.height,_e,ue,"PixelArt Pass");Ge.setInputBuffers(re.texture,K.texture,ie.texture);k.addPass(Ge);const B=new tt(f,F.width,F.height,He);B.setBuffer("Final",ue.texture);B.setBuffer("Pixel",ue.texture);B.setBuffer("Lit",re.texture);B.setBuffer("Albedo",ce.texture);B.setBuffer("Normal",ie.texture);B.setBuffer("Depth",K.texture);B.setBuffer("Shadow",ee.texture);ne.camera=O;Se.lightCamera=O;k.addPass(B);function qe(){F.width=window.innerWidth,F.height=window.innerHeight,f.viewport(0,0,f.canvas.width,f.canvas.height),ce.resize(F.width,F.height),K.resize(F.width,F.height),ie.resize(F.width,F.height),Nt.resize(F.width,F.height),re.resize(F.width,F.height),ue.resize(F.width,F.height),k.resize(F.width,F.height);const s=F.width/F.height;z.setPerspective(45*Math.PI/180,s,.1,100)}window.addEventListener("resize",qe);qe();const ii=F.width/F.height;z.setPerspective(45*Math.PI/180,ii,.1,100);z.transform.position.set(-8.04,-.21,-18.09);z.transform.rotation.set(-.01,-9.35,0);let se=null,oe=null,q=null,ae=null,J=null,le=null;Z.load(f,"./Assets/3D/LightHouse.obj").then(s=>{se=new X(I,me,s,"Lighthouse Main"),se.transform.position.set(0,-7,0),se.transform.scale.set(50,50,50),H.push(se)});Z.load(f,"./Assets/3D/LightHouseRed.obj").then(s=>{oe=new X(I,Ee,s,"Lighthouse Red"),oe.transform.position.set(0,-7,0),oe.transform.scale.set(50,50,50),H.push(oe)});Z.load(f,"./Assets/3D/LightHouseBrown.obj").then(s=>{le=new X(I,Be,s,"Lighthouse Brown"),le.transform.position.set(0,-7,0),le.transform.scale.set(50,50,50),H.push(le)});Z.load(f,"./Assets/3D/Clouds.obj").then(s=>{J=new X(I,me,s,"Clouds"),J.transform.position.set(0,-7,25),J.transform.scale.set(50,50,50),J.transform.rotation.set(0,Math.PI,0),H.push(J)});Z.load(f,"./Assets/3D/DetailedPlaneSand.obj").then(s=>{ae=new X(I,ke,s,"Sand Plane"),ae.transform.position.set(0,-7,0),ae.transform.scale.set(50,50,50),H.push(ae)});Z.load(f,"./Assets/3D/DetailedPlane.obj").then(s=>{q=new X(I,pe,s,"Water Floor"),q.depthMaterial=Te,q.normalMaterial=Fe,q.transform.position.set(0,-5,25),q.transform.scale.set(50,50,50),H.push(q)});const Pe=[{x:0,y:0,w:1,h:1,pass:"Final"}];B.setViewports(Pe);const Ae={gl:f,scene:H,camera:z,lightCamera:O,renderer:I,renderQueue:k,materials:ti,viewportPass:B};Ae.setViewports=s=>{Pe[0].pass=s};new Ft(Ae);const ri=new _t(z,F);ot.attach(k,I);function Qe(s){W.update(s),Ae.deltaTime=W.deltaTime,ri.update(W.deltaTime),pe.setUniforms({uTime:W.time}),Te.setUniforms({uTime:W.time}),Fe.setUniforms({uTime:W.time}),j.setUniforms({uTime:W.time});let e=[.5,.8,.2];if(Q.uniforms.uLightDir&&Q.uniforms.uLightDir.value){const n=Q.uniforms.uLightDir.value,o=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);o>.001?e=[n[0]/o,n[1]/o,n[2]/o]:e=[n[0],n[1],n[2]]}const t=[0,0,0],i=50;O.transform.position.set(t[0]+e[0]*i,t[1]+e[1]*i,t[2]+e[2]*i);const r=30;O.setOrthographic(-r,r,-r,r,1,100),O.transform.rotation.x=-Math.asin(e[1]),O.transform.rotation.y=Math.atan2(e[0],e[2]),O.updateView(),z.updateView(),B.setViewports(Pe),ne.camera=O,z.updateProjection(),O.updateProjection(),j.uniforms.uSunColor&&De.setLight(e,j.uniforms.uSunColor.value,j.uniforms.uTopColor.value,j.uniforms.uBottomColor.value),k.execute(I,H,z),requestAnimationFrame(Qe)}requestAnimationFrame(Qe);
