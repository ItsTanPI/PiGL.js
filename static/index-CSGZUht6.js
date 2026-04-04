(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();class oe{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],i=this.data[2];return Math.sqrt(e*e+t*t+i*i)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class _{static identity(e){return R.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,i){return R.multiply(e,t,i)}static translate(e,t,i){return R.translate(e,t,i)}static scale(e,t,i){return R.scale(e,t,i)}static rotateX(e,t,i){return R.rotateX(e,t,i)}static rotateY(e,t,i){return R.rotateY(e,t,i)}static rotateZ(e,t,i){return R.rotateZ(e,t,i)}static invert(e,t){return R.invert(e,t)}static compose(e,t,i,s){return R.compose(e,t,i,s)}}const R={identity(r){return r.fill(0),r[0]=1,r[5]=1,r[10]=1,r[15]=1,r},multiply(r,e,t){let i=e[0],s=e[1],n=e[2],o=e[3],a=e[4],h=e[5],c=e[6],l=e[7],d=e[8],u=e[9],m=e[10],x=e[11],g=e[12],v=e[13],f=e[14],p=e[15],w=t[0],y=t[1],E=t[2],T=t[3];return r[0]=w*i+y*a+E*d+T*g,r[1]=w*s+y*h+E*u+T*v,r[2]=w*n+y*c+E*m+T*f,r[3]=w*o+y*l+E*x+T*p,w=t[4],y=t[5],E=t[6],T=t[7],r[4]=w*i+y*a+E*d+T*g,r[5]=w*s+y*h+E*u+T*v,r[6]=w*n+y*c+E*m+T*f,r[7]=w*o+y*l+E*x+T*p,w=t[8],y=t[9],E=t[10],T=t[11],r[8]=w*i+y*a+E*d+T*g,r[9]=w*s+y*h+E*u+T*v,r[10]=w*n+y*c+E*m+T*f,r[11]=w*o+y*l+E*x+T*p,w=t[12],y=t[13],E=t[14],T=t[15],r[12]=w*i+y*a+E*d+T*g,r[13]=w*s+y*h+E*u+T*v,r[14]=w*n+y*c+E*m+T*f,r[15]=w*o+y*l+E*x+T*p,r},translate(r,e,t){let i=t.x!==void 0?t.x:t[0],s=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];if(e===r)r[12]=e[0]*i+e[4]*s+e[8]*n+e[12],r[13]=e[1]*i+e[5]*s+e[9]*n+e[13],r[14]=e[2]*i+e[6]*s+e[10]*n+e[14],r[15]=e[3]*i+e[7]*s+e[11]*n+e[15];else{let o=e[0],a=e[1],h=e[2],c=e[3],l=e[4],d=e[5],u=e[6],m=e[7],x=e[8],g=e[9],v=e[10],f=e[11];r[0]=o,r[1]=a,r[2]=h,r[3]=c,r[4]=l,r[5]=d,r[6]=u,r[7]=m,r[8]=x,r[9]=g,r[10]=v,r[11]=f,r[12]=o*i+l*s+x*n+e[12],r[13]=a*i+d*s+g*n+e[13],r[14]=h*i+u*s+v*n+e[14],r[15]=c*i+m*s+f*n+e[15]}return r},scale(r,e,t){let i=t.x!==void 0?t.x:t[0],s=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];return r[0]=e[0]*i,r[1]=e[1]*i,r[2]=e[2]*i,r[3]=e[3]*i,r[4]=e[4]*s,r[5]=e[5]*s,r[6]=e[6]*s,r[7]=e[7]*s,r[8]=e[8]*n,r[9]=e[9]*n,r[10]=e[10]*n,r[11]=e[11]*n,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r},rotateX(r,e,t){let i=Math.sin(t),s=Math.cos(t),n=e[4],o=e[5],a=e[6],h=e[7],c=e[8],l=e[9],d=e[10],u=e[11];return e!==r&&(r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=e[3],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[4]=n*s+c*i,r[5]=o*s+l*i,r[6]=a*s+d*i,r[7]=h*s+u*i,r[8]=c*s-n*i,r[9]=l*s-o*i,r[10]=d*s-a*i,r[11]=u*s-h*i,r},rotateY(r,e,t){let i=Math.sin(t),s=Math.cos(t),n=e[0],o=e[1],a=e[2],h=e[3],c=e[8],l=e[9],d=e[10],u=e[11];return e!==r&&(r[4]=e[4],r[5]=e[5],r[6]=e[6],r[7]=e[7],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=n*s-c*i,r[1]=o*s-l*i,r[2]=a*s-d*i,r[3]=h*s-u*i,r[8]=n*i+c*s,r[9]=o*i+l*s,r[10]=a*i+d*s,r[11]=h*i+u*s,r},rotateZ(r,e,t){let i=Math.sin(t),s=Math.cos(t),n=e[0],o=e[1],a=e[2],h=e[3],c=e[4],l=e[5],d=e[6],u=e[7];return e!==r&&(r[8]=e[8],r[9]=e[9],r[10]=e[10],r[11]=e[11],r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15]),r[0]=n*s+c*i,r[1]=o*s+l*i,r[2]=a*s+d*i,r[3]=h*s+u*i,r[4]=c*s-n*i,r[5]=l*s-o*i,r[6]=d*s-a*i,r[7]=u*s-h*i,r},invert(r,e){let t=e[0],i=e[1],s=e[2],n=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],d=e[9],u=e[10],m=e[11],x=e[12],g=e[13],v=e[14],f=e[15],p=t*a-i*o,w=t*h-s*o,y=t*c-n*o,E=i*h-s*a,T=i*c-n*a,I=s*c-n*h,H=l*g-d*x,W=l*v-u*x,G=l*f-m*x,j=d*v-u*g,X=d*f-m*g,Y=u*f-m*v,F=p*Y-w*X+y*j+E*G-T*W+I*H;return F?(F=1/F,r[0]=(a*Y-h*X+c*j)*F,r[1]=(s*X-i*Y-n*j)*F,r[2]=(g*I-v*T+f*E)*F,r[3]=(u*T-d*I-m*E)*F,r[4]=(h*G-o*Y-c*W)*F,r[5]=(t*Y-s*G+n*W)*F,r[6]=(v*y-x*I-f*w)*F,r[7]=(l*I-u*y+m*w)*F,r[8]=(o*X-a*G+c*H)*F,r[9]=(i*G-t*X-n*H)*F,r[10]=(x*T-g*y+f*p)*F,r[11]=(d*y-l*T-m*p)*F,r[12]=(a*W-o*j-h*H)*F,r[13]=(t*j-i*W+s*H)*F,r[14]=(g*w-x*E-v*p)*F,r[15]=(l*E-d*w+u*p)*F,r):null},compose(r,e,t,i){let s=e.x!==void 0?e.x:e[0],n=e.y!==void 0?e.y:e[1],o=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],h=t.y!==void 0?t.y:t[1],c=t.z!==void 0?t.z:t[2],l=i.x!==void 0?i.x:i[0],d=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],m=Math.cos(h),x=Math.sin(h),g=Math.cos(a),v=Math.sin(a),f=Math.cos(c),p=Math.sin(c);return r[0]=(m*f-x*v*p)*l,r[1]=(m*p+x*v*f)*l,r[2]=-x*g*l,r[3]=0,r[4]=-g*p*d,r[5]=g*f*d,r[6]=v*d,r[7]=0,r[8]=(x*f+m*v*p)*u,r[9]=(x*p-m*v*f)*u,r[10]=m*g*u,r[11]=0,r[12]=s,r[13]=n,r[14]=o,r[15]=1,r}};class Be{constructor(){this.position=new oe(0,0,0),this.rotation=new oe(0,0,0),this.scale=new oe(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),_.identity(this.localMatrix),_.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e)}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const i=this.children.length-1;t!==i&&(this.children[t]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(_.identity(this.localMatrix),_.translate(this.localMatrix,this.localMatrix,this.position),_.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),_.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),_.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),_.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?_.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}}class te{constructor(e,t,i=null,s="GameObject"){this.name=s,this.active=!0,this.transform=new Be,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const s=i||this.material;this.renderer&&s&&this.renderer.draw(this,e,t,s)}}class de extends te{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,_.identity(this.projectionMatrix),_.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,s){this.fov=e,this.aspect=t,this.near=i,this.far=s,this.orthographic=!1;const n=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=n/t,o[5]=n,o[10]=(s+i)/(i-s),o[11]=-1,o[14]=2*s*i/(i-s)}setOrthographic(e,t,i,s,n,o){this.near=n,this.far=o,this.orthographic=!0,this.orthoSize=(s-i)/2;const a=this.projectionMatrix,h=1/(e-t),c=1/(i-s),l=1/(n-o);a.fill(0),a[0]=-2*h,a[5]=-2*c,a[10]=2*l,a[12]=(e+t)*h,a[13]=(s+i)*c,a[14]=(o+n)*l,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),_.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const i=this.viewMatrix,s=this.projectionMatrix;e.transform.updateWorldMatrix();const n=e.transform.worldMatrix,o=n[12],a=n[13],h=n[14],c=1,l=i[0]*o+i[4]*a+i[8]*h+i[12]*c,d=i[1]*o+i[5]*a+i[9]*h+i[13]*c,u=i[2]*o+i[6]*a+i[10]*h+i[14]*c,m=i[3]*o+i[7]*a+i[11]*h+i[15]*c,x=s[0]*l+s[4]*d+s[8]*u+s[12]*m,g=s[1]*l+s[5]*d+s[9]*u+s[13]*m;s[2]*l+s[6]*d+s[10]*u+s[14]*m;const v=s[3]*l+s[7]*d+s[11]*u+s[15]*m;if(v===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const f=x/v,p=g/v,w=(f+1)*.5,y=(p+1)*.5;return t?(t[0]=w,t[1]=y):t=[w,y],t}}class k{constructor(e,t,i){this.gl=e;const s=this.loadShader(e.VERTEX_SHADER,t),n=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,s),e.attachShader(this.program,n),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={}}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const s=this.gl,n=this.getUniformLocation(e);if(n){if(i){i==="1i"?s.uniform1i(n,t):i==="1f"?s.uniform1f(n,t):i==="2fv"?s.uniform2fv(n,t):i==="3fv"?s.uniform3fv(n,t):i==="4fv"?s.uniform4fv(n,t):i==="Matrix4fv"&&s.uniformMatrix4fv(n,!1,t);return}if(typeof t=="number")s.uniform1f(n,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:s.uniform2fv(n,t);break;case 3:s.uniform3fv(n,t);break;case 4:s.uniform4fv(n,t);break;case 16:s.uniformMatrix4fv(n,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;Array.isArray(t)&&(i=t.join(`
`));const s=this.gl.createShader(e);return this.gl.shaderSource(s,i),this.gl.compileShader(s),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)?s:(console.error("Shader compile error:",this.gl.getShaderInfoLog(s)),this.gl.deleteShader(s),null)}}class Te{constructor(e,t,i,s,n=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=s,this.indices=n,this.count=n?n.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const s=e.getAttribLocation("aTexCoord");s!==-1&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const s=e.getAttribLocation("aNormal");s!==-1&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class $e{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new Te(e,t,i,s)}draw(e,t,i=void 0,s=null){const n=s||e.material;if(!n||!n.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const h=n.shader;h.use(),a.bind(h),h.setUniform("uProjectionMatrix",t.projectionMatrix),h.setUniform("uViewMatrix",t.viewMatrix),h.setUniform("uModelMatrix",e.transform.worldMatrix);for(const u in n.uniforms){const m=n.uniforms[u];let x=m.value,g=m.type;(x instanceof WebGLTexture||g==="1i"&&x&&typeof x=="object")&&o.bindTexture(o.TEXTURE_2D,x),h.setUniform(u,x,g)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const c=performance.now();a.draw();const d=performance.now()-c;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:d,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class z{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,s){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const n=this.uniforms[e].value;n[0]=t,n[1]=i,n[2]=s}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,s])}}setVec4(e,t,i,s,n){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=i,o[2]=s,o[3]=n}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,s,n])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}function Ue(r,e,t){var n;const i={RGBA:{8:{internalFormat:r.RGBA8,glFormat:r.RGBA,glType:r.UNSIGNED_BYTE},"16f":{internalFormat:r.RGBA16F,glFormat:r.RGBA,glType:r.HALF_FLOAT},"32f":{internalFormat:r.RGBA32F,glFormat:r.RGBA,glType:r.FLOAT}},RGB:{8:{internalFormat:r.RGB8,glFormat:r.RGB,glType:r.UNSIGNED_BYTE},"16f":{internalFormat:r.RGB16F,glFormat:r.RGB,glType:r.HALF_FLOAT},"32f":{internalFormat:r.RGB32F,glFormat:r.RGB,glType:r.FLOAT}},RG:{8:{internalFormat:r.RG8,glFormat:r.RG,glType:r.UNSIGNED_BYTE},"16f":{internalFormat:r.RG16F,glFormat:r.RG,glType:r.HALF_FLOAT},"32f":{internalFormat:r.RG32F,glFormat:r.RG,glType:r.FLOAT}},R:{8:{internalFormat:r.R8,glFormat:r.RED,glType:r.UNSIGNED_BYTE},"16f":{internalFormat:r.R16F,glFormat:r.RED,glType:r.HALF_FLOAT},"32f":{internalFormat:r.R32F,glFormat:r.RED,glType:r.FLOAT}}},s=(n=i[e])==null?void 0:n[t];return s||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),i.RGBA[8])}class ie{constructor(e,t,i,s={}){this.gl=e,this.width=t,this.height=i,this.format=s.format??"RGBA",this.precision=s.precision??"8",this.hasDepth=s.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:n,glFormat:o,glType:a}=Ue(e,this.format,this.precision);this._internalFormat=n,this._glFormat=o,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,n,t,i,0,o,a,null);const h=s.minFilter??e.LINEAR,c=s.magFilter??e.LINEAR,l=s.wrapS??e.CLAMP_TO_EDGE,d=s.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const i=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&i.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,i),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*i,this.hasDepth&&(e+=this.width*this.height*2),e}}class ke{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const D=new ke;class Fe{static async load(e,t){const s=await(await fetch(t)).text(),n=this.parse(e,s);return new Te(e,n.positions,n.uvs,n.normals)}static parse(e,t){const i=[],s=[],n=[],o=[],a=[],h=[],c=t.split(`
`);for(let l of c){if(l=l.trim(),l.startsWith("#")||l==="")continue;const d=l.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")s.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")n.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const m=d.slice(1);for(let x=1;x<m.length-1;x++){const g=m[0],v=m[x],f=m[x+1];this.processVertex(g,i,s,n,o,a,h),this.processVertex(v,i,s,n,o,a,h),this.processVertex(f,i,s,n,o,a,h)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(h),vertexCount:o.length/3}}static processVertex(e,t,i,s,n,o,a){const h=e.split("/"),c=parseInt(h[0])-1,l=h[1]?parseInt(h[1])-1:-1,d=h[2]?parseInt(h[2])-1:-1,u=t[c];if(n.push(u[0],u[1],u[2]),l>=0){const m=i[l];o.push(m[0],m[1])}else o.push(0,0);if(d>=0){const m=s[d];a.push(m[0],m[1],m[2])}else a.push(0,1,0)}}class Oe{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let i=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(i=i*1.33),Math.round(i)}}class Ve{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const s of this.passes)s.enabled&&s.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class ce{constructor(e,t,i,s="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=s,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}const ze=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,Ne=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class _e extends ce{constructor(e,t,i,s=null,n=0,o="ObjectPass"){super(e,t,i,o),this.renderTarget=s,this.renderMode=n,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new k(e,ze,Ne);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const s=this.camera||i;this.camera&&s.updateView();const n=performance.now();if(e.resetDrawCalls(),this.renderTarget){const a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,this.renderTarget.framebuffer);const h=this.clearDepth?this._attachmentsWithDepth:[a.COLOR_ATTACHMENT0];a.invalidateFramebuffer(a.FRAMEBUFFER,h),a.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);if(this.clearColor){this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);let a=this.gl.COLOR_BUFFER_BIT;this.clearDepth&&(a|=this.gl.DEPTH_BUFFER_BIT),this.gl.clear(a)}if(t&&Array.isArray(t))for(const a of t)a.material.setUniform("uRenderMode",this.renderMode,"1i"),a.render(s,this.renderTarget);else t&&t.render&&t.render(s,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const o=e.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-n}}class Ae{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const s=this.gl;let n,o=t;if(e.uniforms&&e.shader){n=e.shader,o={};for(const l in e.uniforms)o[l]=e.uniforms[l].value;t&&(t.bind||t===null)&&(i=t)}else n=e;i?i.bind():(s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,s.canvas.width,s.canvas.height)),n.use(),s.bindBuffer(s.ARRAY_BUFFER,this.buffer);const a=n.getAttribLocation("aVertexPosition");a!==-1&&(s.enableVertexAttribArray(a),s.vertexAttribPointer(a,2,s.FLOAT,!1,16,0));const h=n.getAttribLocation("aTexCoord");h!==-1&&(s.enableVertexAttribArray(h),s.vertexAttribPointer(h,2,s.FLOAT,!1,16,8));let c=0;for(const l in o){const d=o[l];d instanceof WebGLTexture?(s.activeTexture(s.TEXTURE0+c),s.bindTexture(s.TEXTURE_2D,d),n.setUniform(l,c,"1i"),c++):n.setUniform(l,d)}s.drawArrays(s.TRIANGLE_STRIP,0,4);for(let l=0;l<c;l++)s.activeTexture(s.TEXTURE0+l),s.bindTexture(s.TEXTURE_2D,null)}}class Ie extends ce{constructor(e,t,i,s){super(e,t,i,"ViewportComposition"),this.material=s,this.fullScreenQuad=new Ae(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const s of this.viewports){const n=Math.floor(s.x*this.width),o=Math.floor(s.y*this.height),a=Math.floor(s.w*this.width),h=Math.floor(s.h*this.height);this.gl.viewport(n,o,a,h);let c=this.buffers.Final;const l=s.pass;this.buffers[l]&&(c=this.buffers[l]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class ue extends ce{constructor(e,t,i,s,n=null,o="ScreenPass"){super(e,t,i,o),this.material=s,this.renderTarget=n,this.fullScreenQuad=new Ae(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,i])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const s=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const n=e.resetDrawCalls();this.drawCount=n.count,this.drawDetails=n.details,this.executionTime=performance.now()-s}}class He extends ue{constructor(e,t,i,s,n=null,o="Lighting Pass"){super(e,t,i,s,n,o),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){_.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),_.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),_.invert(this._invCamViewProj,this._camViewProj);const i=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}}class We extends ue{constructor(e,t,i,s,n=null,o="Skybox Pass"){super(e,t,i,s,n,o),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){_.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),_.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,s){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uBottomColor:s})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class Ge extends ue{constructor(e,t,i,s,n,o="PixelArt Pass"){super(e,t,i,s,n,o),this._resolutionBuffer=new Float32Array([t,i])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}class je{constructor(e=null){this.gameContext=e,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(t),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes.length=0}endFrame(){console.log(),this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(e,t){this.passHistory||(this.passHistory={}),this.passHistory[e]||(this.passHistory[e]=[]),this.passHistory[e].push(t),this.passHistory[e].length>300&&this.passHistory[e].shift()}recordDrawCall(e,t,i,s,n,o=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:n-s,vertices:o})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let e=0,t=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(n=>{n.drawCalls.forEach(o=>{e+=(o.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(n=>{if(n.renderTarget&&n.renderTarget.getMemorySize){const o=n.renderTarget.getMemorySize();t+=o}}),this.gameContext){if(this.gameContext.textures)for(const n in this.gameContext.textures){const o=this.gameContext.textures[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.textureCache)for(const n in this.gameContext.textureCache){const o=this.gameContext.textureCache[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const n in this.gameContext.assets.textures){const o=this.gameContext.assets.textures[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}}const s=e+t+i;return this.metrics.memory={vertices:e,renderTargets:t,textures:i,total:s},this.metrics.memory}}class Xe{static attach(e,t,i=null){const s=new je(i),n=e.execute.bind(e);e.execute=function(a,h,c){s.enabled&&s.beginFrame();const l=e.passes||[];for(let d=0;d<l.length;d++){const u=l[d];if(!u.__profilerInstrumented){const m=u.execute.bind(u);u.execute=function(x,g,v){const f=u.name||"Unnamed Pass";s.enabled&&(s.beginPass(f),x.currentPassName=f,s.devToolsEnabled&&performance.mark(`PassStart-${f}`)),m(x,g,v),s.enabled&&(s.endPass(),x.currentPassName=null,s.devToolsEnabled&&(performance.mark(`PassEnd-${f}`),performance.measure(`Pass: ${f}`,`PassStart-${f}`,`PassEnd-${f}`),performance.clearMarks(`PassStart-${f}`),performance.clearMarks(`PassEnd-${f}`)))},u.__profilerInstrumented=!0}}n(a,h,c),s.enabled&&(s.endFrame(),s.updateMemoryMetrics())};const o=t.draw.bind(t);return t.draw=function(a,h,c,l){if(!s.enabled){o(a,h,c,l);return}const d=a?a.name:"Unknown",u=l?l.name:"Unknown";s.devToolsEnabled&&performance.mark(`DrawStart-${d}`);const m=performance.now();o(a,h,c,l);const x=performance.now();s.devToolsEnabled&&(performance.mark(`DrawEnd-${d}`),performance.measure(`Draw: ${d} [${u}]`,`DrawStart-${d}`,`DrawEnd-${d}`),performance.clearMarks(`DrawStart-${d}`),performance.clearMarks(`DrawEnd-${d}`));const g=a&&a.mesh?a.mesh.count:6;s.recordDrawCall(d,u,0,m,x,g)},s.disable(),s}}class Ye{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const s=t.style.display==="none";t.style.display=s?"flex":"none",i.style.background=s?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(s=>{const n=document.createElement("option");n.value=s,n.text=s,i.appendChild(n)}),i.onchange=s=>t(s.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,s,n){const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${s}px`,height:`${n}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const h=document.createElement("span");h.innerHTML="×",Object.assign(h.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),h.onclick=()=>{o.style.display="none"},h.onmouseover=()=>{h.style.color="#fff"},h.onmouseout=()=>{h.style.color="#888"},a.appendChild(h);const c=document.createElement("div");c.classList.add("window-content"),Object.assign(c.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const l=document.createElement("div");return Object.assign(l.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),o.appendChild(a),o.appendChild(c),o.appendChild(l),this.container.appendChild(o),this.addDragLogic(o,a),this.addResizeLogic(o,l),{content:c,window:o}}addResizeLogic(e,t){let i=!1,s,n,o,a;t.addEventListener("mousedown",l=>{l.preventDefault(),l.stopPropagation(),i=!0,o=l.clientX,a=l.clientY,s=e.offsetWidth,n=e.offsetHeight,document.addEventListener("mousemove",h),document.addEventListener("mouseup",c)});const h=l=>{if(!i)return;const d=s+(l.clientX-o),u=n+(l.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},c=()=>{i=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",c)}}addDragLogic(e,t){let i=!1,s,n,o,a;t.addEventListener("mousedown",l=>{l.target.tagName!=="BUTTON"&&(i=!0,s=l.clientX,n=l.clientY,o=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",h),document.addEventListener("mouseup",c),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const h=l=>{if(!i)return;let d=o+(l.clientX-s),u=a+(l.clientY-n);const m=20;d<m&&(d=0),u<m&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<m&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<m&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},c=()=>{i=!1,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",c)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class A{constructor(e,t,i,s,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),A.nextNameID=A.nextNameID||0,this.$name.id=`lil-gui-name-${++A.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class qe extends A{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function he(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Ze={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:he,toHexString:he},Z={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Ke={isPrimitive:!1,match:r=>Array.isArray(r)||ArrayBuffer.isView(r),fromHexString(r,e,t=1){const i=Z.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([r,e,t],i=1){i=255/i;const s=r*i<<16^e*i<<8^t*i<<0;return Z.toHexString(s)}},Qe={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const i=Z.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r,g:e,b:t},i=1){i=255/i;const s=r*i<<16^e*i<<8^t*i<<0;return Z.toHexString(s)}},Je=[Ze,Z,Ke,Qe];function et(r){return Je.find(e=>e.match(r))}class tt extends A{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=et(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=he(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ae extends A{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class it extends A{constructor(e,t,i,s,n,o){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(n);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},i=p=>{const w=parseFloat(this.$input.value);isNaN(w)||(this._snapClampSetValue(w+p),this.$input.value=this.getValue())},s=p=>{p.key==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p)*-1))},n=p=>{this._inputFocused&&(p.preventDefault(),i(this._step*this._normalizeMouseWheel(p)))};let o=!1,a,h,c,l,d;const u=5,m=p=>{a=p.clientX,h=c=p.clientY,o=!0,l=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",g)},x=p=>{if(o){const w=p.clientX-a,y=p.clientY-h;Math.abs(y)>u?(p.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(w)>u&&g()}if(!o){const w=p.clientY-c;d-=w*this._step*this._arrowKeyMultiplier(p),l+d>this._max?d=this._max-l:l+d<this._min&&(d=this._min-l),this._snapClampSetValue(l+d)}c=p.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",g)},v=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",v),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(f,p,w,y,E)=>(f-p)/(w-p)*(E-y)+y,t=f=>{const p=this.$slider.getBoundingClientRect();let w=e(f,p.left,p.right,this._min,this._max);this._snapClampSetValue(w)},i=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",n)},s=f=>{t(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",n)};let o=!1,a,h;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},l=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,h=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=f=>{if(o){const p=f.touches[0].clientX-a,w=f.touches[0].clientY-h;Math.abs(p)>Math.abs(w)?c(f):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else f.preventDefault(),t(f.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),x=400;let g;const v=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const w=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(m,x)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",v,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class st extends A{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class rt extends A{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var nt=`.lil-gui {
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
}`;function ot(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Ce=!1;class B{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:n="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:h=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),h&&this.domElement.classList.add("lil-allow-touch-styles"),!Ce&&a&&(ot(nt),Ce=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,n){if(Object(i)===i)return new st(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new it(this,e,t,i,s,n);case"boolean":return new qe(this,e,t);case"string":return new rt(this,e,t);case"function":return new ae(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new tt(this,e,t,i)}addFolder(e){const t=new B({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ae||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ae)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class at{constructor(e,t){this.editor=e,this.gui=new B({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(n=>n.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera"),(this.editor.game.scene||[]).forEach((n,o)=>{const a=n.name||`Object ${o}`;this.gui.add({select:()=>this.editor.selectObject(n)},"select").name(a)})}}class lt{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(n=>n.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject",s=this.gui.addFolder("Object Settings");if(s.add(t,"name").name("Name").listen(),typeof t.active<"u"&&s.add(t,"active").name("Active").listen(),t.transform){const n=t.transform,o=this.gui.addFolder(`Transform: ${i}`),a=o.addFolder("Position");a.add(n.position,"x").step(.1).listen().name("X"),a.add(n.position,"y").step(.1).listen().name("Y"),a.add(n.position,"z").step(.1).listen().name("Z");const h=o.addFolder("Rotation");h.add(n.rotation,"x").step(.1).listen().name("X"),h.add(n.rotation,"y").step(.1).listen().name("Y"),h.add(n.rotation,"z").step(.1).listen().name("Z");const c=o.addFolder("Scale");c.add(n.scale,"x").step(.1).listen().name("X"),c.add(n.scale,"y").step(.1).listen().name("Y"),c.add(n.scale,"z").step(.1).listen().name("Z")}if(t instanceof de){const n=this.gui.addFolder("Camera Settings");n.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const o=n.addFolder("Perspective");o.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),n.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),n.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),n.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),o.open()}if(t.material){const n=this.gui.addFolder("Material");n.add(t.material,"name").name("Material Name").disable().listen(),n.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}}}class ht{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(s=>s.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const s in t){const n=t[s];i.add({select:()=>this.inspect(n)},"select").name(s)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(s=>s.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const s=e.uniforms[i],n=s.value;if(s.type,Array.isArray(n)||n instanceof Float32Array)if(i.toLowerCase().includes("color")&&(n.length===3||n.length===4))t.addColor(s,"value").name(i).listen();else{const a=t.addFolder(i),h=["x","y","z","w"];for(let c=0;c<n.length;c++){const l={get val(){return n[c]},set val(d){n[c]=d}};a.add(l,"val").step(.01).name(h[c]||`[${c}]`).listen()}}else if(typeof n=="number"){const o={get val(){return s.value},set val(h){s.value=h}};let a=t.add(o,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else n instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class dt{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,s)=>{const n=this.gui.addFolder(`${s}: ${i.name||"Pass"}`);if(n.add(i,"enabled").name("Active"),n.add(i,"drawCount").name("Draw Calls").disable().listen(),n.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const h={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(c){i.clearColor[0]=c[0],i.clearColor[1]=c[1],i.clearColor[2]=c[2]}};n.addColor(h,"color").name("Clear Color")}i.renderTarget?n.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():n.add({info:"Screen"},"info").name("Target").disable(),i.material&&n.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const o={show:!1},a=n.addFolder("Performance Details");a.add(o,"show").name("List Draw Calls").onChange(h=>{h?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,s)=>{const n=e.addFolder(`Draw ${s}: ${i.object}`);n.add(i,"material").name("Material").disable(),n.add(i,"shader").name("Shader").disable(),n.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class ct{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!0,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const e=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(t=>{e&&e.profiler&&(t?e.profiler.enable():e.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(t=>{e&&e.profiler&&(e.profiler.devToolsEnabled=t)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const e=this.frameTimeCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled||!t.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,s=this.frameTimeCanvas.height;e.clearRect(0,0,i,s);const n=Math.min(t.frameTimeHistory.length,this.stats.avgFrames);if(n<2)return;const o=[];for(let l=t.frameTimeHistory.length-n;l<t.frameTimeHistory.length;l++)o.push(t.frameTimeHistory[l]);let a=0,h=100;const c=h-a;e.beginPath(),e.strokeStyle="#4363d8",e.lineWidth=1.5;for(let l=0;l<o.length;l++){const d=l/(o.length-1)*i,u=s-(o[l]-a)/c*s*.8-s*.1;l===0?e.moveTo(d,u):e.lineTo(d,u)}e.stroke(),e.fillStyle="#fff",e.font="10px monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`Max: ${h.toFixed(1)}ms`,5,5),e.textBaseline="bottom",e.fillText(`Min: ${a.toFixed(1)}ms`,5,s-5),e.textAlign="right",e.textBaseline="top",e.fillText(`Delta time: ${o[n-1].toFixed(2)}`,i-5,5)}drawGraph(){const e=this.graphCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,s=this.graphCanvas.height;if(e.clearRect(0,0,i,s),!t.metrics||!t.metrics.passes||t.metrics.passes.length===0)return;const n=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let o=[],a=0;if(this.stats.pieMode==="Average"){let g=0;const v=this.stats.avgFrames;for(const f in t.passHistory){const p=t.passHistory[f];if(p.length>0){let w=0,y=Math.min(p.length,v);for(let T=p.length-y;T<p.length;T++)w+=p[T];const E=w/y;o.push({name:f,duration:E,color:n[g%n.length]}),a+=E}g++}}else t.metrics.passes.forEach((g,v)=>{o.push({name:g.name,duration:g.duration,color:n[v%n.length]}),a+=g.duration});if(a<=0)return;const h=i*.3,c=s/2,l=Math.max(0,Math.min(h,c)-10);if(l<=0)return;let d=-.5*Math.PI;o.forEach(g=>{if(g.duration<=0)return;const v=g.duration/a*2*Math.PI;if(e.beginPath(),e.moveTo(h,c),e.arc(h,c,l,d,d+v),e.closePath(),e.fillStyle=g.color,e.fill(),v>.3){const f=d+v/2,p=h+Math.cos(f)*(l*.6),w=c+Math.sin(f)*(l*.6);e.fillStyle="#000",e.font="10px bold sans-serif",e.textAlign="center",e.textBaseline="middle";const y=g.name.replace("Pass","").substring(0,6);e.fillText(y,p,w)}d+=v});const u=h+l+20;let m=20;const x=16;e.textAlign="left",e.font="10px monospace",o.forEach(g=>{e.fillStyle=g.color,e.fillRect(u,m-8,10,10),e.fillStyle="#fff";const v=(g.duration/a*100).toFixed(1);e.fillText(`${g.name.substring(0,10)}: ${g.duration.toFixed(2)}ms (${v}%)`,u+15,m),m+=x})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const s=this.passesFolder.addFolder(i.name||"Pass");s.add(i,"drawCount").name("Draw Calls").disable().listen(),s.add(i,"executionTime").name("Perf (ms)").disable().listen(),s.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;const t=e.profiler;if(!t)return;if(this.stats.fps=Math.round(t.fps||0),t.fpsHistory&&t.fpsHistory.length>0){let d=0,u=Math.min(t.fpsHistory.length,this.stats.avgFrames),m=[];for(let v=t.fpsHistory.length-u;v<t.fpsHistory.length;v++)d+=t.fpsHistory[v],m.push(t.fpsHistory[v]);this.stats.avgFps=Math.round(d/u),m.sort((v,f)=>v-f);let x=Math.floor(m.length*.01),g=Math.floor(m.length*.99);g>=m.length&&(g=m.length-1),this.stats.fps1Low=Math.round(m[x]||this.stats.fps),this.stats.fps1High=Math.round(m[g]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(t.metrics.cpuTime||0).toFixed(2);let i=0,s=0,n=0;t.metrics&&t.metrics.passes&&(this.stats.totalPasses=t.metrics.passes.length,t.metrics.passes.forEach(d=>{i+=d.drawCalls.length,s+=d.duration,d.drawCalls.forEach(u=>n+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=n,this.stats.gpuTotal=s.toFixed(3);const o=t.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},a=(o.vertices/(1024*1024)).toFixed(2),h=(o.renderTargets/(1024*1024)).toFixed(2),c=(o.textures/(1024*1024)).toFixed(2),l=(o.total/(1024*1024)).toFixed(2);this.stats.approxMemory=l+" MB",this.stats.memoryVertices=a+" MB",this.stats.memoryRenderTargets=h+" MB",this.stats.memoryTextures=c+" MB",this.showPassDetails}}class ut{constructor(e,t){this.editor=e,this.container=t,this.gui=new B({container:t,title:"Info & Credits",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const e={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(e,"openGithub").name("Made by Tanpi");const t=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};t.add(i,"move").name("Movement").disable(),t.add(i,"look").name("Camera").disable(),t.add(i,"hideUi").name("Ui").disable();const s=this.gui.addFolder("Asset Credits"),n={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};s.add(n,"openKenney").name("Kenney (kenney.nl)"),s.add(n,"openWill").name("will.nsq (Sketchfab)")}}class ft{constructor(e){this.game=e,this.wm=new Ye,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new at(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new lt(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new ht(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const s=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new dt(this,s.content),this.wm.addNavItem("PASSES",s.window),s.window.style.display="none";const n=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new ct(this,n.content),this.wm.addNavItem("PROFILER",n.window);const o=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new ut(this,o.content),this.wm.addNavItem("INFO",o.window),o.window.style.display="none";let a=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(a=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(a,h=>{this.game.setViewports(h)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class mt{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const s=Math.PI/2-.01;this.rotation.x=Math.max(-s,Math.min(s,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*e,i=this.camera.transform,s=Math.sin(i.rotation.y),n=Math.cos(i.rotation.y),o=-s,a=-n,h=n,c=-s;let l=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(l-=1),this.keys.d&&(l+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),l!==0||d!==0){const m=Math.sqrt(l*l+d*d);l/=m,d/=m}i.position.x+=(o*d+h*l)*t,i.position.z+=(a*d+c*l)*t,i.position.y+=u*t}}const fe=`precision highp float;\r
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
`,pt=`precision highp float;\r
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
`,gt=`precision highp float;\r
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
`,vt=`precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
\r
// Shadows & Transform\r
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
void main() {\r
    vec4 sceneColor = texture2D(uSceneTexture, vUv);\r
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;\r
    float depthVal = texture2D(uNormalTexture, vUv).a;\r
    \r
    float roughness = texture2D(uSceneTexture, vUv).a;\r
    \r
    vec3 worldPos = getWorldPosition(vUv, depthVal);\r
    vec3 N = normalize(normalOrig * 2.0 - 1.0);\r
    vec3 L = normalize(uLightDir);\r
    vec3 V = normalize(uCameraPos - worldPos);\r
    vec3 H = normalize(L + V);\r
\r
    // --- TOON DIFFUSE (Preserved) ---\r
    float d = dot(N, L); \r
    float intensity = (d > 0.6) ? 1.0 : (d > 0.1 ? 0.7 : 0.2);\r
\r
    // --- 2. CONTROLLED TOON SPECULAR ---\r
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
    vec3 finalSpecular = uLightColor * toonSpecular * uSpecularStrength;\r
\r
    // --- 3. FINAL COMPOSITION ---\r
    vec3 toonDiffuse = mix(uShadowColor, uLightColor, intensity);\r
\r
    vec3 radiance = (uAmbient * uLightColor + toonDiffuse) * sceneColor.rgb + finalSpecular;\r
\r
    gl_FragColor = vec4(radiance, sceneColor.a);\r
}`,xt=`precision highp float;\r
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
uniform float uCloudScale;\r
uniform float uCloudThreshold;\r
uniform float uCloudDensity;\r
uniform float uCloudCoverage;\r
uniform float uCloudSpeed;\r
uniform vec3  uCloudMainColor;\r
uniform vec3  uCloudShadeColor;\r
\r
// Cheap hash - single dot product instead of two\r
float hash(vec2 p) {\r
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);\r
}\r
\r
// Cheap value noise - replaces Worley entirely\r
// Worley needs 9 cell lookups, value noise needs 4\r
float valueNoise(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    \r
    // Smooth interpolation\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    \r
    // Only 4 lookups instead of 9\r
    float a = hash(i);\r
    float b = hash(i + vec2(1.0, 0.0));\r
    float c = hash(i + vec2(0.0, 1.0));\r
    float d = hash(i + vec2(1.0, 1.0));\r
    \r
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);\r
}\r
\r
// 2 octaves only instead of 3 Worley calls\r
float getCloudNoise(vec2 uv, float t) {\r
    float v = valueNoise(uv + t * 0.02) * 0.65\r
            + valueNoise(uv * 2.1 + t * 0.04) * 0.35;\r
    return v;\r
}\r
\r
void main() {\r
    float depth = texture2D(uDepthTexture, vTexCoord).a;\r
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
    float t = uTime * uCloudSpeed;\r
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale + vec2(t, t * 0.1);\r
\r
    // Single noise sample instead of 3\r
    float density = getCloudNoise(cloudUV, t);\r
    float mask = smoothstep(1.0 - uCloudCoverage, 1.0 - uCloudCoverage + 0.2, density);\r
\r
    // Sun occlusion\r
    float sunOcclusion = smoothstep(0.4, 0.8, density);\r
    float sunVisibility = 1.0 - (sunOcclusion * uCloudDensity);\r
\r
    // Cheap SSS approximation - no second noise sample\r
    float sss = pow(sunDot, 8.0) * (1.0 - density) * 2.0;\r
\r
    // Fake shadow using density alone - removes second getCloudNoise call\r
    float shadow = 1.0 - density * 0.5;\r
\r
    // Color mixing - unchanged, same look\r
    vec3 cloudBase = mix(uCloudShadeColor, uCloudMainColor, shadow);\r
    vec3 cloudWithSSS = mix(cloudBase, uSunColor, sss * mask);\r
\r
    float alpha = mask * uCloudDensity * smoothstep(0.0, 0.1, dir.y);\r
    vec3 finalCloud = mix(skyColor, cloudWithSSS, alpha);\r
\r
    float sunDisk = smoothstep(0.998, 0.999, sunDot) * sunVisibility;\r
    vec3 finalColor = finalCloud + (uSunColor * sunDisk * 2.0);\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,wt=`precision highp float;\r
\r
varying vec2 vTexCoord;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uGbufferTexture;\r
\r
uniform float uPixelSize;\r
uniform float uColorLevels;\r
uniform vec2 uResolution;\r
\r
// New Uniform for Edge Control\r
uniform float uEdgeWidth; // Try values between 1.0 and 3.0\r
\r
uniform float uDepthThreshold;\r
uniform float uNormalThreshold;\r
\r
uniform float uSilhouetteDarkening;\r
uniform float uCreaseDarkening;\r
\r
void main() {\r
    // 1. PIXELATION\r
    vec2 size = uResolution / uPixelSize;\r
    vec2 uv = floor(vTexCoord * size) / size;\r
    vec2 texelSize = 1.0 / size;\r
\r
    // 2. SAMPLING\r
    float depthCenter = texture2D(uGbufferTexture, uv).a;\r
    vec3 normalCenter = texture2D(uGbufferTexture, uv).rgb * 2.0 - 1.0;\r
    vec4 sceneColor = texture2D(uSceneTexture, uv);\r
\r
    vec3 quantizedColor = floor(sceneColor.rgb * uColorLevels) / uColorLevels;\r
\r
    float depthEdge = 0.0;\r
    float normalEdge = 0.0;\r
\r
    // 3. EDGE DETECTION LOOP\r
    // We multiply the offset by uEdgeWidth to expand the search radius\r
    vec2 offsets[4];\r
    offsets[0] = vec2(1.0, 0.0) * uEdgeWidth;\r
    offsets[1] = vec2(-1.0, 0.0) * uEdgeWidth;\r
    offsets[2] = vec2(0.0, 1.0) * uEdgeWidth;\r
    offsets[3] = vec2(0.0, -1.0) * uEdgeWidth;\r
\r
    for(int i = 0; i < 4; i++) {\r
        vec2 neighborUV = uv + offsets[i] * texelSize;\r
        \r
        float depthNeighbor = texture2D(uGbufferTexture, neighborUV).a;\r
        // Sensitivity usually needs to decrease as width increases\r
        depthEdge = max(depthEdge, abs(depthCenter - depthNeighbor));\r
\r
        vec3 normalNeighbor = texture2D(uGbufferTexture, neighborUV).rgb * 2.0 - 1.0;\r
        normalEdge = max(normalEdge, (1.0 - dot(normalCenter, normalNeighbor)));\r
    }\r
\r
    // 4. ADAPTIVE COLOR LOGIC\r
    vec3 finalColor = quantizedColor;\r
\r
    if (normalEdge > uNormalThreshold) {\r
        finalColor = quantizedColor * uCreaseDarkening;\r
    }\r
\r
    if (depthEdge > (uDepthThreshold / uEdgeWidth)) {\r
        finalColor = quantizedColor * uSilhouetteDarkening;\r
    }\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,bt=`precision highp float;\r
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
}`,yt=`#extension GL_EXT_frag_depth : enable\r
\r
precision highp float;\r
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
}`,Pe=`precision highp float;\r
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
`,Re=`precision highp float;\r
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
    // gl_FragColor = vec4(1.0);\r
