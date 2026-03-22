(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class le{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i])}get x(){return this.data[0]}set x(e){this.data[0]=e}get y(){return this.data[1]}set y(e){this.data[1]=e}get z(){return this.data[2]}set z(e){this.data[2]=e}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this}toArray(){return[this.data[0],this.data[1],this.data[2]]}}class S{static identity(e){return M.identity(e)}static multiply(e,t,i){return M.multiply(e,t,i)}static translate(e,t,i){return M.translate(e,t,i)}static scale(e,t,i){return M.scale(e,t,i)}static rotateX(e,t,i){return M.rotateX(e,t,i)}static rotateY(e,t,i){return M.rotateY(e,t,i)}static rotateZ(e,t,i){return M.rotateZ(e,t,i)}static invert(e,t){return M.invert(e,t)}}const M={identity(n){return n.fill(0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n},multiply(n,e,t){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],c=e[6],l=e[7],d=e[8],u=e[9],m=e[10],y=e[11],b=e[12],T=e[13],p=e[14],g=e[15],v=t[0],x=t[1],C=t[2],E=t[3];return n[0]=v*i+x*a+C*d+E*b,n[1]=v*r+x*h+C*u+E*T,n[2]=v*s+x*c+C*m+E*p,n[3]=v*o+x*l+C*y+E*g,v=t[4],x=t[5],C=t[6],E=t[7],n[4]=v*i+x*a+C*d+E*b,n[5]=v*r+x*h+C*u+E*T,n[6]=v*s+x*c+C*m+E*p,n[7]=v*o+x*l+C*y+E*g,v=t[8],x=t[9],C=t[10],E=t[11],n[8]=v*i+x*a+C*d+E*b,n[9]=v*r+x*h+C*u+E*T,n[10]=v*s+x*c+C*m+E*p,n[11]=v*o+x*l+C*y+E*g,v=t[12],x=t[13],C=t[14],E=t[15],n[12]=v*i+x*a+C*d+E*b,n[13]=v*r+x*h+C*u+E*T,n[14]=v*s+x*c+C*m+E*p,n[15]=v*o+x*l+C*y+E*g,n},translate(n,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];if(e===n)n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15];else{let o=e[0],a=e[1],h=e[2],c=e[3],l=e[4],d=e[5],u=e[6],m=e[7],y=e[8],b=e[9],T=e[10],p=e[11];n[0]=o,n[1]=a,n[2]=h,n[3]=c,n[4]=l,n[5]=d,n[6]=u,n[7]=m,n[8]=y,n[9]=b,n[10]=T,n[11]=p,n[12]=o*i+l*r+y*s+e[12],n[13]=a*i+d*r+b*s+e[13],n[14]=h*i+u*r+T*s+e[14],n[15]=c*i+m*r+p*s+e[15]}return n},scale(n,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n},rotateX(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[4],o=e[5],a=e[6],h=e[7],c=e[8],l=e[9],d=e[10],u=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+c*i,n[5]=o*r+l*i,n[6]=a*r+d*i,n[7]=h*r+u*i,n[8]=c*r-s*i,n[9]=l*r-o*i,n[10]=d*r-a*i,n[11]=u*r-h*i,n},rotateY(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[0],o=e[1],a=e[2],h=e[3],c=e[8],l=e[9],d=e[10],u=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-c*i,n[1]=o*r-l*i,n[2]=a*r-d*i,n[3]=h*r-u*i,n[8]=s*i+c*r,n[9]=o*i+l*r,n[10]=a*i+d*r,n[11]=h*i+u*r,n},rotateZ(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[0],o=e[1],a=e[2],h=e[3],c=e[4],l=e[5],d=e[6],u=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+c*i,n[1]=o*r+l*i,n[2]=a*r+d*i,n[3]=h*r+u*i,n[4]=c*r-s*i,n[5]=l*r-o*i,n[6]=d*r-a*i,n[7]=u*r-h*i,n},invert(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],d=e[9],u=e[10],m=e[11],y=e[12],b=e[13],T=e[14],p=e[15],g=t*a-i*o,v=t*h-r*o,x=t*c-s*o,C=i*h-r*a,E=i*c-s*a,z=r*c-s*h,I=l*b-d*y,j=l*T-u*y,W=l*p-m*y,H=d*T-u*b,X=d*p-m*b,Y=u*p-m*T,_=g*Y-v*X+x*H+C*W-E*j+z*I;return _?(_=1/_,n[0]=(a*Y-h*X+c*H)*_,n[1]=(r*X-i*Y-s*H)*_,n[2]=(b*z-T*E+p*C)*_,n[3]=(u*E-d*z-m*C)*_,n[4]=(h*W-o*Y-c*j)*_,n[5]=(t*Y-r*W+s*j)*_,n[6]=(T*x-y*z-p*v)*_,n[7]=(l*z-u*x+m*v)*_,n[8]=(o*X-a*W+c*I)*_,n[9]=(i*W-t*X-s*I)*_,n[10]=(y*E-b*x+p*g)*_,n[11]=(d*x-l*E-m*g)*_,n[12]=(a*j-o*H-h*I)*_,n[13]=(t*H-i*j+r*I)*_,n[14]=(b*v-y*C-T*g)*_,n[15]=(l*C-d*v+u*g)*_,n):null}};class Be{constructor(){this.position=new le(0,0,0),this.rotation=new le(0,0,0),this.scale=new le(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),S.identity(this.localMatrix),S.identity(this.worldMatrix),this.parent=null,this.children=[]}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e)}remove(e){const t=this.children.indexOf(e);t!==-1&&(e.parent=null,this.children.splice(t,1))}updateLocalMatrix(){S.identity(this.localMatrix),S.translate(this.localMatrix,this.localMatrix,this.position),S.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),S.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),S.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),S.scale(this.localMatrix,this.localMatrix,this.scale)}updateWorldMatrix(){if(this.updateLocalMatrix(),this.parent)S.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix);else for(let e=0;e<16;e++)this.worldMatrix[e]=this.localMatrix[e];for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}}class ce{constructor(e,t,i=null,r="GameObject"){this.name=r,this.transform=new Be,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){this.transform.updateWorldMatrix();const r=i||this.material;this.renderer&&r&&this.renderer.draw(this,e,t,r)}}class ue extends ce{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,S.identity(this.projectionMatrix),S.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,r){this.fov=e,this.aspect=t,this.near=i,this.far=r,this.orthographic=!1;const s=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=s/t,o[5]=s,o[10]=(r+i)/(i-r),o[11]=-1,o[14]=2*r*i/(i-r)}setOrthographic(e,t,i,r,s,o){this.near=s,this.far=o,this.orthographic=!0,this.orthoSize=(r-i)/2;const a=this.projectionMatrix,h=1/(e-t),c=1/(i-r),l=1/(s-o);a.fill(0),a[0]=-2*h,a[5]=-2*c,a[10]=2*l,a[12]=(e+t)*h,a[13]=(r+i)*c,a[14]=(o+s)*l,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),S.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e){const t=this.viewMatrix,i=this.projectionMatrix;e.transform.updateWorldMatrix();const r=e.transform.worldMatrix,s=r[12],o=r[13],a=r[14],h=1,c=t[0]*s+t[4]*o+t[8]*a+t[12]*h,l=t[1]*s+t[5]*o+t[9]*a+t[13]*h,d=t[2]*s+t[6]*o+t[10]*a+t[14]*h,u=t[3]*s+t[7]*o+t[11]*a+t[15]*h,m=i[0]*c+i[4]*l+i[8]*d+i[12]*u,y=i[1]*c+i[5]*l+i[9]*d+i[13]*u;i[2]*c+i[6]*l+i[10]*d+i[14]*u;const b=i[3]*c+i[7]*l+i[11]*d+i[15]*u;if(b===0)return[.5,.5];const T=m/b,p=y/b;return[(T+1)*.5,(p+1)*.5]}}class N{constructor(e,t,i){this.gl=e;const r=this.loadShader(e.VERTEX_SHADER,t),s=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,r),e.attachShader(this.program,s),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={}}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const r=this.gl,s=this.getUniformLocation(e);if(s){if(i){i==="1i"?r.uniform1i(s,t):i==="1f"?r.uniform1f(s,t):i==="2fv"?r.uniform2fv(s,t):i==="3fv"?r.uniform3fv(s,t):i==="4fv"?r.uniform4fv(s,t):i==="Matrix4fv"&&r.uniformMatrix4fv(s,!1,t);return}if(typeof t=="number")r.uniform1f(s,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:r.uniform2fv(s,t);break;case 3:r.uniform3fv(s,t);break;case 4:r.uniform4fv(s,t);break;case 16:r.uniformMatrix4fv(s,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;Array.isArray(t)&&(i=t.join(`
`));const r=this.gl.createShader(e);return this.gl.shaderSource(r,i),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)?r:(console.error("Shader compile error:",this.gl.getShaderInfoLog(r)),this.gl.deleteShader(r),null)}}class Ee{constructor(e,t,i,r,s=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=r,this.indices=s,this.count=s?s.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const r=e.getAttribLocation("aTexCoord");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const r=e.getAttribLocation("aNormal");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class $e{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[];const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),r=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new Ee(e,t,i,r)}draw(e,t,i=void 0,r=null){const s=r||e.material;if(!s||!s.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const h=s.shader;h.use(),a.bind(h),h.setUniform("uProjectionMatrix",t.projectionMatrix),h.setUniform("uViewMatrix",t.viewMatrix),h.setUniform("uModelMatrix",e.transform.worldMatrix);let c=0;for(const l in s.uniforms){const d=s.uniforms[l];let u=d.value,m=d.type;(u instanceof WebGLTexture||m==="1i"&&u&&typeof u=="object")&&(o.activeTexture(o.TEXTURE0+c),o.bindTexture(o.TEXTURE_2D,u),(o.isTexture(u)||u instanceof WebGLTexture)&&(u=c,m="1i",c++)),h.setUniform(l,u,m)}a.draw(),this.drawCalls++}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails=[],e}}class k{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,r){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=i,s[2]=r}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,r])}}setVec4(e,t,i,r,s){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=i,o[2]=r,o[3]=s}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,r,s])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}class U{constructor(e,t,i,r={}){this.gl=e,this.width=t,this.height=i,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,i,0,e.RGBA,e.UNSIGNED_BYTE,null);const s=r.minFilter!==void 0?r.minFilter:e.LINEAR,o=r.magFilter!==void 0?r.magFilter:e.LINEAR,a=r.wrapS!==void 0?r.wrapS:e.CLAMP_TO_EDGE,h=r.wrapT!==void 0?r.wrapT:e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,h),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer);const c=e.checkFramebufferStatus(e.FRAMEBUFFER);c!==e.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is not complete: "+c),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,e,t,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}}class Oe{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const G=new Oe;class Te{static async load(e,t){const r=await(await fetch(t)).text(),s=this.parse(e,r);return new Ee(e,s.positions,s.uvs,s.normals)}static parse(e,t){const i=[],r=[],s=[],o=[],a=[],h=[],c=t.split(`
`);for(let l of c){if(l=l.trim(),l.startsWith("#")||l==="")continue;const d=l.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")r.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")s.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const m=d.slice(1);for(let y=1;y<m.length-1;y++){const b=m[0],T=m[y],p=m[y+1];this.processVertex(b,i,r,s,o,a,h),this.processVertex(T,i,r,s,o,a,h),this.processVertex(p,i,r,s,o,a,h)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(h),vertexCount:o.length/3}}static processVertex(e,t,i,r,s,o,a){const h=e.split("/"),c=parseInt(h[0])-1,l=h[1]?parseInt(h[1])-1:-1,d=h[2]?parseInt(h[2])-1:-1,u=t[c];if(s.push(u[0],u[1],u[2]),l>=0){const m=i[l];o.push(m[0],m[1])}else o.push(0,0);if(d>=0){const m=r[d];a.push(m[0],m[1],m[2])}else a.push(0,1,0)}}class Ne{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}}class ke{constructor(){this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const r of this.passes)r.enabled&&r.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class fe{constructor(e,t,i,r="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=r,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}class Q extends fe{constructor(e,t,i,r=null,s=0,o="ObjectPass"){super(e,t,i,o),this.renderTarget=r,this.renderMode=s,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const r=this.camera||i;this.camera&&r.updateView();const s=performance.now();if(e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor){this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);let a=this.gl.COLOR_BUFFER_BIT;this.clearDepth&&(a|=this.gl.DEPTH_BUFFER_BIT),this.gl.clear(a)}if(t&&Array.isArray(t))for(const a of t)a.material.setUniform("uRenderMode",this.renderMode,"1i"),a.render(r,this.renderTarget);else t&&t.render&&t.render(r,this.renderTarget);this.renderTarget&&this.renderTarget.unbind();const o=e.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-s}}class _e{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const r=this.gl;let s,o=t;if(e.uniforms&&e.shader){s=e.shader,o={};for(const l in e.uniforms)o[l]=e.uniforms[l].value;t&&(t.bind||t===null)&&(i=t)}else s=e;i?i.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)),s.use(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer);const a=s.getAttribLocation("aVertexPosition");a!==-1&&(r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,r.FLOAT,!1,16,0));const h=s.getAttribLocation("aTexCoord");h!==-1&&(r.enableVertexAttribArray(h),r.vertexAttribPointer(h,2,r.FLOAT,!1,16,8));let c=0;for(const l in o){const d=o[l];d instanceof WebGLTexture?(r.activeTexture(r.TEXTURE0+c),r.bindTexture(r.TEXTURE_2D,d),s.setUniform(l,c,"1i"),c++):s.setUniform(l,d)}r.drawArrays(r.TRIANGLE_STRIP,0,4);for(let l=0;l<c;l++)r.activeTexture(r.TEXTURE0+l),r.bindTexture(r.TEXTURE_2D,null)}}class Ve extends fe{constructor(e,t,i,r){super(e,t,i,"ViewportComposition"),this.material=r,this.fullScreenQuad=new _e(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const r of this.viewports){const s=Math.floor(r.x*this.width),o=Math.floor(r.y*this.height),a=Math.floor(r.w*this.width),h=Math.floor(r.h*this.height);this.gl.viewport(s,o,a,h);let c=this.buffers.Final;const l=r.pass;this.buffers[l]&&(c=this.buffers[l]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class me extends fe{constructor(e,t,i,r,s=null,o="ScreenPass"){super(e,t,i,o),this.material=r,this.renderTarget=s,this.fullScreenQuad=new _e(e),this.inputs={},this.clearColor=null}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const r=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",[this.width,this.height]),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const s=e.resetDrawCalls();this.drawCount=s.count,this.drawDetails=s.details,this.executionTime=performance.now()-r}}class ze extends me{constructor(e,t,i,r,s=null,o="Lighting Pass"){super(e,t,i,r,s,o),this.lightCamera=null}setInputBuffers(e,t,i,r,s){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t),this.setTexture("uDepthTexture",i),this.setTexture("uRoughnessTexture",s),this.setTexture("uShadowMap",r)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){const i=new Float32Array(16);S.multiply(i,t.projectionMatrix,t.viewMatrix);const r=new Float32Array(16);S.multiply(r,e.projectionMatrix,e.viewMatrix);const s=new Float32Array(16);S.invert(s,r);const o=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:i,uInverseViewProjection:s,uCameraPos:[o.x,o.y,o.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}}class Ie extends me{constructor(e,t,i,r,s=null,o="Skybox Pass"){super(e,t,i,r,s,o),this.clearColor=null,this.clearDepth=!1}setCamera(e){const t=new Float32Array(16);S.multiply(t,e.projectionMatrix,e.viewMatrix);const i=new Float32Array(16);S.invert(i,t),this.material.setUniforms({uInverseViewProjection:i,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,r){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uBottomColor:r})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class je extends me{constructor(e,t,i,r,s,o="PixelArt Pass"){super(e,t,i,r,s,o)}setInputBuffers(e,t,i,r){this.setTexture("uSceneTexture",e),this.setTexture("uDepthTexture",t),this.setTexture("uNormalTexture",i),this.setTexture("uPositionTexture",r)}resize(e,t){super.resize(e,t),this.material.setUniform("uResolution",[e,t])}}class We{constructor(){this.enabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[]},this.lastFrameStart=0,this.fps=0,this.history=[],this.maxHistory=60,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes=[]}endFrame(){this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.currentPass=null)}recordDrawCall(e,t,i,r,s){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:s-r})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}}class He{static attach(e,t){const i=new We,r=e.execute.bind(e);e.execute=function(o,a,h){i.enabled&&i.beginFrame();const c=e.passes||[];for(let l=0;l<c.length;l++){const d=c[l];if(!d.__profilerInstrumented){const u=d.execute.bind(d),m=d.constructor.name;d.execute=function(y,b,T){i.enabled&&i.beginPass(m),u(y,b,T),i.enabled&&i.endPass()},d.__profilerInstrumented=!0}}r(o,a,h),i.enabled&&i.endFrame()};const s=t.draw.bind(t);return t.draw=function(o,a,h,c){const l=performance.now();s(o,a,h,c);const d=performance.now();if(i.enabled){const u=o?o.name:"Unknown",m=c?c.name:"Unknown";i.recordDrawCall(u,m,0,l,d)}},i.disable(),i}}class Xe{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const r=t.style.display==="none";t.style.display=r?"flex":"none",i.style.background=r?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(r=>{const s=document.createElement("option");s.value=r,s.text=r,i.appendChild(s)}),i.onchange=r=>t(r.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,r,s){const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${r}px`,height:`${s}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const h=document.createElement("span");h.innerHTML="×",Object.assign(h.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),h.onclick=()=>{o.style.display="none"},h.onmouseover=()=>{h.style.color="#fff"},h.onmouseout=()=>{h.style.color="#888"},a.appendChild(h);const c=document.createElement("div");c.classList.add("window-content"),Object.assign(c.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const l=document.createElement("div");return Object.assign(l.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),o.appendChild(a),o.appendChild(c),o.appendChild(l),this.container.appendChild(o),this.addDragLogic(o,a),this.addResizeLogic(o,l),{content:c,window:o}}addResizeLogic(e,t){let i=!1,r,s,o,a;t.addEventListener("mousedown",l=>{l.preventDefault(),l.stopPropagation(),i=!0,o=l.clientX,a=l.clientY,r=e.offsetWidth,s=e.offsetHeight,document.addEventListener("mousemove",h),document.addEventListener("mouseup",c)});const h=l=>{if(!i)return;const d=r+(l.clientX-o),u=s+(l.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},c=()=>{i=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",c)}}addDragLogic(e,t){let i=!1,r,s,o,a;t.addEventListener("mousedown",l=>{l.target.tagName!=="BUTTON"&&(i=!0,r=l.clientX,s=l.clientY,o=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",h),document.addEventListener("mouseup",c),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const h=l=>{if(!i)return;let d=o+(l.clientX-r),u=a+(l.clientY-s);const m=20;d<m&&(d=0),u<m&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<m&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<m&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},c=()=>{i=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",c)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class D{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),D.nextNameID=D.nextNameID||0,this.$name.id=`lil-gui-name-${++D.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ye extends D{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function de(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Ge={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:de,toHexString:de},Z={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},qe={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){const i=Z.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Z.toHexString(r)}},Ze={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Z.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return Z.toHexString(r)}},Qe=[Ge,Z,qe,Ze];function Ke(n){return Qe.find(e=>e.match(n))}class Je extends D{constructor(e,t,i,r){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ke(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=de(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class he extends D{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class et extends D{constructor(e,t,i,r,s,o){super(e,t,i,"lil-number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},i=g=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+g),this.$input.value=this.getValue())},r=g=>{g.key==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),i(this._step*this._arrowKeyMultiplier(g)*-1))},s=g=>{this._inputFocused&&(g.preventDefault(),i(this._step*this._normalizeMouseWheel(g)))};let o=!1,a,h,c,l,d;const u=5,m=g=>{a=g.clientX,h=c=g.clientY,o=!0,l=this.getValue(),d=0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",b)},y=g=>{if(o){const v=g.clientX-a,x=g.clientY-h;Math.abs(x)>u?(g.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>u&&b()}if(!o){const v=g.clientY-c;d-=v*this._step*this._arrowKeyMultiplier(g),l+d>this._max?d=this._max-l:l+d<this._min&&(d=this._min-l),this._snapClampSetValue(l+d)}c=g.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",b)},T=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",T),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,g,v,x,C)=>(p-g)/(v-g)*(C-x)+x,t=p=>{const g=this.$slider.getBoundingClientRect();let v=e(p,g.left,g.right,this._min,this._max);this._snapClampSetValue(v)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=p=>{t(p.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,h;const c=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),o=!1},l=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,h=p.touches[0].clientY,o=!0):c(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(o){const g=p.touches[0].clientX-a,v=p.touches[0].clientY-h;Math.abs(g)>Math.abs(v)?c(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),t(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),y=400;let b;const T=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const v=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+v),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(m,y)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",T,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class tt extends D{constructor(e,t,i,r){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class it extends D{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var rt=`.lil-gui {
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
}`;function st(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ce=!1;class B{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),h&&this.domElement.classList.add("lil-allow-touch-styles"),!Ce&&a&&(st(rt),Ce=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,i,r,s){if(Object(i)===i)return new tt(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new et(this,e,t,i,r,s);case"boolean":return new Ye(this,e,t);case"string":return new it(this,e,t);case"function":return new he(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new Je(this,e,t,i)}addFolder(e){const t=new B({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof he||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof he)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class nt{constructor(e,t){this.editor=e,this.gui=new B({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(s=>s.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera"),(this.editor.game.scene||[]).forEach((s,o)=>{const a=s.name||`Object ${o}`;this.gui.add({select:()=>this.editor.selectObject(s)},"select").name(a)})}}class ot{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(r=>r.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject";if(t.transform){const r=t.transform,s=this.gui.addFolder(`Transform: ${i}`),o=s.addFolder("Position");o.add(r.position,"x").step(.1).listen().name("X"),o.add(r.position,"y").step(.1).listen().name("Y"),o.add(r.position,"z").step(.1).listen().name("Z");const a=s.addFolder("Rotation");a.add(r.rotation,"x").step(.1).listen().name("X"),a.add(r.rotation,"y").step(.1).listen().name("Y"),a.add(r.rotation,"z").step(.1).listen().name("Z");const h=s.addFolder("Scale");h.add(r.scale,"x").step(.1).listen().name("X"),h.add(r.scale,"y").step(.1).listen().name("Y"),h.add(r.scale,"z").step(.1).listen().name("Z")}if(t instanceof ue){const r=this.gui.addFolder("Camera Settings");r.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const s=r.addFolder("Perspective");s.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),r.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),r.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),r.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),s.open()}if(t.material){const r=this.gui.addFolder("Material");r.add(t.material,"name").name("Material Name").disable().listen(),r.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}}}class at{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(r=>r.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const r in t){const s=t[r];i.add({select:()=>this.inspect(s)},"select").name(r)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(r=>r.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const r=e.uniforms[i],s=r.value;if(r.type,Array.isArray(s)||s instanceof Float32Array)if(i.toLowerCase().includes("color")&&(s.length===3||s.length===4))t.addColor(r,"value").name(i).listen();else{const a=t.addFolder(i),h=["x","y","z","w"];for(let c=0;c<s.length;c++){const l={get val(){return s[c]},set val(d){s[c]=d}};a.add(l,"val").step(.01).name(h[c]||`[${c}]`).listen()}}else if(typeof s=="number"){const o={get val(){return r.value},set val(h){r.value=h}};let a=t.add(o,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else s instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class lt{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,r)=>{const s=this.gui.addFolder(`${r}: ${i.name||"Pass"}`);if(s.add(i,"enabled").name("Active"),s.add(i,"drawCount").name("Draw Calls").disable().listen(),s.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const h={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(c){i.clearColor[0]=c[0],i.clearColor[1]=c[1],i.clearColor[2]=c[2]}};s.addColor(h,"color").name("Clear Color")}i.renderTarget?s.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():s.add({info:"Screen"},"info").name("Target").disable(),i.material&&s.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const o={show:!1},a=s.addFolder("Performance Details");a.add(o,"show").name("List Draw Calls").onChange(h=>{h?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,r)=>{const s=e.addFolder(`Draw ${r}: ${i.object}`);s.add(i,"material").name("Material").disable(),s.add(i,"shader").name("Shader").disable(),s.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class ht{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={fps:0,ms:0,totalDrawCalls:0,totalPasses:0},this.init()}init(){this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>this.update(),500)}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const r=this.passesFolder.addFolder(i.name||"Pass");r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Perf (ms)").disable().listen(),r.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;this.stats.fps=Math.round(1/(this.editor.game.deltaTime||.016)),this.stats.ms=((this.editor.game.deltaTime||.016)*1e3).toFixed(2);let t=0;e.renderQueue&&e.renderQueue.passes&&(this.stats.totalPasses=e.renderQueue.passes.length,e.renderQueue.passes.forEach(i=>{t+=i.drawCount||0})),this.stats.totalDrawCalls=t,e.renderQueue.passes.forEach(i=>{`${i.name}${i.drawCount}`})}}class dt{constructor(e){this.game=e,this.wm=new Xe,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new nt(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new ot(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new at(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const r=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new lt(this,r.content),this.wm.addNavItem("PASSES",r.window),r.window.style.display="none";const s=this.wm.createWindow("Profiler",20,440,250,250);this.windows.profiler=new ht(this,s.content),this.wm.addNavItem("PROFILER",s.window),s.window.style.display="none";let o=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(o=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(o,a=>{this.game.setViewports(a)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class ct{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const r=Math.PI/2-.01;this.rotation.x=Math.max(-r,Math.min(r,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*e,i=this.camera.transform,r=Math.sin(i.rotation.y),s=Math.cos(i.rotation.y),o=-r,a=-s,h=s,c=-r;let l=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(l-=1),this.keys.d&&(l+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),l!==0||d!==0){const m=Math.sqrt(l*l+d*d);l/=m,d/=m}i.position.x+=(o*d+h*l)*t,i.position.z+=(a*d+c*l)*t,i.position.y+=u*t}}const pe=`precision highp float;\r
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
`,ut=`precision highp float;\r
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
`,ft=`precision highp float;\r
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
`,mt=`precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
uniform sampler2D uDepthTexture;\r
uniform sampler2D uRoughnessTexture;\r
\r
\r
// Shadows & Transform\r
uniform sampler2D uShadowMap;\r
uniform mat4 uInverseViewProjection;\r
uniform mat4 uLightSpaceMatrix;\r
uniform vec3 uCameraPos; \r
uniform float uTime;\r
\r
uniform vec3 uLightDir;\r
uniform vec3 uLightColor;\r
uniform float uAmbient;\r
\r
uniform float uSpecularStrength;\r
uniform float uShininess;\r
\r
// --- COMIC/TOON UNIFORMS ---\r
uniform vec3 uShadowColor; // Tint for the darkest areas\r
\r
// --- VOLUMETRIC UNIFORMS ---\r
uniform float uVolumetricSteps;\r
uniform float uVolumetricIntensity; \r
uniform float uVolumetricScattering; \r
\r
const int MAX_VOLUMETRIC_STEPS = 50;\r
\r
// Preserved: Your shadow check for volumes\r
float isLit(vec3 pos) {\r
    vec4 posLightSpace = uLightSpaceMatrix * vec4(pos, 1.0);\r
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w;\r
    projCoords = projCoords * 0.5 + 0.5;\r
    \r
    if (projCoords.z > 1.0 || projCoords.x < 0.0 || projCoords.x > 1.0 || projCoords.y < 0.0 || projCoords.y > 1.0) \r
        return 0.0;\r
\r
    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; \r
    float currentDepth = projCoords.z;\r
    float bias = 0.01; \r
    return currentDepth - bias > closestDepth ? 0.0 : 1.0;\r
}\r
\r
// Preserved: Your volumetric logic\r
vec3 calculateVolumetricLight(vec3 startPos, vec3 endPos) {\r
    vec3 rayVector = endPos - startPos;\r
    float rayLength = length(rayVector);\r
    vec3 rayDir = rayVector / rayLength;\r
    \r
    float maxDist = 50.0;\r
    if(rayLength > maxDist) rayLength = maxDist;\r
    \r
    float stepSize = rayLength / uVolumetricSteps;\r
    vec3 currentPos = startPos;\r
    \r
    float dither = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);\r
    currentPos += rayDir * stepSize * dither;\r
\r
    float accumulation = 0.0;\r
    for(int i = 0; i < MAX_VOLUMETRIC_STEPS; i++) {\r
        if(float(i) >= uVolumetricSteps) break;\r
        accumulation += isLit(currentPos);\r
        currentPos += rayDir * stepSize;\r
    }\r
    \r
    accumulation /= uVolumetricSteps;\r
    return uLightColor * accumulation * uVolumetricIntensity;\r
}\r
\r
vec3 getWorldPosition(vec2 uv, float depth) {\r
    float near = 0.1;\r
    float far = 100.0;\r
    float linearDepth = depth * far;\r
    float z_ndc = 1.0; \r
    if (linearDepth > 0.0001) {\r
        z_ndc = (far + near - (2.0 * near * far) / linearDepth) / (far - near);\r
    }\r
    vec4 clipSpacePosition = vec4(uv * 2.0 - 1.0, z_ndc, 1.0);\r
    vec4 worldPosition = uInverseViewProjection * clipSpacePosition;\r
    return worldPosition.xyz / worldPosition.w;\r
}\r
\r
// Updated: Hard-cut shadow for surfaces\r
float calculateShadow(vec3 worldPos) {\r
    vec4 posLightSpace = uLightSpaceMatrix * vec4(worldPos, 1.0);\r
    vec3 projCoords = posLightSpace.xyz / posLightSpace.w * 0.5 + 0.5;\r
    \r
    if (projCoords.z > 1.0) return 0.0;\r
\r
    float closestDepth = texture2D(uShadowMap, projCoords.xy).r; \r
    float currentDepth = projCoords.z;\r
    \r
    // Hard step for shadow edge\r
    return (currentDepth - 0.005) > closestDepth ? 1.0 : 0.0;\r
}\r
\r
void main() {\r
    vec4 sceneColor = texture2D(uSceneTexture, vUv);\r
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;\r
    float depthVal = texture2D(uDepthTexture, vUv).r;\r
    \r
    // 1. Sample Roughness (0.0 = Shiny, 1.0 = Matte)\r
    float roughness = texture2D(uRoughnessTexture, vUv).r;\r
    \r
    vec3 worldPos = getWorldPosition(vUv, depthVal);\r
    vec3 N = normalize(normalOrig * 2.0 - 1.0);\r
    vec3 L = normalize(uLightDir);\r
    vec3 V = normalize(uCameraPos - worldPos);\r
    vec3 H = normalize(L + V);\r
\r
    // --- TOON DIFFUSE (Preserved) ---\r
    float shadow = calculateShadow(worldPos);\r
    float d = dot(N, L) * (1.0 - shadow); \r
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);\r
\r
    // --- 2. CONTROLLED TOON SPECULAR ---\r
    // Use uShininess to control the "tightness"\r
    // We combine it with (1.0 - roughness) so the texture can still mute the shine\r
    float gloss = (1.0 - roughness);\r
    float specExponent = uShininess * 10.0 * gloss; \r
    \r
    float specVal = pow(max(dot(N, H), 0.0), specExponent);\r
\r
    // Use a high threshold for that "clean dot" look\r
    // We can use uSpecularStrength to influence how easily the highlight appears\r
    float threshold = 1.0 - (uSpecularStrength * 0.1 * gloss);\r
    threshold = clamp(threshold, 0.5, 0.99); // Keep it within a sane comic range\r
\r
    float toonSpecular = step(threshold, specVal) * gloss;\r
    \r
    // Final specular color multiplied by uSpecularStrength for brightness\r
    vec3 finalSpecular = uLightColor * toonSpecular * uSpecularStrength * (1.0 - shadow);\r
\r
    // --- 3. FINAL COMPOSITION ---\r
    vec3 toonDiffuse = mix(uShadowColor, uLightColor, intensity);\r
    vec3 volumeLight = calculateVolumetricLight(uCameraPos, worldPos);\r
\r
    vec3 radiance = (uAmbient * uLightColor + toonDiffuse) * sceneColor.rgb + finalSpecular  + volumeLight;\r
\r
    gl_FragColor = vec4(radiance, sceneColor.a);\r
}`,pt=`precision highp float;\r
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
// --- DYNAMIC & SSS UNIFORMS ---\r
uniform float uCloudScale;\r
uniform float uCloudThreshold; \r
uniform float uCloudDensity;    \r
uniform float uCloudCoverage;   \r
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
            o = 0.5 + 0.5 * sin(uTime * 0.15 + 6.2831 * o);\r
            vec2 r = g + o - f;\r
            minDist = min(minDist, dot(r, r));\r
        }\r
    }\r
    return 1.0 - sqrt(minDist);\r
}\r
\r
float getCloudNoise(vec2 uv, float t) {\r
    vec2 warp = vec2(worley(uv * 0.4 + t * 0.02), worley(uv * 0.4 - t * 0.02)) * 0.5;\r
    vec2 dUV = uv + warp;\r
    float v = worley(dUV) * 0.6 + worley(dUV * 2.5 + t * 0.1) * 0.3 + worley(dUV * 5.0) * 0.1;\r
    return v;\r
}\r
\r
float speed(vec3 p) {\r
    return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);\r
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
    vec3 lightDir = normalize(uLightDir);\r
\r
    float sunDot = max(dot(dir, lightDir), 0.0);\r
    vec3 skyColor = mix(uBottomColor, uTopColor, smoothstep(-0.1, 0.8, dir.y));\r
\r
    // Dynamic UVs\r
    float t = uTime * uCloudSpeed;\r
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale + vec2(t, t * 0.1);\r
\r
    // 1. DENSITY & OCCLUSION\r
    float density = getCloudNoise(cloudUV, t);\r
    float mask = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.2, density);\r
    \r
    // 2. SUN BLOCKING (Occlusion)\r
    // As the cloud density increases, the sun disk fades out\r
    float sunOcclusion = smoothstep(0.4, 0.8, density); \r
    float sunVisibility = 1.0 - (sunOcclusion * uCloudDensity);\r
\r
    // 3. SUBSURFACE SCATTERING (Forward Scattering)\r
    // Light bleeds through the edges (low density areas) when looking toward the sun\r
    float sss = pow(sunDot, 8.0) * (1.0 - density) * 2.0;\r
    \r
    // 4. BEER'S LAW SHADOWING (Standard Lighting)\r
    vec2 lightOffset = lightDir.xz * 0.12;\r
    float lightSample = getCloudNoise(cloudUV + lightOffset, t);\r
    float shadow = exp(-(density - lightSample) * 3.5);\r
\r
    // 5. COLOR MIXING\r
    vec3 cloudBase = mix(uCloudShadeColor, uCloudMainColor, shadow);\r
    \r
    // Apply SSS: The edges glow with SunColor when in front of the sun\r
    vec3 cloudWithSSS = mix(cloudBase, uSunColor, sss * mask);\r
\r
    // 6. FINAL COMPOSITION\r
    float alpha = mask * uCloudDensity * smoothstep(0.0, 0.1, dir.y);\r
    vec3 finalCloud = mix(skyColor, cloudWithSSS, alpha);\r
\r
    // Render Sun Disk with Occlusion\r
    float sunDisk = smoothstep(0.998, 0.999, sunDot) * sunVisibility; \r
    vec3 finalColor = finalCloud + (uSunColor * sunDisk * 2.0);\r
    \r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,gt=`precision highp float;\r
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
}`,vt=`precision highp float;\r
\r
#define VERTEX\r
\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float uTime;\r
uniform float uSpeed; \r
uniform float udisplacement; // Overall amplitude multiplier\r
\r
varying float vNoise; // Re-using this to pass wave height to fragment\r
\r
// Wave Parameter: vec4(DirectionX, DirectionZ, Steepness, Wavelength)\r
// Steepness should be between 0.0 and 1.0 / (amplitude * wavelength)\r
uniform vec4 uWaveA; \r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k); // Phase speed\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
    // Tangent and Binormal partial derivatives for Normal calculation\r
    tangent += vec3(\r
        -d.x * d.x * (steepness * sin(f)),\r
        d.x * (steepness * cos(f)),\r
        -d.x * d.y * (steepness * sin(f))\r
    );\r
    binormal += vec3(\r
        -d.x * d.y * (steepness * sin(f)),\r
        d.y * (steepness * cos(f)),\r
        -d.y * d.y * (steepness * sin(f))\r
    );\r
\r
    return vec3(\r
        d.x * (a * cos(f)),\r
        a * sin(f),\r
        d.y * (a * cos(f))\r
    );\r
}\r
\r
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
void vertex(inout vec3 worldPos, inout vec3 normal, inout vec3 color, inout vec2 texCoord)\r
{\r
    vec3 gridPoint = worldPos;\r
    vec3 tangent = vec3(1.0, 0.0, 0.0);\r
    vec3 binormal = vec3(0.0, 0.0, 1.0);\r
    vec3 p = gridPoint;\r
\r
    // Sum multiple waves for complexity\r
    p += GerstnerWave(uWaveA, gridPoint, tangent, binormal);\r
    p += GerstnerWave(uWaveB, gridPoint, tangent, binormal);\r
    p += GerstnerWave(uWaveC, gridPoint, tangent, binormal);\r
\r
\r
    float time = uTime * uSpeed;\r
\r
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
    p.y += smoothstep(-0.4, 0.4, n);\r
    // Update normal using the cross product of the accumulated derivatives\r
    normal = normalize(cross(binormal, tangent));\r
    \r
    // Output final position\r
    \r
    float maxHeight = (uWaveA.z/uWaveA.w + uWaveB.z/uWaveB.w + uWaveC.z/uWaveC.w) / udisplacement;\r
    // Map the real Y position (-max to +max) into a 0.0 to 1.0 range\r
    vNoise = ((p.y-worldPos.y)/udisplacement);\r
\r
    worldPos = p;\r
}`,wt=`precision highp float;\r
\r
#define FRAGMENT\r
varying float vNoise;\r
\r
uniform vec3 uColor1; \r
uniform vec3 uColor2; \r
uniform vec3 uColor3; \r
\r
uniform float uColorBands; // Set this to 3.0 or 4.0 for a retro look\r
\r
void fragment(inout vec4 color, inout vec3 normal, inout float emission)\r
{\r
    // 1. CLAMP & QUANTIZE\r
    // vNoise is 0.0 at the bottom of a wave and 1.0 at the peak.\r
    float n = clamp(vNoise, 0.0, 1.0);\r
    \r
    // Snap 'n' to discrete steps to create pixel-art color bands\r
    float quantizedN = floor(n * uColorBands) / uColorBands;\r
\r
    // 2. APPLY COLOR BANDS\r
    // Band 1: Deep to Shallow transition\r
    float blend1 = smoothstep(0.0, 0.5, quantizedN);\r
    vec3 waterBase = mix(uColor1, uColor2, blend1);\r
\r
    // Band 2: Shallow to Foam/Peak transition\r
    // Since Gerstner waves are "pinched", uColor3 will only appear \r
    // at the very sharp tips of the waves.\r
    float blend2 = smoothstep(0.0, 2.0, quantizedN);\r
    vec3 finalColor = mix(waterBase, uColor3, blend2);\r
\r
    // 3. OUTPUT\r
    // Set emission to 1.0 if you want the foam (uColor3) to glow slightly\r
    emission = blend2; \r
    \r
    color = vec4(finalColor, 0.8);\r
}`,Se=`precision highp float;\r
\r
attribute vec3 aVertexPosition;\r
attribute vec3 aNormal;\r
attribute vec3 aColor;\r
attribute vec2 aTexCoord;\r
\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
varying vec3 vColor;\r
varying vec2 vTexCoord;\r
\r
void vertex(inout vec3 worldPos, inout vec3 normal, inout vec3 color, inout vec2 texCoord);\r
\r
void main()\r
{\r
    vec3 position = aVertexPosition;\r
    vec2 texCoord = aTexCoord;\r
    vec3 color = aColor;\r
    \r
    vec3 worldPos = (uModelMatrix * vec4(position, 1.0)).xyz; \r
    \r
    vec3 worldNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);\r
    \r
\r
    #ifdef VERTEX\r
        vertex(worldPos, worldNormal, color, texCoord);\r
    #endif\r
\r
    vec3 viewNormal = normalize((uViewMatrix * vec4(worldNormal, 0.0)).xyz);\r
\r
\r
    vPosition = worldPos;\r
    vNormal = worldNormal;\r
    vColor = color;\r
    vTexCoord = texCoord;\r
\r
    gl_Position = uProjectionMatrix * uViewMatrix * vec4(worldPos, 1.0);\r
}\r
`,Ae=`precision highp float;\r
\r
uniform int uRenderMode;\r
varying vec3 vNormal;\r
varying vec3 vPosition;\r
varying vec3 vColor;\r
varying vec2 vTexCoord;\r
\r
uniform vec4 uColor;\r
uniform float uRoughness;\r
uniform sampler2D uMainTex;\r
uniform float uHasTexture;\r
\r
void fragment(inout vec4 color, inout vec3 normal, inout float emission);\r
\r
void main() {\r
    vec4 color = uColor;\r
    if (uHasTexture > 0.1) {\r
        color *= texture2D(uMainTex, vTexCoord);\r
    }\r
    \r
    vec3 normal = normalize(vNormal);\r
    float emission = 0.0;\r
    vec2 uv = vTexCoord;\r
\r
    #ifdef FRAGMENT\r
        fragment(color, normal, emission);\r
    #endif\r
\r
    if (uRenderMode == 0)\r
    {\r
        gl_FragColor = color;\r
    }\r
    else if(uRenderMode == 1) // uRoughness\r
    {\r
        gl_FragColor = vec4(uRoughness,0.0, 0.0, 1.0 );\r
    }\r
    else if (uRenderMode == 2)  // normal\r
    {\r
        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);\r
    } \r
    else if (uRenderMode == 3) //depth\r
    {\r
        float near = 0.1; \r
        float far = 1000.0; \r
    \r
        float z = gl_FragCoord.z * 2.0 - 1.0; \r
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); \r
        \r
        linearDepth /= far; \r
\r
        gl_FragColor = vec4(vec3(linearDepth), 1.0);\r
    } \r
    else if (uRenderMode == 4) //shadow\r
    {\r
        gl_FragColor = vec4(gl_FragCoord.z, gl_FragCoord.z, gl_FragCoord.z, 1.0);\r
    }\r
    else\r
    {\r
        gl_FragColor = vec4(vPosition, 1.0);\r
    }\r
}`,$=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),w=document.getElementById("glcanvas"),f=w.getContext("webgl")||w.getContext("experimental-webgl");f||alert("Unable to initialize WebGL.");f.enable(f.BLEND);f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA);f.enable(f.DEPTH_TEST);f.depthFunc(f.LEQUAL);f.enable(f.CULL_FACE);f.cullFace(f.BACK);f.frontFace(f.CCW);let re=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),V=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),se=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),K=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),ne=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),J=new U(f,window.innerWidth,window.innerHeight,{minFilter:f.NEAREST,magFilter:f.NEAREST}),q=new U(f,1024,1024);const xt=new N(f,Se,Ae),bt=new N(f,pe,ut),yt=new N(f,[vt,Se],[wt,Ae]),Ct=new N(f,ft,mt),Et=new N(f,pe,pt),Tt=new N(f,pe,gt),_t=new Ne(f,"./Assets/Textures/colormap.png"),ge=new k(xt,"Ship Mat"),oe=new k(yt,"Water"),O=new k(Ct,"PPL Lighting"),L=new k(Et,"Skybox"),ve=new k(Tt,"PixelArt"),St=new k(bt,"Screen");ge.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:_t.texture,uRoughness:1});ve.setUniforms({uPixelSize:2,uColorLevels:128,uDepthThreshold:.025,uNormalThreshold:.1,uSilhouetteDarkening:.2,uCreaseDarkening:.7});O.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03,uVolumetricSteps:20,uVolumetricIntensity:.1,uVolumetricScattering:.5});L.setUniforms({uTopColor:[.21,.31,.49],uBottomColor:[1,.51,.32],uSunColor:[1,.33,.1],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.2,uCloudCoverage:.76,uCloudSpeed:.02,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const At={uWind:[1,0],uSpeed:.5,udisplacement:1.5,uScale:.2,uColor1:[.094,.271,.494],uColor2:[.196,.404,.624],uColor3:[.8,.8,1],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[1,-4.66,.1,20.57],uColorBands:3,uRoughness:0};oe.setUniforms(At);const Ft={Lighting:O,Skybox:L,PixelArt:ve,Water:oe,Ship:ge},ee=new $e(f),R=new ue,P=new ue,ae=[],A=new ke,te=new Q(f,q.width,q.height,q,4,"Shadow Pass");te.clearColor=[1,1,1,1];te.autoResize=!1;A.addPass(te);const Fe=new Q(f,w.width,w.height,V,3,"Depth Pass");Fe.clearColor=[1,1,1,1];A.addPass(Fe);const Pe=new Q(f,w.width,w.height,K,2,"Normal Pass");Pe.clearColor=[.5,.5,1,1];A.addPass(Pe);const De=new Q(f,w.width,w.height,se,1,"Roughness Pass");De.clearColor=[0,0,0,1];A.addPass(De);const Re=new Q(f,w.width,w.height,re,0,"Albedo Pass");Re.clearColor=[0,0,0,1];A.addPass(Re);const we=new ze(f,w.width,w.height,O,J,"Lighting Pass");we.setInputBuffers(re.texture,K.texture,V.texture,q.texture,se.texture);A.addPass(we);const xe=new Ie(f,w.width,w.height,L,J,"Skybox Pass");xe.setInputTexture(V.texture);A.addPass(xe);const Me=new je(f,w.width,w.height,ve,ne,"PixelArt Pass");Me.setInputBuffers(J.texture,V.texture,K.texture,se.texture);A.addPass(Me);const F=new Ve(f,w.width,w.height,St);F.setBuffer("Final",ne.texture);F.setBuffer("Pixel",ne.texture);F.setBuffer("Lit",J.texture);F.setBuffer("Albedo",re.texture);F.setBuffer("Roughness",se.texture);F.setBuffer("Normal",K.texture);F.setBuffer("Depth",V.texture);F.setBuffer("Shadow",q.texture);te.camera=P;we.lightCamera=P;A.addPass(F);function Le(){w.width=window.innerWidth,w.height=window.innerHeight,f.viewport(0,0,f.canvas.width,f.canvas.height),re.resize(w.width,w.height),V.resize(w.width,w.height),K.resize(w.width,w.height),J.resize(w.width,w.height),ne.resize(w.width,w.height),A.resize(w.width,w.height);const n=w.width/w.height;R.setPerspective(.8,n,.1,1e3)}window.addEventListener("resize",Le);Le();const Pt=w.width/w.height;R.setPerspective(.8,Pt,.1,1e3);R.transform.position.set(-16.2,1.8,-47);R.transform.rotation.set(0,$?3.24:3.22,0);Te.load(f,"./Assets/3D/scene.obj").then(n=>{var e=new ce(ee,ge,n,"Scene");e.transform.position.set(-15,-6,10),e.transform.scale.set(1,1,1),ae.push(e)});Te.load(f,"./Assets/3D/DetailedPlane.obj").then(n=>{for(let s=$?0:-2;s<=($?0:2);s++)for(let o=$?0:-1;o<=($?2:3);o++){var r=new ce(ee,oe,n,`Water Floor [${s},${o}]`);r.transform.position.set(s*100,-6.5,o*100),r.transform.scale.set(50,50,50),ae.push(r)}});const be=[{x:0,y:0,w:1,h:1,pass:"Final"}];F.setViewports(be);const ye={gl:f,scene:ae,camera:R,lightCamera:P,renderer:ee,renderQueue:A,materials:Ft,viewportPass:F};ye.setViewports=n=>{be[0].pass=n};$||new dt(ye);const Dt=new ct(R,w);He.attach(A,ee);const ie=30;P.setOrthographic(-ie,ie,-ie,ie,1,100);function Ue(n){G.update(n),ye.deltaTime=G.deltaTime,Dt.update(G.deltaTime),oe.setUniforms({uTime:G.time}),L.setUniforms({uTime:G.time});let e=[.5,.8,.2];if(O.uniforms.uLightDir&&O.uniforms.uLightDir.value){const r=O.uniforms.uLightDir.value,s=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);s>.001?e=[r[0]/s,r[1]/s,r[2]/s]:e=[r[0],r[1],r[2]]}const t=[0,0,0],i=50;P.transform.position.set(t[0]+e[0]*i,t[1]+e[1]*i,t[2]+e[2]*i),P.transform.rotation.x=-Math.asin(e[1]),P.transform.rotation.y=Math.atan2(e[0],e[2]),P.updateView(),R.updateView(),F.setViewports(be),te.camera=P,R.updateProjection(),P.updateProjection(),L.uniforms.uSunColor&&xe.setLight(e,L.uniforms.uSunColor.value,L.uniforms.uTopColor.value,L.uniforms.uBottomColor.value),A.execute(ee,ae,R),requestAnimationFrame(Ue)}requestAnimationFrame(Ue);
