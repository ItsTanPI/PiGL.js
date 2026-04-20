var bt=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Pi=bt((Bi,ke)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();class Te{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],i=this.data[2];return Math.sqrt(e*e+t*t+i*i)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class j{static identity(e){return oe.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,i){return oe.multiply(e,t,i)}static translate(e,t,i){return oe.translate(e,t,i)}static scale(e,t,i){return oe.scale(e,t,i)}static rotateX(e,t,i){return oe.rotateX(e,t,i)}static rotateY(e,t,i){return oe.rotateY(e,t,i)}static rotateZ(e,t,i){return oe.rotateZ(e,t,i)}static invert(e,t){return oe.invert(e,t)}static compose(e,t,i,s){return oe.compose(e,t,i,s)}}const oe={identity(o){return o.fill(0),o[0]=1,o[5]=1,o[10]=1,o[15]=1,o},multiply(o,e,t){let i=e[0],s=e[1],r=e[2],n=e[3],a=e[4],l=e[5],c=e[6],h=e[7],d=e[8],u=e[9],f=e[10],v=e[11],b=e[12],E=e[13],g=e[14],C=e[15],y=t[0],p=t[1],F=t[2],A=t[3];return o[0]=y*i+p*a+F*d+A*b,o[1]=y*s+p*l+F*u+A*E,o[2]=y*r+p*c+F*f+A*g,o[3]=y*n+p*h+F*v+A*C,y=t[4],p=t[5],F=t[6],A=t[7],o[4]=y*i+p*a+F*d+A*b,o[5]=y*s+p*l+F*u+A*E,o[6]=y*r+p*c+F*f+A*g,o[7]=y*n+p*h+F*v+A*C,y=t[8],p=t[9],F=t[10],A=t[11],o[8]=y*i+p*a+F*d+A*b,o[9]=y*s+p*l+F*u+A*E,o[10]=y*r+p*c+F*f+A*g,o[11]=y*n+p*h+F*v+A*C,y=t[12],p=t[13],F=t[14],A=t[15],o[12]=y*i+p*a+F*d+A*b,o[13]=y*s+p*l+F*u+A*E,o[14]=y*r+p*c+F*f+A*g,o[15]=y*n+p*h+F*v+A*C,o},translate(o,e,t){let i=t.x!==void 0?t.x:t[0],s=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2];if(e===o)o[12]=e[0]*i+e[4]*s+e[8]*r+e[12],o[13]=e[1]*i+e[5]*s+e[9]*r+e[13],o[14]=e[2]*i+e[6]*s+e[10]*r+e[14],o[15]=e[3]*i+e[7]*s+e[11]*r+e[15];else{let n=e[0],a=e[1],l=e[2],c=e[3],h=e[4],d=e[5],u=e[6],f=e[7],v=e[8],b=e[9],E=e[10],g=e[11];o[0]=n,o[1]=a,o[2]=l,o[3]=c,o[4]=h,o[5]=d,o[6]=u,o[7]=f,o[8]=v,o[9]=b,o[10]=E,o[11]=g,o[12]=n*i+h*s+v*r+e[12],o[13]=a*i+d*s+b*r+e[13],o[14]=l*i+u*s+E*r+e[14],o[15]=c*i+f*s+g*r+e[15]}return o},scale(o,e,t){let i=t.x!==void 0?t.x:t[0],s=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2];return o[0]=e[0]*i,o[1]=e[1]*i,o[2]=e[2]*i,o[3]=e[3]*i,o[4]=e[4]*s,o[5]=e[5]*s,o[6]=e[6]*s,o[7]=e[7]*s,o[8]=e[8]*r,o[9]=e[9]*r,o[10]=e[10]*r,o[11]=e[11]*r,o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15],o},rotateX(o,e,t){let i=Math.sin(t),s=Math.cos(t),r=e[4],n=e[5],a=e[6],l=e[7],c=e[8],h=e[9],d=e[10],u=e[11];return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[4]=r*s+c*i,o[5]=n*s+h*i,o[6]=a*s+d*i,o[7]=l*s+u*i,o[8]=c*s-r*i,o[9]=h*s-n*i,o[10]=d*s-a*i,o[11]=u*s-l*i,o},rotateY(o,e,t){let i=Math.sin(t),s=Math.cos(t),r=e[0],n=e[1],a=e[2],l=e[3],c=e[8],h=e[9],d=e[10],u=e[11];return e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[0]=r*s-c*i,o[1]=n*s-h*i,o[2]=a*s-d*i,o[3]=l*s-u*i,o[8]=r*i+c*s,o[9]=n*i+h*s,o[10]=a*i+d*s,o[11]=l*i+u*s,o},rotateZ(o,e,t){let i=Math.sin(t),s=Math.cos(t),r=e[0],n=e[1],a=e[2],l=e[3],c=e[4],h=e[5],d=e[6],u=e[7];return e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[0]=r*s+c*i,o[1]=n*s+h*i,o[2]=a*s+d*i,o[3]=l*s+u*i,o[4]=c*s-r*i,o[5]=h*s-n*i,o[6]=d*s-a*i,o[7]=u*s-l*i,o},invert(o,e){let t=e[0],i=e[1],s=e[2],r=e[3],n=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],v=e[12],b=e[13],E=e[14],g=e[15],C=t*a-i*n,y=t*l-s*n,p=t*c-r*n,F=i*l-s*a,A=i*c-r*a,B=s*c-r*l,k=h*b-d*v,W=h*E-u*v,O=h*g-f*v,X=d*E-u*b,ee=d*g-f*b,$=u*g-f*E,U=C*$-y*ee+p*X+F*O-A*W+B*k;return U?(U=1/U,o[0]=(a*$-l*ee+c*X)*U,o[1]=(s*ee-i*$-r*X)*U,o[2]=(b*B-E*A+g*F)*U,o[3]=(u*A-d*B-f*F)*U,o[4]=(l*O-n*$-c*W)*U,o[5]=(t*$-s*O+r*W)*U,o[6]=(E*p-v*B-g*y)*U,o[7]=(h*B-u*p+f*y)*U,o[8]=(n*ee-a*O+c*k)*U,o[9]=(i*O-t*ee-r*k)*U,o[10]=(v*A-b*p+g*C)*U,o[11]=(d*p-h*A-f*C)*U,o[12]=(a*W-n*X-l*k)*U,o[13]=(t*X-i*W+s*k)*U,o[14]=(b*y-v*F-E*C)*U,o[15]=(h*F-d*y+u*C)*U,o):null},compose(o,e,t,i){let s=e.x!==void 0?e.x:e[0],r=e.y!==void 0?e.y:e[1],n=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],l=t.y!==void 0?t.y:t[1],c=t.z!==void 0?t.z:t[2],h=i.x!==void 0?i.x:i[0],d=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],f=Math.cos(l),v=Math.sin(l),b=Math.cos(a),E=Math.sin(a),g=Math.cos(c),C=Math.sin(c);return o[0]=(f*g-v*E*C)*h,o[1]=(f*C+v*E*g)*h,o[2]=-v*b*h,o[3]=0,o[4]=-b*C*d,o[5]=b*g*d,o[6]=E*d,o[7]=0,o[8]=(v*g+f*E*C)*u,o[9]=(v*C-f*E*g)*u,o[10]=f*b*u,o[11]=0,o[12]=s,o[13]=r,o[14]=n,o[15]=1,o}};class wt{constructor(){this.position=new Te(0,0,0),this.rotation=new Te(0,0,0),this.scale=new Te(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),j.identity(this.localMatrix),j.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.markDirty()}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const i=this.children.length-1;t!==i&&(this.children[t]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(j.identity(this.localMatrix),j.translate(this.localMatrix,this.localMatrix,this.position),j.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),j.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),j.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),j.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?j.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new Te(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(e,t,i){if(!this.parent){this.position.set(e,t,i);return}this.parent.updateWorldMatrix();const s=new Float32Array(16);j.invert(s,this.parent.worldMatrix);const r=e,n=t,a=i,l=s[0]*r+s[4]*n+s[8]*a+s[12],c=s[1]*r+s[5]*n+s[9]*a+s[13],h=s[2]*r+s[6]*n+s[10]*a+s[14];this.position.set(l,c,h)}get globalScale(){this.updateWorldMatrix();const e=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),t=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),i=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new Te(e,t,i)}}class ie{constructor(e,t,i=null,s="GameObject"){this.name=s,this.active=!0,this.transform=new wt,this.transform.gameObject=this,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const s=i||this.material;this.renderer&&s&&this.renderer.draw(this,e,t,s)}}class je extends ie{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,j.identity(this.projectionMatrix),j.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,s){this.fov=e,this.aspect=t,this.near=i,this.far=s,this.orthographic=!1;const r=1/Math.tan(e/2),n=this.projectionMatrix;n.fill(0),n[0]=r/t,n[5]=r,n[10]=(s+i)/(i-s),n[11]=-1,n[14]=2*s*i/(i-s)}setOrthographic(e,t,i,s,r,n){this.near=r,this.far=n,this.orthographic=!0,this.orthoSize=(s-i)/2;const a=this.projectionMatrix,l=1/(e-t),c=1/(i-s),h=1/(r-n);a.fill(0),a[0]=-2*l,a[5]=-2*c,a[10]=2*h,a[12]=(e+t)*l,a[13]=(s+i)*c,a[14]=(n+r)*h,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),j.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const i=this.viewMatrix,s=this.projectionMatrix;e.transform.updateWorldMatrix();const r=e.transform.worldMatrix,n=r[12],a=r[13],l=r[14],c=1,h=i[0]*n+i[4]*a+i[8]*l+i[12]*c,d=i[1]*n+i[5]*a+i[9]*l+i[13]*c,u=i[2]*n+i[6]*a+i[10]*l+i[14]*c,f=i[3]*n+i[7]*a+i[11]*l+i[15]*c,v=s[0]*h+s[4]*d+s[8]*u+s[12]*f,b=s[1]*h+s[5]*d+s[9]*u+s[13]*f;s[2]*h+s[6]*d+s[10]*u+s[14]*f;const E=s[3]*h+s[7]*d+s[11]*u+s[15]*f;if(E===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const g=v/E,C=b/E,y=(g+1)*.5,p=(C+1)*.5;return t?(t[0]=y,t[1]=p):t=[y,p],t}}class ce{constructor(e,t,i,s=null,r=null){this.gl=e;const n=this.loadShader(e.VERTEX_SHADER,t),a=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,n);let l=!1;if(s&&r){const c=this.loadShader(36488,s),h=this.loadShader(36487,r);c&&h?(e.attachShader(this.program,c),e.attachShader(this.program,h),l=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}e.attachShader(this.program,a),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=l}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const s=this.gl,r=this.getUniformLocation(e);if(r){if(i){i==="1i"?s.uniform1i(r,t):i==="1f"?s.uniform1f(r,t):i==="2fv"?s.uniform2fv(r,t):i==="3fv"?s.uniform3fv(r,t):i==="4fv"?s.uniform4fv(r,t):i==="Matrix4fv"&&s.uniformMatrix4fv(r,!1,t);return}if(typeof t=="number")s.uniform1f(r,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:s.uniform2fv(r,t);break;case 3:s.uniform3fv(r,t);break;case 4:s.uniform4fv(r,t);break;case 16:s.uniformMatrix4fv(r,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;if(Array.isArray(t)){let r="";const n=t.map(a=>{if(typeof a!="string")return"";const l=a.split(/\r?\n/),c=[];for(const h of l){if(h.trim().startsWith("#version")){r||(r=h.trim());continue}c.push(h)}return c.join(`
`)});r?i=`${r}
${n.join(`
`)}`:i=n.join(`
`)}let s;try{if(s=this.gl.createShader(e),!s)return console.warn(`Shader type ${e} not supported`),null}catch(r){return console.warn(`Shader type ${e} not supported:`,r.message),null}return this.gl.shaderSource(s,i),this.gl.compileShader(s),this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS)?s:(console.error("Shader compile error:",this.gl.getShaderInfoLog(s)),this.gl.deleteShader(s),null)}}class Xe{constructor(e,t,i,s,r=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=s,this.indices=r,this.count=r?r.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const s=e.getAttribLocation("aTexCoord");s!==-1&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const s=e.getAttribLocation("aNormal");s!==-1&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,3,t.FLOAT,!1,0,0))}if(this.colorBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer);const s=e.getAttribLocation("aColor");s!==-1&&(t.enableVertexAttribArray(s),t.vertexAttribPointer(s,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class Ct{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),s=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new Xe(e,t,i,s)}draw(e,t,i=void 0,s=null){const r=s||e.material;if(!r||!r.shader)return;const n=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height)));const l=r.shader;l.use(),a.bind(l),l.setUniform("uProjectionMatrix",t.projectionMatrix),l.setUniform("uViewMatrix",t.viewMatrix),l.setUniform("uModelMatrix",e.transform.worldMatrix);for(const u in r.uniforms){const f=r.uniforms[u];let v=f.value,b=f.type;(v instanceof WebGLTexture||b==="1i"&&v&&typeof v=="object")&&n.bindTexture(n.TEXTURE_2D,v),l.setUniform(u,v,b)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const c=performance.now();a.draw();const d=performance.now()-c;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:d,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class de{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,s){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i,r[2]=s}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,s])}}setVec4(e,t,i,s,r){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const n=this.uniforms[e].value;n[0]=t,n[1]=i,n[2]=s,n[3]=r}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,s,r])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}function Mt(o,e,t){var r;const i={RGBA:{8:{internalFormat:o.RGBA8,glFormat:o.RGBA,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RGBA16F,glFormat:o.RGBA,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RGBA32F,glFormat:o.RGBA,glType:o.FLOAT}},RGB:{8:{internalFormat:o.RGB8,glFormat:o.RGB,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RGB16F,glFormat:o.RGB,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RGB32F,glFormat:o.RGB,glType:o.FLOAT}},RG:{8:{internalFormat:o.RG8,glFormat:o.RG,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RG16F,glFormat:o.RG,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RG32F,glFormat:o.RG,glType:o.FLOAT}},R:{8:{internalFormat:o.R8,glFormat:o.RED,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.R16F,glFormat:o.RED,glType:o.HALF_FLOAT},"32f":{internalFormat:o.R32F,glFormat:o.RED,glType:o.FLOAT}}},s=(r=i[e])==null?void 0:r[t];return s||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),i.RGBA[8])}class Oe{constructor(e,t,i,s={}){this.gl=e,this.width=t,this.height=i,this.format=s.format??"RGBA",this.precision=s.precision??"8",this.hasDepth=s.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:r,glFormat:n,glType:a}=Mt(e,this.format,this.precision);this._internalFormat=r,this._glFormat=n,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,r,t,i,0,n,a,null);const l=s.minFilter??e.LINEAR,c=s.magFilter??e.LINEAR,h=s.wrapS??e.CLAMP_TO_EDGE,d=s.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const i=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&i.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,i),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*i,this.hasDepth&&(e+=this.width*this.height*2),e}}class Tt{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const re=new Tt;class we{static async load(e,t){const s=await(await fetch(t)).text(),r=this.parse(e,s);return new Xe(e,r.positions,r.uvs,r.normals)}static parse(e,t){const i=[],s=[],r=[],n=[],a=[],l=[],c=t.split(`
`);for(let h of c){if(h=h.trim(),h.startsWith("#")||h==="")continue;const d=h.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")s.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")r.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const f=d.slice(1);for(let v=1;v<f.length-1;v++){const b=f[0],E=f[v],g=f[v+1];this.processVertex(b,i,s,r,n,a,l),this.processVertex(E,i,s,r,n,a,l),this.processVertex(g,i,s,r,n,a,l)}}}return{positions:new Float32Array(n),uvs:new Float32Array(a),normals:new Float32Array(l),vertexCount:n.length/3}}static processVertex(e,t,i,s,r,n,a){const l=e.split("/"),c=parseInt(l[0])-1,h=l[1]?parseInt(l[1])-1:-1,d=l[2]?parseInt(l[2])-1:-1,u=t[c];if(r.push(u[0],u[1],u[2]),h>=0){const f=i[h];n.push(f[0],f[1])}else n.push(0,0);if(d>=0){const f=s[d];a.push(f[0],f[1],f[2])}else a.push(0,1,0)}}class ct{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let i=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(i=i*1.33),Math.round(i)}}class Et{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const s of this.passes)s.enabled&&s.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class Ue{constructor(e,t,i,s="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=s,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}const Ft=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,At=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class dt extends Ue{constructor(e,t,i,s=null,r=0,n="ObjectPass"){super(e,t,i,n),this.renderTarget=s,this.renderMode=r,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new ce(e,Ft,At);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const s=this.camera||i;this.camera&&s.updateView();const r=performance.now();if(e.resetDrawCalls(),this.renderTarget){const l=this.gl;l.bindFramebuffer(l.FRAMEBUFFER,this.renderTarget.framebuffer);const c=this.clearDepth?this._attachmentsWithDepth:[l.COLOR_ATTACHMENT0];l.invalidateFramebuffer(l.FRAMEBUFFER,c),l.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);this.clearColor!=null&&this._drawClearQuad();const n=l=>{if(l.active&&(l.material&&(l.material.setUniform("uRenderMode",this.renderMode,"1i"),l.material.setUniform("uCameraPos",[s.transform.globalPosition.x,s.transform.globalPosition.y,s.transform.globalPosition.z])),l.render(s,this.renderTarget),l.transform&&l.transform.children))for(const c of l.transform.children)c.gameObject&&n(c.gameObject)};if(t&&Array.isArray(t))for(const l of t)n(l);else t&&t.render&&t.render(s,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const a=e.resetDrawCalls();this.drawCount=a.count,this.drawDetails=a.details,this.executionTime=performance.now()-r}}class ut{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const s=this.gl;let r,n=t;if(e.uniforms&&e.shader){r=e.shader,n={};for(const h in e.uniforms)n[h]=e.uniforms[h].value;t&&(t.bind||t===null)&&(i=t)}else r=e;i?i.bind():(s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,s.canvas.width,s.canvas.height)),r.use(),s.bindBuffer(s.ARRAY_BUFFER,this.buffer);const a=r.getAttribLocation("aVertexPosition");a!==-1&&(s.enableVertexAttribArray(a),s.vertexAttribPointer(a,2,s.FLOAT,!1,16,0));const l=r.getAttribLocation("aTexCoord");l!==-1&&(s.enableVertexAttribArray(l),s.vertexAttribPointer(l,2,s.FLOAT,!1,16,8));let c=0;for(const h in n){const d=n[h];d instanceof WebGLTexture?(s.activeTexture(s.TEXTURE0+c),s.bindTexture(s.TEXTURE_2D,d),r.setUniform(h,c,"1i"),c++):r.setUniform(h,d)}s.drawArrays(s.TRIANGLE_STRIP,0,4);for(let h=0;h<c;h++)s.activeTexture(s.TEXTURE0+h),s.bindTexture(s.TEXTURE_2D,null)}}class Rt extends Ue{constructor(e,t,i,s){super(e,t,i,"ViewportComposition"),this.material=s,this.fullScreenQuad=new ut(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const s of this.viewports){const r=Math.floor(s.x*this.width),n=Math.floor(s.y*this.height),a=Math.floor(s.w*this.width),l=Math.floor(s.h*this.height);this.gl.viewport(r,n,a,l);let c=this.buffers.Final;const h=s.pass;this.buffers[h]&&(c=this.buffers[h]),this.material.setUniform("uTexture",c),this.fullScreenQuad.draw(this.material)}}}class Ge extends Ue{constructor(e,t,i,s,r=null,n="ScreenPass"){super(e,t,i,n),this.material=s,this.renderTarget=r,this.fullScreenQuad=new ut(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,i])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const s=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[n,a]of Object.entries(this.inputs))this.material.setUniform(n,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const r=e.resetDrawCalls();this.drawCount=r.count,this.drawDetails=r.details,this.executionTime=performance.now()-s}}class St extends Ge{constructor(e,t,i,s,r=null,n="Lighting Pass"){super(e,t,i,s,r,n),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){j.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),j.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),j.invert(this._invCamViewProj,this._camViewProj);const i=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}setMatrices(e,t){this.material.setUniforms({uInverseViewProjection:e,uLightSpaceMatrix:t})}setLight(e,t,i){this.material.setUniforms({uLightDir:e,uLightColor:t,uAmbient:i})}}class _t extends Ge{constructor(e,t,i,s,r=null,n="Skybox Pass"){super(e,t,i,s,r,n),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){j.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),j.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,s,r){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uMidColor:s,uBottomColor:r})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class Pt extends Ge{constructor(e,t,i,s,r,n="PixelArt Pass"){super(e,t,i,s,r,n),this._resolutionBuffer=new Float32Array([t,i])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}const Dt=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
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
`,Bt=`precision highp float;\r
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
}`;class kt extends Ue{constructor(e,t,i,s=null,r="Wireframe Pass"){super(e,t,i,r),this.target=s,this.enabled=!1;const n=new ce(e,Dt,Bt);this.material=new de(n,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=e,this._polygonMode=null}setWireColor(e,t,i){this.material.setVec3("uWireColor",e,t,i)}setOpacity(e){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,e)))}setShowBackfaces(e){this.material.setUniform("uShowBackfaces",e?1:0,"1i")}execute(e,t,i){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const s=this.material.shader;s.use(),s.setUniform("uProjectionMatrix",i.projectionMatrix),s.setUniform("uViewMatrix",i.viewMatrix);const r=n=>{if(n.active){if(n.transform.updateWorldMatrix(),n.mesh){s.setUniform("uModelMatrix",n.transform.worldMatrix);for(const l in this.material.uniforms){const c=this.material.uniforms[l];s.setUniform(l,c.value,c.type)}const a=n.mesh;a.bind(s),a.indices&&a.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,a.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,a.count)}if(n.transform&&n.transform.children)for(const a of n.transform.children)a.gameObject&&r(a.gameObject)}};for(const n of t)r(n)}resize(e,t){this.width=e,this.height=t,this.target&&this.target.resize(e,t)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}class zt{constructor(e=null){this.gameContext=e,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(t),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes.length=0}endFrame(){this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(e,t){this.passHistory||(this.passHistory={}),this.passHistory[e]||(this.passHistory[e]=[]),this.passHistory[e].push(t),this.passHistory[e].length>300&&this.passHistory[e].shift()}recordDrawCall(e,t,i,s,r,n=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:r-s,vertices:n})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let e=0,t=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(r=>{r.drawCalls.forEach(n=>{e+=(n.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(r=>{if(r.renderTarget&&r.renderTarget.getMemorySize){const n=r.renderTarget.getMemorySize();t+=n}}),this.gameContext){if(this.gameContext.textures)for(const r in this.gameContext.textures){const n=this.gameContext.textures[r];if(n&&n.getMemorySize){const a=n.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.textureCache)for(const r in this.gameContext.textureCache){const n=this.gameContext.textureCache[r];if(n&&n.getMemorySize){const a=n.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const r in this.gameContext.assets.textures){const n=this.gameContext.assets.textures[r];if(n&&n.getMemorySize){const a=n.getMemorySize();a>0&&(i+=a)}}}const s=e+t+i;return this.metrics.memory={vertices:e,renderTargets:t,textures:i,total:s},this.metrics.memory}}class Lt{static attach(e,t,i=null){const s=new zt(i),r=e.execute.bind(e);e.execute=function(a,l,c){s.enabled&&s.beginFrame();const h=e.passes||[];for(let d=0;d<h.length;d++){const u=h[d];if(!u.__profilerInstrumented){const f=u.execute.bind(u);u.execute=function(v,b,E){const g=u.name||"Unnamed Pass";s.enabled&&(s.beginPass(g),v.currentPassName=g,s.devToolsEnabled&&performance.mark(`PassStart-${g}`)),f(v,b,E),s.enabled&&(s.endPass(),v.currentPassName=null,s.devToolsEnabled&&(performance.mark(`PassEnd-${g}`),performance.measure(`Pass: ${g}`,`PassStart-${g}`,`PassEnd-${g}`),performance.clearMarks(`PassStart-${g}`),performance.clearMarks(`PassEnd-${g}`)))},u.__profilerInstrumented=!0}}r(a,l,c),s.enabled&&(s.endFrame(),s.updateMemoryMetrics())};const n=t.draw.bind(t);return t.draw=function(a,l,c,h){if(!s.enabled){n(a,l,c,h);return}const d=a?a.name:"Unknown",u=h?h.name:"Unknown";s.devToolsEnabled&&performance.mark(`DrawStart-${d}`);const f=performance.now();n(a,l,c,h);const v=performance.now();s.devToolsEnabled&&(performance.mark(`DrawEnd-${d}`),performance.measure(`Draw: ${d} [${u}]`,`DrawStart-${d}`,`DrawEnd-${d}`),performance.clearMarks(`DrawStart-${d}`),performance.clearMarks(`DrawEnd-${d}`));const b=a&&a.mesh?a.mesh.count:6;s.recordDrawCall(d,u,0,f,v,b)},s.disable(),s}}class Ot{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const s=t.style.display==="none";t.style.display=s?"flex":"none",i.style.background=s?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(s=>{const r=document.createElement("option");r.value=s,r.text=s,i.appendChild(r)}),i.onchange=s=>t(s.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,s,r){const n=document.createElement("div");Object.assign(n.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${s}px`,height:`${r}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const l=document.createElement("span");l.innerHTML="×",Object.assign(l.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),l.onclick=()=>{n.style.display="none"},l.onmouseover=()=>{l.style.color="#fff"},l.onmouseout=()=>{l.style.color="#888"},a.appendChild(l);const c=document.createElement("div");c.classList.add("window-content"),Object.assign(c.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const h=document.createElement("div");return Object.assign(h.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),n.appendChild(a),n.appendChild(c),n.appendChild(h),this.container.appendChild(n),this.addDragLogic(n,a),this.addResizeLogic(n,h),{content:c,window:n}}addResizeLogic(e,t){let i=!1,s,r,n,a;t.addEventListener("mousedown",h=>{h.preventDefault(),h.stopPropagation(),i=!0,n=h.clientX,a=h.clientY,s=e.offsetWidth,r=e.offsetHeight,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c)});const l=h=>{if(!i)return;const d=s+(h.clientX-n),u=r+(h.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}addDragLogic(e,t){let i=!1,s,r,n,a;t.addEventListener("mousedown",h=>{h.target.tagName!=="BUTTON"&&(i=!0,s=h.clientX,r=h.clientY,n=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",l),document.addEventListener("mouseup",c),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const l=h=>{if(!i)return;let d=n+(h.clientX-s),u=a+(h.clientY-r);const f=20;d<f&&(d=0),u<f&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<f&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<f&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},c=()=>{i=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",c)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class ne{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ne.nextNameID=ne.nextNameID||0,this.$name.id=`lil-gui-name-${++ne.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",n=>n.stopPropagation()),this.domElement.addEventListener("keyup",n=>n.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Ut extends ne{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function He(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const $t={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:He,toHexString:He},Ae={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Nt={isPrimitive:!1,match:o=>Array.isArray(o)||ArrayBuffer.isView(o),fromHexString(o,e,t=1){const i=Ae.fromHexString(o);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([o,e,t],i=1){i=255/i;const s=o*i<<16^e*i<<8^t*i<<0;return Ae.toHexString(s)}},Wt={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const i=Ae.fromHexString(o);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:o,g:e,b:t},i=1){i=255/i;const s=o*i<<16^e*i<<8^t*i<<0;return Ae.toHexString(s)}},Vt=[$t,Ae,Nt,Wt];function It(o){return Vt.find(e=>e.match(o))}class Ht extends ne{constructor(e,t,i,s){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=It(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=He(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ve extends ne{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class jt extends ne{constructor(e,t,i,s,r,n){super(e,t,i,"lil-number"),this._initInput(),this.min(s),this.max(r);const a=n!==void 0;this.step(a?n:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let C=parseFloat(this.$input.value);isNaN(C)||(this._stepExplicit&&(C=this._snap(C)),this.setValue(this._clamp(C)))},i=C=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+C),this.$input.value=this.getValue())},s=C=>{C.key==="Enter"&&this.$input.blur(),C.code==="ArrowUp"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C))),C.code==="ArrowDown"&&(C.preventDefault(),i(this._step*this._arrowKeyMultiplier(C)*-1))},r=C=>{this._inputFocused&&(C.preventDefault(),i(this._step*this._normalizeMouseWheel(C)))};let n=!1,a,l,c,h,d;const u=5,f=C=>{a=C.clientX,l=c=C.clientY,n=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",b)},v=C=>{if(n){const y=C.clientX-a,p=C.clientY-l;Math.abs(p)>u?(C.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&b()}if(!n){const y=C.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(C),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=C.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",b)},E=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",E),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(g,C,y,p,F)=>(g-C)/(y-C)*(F-p)+p,t=g=>{const C=this.$slider.getBoundingClientRect();let y=e(g,C.left,C.right,this._min,this._max);this._snapClampSetValue(y)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=g=>{t(g.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let n=!1,a,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),n=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,n=!0):c(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=g=>{if(n){const C=g.touches[0].clientX-a,y=g.touches[0].clientY-l;Math.abs(C)>Math.abs(y)?c(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else g.preventDefault(),t(g.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),v=400;let b;const E=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const y=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(f,v)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",E,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Xt extends ne{constructor(e,t,i,s){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class Gt extends ne{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Yt=`.lil-gui {
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
}`;function qt(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let lt=!1;class ue{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:n=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!lt&&a&&(qt(Yt),lt=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=n}add(e,t,i,s,r){if(Object(i)===i)return new Xt(this,e,t,i);const n=e[t];switch(typeof n){case"number":return new jt(this,e,t,i,s,r);case"boolean":return new Ut(this,e,t);case"string":return new Gt(this,e,t);case"function":return new Ve(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,n)}addColor(e,t,i=1){return new Ht(this,e,t,i)}addFolder(e){const t=new ue({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ve||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ve)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Zt{constructor(e,t){this.editor=e,this.gui=new ue({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(n=>n.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera");const s=(n,a=null)=>{if(!n)return;const l=a||this.gui,c=n.name||"Object";if(l.add({select:()=>this.editor.selectObject(n)},"select").name(c),n.transform&&n.transform.children&&n.transform.children.length>0){const h=l.addFolder(`${c} Children`);for(const d of n.transform.children)d.gameObject&&s(d.gameObject,h)}};(this.editor.game.scene||[]).forEach((n,a)=>{n&&s(n)})}}class Kt{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(r=>r.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject",s=this.gui.addFolder("Object Settings");if(s.add(t,"name").name("Name").listen(),typeof t.active<"u"&&s.add(t,"active").name("Active").listen(),t.transform){const r=t.transform,n=this.gui.addFolder(`Transform: ${i}`),a=n.addFolder("Position");a.add(r.position,"x").step(.01).listen().name("X"),a.add(r.position,"y").step(.01).listen().name("Y"),a.add(r.position,"z").step(.01).listen().name("Z");const l=n.addFolder("Rotation");l.add(r.rotation,"x").step(.01).listen().name("X"),l.add(r.rotation,"y").step(.01).listen().name("Y"),l.add(r.rotation,"z").step(.01).listen().name("Z");const c=n.addFolder("Scale");c.add(r.scale,"x").step(.01).listen().name("X"),c.add(r.scale,"y").step(.01).listen().name("Y"),c.add(r.scale,"z").step(.01).listen().name("Z")}if(t instanceof je){const r=this.gui.addFolder("Camera Settings");r.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const n=r.addFolder("Perspective");n.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),r.addFolder("Orthographic").add(t,"orthoSize",.1,100).step(1).name("Size (Half Height)").onChange(()=>t.updateProjection()),r.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),r.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),n.open()}if(t.material){const r=this.gui.addFolder("Material");r.add(t.material,"name").name("Material Name").disable().listen(),r.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}if(t.transform&&t.transform.children&&t.transform.children.length>0){const r=this.gui.addFolder("Children");t.transform.children.forEach((n,a)=>{if(n.gameObject){const l=n.gameObject,c=l.name||`Child ${a}`;r.add({select:()=>this.editor.selectObject(l)},"select").name(c)}}),r.open()}}}class Qt{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(s=>s.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const s in t){const r=t[s];i.add({select:()=>this.inspect(r)},"select").name(s)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(s=>s.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const s=e.uniforms[i],r=s.value;if(s.type,Array.isArray(r)||r instanceof Float32Array)if(i.toLowerCase().includes("color")&&(r.length===3||r.length===4))t.addColor(s,"value").name(i).listen();else{const a=t.addFolder(i),l=["x","y","z","w"];for(let c=0;c<r.length;c++){const h={get val(){return r[c]},set val(d){r[c]=d}};a.add(h,"val").step(.01).name(l[c]||`[${c}]`).listen()}}else if(typeof r=="number"){const n={get val(){return s.value},set val(l){s.value=l}};let a=t.add(n,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else r instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class Jt{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,s)=>{const r=this.gui.addFolder(`${s}: ${i.name||"Pass"}`);if(r.add(i,"enabled").name("Active"),r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const l={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(c){i.clearColor[0]=c[0],i.clearColor[1]=c[1],i.clearColor[2]=c[2]}};r.addColor(l,"color").name("Clear Color")}i.renderTarget?r.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():r.add({info:"Screen"},"info").name("Target").disable(),i.material&&r.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const n={show:!1},a=r.addFolder("Performance Details");a.add(n,"show").name("List Draw Calls").onChange(l=>{l?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,s)=>{const r=e.addFolder(`Draw ${s}: ${i.object}`);r.add(i,"material").name("Material").disable(),r.add(i,"shader").name("Shader").disable(),r.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class ei{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!1,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const e=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(t=>{e&&e.profiler&&(t?e.profiler.enable():e.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(t=>{e&&e.profiler&&(e.profiler.devToolsEnabled=t)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const e=this.frameTimeCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled||!t.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,s=this.frameTimeCanvas.height;e.clearRect(0,0,i,s);const r=Math.min(t.frameTimeHistory.length,this.stats.avgFrames);if(r<2)return;const n=[];for(let h=t.frameTimeHistory.length-r;h<t.frameTimeHistory.length;h++)n.push(t.frameTimeHistory[h]);let a=0,l=100;const c=l-a;e.beginPath(),e.strokeStyle="#4363d8",e.lineWidth=1.5;for(let h=0;h<n.length;h++){const d=h/(n.length-1)*i,u=s-(n[h]-a)/c*s*.8-s*.1;h===0?e.moveTo(d,u):e.lineTo(d,u)}e.stroke(),e.fillStyle="#fff",e.font="10px monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`Max: ${l.toFixed(1)}ms`,5,5),e.textBaseline="bottom",e.fillText(`Min: ${a.toFixed(1)}ms`,5,s-5),e.textAlign="right",e.textBaseline="top",e.fillText(`Delta time: ${n[r-1].toFixed(2)}`,i-5,5)}drawGraph(){const e=this.graphCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,s=this.graphCanvas.height;if(e.clearRect(0,0,i,s),!t.metrics||!t.metrics.passes||t.metrics.passes.length===0)return;const r=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let n=[],a=0;if(this.stats.pieMode==="Average"){let b=0;const E=this.stats.avgFrames;for(const g in t.passHistory){const C=t.passHistory[g];if(C.length>0){let y=0,p=Math.min(C.length,E);for(let A=C.length-p;A<C.length;A++)y+=C[A];const F=y/p;n.push({name:g,duration:F,color:r[b%r.length]}),a+=F}b++}}else t.metrics.passes.forEach((b,E)=>{n.push({name:b.name,duration:b.duration,color:r[E%r.length]}),a+=b.duration});if(a<=0)return;const l=i*.3,c=s/2,h=Math.max(0,Math.min(l,c)-10);if(h<=0)return;let d=-.5*Math.PI;n.forEach(b=>{if(b.duration<=0)return;const E=b.duration/a*2*Math.PI;if(e.beginPath(),e.moveTo(l,c),e.arc(l,c,h,d,d+E),e.closePath(),e.fillStyle=b.color,e.fill(),E>.3){const g=d+E/2,C=l+Math.cos(g)*(h*.6),y=c+Math.sin(g)*(h*.6);e.fillStyle="#000",e.font="10px bold sans-serif",e.textAlign="center",e.textBaseline="middle";const p=b.name.replace("Pass","").substring(0,6);e.fillText(p,C,y)}d+=E});const u=l+h+20;let f=20;const v=16;e.textAlign="left",e.font="10px monospace",n.forEach(b=>{e.fillStyle=b.color,e.fillRect(u,f-8,10,10),e.fillStyle="#fff";const E=(b.duration/a*100).toFixed(1);e.fillText(`${b.name.substring(0,10)}: ${b.duration.toFixed(2)}ms (${E}%)`,u+15,f),f+=v})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const s=this.passesFolder.addFolder(i.name||"Pass");s.add(i,"drawCount").name("Draw Calls").disable().listen(),s.add(i,"executionTime").name("Perf (ms)").disable().listen(),s.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;const t=e.profiler;if(!t)return;if(this.stats.fps=Math.round(t.fps||0),t.fpsHistory&&t.fpsHistory.length>0){let d=0,u=Math.min(t.fpsHistory.length,this.stats.avgFrames),f=[];for(let E=t.fpsHistory.length-u;E<t.fpsHistory.length;E++)d+=t.fpsHistory[E],f.push(t.fpsHistory[E]);this.stats.avgFps=Math.round(d/u),f.sort((E,g)=>E-g);let v=Math.floor(f.length*.01),b=Math.floor(f.length*.99);b>=f.length&&(b=f.length-1),this.stats.fps1Low=Math.round(f[v]||this.stats.fps),this.stats.fps1High=Math.round(f[b]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(t.metrics.cpuTime||0).toFixed(2);let i=0,s=0,r=0;t.metrics&&t.metrics.passes&&(this.stats.totalPasses=t.metrics.passes.length,t.metrics.passes.forEach(d=>{i+=d.drawCalls.length,s+=d.duration,d.drawCalls.forEach(u=>r+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=r,this.stats.gpuTotal=s.toFixed(3);const n=t.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},a=(n.vertices/(1024*1024)).toFixed(2),l=(n.renderTargets/(1024*1024)).toFixed(2),c=(n.textures/(1024*1024)).toFixed(2),h=(n.total/(1024*1024)).toFixed(2);this.stats.approxMemory=h+" MB",this.stats.memoryVertices=a+" MB",this.stats.memoryRenderTargets=l+" MB",this.stats.memoryTextures=c+" MB",this.showPassDetails}}class ti{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"Info & Credits",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const e={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(e,"openGithub").name("Made by Tanpi");const t=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};t.add(i,"move").name("Movement").disable(),t.add(i,"look").name("Camera").disable(),t.add(i,"hideUi").name("Ui").disable();const s=this.gui.addFolder("Asset Credits"),r={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};s.add(r,"openKenney").name("Kenney (kenney.nl)"),s.add(r,"openWill").name("will.nsq (Sketchfab)")}}class ii{constructor(e,t){this.editor=e,this.container=t,this.gui=new ue({container:t,title:"World",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto";const i=this.editor.game&&this.editor.game.floatingSpawnConfig?this.editor.game.floatingSpawnConfig.seed:0;this.state={seed:Number.isFinite(i)?i:0,respawn:()=>this.respawnWithSeed(this.state.seed),randomize:()=>{const s=Math.floor(Math.random()*1e6);this.state.seed=s,this.seedController&&this.seedController.updateDisplay(),this.respawnWithSeed(s)}},this.init()}init(){this.seedController=this.gui.add(this.state,"seed",0,1e6,1).name("Seed"),this.seedController.listen();const e=this.editor.game&&this.editor.game.cameraController?this.editor.game.cameraController.moveSpeed:10;this.state.moveSpeed=e,this.moveSpeedController=this.gui.add(this.state,"moveSpeed",1,100,.5).name("Move Speed"),this.moveSpeedController.onChange(i=>{try{this.editor.game&&this.editor.game.cameraController&&(this.editor.game.cameraController.moveSpeed=i)}catch(s){console.warn("Failed to set camera moveSpeed",s)}}),this.gui.add(this.state,"respawn").name("Respawn"),this.gui.add(this.state,"randomize").name("Random Seed");const t={Random:"Random reroll"};this.gui.add(t,"Random").name("Random").disable()}async respawnWithSeed(e){!this.editor.game||typeof this.editor.game.respawnWithSeed!="function"||await this.editor.game.respawnWithSeed(e)}}class si{constructor(e){this.game=e,this.wm=new Ot,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new Zt(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new Kt(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new Qt(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const s=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new Jt(this,s.content),this.wm.addNavItem("PASSES",s.window),s.window.style.display="none";const r=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new ei(this,r.content),this.wm.addNavItem("PROFILER",r.window),r.window.style.display="none";const n=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new ti(this,n.content),this.wm.addNavItem("INFO",n.window),n.window.style.display="none";const a=this.wm.createWindow("World",680,440,260,220);this.windows.world=new ii(this,a.content),this.wm.addNavItem("WORLD",a.window),a.window.style.display="none";let l=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(l=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(l,c=>{this.game.setViewports(c)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class ri{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.shiftPressed=!1,this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const s=Math.PI/2-.01;this.rotation.x=Math.max(-s,Math.min(s,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();if(i==="shift"){this.shiftPressed=t;return}this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*(this.shiftPressed?2:1)*e,i=this.camera.transform,s=Math.sin(i.rotation.y),r=Math.cos(i.rotation.y),n=-s,a=-r,l=r,c=-s;let h=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(h-=1),this.keys.d&&(h+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),h!==0||d!==0){const f=Math.sqrt(h*h+d*d);h/=f,d/=f}i.position.x+=(n*d+l*h)*t,i.position.z+=(a*d+c*h)*t,i.position.y+=u*t}}class ni extends ie{constructor(e,t,i,s){super(e,t,i,s),this.velocity={x:0,y:0,z:0},this.currentDirection={x:1,y:0,z:0},this.speed=0,this.avoidanceRadius=3,this.avoidanceForce=.5}update(e,t,i,s,r){const n={x:t.x*i*this.speed,z:t.z*i*this.speed},a=this.calculateAvoidance(r);this.velocity.x=n.x+a.x,this.velocity.z=n.z+a.z,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.wrapBounds(s)}calculateAvoidance(e){const t={x:0,z:0};if(!e||!Array.isArray(e))return t;for(let i of e){if(i===this||!i.transform)continue;const s=this.transform.position.x-i.transform.position.x,r=this.transform.position.z-i.transform.position.z,n=s*s+r*r,a=this.avoidanceRadius+(i.avoidanceRadius||1);if(n<a*a&&n>.01){const l=Math.sqrt(n),c=this.avoidanceForce/(l+.1);t.x+=s/l*c,t.z+=r/l*c}}return t}wrapBounds(e){const t=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,t.x>e.maxX?t.x=e.minX+(t.x-e.maxX):t.x<e.minX&&(t.x=e.maxX+(t.x-e.minX)),t.z>e.maxZ?t.z=e.minZ+(t.z-e.maxZ):t.z<e.minZ&&(t.z=e.maxZ+(t.z-e.minZ))}}class oi extends ie{constructor(e,t,i,s){super(e,t,i,s),this.velocity={x:0,y:0,z:0},this.forwardDirection={x:0,y:0,z:0},this.speed=0,this.heading=0,this.avoidanceRadius=5,this.avoidanceForce=1,this.viewRadius=20,this.maxTurnSpeed=Math.PI*.5,this.targetHeading=Math.random()*Math.PI*2,this.preferredDirection={x:0,y:0,z:1},this.wanderHeading=this.targetHeading,this.steeringInfluence=0,this.boundsBuffer=15,this.centerAttraction=.3,this.cohesionRadius=30,this.separationRadius=8,this.cohesionWeight=.4,this.separationWeight=.4}update(e,t,i){this.updateWandering(e,t),this.updateSteering(i,t);const s=this.speed/10*Math.PI;this.heading=this.lerpAngle(this.heading,this.targetHeading,s*e),this.forwardDirection.x=Math.sin(this.heading),this.forwardDirection.z=Math.cos(this.heading),this.velocity.x=this.forwardDirection.x*this.speed,this.velocity.z=this.forwardDirection.z*this.speed,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.enforceBounds(t),this.transform.rotation.y=this.heading}updateWandering(e,t){this.steeringInfluence=Math.sin(re.time*.628)*.5,this.wanderHeading+=(Math.random()-.5)*.001*e}updateSteering(e,t){if(this.isShipNearby(e)){const s=this.calculateAvoidanceHeading(e);this.targetHeading=s}else{const s=this.calculateCenterAttraction(),r=this.calculateCohesion(e),n=this.calculateSeparation(e),a=this.calculateBoundsHeading(t);let l;if(a!==null)l=a;else if(r!==null||n!==null){let c=0,h=0;r!==null&&(c+=Math.sin(r)*this.cohesionWeight,h+=Math.cos(r)*this.cohesionWeight),n!==null&&(c+=Math.sin(n)*this.separationWeight,h+=Math.cos(n)*this.separationWeight),c+=Math.sin(s)*.1,h+=Math.cos(s)*.1,l=Math.atan2(c,h)}else{const c=this.wanderHeading,h=this.steeringInfluence*.2;let d=Math.sin(c+h)*.7,u=Math.cos(c+h)*.7;d+=Math.sin(s)*this.centerAttraction,u+=Math.cos(s)*this.centerAttraction,l=Math.atan2(d,u)}this.targetHeading=l}}isShipNearby(e){if(!e||!Array.isArray(e))return!1;const t=this.viewRadius*1.5;for(let i of e){if(i===this||!i.transform||i.constructor.name!=="Ship")continue;const s=i.transform.position.x-this.transform.position.x,r=i.transform.position.z-this.transform.position.z;if(s*s+r*r<t*t)return!0}return!1}calculateCenterAttraction(){const e=this.transform.position,t={x:-e.x,z:-e.z},i=Math.sqrt(t.x*t.x+t.z*t.z);return i<.1?Math.atan2(0,1):Math.atan2(t.x/i,t.z/i)}calculateCohesion(e){if(!e||!Array.isArray(e))return null;let t=[];const i=this.transform.position;for(let a of e){if(a===this||!a.transform||a.constructor.name!=="Ship")continue;const l=a.transform.position.x-i.x,c=a.transform.position.z-i.z,h=l*l+c*c;h<this.cohesionRadius*this.cohesionRadius&&h>.01&&t.push({dx:l,dz:c,dist:Math.sqrt(h)})}if(t.length===0)return null;let s=0,r=0;for(let a of t)s+=a.dx/a.dist,r+=a.dz/a.dist;s/=t.length,r/=t.length;const n=Math.sqrt(s*s+r*r);return n<.1?null:Math.atan2(s/n,r/n)}calculateSeparation(e){if(!e||!Array.isArray(e))return null;let t={x:0,z:0};const i=this.transform.position;let s=!1;for(let n of e){if(n===this||!n.transform||n.constructor.name!=="Ship")continue;const a=i.x-n.transform.position.x,l=i.z-n.transform.position.z,c=a*a+l*l;if(c<this.separationRadius*this.separationRadius&&c>.01){const h=Math.sqrt(c),d=(this.separationRadius-h)/this.separationRadius;t.x+=a/h*d,t.z+=l/h*d,s=!0}}if(!s)return null;const r=Math.sqrt(t.x*t.x+t.z*t.z);return r<.1?null:Math.atan2(t.x/r,t.z/r)}calculateAvoidanceHeading(e){let t=0,i=0;if(!e||!Array.isArray(e))return Math.atan2(this.forwardDirection.x,this.forwardDirection.z);for(let n of e){if(n===this||!n.transform)continue;const a=n.transform.position.x-this.transform.position.x,l=n.transform.position.z-this.transform.position.z,c=a*a+l*l;if(a*this.forwardDirection.x+l*this.forwardDirection.z<0||c>this.viewRadius*this.viewRadius)continue;const d=this.avoidanceRadius+(n.avoidanceRadius||1);if(c<d*d&&c>.01){const u=Math.sqrt(c),f=this.avoidanceForce/(u+.1);t-=a/u*f,i-=l/u*f}}const s=this.forwardDirection.x*.7+t*.3,r=this.forwardDirection.z*.7+i*.3;return Math.atan2(s,r)}calculateBoundsHeading(e){const t=this.transform.position;let i=0,s=0,r=!1;const n=t.x-e.minX,a=e.maxX-t.x,l=t.z-e.minZ,c=e.maxZ-t.z;return n<this.boundsBuffer&&(i+=(this.boundsBuffer-n)/this.boundsBuffer,r=!0),a<this.boundsBuffer&&(i-=(this.boundsBuffer-a)/this.boundsBuffer,r=!0),l<this.boundsBuffer&&(s+=(this.boundsBuffer-l)/this.boundsBuffer,r=!0),c<this.boundsBuffer&&(s-=(this.boundsBuffer-c)/this.boundsBuffer,r=!0),r&&(i!==0||s!==0)?Math.atan2(i,s):null}enforceBounds(e,t=2){const i=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,i.x>e.maxX?i.x=e.minX+(i.x-e.maxX):i.x<e.minX&&(i.x=e.maxX+(i.x-e.minX)),i.z>e.maxZ?i.z=e.minZ+(i.z-e.maxZ):i.z<e.minZ&&(i.z=e.maxZ+(i.z-e.minZ))}lerpAngle(e,t,i){let s=this.normalizeAngle(t-e);return s=Math.max(-i,Math.min(i,s)),e+s}normalizeAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}}/*! CONTINENT - Optimized Noise Generator */const Ee=function(){const o={};function e(m){const M="p_"+m;if(o[M])return o[M];let T=m^305419896;function x(){return T=T*1664525+1013904223>>>0,T/4294967296}const w=new Array(256);for(let S=0;S<256;S++)w[S]=S;for(let S=255;S>0;S--){const P=Math.floor(x()*(S+1)),D=w[S];w[S]=w[P],w[P]=D}const R=new Uint8Array(512);for(let S=0;S<512;S++)R[S]=w[S&255];return o[M]=R,R}function t(m,M,T){let x=T;return x^=m*73856093^M*19349663,x=(x^x>>>16)*2246822507,x=x^x>>>13,x}function i(m){return(m&2147483647)/2147483647}function s(m){return m*m*m*(m*(m*6-15)+10)}function r(m,M,T){return m+T*(M-m)}function n(m,M,T,x){m&=15;const w=m<8?M:T,R=m<4?T:m===12||m===14?M:x;return(m&1?-w:w)+(m&2?-R:R)}function a(m,M,T,x){const w=Math.floor(M)&255,R=Math.floor(T)&255,S=Math.floor(x)&255;M-=Math.floor(M),T-=Math.floor(T),x-=Math.floor(x);const P=s(M),D=s(T),z=s(x),N=m[w]+R,V=m[w+1]+R,I=m[N]+S,G=m[N+1]+S,q=m[V]+S,K=m[V+1]+S;return r(r(r(n(m[I],M,T,x),n(m[q],M-1,T,x),P),r(n(m[G],M,T-1,x),n(m[K],M-1,T-1,x),P),D),r(r(n(m[I+1],M,T,x-1),n(m[q+1],M-1,T,x-1),P),r(n(m[G+1],M,T-1,x-1),n(m[K+1],M-1,T-1,x-1),P),D),z)*.5+.5}function l(m,M,T,x,w,R){let S=0,P=1,D=1,z=0;for(let N=0;N<w;N++)S+=a(m,M*D,T*D,x)*P,z+=P,P*=R,D*=2;return S/z}function c(m,M,T,x,w={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:R=60,octaves:S=4,falloff:P=.5}=w,D=e(x),z=m/R,N=M/R,V=l(D,z,N,T,S,P);return $(V,w)}function h(m,M,T,x,w={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:R=60,octaves:S=4,falloff:P=.5}=w,D=e(x),z=m/R,N=M/R;let V=0,I=1,G=1,q=0;for(let K=0;K<S;K++){const me=a(D,z*G,N*G,T);V+=(1-Math.abs(me*2-1))*I,q+=I,I*=P,G*=2}return $(V/q,w)}function d(m,M,T,x,w={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:R=60,octaves:S=4,falloff:P=.5}=w,D=e(x),z=m/R,N=M/R;let V=0,I=1,G=1,q=0;for(let K=0;K<S;K++){const me=a(D,z*G,N*G,T);V+=Math.abs(me*2-1)*I,q+=I,I*=P,G*=2}return $(V/q,w)}function u(m,M,T,x=0){const w=Math.sin(m*127.1+M*311.7+T*41.3)*43758.5453,R=Math.sin(m*269.5+M*183.3+T*41.3)*43758.5453;let S=w-Math.floor(w),P=R-Math.floor(R);const D=v(S-.5,P-.5,x);return S=D.x+.5,P=D.y+.5,[S,P]}function f(m,M,T,x,w=0){const R=Math.floor(m/T),S=Math.floor(M/T),P=m/T-R,D=M/T-S;let z=2,N=2,V=R,I=S;for(let G=-1;G<=1;G++)for(let q=-1;q<=1;q++){const K=R+G,me=S+q,nt=u(K,me,x,w),ot=G+nt[0]-P,at=q+nt[1]-D,De=Math.sqrt(ot*ot+at*at);De<z?(N=z,z=De,V=K,I=me):De<N&&(N=De)}return{d1:z,d2:N,cx:V,cy:I}}function v(m,M,T){if(!T)return{x:m,y:M};const x=T*Math.PI/180,w=Math.cos(x),R=Math.sin(x);return{x:m*w-M*R,y:m*R+M*w}}function b(m,M,T,x,w){const R=f(m,M,x,T,w);return Math.min(1,R.d1)}function E(m,M,T,x,w={scale:60,angle:0,contrast:1,threshold:0}){const{scale:R=60,angle:S=0}=w,P=b(m,M,x,R,S);return $(P,w)}function g(m,M,T,x,w,R,S,P){let D=0,z=1,N=0,V=w;for(let I=0;I<S;I++)D+=b(m,M,x+I,V,R)*z,N+=z,z*=P,V*=.5;return D/N}function C(m,M,T,x,w={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:R=60,angle:S=0,octaves:P=4,falloff:D=.5}=w,z=g(m,M,T,x,R,S,P,D);return $(z,w)}function y(m,M,T,x,w={scale:60,angle:0,contrast:1,threshold:0}){const{scale:R=60,angle:S=0}=w,P=f(m,M,R,x,S),D=P.d2-P.d1,z=Math.min(1,D*2);return $(z,w)}function p(m,M,T,x,w={scale:60,angle:0,contrast:1,threshold:0}){const{scale:R=60,angle:S=0}=w,P=1-b(m,M,x,R,S);return $(P,w)}function F(m,M,T,x,w={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:R=60,angle:S=0,octaves:P=4,falloff:D=.5}=w,z=1-g(m,M,T,x,R,S,P,D);return $(z,w)}function A(m,M,T,x,w={scale:60,contrast:1,threshold:0}){const{scale:R=60}=w,S=(Math.sin(m/R*6.28+T*5+x*.01)+1)/2;return $(S,w)}function B(m,M,T,x,w={scale:60,contrast:1,threshold:0}){const{scale:R=60}=w,S=(Math.sin(M/R*6.28+T*5+x*.01)+1)/2;return $(S,w)}function k(m,M,T,x,w={scale:60,contrast:1,threshold:0}){const{scale:R=60}=w,S=Math.sqrt(m*m+M*M)/R,P=(Math.sin(S*6.28+T*5+x*.01)+1)/2;return $(P,w)}function W(m,M,T,x,w={scale:60,contrast:1,threshold:0}){const{scale:R=60}=w,S=x%2===0?0:1,P=(Math.floor(m/R)+Math.floor(M/R)+S)%2===0?1:0;return $(P,w)}function O(m,M,T,x,w={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0}){const{scale:R=60,octaves:S=4,falloff:P=.5,warpStrength:D=.8}=w,z=e(x),N=m/R,V=M/R,I=e(x+12345),G=e(x+54321),q=a(I,N,V,T)*R*D,K=a(G,N+5.2,V+1.3,T)*R*D,me=l(z,(m+q)/R,(M+K)/R,T+.5,S,P);return $(me,w)}function X(m,M,T,x,w={scale:60,angle:0,contrast:1,threshold:0}){const{scale:R=60,angle:S=0}=w,P=f(m,M,R,x,S),D=i(t(P.cx,P.cy,x+9001));return $(D,w)}function ee(m){return m<0?0:m>1?1:m}function $(m,M){const T=M||{},x=typeof T.contrast=="number"?T.contrast:1,w=typeof T.threshold=="number"?T.threshold:0;return x!==1&&(m=(m-.5)*x+.5),m=ee(m),w>0&&(m=m>=w?1:0),ee(m)}function U(m){return Pe[m]||c}const Pe={perlin:c,ridged:h,billowy:d,voronoi:E,voronoi_edge:p,voronoi_cracks:y,voronoi_cell:X,worley:C,worley_edge:F,sine_x:A,sine_y:B,sine_radial:k,checkerboard:W,domain_warp:O};return{perlin:c,ridged:h,billowy:d,voronoi:E,voronoiEdge:p,voronoiCracks:y,voronoiCell:X,worley:C,worleyEdge:F,sineX:A,sineY:B,sineRadial:k,checkerboard:W,domainWarp:O,getNoiseFunction:U,clamp01:ee,seededPerm:e,pnoise:a,fbm:l,types:Object.keys(Pe)}}();typeof ke<"u"&&ke.exports&&(ke.exports=Ee);const Re=function(){const o={res:4,color:"custom_1776181641920",offsetX:190,offsetY:-110,zoom:1.753256159054796},e=[{id:3,type:"perlin",scale:400,octaves:3,falloff:.5,seed:0,weight:1,contrast:2.7,threshold:0,z:0,offsetX:0,offsetY:0,blend:"avg",visible:!0,collapsed:!0,paramsMeta:{scale:{type:"range",min:10,max:500,step:1},octaves:{type:"number",min:1,max:8,step:.01},falloff:{type:"number",step:.01},contrast:{type:"number",step:.01},threshold:{type:"number",step:.01}},params:{scale:400,octaves:3,falloff:.5,contrast:5,threshold:0},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"range",min:0,max:9999,step:1}}},{id:4,type:"voronoi_edge",seed:0,z:0,offsetX:0,offsetY:0,blend:"mul",visible:!0,collapsed:!0,params:{scale:500,angle:0,contrast:1,threshold:0},paramsMeta:{scale:{type:"number"},angle:{type:"number"},contrast:{type:"number"},threshold:{type:"number"}},fixedMeta:{},scale:60},{id:5,type:"domain_warp",seed:0,z:0,offsetX:0,offsetY:0,blend:"mul",visible:!0,collapsed:!1,params:{scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0},paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},warpStrength:{type:"number"},contrast:{type:"number"},threshold:{type:"number"}},fixedMeta:{},scale:60}],t={FBMPerlin:{scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}},i={FBMPerlin:{scale:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},octaves:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}}},s={};function r(n,a,l=0){let c=0;const h={scale:400,octaves:3,falloff:.5,contrast:5,threshold:0},d=s.perlin||Ee.getNoiseFunction("perlin"),u=(n+o.offsetX)*o.zoom+0,f=(a+o.offsetY)*o.zoom+0;let v=d(u,f,l+0,0,h);v=v<0?0:v>1?1:v,c=v;const b={scale:500,angle:0,contrast:1,threshold:0},E=s.voronoi_edge||Ee.getNoiseFunction("voronoi_edge"),g=(n+o.offsetX)*o.zoom+0,C=(a+o.offsetY)*o.zoom+0;let y=E(g,C,l+0,0,b);y=y<0?0:y>1?1:y,c*=y;const p={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0},F=s.domain_warp||Ee.getNoiseFunction("domain_warp"),A=(n+o.offsetX)*o.zoom+0,B=(a+o.offsetY)*o.zoom+0;let k=F(A,B,l+0,0,p);return k=k<0?0:k>1?1:k,c*=k,o.invert&&(c=1-c),c}return{getValue:r,setOffsets:(n,a)=>{o.offsetX=n,o.offsetY=a},getState:()=>({...o}),getLayers:()=>[...e],getParamDefaults:()=>({...t}),getParamMeta:()=>({...i}),NoiseLib:Ee,customFunctions:s,projectName:"CONTINENT"}}();typeof window<"u"&&(window.CONTINENT=Re);class ai{constructor(e,t,i,s,r=12345){this.gl=e,this.renderer=t,this.material=i,this.scene=s,this.meshCache={},this.seed=r,this.currentState=r;const n=l=>l<=.3,a=l=>l>=.3&&l<=.4;this.models=[{file:"barrel.obj",name:"Barrel",type:"container",rotationMode:"3d",scale:1,yOffset:-.2,probability:.25,thresholdCallback:a},{file:"crate.obj",name:"Crate",type:"container",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.15,thresholdCallback:a},{file:"chest.obj",name:"Treasure Chest",type:"container",rotationMode:"y-only",scale:1,yOffset:-.3,probability:.15,thresholdCallback:a},{file:"bottle.obj",name:"Bottle",type:"bottle",rotationMode:"3d",scale:1,yOffset:-.5,probability:.22,thresholdCallback:a},{file:"bottle-large.obj",name:"Large Bottle",type:"bottle",rotationMode:"y-only",scale:1,yOffset:-.5,probability:.08,thresholdCallback:a},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-pirate-large.obj",name:"Pirate Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-pirate-medium.obj",name:"Pirate Ship Medium",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-pirate-small.obj",name:"Pirate Ship Small",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-medium.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"ship-small.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1,probability:.005,thresholdCallback:n},{file:"boat-row-large.obj",name:"Rowboat Large",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.15,thresholdCallback:a},{file:"boat-row-small.obj",name:"Rowboat Small",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.18,thresholdCallback:a},{file:"platform.obj",name:"Platform",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.2,thresholdCallback:a},{file:"platform-planks.obj",name:"Platform Planks",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.15,probability:.18,thresholdCallback:a}],this.loadedMeshCount=0}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let e=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}setSeed(e){this.seed=e,this.currentState=e}async loadMesh(e){if(this.meshCache[e])return this.meshCache[e];try{const t=await we.load(this.gl,`./Assets/3D/Floating/${e}`);return this.meshCache[e]=t,this.loadedMeshCount++,t}catch(t){return console.error(`Failed to load ${e}:`,t),null}}getRandomModel(){const e=this.models.reduce((i,s)=>i+(s.probability||0),0);let t=this.seededRandom()*e;for(let i of this.models)if(t-=i.probability||0,t<=0)return i;return this.models[0]}getRandomPosition(e,t,i,s,r){return{x:e+this.seededRandom()*(t-e),y:r,z:i+this.seededRandom()*(s-i)}}getRandomRotation(e){return e==="y-only"?{x:0,y:this.seededRandom()*Math.PI*2,z:0}:e==="3d"?{x:this.seededRandom()*Math.PI*2,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*2}:{x:0,y:0,z:0}}async spawnRandomObject(e,t=null){const i=t!==null&&t<this.models.length?this.models[t]:this.getRandomModel(),s=await this.loadMesh(i.file);if(!s)return null;const r=`${i.name} [Floating]`;let n;i.type==="ship"||i.type==="boat"?(n=new oi(this.renderer,this.material,s,r),n.speed=0,n.heading=this.seededRandom()*Math.PI*2):(n=new ni(this.renderer,this.material,s,r),n.speed=.2+this.seededRandom()*.3,n.avoidanceRadius=2),n.transform.position.set(e.x,e.y+(i.yOffset||0),e.z),n.transform.scale.set(i.scale,i.scale,i.scale);const a=this.getRandomRotation(i.rotationMode);return n.transform.rotation.set(a.x,a.y,a.z),this.scene.push(n),n}async spawnMany(e,t,i=-7){const s=[],r=Re;for(let a=0;a<e;a++){let l,c,h;do{l=this.getRandomPosition(t.minX,t.maxX,t.minZ,t.maxZ,i);let u=l.x+255*Math.sqrt(3)/2,f=l.z+255*1.5/2;var n=r.getValue(u,f);c=this.getRandomModel(),h=c.thresholdCallback?c.thresholdCallback(n):!0}while(!h);const d=await this.spawnRandomObject(l,this.models.indexOf(c));d&&s.push(d)}return s}getAvailableModels(){return this.models.map((e,t)=>({index:t,name:e.name,file:e.file,type:e.type,rotationMode:e.rotationMode,yOffset:e.yOffset,probability:e.probability}))}clearAllSpawned(){}}const Ye=`precision highp float;\r
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
`,li=`precision highp float;\r
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
`,hi=`precision highp float;\r
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
`,ci=`precision highp float;\r
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
}`,di=`precision highp float;\r
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
}`,ui=`precision highp float;\r
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
if (depthEdge > (uDepthThreshold / uEdgeWidth)) {\r
    finalColor = quantizedColor * uSilhouetteDarkening;\r
} \r
// 2. Only check Normal Edge if Depth Edge didn't trigger\r
else if (normalEdge > uNormalThreshold) {\r
    finalColor = quantizedColor * uCreaseDarkening;\r
} \r
// 3. Optional: Fallback to the base quantized color\r
else {\r
    finalColor = quantizedColor;\r
}\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,fi=`precision highp float;\r
\r
#define VERTEX\r
\r
uniform vec2 uWind;\r
uniform float uScale;\r
uniform float uTime;\r
uniform float uSpeed; \r
uniform float udisplacement; // Overall amplitude multiplier\r
\r
out float vNoise; // Re-using this to pass wave height to fragment\r
out vec3 vWorldPos; // Pass world position to fragment for wave calculations\r
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
}`,mi=`precision highp float;\r
\r
#define FRAGMENT\r
in float vNoise;\r
in vec3 vWorldPos;\r
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
}`,pi=`precision highp float;\r
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
out vec3 vWorldPos;\r
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
}`,qe=`#version 300 es\r
precision highp float;\r
\r
in vec3 aVertexPosition;\r
in vec3 aNormal;\r
in vec3 aColor;\r
in vec2 aTexCoord;\r
\r
uniform mat4 uViewMatrix;\r
uniform mat4 uProjectionMatrix;\r
uniform mat4 uModelMatrix;\r
uniform vec3 uCameraPos;\r
\r
out vec3 vNormal;\r
out vec3 vPosition;\r
out vec3 vColor;\r
out vec2 vTexCoord;\r
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
\r
    // Spherical transformation relative to camera position\r
    vec3 pos = worldPos;\r
    vec3 offsetFromCamera = pos - uCameraPos;\r
    float r = (offsetFromCamera.x * offsetFromCamera.x) + (offsetFromCamera.z * offsetFromCamera.z);\r
    \r
    gl_Position = uProjectionMatrix * uViewMatrix * (vec4(pos, 1.0) + vec4(0.0, r / -4000.0, 0.0, 0.0));\r
\r
}\r
`,Ze=`#version 300 es\r
precision highp float;\r
\r
uniform int uRenderMode;\r
in vec3 vNormal;\r
in vec3 vPosition;\r
in vec3 vColor;\r
in vec2 vTexCoord;\r
\r
uniform vec4 uColor;\r
uniform float uRoughness;\r
uniform sampler2D uMainTex;\r
uniform float uHasTexture;\r
\r
out vec4 FragColor;\r
\r
void fragment(inout vec4 color, inout vec3 normal, inout float emission);\r
\r
void main() {\r
    vec4 color = vec4( 1.0);\r
\r
    if (uHasTexture > 0.1) {\r
        color *= texture(uMainTex, vTexCoord);\r
    }\r
    else\r
    {\r
        color = vec4(vColor, 1.0);\r
    }\r
    \r
    // Flat shading: compute face normal from screen-space derivatives\r
    vec3 fdx = dFdx(vPosition);\r
    vec3 fdy = dFdy(vPosition);\r
    vec3 normal = normalize(cross(fdx, fdy));\r
    \r
    float emission = 0.0;\r
    vec2 uv = vTexCoord;\r
\r
    #ifdef FRAGMENT\r
        fragment(color, normal, emission);\r
    #endif\r
\r
    if (uRenderMode == 0)\r
    {\r
        FragColor = vec4(color.rgb, uRoughness);\r
    }\r
    else if (uRenderMode == 1) // Normal + depth\r
    {\r
        float near = 0.1; \r
        float far = 100.0; \r
    \r
        float z = gl_FragCoord.z * 2.0 - 1.0; \r
        float linearDepth = (2.0 * near * far) / (far + near - z * (far - near)); \r
        \r
        linearDepth /= far; \r
\r
        FragColor = vec4(normal * 0.5 + 0.5, linearDepth);\r
    } \r
    else\r
    {\r
        FragColor = vec4(vPosition, 1.0);\r
    }\r
}`;class ye extends Xe{static terrainColor(e){return e<=.3?[14/255,54/255,124/255]:e<=.35?[30/255,80/255,200/255]:e<=.4?[242/255,151/255,106/255]:[234/255,191/255,145/255]}static terrainValue(e){return e<=.3?37/255:e<=.35?73/255:e<=.4?142/255:e<=.7?181/255:1}constructor(e,t=20,i=15,s=1,r=!1){const n=s*Math.sqrt(3),a=s*1.5,l=t*n,c=i*a,h=[],d={},u=[],f=Re;let v=0;const b={};for(let p=0;p<=i;p++){const F=p%2!==0?n/2:0;for(let A=0;A<=t;A++){const B=A*n+F,k=p*a,W=f.getValue(B,k,0);r&&(v=ye.terrainValue(W)*20),b[`${p}_${A}`]=v}}for(let p=0;p<=i;p++){const F=p%2!==0?n/2:0;for(let A=0;A<=t;A++){const B=A*n+F,k=p*a;v=b[`${p}_${A}`];const W=f.getValue(B,k,0),O=ye.terrainColor(W);d[`${p}_${A}`]=h.length/3,h.push(B,v,k),u.push(O[0],O[1],O[2])}}const E=[];function g(p,F){return d[`${p}_${F}`]??-1}for(let p=0;p<i;p++)for(let F=0;F<t;F++){const A=g(p,F),B=g(p,F+1),k=p%2===0?F:F+1,W=p%2===0?F-1:F,O=g(p+1,k),X=g(p+1,W);A!==-1&&B!==-1&&O!==-1&&E.push(A,O,B),A!==-1&&X!==-1&&O!==-1&&E.push(A,X,O)}const C=[];for(let p=0;p<h.length/3;p++){const F=h[p*3],A=h[p*3+2];C.push(F/l,A/c)}const y=new Float32Array(h.length);for(let p=0;p<E.length;p+=3){const F=E[p],A=E[p+1],B=E[p+2],k=h[F*3],W=h[F*3+1],O=h[F*3+2],X=h[A*3],ee=h[A*3+1],$=h[A*3+2],U=h[B*3],Pe=h[B*3+1],m=h[B*3+2],M=X-k,T=ee-W,x=$-O,w=U-k,R=Pe-W,S=m-O,P=T*S-x*R,D=x*w-M*S,z=M*R-T*w;y[F*3]+=P,y[F*3+1]+=D,y[F*3+2]+=z,y[A*3]+=P,y[A*3+1]+=D,y[A*3+2]+=z,y[B*3]+=P,y[B*3+1]+=D,y[B*3+2]+=z}for(let p=0;p<h.length/3;p++){const F=y[p*3],A=y[p*3+1],B=y[p*3+2],k=Math.sqrt(F*F+A*A+B*B)||1;y[p*3]=F/k,y[p*3+1]=A/k,y[p*3+2]=B/k}super(e,new Float32Array(h),new Float32Array(C),y,new Uint16Array(E)),this.colors=new Float32Array(u),this.colorBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer),e.bufferData(e.ARRAY_BUFFER,this.colors,e.STATIC_DRAW),this.cols=t,this.rows=i,this.radius=s,this.hSpacing=n,this.vSpacing=a,this.totalW=l,this.totalH=c}recomputeNormals(e){const t=this.gl,i=e.length/3,s=new Float32Array(i*3),r=this.indices;for(let n=0;n<r.length;n+=3){const a=r[n],l=r[n+1],c=r[n+2],h=e[a*3],d=e[a*3+1],u=e[a*3+2],f=e[l*3],v=e[l*3+1],b=e[l*3+2],E=e[c*3],g=e[c*3+1],C=e[c*3+2],y=f-h,p=v-d,F=b-u,A=E-h,B=g-d,k=C-u,W=B*F-k*p,O=k*y-A*F,X=A*p-B*y;s[a*3]+=W,s[a*3+1]+=O,s[a*3+2]+=X,s[l*3]+=W,s[l*3+1]+=O,s[l*3+2]+=X,s[c*3]+=W,s[c*3+1]+=O,s[c*3+2]+=X}for(let n=0;n<i;n++){const a=s[n*3],l=s[n*3+1],c=s[n*3+2],h=Math.sqrt(a*a+l*l+c*c)||1;s[n*3]=a/h,s[n*3+1]=l/h,s[n*3+2]=c/h}t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer),t.bufferData(t.ARRAY_BUFFER,s,t.DYNAMIC_DRAW),this.normals=s}}class gi{constructor(e,t,i,s,r=[],n={}){this.gl=e,this.renderer=t,this.material=i,this.scene=s,this.meshCache={},r&&typeof r=="object"&&!Array.isArray(r)&&(n=r,r=[]),this.seed=n.seed||12345,this.currentState=this.seed,this.noise=Re,this.threshold=n.threshold??.45;const a=f=>f>=.42,l=f=>f>=.45,c=f=>f>.5,h=f=>f<=.2,d=f=>f>=.43&&f<=.45,u=f=>f>this.threshold;if(this.modelCatalog=[{file:"palm-detailed-straight.obj",name:"Palm Detailed Straight",rotationMode:"y-only",scale:1,yOffset:0,probability:.12,thresholdCallback:a},{file:"palm-detailed-bend.obj",name:"Palm Detailed Bend",rotationMode:"y-only",scale:1,yOffset:0,probability:.15,thresholdCallback:a},{file:"palm-straight.obj",name:"Palm Straight",rotationMode:"y-only",scale:1,yOffset:0,probability:.12,thresholdCallback:a},{file:"palm-bend.obj",name:"Palm Bend",rotationMode:"y-only",scale:1,yOffset:0,probability:.15,thresholdCallback:a},{file:"grass.obj",name:"Grass",rotationMode:"y-only",scale:1,scaleRange:[.75,1.35],yOffset:0,probability:.1,thresholdCallback:l},{file:"grass-patch.obj",name:"Grass Patch",rotationMode:"y-only",scale:1,scaleRange:[.75,1.3],yOffset:0,probability:.05,thresholdCallback:l},{file:"grass-plant.obj",name:"Grass Plant",rotationMode:"y-only",scale:1,scaleRange:[.8,1.4],yOffset:0,probability:.05,thresholdCallback:l},{file:"patch-grass.obj",name:"Patch Grass",rotationMode:"y-only",scale:1,scaleRange:[.8,1.25],yOffset:0,probability:.05,thresholdCallback:l},{file:"patch-grass-foliage.obj",name:"Patch Grass Foliage",rotationMode:"y-only",scale:1,scaleRange:[.8,1.25],yOffset:0,probability:.05,thresholdCallback:l},{file:"patch-sand.obj",name:"Patch Sand",rotationMode:"y-only",scale:1,scaleRange:[.85,1.2],yOffset:0,probability:.05,thresholdCallback:l},{file:"patch-sand-foliage.obj",name:"Patch Sand Foliage",rotationMode:"y-only",scale:1,scaleRange:[.8,1.2],yOffset:0,probability:.05,thresholdCallback:c},{file:"rocks-a.obj",name:"Rocks A",rotationMode:"y-only",scale:1,scaleRange:[.75,3.45],yOffset:0,probability:.02,thresholdCallback:c},{file:"rocks-b.obj",name:"Rocks B",rotationMode:"y-only",scale:1,scaleRange:[.75,3.45],yOffset:0,probability:.02,thresholdCallback:c},{file:"rocks-c.obj",name:"Rocks C",rotationMode:"y-only",scale:1,scaleRange:[.75,3.5],yOffset:0,probability:.02,thresholdCallback:c},{file:"rocks-sand-a.obj",name:"Rocks Sand A",rotationMode:"y-only",scale:1,scaleRange:[.8,3.4],yOffset:0,probability:.017,thresholdCallback:c},{file:"rocks-sand-b.obj",name:"Rocks Sand B",rotationMode:"y-only",scale:1,scaleRange:[.8,3.4],yOffset:0,probability:.017,thresholdCallback:c},{file:"rocks-sand-c.obj",name:"Rocks Sand C",rotationMode:"y-only",scale:1,scaleRange:[.8,3.4],yOffset:0,probability:.017,thresholdCallback:c},{file:"rocks-a.obj",name:"Rocks A Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-b.obj",name:"Rocks B Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-c.obj",name:"Rocks C Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.5],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-a.obj",name:"Rocks Sand A Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-b.obj",name:"Rocks Sand B Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"rocks-sand-c.obj",name:"Rocks Sand C Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:h},{file:"platform-planks.obj",name:"Platform Planks",rotationMode:"y-only",scale:1,yOffset:0,probability:.07,thresholdCallback:u},{file:"ship-wreck.obj",name:"Ship Wreck",rotationMode:"3d",scale:1,yOffset:-1,probability:.1,thresholdCallback:d},{file:"tower-complete-small.obj",name:"Tower Complete Small",rotationMode:"y-only",scale:1,yOffset:0,probability:.06,thresholdCallback:d},{file:"tower-complete-large.obj",name:"Tower Complete Large",rotationMode:"y-only",scale:1,yOffset:0,probability:.06,thresholdCallback:d},{file:"structure-roof.obj",name:"Structure Roof",rotationMode:"y-only",scale:1,yOffset:0,probability:.1,thresholdCallback:u},{file:"cannon-mobile.obj",name:"Cannon Mobile",rotationMode:"y-only",scale:1,yOffset:0,probability:.05,thresholdCallback:u},{file:"house.obj",name:"House",rotationMode:"y-only",scale:1,yOffset:0,probability:.06,thresholdCallback:u},{file:"hole.obj",name:"Hole",rotationMode:"y-only",scale:1,yOffset:0,probability:.1,thresholdCallback:u}],!Array.isArray(r)||r.length===0)this.models=this.modelCatalog.map(f=>({...f}));else{const f=new Map(this.modelCatalog.map(v=>[v.file,v]));this.models=r.map(v=>{const b=f.get(v);return b?{...b}:{file:v,name:v.replace(".obj",""),rotationMode:"y-only",scale:1,yOffset:0,probability:1}})}}setSeed(e){this.seed=e,this.currentState=e}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let e=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}async loadMesh(e){if(this.meshCache[e])return this.meshCache[e];try{const t=await we.load(this.gl,`./Assets/3D/Land/${e}`);return this.meshCache[e]=t,t}catch(t){return console.warn(`LandObjectSpawner: failed to load ${e}`,t),null}}getRandomModel(){if(!this.models.length)return null;const e=this.models.reduce((i,s)=>i+(s.probability||0),0);let t=this.seededRandom()*e;for(let i of this.models)if(t-=i.probability||0,t<=0)return i;return this.models[0]}getRandomPosition(e,t,i,s,r=0){return{x:e+this.seededRandom()*(t-e),y:r,z:i+this.seededRandom()*(s-i)}}getRandomRotation(e="y-only"){e||(e="y-only");let t=Array.isArray(e)?e:String(e).split("|").map(s=>s.trim().toLowerCase());if(t.includes("3d")||t.includes("all")||t.includes("x-y-z")||t.includes("xyz"))return{x:this.seededRandom()*Math.PI*.15,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*.15};const i={x:0,y:0,z:0};for(const s of t)s&&(s.includes("x")&&(i.x=this.seededRandom()*Math.PI*2),s.includes("y")&&(i.y=this.seededRandom()*Math.PI*2),s.includes("z")&&(i.z=this.seededRandom()*Math.PI*2));return i.x===0&&i.y===0&&i.z===0&&(i.y=this.seededRandom()*Math.PI*2),i}async spawnRandomObject(e,t,i=null){const s=i!==null&&i<this.models.length?this.models[i]:this.getRandomModel();if(!s)return null;const r=await this.loadMesh(s.file);if(!r)return null;const n=`${s.name} [Land]`,a=new ie(this.renderer,this.material,r,n);let l=e.y+(s.yOffset||0);l+=ye.terrainValue(t)*20*.4,a.transform.position.set(e.x,l,e.z);let c=s.scale??1;if(Array.isArray(s.scaleRange)&&s.scaleRange.length===2){const d=s.scaleRange[0],u=s.scaleRange[1];c=d+this.seededRandom()*(u-d)}a.transform.scale.set(c,c,c);const h=this.getRandomRotation(s.rotationMode);return a.transform.rotation.set(h.x,h.y,h.z),this.scene.push(a),a}async spawnMany(e,t,i=0){const s=[];if(!this.models.length)return console.warn("LandObjectSpawner.spawnMany: no model files provided"),s;for(let r=0;r<e;r++){let n,a,l,c;do{n=this.getRandomPosition(t.minX,t.maxX,t.minZ,t.maxZ,i);const u=n.x+255*Math.sqrt(3)/2,f=n.z+255*1.5/2;a=this.noise.getValue(u,f,0),l=this.getRandomModel(),c=l.thresholdCallback?l.thresholdCallback(a):!0}while(!c);const h=this.models.indexOf(l),d=await this.spawnRandomObject(n,a,h);d&&s.push(d)}return s}getAvailableModels(){return this.models.map((e,t)=>({index:t,name:e.name,file:e.file,rotationMode:e.rotationMode,yOffset:e.yOffset,probability:e.probability}))}}const Q=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),L=document.getElementById("glcanvas"),_=L.getContext("webgl2")||L.getContext("experimental-webgl");_||alert("Unable to initialize WebGL.");_.enable(_.DEPTH_TEST);_.depthFunc(_.LEQUAL);_.enable(_.CULL_FACE);_.cullFace(_.BACK);_.frontFace(_.CCW);_.getExtension("EXT_color_buffer_float");let $e=new Oe(_,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:_.NEAREST,magFilter:_.NEAREST}),Me=new Oe(_,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:_.NEAREST,magFilter:_.NEAREST}),Se=new Oe(_,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:_.NEAREST,magFilter:_.NEAREST}),_e=new Oe(_,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:_.NEAREST,magFilter:_.NEAREST});const ft=new ce(_,qe,Ze),vi=new ce(_,[pi,qe],Ze),yi=new ce(_,Ye,li),xi=new ce(_,[fi,qe],[mi,Ze]),bi=new ce(_,hi,ci),wi=new ce(_,Ye,di),Ci=new ce(_,Ye,ui),Ke=new ct(_,"./Assets/Textures/colormap.png"),Mi=new ct(_,"./Assets/Textures/island.png"),mt=new de(ft,"Scene Mat"),Ne=new de(ft,"Scene Plane"),be=new de(vi,"Ship Mat"),ve=new de(xi,"Water"),Ce=new de(bi,"PPL Lighting"),ae=new de(wi,"Skybox"),Qe=new de(Ci,"PixelArt"),Ti=new de(yi,"Screen");be.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Ke.texture,uRoughness:1,uSampleRadius:.25});mt.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:Ke.texture,uRoughness:1});Ne.setUniforms({uColor:[1,1,1,1],uHasTexture:0,uMainTex:Mi.texture,uRoughness:1});Qe.setUniforms({uPixelSize:Q?1:3,uEdgeWidth:.5,uColorLevels:128,uDepthThreshold:.01,uNormalThreshold:.3,uSilhouetteDarkening:.2,uCreaseDarkening:.7});Ce.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03});ae.setUniforms({uTopColor:[.133,.137,.251],uMidColor:[.749,.286,.369],uBottomColor:[.996,.431,.243],uSunColor:[.894,.514,.384],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.5,uCloudCoverage:.8,uCloudSpeed:.35,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const pt={uWind:[1,1],uSpeed:.5,udisplacement:1.5,uScale:1,uBuoyancyRotation:.3,uColor1:[.09,.271,.49],uColor2:[.192,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[0,2],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[-.4,-2,.1,13.5],uColorBands:3,uRoughness:0,uDepthThreshold:.5,uFoamIntensity:1};be.setUniforms(pt);ve.setUniforms(pt);be.setUniforms({uRoughness:1});const Ei={Lighting:Ce,Skybox:ae,PixelArt:Qe,Water:ve,Buoyancy:be,planeTer:Ne},J=new Ct(_),he=new je,We=new je,Z=[],se=new Et(_),Je=new dt(_,L.width,L.height,Me,1,"GBuffer Pass");Je.clearColor=[.5,.5,1,1];Je.clearDepth=!0;se.addPass(Je);const et=new dt(_,L.width,L.height,$e,0,"Albedo Pass");et.clearColor=[0,0,0,1];et.clearDepth=!0;se.addPass(et);const tt=new St(_,L.width,L.height,Ce,_e,"Lighting Pass");tt.setInputBuffers($e.texture,Me.texture);se.addPass(tt);const it=new _t(_,L.width,L.height,ae,_e,"Skybox Pass");it.setInputTexture(Me.texture);se.addPass(it);const gt=new Pt(_,L.width,L.height,Qe,Se,"PixelArt Pass");gt.setInputBuffers(_e.texture,Me.texture);se.addPass(gt);const Fe=new kt(_,L.width,L.height,Se,"Wireframe Pass");Q||(Fe.setWireColor(0,1,0),Fe.setOpacity(1),se.addPass(Fe));const fe=new Rt(_,L.width,L.height,Ti);fe.setBuffer("Final",Se.texture);fe.setBuffer("Pixel",Se.texture);fe.setBuffer("Lit",_e.texture);fe.setBuffer("Albedo",$e.texture);fe.setBuffer("Gbuffer",Me.texture);tt.lightCamera=We;se.addPass(fe);function vt(){L.width=window.innerWidth,L.height=window.innerHeight;const o=Q?.5:1,e=Math.floor(L.width*o),t=Math.floor(L.height*o);_.viewport(0,0,e,t),$e.resize(e,t),Me.resize(e,t),_e.resize(e,t),Se.resize(e,t),se.resize(e,t);const i=L.width/L.height;he.setPerspective(.8,i,.1,1e3)}window.addEventListener("resize",vt);vt();const Fi=L.width/L.height;he.setPerspective(.8,Fi,.1,1e3);he.transform.position.set(-39.2,1.8,-47);he.transform.rotation.set(0,Q?3.24:3.22,0);const Be=30;We.setOrthographic(-Be,Be,-Be,Be,1,100);let le=new ie(J,Ne,new ye(_,255,255,1,!0),"Scense");le.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25);le.transform.scale.set(1,.4,1);Z.push(le);const te=new ai(_,J,be,Z),xe=new gi(_,J,mt,Z,[],{threshold:.425}),Ai={direction:{x:.207,y:0,z:-.707},speed:0},H={enabled:!0,count:50,seed:68,bounds:{minX:-(255*Math.sqrt(3)/2),maxX:255*Math.sqrt(3)/2,minZ:-191.25,maxZ:255*1.5/2},yFixed:-6.25};let ze=[],Le=[];function Ri(o){let e=o>>>0;return function(){e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function Si(){if(le){const o=Z.indexOf(le);o>=0&&Z.splice(o,1)}le=new ie(J,Ne,new ye(_,255,255,1,!0),"Scense"),le.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25),le.transform.scale.set(1,.4,1),Z.push(le)}H.enabled&&(te.setSeed(H.seed),te.spawnMany(H.count,H.bounds,H.yFixed).then(o=>{ze=o,console.log(`Spawned ${o.length} floating objects with seed ${H.seed}`)}),xe.setSeed(H.seed),xe.spawnMany(150,H.bounds,-11).then(o=>{Le=o,console.log(`Spawned ${o.length} land objects with seed ${H.seed}`)}));Q&&(te.setSeed(3),we.load(_,"./Assets/3D/Floating/ship-pirate-small.obj").then(o=>{for(let e=0;e<5;e++){const t=new ie(J,be,o,"Barrel");t.transform.position.set(-25+(te.seededRandom()-.5)*45,-6.5,80+(te.seededRandom()-.5)*45),t.transform.rotation.set(0,(te.seededRandom()-.5)*3.14*2,0),t.transform.scale.set(1,1,1),Z.push(t)}}));let _i=new ye(_,255,255,1);const st=new ie(J,ve,_i,"Water Floor [0,0]");st.transform.position.set(-(255*Math.sqrt(3)/2),-6.5,-191.25);st.transform.scale.set(1,1,1);Z.push(st);Promise.all([we.load(_,"./Assets/3D/LOD1.obj"),we.load(_,"./Assets/3D/LOD2.obj"),we.load(_,"./Assets/3D/LOD3.obj")]).then(([o,e,t])=>{const a=Q?1:0,l=-1,c=Q?e:o,h=Q?"LOD2":"LOD1",d=new ie(J,ve,c,`Water Floor [0,0] ${h}`);if(d.transform.position.set(-(255*Math.sqrt(3)/2),-6.5-.5,-191.25),d.transform.scale.set(1,1,1),Z.push(d),Q)for(let u=0;u<=5;u++)for(let f=-u;f<=u;f++){if(f===0&&u===0)continue;const v=new ie(J,ve,t,`Water Floor [${f},${u}] LOD3`);d.transform.add(v.transform),v.transform.setGlobalPosition(f*80,-6.5-.5,u*80),v.transform.scale.set(50,50,50)}else for(let u=-5;u<=5;u++)for(let f=-5;f<=5;f++){if(u===0&&f===0)continue;const v=Math.sqrt(u*u+f*f),b=v<=a?o:v<=l?e:t,E=v<=a?1:v<=l?2:3,g=new ie(J,ve,b,`Water Floor [${u},${f}] LOD${E}`);d.transform.add(g.transform),g.transform.setGlobalPosition(u*80,-6.5,f*80),g.transform.scale.set(50,50,50)}});const rt=[{x:0,y:0,w:1,h:1,pass:"Final"}];fe.setViewports(rt);const Y={gl:_,scene:Z,camera:he,lightCamera:We,renderer:J,renderQueue:se,materials:Ei,viewportPass:fe,wireframePass:Fe,floatingSpawner:te,landSpawner:xe,floatingSpawnConfig:H,textures:{ship:Ke}};Y.setViewports=o=>{rt[0].pass=o};Y.spawnFloatingObjects=async o=>{const e=await te.spawnMany(o,H.bounds,H.yFixed);return console.log(`Spawned ${e.length} additional floating objects`),e};Y.spawnLandObjects=async o=>{const e=await xe.spawnMany(o,H.bounds,-11);return console.log(`Spawned ${e.length} additional land objects`),e};Y.respawnWithSeed=o=>{const e=Z.filter(a=>!a.name||!a.name.includes("[Floating]")&&!a.name.includes("[Land]"));Z.length=0,Z.push(...e),ze=[],Le=[],te.setSeed(o),xe.setSeed(o),H.seed=o;const t=Ri(o),i=32e3,s=(t()-.5)*i,r=(t()-.5)*i;Re.setOffsets(s,r),Si();const n=te.spawnMany(H.count,H.bounds,H.yFixed);return ze=n,Le=xe.spawnMany(120,H.bounds,-11),console.log(`Respawned with seed ${o}: ${n.length} objects`),n};let ge=null;if(!Q){const o=new si(Y);Y.editor=o,ge=Lt.attach(se,J,Y),Y.profiler=ge}window.game=Y;window.floatingSpawner=te;window.landSpawner=xe;window.oceanConfig=Ai;window.floatingObjects=ze;window.landObjects=Le;window.floatingSpawnConfig=H;const yt=new ri(he,L);Y.cameraController=yt;window.addEventListener("keydown",o=>{const e=o.key.toLowerCase();if(e==="t"&&Fe.toggle(),e==="r"){const t=Math.floor(Math.random()*1e6);typeof Y.respawnWithSeed=="function"&&Y.respawnWithSeed(t);try{if(Y.editor&&Y.editor.windows&&Y.editor.windows.world){const i=Y.editor.windows.world;i&&i.state&&(i.state.seed=t,i.seedController&&typeof i.seedController.updateDisplay=="function"&&i.seedController.updateDisplay())}}catch(i){console.warn("Failed to update WorldWindow seed UI",i)}}});const pe=[.5,.8,.2];let Ie=0,ht="";function xt(o){if(re.update(o),Y.deltaTime=re.deltaTime,yt.update(re.deltaTime),ve.setUniforms({uTime:re.time}),be.setUniforms({uTime:re.time}),ae.setUniforms({uTime:re.time}),Ce.uniforms.uLightDir&&Ce.uniforms.uLightDir.value){const t=Ce.uniforms.uLightDir.value,i=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);i>.001?(pe[0]=t[0]/i,pe[1]=t[1]/i,pe[2]=t[2]/i):(pe[0]=t[0],pe[1]=t[1],pe[2]=t[2])}he.updateView(),fe.setViewports(rt),he.updateProjection(),We.updateProjection(),ae.uniforms.uSunColor&&it.setLight(pe,ae.uniforms.uSunColor.value,ae.uniforms.uTopColor.value,ae.uniforms.uMidColor.value,ae.uniforms.uBottomColor.value),se.execute(J,Z,he),_.flush(),_.finish();const e=document.getElementById("hud");if(e&&(Ie++,Ie>=6)){Ie=0;const i=(re.unscaledDeltaTime>0?Math.round(1/re.unscaledDeltaTime):0).toString().padStart(3,"0");let s="";if(ge&&ge.fpsHistory&&ge.fpsHistory.length>0){let n=0;const a=ge.fpsHistory.length,l=Math.min(a,60);for(let h=a-l;h<a;h++)n+=ge.fpsHistory[h];s=` <br> Avg FPS: ${Math.round(n/l).toString().padStart(3,"0")}`}const r=(re.deltaTime*1e3).toFixed(2).padStart(6,"0");ht=`FPS: ${i}${s}<br>Δ: ${r} ms`,e.innerHTML=ht}requestAnimationFrame(xt)}requestAnimationFrame(xt)});export default Pi();
