(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();class K{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],i=this.data[2];return Math.sqrt(e*e+t*t+i*i)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class _{static identity(e){return S.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,i){return S.multiply(e,t,i)}static translate(e,t,i){return S.translate(e,t,i)}static scale(e,t,i){return S.scale(e,t,i)}static rotateX(e,t,i){return S.rotateX(e,t,i)}static rotateY(e,t,i){return S.rotateY(e,t,i)}static rotateZ(e,t,i){return S.rotateZ(e,t,i)}static invert(e,t){return S.invert(e,t)}static compose(e,t,i,r){return S.compose(e,t,i,r)}}const S={identity(s){return s.fill(0),s[0]=1,s[5]=1,s[10]=1,s[15]=1,s},multiply(s,e,t){let i=e[0],r=e[1],n=e[2],o=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],f=e[10],v=e[11],g=e[12],w=e[13],m=e[14],p=e[15],x=t[0],y=t[1],E=t[2],T=t[3];return s[0]=x*i+y*a+E*d+T*g,s[1]=x*r+y*l+E*u+T*w,s[2]=x*n+y*c+E*f+T*m,s[3]=x*o+y*h+E*v+T*p,x=t[4],y=t[5],E=t[6],T=t[7],s[4]=x*i+y*a+E*d+T*g,s[5]=x*r+y*l+E*u+T*w,s[6]=x*n+y*c+E*f+T*m,s[7]=x*o+y*h+E*v+T*p,x=t[8],y=t[9],E=t[10],T=t[11],s[8]=x*i+y*a+E*d+T*g,s[9]=x*r+y*l+E*u+T*w,s[10]=x*n+y*c+E*f+T*m,s[11]=x*o+y*h+E*v+T*p,x=t[12],y=t[13],E=t[14],T=t[15],s[12]=x*i+y*a+E*d+T*g,s[13]=x*r+y*l+E*u+T*w,s[14]=x*n+y*c+E*f+T*m,s[15]=x*o+y*h+E*v+T*p,s},translate(s,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];if(e===s)s[12]=e[0]*i+e[4]*r+e[8]*n+e[12],s[13]=e[1]*i+e[5]*r+e[9]*n+e[13],s[14]=e[2]*i+e[6]*r+e[10]*n+e[14],s[15]=e[3]*i+e[7]*r+e[11]*n+e[15];else{let o=e[0],a=e[1],l=e[2],c=e[3],h=e[4],d=e[5],u=e[6],f=e[7],v=e[8],g=e[9],w=e[10],m=e[11];s[0]=o,s[1]=a,s[2]=l,s[3]=c,s[4]=h,s[5]=d,s[6]=u,s[7]=f,s[8]=v,s[9]=g,s[10]=w,s[11]=m,s[12]=o*i+h*r+v*n+e[12],s[13]=a*i+d*r+g*n+e[13],s[14]=l*i+u*r+w*n+e[14],s[15]=c*i+f*r+m*n+e[15]}return s},scale(s,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],n=t.z!==void 0?t.z:t[2];return s[0]=e[0]*i,s[1]=e[1]*i,s[2]=e[2]*i,s[3]=e[3]*i,s[4]=e[4]*r,s[5]=e[5]*r,s[6]=e[6]*r,s[7]=e[7]*r,s[8]=e[8]*n,s[9]=e[9]*n,s[10]=e[10]*n,s[11]=e[11]*n,s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15],s},rotateX(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[4],o=e[5],a=e[6],l=e[7],c=e[8],h=e[9],d=e[10],u=e[11];return e!==s&&(s[0]=e[0],s[1]=e[1],s[2]=e[2],s[3]=e[3],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[4]=n*r+c*i,s[5]=o*r+h*i,s[6]=a*r+d*i,s[7]=l*r+u*i,s[8]=c*r-n*i,s[9]=h*r-o*i,s[10]=d*r-a*i,s[11]=u*r-l*i,s},rotateY(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[0],o=e[1],a=e[2],l=e[3],c=e[8],h=e[9],d=e[10],u=e[11];return e!==s&&(s[4]=e[4],s[5]=e[5],s[6]=e[6],s[7]=e[7],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[0]=n*r-c*i,s[1]=o*r-h*i,s[2]=a*r-d*i,s[3]=l*r-u*i,s[8]=n*i+c*r,s[9]=o*i+h*r,s[10]=a*i+d*r,s[11]=l*i+u*r,s},rotateZ(s,e,t){let i=Math.sin(t),r=Math.cos(t),n=e[0],o=e[1],a=e[2],l=e[3],c=e[4],h=e[5],d=e[6],u=e[7];return e!==s&&(s[8]=e[8],s[9]=e[9],s[10]=e[10],s[11]=e[11],s[12]=e[12],s[13]=e[13],s[14]=e[14],s[15]=e[15]),s[0]=n*r+c*i,s[1]=o*r+h*i,s[2]=a*r+d*i,s[3]=l*r+u*i,s[4]=c*r-n*i,s[5]=h*r-o*i,s[6]=d*r-a*i,s[7]=u*r-l*i,s},invert(s,e){let t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],v=e[12],g=e[13],w=e[14],m=e[15],p=t*a-i*o,x=t*l-r*o,y=t*c-n*o,E=i*l-r*a,T=i*c-n*a,H=r*c-n*l,G=h*g-d*v,j=h*w-u*v,X=h*m-f*v,Y=d*w-u*g,q=d*m-f*g,Z=u*m-f*w,F=p*Z-x*q+y*Y+E*X-T*j+H*G;return F?(F=1/F,s[0]=(a*Z-l*q+c*Y)*F,s[1]=(r*q-i*Z-n*Y)*F,s[2]=(g*H-w*T+m*E)*F,s[3]=(u*T-d*H-f*E)*F,s[4]=(l*X-o*Z-c*j)*F,s[5]=(t*Z-r*X+n*j)*F,s[6]=(w*y-v*H-m*x)*F,s[7]=(h*H-u*y+f*x)*F,s[8]=(o*q-a*X+c*G)*F,s[9]=(i*X-t*q-n*G)*F,s[10]=(v*T-g*y+m*p)*F,s[11]=(d*y-h*T-f*p)*F,s[12]=(a*j-o*Y-l*G)*F,s[13]=(t*Y-i*j+r*G)*F,s[14]=(g*x-v*E-w*p)*F,s[15]=(h*E-d*x+u*p)*F,s):null},compose(s,e,t,i){let r=e.x!==void 0?e.x:e[0],n=e.y!==void 0?e.y:e[1],o=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],l=t.y!==void 0?t.y:t[1],c=t.z!==void 0?t.z:t[2],h=i.x!==void 0?i.x:i[0],d=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],f=Math.cos(l),v=Math.sin(l),g=Math.cos(a),w=Math.sin(a),m=Math.cos(c),p=Math.sin(c);return s[0]=(f*m-v*w*p)*h,s[1]=(f*p+v*w*m)*h,s[2]=-v*g*h,s[3]=0,s[4]=-g*p*d,s[5]=g*m*d,s[6]=w*d,s[7]=0,s[8]=(v*m+f*w*p)*u,s[9]=(v*p-f*w*m)*u,s[10]=f*g*u,s[11]=0,s[12]=r,s[13]=n,s[14]=o,s[15]=1,s}};class Ue{constructor(){this.position=new K(0,0,0),this.rotation=new K(0,0,0),this.scale=new K(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),_.identity(this.localMatrix),_.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.markDirty()}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const i=this.children.length-1;t!==i&&(this.children[t]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(_.identity(this.localMatrix),_.translate(this.localMatrix,this.localMatrix,this.position),_.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),_.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),_.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),_.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?_.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new K(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(e,t,i){if(!this.parent){this.position.set(e,t,i);return}this.parent.updateWorldMatrix();const r=new Float32Array(16);_.invert(r,this.parent.worldMatrix);const n=e,o=t,a=i,l=r[0]*n+r[4]*o+r[8]*a+r[12],c=r[1]*n+r[5]*o+r[9]*a+r[13],h=r[2]*n+r[6]*o+r[10]*a+r[14];this.position.set(l,c,h)}get globalScale(){this.updateWorldMatrix();const e=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),t=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),i=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new K(e,t,i)}}class Q{constructor(e,t,i=null,r="GameObject"){this.name=r,this.active=!0,this.transform=new Ue,this.transform.gameObject=this,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const r=i||this.material;this.renderer&&r&&this.renderer.draw(this,e,t,r)}}class me extends Q{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,_.identity(this.projectionMatrix),_.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,r){this.fov=e,this.aspect=t,this.near=i,this.far=r,this.orthographic=!1;const n=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=n/t,o[5]=n,o[10]=(r+i)/(i-r),o[11]=-1,o[14]=2*r*i/(i-r)}setOrthographic(e,t,i,r,n,o){this.near=n,this.far=o,this.orthographic=!0,this.orthoSize=(r-i)/2;const a=this.projectionMatrix,l=1/(e-t),c=1/(i-r),h=1/(n-o);a.fill(0),a[0]=-2*l,a[5]=-2*c,a[10]=2*h,a[12]=(e+t)*l,a[13]=(r+i)*c,a[14]=(o+n)*h,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),_.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const i=this.viewMatrix,r=this.projectionMatrix;e.transform.updateWorldMatrix();const n=e.transform.worldMatrix,o=n[12],a=n[13],l=n[14],c=1,h=i[0]*o+i[4]*a+i[8]*l+i[12]*c,d=i[1]*o+i[5]*a+i[9]*l+i[13]*c,u=i[2]*o+i[6]*a+i[10]*l+i[14]*c,f=i[3]*o+i[7]*a+i[11]*l+i[15]*c,v=r[0]*h+r[4]*d+r[8]*u+r[12]*f,g=r[1]*h+r[5]*d+r[9]*u+r[13]*f;r[2]*h+r[6]*d+r[10]*u+r[14]*f;const w=r[3]*h+r[7]*d+r[11]*u+r[15]*f;if(w===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const m=v/w,p=g/w,x=(m+1)*.5,y=(p+1)*.5;return t?(t[0]=x,t[1]=y):t=[x,y],t}}class B{constructor(e,t,i,r=null,n=null){this.gl=e;const o=this.loadShader(e.VERTEX_SHADER,t),a=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,o);let l=!1;if(r&&n){const c=this.loadShader(36488,r),h=this.loadShader(36487,n);c&&h?(e.attachShader(this.program,c),e.attachShader(this.program,h),l=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}e.attachShader(this.program,a),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=l}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const r=this.gl,n=this.getUniformLocation(e);if(n){if(i){i==="1i"?r.uniform1i(n,t):i==="1f"?r.uniform1f(n,t):i==="2fv"?r.uniform2fv(n,t):i==="3fv"?r.uniform3fv(n,t):i==="4fv"?r.uniform4fv(n,t):i==="Matrix4fv"&&r.uniformMatrix4fv(n,!1,t);return}if(typeof t=="number")r.uniform1f(n,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:r.uniform2fv(n,t);break;case 3:r.uniform3fv(n,t);break;case 4:r.uniform4fv(n,t);break;case 16:r.uniformMatrix4fv(n,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;Array.isArray(t)&&(i=t.join(`
`));let r;try{if(r=this.gl.createShader(e),!r)return console.warn(`Shader type ${e} not supported`),null}catch(n){return console.warn(`Shader type ${e} not supported:`,n.message),null}return this.gl.shaderSource(r,i),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)?r:(console.error("Shader compile error:",this.gl.getShaderInfoLog(r)),this.gl.deleteShader(r),null)}}class _e{constructor(e,t,i,r,n=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=r,this.indices=n,this.count=n?n.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const r=e.getAttribLocation("aTexCoord");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const r=e.getAttribLocation("aNormal");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class ke{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),r=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new _e(e,t,i,r)}draw(e,t,i=void 0,r=null){const n=r||e.material;if(!n||!n.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const l=n.shader;l.use(),a.bind(l),l.setUniform("uProjectionMatrix",t.projectionMatrix),l.setUniform("uViewMatrix",t.viewMatrix),l.setUniform("uModelMatrix",e.transform.worldMatrix);for(const u in n.uniforms){const f=n.uniforms[u];let v=f.value,g=f.type;(v instanceof WebGLTexture||g==="1i"&&v&&typeof v=="object")&&o.bindTexture(o.TEXTURE_2D,v),l.setUniform(u,v,g)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const c=performance.now();a.draw();const d=performance.now()-c;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:d,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class N{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,r){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const n=this.uniforms[e].value;n[0]=t,n[1]=i,n[2]=r}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,r])}}setVec4(e,t,i,r,n){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=i,o[2]=r,o[3]=n}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,r,n])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}function $e(s,e,t){var n;const i={RGBA:{8:{internalFormat:s.RGBA8,glFormat:s.RGBA,glType:s.UNSIGNED_BYTE},"16f":{internalFormat:s.RGBA16F,glFormat:s.RGBA,glType:s.HALF_FLOAT},"32f":{internalFormat:s.RGBA32F,glFormat:s.RGBA,glType:s.FLOAT}},RGB:{8:{internalFormat:s.RGB8,glFormat:s.RGB,glType:s.UNSIGNED_BYTE},"16f":{internalFormat:s.RGB16F,glFormat:s.RGB,glType:s.HALF_FLOAT},"32f":{internalFormat:s.RGB32F,glFormat:s.RGB,glType:s.FLOAT}},RG:{8:{internalFormat:s.RG8,glFormat:s.RG,glType:s.UNSIGNED_BYTE},"16f":{internalFormat:s.RG16F,glFormat:s.RG,glType:s.HALF_FLOAT},"32f":{internalFormat:s.RG32F,glFormat:s.RG,glType:s.FLOAT}},R:{8:{internalFormat:s.R8,glFormat:s.RED,glType:s.UNSIGNED_BYTE},"16f":{internalFormat:s.R16F,glFormat:s.RED,glType:s.HALF_FLOAT},"32f":{internalFormat:s.R32F,glFormat:s.RED,glType:s.FLOAT}}},r=(n=i[e])==null?void 0:n[t];return r||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),i.RGBA[8])}class oe{constructor(e,t,i,r={}){this.gl=e,this.width=t,this.height=i,this.format=r.format??"RGBA",this.precision=r.precision??"8",this.hasDepth=r.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:n,glFormat:o,glType:a}=$e(e,this.format,this.precision);this._internalFormat=n,this._glFormat=o,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,n,t,i,0,o,a,null);const l=r.minFilter??e.LINEAR,c=r.magFilter??e.LINEAR,h=r.wrapS??e.CLAMP_TO_EDGE,d=r.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const i=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&i.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,i),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*i,this.hasDepth&&(e+=this.width*this.height*2),e}}class Oe{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const D=new Oe;class ne{static async load(e,t){const r=await(await fetch(t)).text(),n=this.parse(e,r);return new _e(e,n.positions,n.uvs,n.normals)}static parse(e,t){const i=[],r=[],n=[],o=[],a=[],l=[],c=t.split(`
`);for(let h of c){if(h=h.trim(),h.startsWith("#")||h==="")continue;const d=h.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")r.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")n.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const f=d.slice(1);for(let v=1;v<f.length-1;v++){const g=f[0],w=f[v],m=f[v+1];this.processVertex(g,i,r,n,o,a,l),this.processVertex(w,i,r,n,o,a,l),this.processVertex(m,i,r,n,o,a,l)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(l),vertexCount:o.length/3}}static processVertex(e,t,i,r,n,o,a){const l=e.split("/"),c=parseInt(l[0])-1,h=l[1]?parseInt(l[1])-1:-1,d=l[2]?parseInt(l[2])-1:-1,u=t[c];if(n.push(u[0],u[1],u[2]),h>=0){const f=i[h];o.push(f[0],f[1])}else o.push(0,0);if(d>=0){const f=r[d];a.push(f[0],f[1],f[2])}else a.push(0,1,0)}}class Ve{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let i=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(i=i*1.33),Math.round(i)}}class Ne{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const r of this.passes)r.enabled&&r.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class ae{constructor(e,t,i,r="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=r,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}const ze=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,Ie=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class Ae extends ae{constructor(e,t,i,r=null,n=0,o="ObjectPass"){super(e,t,i,o),this.renderTarget=r,this.renderMode=n,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new B(e,ze,Ie);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const r=this.camera||i;this.camera&&r.updateView();const n=performance.now();if(e.resetDrawCalls(),this.renderTarget){const l=this.gl;l.bindFramebuffer(l.FRAMEBUFFER,this.renderTarget.framebuffer);const c=this.clearDepth?this._attachmentsWithDepth:[l.COLOR_ATTACHMENT0];l.invalidateFramebuffer(l.FRAMEBUFFER,c),l.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);if(this.clearColor){this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]);let l=this.gl.COLOR_BUFFER_BIT;this.clearDepth&&(l|=this.gl.DEPTH_BUFFER_BIT),this.gl.clear(l)}const o=l=>{if(l.active&&(l.material&&l.material.setUniform("uRenderMode",this.renderMode,"1i"),l.render(r,this.renderTarget),l.transform&&l.transform.children))for(const c of l.transform.children)c.gameObject&&o(c.gameObject)};if(t&&Array.isArray(t))for(const l of t)o(l);else t&&t.render&&t.render(r,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const a=e.resetDrawCalls();this.drawCount=a.count,this.drawDetails=a.details,this.executionTime=performance.now()-n}}class Pe{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const r=this.gl;let n,o=t;if(e.uniforms&&e.shader){n=e.shader,o={};for(const h in e.uniforms)o[h]=e.uniforms[h].value;t&&(t.bind||t===null)&&(i=t)}else n=e;i?i.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)),n.use(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer);const a=n.getAttribLocation("aVertexPosition");a!==-1&&(r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,r.FLOAT,!1,16,0));const l=n.getAttribLocation("aTexCoord");l!==-1&&(r.enableVertexAttribArray(l),r.vertexAttribPointer(l,2,r.FLOAT,!1,16,8));let c=0;for(const h in o){const d=o[h];d instanceof WebGLTexture?(r.activeTexture(r.TEXTURE0+c),r.bindTexture(r.TEXTURE_2D,d),n.setUniform(h,c,"1i"),c++):n.setUniform(h,d)}r.drawArrays(r.TRIANGLE_STRIP,0,4);for(let h=0;h<c;h++)r.activeTexture(r.TEXTURE0+h),r.bindTexture(r.TEXTURE_2D,null)}}class We extends ae{constructor(e,t,i,r){super(e,t,i,"ViewportComposition"),this.material=r,this.fullScreenQuad=new Pe(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const r of this.viewports){const n=Math.floor(r.x*this.width),o=Math.floor(r.y*this.height),a=Math.floor(r.w*this.width),l=Math.floor(r.h*this.height);this.gl.viewport(n,o,a,l);let c=this.buffers.Final;const h=r.pass;this.buffers[h]&&(c=this.buffers[h]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class pe extends ae{constructor(e,t,i,r,n=null,o="ScreenPass"){super(e,t,i,o),this.material=r,this.renderTarget=n,this.fullScreenQuad=new Pe(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,i])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const r=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const n=e.resetDrawCalls();this.drawCount=n.count,this.drawDetails=n.details,this.executionTime=performance.now()-r}}class He extends pe{constructor(e,t,i,r,n=null,o="Lighting Pass"){super(e,t,i,r,n,o),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){_.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),_.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),_.invert(this._invCamViewProj,this._camViewProj);const i=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}}class Ge extends pe{constructor(e,t,i,r,n=null,o="Skybox Pass"){super(e,t,i,r,n,o),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){_.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),_.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,r){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uBottomColor:r})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class je extends pe{constructor(e,t,i,r,n,o="PixelArt Pass"){super(e,t,i,r,n,o),this._resolutionBuffer=new Float32Array([t,i])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}const Xe=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
// Simple passthrough shader for wireframe visualization\r
\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uViewMatrix;\r
uniform mat4 uModelMatrix;\r
\r
attribute vec3 aVertexPosition;\r
attribute vec2 aTexCoord;\r
attribute vec3 aNormal;\r
\r
varying vec3 vPos;\r
varying vec3 vNormal;\r
\r
void main() {\r
    vec4 worldPos = uModelMatrix * vec4(aVertexPosition, 1.0);\r
    vec4 viewPos = uViewMatrix * worldPos;\r
    \r
    vPos = worldPos.xyz;\r
    vNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);\r
    \r
    gl_Position = uProjectionMatrix * viewPos;\r
}\r
`,Ye=`precision highp float;\r
\r
// Received from Vertex Shader - must match the names in your Vertex Shader exactly\r
varying vec3 vPos;\r
varying vec3 vNormal;\r
\r
// Wireframe uniforms\r
uniform vec3 uWireColor;        // Line color (default: white)\r
uniform float uWireWidth;       // Line thickness (default: 1.0)\r
uniform float uWireOpacity;     // Line opacity (default: 1.0)\r
uniform bool uShowBackfaces;    // Show backface wireframe (default: false)\r
\r
void main() {\r
    vec3 normal = normalize(vNormal);\r
    \r
    // In WebGL 1.0, world position is often used for viewDir calculation \r
    // assuming camera is at (0,0,0) or passed via uniform. \r
    // Since vPos is world space, we calculate direction to origin:\r
    vec3 viewDir = normalize(-vPos);\r
    \r
    // Backface check\r
    float NdotV = dot(normal, viewDir);\r
    if (NdotV < 0.0 && !uShowBackfaces) {\r
        discard;\r
    }\r
    \r
    // Base wireframe color with edge highlighting\r
    vec3 wireColor = uWireColor;\r
    \r
    // Add brightness based on surface angle for depth perception\r
    float surfaceBrightness = 0.5 + 0.5 * max(0.0, NdotV);\r
    wireColor *= mix(0.5, 1.0, surfaceBrightness);\r
    \r
    gl_FragColor = vec4(wireColor, uWireOpacity);\r
}`;class qe extends ae{constructor(e,t,i,r=null,n="Wireframe Pass"){super(e,t,i,n),this.target=r,this.enabled=!1;const o=new B(e,Xe,Ye);this.material=new N(o,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=e,this._polygonMode=null}setWireColor(e,t,i){this.material.setVec3("uWireColor",e,t,i)}setOpacity(e){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,e)))}setShowBackfaces(e){this.material.setUniform("uShowBackfaces",e?1:0,"1i")}execute(e,t,i){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const r=this.material.shader;r.use(),r.setUniform("uProjectionMatrix",i.projectionMatrix),r.setUniform("uViewMatrix",i.viewMatrix);const n=o=>{if(o.active){if(o.transform.updateWorldMatrix(),o.mesh){r.setUniform("uModelMatrix",o.transform.worldMatrix);for(const l in this.material.uniforms){const c=this.material.uniforms[l];r.setUniform(l,c.value,c.type)}const a=o.mesh;a.bind(r),a.indices&&a.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,a.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,a.count)}if(o.transform&&o.transform.children)for(const a of o.transform.children)a.gameObject&&n(a.gameObject)}};for(const o of t)n(o)}resize(e,t){this.width=e,this.height=t,this.target&&this.target.resize(e,t)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}class Ze{constructor(e=null){this.gameContext=e,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(t),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes.length=0}endFrame(){console.log(),this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(e,t){this.passHistory||(this.passHistory={}),this.passHistory[e]||(this.passHistory[e]=[]),this.passHistory[e].push(t),this.passHistory[e].length>300&&this.passHistory[e].shift()}recordDrawCall(e,t,i,r,n,o=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:n-r,vertices:o})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let e=0,t=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(n=>{n.drawCalls.forEach(o=>{e+=(o.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(n=>{if(n.renderTarget&&n.renderTarget.getMemorySize){const o=n.renderTarget.getMemorySize();t+=o}}),this.gameContext){if(this.gameContext.textures)for(const n in this.gameContext.textures){const o=this.gameContext.textures[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.textureCache)for(const n in this.gameContext.textureCache){const o=this.gameContext.textureCache[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const n in this.gameContext.assets.textures){const o=this.gameContext.assets.textures[n];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}}const r=e+t+i;return this.metrics.memory={vertices:e,renderTargets:t,textures:i,total:r},this.metrics.memory}}class Ke{static attach(e,t,i=null){const r=new Ze(i),n=e.execute.bind(e);e.execute=function(a,l,c){r.enabled&&r.beginFrame();const h=e.passes||[];for(let d=0;d<h.length;d++){const u=h[d];if(!u.__profilerInstrumented){const f=u.execute.bind(u);u.execute=function(v,g,w){const m=u.name||"Unnamed Pass";r.enabled&&(r.beginPass(m),v.currentPassName=m,r.devToolsEnabled&&performance.mark(`PassStart-${m}`)),f(v,g,w),r.enabled&&(r.endPass(),v.currentPassName=null,r.devToolsEnabled&&(performance.mark(`PassEnd-${m}`),performance.measure(`Pass: ${m}`,`PassStart-${m}`,`PassEnd-${m}`),performance.clearMarks(`PassStart-${m}`),performance.clearMarks(`PassEnd-${m}`)))},u.__profilerInstrumented=!0}}n(a,l,c),r.enabled&&(r.endFrame(),r.updateMemoryMetrics())};const o=t.draw.bind(t);return t.draw=function(a,l,c,h){if(!r.enabled){o(a,l,c,h);return}const d=a?a.name:"Unknown",u=h?h.name:"Unknown";r.devToolsEnabled&&performance.mark(`DrawStart-${d}`);const f=performance.now();o(a,l,c,h);const v=performance.now();r.devToolsEnabled&&(performance.mark(`DrawEnd-${d}`),performance.measure(`Draw: ${d} [${u}]`,`DrawStart-${d}`,`DrawEnd-${d}`),performance.clearMarks(`DrawStart-${d}`),performance.clearMarks(`DrawEnd-${d}`));const g=a&&a.mesh?a.mesh.count:6;r.recordDrawCall(d,u,0,f,v,g)},r.disable(),r}}class Qe{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const r=t.style.display==="none";t.style.display=r?"flex":"none",i.style.background=r?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(r=>{const n=document.createElement("option");n.value=r,n.text=r,i.appendChild(n)}),i.onchange=r=>t(r.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,r,n){const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${r}px`,height:`${n}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const l=document.createElement("span");l.innerHTML="×",Object.assign(l.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),l.onclick=()=>{o.style.display="none"},l.onmouseover=()=>{l.style.color="#fff"},l.onmouseout=()=>{l.style.color="#888"},a.appendChild(l);const c=document.createElement("div");c.classList.add("window-content"),Object.assign(c.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const h=document.createElement("div");return Object.assign(h.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),o.appendChild(a),o.appendChild(c),o.appendChild(h),this.container.appendChild(o),this.addDragLogic(o,a),this.addResizeLogic(o,h),{content:c,window:o}}addResizeLogic(e,t){let i=!1,r,n,o,a;t.addEventListener("mousedown",h=>{h.preventDefault(),h.stopPropagation(),i=!0,o=h.clientX,a=h.clientY,r=e.offsetWidth,n=e.offsetHeight,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c)});const l=h=>{if(!i)return;const d=r+(h.clientX-o),u=n+(h.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}addDragLogic(e,t){let i=!1,r,n,o,a;t.addEventListener("mousedown",h=>{h.target.tagName!=="BUTTON"&&(i=!0,r=h.clientX,n=h.clientY,o=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const l=h=>{if(!i)return;let d=o+(h.clientX-r),u=a+(h.clientY-n);const f=20;d<f&&(d=0),u<f&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<f&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<f&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class P{constructor(e,t,i,r,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(n),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),P.nextNameID=P.nextNameID||0,this.$name.id=`lil-gui-name-${++P.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Je extends P{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function fe(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const et={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:fe,toHexString:fe},ee={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},tt={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,e,t=1){const i=ee.fromHexString(s);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([s,e,t],i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return ee.toHexString(r)}},it={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const i=ee.fromHexString(s);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:s,g:e,b:t},i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return ee.toHexString(r)}},rt=[et,ee,tt,it];function st(s){return rt.find(e=>e.match(s))}class nt extends P{constructor(e,t,i,r){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=st(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=fe(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ce extends P{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ot extends P{constructor(e,t,i,r,n,o){super(e,t,i,"lil-number"),this._initInput(),this.min(r),this.max(n);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},i=p=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+p),this.$input.value=this.getValue())},r=p=>{p.key==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p)*-1))},n=p=>{this._inputFocused&&(p.preventDefault(),i(this._step*this._normalizeMouseWheel(p)))};let o=!1,a,l,c,h,d;const u=5,f=p=>{a=p.clientX,l=c=p.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=p=>{if(o){const x=p.clientX-a,y=p.clientY-l;Math.abs(y)>u?(p.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>u&&g()}if(!o){const x=p.clientY-c;d-=x*this._step*this._arrowKeyMultiplier(p),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=p.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},w=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",w),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(m,p,x,y,E)=>(m-p)/(x-p)*(E-y)+y,t=m=>{const p=this.$slider.getBoundingClientRect();let x=e(m,p.left,p.right,this._min,this._max);this._snapClampSetValue(x)},i=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)},r=m=>{t(m.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=m=>{if(o){const p=m.touches[0].clientX-a,x=m.touches[0].clientY-l;Math.abs(p)>Math.abs(x)?c(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else m.preventDefault(),t(m.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),v=400;let g;const w=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const x=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,v)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",w,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class at extends P{constructor(e,t,i,r){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class lt extends P{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var ht=`.lil-gui {
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
}`;function dt(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Te=!1;class U{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:n="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Te&&a&&(dt(ht),Te=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,i,r,n){if(Object(i)===i)return new at(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new ot(this,e,t,i,r,n);case"boolean":return new Je(this,e,t);case"string":return new lt(this,e,t);case"function":return new ce(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new nt(this,e,t,i)}addFolder(e){const t=new U({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof ce||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ce)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class ct{constructor(e,t){this.editor=e,this.gui=new U({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(o=>o.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera");const r=(o,a=null)=>{if(!o)return;const l=a||this.gui,c=o.name||"Object";if(l.add({select:()=>this.editor.selectObject(o)},"select").name(c),o.transform&&o.transform.children&&o.transform.children.length>0){const h=l.addFolder(`${c} Children`);for(const d of o.transform.children)d.gameObject&&r(d.gameObject,h)}};(this.editor.game.scene||[]).forEach((o,a)=>{o&&r(o)})}}class ut{constructor(e,t){this.editor=e,this.container=t,this.gui=new U({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(n=>n.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject",r=this.gui.addFolder("Object Settings");if(r.add(t,"name").name("Name").listen(),typeof t.active<"u"&&r.add(t,"active").name("Active").listen(),t.transform){const n=t.transform,o=this.gui.addFolder(`Transform: ${i}`),a=o.addFolder("Position");a.add(n.position,"x").step(.1).listen().name("X"),a.add(n.position,"y").step(.1).listen().name("Y"),a.add(n.position,"z").step(.1).listen().name("Z");const l=o.addFolder("Rotation");l.add(n.rotation,"x").step(.1).listen().name("X"),l.add(n.rotation,"y").step(.1).listen().name("Y"),l.add(n.rotation,"z").step(.1).listen().name("Z");const c=o.addFolder("Scale");c.add(n.scale,"x").step(.1).listen().name("X"),c.add(n.scale,"y").step(.1).listen().name("Y"),c.add(n.scale,"z").step(.1).listen().name("Z")}if(t instanceof me){const n=this.gui.addFolder("Camera Settings");n.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const o=n.addFolder("Perspective");o.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),n.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),n.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),n.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),o.open()}if(t.material){const n=this.gui.addFolder("Material");n.add(t.material,"name").name("Material Name").disable().listen(),n.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}if(t.transform&&t.transform.children&&t.transform.children.length>0){const n=this.gui.addFolder("Children");t.transform.children.forEach((o,a)=>{if(o.gameObject){const l=o.gameObject,c=l.name||`Child ${a}`;n.add({select:()=>this.editor.selectObject(l)},"select").name(c)}}),n.open()}}}class ft{constructor(e,t){this.editor=e,this.container=t,this.gui=new U({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(r=>r.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const r in t){const n=t[r];i.add({select:()=>this.inspect(n)},"select").name(r)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(r=>r.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const r=e.uniforms[i],n=r.value;if(r.type,Array.isArray(n)||n instanceof Float32Array)if(i.toLowerCase().includes("color")&&(n.length===3||n.length===4))t.addColor(r,"value").name(i).listen();else{const a=t.addFolder(i),l=["x","y","z","w"];for(let c=0;c<n.length;c++){const h={get val(){return n[c]},set val(d){n[c]=d}};a.add(h,"val").step(.01).name(l[c]||`[${c}]`).listen()}}else if(typeof n=="number"){const o={get val(){return r.value},set val(l){r.value=l}};let a=t.add(o,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else n instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class mt{constructor(e,t){this.editor=e,this.container=t,this.gui=new U({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,r)=>{const n=this.gui.addFolder(`${r}: ${i.name||"Pass"}`);if(n.add(i,"enabled").name("Active"),n.add(i,"drawCount").name("Draw Calls").disable().listen(),n.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const l={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(c){i.clearColor[0]=c[0],i.clearColor[1]=c[1],i.clearColor[2]=c[2]}};n.addColor(l,"color").name("Clear Color")}i.renderTarget?n.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():n.add({info:"Screen"},"info").name("Target").disable(),i.material&&n.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const o={show:!1},a=n.addFolder("Performance Details");a.add(o,"show").name("List Draw Calls").onChange(l=>{l?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,r)=>{const n=e.addFolder(`Draw ${r}: ${i.object}`);n.add(i,"material").name("Material").disable(),n.add(i,"shader").name("Shader").disable(),n.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class pt{constructor(e,t){this.editor=e,this.container=t,this.gui=new U({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!1,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const e=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(t=>{e&&e.profiler&&(t?e.profiler.enable():e.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(t=>{e&&e.profiler&&(e.profiler.devToolsEnabled=t)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const e=this.frameTimeCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled||!t.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,r=this.frameTimeCanvas.height;e.clearRect(0,0,i,r);const n=Math.min(t.frameTimeHistory.length,this.stats.avgFrames);if(n<2)return;const o=[];for(let h=t.frameTimeHistory.length-n;h<t.frameTimeHistory.length;h++)o.push(t.frameTimeHistory[h]);let a=0,l=100;const c=l-a;e.beginPath(),e.strokeStyle="#4363d8",e.lineWidth=1.5;for(let h=0;h<o.length;h++){const d=h/(o.length-1)*i,u=r-(o[h]-a)/c*r*.8-r*.1;h===0?e.moveTo(d,u):e.lineTo(d,u)}e.stroke(),e.fillStyle="#fff",e.font="10px monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`Max: ${l.toFixed(1)}ms`,5,5),e.textBaseline="bottom",e.fillText(`Min: ${a.toFixed(1)}ms`,5,r-5),e.textAlign="right",e.textBaseline="top",e.fillText(`Delta time: ${o[n-1].toFixed(2)}`,i-5,5)}drawGraph(){const e=this.graphCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,r=this.graphCanvas.height;if(e.clearRect(0,0,i,r),!t.metrics||!t.metrics.passes||t.metrics.passes.length===0)return;const n=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let o=[],a=0;if(this.stats.pieMode==="Average"){let g=0;const w=this.stats.avgFrames;for(const m in t.passHistory){const p=t.passHistory[m];if(p.length>0){let x=0,y=Math.min(p.length,w);for(let T=p.length-y;T<p.length;T++)x+=p[T];const E=x/y;o.push({name:m,duration:E,color:n[g%n.length]}),a+=E}g++}}else t.metrics.passes.forEach((g,w)=>{o.push({name:g.name,duration:g.duration,color:n[w%n.length]}),a+=g.duration});if(a<=0)return;const l=i*.3,c=r/2,h=Math.max(0,Math.min(l,c)-10);if(h<=0)return;let d=-.5*Math.PI;o.forEach(g=>{if(g.duration<=0)return;const w=g.duration/a*2*Math.PI;if(e.beginPath(),e.moveTo(l,c),e.arc(l,c,h,d,d+w),e.closePath(),e.fillStyle=g.color,e.fill(),w>.3){const m=d+w/2,p=l+Math.cos(m)*(h*.6),x=c+Math.sin(m)*(h*.6);e.fillStyle="#000",e.font="10px bold sans-serif",e.textAlign="center",e.textBaseline="middle";const y=g.name.replace("Pass","").substring(0,6);e.fillText(y,p,x)}d+=w});const u=l+h+20;let f=20;const v=16;e.textAlign="left",e.font="10px monospace",o.forEach(g=>{e.fillStyle=g.color,e.fillRect(u,f-8,10,10),e.fillStyle="#fff";const w=(g.duration/a*100).toFixed(1);e.fillText(`${g.name.substring(0,10)}: ${g.duration.toFixed(2)}ms (${w}%)`,u+15,f),f+=v})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const r=this.passesFolder.addFolder(i.name||"Pass");r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Perf (ms)").disable().listen(),r.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;const t=e.profiler;if(!t)return;if(this.stats.fps=Math.round(t.fps||0),t.fpsHistory&&t.fpsHistory.length>0){let d=0,u=Math.min(t.fpsHistory.length,this.stats.avgFrames),f=[];for(let w=t.fpsHistory.length-u;w<t.fpsHistory.length;w++)d+=t.fpsHistory[w],f.push(t.fpsHistory[w]);this.stats.avgFps=Math.round(d/u),f.sort((w,m)=>w-m);let v=Math.floor(f.length*.01),g=Math.floor(f.length*.99);g>=f.length&&(g=f.length-1),this.stats.fps1Low=Math.round(f[v]||this.stats.fps),this.stats.fps1High=Math.round(f[g]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(t.metrics.cpuTime||0).toFixed(2);let i=0,r=0,n=0;t.metrics&&t.metrics.passes&&(this.stats.totalPasses=t.metrics.passes.length,t.metrics.passes.forEach(d=>{i+=d.drawCalls.length,r+=d.duration,d.drawCalls.forEach(u=>n+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=n,this.stats.gpuTotal=r.toFixed(3);const o=t.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},a=(o.vertices/(1024*1024)).toFixed(2),l=(o.renderTargets/(1024*1024)).toFixed(2),c=(o.textures/(1024*1024)).toFixed(2),h=(o.total/(1024*1024)).toFixed(2);this.stats.approxMemory=h+" MB",this.stats.memoryVertices=a+" MB",this.stats.memoryRenderTargets=l+" MB",this.stats.memoryTextures=c+" MB",this.showPassDetails}}class gt{constructor(e,t){this.editor=e,this.container=t,this.gui=new U({container:t,title:"Info & Credits",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const e={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(e,"openGithub").name("Made by Tanpi");const t=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};t.add(i,"move").name("Movement").disable(),t.add(i,"look").name("Camera").disable(),t.add(i,"hideUi").name("Ui").disable();const r=this.gui.addFolder("Asset Credits"),n={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};r.add(n,"openKenney").name("Kenney (kenney.nl)"),r.add(n,"openWill").name("will.nsq (Sketchfab)")}}class vt{constructor(e){this.game=e,this.wm=new Qe,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new ct(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new ut(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new ft(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const r=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new mt(this,r.content),this.wm.addNavItem("PASSES",r.window),r.window.style.display="none";const n=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new pt(this,n.content),this.wm.addNavItem("PROFILER",n.window);const o=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new gt(this,o.content),this.wm.addNavItem("INFO",o.window),o.window.style.display="none";let a=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(a=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(a,l=>{this.game.setViewports(l)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class wt{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const r=Math.PI/2-.01;this.rotation.x=Math.max(-r,Math.min(r,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*e,i=this.camera.transform,r=Math.sin(i.rotation.y),n=Math.cos(i.rotation.y),o=-r,a=-n,l=n,c=-r;let h=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(h-=1),this.keys.d&&(h+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),h!==0||d!==0){const f=Math.sqrt(h*h+d*d);h/=f,d/=f}i.position.x+=(o*d+l*h)*t,i.position.z+=(a*d+c*h)*t,i.position.y+=u*t}}const ge=`precision highp float;\r
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
`,xt=`precision highp float;\r
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
`,bt=`precision highp float;\r
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
`,yt=`precision highp float;\r
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
}`,Ct=`precision highp float;\r
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
}`,Et=`precision highp float;\r
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
}`,Tt=`precision highp float;\r
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
varying vec3 vWorldPos; // Pass world position to fragment for wave calculations\r
\r
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
    \r
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
    vNoise = ((p.y-worldPos.y)/udisplacement);\r
    vWorldPos = worldPos; // Pass original world position to fragment\r
\r
    worldPos = p;\r
}`,Ft=`precision highp float;\r
\r
#define FRAGMENT\r
varying float vNoise;\r
varying vec3 vWorldPos;\r
\r
uniform float uTime;\r
uniform float uSpeed;\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float udisplacement;\r
\r
uniform vec4 uWaveA;\r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
uniform vec3 uColor1; \r
uniform vec3 uColor2; \r
uniform vec3 uColor3; \r
\r
uniform float uColorBands; \r
\r
// --- Helper Functions ---\r
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
// Function to calculate height at any XZ coordinate\r
float getFullHeight(vec3 p) {\r
    float time = uTime * uSpeed;\r
    \r
    // 1. Gerstner Heights\r
    float h = 0.0;\r
    vec4 waves[3];\r
    waves[0] = uWaveA; waves[1] = uWaveB; waves[2] = uWaveC;\r
    \r
    for(int i = 0; i < 3; i++) {\r
        float k = 2.0 * 3.14159 / waves[i].w;\r
        float c = sqrt(9.8 / k);\r
        vec2 d = normalize(waves[i].xy);\r
        float f = k * (dot(d, p.xz) - c * time);\r
        h += (waves[i].z / k) * sin(f);\r
    }\r
    \r
    // 2. Noise Heights\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = p.xz * uScale;\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    float noiseSum = (n1 * 0.2) + (n2 * 0.5);\r
    \r
    return h + (smoothstep(-0.4, 0.4, noiseSum) * udisplacement);\r
}\r
\r
// This function mimics the vertex logic exactly\r
vec3 GerstnerWaveFull(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k);\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
    // The partial derivatives (slopes)\r
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
void fragment(inout vec4 color, inout vec3 normal, inout float emission)\r
{\r
    // 1. SETUP DERIVATIVE VECTORS\r
    vec3 tangent = vec3(1.0, 0.0, 0.0);\r
    vec3 binormal = vec3(0.0, 0.0, 1.0);\r
    vec3 p = vWorldPos; // Use the base world position\r
\r
    // 2. ACCUMULATE WAVE DISPLACEMENT AND DERIVATIVES\r
    vec3 displacement = vec3(0.0);\r
    displacement += GerstnerWaveFull(uWaveA, p, tangent, binormal);\r
    displacement += GerstnerWaveFull(uWaveB, p, tangent, binormal);\r
    displacement += GerstnerWaveFull(uWaveC, p, tangent, binormal);\r
\r
    // 3. NOISE CALCULATION (Exact match to Vertex)\r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = p.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5; \r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float noiseVal = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    float heightOffset = smoothstep(-0.4, 0.4, noiseVal);\r
\r
    // 4. GENERATE NORMAL\r
    // Important: We use the accumulated tangent and binormal from the waves\r
    // Note: Since noise doesn't have easy analytical derivatives here, \r
    // the cross product will be dominated by the Gerstner waves.\r
    normal = normalize(cross(binormal, tangent));\r
\r
    // 5. COLORING (Using the same height math)\r
    float totalY = displacement.y + heightOffset;\r
    float n = clamp(totalY / udisplacement, 0.0, 1.0);\r
    float quantizedN = floor(n * uColorBands) / uColorBands;\r
\r
    float blend1 = smoothstep(0.0, 0.5, quantizedN);\r
    vec3 waterBase = mix(uColor1, uColor2, blend1);\r
\r
    float blend2 = smoothstep(0.0, 2.0, quantizedN); // Matches your vertex logic\r
    vec3 finalColor = mix(waterBase, uColor3, blend2);\r
\r
    emission = blend2; \r
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
`,Me=`precision highp float;\r
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
        // #ifdef NORMAL\r
        //     normalfrag(normal)\r
        // #endif\r
\r
        gl_FragColor = vec4(normal * 0.5 + 0.5, linearDepth);\r
    } \r
    else\r
    {\r
        gl_FragColor = vec4(vPosition, 1.0);\r
    }\r
    // gl_FragDepth = 0.0;\r
}`,$=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),C=document.getElementById("glcanvas"),b=C.getContext("webgl2")||C.getContext("experimental-webgl");b||alert("Unable to initialize WebGL.");b.enable(b.DEPTH_TEST);b.depthFunc(b.LEQUAL);b.enable(b.CULL_FACE);b.cullFace(b.BACK);b.frontFace(b.CCW);b.getExtension("EXT_color_buffer_float");let le=new oe(b,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:b.NEAREST,magFilter:b.NEAREST}),W=new oe(b,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:b.NEAREST,magFilter:b.NEAREST}),te=new oe(b,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:b.NEAREST,magFilter:b.NEAREST}),ie=new oe(b,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:b.NEAREST,magFilter:b.NEAREST});const _t=new B(b,Se,Me),At=new B(b,ge,xt),Pt=new B(b,[Tt,Se],[Ft,Me]),St=new B(b,bt,yt),Mt=new B(b,ge,Ct),Rt=new B(b,ge,Et),Re=new Ve(b,"./Assets/Textures/colormap.png"),ve=new N(_t,"Ship Mat"),z=new N(Pt,"Water"),I=new N(St,"PPL Lighting"),L=new N(Mt,"Skybox"),we=new N(Rt,"PixelArt"),Dt=new N(At,"Screen");ve.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Re.texture,uRoughness:1});we.setUniforms({uPixelSize:4,uEdgeWidth:.5,uColorLevels:128,uDepthThreshold:.025,uNormalThreshold:.1,uSilhouetteDarkening:.2,uCreaseDarkening:.7});I.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03});L.setUniforms({uTopColor:[.063,.188,.82],uBottomColor:[1,.51,.32],uSunColor:[1,.33,.1],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.2,uCloudCoverage:.76,uCloudSpeed:.02,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const Lt={uWind:[1,0],uSpeed:.5,udisplacement:1.5,uScale:.2,uColor1:[.094,.271,.494],uColor2:[.196,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[.55,1],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[1,-4.66,.1,20.57],uColorBands:3,uRoughness:0};z.setUniforms(Lt);const Bt={Lighting:I,Skybox:L,PixelArt:we,Water:z,Ship:ve},V=new ke(b),M=new me,he=new me,de=[],A=new Ne(b),xe=new Ae(b,C.width,C.height,W,1,"GBuffer Pass");xe.clearColor=[.5,.5,1,1];xe.clearDepth=!0;A.addPass(xe);const be=new Ae(b,C.width,C.height,le,0,"Albedo Pass");be.clearColor=[0,0,0,1];be.clearDepth=!0;A.addPass(be);const ye=new He(b,C.width,C.height,I,ie,"Lighting Pass");ye.setInputBuffers(le.texture,W.texture);A.addPass(ye);const Ce=new Ge(b,C.width,C.height,L,ie,"Skybox Pass");Ce.setInputTexture(W.texture);A.addPass(Ce);const De=new je(b,C.width,C.height,we,te,"PixelArt Pass");De.setInputBuffers(ie.texture,W.texture);A.addPass(De);const re=new qe(b,C.width,C.height,te,"Wireframe Pass");re.setWireColor(0,1,0);re.setOpacity(1);A.addPass(re);const R=new We(b,C.width,C.height,Dt);R.setBuffer("Final",te.texture);R.setBuffer("Pixel",te.texture);R.setBuffer("Lit",ie.texture);R.setBuffer("Albedo",le.texture);R.setBuffer("Normal",W.texture);ye.lightCamera=he;A.addPass(R);function Le(){C.width=window.innerWidth*window.devicePixelRatio,C.height=window.innerHeight*window.devicePixelRatio,b.viewport(0,0,b.canvas.width,b.canvas.height),le.resize(C.width,C.height),W.resize(C.width,C.height),ie.resize(C.width,C.height),te.resize(C.width,C.height),A.resize(C.width,C.height);const s=C.width/C.height;M.setPerspective(.8,s,.1,1e3)}window.addEventListener("resize",Le);Le();const Ut=C.width/C.height;M.setPerspective(.8,Ut,.1,1e3);M.transform.position.set(-16.2,1.8,-47);M.transform.rotation.set(0,$?3.24:3.22,0);ne.load(b,"./Assets/3D/scene.obj").then(s=>{var e=new Q(V,ve,s,"Scene");e.transform.position.set(-15,-6,10),e.transform.scale.set(1,1,1),de.push(e)});Promise.all([ne.load(b,"./Assets/3D/LOD1.obj"),ne.load(b,"./Assets/3D/LOD2.obj"),ne.load(b,"./Assets/3D/LOD3.obj")]).then(([s,e,t])=>{const a=$?1:0,l=$?-1:2,c=$?e:s,h=$?"LOD2":"LOD1",d=new Q(V,z,c,`Water Floor [0,0] ${h}`);if(d.transform.position.set(0,-6.5,0),d.transform.scale.set(50,50,50),de.push(d),$)for(let u=0;u<=5;u++)for(let f=-u;f<=u;f++){if(f===0&&u===0)continue;const v=new Q(V,z,t,`Water Floor [${f},${u}] LOD3`);d.transform.add(v.transform),v.transform.setGlobalPosition(f*80,-6.5,u*80)}else for(let u=-5;u<=5;u++)for(let f=-5;f<=5;f++){if(u===0&&f===0)continue;const v=Math.sqrt(u*u+f*f),g=v<=a?s:v<=l?e:t,w=v<=a?1:v<=l?2:3,m=new Q(V,z,g,`Water Floor [${u},${f}] LOD${w}`);d.transform.add(m.transform),m.transform.setGlobalPosition(u*80,-6.5,f*80)}});const Ee=[{x:0,y:0,w:1,h:1,pass:"Final"}];R.setViewports(Ee);const J={gl:b,scene:de,camera:M,lightCamera:he,renderer:V,renderQueue:A,materials:Bt,viewportPass:R,wireframePass:re,textures:{ship:Re}};J.setViewports=s=>{Ee[0].pass=s};let O=null;$||(new vt(J),O=Ke.attach(A,V,J),J.profiler=O);const kt=new wt(M,C);window.addEventListener("keydown",s=>{s.key.toLowerCase()==="t"&&re.toggle()});const k=[.5,.8,.2],se=30;he.setOrthographic(-se,se,-se,se,1,100);let ue=0,Fe="";function Be(s){if(D.update(s),J.deltaTime=D.deltaTime,kt.update(D.deltaTime),z.setUniforms({uTime:D.time}),L.setUniforms({uTime:D.time}),I.uniforms.uLightDir&&I.uniforms.uLightDir.value){const t=I.uniforms.uLightDir.value,i=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);i>.001?(k[0]=t[0]/i,k[1]=t[1]/i,k[2]=t[2]/i):(k[0]=t[0],k[1]=t[1],k[2]=t[2])}M.updateView(),R.setViewports(Ee),M.updateProjection(),he.updateProjection(),L.uniforms.uSunColor&&Ce.setLight(k,L.uniforms.uSunColor.value,L.uniforms.uTopColor.value,L.uniforms.uBottomColor.value),A.execute(V,de,M);const e=document.getElementById("hud");if(e&&(ue++,ue>=6)){ue=0;const i=(D.unscaledDeltaTime>0?Math.round(1/D.unscaledDeltaTime):0).toString().padStart(3,"0");let r="";if(O&&O.fpsHistory&&O.fpsHistory.length>0){let o=0,a=O.fpsHistory.length,l=Math.min(a,60);for(let h=a-l;h<a;h++)o+=O.fpsHistory[h];r=` <br> Avg FPS: ${Math.round(o/l).toString().padStart(3,"0")}`}const n=(D.deltaTime*1e3).toFixed(2).padStart(6,"0");Fe=`FPS: ${i}${r}<br>Δ: ${n} ms`,e.innerHTML=Fe}requestAnimationFrame(Be)}requestAnimationFrame(Be);