\r
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
        gl_FragColor = vec4(color.rgb, uRoughness);\r
    }\r
    else if (uRenderMode == 1) // Normal + depth\r
    {\r
        float near = 0.1; \r
        float far = 1000.0; \r
    \r
        float z = gl_FragCoord.z * 2.0 - 1.0; \r
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); \r
        \r
        linearDepth /= far; \r
\r
        gl_FragColor = vec4(normal * 0.5 + 0.5, linearDepth);\r
    } \r
    else\r
    {\r
        gl_FragColor = vec4(vPosition, 1.0);\r
    }\r
    // gl_FragDepth = 0.0;\r
}`,me=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),C=document.getElementById("glcanvas"),b=C.getContext("webgl2")||C.getContext("experimental-webgl");b||alert("Unable to initialize WebGL.");b.enable(b.DEPTH_TEST);b.depthFunc(b.LEQUAL);b.enable(b.CULL_FACE);b.cullFace(b.BACK);b.frontFace(b.CCW);b.getExtension("EXT_color_buffer_float");let se=new ie(b,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:b.NEAREST,magFilter:b.NEAREST}),N=new ie(b,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:b.NEAREST,magFilter:b.NEAREST}),re=new ie(b,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:b.NEAREST,magFilter:b.NEAREST}),J=new ie(b,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:b.NEAREST,magFilter:b.NEAREST});const Ct=new k(b,Pe,Re),Et=new k(b,fe,pt),Tt=new k(b,[bt,Pe],[yt,Re]),Ft=new k(b,gt,vt),_t=new k(b,fe,xt),At=new k(b,fe,wt),Se=new Oe(b,"./Assets/Textures/colormap.png"),pe=new z(Ct,"Ship Mat"),K=new z(Tt,"Water"),O=new z(Ft,"PPL Lighting"),L=new z(_t,"Skybox"),ge=new z(At,"PixelArt"),Pt=new z(Et,"Screen");pe.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Se.texture,uRoughness:1});ge.setUniforms({uPixelSize:4,uEdgeWidth:.5,uColorLevels:128,uDepthThreshold:.025,uNormalThreshold:.1,uSilhouetteDarkening:.2,uCreaseDarkening:.7});O.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03});L.setUniforms({uTopColor:[.063,.188,.82],uBottomColor:[1,.51,.32],uSunColor:[1,.33,.1],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.2,uCloudCoverage:.76,uCloudSpeed:.02,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const Rt={uWind:[1,0],uSpeed:.5,udisplacement:1.5,uScale:.2,uColor1:[.094,.271,.494],uColor2:[.196,.404,.624],uColor3:[.8,.8,1],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[1,-4.66,.1,20.57],uColorBands:3,uRoughness:0};K.setUniforms(Rt);const St={Lighting:O,Skybox:L,PixelArt:ge,Water:K,Ship:pe},V=new $e(b),S=new de,ne=new de,Q=[],P=new Ve(b),ve=new _e(b,C.width,C.height,N,1,"GBuffer Pass");ve.clearColor=[.5,.5,1,1];ve.clearDepth=!0;P.addPass(ve);const xe=new _e(b,C.width,C.height,se,0,"Albedo Pass");xe.clearColor=[0,0,0,1];xe.clearDepth=!0;P.addPass(xe);const we=new He(b,C.width,C.height,O,J,"Lighting Pass");we.setInputBuffers(se.texture,N.texture);P.addPass(we);const be=new We(b,C.width,C.height,L,J,"Skybox Pass");be.setInputTexture(N.texture);P.addPass(be);const Me=new Ge(b,C.width,C.height,ge,re,"PixelArt Pass");Me.setInputBuffers(J.texture,N.texture);P.addPass(Me);const M=new Ie(b,C.width,C.height,Pt);M.setBuffer("Final",re.texture);M.setBuffer("Pixel",re.texture);M.setBuffer("Lit",J.texture);M.setBuffer("Albedo",se.texture);M.setBuffer("Normal",N.texture);we.lightCamera=ne;P.addPass(M);function De(){C.width=window.innerWidth*window.devicePixelRatio,C.height=window.innerHeight*window.devicePixelRatio,b.viewport(0,0,b.canvas.width,b.canvas.height),se.resize(C.width,C.height),N.resize(C.width,C.height),J.resize(C.width,C.height),re.resize(C.width,C.height),P.resize(C.width,C.height);const r=C.width/C.height;S.setPerspective(.8,r,.1,1e3)}window.addEventListener("resize",De);De();const Mt=C.width/C.height;S.setPerspective(.8,Mt,.1,1e3);S.transform.position.set(-16.2,1.8,-47);S.transform.rotation.set(0,me?3.24:3.22,0);Fe.load(b,"./Assets/3D/scene.obj").then(r=>{var e=new te(V,pe,r,"Scene");e.transform.position.set(-15,-6,10),e.transform.scale.set(1,1,1),Q.push(e)});Fe.load(b,"./Assets/3D/DetailedPlane.obj").then(r=>{if(me){var s=new te(V,K,r,"Water Floor ");s.transform.position.set(0*100,-6.5,0*100),s.transform.scale.set(50,50,50),Q.push(s)}else for(let n=-2;n<=2;n++)for(let o=-1;o<=3;o++){var s=new te(V,K,r,`Water Floor [${n},${o}]`);s.transform.position.set(n*100,-6.5,o*100),s.transform.scale.set(50,50,50),Q.push(s)}});const ye=[{x:0,y:0,w:1,h:1,pass:"Final"}];M.setViewports(ye);const q={gl:b,scene:Q,camera:S,lightCamera:ne,renderer:V,renderQueue:P,materials:St,viewportPass:M,textures:{ship:Se}};q.setViewports=r=>{ye[0].pass=r};let U=null;me||(new ft(q),U=Xe.attach(P,V,q),q.profiler=U);const Dt=new mt(S,C),$=[.5,.8,.2],ee=30;ne.setOrthographic(-ee,ee,-ee,ee,1,100);let le=0,Ee="";function Le(r){if(D.update(r),q.deltaTime=D.deltaTime,Dt.update(D.deltaTime),K.setUniforms({uTime:D.time}),L.setUniforms({uTime:D.time}),O.uniforms.uLightDir&&O.uniforms.uLightDir.value){const t=O.uniforms.uLightDir.value,i=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);i>.001?($[0]=t[0]/i,$[1]=t[1]/i,$[2]=t[2]/i):($[0]=t[0],$[1]=t[1],$[2]=t[2])}S.updateView(),M.setViewports(ye),S.updateProjection(),ne.updateProjection(),L.uniforms.uSunColor&&be.setLight($,L.uniforms.uSunColor.value,L.uniforms.uTopColor.value,L.uniforms.uBottomColor.value),P.execute(V,Q,S);const e=document.getElementById("hud");if(e&&(le++,le>=6)){le=0;const i=(D.unscaledDeltaTime>0?Math.round(1/D.unscaledDeltaTime):0).toString().padStart(3,"0");let s="";if(U&&U.fpsHistory&&U.fpsHistory.length>0){let o=0,a=U.fpsHistory.length,h=Math.min(a,60);for(let l=a-h;l<a;l++)o+=U.fpsHistory[l];s=` <br> Avg FPS: ${Math.round(o/h).toString().padStart(3,"0")}`}const n=(D.deltaTime*1e3).toFixed(2).padStart(6,"0");Ee=`FPS: ${i}${s}<br>Δ: ${n} ms`,e.innerHTML=Ee}requestAnimationFrame(Le)}requestAnimationFrame(Le);
