(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();class ee{constructor(e=0,t=0,r=0){this.data=new Float32Array([e,t,r]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,r){return this.data[0]=e,this.data[1]=t,this.data[2]=r,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],r=this.data[2];return Math.sqrt(e*e+t*t+r*r)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class A{static identity(e){return b.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,r){return b.multiply(e,t,r)}static translate(e,t,r){return b.translate(e,t,r)}static scale(e,t,r){return b.scale(e,t,r)}static rotateX(e,t,r){return b.rotateX(e,t,r)}static rotateY(e,t,r){return b.rotateY(e,t,r)}static rotateZ(e,t,r){return b.rotateZ(e,t,r)}static invert(e,t){return b.invert(e,t)}static compose(e,t,r,i){return b.compose(e,t,r,i)}}const b={identity(n){return n.fill(0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n},multiply(n,e,t){let r=e[0],i=e[1],s=e[2],o=e[3],a=e[4],h=e[5],c=e[6],l=e[7],f=e[8],u=e[9],m=e[10],p=e[11],w=e[12],g=e[13],E=e[14],y=e[15],x=t[0],T=t[1],C=t[2],F=t[3];return n[0]=x*r+T*a+C*f+F*w,n[1]=x*i+T*h+C*u+F*g,n[2]=x*s+T*c+C*m+F*E,n[3]=x*o+T*l+C*p+F*y,x=t[4],T=t[5],C=t[6],F=t[7],n[4]=x*r+T*a+C*f+F*w,n[5]=x*i+T*h+C*u+F*g,n[6]=x*s+T*c+C*m+F*E,n[7]=x*o+T*l+C*p+F*y,x=t[8],T=t[9],C=t[10],F=t[11],n[8]=x*r+T*a+C*f+F*w,n[9]=x*i+T*h+C*u+F*g,n[10]=x*s+T*c+C*m+F*E,n[11]=x*o+T*l+C*p+F*y,x=t[12],T=t[13],C=t[14],F=t[15],n[12]=x*r+T*a+C*f+F*w,n[13]=x*i+T*h+C*u+F*g,n[14]=x*s+T*c+C*m+F*E,n[15]=x*o+T*l+C*p+F*y,n},translate(n,e,t){let r=t.x!==void 0?t.x:t[0],i=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];if(e===n)n[12]=e[0]*r+e[4]*i+e[8]*s+e[12],n[13]=e[1]*r+e[5]*i+e[9]*s+e[13],n[14]=e[2]*r+e[6]*i+e[10]*s+e[14],n[15]=e[3]*r+e[7]*i+e[11]*s+e[15];else{let o=e[0],a=e[1],h=e[2],c=e[3],l=e[4],f=e[5],u=e[6],m=e[7],p=e[8],w=e[9],g=e[10],E=e[11];n[0]=o,n[1]=a,n[2]=h,n[3]=c,n[4]=l,n[5]=f,n[6]=u,n[7]=m,n[8]=p,n[9]=w,n[10]=g,n[11]=E,n[12]=o*r+l*i+p*s+e[12],n[13]=a*r+f*i+w*s+e[13],n[14]=h*r+u*i+g*s+e[14],n[15]=c*r+m*i+E*s+e[15]}return n},scale(n,e,t){let r=t.x!==void 0?t.x:t[0],i=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];return n[0]=e[0]*r,n[1]=e[1]*r,n[2]=e[2]*r,n[3]=e[3]*r,n[4]=e[4]*i,n[5]=e[5]*i,n[6]=e[6]*i,n[7]=e[7]*i,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n},rotateX(n,e,t){let r=Math.sin(t),i=Math.cos(t),s=e[4],o=e[5],a=e[6],h=e[7],c=e[8],l=e[9],f=e[10],u=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*i+c*r,n[5]=o*i+l*r,n[6]=a*i+f*r,n[7]=h*i+u*r,n[8]=c*i-s*r,n[9]=l*i-o*r,n[10]=f*i-a*r,n[11]=u*i-h*r,n},rotateY(n,e,t){let r=Math.sin(t),i=Math.cos(t),s=e[0],o=e[1],a=e[2],h=e[3],c=e[8],l=e[9],f=e[10],u=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*i-c*r,n[1]=o*i-l*r,n[2]=a*i-f*r,n[3]=h*i-u*r,n[8]=s*r+c*i,n[9]=o*r+l*i,n[10]=a*r+f*i,n[11]=h*r+u*i,n},rotateZ(n,e,t){let r=Math.sin(t),i=Math.cos(t),s=e[0],o=e[1],a=e[2],h=e[3],c=e[4],l=e[5],f=e[6],u=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*i+c*r,n[1]=o*i+l*r,n[2]=a*i+f*r,n[3]=h*i+u*r,n[4]=c*i-s*r,n[5]=l*i-o*r,n[6]=f*i-a*r,n[7]=u*i-h*r,n},invert(n,e){let t=e[0],r=e[1],i=e[2],s=e[3],o=e[4],a=e[5],h=e[6],c=e[7],l=e[8],f=e[9],u=e[10],m=e[11],p=e[12],w=e[13],g=e[14],E=e[15],y=t*a-r*o,x=t*h-i*o,T=t*c-s*o,C=r*h-i*a,F=r*c-s*a,z=i*c-s*h,O=l*w-f*p,V=l*g-u*p,I=l*E-m*p,G=f*g-u*w,W=f*E-m*w,k=u*E-m*g,R=y*k-x*W+T*G+C*I-F*V+z*O;return R?(R=1/R,n[0]=(a*k-h*W+c*G)*R,n[1]=(i*W-r*k-s*G)*R,n[2]=(w*z-g*F+E*C)*R,n[3]=(u*F-f*z-m*C)*R,n[4]=(h*I-o*k-c*V)*R,n[5]=(t*k-i*I+s*V)*R,n[6]=(g*T-p*z-E*x)*R,n[7]=(l*z-u*T+m*x)*R,n[8]=(o*W-a*I+c*O)*R,n[9]=(r*I-t*W-s*O)*R,n[10]=(p*F-w*T+E*y)*R,n[11]=(f*T-l*F-m*y)*R,n[12]=(a*V-o*G-h*O)*R,n[13]=(t*G-r*V+i*O)*R,n[14]=(w*x-p*C-g*y)*R,n[15]=(l*C-f*x+u*y)*R,n):null},compose(n,e,t,r){let i=e.x!==void 0?e.x:e[0],s=e.y!==void 0?e.y:e[1],o=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],h=t.y!==void 0?t.y:t[1],c=t.z!==void 0?t.z:t[2],l=r.x!==void 0?r.x:r[0],f=r.y!==void 0?r.y:r[1],u=r.z!==void 0?r.z:r[2],m=Math.cos(h),p=Math.sin(h),w=Math.cos(a),g=Math.sin(a),E=Math.cos(c),y=Math.sin(c);return n[0]=(m*E-p*g*y)*l,n[1]=(m*y+p*g*E)*l,n[2]=-p*w*l,n[3]=0,n[4]=-w*y*f,n[5]=w*E*f,n[6]=g*f,n[7]=0,n[8]=(p*E+m*g*y)*u,n[9]=(p*y-m*g*E)*u,n[10]=m*w*u,n[11]=0,n[12]=i,n[13]=s,n[14]=o,n[15]=1,n}};class ye{constructor(){this.position=new ee(0,0,0),this.rotation=new ee(0,0,0),this.scale=new ee(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),A.identity(this.localMatrix),A.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e)}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const r=this.children.length-1;t!==r&&(this.children[t]=this.children[r]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(A.identity(this.localMatrix),A.translate(this.localMatrix,this.localMatrix,this.position),A.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),A.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),A.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),A.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?A.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}}class H{constructor(e,t,r=null,i="GameObject"){this.name=i,this.active=!0,this.transform=new ye,this.renderer=e,this.material=t,this.mesh=r}render(e,t=void 0,r=null){if(!this.active)return;this.transform.updateWorldMatrix();const i=r||this.material;this.renderer&&i&&this.renderer.draw(this,e,t,i)}}class ce extends H{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,A.identity(this.projectionMatrix),A.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,r,i){this.fov=e,this.aspect=t,this.near=r,this.far=i,this.orthographic=!1;const s=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=s/t,o[5]=s,o[10]=(i+r)/(r-i),o[11]=-1,o[14]=2*i*r/(r-i)}setOrthographic(e,t,r,i,s,o){this.near=s,this.far=o,this.orthographic=!0,this.orthoSize=(i-r)/2;const a=this.projectionMatrix,h=1/(e-t),c=1/(r-i),l=1/(s-o);a.fill(0),a[0]=-2*h,a[5]=-2*c,a[10]=2*l,a[12]=(e+t)*h,a[13]=(i+r)*c,a[14]=(o+s)*l,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),A.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const r=this.viewMatrix,i=this.projectionMatrix;e.transform.updateWorldMatrix();const s=e.transform.worldMatrix,o=s[12],a=s[13],h=s[14],c=1,l=r[0]*o+r[4]*a+r[8]*h+r[12]*c,f=r[1]*o+r[5]*a+r[9]*h+r[13]*c,u=r[2]*o+r[6]*a+r[10]*h+r[14]*c,m=r[3]*o+r[7]*a+r[11]*h+r[15]*c,p=i[0]*l+i[4]*f+i[8]*u+i[12]*m,w=i[1]*l+i[5]*f+i[9]*u+i[13]*m;i[2]*l+i[6]*f+i[10]*u+i[14]*m;const g=i[3]*l+i[7]*f+i[11]*u+i[15]*m;if(g===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const E=p/g,y=w/g,x=(E+1)*.5,T=(y+1)*.5;return t?(t[0]=x,t[1]=T):t=[x,T],t}}class U{constructor(e,t,r){this.gl=e;const i=this.loadShader(e.VERTEX_SHADER,t),s=this.loadShader(e.FRAGMENT_SHADER,r);this.program=e.createProgram(),e.attachShader(this.program,i),e.attachShader(this.program,s),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={}}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,r){const i=this.gl,s=this.getUniformLocation(e);if(s){if(r){r==="1i"?i.uniform1i(s,t):r==="1f"?i.uniform1f(s,t):r==="2fv"?i.uniform2fv(s,t):r==="3fv"?i.uniform3fv(s,t):r==="4fv"?i.uniform4fv(s,t):r==="Matrix4fv"&&i.uniformMatrix4fv(s,!1,t);return}if(typeof t=="number")i.uniform1f(s,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:i.uniform2fv(s,t);break;case 3:i.uniform3fv(s,t);break;case 4:i.uniform4fv(s,t);break;case 16:i.uniformMatrix4fv(s,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let r=t;Array.isArray(t)&&(r=t.join(`
`));const i=this.gl.createShader(e);return this.gl.shaderSource(i,r),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error("Shader compile error:",this.gl.getShaderInfoLog(i)),this.gl.deleteShader(i),null)}}class ue{constructor(e,t,r,i,s=null){this.gl=e,this.vertices=t,this.uvs=r,this.normals=i,this.indices=s,this.count=s?s.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const r=e.getAttribLocation("aVertexPosition");if(r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const i=e.getAttribLocation("aTexCoord");i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const i=e.getAttribLocation("aNormal");i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class Ae{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),r=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),i=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new ue(e,t,r,i)}draw(e,t,r=void 0,i=null){const s=i||e.material;if(!s||!s.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;r!==void 0&&(r?r.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const h=s.shader;h.use(),a.bind(h),h.setUniform("uProjectionMatrix",t.projectionMatrix),h.setUniform("uViewMatrix",t.viewMatrix),h.setUniform("uModelMatrix",e.transform.worldMatrix);for(const u in s.uniforms){const m=s.uniforms[u];let p=m.value,w=m.type;(p instanceof WebGLTexture||w==="1i"&&p&&typeof p=="object")&&o.bindTexture(o.TEXTURE_2D,p),h.setUniform(u,p,w)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const c=performance.now();a.draw();const f=performance.now()-c;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:f,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class L{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let r=e[t];Array.isArray(r)||r instanceof Float32Array?r.length===2?this.setVec2(t,r[0],r[1]):r.length===3?this.setVec3(t,r[0],r[1],r[2]):r.length===4?this.setVec4(t,r[0],r[1],r[2],r[3]):r.length===16&&this.setMat4(t,r):typeof r=="number"?this.setFloat(t,r):r instanceof WebGLTexture&&(this.uniforms[t]={value:r,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,r){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const i=this.uniforms[e].value;i[0]=t,i[1]=r}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,r])}}setVec3(e,t,r,i){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=r,s[2]=i}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,r,i])}}setVec4(e,t,r,i,s){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=r,o[2]=i,o[3]=s}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,r,i,s])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,r){this.uniforms[e]={type:r,value:t}}}function be(n,e,t){var s;const r={RGBA:{8:{internalFormat:n.RGBA8,glFormat:n.RGBA,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RGBA16F,glFormat:n.RGBA,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RGBA32F,glFormat:n.RGBA,glType:n.FLOAT}},RGB:{8:{internalFormat:n.RGB8,glFormat:n.RGB,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RGB16F,glFormat:n.RGB,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RGB32F,glFormat:n.RGB,glType:n.FLOAT}},RG:{8:{internalFormat:n.RG8,glFormat:n.RG,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RG16F,glFormat:n.RG,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RG32F,glFormat:n.RG,glType:n.FLOAT}},R:{8:{internalFormat:n.R8,glFormat:n.RED,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.R16F,glFormat:n.RED,glType:n.HALF_FLOAT},"32f":{internalFormat:n.R32F,glFormat:n.RED,glType:n.FLOAT}}},i=(s=r[e])==null?void 0:s[t];return i||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),r.RGBA[8])}class ${constructor(e,t,r,i={}){this.gl=e,this.width=t,this.height=r,this.format=i.format??"RGBA",this.precision=i.precision??"8",this.hasDepth=i.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:s,glFormat:o,glType:a}=be(e,this.format,this.precision);this._internalFormat=s,this._glFormat=o,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,s,t,r,0,o,a,null);const h=i.minFilter??e.LINEAR,c=i.magFilter??e.LINEAR,l=i.wrapS??e.CLAMP_TO_EDGE,f=i.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,f),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const r=this.gl;r.bindTexture(r.TEXTURE_2D,this.texture),r.texImage2D(r.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(r.bindRenderbuffer(r.RENDERBUFFER,this.depthBuffer),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_COMPONENT16,e,t)),r.bindTexture(r.TEXTURE_2D,null),r.bindRenderbuffer(r.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const r=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&r.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,r),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,r=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*r,this.hasDepth&&(e+=this.width*this.height*2),e}}class Pe{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const P=new Pe;class de{static async load(e,t){const i=await(await fetch(t)).text(),s=this.parse(e,i);return new ue(e,s.positions,s.uvs,s.normals)}static parse(e,t){const r=[],i=[],s=[],o=[],a=[],h=[],c=t.split(`
`);for(let l of c){if(l=l.trim(),l.startsWith("#")||l==="")continue;const f=l.split(/\s+/),u=f[0];if(u==="v")r.push([parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])]);else if(u==="vt")i.push([parseFloat(f[1]),parseFloat(f[2])]);else if(u==="vn")s.push([parseFloat(f[1]),parseFloat(f[2]),parseFloat(f[3])]);else if(u==="f"){const m=f.slice(1);for(let p=1;p<m.length-1;p++){const w=m[0],g=m[p],E=m[p+1];this.processVertex(w,r,i,s,o,a,h),this.processVertex(g,r,i,s,o,a,h),this.processVertex(E,r,i,s,o,a,h)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(h),vertexCount:o.length/3}}static processVertex(e,t,r,i,s,o,a){const h=e.split("/"),c=parseInt(h[0])-1,l=h[1]?parseInt(h[1])-1:-1,f=h[2]?parseInt(h[2])-1:-1,u=t[c];if(s.push(u[0],u[1],u[2]),l>=0){const m=r[l];o.push(m[0],m[1])}else o.push(0,0);if(f>=0){const m=i[f];a.push(m[0],m[1],m[2])}else a.push(0,1,0)}}class _e{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let r=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(r=r*1.33),Math.round(r)}}class Se{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,r){for(const i of this.passes)i.enabled&&i.execute(e,t,r)}resize(e,t){for(const r of this.passes)r.resize(e,t)}}class re{constructor(e,t,r,i="RenderPass"){this.gl=e,this.width=t,this.height=r,this.name=i,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,r){console.warn("RenderPass.execute() not implemented")}}const De=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,Be=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class me extends re{constructor(e,t,r,i=null,s=0,o="ObjectPass"){super(e,t,r,o),this.renderTarget=i,this.renderMode=s,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new U(e,De,Be);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,r){const i=this.camera||r;this.camera&&i.updateView();const s=performance.now();if(e.resetDrawCalls(),this.renderTarget){const a=this.gl;a.bindFramebuffer(a.FRAMEBUFFER,this.renderTarget.framebuffer);const h=this.clearDepth?this._attachmentsWithDepth:[a.COLOR_ATTACHMENT0];a.invalidateFramebuffer(a.FRAMEBUFFER,h),a.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);if(this.clearColor){this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);let a=this.gl.COLOR_BUFFER_BIT;this.clearDepth&&(a|=this.gl.DEPTH_BUFFER_BIT),this.gl.clear(a)}if(t&&Array.isArray(t))for(const a of t)a.material.setUniform("uRenderMode",this.renderMode,"1i"),a.render(i,this.renderTarget);else t&&t.render&&t.render(i,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const o=e.resetDrawCalls();this.drawCount=o.count,this.drawDetails=o.details,this.executionTime=performance.now()-s}}class pe{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},r=null){const i=this.gl;let s,o=t;if(e.uniforms&&e.shader){s=e.shader,o={};for(const l in e.uniforms)o[l]=e.uniforms[l].value;t&&(t.bind||t===null)&&(r=t)}else s=e;r?r.bind():(i.bindFramebuffer(i.FRAMEBUFFER,null),i.viewport(0,0,i.canvas.width,i.canvas.height)),s.use(),i.bindBuffer(i.ARRAY_BUFFER,this.buffer);const a=s.getAttribLocation("aVertexPosition");a!==-1&&(i.enableVertexAttribArray(a),i.vertexAttribPointer(a,2,i.FLOAT,!1,16,0));const h=s.getAttribLocation("aTexCoord");h!==-1&&(i.enableVertexAttribArray(h),i.vertexAttribPointer(h,2,i.FLOAT,!1,16,8));let c=0;for(const l in o){const f=o[l];f instanceof WebGLTexture?(i.activeTexture(i.TEXTURE0+c),i.bindTexture(i.TEXTURE_2D,f),s.setUniform(l,c,"1i"),c++):s.setUniform(l,f)}i.drawArrays(i.TRIANGLE_STRIP,0,4);for(let l=0;l<c;l++)i.activeTexture(i.TEXTURE0+l),i.bindTexture(i.TEXTURE_2D,null)}}class Me extends re{constructor(e,t,r,i){super(e,t,r,"ViewportComposition"),this.material=i,this.fullScreenQuad=new pe(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,r){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const i of this.viewports){const s=Math.floor(i.x*this.width),o=Math.floor(i.y*this.height),a=Math.floor(i.w*this.width),h=Math.floor(i.h*this.height);this.gl.viewport(s,o,a,h);let c=this.buffers.Final;const l=i.pass;this.buffers[l]&&(c=this.buffers[l]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class ie extends re{constructor(e,t,r,i,s=null,o="ScreenPass"){super(e,t,r,o),this.material=i,this.renderTarget=s,this.fullScreenQuad=new pe(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,r])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,r){const i=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const s=e.resetDrawCalls();this.drawCount=s.count,this.drawDetails=s.details,this.executionTime=performance.now()-i}}class Ue extends ie{constructor(e,t,r,i,s=null,o="Lighting Pass"){super(e,t,r,i,s,o),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,r){this.lightCamera&&this.setMatricesFromCameras(r,this.lightCamera),super.execute(e,t,r)}setMatricesFromCameras(e,t){A.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),A.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),A.invert(this._invCamViewProj,this._camViewProj);const r=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[r.x,r.y,r.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,r){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:r})}}class Le extends ie{constructor(e,t,r,i,s=null,o="Skybox Pass"){super(e,t,r,i,s,o),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){A.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),A.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,r,i){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:r,uBottomColor:i})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,r){this.setCamera(r),super.execute(e,t,r)}}class Ne extends ie{constructor(e,t,r,i,s,o="PixelArt Pass"){super(e,t,r,i,s,o),this._resolutionBuffer=new Float32Array([t,r])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}class ze{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,r=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=r*this.mouseSensitivity;const i=Math.PI/2-.01;this.rotation.x=Math.max(-i,Math.min(i,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const r=e.key.toLowerCase();this.keys.hasOwnProperty(r)&&(this.keys[r]=t)}update(e){const t=this.moveSpeed*e,r=this.camera.transform,i=Math.sin(r.rotation.y),s=Math.cos(r.rotation.y),o=-i,a=-s,h=s,c=-i;let l=0,f=0,u=0;if(this.keys.w&&(f+=1),this.keys.s&&(f-=1),this.keys.a&&(l-=1),this.keys.d&&(l+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),l!==0||f!==0){const m=Math.sqrt(l*l+f*f);l/=m,f/=m}r.position.x+=(o*f+h*l)*t,r.position.z+=(a*f+c*l)*t,r.position.y+=u*t}}const ne=`precision highp float;\r
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
`,Oe=`precision highp float;\r
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
`,Ve=`precision highp float;\r
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
`,Ie=`precision highp float;\r
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
}`,Ge=`precision highp float;\r
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
}`,We=`precision highp float;\r
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
}`,ke=`precision highp float;\r
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
}`,Xe=`#extension GL_EXT_frag_depth : enable\r
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
}`,ve=`precision highp float;\r
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
`,xe=`precision highp float;\r
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
}`,Te=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),v=document.getElementById("glcanvas"),d=v.getContext("webgl2")||v.getContext("experimental-webgl");d||alert("Unable to initialize WebGL.");d.enable(d.DEPTH_TEST);d.depthFunc(d.LEQUAL);d.enable(d.CULL_FACE);d.cullFace(d.BACK);d.frontFace(d.CCW);d.getExtension("EXT_color_buffer_float");let K=new $(d,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:d.NEAREST,magFilter:d.NEAREST}),N=new $(d,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:d.NEAREST,magFilter:d.NEAREST}),J=new $(d,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:d.NEAREST,magFilter:d.NEAREST}),j=new $(d,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:d.NEAREST,magFilter:d.NEAREST});const je=new U(d,ve,xe),Ye=new U(d,ne,Oe),He=new U(d,[ke,ve],[Xe,xe]),qe=new U(d,Ve,Ie),Qe=new U(d,ne,Ge),Ze=new U(d,ne,We),$e=new _e(d,"./Assets/Textures/colormap.png"),we=new L(je,"Ship Mat"),q=new L(He,"Water"),X=new L(qe,"PPL Lighting"),M=new L(Qe,"Skybox"),ge=new L(Ze,"PixelArt"),Ke=new L(Ye,"Screen");we.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:$e.texture,uRoughness:1});ge.setUniforms({uPixelSize:4,uEdgeWidth:.5,uColorLevels:128,uDepthThreshold:.025,uNormalThreshold:.1,uSilhouetteDarkening:.2,uCreaseDarkening:.7});X.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03});M.setUniforms({uTopColor:[.063,.188,.82],uBottomColor:[1,.51,.32],uSunColor:[1,.33,.1],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.2,uCloudCoverage:.76,uCloudSpeed:.02,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const Je={uWind:[1,0],uSpeed:.5,udisplacement:1.5,uScale:.2,uColor1:[.094,.271,.494],uColor2:[.196,.404,.624],uColor3:[.8,.8,1],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[1,-4.66,.1,20.57],uColorBands:3,uRoughness:0};q.setUniforms(Je);const Q=new Ae(d),_=new ce,se=new ce,Z=[],S=new Se(d),oe=new me(d,v.width,v.height,N,1,"GBuffer Pass");oe.clearColor=[.5,.5,1,1];oe.clearDepth=!0;S.addPass(oe);const ae=new me(d,v.width,v.height,K,0,"Albedo Pass");ae.clearColor=[0,0,0,1];ae.clearDepth=!0;S.addPass(ae);const le=new Ue(d,v.width,v.height,X,j,"Lighting Pass");le.setInputBuffers(K.texture,N.texture);S.addPass(le);const he=new Le(d,v.width,v.height,M,j,"Skybox Pass");he.setInputTexture(N.texture);S.addPass(he);const Ce=new Ne(d,v.width,v.height,ge,J,"PixelArt Pass");Ce.setInputBuffers(j.texture,N.texture);S.addPass(Ce);const D=new Me(d,v.width,v.height,Ke);D.setBuffer("Final",J.texture);D.setBuffer("Pixel",J.texture);D.setBuffer("Lit",j.texture);D.setBuffer("Albedo",K.texture);D.setBuffer("Normal",N.texture);le.lightCamera=se;S.addPass(D);function Fe(){v.width=window.innerWidth*window.devicePixelRatio,v.height=window.innerHeight*window.devicePixelRatio,d.viewport(0,0,d.canvas.width,d.canvas.height),K.resize(v.width,v.height),N.resize(v.width,v.height),j.resize(v.width,v.height),J.resize(v.width,v.height),S.resize(v.width,v.height);const n=v.width/v.height;_.setPerspective(.8,n,.1,1e3)}window.addEventListener("resize",Fe);Fe();const et=v.width/v.height;_.setPerspective(.8,et,.1,1e3);_.transform.position.set(-16.2,1.8,-47);_.transform.rotation.set(0,Te?3.24:3.22,0);de.load(d,"./Assets/3D/scene.obj").then(n=>{var e=new H(Q,we,n,"Scene");e.transform.position.set(-15,-6,10),e.transform.scale.set(1,1,1),Z.push(e)});de.load(d,"./Assets/3D/DetailedPlane.obj").then(n=>{if(Te){var i=new H(Q,q,n,"Water Floor ");i.transform.position.set(0*100,-6.5,0*100),i.transform.scale.set(50,50,50),Z.push(i)}else for(let s=-2;s<=2;s++)for(let o=-1;o<=3;o++){var i=new H(Q,q,n,`Water Floor [${s},${o}]`);i.transform.position.set(s*100,-6.5,o*100),i.transform.scale.set(50,50,50),Z.push(i)}});const Ee=[{x:0,y:0,w:1,h:1,pass:"Final"}];D.setViewports(Ee);const tt=new ze(_,v),B=[.5,.8,.2],Y=30;se.setOrthographic(-Y,Y,-Y,Y,1,100);let te=0,fe="";function Re(n){if(P.update(n),P.deltaTime,tt.update(P.deltaTime),q.setUniforms({uTime:P.time}),M.setUniforms({uTime:P.time}),X.uniforms.uLightDir&&X.uniforms.uLightDir.value){const t=X.uniforms.uLightDir.value,r=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);r>.001?(B[0]=t[0]/r,B[1]=t[1]/r,B[2]=t[2]/r):(B[0]=t[0],B[1]=t[1],B[2]=t[2])}_.updateView(),D.setViewports(Ee),_.updateProjection(),se.updateProjection(),M.uniforms.uSunColor&&he.setLight(B,M.uniforms.uSunColor.value,M.uniforms.uTopColor.value,M.uniforms.uBottomColor.value),S.execute(Q,Z,_);const e=document.getElementById("hud");if(e&&(te++,te>=6)){te=0;const r=(P.unscaledDeltaTime>0?Math.round(1/P.unscaledDeltaTime):0).toString().padStart(3,"0");let i="";const s=(P.deltaTime*1e3).toFixed(2).padStart(6,"0");fe=`FPS: ${r}${i}<br>Δ: ${s} ms`,e.innerHTML=fe}requestAnimationFrame(Re)}requestAnimationFrame(Re);
