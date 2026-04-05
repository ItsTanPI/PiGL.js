(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();class se{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],i=this.data[2];return Math.sqrt(e*e+t*t+i*i)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class M{static identity(e){return B.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,i){return B.multiply(e,t,i)}static translate(e,t,i){return B.translate(e,t,i)}static scale(e,t,i){return B.scale(e,t,i)}static rotateX(e,t,i){return B.rotateX(e,t,i)}static rotateY(e,t,i){return B.rotateY(e,t,i)}static rotateZ(e,t,i){return B.rotateZ(e,t,i)}static invert(e,t){return B.invert(e,t)}static compose(e,t,i,r){return B.compose(e,t,i,r)}}const B={identity(n){return n.fill(0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n},multiply(n,e,t){let i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],l=e[5],d=e[6],h=e[7],c=e[8],u=e[9],f=e[10],v=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=t[0],b=t[1],C=t[2],E=t[3];return n[0]=y*i+b*a+C*c+E*g,n[1]=y*r+b*l+C*u+E*x,n[2]=y*s+b*d+C*f+E*m,n[3]=y*o+b*h+C*v+E*p,y=t[4],b=t[5],C=t[6],E=t[7],n[4]=y*i+b*a+C*c+E*g,n[5]=y*r+b*l+C*u+E*x,n[6]=y*s+b*d+C*f+E*m,n[7]=y*o+b*h+C*v+E*p,y=t[8],b=t[9],C=t[10],E=t[11],n[8]=y*i+b*a+C*c+E*g,n[9]=y*r+b*l+C*u+E*x,n[10]=y*s+b*d+C*f+E*m,n[11]=y*o+b*h+C*v+E*p,y=t[12],b=t[13],C=t[14],E=t[15],n[12]=y*i+b*a+C*c+E*g,n[13]=y*r+b*l+C*u+E*x,n[14]=y*s+b*d+C*f+E*m,n[15]=y*o+b*h+C*v+E*p,n},translate(n,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];if(e===n)n[12]=e[0]*i+e[4]*r+e[8]*s+e[12],n[13]=e[1]*i+e[5]*r+e[9]*s+e[13],n[14]=e[2]*i+e[6]*r+e[10]*s+e[14],n[15]=e[3]*i+e[7]*r+e[11]*s+e[15];else{let o=e[0],a=e[1],l=e[2],d=e[3],h=e[4],c=e[5],u=e[6],f=e[7],v=e[8],g=e[9],x=e[10],m=e[11];n[0]=o,n[1]=a,n[2]=l,n[3]=d,n[4]=h,n[5]=c,n[6]=u,n[7]=f,n[8]=v,n[9]=g,n[10]=x,n[11]=m,n[12]=o*i+h*r+v*s+e[12],n[13]=a*i+c*r+g*s+e[13],n[14]=l*i+u*r+x*s+e[14],n[15]=d*i+f*r+m*s+e[15]}return n},scale(n,e,t){let i=t.x!==void 0?t.x:t[0],r=t.y!==void 0?t.y:t[1],s=t.z!==void 0?t.z:t[2];return n[0]=e[0]*i,n[1]=e[1]*i,n[2]=e[2]*i,n[3]=e[3]*i,n[4]=e[4]*r,n[5]=e[5]*r,n[6]=e[6]*r,n[7]=e[7]*r,n[8]=e[8]*s,n[9]=e[9]*s,n[10]=e[10]*s,n[11]=e[11]*s,n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n},rotateX(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[4],o=e[5],a=e[6],l=e[7],d=e[8],h=e[9],c=e[10],u=e[11];return e!==n&&(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[4]=s*r+d*i,n[5]=o*r+h*i,n[6]=a*r+c*i,n[7]=l*r+u*i,n[8]=d*r-s*i,n[9]=h*r-o*i,n[10]=c*r-a*i,n[11]=u*r-l*i,n},rotateY(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[0],o=e[1],a=e[2],l=e[3],d=e[8],h=e[9],c=e[10],u=e[11];return e!==n&&(n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r-d*i,n[1]=o*r-h*i,n[2]=a*r-c*i,n[3]=l*r-u*i,n[8]=s*i+d*r,n[9]=o*i+h*r,n[10]=a*i+c*r,n[11]=l*i+u*r,n},rotateZ(n,e,t){let i=Math.sin(t),r=Math.cos(t),s=e[0],o=e[1],a=e[2],l=e[3],d=e[4],h=e[5],c=e[6],u=e[7];return e!==n&&(n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15]),n[0]=s*r+d*i,n[1]=o*r+h*i,n[2]=a*r+c*i,n[3]=l*r+u*i,n[4]=d*r-s*i,n[5]=h*r-o*i,n[6]=c*r-a*i,n[7]=u*r-l*i,n},invert(n,e){let t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],d=e[7],h=e[8],c=e[9],u=e[10],f=e[11],v=e[12],g=e[13],x=e[14],m=e[15],p=t*a-i*o,y=t*l-r*o,b=t*d-s*o,C=i*l-r*a,E=i*d-s*a,K=r*d-s*l,Q=h*g-c*v,J=h*x-u*v,ee=h*m-f*v,te=c*x-u*g,ie=c*m-f*g,re=u*m-f*x,F=p*re-y*ie+b*te+C*ee-E*J+K*Q;return F?(F=1/F,n[0]=(a*re-l*ie+d*te)*F,n[1]=(r*ie-i*re-s*te)*F,n[2]=(g*K-x*E+m*C)*F,n[3]=(u*E-c*K-f*C)*F,n[4]=(l*ee-o*re-d*J)*F,n[5]=(t*re-r*ee+s*J)*F,n[6]=(x*b-v*K-m*y)*F,n[7]=(h*K-u*b+f*y)*F,n[8]=(o*ie-a*ee+d*Q)*F,n[9]=(i*ee-t*ie-s*Q)*F,n[10]=(v*E-g*b+m*p)*F,n[11]=(c*b-h*E-f*p)*F,n[12]=(a*J-o*te-l*Q)*F,n[13]=(t*te-i*J+r*Q)*F,n[14]=(g*y-v*C-x*p)*F,n[15]=(h*C-c*y+u*p)*F,n):null},compose(n,e,t,i){let r=e.x!==void 0?e.x:e[0],s=e.y!==void 0?e.y:e[1],o=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],l=t.y!==void 0?t.y:t[1],d=t.z!==void 0?t.z:t[2],h=i.x!==void 0?i.x:i[0],c=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],f=Math.cos(l),v=Math.sin(l),g=Math.cos(a),x=Math.sin(a),m=Math.cos(d),p=Math.sin(d);return n[0]=(f*m-v*x*p)*h,n[1]=(f*p+v*x*m)*h,n[2]=-v*g*h,n[3]=0,n[4]=-g*p*c,n[5]=g*m*c,n[6]=x*c,n[7]=0,n[8]=(v*m+f*x*p)*u,n[9]=(v*p-f*x*m)*u,n[10]=f*g*u,n[11]=0,n[12]=r,n[13]=s,n[14]=o,n[15]=1,n}};class Ne{constructor(){this.position=new se(0,0,0),this.rotation=new se(0,0,0),this.scale=new se(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),M.identity(this.localMatrix),M.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.markDirty()}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const i=this.children.length-1;t!==i&&(this.children[t]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(M.identity(this.localMatrix),M.translate(this.localMatrix,this.localMatrix,this.position),M.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),M.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),M.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),M.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?M.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new se(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(e,t,i){if(!this.parent){this.position.set(e,t,i);return}this.parent.updateWorldMatrix();const r=new Float32Array(16);M.invert(r,this.parent.worldMatrix);const s=e,o=t,a=i,l=r[0]*s+r[4]*o+r[8]*a+r[12],d=r[1]*s+r[5]*o+r[9]*a+r[13],h=r[2]*s+r[6]*o+r[10]*a+r[14];this.position.set(l,d,h)}get globalScale(){this.updateWorldMatrix();const e=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),t=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),i=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new se(e,t,i)}}class N{constructor(e,t,i=null,r="GameObject"){this.name=r,this.active=!0,this.transform=new Ne,this.transform.gameObject=this,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const r=i||this.material;this.renderer&&r&&this.renderer.draw(this,e,t,r)}}class ve extends N{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,M.identity(this.projectionMatrix),M.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,r){this.fov=e,this.aspect=t,this.near=i,this.far=r,this.orthographic=!1;const s=1/Math.tan(e/2),o=this.projectionMatrix;o.fill(0),o[0]=s/t,o[5]=s,o[10]=(r+i)/(i-r),o[11]=-1,o[14]=2*r*i/(i-r)}setOrthographic(e,t,i,r,s,o){this.near=s,this.far=o,this.orthographic=!0,this.orthoSize=(r-i)/2;const a=this.projectionMatrix,l=1/(e-t),d=1/(i-r),h=1/(s-o);a.fill(0),a[0]=-2*l,a[5]=-2*d,a[10]=2*h,a[12]=(e+t)*l,a[13]=(r+i)*d,a[14]=(o+s)*h,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),M.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const i=this.viewMatrix,r=this.projectionMatrix;e.transform.updateWorldMatrix();const s=e.transform.worldMatrix,o=s[12],a=s[13],l=s[14],d=1,h=i[0]*o+i[4]*a+i[8]*l+i[12]*d,c=i[1]*o+i[5]*a+i[9]*l+i[13]*d,u=i[2]*o+i[6]*a+i[10]*l+i[14]*d,f=i[3]*o+i[7]*a+i[11]*l+i[15]*d,v=r[0]*h+r[4]*c+r[8]*u+r[12]*f,g=r[1]*h+r[5]*c+r[9]*u+r[13]*f;r[2]*h+r[6]*c+r[10]*u+r[14]*f;const x=r[3]*h+r[7]*c+r[11]*u+r[15]*f;if(x===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const m=v/x,p=g/x,y=(m+1)*.5,b=(p+1)*.5;return t?(t[0]=y,t[1]=b):t=[y,b],t}}class ${constructor(e,t,i,r=null,s=null){this.gl=e;const o=this.loadShader(e.VERTEX_SHADER,t),a=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,o);let l=!1;if(r&&s){const d=this.loadShader(36488,r),h=this.loadShader(36487,s);d&&h?(e.attachShader(this.program,d),e.attachShader(this.program,h),l=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}e.attachShader(this.program,a),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=l}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const r=this.gl,s=this.getUniformLocation(e);if(s){if(i){i==="1i"?r.uniform1i(s,t):i==="1f"?r.uniform1f(s,t):i==="2fv"?r.uniform2fv(s,t):i==="3fv"?r.uniform3fv(s,t):i==="4fv"?r.uniform4fv(s,t):i==="Matrix4fv"&&r.uniformMatrix4fv(s,!1,t);return}if(typeof t=="number")r.uniform1f(s,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:r.uniform2fv(s,t);break;case 3:r.uniform3fv(s,t);break;case 4:r.uniform4fv(s,t);break;case 16:r.uniformMatrix4fv(s,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;Array.isArray(t)&&(i=t.join(`
`));let r;try{if(r=this.gl.createShader(e),!r)return console.warn(`Shader type ${e} not supported`),null}catch(s){return console.warn(`Shader type ${e} not supported:`,s.message),null}return this.gl.shaderSource(r,i),this.gl.compileShader(r),this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS)?r:(console.error("Shader compile error:",this.gl.getShaderInfoLog(r)),this.gl.deleteShader(r),null)}}class Re{constructor(e,t,i,r,s=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=r,this.indices=s,this.count=s?s.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const r=e.getAttribLocation("aTexCoord");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const r=e.getAttribLocation("aNormal");r!==-1&&(t.enableVertexAttribArray(r),t.vertexAttribPointer(r,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class Ve{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),r=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new Re(e,t,i,r)}draw(e,t,i=void 0,r=null){const s=r||e.material;if(!s||!s.shader)return;const o=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(o.bindFramebuffer(o.FRAMEBUFFER,null),o.viewport(0,0,o.canvas.width,o.canvas.height)));const l=s.shader;l.use(),a.bind(l),l.setUniform("uProjectionMatrix",t.projectionMatrix),l.setUniform("uViewMatrix",t.viewMatrix),l.setUniform("uModelMatrix",e.transform.worldMatrix);for(const u in s.uniforms){const f=s.uniforms[u];let v=f.value,g=f.type;(v instanceof WebGLTexture||g==="1i"&&v&&typeof v=="object")&&o.bindTexture(o.TEXTURE_2D,v),l.setUniform(u,v,g)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const d=performance.now();a.draw();const c=performance.now()-d;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:c,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class W{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,r){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=i,s[2]=r}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,r])}}setVec4(e,t,i,r,s){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const o=this.uniforms[e].value;o[0]=t,o[1]=i,o[2]=r,o[3]=s}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,r,s])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}function We(n,e,t){var s;const i={RGBA:{8:{internalFormat:n.RGBA8,glFormat:n.RGBA,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RGBA16F,glFormat:n.RGBA,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RGBA32F,glFormat:n.RGBA,glType:n.FLOAT}},RGB:{8:{internalFormat:n.RGB8,glFormat:n.RGB,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RGB16F,glFormat:n.RGB,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RGB32F,glFormat:n.RGB,glType:n.FLOAT}},RG:{8:{internalFormat:n.RG8,glFormat:n.RG,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.RG16F,glFormat:n.RG,glType:n.HALF_FLOAT},"32f":{internalFormat:n.RG32F,glFormat:n.RG,glType:n.FLOAT}},R:{8:{internalFormat:n.R8,glFormat:n.RED,glType:n.UNSIGNED_BYTE},"16f":{internalFormat:n.R16F,glFormat:n.RED,glType:n.HALF_FLOAT},"32f":{internalFormat:n.R32F,glFormat:n.RED,glType:n.FLOAT}}},r=(s=i[e])==null?void 0:s[t];return r||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),i.RGBA[8])}class de{constructor(e,t,i,r={}){this.gl=e,this.width=t,this.height=i,this.format=r.format??"RGBA",this.precision=r.precision??"8",this.hasDepth=r.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:s,glFormat:o,glType:a}=We(e,this.format,this.precision);this._internalFormat=s,this._glFormat=o,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,s,t,i,0,o,a,null);const l=r.minFilter??e.LINEAR,d=r.magFilter??e.LINEAR,h=r.wrapS??e.CLAMP_TO_EDGE,c=r.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const i=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&i.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,i),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*i,this.hasDepth&&(e+=this.width*this.height*2),e}}class Ie{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const R=new Ie;class G{static async load(e,t){const r=await(await fetch(t)).text(),s=this.parse(e,r);return new Re(e,s.positions,s.uvs,s.normals)}static parse(e,t){const i=[],r=[],s=[],o=[],a=[],l=[],d=t.split(`
`);for(let h of d){if(h=h.trim(),h.startsWith("#")||h==="")continue;const c=h.split(/\s+/),u=c[0];if(u==="v")i.push([parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])]);else if(u==="vt")r.push([parseFloat(c[1]),parseFloat(c[2])]);else if(u==="vn")s.push([parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])]);else if(u==="f"){const f=c.slice(1);for(let v=1;v<f.length-1;v++){const g=f[0],x=f[v],m=f[v+1];this.processVertex(g,i,r,s,o,a,l),this.processVertex(x,i,r,s,o,a,l),this.processVertex(m,i,r,s,o,a,l)}}}return{positions:new Float32Array(o),uvs:new Float32Array(a),normals:new Float32Array(l),vertexCount:o.length/3}}static processVertex(e,t,i,r,s,o,a){const l=e.split("/"),d=parseInt(l[0])-1,h=l[1]?parseInt(l[1])-1:-1,c=l[2]?parseInt(l[2])-1:-1,u=t[d];if(s.push(u[0],u[1],u[2]),h>=0){const f=i[h];o.push(f[0],f[1])}else o.push(0,0);if(c>=0){const f=r[c];a.push(f[0],f[1],f[2])}else a.push(0,1,0)}}class He{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let i=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(i=i*1.33),Math.round(i)}}class je{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const r of this.passes)r.enabled&&r.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class ce{constructor(e,t,i,r="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=r,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}const Xe=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,Ge=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class De extends ce{constructor(e,t,i,r=null,s=0,o="ObjectPass"){super(e,t,i,o),this.renderTarget=r,this.renderMode=s,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new $(e,Xe,Ge);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const r=this.camera||i;this.camera&&r.updateView();const s=performance.now();if(e.resetDrawCalls(),this.renderTarget){const l=this.gl;l.bindFramebuffer(l.FRAMEBUFFER,this.renderTarget.framebuffer);const d=this.clearDepth?this._attachmentsWithDepth:[l.COLOR_ATTACHMENT0];l.invalidateFramebuffer(l.FRAMEBUFFER,d),l.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);this.clearColor!=null&&this._drawClearQuad();const o=l=>{if(l.active&&(l.material&&l.material.setUniform("uRenderMode",this.renderMode,"1i"),l.render(r,this.renderTarget),l.transform&&l.transform.children))for(const d of l.transform.children)d.gameObject&&o(d.gameObject)};if(t&&Array.isArray(t))for(const l of t)o(l);else t&&t.render&&t.render(r,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const a=e.resetDrawCalls();this.drawCount=a.count,this.drawDetails=a.details,this.executionTime=performance.now()-s}}class Be{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const r=this.gl;let s,o=t;if(e.uniforms&&e.shader){s=e.shader,o={};for(const h in e.uniforms)o[h]=e.uniforms[h].value;t&&(t.bind||t===null)&&(i=t)}else s=e;i?i.bind():(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,r.canvas.width,r.canvas.height)),s.use(),r.bindBuffer(r.ARRAY_BUFFER,this.buffer);const a=s.getAttribLocation("aVertexPosition");a!==-1&&(r.enableVertexAttribArray(a),r.vertexAttribPointer(a,2,r.FLOAT,!1,16,0));const l=s.getAttribLocation("aTexCoord");l!==-1&&(r.enableVertexAttribArray(l),r.vertexAttribPointer(l,2,r.FLOAT,!1,16,8));let d=0;for(const h in o){const c=o[h];c instanceof WebGLTexture?(r.activeTexture(r.TEXTURE0+d),r.bindTexture(r.TEXTURE_2D,c),s.setUniform(h,d,"1i"),d++):s.setUniform(h,c)}r.drawArrays(r.TRIANGLE_STRIP,0,4);for(let h=0;h<d;h++)r.activeTexture(r.TEXTURE0+h),r.bindTexture(r.TEXTURE_2D,null)}}class Ye extends ce{constructor(e,t,i,r){super(e,t,i,"ViewportComposition"),this.material=r,this.fullScreenQuad=new Be(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const r of this.viewports){const s=Math.floor(r.x*this.width),o=Math.floor(r.y*this.height),a=Math.floor(r.w*this.width),l=Math.floor(r.h*this.height);this.gl.viewport(s,o,a,l);let d=this.buffers.Final;const h=r.pass;this.buffers[h]&&(d=this.buffers[h]),this.material.setUniform("uTexture",d),this.fullScreenQuad.draw(this.material)}}}class xe extends ce{constructor(e,t,i,r,s=null,o="ScreenPass"){super(e,t,i,o),this.material=r,this.renderTarget=s,this.fullScreenQuad=new Be(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,i])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const r=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[o,a]of Object.entries(this.inputs))this.material.setUniform(o,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const s=e.resetDrawCalls();this.drawCount=s.count,this.drawDetails=s.details,this.executionTime=performance.now()-r}}class qe extends xe{constructor(e,t,i,r,s=null,o="Lighting Pass"){super(e,t,i,r,s,o),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){M.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),M.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),M.invert(this._invCamViewProj,this._camViewProj);const i=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}}class Ze extends xe{constructor(e,t,i,r,s=null,o="Skybox Pass"){super(e,t,i,r,s,o),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){M.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),M.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,r,s){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uMidColor:r,uBottomColor:s})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class Ke extends xe{constructor(e,t,i,r,s,o="PixelArt Pass"){super(e,t,i,r,s,o),this._resolutionBuffer=new Float32Array([t,i])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}const Qe=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
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
`,Je=`precision highp float;\r
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
}`;class et extends ce{constructor(e,t,i,r=null,s="Wireframe Pass"){super(e,t,i,s),this.target=r,this.enabled=!1;const o=new $(e,Qe,Je);this.material=new W(o,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=e,this._polygonMode=null}setWireColor(e,t,i){this.material.setVec3("uWireColor",e,t,i)}setOpacity(e){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,e)))}setShowBackfaces(e){this.material.setUniform("uShowBackfaces",e?1:0,"1i")}execute(e,t,i){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const r=this.material.shader;r.use(),r.setUniform("uProjectionMatrix",i.projectionMatrix),r.setUniform("uViewMatrix",i.viewMatrix);const s=o=>{if(o.active){if(o.transform.updateWorldMatrix(),o.mesh){r.setUniform("uModelMatrix",o.transform.worldMatrix);for(const l in this.material.uniforms){const d=this.material.uniforms[l];r.setUniform(l,d.value,d.type)}const a=o.mesh;a.bind(r),a.indices&&a.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,a.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,a.count)}if(o.transform&&o.transform.children)for(const a of o.transform.children)a.gameObject&&s(a.gameObject)}};for(const o of t)s(o)}resize(e,t){this.width=e,this.height=t,this.target&&this.target.resize(e,t)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}class tt{constructor(e=null){this.gameContext=e,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(t),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes.length=0}endFrame(){console.log(),this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(e,t){this.passHistory||(this.passHistory={}),this.passHistory[e]||(this.passHistory[e]=[]),this.passHistory[e].push(t),this.passHistory[e].length>300&&this.passHistory[e].shift()}recordDrawCall(e,t,i,r,s,o=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:s-r,vertices:o})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let e=0,t=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(s=>{s.drawCalls.forEach(o=>{e+=(o.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(s=>{if(s.renderTarget&&s.renderTarget.getMemorySize){const o=s.renderTarget.getMemorySize();t+=o}}),this.gameContext){if(this.gameContext.textures)for(const s in this.gameContext.textures){const o=this.gameContext.textures[s];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.textureCache)for(const s in this.gameContext.textureCache){const o=this.gameContext.textureCache[s];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const s in this.gameContext.assets.textures){const o=this.gameContext.assets.textures[s];if(o&&o.getMemorySize){const a=o.getMemorySize();a>0&&(i+=a)}}}const r=e+t+i;return this.metrics.memory={vertices:e,renderTargets:t,textures:i,total:r},this.metrics.memory}}class it{static attach(e,t,i=null){const r=new tt(i),s=e.execute.bind(e);e.execute=function(a,l,d){r.enabled&&r.beginFrame();const h=e.passes||[];for(let c=0;c<h.length;c++){const u=h[c];if(!u.__profilerInstrumented){const f=u.execute.bind(u);u.execute=function(v,g,x){const m=u.name||"Unnamed Pass";r.enabled&&(r.beginPass(m),v.currentPassName=m,r.devToolsEnabled&&performance.mark(`PassStart-${m}`)),f(v,g,x),r.enabled&&(r.endPass(),v.currentPassName=null,r.devToolsEnabled&&(performance.mark(`PassEnd-${m}`),performance.measure(`Pass: ${m}`,`PassStart-${m}`,`PassEnd-${m}`),performance.clearMarks(`PassStart-${m}`),performance.clearMarks(`PassEnd-${m}`)))},u.__profilerInstrumented=!0}}s(a,l,d),r.enabled&&(r.endFrame(),r.updateMemoryMetrics())};const o=t.draw.bind(t);return t.draw=function(a,l,d,h){if(!r.enabled){o(a,l,d,h);return}const c=a?a.name:"Unknown",u=h?h.name:"Unknown";r.devToolsEnabled&&performance.mark(`DrawStart-${c}`);const f=performance.now();o(a,l,d,h);const v=performance.now();r.devToolsEnabled&&(performance.mark(`DrawEnd-${c}`),performance.measure(`Draw: ${c} [${u}]`,`DrawStart-${c}`,`DrawEnd-${c}`),performance.clearMarks(`DrawStart-${c}`),performance.clearMarks(`DrawEnd-${c}`));const g=a&&a.mesh?a.mesh.count:6;r.recordDrawCall(c,u,0,f,v,g)},r.disable(),r}}class rt{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const r=t.style.display==="none";t.style.display=r?"flex":"none",i.style.background=r?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(r=>{const s=document.createElement("option");s.value=r,s.text=r,i.appendChild(s)}),i.onchange=r=>t(r.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,r,s){const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${r}px`,height:`${s}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const l=document.createElement("span");l.innerHTML="×",Object.assign(l.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),l.onclick=()=>{o.style.display="none"},l.onmouseover=()=>{l.style.color="#fff"},l.onmouseout=()=>{l.style.color="#888"},a.appendChild(l);const d=document.createElement("div");d.classList.add("window-content"),Object.assign(d.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const h=document.createElement("div");return Object.assign(h.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),o.appendChild(a),o.appendChild(d),o.appendChild(h),this.container.appendChild(o),this.addDragLogic(o,a),this.addResizeLogic(o,h),{content:d,window:o}}addResizeLogic(e,t){let i=!1,r,s,o,a;t.addEventListener("mousedown",h=>{h.preventDefault(),h.stopPropagation(),i=!0,o=h.clientX,a=h.clientY,r=e.offsetWidth,s=e.offsetHeight,document.addEventListener("mousemove",l),document.addEventListener("mouseup",d)});const l=h=>{if(!i)return;const c=r+(h.clientX-o),u=s+(h.clientY-a);c>100&&(e.style.width=c+"px"),u>100&&(e.style.height=u+"px")},d=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",d)}}addDragLogic(e,t){let i=!1,r,s,o,a;t.addEventListener("mousedown",h=>{h.target.tagName!=="BUTTON"&&(i=!0,r=h.clientX,s=h.clientY,o=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",l),document.addEventListener("mouseup",d),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(c=>c.style.zIndex="9999"),e.style.zIndex="10000"))});const l=h=>{if(!i)return;let c=o+(h.clientX-r),u=a+(h.clientY-s);const f=20;c<f&&(c=0),u<f&&(u=0),Math.abs(window.innerWidth-(c+e.offsetWidth))<f&&(c=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<f&&(u=window.innerHeight-e.offsetHeight),e.style.left=c+"px",e.style.top=u+"px"},d=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",d)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class D{constructor(e,t,i,r,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),D.nextNameID=D.nextNameID||0,this.$name.id=`lil-gui-name-${++D.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class st extends D{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ge(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const nt={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:ge,toHexString:ge},oe={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},ot={isPrimitive:!1,match:n=>Array.isArray(n)||ArrayBuffer.isView(n),fromHexString(n,e,t=1){const i=oe.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return oe.toHexString(r)}},at={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=oe.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const r=n*i<<16^e*i<<8^t*i<<0;return oe.toHexString(r)}},lt=[nt,oe,ot,at];function ht(n){return lt.find(e=>e.match(n))}class dt extends D{constructor(e,t,i,r){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ht(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=ge(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class me extends D{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ct extends D{constructor(e,t,i,r,s,o){super(e,t,i,"lil-number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let p=parseFloat(this.$input.value);isNaN(p)||(this._stepExplicit&&(p=this._snap(p)),this.setValue(this._clamp(p)))},i=p=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+p),this.$input.value=this.getValue())},r=p=>{p.key==="Enter"&&this.$input.blur(),p.code==="ArrowUp"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p))),p.code==="ArrowDown"&&(p.preventDefault(),i(this._step*this._arrowKeyMultiplier(p)*-1))},s=p=>{this._inputFocused&&(p.preventDefault(),i(this._step*this._normalizeMouseWheel(p)))};let o=!1,a,l,d,h,c;const u=5,f=p=>{a=p.clientX,l=d=p.clientY,o=!0,h=this.getValue(),c=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",g)},v=p=>{if(o){const y=p.clientX-a,b=p.clientY-l;Math.abs(b)>u?(p.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&g()}if(!o){const y=p.clientY-d;c-=y*this._step*this._arrowKeyMultiplier(p),h+c>this._max?c=this._max-h:h+c<this._min&&(c=this._min-h),this._snapClampSetValue(h+c)}d=p.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",g)},x=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(m,p,y,b,C)=>(m-p)/(y-p)*(C-b)+b,t=m=>{const p=this.$slider.getBoundingClientRect();let y=e(m,p.left,p.right,this._min,this._max);this._snapClampSetValue(y)},i=m=>{this._setDraggingStyle(!0),t(m.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=m=>{t(m.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const d=m=>{m.preventDefault(),this._setDraggingStyle(!0),t(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):d(m),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",u))},c=m=>{if(o){const p=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(p)>Math.abs(y)?d(m):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u))}else m.preventDefault(),t(m.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),v=400;let g;const x=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(f,v)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ut extends D{constructor(e,t,i,r){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class ft extends D{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var mt=`.lil-gui {
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
}`;function pt(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Se=!1;class I{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Se&&a&&(pt(mt),Se=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(e,t,i,r,s){if(Object(i)===i)return new ut(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new ct(this,e,t,i,r,s);case"boolean":return new st(this,e,t);case"string":return new ft(this,e,t);case"function":return new me(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new dt(this,e,t,i)}addFolder(e){const t=new I({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof me||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof me)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class gt{constructor(e,t){this.editor=e,this.gui=new I({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(o=>o.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera");const r=(o,a=null)=>{if(!o)return;const l=a||this.gui,d=o.name||"Object";if(l.add({select:()=>this.editor.selectObject(o)},"select").name(d),o.transform&&o.transform.children&&o.transform.children.length>0){const h=l.addFolder(`${d} Children`);for(const c of o.transform.children)c.gameObject&&r(c.gameObject,h)}};(this.editor.game.scene||[]).forEach((o,a)=>{o&&r(o)})}}class vt{constructor(e,t){this.editor=e,this.container=t,this.gui=new I({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(s=>s.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject",r=this.gui.addFolder("Object Settings");if(r.add(t,"name").name("Name").listen(),typeof t.active<"u"&&r.add(t,"active").name("Active").listen(),t.transform){const s=t.transform,o=this.gui.addFolder(`Transform: ${i}`),a=o.addFolder("Position");a.add(s.position,"x").step(.1).listen().name("X"),a.add(s.position,"y").step(.1).listen().name("Y"),a.add(s.position,"z").step(.1).listen().name("Z");const l=o.addFolder("Rotation");l.add(s.rotation,"x").step(.1).listen().name("X"),l.add(s.rotation,"y").step(.1).listen().name("Y"),l.add(s.rotation,"z").step(.1).listen().name("Z");const d=o.addFolder("Scale");d.add(s.scale,"x").step(.1).listen().name("X"),d.add(s.scale,"y").step(.1).listen().name("Y"),d.add(s.scale,"z").step(.1).listen().name("Z")}if(t instanceof ve){const s=this.gui.addFolder("Camera Settings");s.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const o=s.addFolder("Perspective");o.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),s.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),s.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),s.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),o.open()}if(t.material){const s=this.gui.addFolder("Material");s.add(t.material,"name").name("Material Name").disable().listen(),s.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}if(t.transform&&t.transform.children&&t.transform.children.length>0){const s=this.gui.addFolder("Children");t.transform.children.forEach((o,a)=>{if(o.gameObject){const l=o.gameObject,d=l.name||`Child ${a}`;s.add({select:()=>this.editor.selectObject(l)},"select").name(d)}}),s.open()}}}class xt{constructor(e,t){this.editor=e,this.container=t,this.gui=new I({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(r=>r.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const r in t){const s=t[r];i.add({select:()=>this.inspect(s)},"select").name(r)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(r=>r.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const r=e.uniforms[i],s=r.value;if(r.type,Array.isArray(s)||s instanceof Float32Array)if(i.toLowerCase().includes("color")&&(s.length===3||s.length===4))t.addColor(r,"value").name(i).listen();else{const a=t.addFolder(i),l=["x","y","z","w"];for(let d=0;d<s.length;d++){const h={get val(){return s[d]},set val(c){s[d]=c}};a.add(h,"val").step(.01).name(l[d]||`[${d}]`).listen()}}else if(typeof s=="number"){const o={get val(){return r.value},set val(l){r.value=l}};let a=t.add(o,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else s instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class wt{constructor(e,t){this.editor=e,this.container=t,this.gui=new I({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,r)=>{const s=this.gui.addFolder(`${r}: ${i.name||"Pass"}`);if(s.add(i,"enabled").name("Active"),s.add(i,"drawCount").name("Draw Calls").disable().listen(),s.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const l={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(d){i.clearColor[0]=d[0],i.clearColor[1]=d[1],i.clearColor[2]=d[2]}};s.addColor(l,"color").name("Clear Color")}i.renderTarget?s.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():s.add({info:"Screen"},"info").name("Target").disable(),i.material&&s.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const o={show:!1},a=s.addFolder("Performance Details");a.add(o,"show").name("List Draw Calls").onChange(l=>{l?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,r)=>{const s=e.addFolder(`Draw ${r}: ${i.object}`);s.add(i,"material").name("Material").disable(),s.add(i,"shader").name("Shader").disable(),s.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class yt{constructor(e,t){this.editor=e,this.container=t,this.gui=new I({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!1,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const e=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(t=>{e&&e.profiler&&(t?e.profiler.enable():e.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(t=>{e&&e.profiler&&(e.profiler.devToolsEnabled=t)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const e=this.frameTimeCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled||!t.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,r=this.frameTimeCanvas.height;e.clearRect(0,0,i,r);const s=Math.min(t.frameTimeHistory.length,this.stats.avgFrames);if(s<2)return;const o=[];for(let h=t.frameTimeHistory.length-s;h<t.frameTimeHistory.length;h++)o.push(t.frameTimeHistory[h]);let a=0,l=100;const d=l-a;e.beginPath(),e.strokeStyle="#4363d8",e.lineWidth=1.5;for(let h=0;h<o.length;h++){const c=h/(o.length-1)*i,u=r-(o[h]-a)/d*r*.8-r*.1;h===0?e.moveTo(c,u):e.lineTo(c,u)}e.stroke(),e.fillStyle="#fff",e.font="10px monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`Max: ${l.toFixed(1)}ms`,5,5),e.textBaseline="bottom",e.fillText(`Min: ${a.toFixed(1)}ms`,5,r-5),e.textAlign="right",e.textBaseline="top",e.fillText(`Delta time: ${o[s-1].toFixed(2)}`,i-5,5)}drawGraph(){const e=this.graphCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,r=this.graphCanvas.height;if(e.clearRect(0,0,i,r),!t.metrics||!t.metrics.passes||t.metrics.passes.length===0)return;const s=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let o=[],a=0;if(this.stats.pieMode==="Average"){let g=0;const x=this.stats.avgFrames;for(const m in t.passHistory){const p=t.passHistory[m];if(p.length>0){let y=0,b=Math.min(p.length,x);for(let E=p.length-b;E<p.length;E++)y+=p[E];const C=y/b;o.push({name:m,duration:C,color:s[g%s.length]}),a+=C}g++}}else t.metrics.passes.forEach((g,x)=>{o.push({name:g.name,duration:g.duration,color:s[x%s.length]}),a+=g.duration});if(a<=0)return;const l=i*.3,d=r/2,h=Math.max(0,Math.min(l,d)-10);if(h<=0)return;let c=-.5*Math.PI;o.forEach(g=>{if(g.duration<=0)return;const x=g.duration/a*2*Math.PI;if(e.beginPath(),e.moveTo(l,d),e.arc(l,d,h,c,c+x),e.closePath(),e.fillStyle=g.color,e.fill(),x>.3){const m=c+x/2,p=l+Math.cos(m)*(h*.6),y=d+Math.sin(m)*(h*.6);e.fillStyle="#000",e.font="10px bold sans-serif",e.textAlign="center",e.textBaseline="middle";const b=g.name.replace("Pass","").substring(0,6);e.fillText(b,p,y)}c+=x});const u=l+h+20;let f=20;const v=16;e.textAlign="left",e.font="10px monospace",o.forEach(g=>{e.fillStyle=g.color,e.fillRect(u,f-8,10,10),e.fillStyle="#fff";const x=(g.duration/a*100).toFixed(1);e.fillText(`${g.name.substring(0,10)}: ${g.duration.toFixed(2)}ms (${x}%)`,u+15,f),f+=v})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const r=this.passesFolder.addFolder(i.name||"Pass");r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Perf (ms)").disable().listen(),r.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;const t=e.profiler;if(!t)return;if(this.stats.fps=Math.round(t.fps||0),t.fpsHistory&&t.fpsHistory.length>0){let c=0,u=Math.min(t.fpsHistory.length,this.stats.avgFrames),f=[];for(let x=t.fpsHistory.length-u;x<t.fpsHistory.length;x++)c+=t.fpsHistory[x],f.push(t.fpsHistory[x]);this.stats.avgFps=Math.round(c/u),f.sort((x,m)=>x-m);let v=Math.floor(f.length*.01),g=Math.floor(f.length*.99);g>=f.length&&(g=f.length-1),this.stats.fps1Low=Math.round(f[v]||this.stats.fps),this.stats.fps1High=Math.round(f[g]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(t.metrics.cpuTime||0).toFixed(2);let i=0,r=0,s=0;t.metrics&&t.metrics.passes&&(this.stats.totalPasses=t.metrics.passes.length,t.metrics.passes.forEach(c=>{i+=c.drawCalls.length,r+=c.duration,c.drawCalls.forEach(u=>s+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=s,this.stats.gpuTotal=r.toFixed(3);const o=t.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},a=(o.vertices/(1024*1024)).toFixed(2),l=(o.renderTargets/(1024*1024)).toFixed(2),d=(o.textures/(1024*1024)).toFixed(2),h=(o.total/(1024*1024)).toFixed(2);this.stats.approxMemory=h+" MB",this.stats.memoryVertices=a+" MB",this.stats.memoryRenderTargets=l+" MB",this.stats.memoryTextures=d+" MB",this.showPassDetails}}class bt{constructor(e,t){this.editor=e,this.container=t,this.gui=new I({container:t,title:"Info & Credits",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const e={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(e,"openGithub").name("Made by Tanpi");const t=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};t.add(i,"move").name("Movement").disable(),t.add(i,"look").name("Camera").disable(),t.add(i,"hideUi").name("Ui").disable();const r=this.gui.addFolder("Asset Credits"),s={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};r.add(s,"openKenney").name("Kenney (kenney.nl)"),r.add(s,"openWill").name("will.nsq (Sketchfab)")}}class Ct{constructor(e){this.game=e,this.wm=new rt,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new gt(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new vt(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new xt(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const r=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new wt(this,r.content),this.wm.addNavItem("PASSES",r.window),r.window.style.display="none";const s=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new yt(this,s.content),this.wm.addNavItem("PROFILER",s.window),s.window.style.display="none";const o=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new bt(this,o.content),this.wm.addNavItem("INFO",o.window),o.window.style.display="none";let a=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(a=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(a,l=>{this.game.setViewports(l)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class Et{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const r=Math.PI/2-.01;this.rotation.x=Math.max(-r,Math.min(r,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*e,i=this.camera.transform,r=Math.sin(i.rotation.y),s=Math.cos(i.rotation.y),o=-r,a=-s,l=s,d=-r;let h=0,c=0,u=0;if(this.keys.w&&(c+=1),this.keys.s&&(c-=1),this.keys.a&&(h-=1),this.keys.d&&(h+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),h!==0||c!==0){const f=Math.sqrt(h*h+c*c);h/=f,c/=f}i.position.x+=(o*c+l*h)*t,i.position.z+=(a*c+d*h)*t,i.position.y+=u*t}}class Tt extends N{constructor(e,t,i,r){super(e,t,i,r),this.velocity={x:0,y:0,z:0},this.currentDirection={x:1,y:0,z:0},this.speed=0,this.avoidanceRadius=3,this.avoidanceForce=.5}update(e,t,i,r,s){const o={x:t.x*i*this.speed,z:t.z*i*this.speed},a=this.calculateAvoidance(s);this.velocity.x=o.x+a.x,this.velocity.z=o.z+a.z,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.wrapBounds(r)}calculateAvoidance(e){const t={x:0,z:0};if(!e||!Array.isArray(e))return t;for(let i of e){if(i===this||!i.transform)continue;const r=this.transform.position.x-i.transform.position.x,s=this.transform.position.z-i.transform.position.z,o=r*r+s*s,a=this.avoidanceRadius+(i.avoidanceRadius||1);if(o<a*a&&o>.01){const l=Math.sqrt(o),d=this.avoidanceForce/(l+.1);t.x+=r/l*d,t.z+=s/l*d}}return t}wrapBounds(e){const t=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,t.x>e.maxX?t.x=e.minX+(t.x-e.maxX):t.x<e.minX&&(t.x=e.maxX+(t.x-e.minX)),t.z>e.maxZ?t.z=e.minZ+(t.z-e.maxZ):t.z<e.minZ&&(t.z=e.maxZ+(t.z-e.minZ))}}class Ft extends N{constructor(e,t,i,r){super(e,t,i,r),this.velocity={x:0,y:0,z:0},this.forwardDirection={x:0,y:0,z:0},this.speed=0,this.heading=0,this.avoidanceRadius=5,this.avoidanceForce=1,this.viewRadius=20,this.maxTurnSpeed=Math.PI*.5,this.targetHeading=Math.random()*Math.PI*2,this.preferredDirection={x:0,y:0,z:1},this.wanderHeading=this.targetHeading,this.steeringInfluence=0,this.boundsBuffer=15,this.centerAttraction=.3,this.cohesionRadius=30,this.separationRadius=8,this.cohesionWeight=.4,this.separationWeight=.4}update(e,t,i){this.updateWandering(e,t),this.updateSteering(i,t);const r=this.speed/10*Math.PI;this.heading=this.lerpAngle(this.heading,this.targetHeading,r*e),this.forwardDirection.x=Math.sin(this.heading),this.forwardDirection.z=Math.cos(this.heading),this.velocity.x=this.forwardDirection.x*this.speed,this.velocity.z=this.forwardDirection.z*this.speed,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.enforceBounds(t),this.transform.rotation.y=this.heading}updateWandering(e,t){this.steeringInfluence=Math.sin(R.time*.628)*.5,this.wanderHeading+=(Math.random()-.5)*.001*e}updateSteering(e,t){if(this.isShipNearby(e)){const r=this.calculateAvoidanceHeading(e);this.targetHeading=r}else{const r=this.calculateCenterAttraction(),s=this.calculateCohesion(e),o=this.calculateSeparation(e),a=this.calculateBoundsHeading(t);let l;if(a!==null)l=a;else if(s!==null||o!==null){let d=0,h=0;s!==null&&(d+=Math.sin(s)*this.cohesionWeight,h+=Math.cos(s)*this.cohesionWeight),o!==null&&(d+=Math.sin(o)*this.separationWeight,h+=Math.cos(o)*this.separationWeight),d+=Math.sin(r)*.1,h+=Math.cos(r)*.1,l=Math.atan2(d,h)}else{const d=this.wanderHeading,h=this.steeringInfluence*.2;let c=Math.sin(d+h)*.7,u=Math.cos(d+h)*.7;c+=Math.sin(r)*this.centerAttraction,u+=Math.cos(r)*this.centerAttraction,l=Math.atan2(c,u)}this.targetHeading=l}}isShipNearby(e){if(!e||!Array.isArray(e))return!1;const t=this.viewRadius*1.5;for(let i of e){if(i===this||!i.transform||i.constructor.name!=="Ship")continue;const r=i.transform.position.x-this.transform.position.x,s=i.transform.position.z-this.transform.position.z;if(r*r+s*s<t*t)return!0}return!1}calculateCenterAttraction(){const e=this.transform.position,t={x:-e.x,z:-e.z},i=Math.sqrt(t.x*t.x+t.z*t.z);return i<.1?Math.atan2(0,1):Math.atan2(t.x/i,t.z/i)}calculateCohesion(e){if(!e||!Array.isArray(e))return null;let t=[];const i=this.transform.position;for(let a of e){if(a===this||!a.transform||a.constructor.name!=="Ship")continue;const l=a.transform.position.x-i.x,d=a.transform.position.z-i.z,h=l*l+d*d;h<this.cohesionRadius*this.cohesionRadius&&h>.01&&t.push({dx:l,dz:d,dist:Math.sqrt(h)})}if(t.length===0)return null;let r=0,s=0;for(let a of t)r+=a.dx/a.dist,s+=a.dz/a.dist;r/=t.length,s/=t.length;const o=Math.sqrt(r*r+s*s);return o<.1?null:Math.atan2(r/o,s/o)}calculateSeparation(e){if(!e||!Array.isArray(e))return null;let t={x:0,z:0};const i=this.transform.position;let r=!1;for(let o of e){if(o===this||!o.transform||o.constructor.name!=="Ship")continue;const a=i.x-o.transform.position.x,l=i.z-o.transform.position.z,d=a*a+l*l;if(d<this.separationRadius*this.separationRadius&&d>.01){const h=Math.sqrt(d),c=(this.separationRadius-h)/this.separationRadius;t.x+=a/h*c,t.z+=l/h*c,r=!0}}if(!r)return null;const s=Math.sqrt(t.x*t.x+t.z*t.z);return s<.1?null:Math.atan2(t.x/s,t.z/s)}calculateAvoidanceHeading(e){let t=0,i=0;if(!e||!Array.isArray(e))return Math.atan2(this.forwardDirection.x,this.forwardDirection.z);for(let o of e){if(o===this||!o.transform)continue;const a=o.transform.position.x-this.transform.position.x,l=o.transform.position.z-this.transform.position.z,d=a*a+l*l;if(a*this.forwardDirection.x+l*this.forwardDirection.z<0||d>this.viewRadius*this.viewRadius)continue;const c=this.avoidanceRadius+(o.avoidanceRadius||1);if(d<c*c&&d>.01){const u=Math.sqrt(d),f=this.avoidanceForce/(u+.1);t-=a/u*f,i-=l/u*f}}const r=this.forwardDirection.x*.7+t*.3,s=this.forwardDirection.z*.7+i*.3;return Math.atan2(r,s)}calculateBoundsHeading(e){const t=this.transform.position;let i=0,r=0,s=!1;const o=t.x-e.minX,a=e.maxX-t.x,l=t.z-e.minZ,d=e.maxZ-t.z;return o<this.boundsBuffer&&(i+=(this.boundsBuffer-o)/this.boundsBuffer,s=!0),a<this.boundsBuffer&&(i-=(this.boundsBuffer-a)/this.boundsBuffer,s=!0),l<this.boundsBuffer&&(r+=(this.boundsBuffer-l)/this.boundsBuffer,s=!0),d<this.boundsBuffer&&(r-=(this.boundsBuffer-d)/this.boundsBuffer,s=!0),s&&(i!==0||r!==0)?Math.atan2(i,r):null}enforceBounds(e,t=2){const i=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,i.x>e.maxX?i.x=e.minX+(i.x-e.maxX):i.x<e.minX&&(i.x=e.maxX+(i.x-e.minX)),i.z>e.maxZ?i.z=e.minZ+(i.z-e.maxZ):i.z<e.minZ&&(i.z=e.maxZ+(i.z-e.minZ))}lerpAngle(e,t,i){let r=this.normalizeAngle(t-e);return r=Math.max(-i,Math.min(i,r)),e+r}normalizeAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}}class Mt{constructor(e,t,i,r,s=12345){this.gl=e,this.renderer=t,this.material=i,this.scene=r,this.meshCache={},this.seed=s,this.currentState=s,this.models=[{file:"barrel.obj",name:"Barrel",type:"container",rotationMode:"3d",scale:1,yOffset:-.2,probability:.25},{file:"crate.obj",name:"Crate",type:"container",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.15},{file:"chest.obj",name:"Treasure Chest",type:"container",rotationMode:"y-only",scale:1,yOffset:-.3,probability:.1},{file:"bottle.obj",name:"Bottle",type:"bottle",rotationMode:"3d",scale:1,yOffset:-.5,probability:.22},{file:"bottle-large.obj",name:"Large Bottle",type:"bottle",rotationMode:"y-only",scale:1,yOffset:-.5,probability:.08},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.06},{file:"ship-pirate-large.obj",name:"Pirate Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.06},{file:"ship-pirate-medium.obj",name:"Pirate Ship Medium",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.07},{file:"ship-pirate-small.obj",name:"Pirate Ship Small",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.07},{file:"boat-row-large.obj",name:"Rowboat Large",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.05},{file:"boat-row-small.obj",name:"Rowboat Small",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.08},{file:"platform.obj",name:"Platform",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.2},{file:"platform-planks.obj",name:"Platform Planks",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.15,probability:.18},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.07},{file:"ship-medium.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.07},{file:"ship-small.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.07}],this.loadedMeshCount=0}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let e=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}setSeed(e){this.seed=e,this.currentState=e}async loadMesh(e){if(this.meshCache[e])return this.meshCache[e];try{const t=await G.load(this.gl,`./Assets/3D/Floating/${e}`);return this.meshCache[e]=t,this.loadedMeshCount++,t}catch(t){return console.error(`Failed to load ${e}:`,t),null}}getRandomModel(){const e=this.models.reduce((i,r)=>i+(r.probability||0),0);let t=this.seededRandom()*e;for(let i of this.models)if(t-=i.probability||0,t<=0)return i;return this.models[0]}getRandomPosition(e,t,i,r,s){return{x:e+this.seededRandom()*(t-e),y:s,z:i+this.seededRandom()*(r-i)}}getRandomRotation(e){return e==="y-only"?{x:0,y:this.seededRandom()*Math.PI*2,z:0}:e==="3d"?{x:this.seededRandom()*Math.PI*2,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*2}:{x:0,y:0,z:0}}async spawnRandomObject(e,t=null){const i=t!==null&&t<this.models.length?this.models[t]:this.getRandomModel(),r=await this.loadMesh(i.file);if(!r)return null;const s=`${i.name} [Floating]`;let o;i.type==="ship"||i.type==="boat"?(o=new Ft(this.renderer,this.material,r,s),o.speed=0,o.heading=this.seededRandom()*Math.PI*2):(o=new Tt(this.renderer,this.material,r,s),o.speed=.2+this.seededRandom()*.3,o.avoidanceRadius=2),o.transform.position.set(e.x,e.y+(i.yOffset||0),e.z),o.transform.scale.set(i.scale,i.scale,i.scale);const a=this.getRandomRotation(i.rotationMode);return o.transform.rotation.set(a.x,a.y,a.z),this.scene.push(o),o}async spawnMany(e,t,i=-7){const r=[];for(let s=0;s<e;s++){const o=this.getRandomPosition(t.minX,t.maxX,t.minZ,t.maxZ,i),a=await this.spawnRandomObject(o);a&&r.push(a)}return r}getAvailableModels(){return this.models.map((e,t)=>({index:t,name:e.name,file:e.file,type:e.type,rotationMode:e.rotationMode,yOffset:e.yOffset,probability:e.probability}))}clearAllSpawned(){}}const we=`precision highp float;\r
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
`,At=`precision highp float;\r
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
`,_t=`precision highp float;\r
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
`,St=`precision highp float;\r
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
}`,Pt=`precision highp float;\r
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
uniform vec3 uMidColor;\r
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
float getCloudNoise(vec2 uv, vec2 maskUV) {\r
    float base = valueNoise(uv) * 0.65\r
               + valueNoise(uv * 2.1) * 0.35;\r
\r
    float mask = valueNoise(maskUV * 0.8) * 0.6\r
               + valueNoise(maskUV * 1.7 + vec2(3.1, 7.4)) * 0.4;\r
\r
    return base * mask;\r
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
    \r
    // Three-color gradient: bottom (horizon) -> mid (sky) -> top (zenith)\r
    vec3 skyColor;\r
    if (dir.y < 0.5) {\r
        // Bottom half: blend from bottom to mid color\r
        skyColor = mix(uBottomColor, uMidColor, smoothstep(-0.1, 0.5, dir.y));\r
    } else {\r
        // Top half: blend from mid to top color\r
        skyColor = mix(uMidColor, uTopColor, smoothstep(0.5, 0.8, dir.y));\r
    }\r
\r
    float t = uTime * uCloudSpeed;\r
    vec2 cloudUV = (dir.xz / (max(dir.y, 0.01) + 0.2)) * uCloudScale;\r
    vec2 baseUV  = cloudUV + vec2(t * 0.5, t * 0.1);   // slow, different angle\r
    vec2 maskUV  = cloudUV + vec2(t * 0.08, -t * 0.5);   // faster, opposite drift\r
\r
    float density = getCloudNoise(baseUV, maskUV);\r
    \r
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
}`,Rt=`precision highp float;\r
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
}`,Dt=`precision highp float;\r
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
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
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
}`,Bt=`precision highp float;\r
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
uniform vec2 uColor1Smoothstep;\r
uniform vec2 uColor2Smoothstep;\r
\r
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
    float blend1 = smoothstep(uColor1Smoothstep.x, uColor1Smoothstep.y, quantizedN);\r
    vec3 waterBase = mix(uColor1, uColor2, blend1);\r
\r
    float blend2 = smoothstep(uColor2Smoothstep.x, uColor2Smoothstep.y, quantizedN); // Matches your vertex logic\r
    vec3 finalColor = mix(waterBase, uColor3, blend2);\r
\r
    emission = blend2; \r
    color = vec4(finalColor, 0.8);\r
}`,Lt=`precision highp float;\r
\r
#define VERTEXREC\r
\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float uTime;\r
uniform float uSpeed;\r
uniform float udisplacement;\r
uniform float uBuoyancyRotation;\r
uniform float uSampleRadius;  // Radius for multi-point wave sampling\r
\r
uniform vec4 uWaveA;\r
uniform vec4 uWaveB;\r
uniform vec4 uWaveC;\r
\r
varying vec3 vWorldPos;\r
\r
vec3 GerstnerWave(vec4 wave, vec3 p, inout vec3 tangent, inout vec3 binormal) {\r
    float steepness = wave.z;\r
    float wavelength = wave.w;\r
    float k = 2.0 * 3.14159 / wavelength;\r
    float c = sqrt(9.8 / k);\r
    vec2 d = normalize(wave.xy);\r
    float f = k * (dot(d, p.xz) - c * uTime * uSpeed);\r
    float a = steepness / k;\r
\r
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
// Builds a rotation matrix that rotates vector 'from' to vector 'to'\r
// Uses Rodrigues' rotation formula — always produces a pure rotation, no scale\r
mat3 rotationFromTo(vec3 from, vec3 to) {\r
    from = normalize(from);\r
    to = normalize(to);\r
    \r
    vec3 axis = cross(from, to);\r
    float axisLen = length(axis);\r
    \r
    // Vectors are already aligned — return identity\r
    if (axisLen < 0.0001) return mat3(1.0);\r
    \r
    axis = axis / axisLen;\r
    float cosA = dot(from, to);\r
    float sinA = axisLen;\r
    float t = 1.0 - cosA;\r
    \r
    // Rodrigues' rotation matrix\r
    return mat3(\r
        t*axis.x*axis.x + cosA,         t*axis.x*axis.y + sinA*axis.z,  t*axis.x*axis.z - sinA*axis.y,\r
        t*axis.x*axis.y - sinA*axis.z,  t*axis.y*axis.y + cosA,         t*axis.y*axis.z + sinA*axis.x,\r
        t*axis.x*axis.z + sinA*axis.y,  t*axis.y*axis.z - sinA*axis.x,  t*axis.z*axis.z + cosA\r
    );\r
}\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
{\r
    vec3 objectWorldPos = vec3(modelMatrix[3].x, modelMatrix[3].y, modelMatrix[3].z);\r
\r
    // Sample 8 points around the object center for smooth buoyancy\r
    // This prevents jerky displacement when the object moves across waves\r
    vec3 accumulatedDisplacement = vec3(0.0);\r
    vec3 accumulatedTangent = vec3(0.0);\r
    vec3 accumulatedBinormal = vec3(0.0);\r
    \r
    float samplePoints = 8.0;\r
    for (int i = 0; i < 8; i++) {\r
        float angle = (float(i) / samplePoints) * 6.28318;  // 2*PI\r
        vec2 offset = vec2(cos(angle), sin(angle)) * uSampleRadius;\r
        vec3 samplePos = objectWorldPos + vec3(offset.x, 0.0, offset.y);\r
        \r
        vec3 tangent = vec3(1.0, 0.0, 0.0);\r
        vec3 binormal = vec3(0.0, 0.0, 1.0);\r
        \r
        vec3 waveDisp = vec3(0.0);\r
        waveDisp += GerstnerWave(uWaveA, samplePos, tangent, binormal);\r
        waveDisp += GerstnerWave(uWaveB, samplePos, tangent, binormal);\r
        waveDisp += GerstnerWave(uWaveC, samplePos, tangent, binormal);\r
        \r
        accumulatedDisplacement += waveDisp;\r
        accumulatedTangent += tangent;\r
        accumulatedBinormal += binormal;\r
    }\r
    \r
    // Average all samples\r
    accumulatedDisplacement /= 8.0;\r
    accumulatedTangent /= 8.0;\r
    accumulatedBinormal /= 8.0;\r
\r
    // Noise — matching water shader exactly (sample at center only)\r
    float time = uTime * uSpeed;\r
    vec2 movement = uWind * time;\r
    vec2 noiseCoord = objectWorldPos.xz * uScale;\r
\r
    float n1 = gradientNoise((noiseCoord * 0.25) + (movement * 0.3));\r
    float n2 = gradientNoise((noiseCoord * 1.5) + movement);\r
    vec2 jitterMovement = vec2(movement.y, -movement.x) * 1.5;\r
    float n3 = gradientNoise((noiseCoord * 4.0) + jitterMovement);\r
\r
    float n = (n1 * 0.2) + (n2 * 0.5) + (n3 * 0.3);\r
    float noiseDisp = smoothstep(-0.4, 0.4, n);\r
\r
    float totalYDisplacement = accumulatedDisplacement.y + noiseDisp;\r
\r
    // Wave surface normal — cross of accumulated tangent/binormal (now averaged)\r
    // normalize() here is critical: Gerstner accumulation drifts from unit length\r
    vec3 waveNormal = normalize(cross(accumulatedBinormal, accumulatedTangent));\r
\r
    // Build rotation from object's rest up (0,1,0) → wave surface normal\r
    // Rodrigues guarantees orthonormal output — no squash/stretch\r
    mat3 R = rotationFromTo(vec3(0.0, 1.0, 0.0), waveNormal);\r
\r
    // Blend rotation strength via uBuoyancyRotation\r
    // lerp identity → full rotation in matrix space via slerp approximation:\r
    // mix(identity * localPos, R * localPos, t) == rotate partially\r
    vec3 rotatedLocalPos = mix(localPos, R * localPos, uBuoyancyRotation);\r
    localPos = rotatedLocalPos;\r
\r
    // Vertical offset applied in world space after model matrix (master.vert handles this)\r
    yDisplacement = vec3(0.0, totalYDisplacement, 0.0);\r
\r
    // Apply rotation to object's normal to match new orientation\r
    normal = normalize(R * normal);\r
\r
    vWorldPos = objectWorldPos;\r
}`,ye=`precision highp float;\r
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
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement, inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix);\r
\r
void main()\r
{\r
    vec3 position = aVertexPosition;\r
    vec2 texCoord = aTexCoord;\r
    vec3 color = aColor;\r
    \r
    vec3 worldPos = (uModelMatrix * vec4(position, 1.0)).xyz;\r
    \r
    vec3 worldNormal = normalize((uModelMatrix * vec4(aNormal, 0.0)).xyz);\r
    vec3 yDisplacement = vec3(0.0, 0.0, 0.0);\r
    \r
\r
    #ifdef VERTEXREC\r
        worldNormal = aNormal;\r
        vertex(position, worldPos, yDisplacement, worldNormal, color, texCoord, uModelMatrix);\r
        // Re-apply model matrix after vertex modifications\r
        worldPos = (uModelMatrix * vec4(position, 1.0)).xyz;\r
        // Apply displacement after model matrix\r
        worldPos += yDisplacement;\r
        worldNormal = normalize((uModelMatrix * vec4(worldNormal, 0.0)).xyz);\r
    #endif\r
\r
    #ifdef VERTEX\r
        vertex(position, worldPos, yDisplacement, worldNormal, color, texCoord, uModelMatrix);\r
        // Apply displacement after model matrix\r
        worldPos += yDisplacement;\r
    #endif\r
\r
    vec3 viewNormal = normalize((uViewMatrix * vec4(worldNormal, 0.0)).xyz);\r
\r
    vPosition = worldPos;\r
    vNormal = worldNormal;\r
    vColor = color;\r
    vTexCoord = texCoord;\r
\r
    gl_Position = uProjectionMatrix * uViewMatrix * vec4(worldPos, 1.0);\r
}\r
`,be=`precision highp float;\r
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
}`,_=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),T=document.getElementById("glcanvas"),w=T.getContext("webgl2")||T.getContext("experimental-webgl");w||alert("Unable to initialize WebGL.");w.enable(w.DEPTH_TEST);w.depthFunc(w.LEQUAL);w.enable(w.CULL_FACE);w.cullFace(w.BACK);w.frontFace(w.CCW);w.getExtension("EXT_color_buffer_float");let ue=new de(w,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:w.NEAREST,magFilter:w.NEAREST}),Z=new de(w,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:w.NEAREST,magFilter:w.NEAREST}),ae=new de(w,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:w.NEAREST,magFilter:w.NEAREST}),le=new de(w,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:w.NEAREST,magFilter:w.NEAREST});const zt=new $(w,ye,be),kt=new $(w,[Lt,ye],be),Ut=new $(w,we,At),$t=new $(w,[Dt,ye],[Bt,be]),Ot=new $(w,_t,St),Nt=new $(w,we,Pt),Vt=new $(w,we,Rt),Ce=new He(w,"./Assets/Textures/colormap.png"),Le=new W(zt,"Scene Mat"),X=new W(kt,"Ship Mat"),Y=new W($t,"Water"),q=new W(Ot,"PPL Lighting"),L=new W(Nt,"Skybox"),Ee=new W(Vt,"PixelArt"),Wt=new W(Ut,"Screen");X.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Ce.texture,uRoughness:1,uSampleRadius:.25});Le.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Ce.texture,uRoughness:1});Ee.setUniforms({uPixelSize:_?1:3,uEdgeWidth:.5,uColorLevels:128,uDepthThreshold:.025,uNormalThreshold:.1,uSilhouetteDarkening:.2,uCreaseDarkening:.7});q.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03});L.setUniforms({uTopColor:[.133,.137,.251],uMidColor:[.749,.286,.369],uBottomColor:[.996,.431,.243],uSunColor:[.894,.514,.384],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.5,uCloudCoverage:.8,uCloudSpeed:.35,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const ze={uWind:[1,1],uSpeed:.5,udisplacement:1.5,uScale:1,uBuoyancyRotation:.3,uColor1:[.09,.271,.49],uColor2:[.192,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[0,2],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[-.4,-2,.1,13.5],uColorBands:3,uRoughness:0};X.setUniforms(ze);Y.setUniforms(ze);X.setUniforms({uRoughness:1});const It={Lighting:q,Skybox:L,PixelArt:Ee,Water:Y,Buoyancy:X},z=new Ve(w),k=new ve,fe=new ve,U=[],P=new je(w),Te=new De(w,T.width,T.height,Z,1,"GBuffer Pass");Te.clearColor=[.5,.5,1,1];Te.clearDepth=!0;P.addPass(Te);const Fe=new De(w,T.width,T.height,ue,0,"Albedo Pass");Fe.clearColor=[0,0,0,1];Fe.clearDepth=!0;P.addPass(Fe);const Me=new qe(w,T.width,T.height,q,le,"Lighting Pass");Me.setInputBuffers(ue.texture,Z.texture);P.addPass(Me);const Ae=new Ze(w,T.width,T.height,L,le,"Skybox Pass");Ae.setInputTexture(Z.texture);P.addPass(Ae);const ke=new Ke(w,T.width,T.height,Ee,ae,"PixelArt Pass");ke.setInputBuffers(le.texture,Z.texture);P.addPass(ke);const ne=new et(w,T.width,T.height,ae,"Wireframe Pass");_||(ne.setWireColor(0,1,0),ne.setOpacity(1),P.addPass(ne));const O=new Ye(w,T.width,T.height,Wt);O.setBuffer("Final",ae.texture);O.setBuffer("Pixel",ae.texture);O.setBuffer("Lit",le.texture);O.setBuffer("Albedo",ue.texture);O.setBuffer("Gbuffer",Z.texture);Me.lightCamera=fe;P.addPass(O);function Ue(){T.width=window.innerWidth,T.height=window.innerHeight;const n=_?.5:1,e=Math.floor(T.width*n),t=Math.floor(T.height*n);w.viewport(0,0,e,t),ue.resize(e,t),Z.resize(e,t),le.resize(e,t),ae.resize(e,t),P.resize(e,t);const i=T.width/T.height;k.setPerspective(.8,i,.1,1e3)}window.addEventListener("resize",Ue);Ue();const Ht=T.width/T.height;k.setPerspective(.8,Ht,.1,1e3);k.transform.position.set(-39.2,1.8,-47);k.transform.rotation.set(0,_?3.24:3.22,0);const he=30;fe.setOrthographic(-he,he,-he,he,1,100);G.load(w,"./Assets/3D/scene.obj").then(n=>{const e=new N(z,Le,n,"Scene");e.transform.position.set(-15,-6.1,10),e.transform.scale.set(1,1,1),U.push(e)});const S=new Mt(w,z,X,U),jt={direction:{x:.207,y:0,z:-.707},speed:0},A={enabled:!_,count:50,seed:68,bounds:{minX:-70,maxX:50,minZ:-55,maxZ:100},yFixed:-6.5};let $e=[];A.enabled&&(S.setSeed(A.seed),S.spawnMany(A.count,A.bounds,A.yFixed).then(n=>{$e=n,console.log(`Spawned ${n.length} floating objects with seed ${A.seed}`)}));_&&(S.setSeed(3),G.load(w,"./Assets/3D/Floating/ship-pirate-small.obj").then(n=>{for(let e=0;e<3;e++){const t=new N(z,X,n,"Barrel");t.transform.position.set(-25+(S.seededRandom()-.5)*45,-6.5,80+(S.seededRandom()-.5)*45),t.transform.rotation.set(0,(S.seededRandom()-.5)*3.14*2,0),t.transform.scale.set(1,1,1),U.push(t)}}));Promise.all([G.load(w,"./Assets/3D/LOD1.obj"),G.load(w,"./Assets/3D/LOD2.obj"),G.load(w,"./Assets/3D/LOD3.obj")]).then(([n,e,t])=>{const a=_?1:0,l=_?-1:2,d=_?e:n,h=_?"LOD2":"LOD1",c=new N(z,Y,d,`Water Floor [0,0] ${h}`);if(c.transform.position.set(0,-6.5,0),c.transform.scale.set(50,50,50),U.push(c),_)for(let u=0;u<=5;u++)for(let f=-u;f<=u;f++){if(f===0&&u===0)continue;const v=new N(z,Y,t,`Water Floor [${f},${u}] LOD3`);c.transform.add(v.transform),v.transform.setGlobalPosition(f*80,-6.5,u*80)}else for(let u=-5;u<=5;u++)for(let f=-5;f<=5;f++){if(u===0&&f===0)continue;const v=Math.sqrt(u*u+f*f),g=v<=a?n:v<=l?e:t,x=v<=a?1:v<=l?2:3,m=new N(z,Y,g,`Water Floor [${u},${f}] LOD${x}`);c.transform.add(m.transform),m.transform.setGlobalPosition(u*80,-6.5,f*80)}});const _e=[{x:0,y:0,w:1,h:1,pass:"Final"}];O.setViewports(_e);const V={gl:w,scene:U,camera:k,lightCamera:fe,renderer:z,renderQueue:P,materials:It,viewportPass:O,wireframePass:ne,floatingSpawner:S,floatingSpawnConfig:A,textures:{ship:Ce}};V.setViewports=n=>{_e[0].pass=n};V.spawnFloatingObjects=async n=>{const e=await S.spawnMany(n,A.bounds,A.yFixed);return console.log(`Spawned ${e.length} additional floating objects`),e};V.respawnWithSeed=async n=>{const e=U.filter(i=>!i.name||!i.name.includes("[Floating]"));U.length=0,U.push(...e),S.setSeed(n),A.seed=n;const t=await S.spawnMany(A.count,A.bounds,A.yFixed);return console.log(`✓ Respawned with seed ${n}: ${t.length} objects`),t};let j=null;_||(new Ct(V),j=it.attach(P,z,V),V.profiler=j);window.game=V;window.floatingSpawner=S;window.oceanConfig=jt;window.floatingObjects=$e;window.floatingSpawnConfig=A;const Xt=new Et(k,T);window.addEventListener("keydown",n=>{n.key.toLowerCase()==="t"&&ne.toggle()});const H=[.5,.8,.2];let pe=0,Pe="";function Oe(n){if(R.update(n),V.deltaTime=R.deltaTime,Xt.update(R.deltaTime),Y.setUniforms({uTime:R.time}),X.setUniforms({uTime:R.time}),L.setUniforms({uTime:R.time}),q.uniforms.uLightDir&&q.uniforms.uLightDir.value){const t=q.uniforms.uLightDir.value,i=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);i>.001?(H[0]=t[0]/i,H[1]=t[1]/i,H[2]=t[2]/i):(H[0]=t[0],H[1]=t[1],H[2]=t[2])}k.updateView(),O.setViewports(_e),k.updateProjection(),fe.updateProjection(),L.uniforms.uSunColor&&Ae.setLight(H,L.uniforms.uSunColor.value,L.uniforms.uTopColor.value,L.uniforms.uMidColor.value,L.uniforms.uBottomColor.value),P.execute(z,U,k),w.flush(),w.finish();const e=document.getElementById("hud");if(e&&(pe++,pe>=6)){pe=0;const i=(R.unscaledDeltaTime>0?Math.round(1/R.unscaledDeltaTime):0).toString().padStart(3,"0");let r="";if(j&&j.fpsHistory&&j.fpsHistory.length>0){let o=0;const a=j.fpsHistory.length,l=Math.min(a,60);for(let h=a-l;h<a;h++)o+=j.fpsHistory[h];r=` <br> Avg FPS: ${Math.round(o/l).toString().padStart(3,"0")}`}const s=(R.deltaTime*1e3).toFixed(2).padStart(6,"0");Pe=`FPS: ${i}${r}<br>Δ: ${s} ms`,e.innerHTML=Pe}requestAnimationFrame(Oe)}requestAnimationFrame(Oe);
