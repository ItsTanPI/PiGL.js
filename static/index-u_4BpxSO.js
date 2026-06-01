var Ct=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports);var Oi=Ct((Ui,ze)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class ge{constructor(e=0,t=0,i=0){this.data=new Float32Array([e,t,i]),this._onchange=null}get x(){return this.data[0]}set x(e){this.data[0]=e,this._onchange&&this._onchange()}get y(){return this.data[1]}set y(e){this.data[1]=e,this._onchange&&this._onchange()}get z(){return this.data[2]}set z(e){this.data[2]=e,this._onchange&&this._onchange()}set(e,t,i){return this.data[0]=e,this.data[1]=t,this.data[2]=i,this._onchange&&this._onchange(),this}copy(e){return this.data[0]=e.x,this.data[1]=e.y,this.data[2]=e.z,this._onchange&&this._onchange(),this}toArray(){return[this.data[0],this.data[1],this.data[2]]}add(e){return this.data[0]+=e.data[0],this.data[1]+=e.data[1],this.data[2]+=e.data[2],this._onchange&&this._onchange(),this}subtract(e){return this.data[0]-=e.data[0],this.data[1]-=e.data[1],this.data[2]-=e.data[2],this._onchange&&this._onchange(),this}scale(e){return this.data[0]*=e,this.data[1]*=e,this.data[2]*=e,this._onchange&&this._onchange(),this}magnitude(){const e=this.data[0],t=this.data[1],i=this.data[2];return Math.sqrt(e*e+t*t+i*i)}normalize(){const e=this.magnitude();return e>1e-5&&(this.data[0]/=e,this.data[1]/=e,this.data[2]/=e),this._onchange&&this._onchange(),this}}class q{static identity(e){return ce.identity(e)}static copy(e,t){return e.set(t),e}static multiply(e,t,i){return ce.multiply(e,t,i)}static translate(e,t,i){return ce.translate(e,t,i)}static scale(e,t,i){return ce.scale(e,t,i)}static rotateX(e,t,i){return ce.rotateX(e,t,i)}static rotateY(e,t,i){return ce.rotateY(e,t,i)}static rotateZ(e,t,i){return ce.rotateZ(e,t,i)}static invert(e,t){return ce.invert(e,t)}static compose(e,t,i,n){return ce.compose(e,t,i,n)}}const ce={identity(o){return o.fill(0),o[0]=1,o[5]=1,o[10]=1,o[15]=1,o},multiply(o,e,t){let i=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],l=e[6],h=e[7],d=e[8],u=e[9],f=e[10],x=e[11],w=e[12],b=e[13],p=e[14],T=e[15],D=t[0],L=t[1],O=t[2],B=t[3];return o[0]=D*i+L*a+O*d+B*w,o[1]=D*n+L*c+O*u+B*b,o[2]=D*r+L*l+O*f+B*p,o[3]=D*s+L*h+O*x+B*T,D=t[4],L=t[5],O=t[6],B=t[7],o[4]=D*i+L*a+O*d+B*w,o[5]=D*n+L*c+O*u+B*b,o[6]=D*r+L*l+O*f+B*p,o[7]=D*s+L*h+O*x+B*T,D=t[8],L=t[9],O=t[10],B=t[11],o[8]=D*i+L*a+O*d+B*w,o[9]=D*n+L*c+O*u+B*b,o[10]=D*r+L*l+O*f+B*p,o[11]=D*s+L*h+O*x+B*T,D=t[12],L=t[13],O=t[14],B=t[15],o[12]=D*i+L*a+O*d+B*w,o[13]=D*n+L*c+O*u+B*b,o[14]=D*r+L*l+O*f+B*p,o[15]=D*s+L*h+O*x+B*T,o},translate(o,e,t){let i=t.x!==void 0?t.x:t[0],n=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2];if(e===o)o[12]=e[0]*i+e[4]*n+e[8]*r+e[12],o[13]=e[1]*i+e[5]*n+e[9]*r+e[13],o[14]=e[2]*i+e[6]*n+e[10]*r+e[14],o[15]=e[3]*i+e[7]*n+e[11]*r+e[15];else{let s=e[0],a=e[1],c=e[2],l=e[3],h=e[4],d=e[5],u=e[6],f=e[7],x=e[8],w=e[9],b=e[10],p=e[11];o[0]=s,o[1]=a,o[2]=c,o[3]=l,o[4]=h,o[5]=d,o[6]=u,o[7]=f,o[8]=x,o[9]=w,o[10]=b,o[11]=p,o[12]=s*i+h*n+x*r+e[12],o[13]=a*i+d*n+w*r+e[13],o[14]=c*i+u*n+b*r+e[14],o[15]=l*i+f*n+p*r+e[15]}return o},scale(o,e,t){let i=t.x!==void 0?t.x:t[0],n=t.y!==void 0?t.y:t[1],r=t.z!==void 0?t.z:t[2];return o[0]=e[0]*i,o[1]=e[1]*i,o[2]=e[2]*i,o[3]=e[3]*i,o[4]=e[4]*n,o[5]=e[5]*n,o[6]=e[6]*n,o[7]=e[7]*n,o[8]=e[8]*r,o[9]=e[9]*r,o[10]=e[10]*r,o[11]=e[11]*r,o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15],o},rotateX(o,e,t){let i=Math.sin(t),n=Math.cos(t),r=e[4],s=e[5],a=e[6],c=e[7],l=e[8],h=e[9],d=e[10],u=e[11];return e!==o&&(o[0]=e[0],o[1]=e[1],o[2]=e[2],o[3]=e[3],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[4]=r*n+l*i,o[5]=s*n+h*i,o[6]=a*n+d*i,o[7]=c*n+u*i,o[8]=l*n-r*i,o[9]=h*n-s*i,o[10]=d*n-a*i,o[11]=u*n-c*i,o},rotateY(o,e,t){let i=Math.sin(t),n=Math.cos(t),r=e[0],s=e[1],a=e[2],c=e[3],l=e[8],h=e[9],d=e[10],u=e[11];return e!==o&&(o[4]=e[4],o[5]=e[5],o[6]=e[6],o[7]=e[7],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[0]=r*n-l*i,o[1]=s*n-h*i,o[2]=a*n-d*i,o[3]=c*n-u*i,o[8]=r*i+l*n,o[9]=s*i+h*n,o[10]=a*i+d*n,o[11]=c*i+u*n,o},rotateZ(o,e,t){let i=Math.sin(t),n=Math.cos(t),r=e[0],s=e[1],a=e[2],c=e[3],l=e[4],h=e[5],d=e[6],u=e[7];return e!==o&&(o[8]=e[8],o[9]=e[9],o[10]=e[10],o[11]=e[11],o[12]=e[12],o[13]=e[13],o[14]=e[14],o[15]=e[15]),o[0]=r*n+l*i,o[1]=s*n+h*i,o[2]=a*n+d*i,o[3]=c*n+u*i,o[4]=l*n-r*i,o[5]=h*n-s*i,o[6]=d*n-a*i,o[7]=u*n-c*i,o},invert(o,e){let t=e[0],i=e[1],n=e[2],r=e[3],s=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],w=e[13],b=e[14],p=e[15],T=t*a-i*s,D=t*c-n*s,L=t*l-r*s,O=i*c-n*a,B=i*l-r*a,$=n*l-r*c,m=h*w-d*x,F=h*b-u*x,A=h*p-f*x,R=d*b-u*w,U=d*p-f*w,y=u*p-f*b,z=T*y-D*U+L*R+O*A-B*F+$*m;return z?(z=1/z,o[0]=(a*y-c*U+l*R)*z,o[1]=(n*U-i*y-r*R)*z,o[2]=(w*$-b*B+p*O)*z,o[3]=(u*B-d*$-f*O)*z,o[4]=(c*A-s*y-l*F)*z,o[5]=(t*y-n*A+r*F)*z,o[6]=(b*L-x*$-p*D)*z,o[7]=(h*$-u*L+f*D)*z,o[8]=(s*U-a*A+l*m)*z,o[9]=(i*A-t*U-r*m)*z,o[10]=(x*B-w*L+p*T)*z,o[11]=(d*L-h*B-f*T)*z,o[12]=(a*F-s*R-c*m)*z,o[13]=(t*R-i*F+n*m)*z,o[14]=(w*D-x*O-b*T)*z,o[15]=(h*O-d*D+u*T)*z,o):null},compose(o,e,t,i){let n=e.x!==void 0?e.x:e[0],r=e.y!==void 0?e.y:e[1],s=e.z!==void 0?e.z:e[2],a=t.x!==void 0?t.x:t[0],c=t.y!==void 0?t.y:t[1],l=t.z!==void 0?t.z:t[2],h=i.x!==void 0?i.x:i[0],d=i.y!==void 0?i.y:i[1],u=i.z!==void 0?i.z:i[2],f=Math.cos(c),x=Math.sin(c),w=Math.cos(a),b=Math.sin(a),p=Math.cos(l),T=Math.sin(l);return o[0]=(f*p-x*b*T)*h,o[1]=(f*T+x*b*p)*h,o[2]=-x*w*h,o[3]=0,o[4]=-w*T*d,o[5]=w*p*d,o[6]=b*d,o[7]=0,o[8]=(x*p+f*b*T)*u,o[9]=(x*T-f*b*p)*u,o[10]=f*w*u,o[11]=0,o[12]=n,o[13]=r,o[14]=s,o[15]=1,o}};class Mt{constructor(){this.position=new ge(0,0,0),this.rotation=new ge(0,0,0),this.scale=new ge(1,1,1),this.localMatrix=new Float32Array(16),this.worldMatrix=new Float32Array(16),q.identity(this.localMatrix),q.identity(this.worldMatrix),this.parent=null,this.children=[],this._isDirty=!0,this.position._onchange=()=>this.markDirty(),this.rotation._onchange=()=>this.markDirty(),this.scale._onchange=()=>this.markDirty()}add(e){e.parent&&e.parent.remove(e),e.parent=this,this.children.push(e),e.markDirty()}remove(e){const t=this.children.indexOf(e);if(t!==-1){e.parent=null;const i=this.children.length-1;t!==i&&(this.children[t]=this.children[i]),this.children.pop()}}markDirty(){this._isDirty=!0}updateLocalMatrix(){this._isDirty&&(q.identity(this.localMatrix),q.translate(this.localMatrix,this.localMatrix,this.position),q.rotateY(this.localMatrix,this.localMatrix,this.rotation.y),q.rotateX(this.localMatrix,this.localMatrix,this.rotation.x),q.rotateZ(this.localMatrix,this.localMatrix,this.rotation.z),q.scale(this.localMatrix,this.localMatrix,this.scale),this._isDirty=!1)}updateWorldMatrix(){this.updateLocalMatrix(),this.parent?q.multiply(this.worldMatrix,this.parent.worldMatrix,this.localMatrix):this.worldMatrix.set(this.localMatrix);for(let e=0;e<this.children.length;e++)this.children[e].updateWorldMatrix()}get globalPosition(){return this.updateWorldMatrix(),new ge(this.worldMatrix[12],this.worldMatrix[13],this.worldMatrix[14])}setGlobalPosition(e,t,i){if(!this.parent){this.position.set(e,t,i);return}this.parent.updateWorldMatrix();const n=new Float32Array(16);q.invert(n,this.parent.worldMatrix);const r=e,s=t,a=i,c=n[0]*r+n[4]*s+n[8]*a+n[12],l=n[1]*r+n[5]*s+n[9]*a+n[13],h=n[2]*r+n[6]*s+n[10]*a+n[14];this.position.set(c,l,h)}get globalScale(){this.updateWorldMatrix();const e=Math.sqrt(this.worldMatrix[0]**2+this.worldMatrix[1]**2+this.worldMatrix[2]**2),t=Math.sqrt(this.worldMatrix[4]**2+this.worldMatrix[5]**2+this.worldMatrix[6]**2),i=Math.sqrt(this.worldMatrix[8]**2+this.worldMatrix[9]**2+this.worldMatrix[10]**2);return new ge(e,t,i)}}class ne{constructor(e,t,i=null,n="GameObject"){this.name=n,this.active=!0,this.transform=new Mt,this.transform.gameObject=this,this.renderer=e,this.material=t,this.mesh=i}render(e,t=void 0,i=null){if(!this.active)return;this.transform.updateWorldMatrix();const n=i||this.material;this.renderer&&n&&this.renderer.draw(this,e,t,n)}}class dt extends ne{constructor(){super(null),this.projectionMatrix=new Float32Array(16),this.viewMatrix=new Float32Array(16),this.fov=45*Math.PI/180,this.aspect=1,this.near=.1,this.far=100,this.orthographic=!1,this.orthoSize=30,q.identity(this.projectionMatrix),q.identity(this.viewMatrix),this.transform.position.set(0,0,5),this.name="Camera"}setPerspective(e,t,i,n){this.fov=e,this.aspect=t,this.near=i,this.far=n,this.orthographic=!1;const r=1/Math.tan(e/2),s=this.projectionMatrix;s.fill(0),s[0]=r/t,s[5]=r,s[10]=(n+i)/(i-n),s[11]=-1,s[14]=2*n*i/(i-n)}setOrthographic(e,t,i,n,r,s){this.near=r,this.far=s,this.orthographic=!0,this.orthoSize=(n-i)/2;const a=this.projectionMatrix,c=1/(e-t),l=1/(i-n),h=1/(r-s);a.fill(0),a[0]=-2*c,a[5]=-2*l,a[10]=2*h,a[12]=(e+t)*c,a[13]=(n+i)*l,a[14]=(s+r)*h,a[15]=1}updateProjection(){if(this.orthographic){const e=this.orthoSize;this.setOrthographic(-e*this.aspect,e*this.aspect,-e,e,this.near,this.far)}else this.setPerspective(this.fov,this.aspect,this.near,this.far)}updateView(){this.transform.updateWorldMatrix(),q.invert(this.viewMatrix,this.transform.worldMatrix)}getScreenPosition(e,t=null){const i=this.viewMatrix,n=this.projectionMatrix;e.transform.updateWorldMatrix();const r=e.transform.worldMatrix,s=r[12],a=r[13],c=r[14],l=1,h=i[0]*s+i[4]*a+i[8]*c+i[12]*l,d=i[1]*s+i[5]*a+i[9]*c+i[13]*l,u=i[2]*s+i[6]*a+i[10]*c+i[14]*l,f=i[3]*s+i[7]*a+i[11]*c+i[15]*l,x=n[0]*h+n[4]*d+n[8]*u+n[12]*f,w=n[1]*h+n[5]*d+n[9]*u+n[13]*f;n[2]*h+n[6]*d+n[10]*u+n[14]*f;const b=n[3]*h+n[7]*d+n[11]*u+n[15]*f;if(b===0)return t?(t[0]=.5,t[1]=.5):t=[.5,.5],t;const p=x/b,T=w/b,D=(p+1)*.5,L=(T+1)*.5;return t?(t[0]=D,t[1]=L):t=[D,L],t}}class he{constructor(e,t,i,n=null,r=null){this.gl=e;const s=this.loadShader(e.VERTEX_SHADER,t),a=this.loadShader(e.FRAGMENT_SHADER,i);this.program=e.createProgram(),e.attachShader(this.program,s);let c=!1;if(n&&r){const l=this.loadShader(36488,n),h=this.loadShader(36487,r);l&&h?(e.attachShader(this.program,l),e.attachShader(this.program,h),c=!0):console.warn("Tessellation shaders not supported, falling back to vertex/fragment only")}e.attachShader(this.program,a),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||console.error("Shader init error:",e.getProgramInfoLog(this.program)),this.uniforms={},this.attributes={},this.tessellationSupported=c}getUniformLocation(e){return this.uniforms[e]===void 0&&(this.uniforms[e]=this.gl.getUniformLocation(this.program,e)),this.uniforms[e]}setUniform(e,t,i){const n=this.gl,r=this.getUniformLocation(e);if(r){if(i){i==="1i"?n.uniform1i(r,t):i==="1f"?n.uniform1f(r,t):i==="2fv"?n.uniform2fv(r,t):i==="3fv"?n.uniform3fv(r,t):i==="4fv"?n.uniform4fv(r,t):i==="Matrix4fv"&&n.uniformMatrix4fv(r,!1,t);return}if(typeof t=="number")n.uniform1f(r,t);else if(Array.isArray(t)||t instanceof Float32Array)switch(t.length){case 2:n.uniform2fv(r,t);break;case 3:n.uniform3fv(r,t);break;case 4:n.uniform4fv(r,t);break;case 16:n.uniformMatrix4fv(r,!1,t);break;default:console.warn(`Unsupported uniform array length: ${t.length} for ${e}`)}}}getAttribLocation(e){return this.attributes[e]===void 0&&(this.attributes[e]=this.gl.getAttribLocation(this.program,e)),this.attributes[e]}use(){this.gl.useProgram(this.program)}loadShader(e,t){let i=t;if(Array.isArray(t)){let r="";const s=t.map(a=>{if(typeof a!="string")return"";const c=a.split(/\r?\n/),l=[];for(const h of c){if(h.trim().startsWith("#version")){r||(r=h.trim());continue}l.push(h)}return l.join(`
`)});r?i=`${r}
${s.join(`
`)}`:i=s.join(`
`)}let n;try{if(n=this.gl.createShader(e),!n)return console.warn(`Shader type ${e} not supported`),null}catch(r){return console.warn(`Shader type ${e} not supported:`,r.message),null}return this.gl.shaderSource(n,i),this.gl.compileShader(n),this.gl.getShaderParameter(n,this.gl.COMPILE_STATUS)?n:(console.error("Shader compile error:",this.gl.getShaderInfoLog(n)),this.gl.deleteShader(n),null)}}class qe{constructor(e,t,i,n,r=null){this.gl=e,this.vertices=t,this.uvs=i,this.normals=n,this.indices=r,this.count=r?r.length:t.length/3,this.vertexBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,this.vertices,e.STATIC_DRAW),this.uvs&&this.uvs.length>0&&(this.uvBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.uvBuffer),e.bufferData(e.ARRAY_BUFFER,this.uvs,e.STATIC_DRAW)),this.normals&&this.normals.length>0&&(this.normalBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.normalBuffer),e.bufferData(e.ARRAY_BUFFER,this.normals,e.STATIC_DRAW)),this.indices&&this.indices.length>0&&(this.indexBuffer=e.createBuffer(),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,e.STATIC_DRAW))}bind(e){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.vertexBuffer);const i=e.getAttribLocation("aVertexPosition");if(i!==-1&&(t.enableVertexAttribArray(i),t.vertexAttribPointer(i,3,t.FLOAT,!1,0,0)),this.uvBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.uvBuffer);const n=e.getAttribLocation("aTexCoord");n!==-1&&(t.enableVertexAttribArray(n),t.vertexAttribPointer(n,2,t.FLOAT,!1,0,0))}if(this.normalBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer);const n=e.getAttribLocation("aNormal");n!==-1&&(t.enableVertexAttribArray(n),t.vertexAttribPointer(n,3,t.FLOAT,!1,0,0))}if(this.colorBuffer){t.bindBuffer(t.ARRAY_BUFFER,this.colorBuffer);const n=e.getAttribLocation("aColor");n!==-1&&(t.enableVertexAttribArray(n),t.vertexAttribPointer(n,3,t.FLOAT,!1,0,0))}this.indexBuffer&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)}draw(){const e=this.gl;this.indices&&this.indices.length>0?e.drawElements(e.TRIANGLES,this.count,e.UNSIGNED_SHORT,0):e.drawArrays(e.TRIANGLES,0,this.count)}}class Tt{constructor(e){this.gl=e,this.drawCalls=0,this.currentPassDrawCalls=[],this.drawCallDetails=[],this.currentPassName=null;const t=new Float32Array([-.5,.5,0,-.5,-.5,0,.5,.5,0,.5,.5,0,-.5,-.5,0,.5,-.5,0]),i=new Float32Array([0,1,0,0,1,1,1,1,0,0,1,0]),n=new Float32Array([0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1]);this.defaultMesh=new qe(e,t,i,n)}draw(e,t,i=void 0,n=null){const r=n||e.material;if(!r||!r.shader)return;const s=this.gl,a=e.mesh||this.defaultMesh;i!==void 0&&(i?i.bind():(s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,s.canvas.width,s.canvas.height)));const c=r.shader;c.use(),a.bind(c);const l=s.getUniformBlockIndex(c.program,"FrameData");s.uniformBlockBinding(c.program,l,0),c.setUniform("uModelMatrix",e.transform.worldMatrix);for(const f in r.uniforms){const x=r.uniforms[f];let w=x.value,b=x.type;(w instanceof WebGLTexture||b==="1i"&&w&&typeof w=="object")&&s.bindTexture(s.TEXTURE_2D,w),c.setUniform(f,w,b)}if(!this.currentPassName){a.draw(),this.drawCalls++;return}const h=performance.now();a.draw();const u=performance.now()-h;this.drawCalls++,this.drawCallDetails.push({pass:this.currentPassName,object:e.name,duration:u,vertices:a.count})}resetDrawCalls(){const e={count:this.drawCalls,details:this.drawCallDetails.slice()};return this.drawCalls=0,this.drawCallDetails.length=0,e}}class re{constructor(e,t="Material"){this.shader=e,this.uniforms={},this.name=t}setUniforms(e){for(const t in e){let i=e[t];Array.isArray(i)||i instanceof Float32Array?i.length===2?this.setVec2(t,i[0],i[1]):i.length===3?this.setVec3(t,i[0],i[1],i[2]):i.length===4?this.setVec4(t,i[0],i[1],i[2],i[3]):i.length===16&&this.setMat4(t,i):typeof i=="number"?this.setFloat(t,i):i instanceof WebGLTexture&&(this.uniforms[t]={value:i,type:"Texture"})}return this}setFloat(e,t){this.uniforms[e]&&this.uniforms[e].type==="1f"?this.uniforms[e].value=t:this.uniforms[e]={type:"1f",value:t}}setVec2(e,t,i){if(this.uniforms[e]&&this.uniforms[e].type==="2fv"){const n=this.uniforms[e].value;n[0]=t,n[1]=i}else this.uniforms[e]={type:"2fv",value:new Float32Array([t,i])}}setVec3(e,t,i,n){if(this.uniforms[e]&&this.uniforms[e].type==="3fv"){const r=this.uniforms[e].value;r[0]=t,r[1]=i,r[2]=n}else this.uniforms[e]={type:"3fv",value:new Float32Array([t,i,n])}}setVec4(e,t,i,n,r){if(this.uniforms[e]&&this.uniforms[e].type==="4fv"){const s=this.uniforms[e].value;s[0]=t,s[1]=i,s[2]=n,s[3]=r}else this.uniforms[e]={type:"4fv",value:new Float32Array([t,i,n,r])}}setMat4(e,t){this.uniforms[e]={type:"Matrix4fv",value:t}}setUniform(e,t,i){this.uniforms[e]={type:i,value:t}}}function Ft(o,e,t){var r;const i={RGBA:{8:{internalFormat:o.RGBA8,glFormat:o.RGBA,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RGBA16F,glFormat:o.RGBA,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RGBA32F,glFormat:o.RGBA,glType:o.FLOAT}},RGB:{8:{internalFormat:o.RGB8,glFormat:o.RGB,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RGB16F,glFormat:o.RGB,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RGB32F,glFormat:o.RGB,glType:o.FLOAT}},RG:{8:{internalFormat:o.RG8,glFormat:o.RG,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.RG16F,glFormat:o.RG,glType:o.HALF_FLOAT},"32f":{internalFormat:o.RG32F,glFormat:o.RG,glType:o.FLOAT}},R:{8:{internalFormat:o.R8,glFormat:o.RED,glType:o.UNSIGNED_BYTE},"16f":{internalFormat:o.R16F,glFormat:o.RED,glType:o.HALF_FLOAT},"32f":{internalFormat:o.R32F,glFormat:o.RED,glType:o.FLOAT}}},n=(r=i[e])==null?void 0:r[t];return n||(console.warn(`RenderTarget: Unknown format/precision "${e} ${t}", falling back to RGBA8`),i.RGBA[8])}class Oe{constructor(e,t,i,n={}){this.gl=e,this.width=t,this.height=i,this.format=n.format??"RGBA",this.precision=n.precision??"8",this.hasDepth=n.depth??!0,this.framebuffer=e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffer),this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture);const{internalFormat:r,glFormat:s,glType:a}=Ft(e,this.format,this.precision);this._internalFormat=r,this._glFormat=s,this._glType=a,e.texImage2D(e.TEXTURE_2D,0,r,t,i,0,s,a,null);const c=n.minFilter??e.LINEAR,l=n.magFilter??e.LINEAR,h=n.wrapS??e.CLAMP_TO_EDGE,d=n.wrapT??e.CLAMP_TO_EDGE;e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,l),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,d),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture,0),this.depthBuffer=null,this.hasDepth&&(this.depthBuffer=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,this.depthBuffer),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,t,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.depthBuffer));const u=e.checkFramebufferStatus(e.FRAMEBUFFER);u!==e.FRAMEBUFFER_COMPLETE&&console.error("RenderTarget: Framebuffer is not complete — status: "+u),e.bindTexture(e.TEXTURE_2D,null),e.bindRenderbuffer(e.RENDERBUFFER,null),e.bindFramebuffer(e.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}resize(e,t){if(this.width===e&&this.height===t)return;this.width=e,this.height=t;const i=this.gl;i.bindTexture(i.TEXTURE_2D,this.texture),i.texImage2D(i.TEXTURE_2D,0,this._internalFormat,e,t,0,this._glFormat,this._glType,null),this.hasDepth&&this.depthBuffer&&(i.bindRenderbuffer(i.RENDERBUFFER,this.depthBuffer),i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_COMPONENT16,e,t)),i.bindTexture(i.TEXTURE_2D,null),i.bindRenderbuffer(i.RENDERBUFFER,null)}invalidate(e=!0){const t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer);const i=[t.COLOR_ATTACHMENT0];e&&this.hasDepth&&i.push(t.DEPTH_ATTACHMENT),t.invalidateFramebuffer(t.FRAMEBUFFER,i),t.bindFramebuffer(t.FRAMEBUFFER,null)}destroy(){const e=this.gl;e.deleteFramebuffer(this.framebuffer),e.deleteTexture(this.texture),this.depthBuffer&&e.deleteRenderbuffer(this.depthBuffer),this.framebuffer=null,this.texture=null,this.depthBuffer=null}getMemorySize(){let e=0;const t=this.format==="RGBA"?4:this.format==="RGB"?3:this.format==="RG"?2:1,i=this.precision==="32f"?4:this.precision==="16f"?2:1;return e+=this.width*this.height*t*i,this.hasDepth&&(e+=this.width*this.height*2),e}}class Et{constructor(){this.time=0,this.deltaTime=0,this.unscaledTime=0,this.unscaledDeltaTime=0,this.timeScale=1,this._lastTime=0,this._initialized=!1}update(e){const t=e*.001;this._initialized||(this._lastTime=t,this._initialized=!0),this.unscaledDeltaTime=t-this._lastTime,this.unscaledTime+=this.unscaledDeltaTime,this.deltaTime=this.unscaledDeltaTime*this.timeScale,this.time+=this.deltaTime,this._lastTime=t}}const te=new Et;class Ce{static async load(e,t){const n=await(await fetch(t)).text(),r=this.parse(e,n);return new qe(e,r.positions,r.uvs,r.normals)}static parse(e,t){const i=[],n=[],r=[],s=[],a=[],c=[],l=t.split(`
`);for(let h of l){if(h=h.trim(),h.startsWith("#")||h==="")continue;const d=h.split(/\s+/),u=d[0];if(u==="v")i.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="vt")n.push([parseFloat(d[1]),parseFloat(d[2])]);else if(u==="vn")r.push([parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])]);else if(u==="f"){const f=d.slice(1);for(let x=1;x<f.length-1;x++){const w=f[0],b=f[x],p=f[x+1];this.processVertex(w,i,n,r,s,a,c),this.processVertex(b,i,n,r,s,a,c),this.processVertex(p,i,n,r,s,a,c)}}}return{positions:new Float32Array(s),uvs:new Float32Array(a),normals:new Float32Array(c),vertexCount:s.length/3}}static processVertex(e,t,i,n,r,s,a){const c=e.split("/"),l=parseInt(c[0])-1,h=c[1]?parseInt(c[1])-1:-1,d=c[2]?parseInt(c[2])-1:-1,u=t[l];if(r.push(u[0],u[1],u[2]),h>=0){const f=i[h];s.push(f[0],f[1])}else s.push(0,0);if(d>=0){const f=n[d];a.push(f[0],f[1],f[2])}else a.push(0,1,0)}}class Ze{constructor(e,t){this.gl=e,this.texture=e.createTexture(),this.image=new Image,this.loaded=!1,e.bindTexture(e.TEXTURE_2D,this.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([255,0,255,255])),this.image.onload=()=>{e.bindTexture(e.TEXTURE_2D,this.texture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this.image),this.isPowerOf2(this.image.width)&&this.isPowerOf2(this.image.height)?e.generateMipmap(e.TEXTURE_2D):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)),this.loaded=!0},this.image.src=t}isPowerOf2(e){return(e&e-1)===0}getMemorySize(){if(!this.loaded||!this.image)return 0;const e=this.image.width,t=this.image.height;let i=e*t*4;return this.isPowerOf2(e)&&this.isPowerOf2(t)&&(i=i*1.33),Math.round(i)}}class At{constructor(e){this.gl=e,this.passes=[]}addPass(e){this.passes.push(e)}removePass(e){const t=this.passes.indexOf(e);return t>-1?(this.passes.splice(t,1),!0):!1}execute(e,t,i){for(const n of this.passes)n.enabled&&n.execute(e,t,i)}resize(e,t){for(const i of this.passes)i.resize(e,t)}}class $e{constructor(e,t,i,n="RenderPass"){this.gl=e,this.width=t,this.height=i,this.name=n,this.enabled=!0,this.autoResize=!0,this.drawCount=0,this.executionTime=0}resize(e,t){this.autoResize&&(this.width=e,this.height=t)}execute(e,t,i){console.warn("RenderPass.execute() not implemented")}}const Rt=`attribute vec2 aVertexPosition;\r
void main() {\r
    gl_Position = vec4(aVertexPosition, 1.0, 1.0);\r
}`,St=`precision mediump float;\r
uniform vec4 uClearColor;\r
void main() {\r
    gl_FragColor = uClearColor;\r
}\r
`;class ut extends $e{constructor(e,t,i,n=null,r=0,s="ObjectPass"){super(e,t,i,s),this.renderTarget=n,this.renderMode=r,this.clearColor=[0,0,0,1],this.clearDepth=!0,this.camera=null,this._clearShader=new he(e,Rt,St);const a=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]);this._clearVbo=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo),e.bufferData(e.ARRAY_BUFFER,a,e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),this._attachmentsWithDepth=[e.COLOR_ATTACHMENT0,e.DEPTH_ATTACHMENT],this._attachmentsDepthOnly=[e.DEPTH_ATTACHMENT]}_drawClearQuad(){const e=this.gl;e.depthFunc(e.ALWAYS),e.depthMask(!0),e.disable(e.CULL_FACE),this._clearShader.use(),this._clearShader.setUniform("uClearColor",this.clearColor),e.bindBuffer(e.ARRAY_BUFFER,this._clearVbo);const t=this._clearShader.getAttribLocation("aVertexPosition");t!==-1&&(e.enableVertexAttribArray(t),e.vertexAttribPointer(t,2,e.FLOAT,!1,0,0)),e.drawArrays(e.TRIANGLES,0,6),e.bindBuffer(e.ARRAY_BUFFER,null),e.depthFunc(e.LEQUAL),e.enable(e.CULL_FACE)}resize(e,t){this.autoResize&&(super.resize(e,t),this.renderTarget&&this.renderTarget.resize(e,t))}execute(e,t,i){const n=this.camera||i;this.camera&&n.updateView();const r=performance.now();if(e.resetDrawCalls(),this.renderTarget){const c=this.gl;c.bindFramebuffer(c.FRAMEBUFFER,this.renderTarget.framebuffer);const l=this.clearDepth?this._attachmentsWithDepth:[c.COLOR_ATTACHMENT0];c.invalidateFramebuffer(c.FRAMEBUFFER,l),c.viewport(0,0,this.renderTarget.width,this.renderTarget.height)}else this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height);this.clearColor!=null&&this._drawClearQuad();const s=c=>{if(c.active&&(c.material&&(c.material.setUniform("uRenderMode",this.renderMode,"1i"),c.material.setUniform("uCameraPos",[n.transform.globalPosition.x,n.transform.globalPosition.y,n.transform.globalPosition.z])),c.render(n,this.renderTarget),c.transform&&c.transform.children))for(const l of c.transform.children)l.gameObject&&s(l.gameObject)};if(t&&Array.isArray(t))for(const c of t)s(c);else t&&t.render&&t.render(n,this.renderTarget);this.renderTarget&&(this.clearDepth&&this.gl.invalidateFramebuffer(this.gl.FRAMEBUFFER,this._attachmentsDepthOnly),this.renderTarget.unbind());const a=e.resetDrawCalls();this.drawCount=a.count,this.drawDetails=a.details,this.executionTime=performance.now()-r}}class ft{constructor(e){this.gl=e;const t=new Float32Array([-1,1,0,1,-1,-1,0,0,1,1,1,1,1,-1,1,0]);this.buffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)}draw(e,t={},i=null){const n=this.gl;let r,s=t;if(e.uniforms&&e.shader){r=e.shader,s={};for(const h in e.uniforms)s[h]=e.uniforms[h].value;t&&(t.bind||t===null)&&(i=t)}else r=e;i?i.bind():(n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,n.canvas.width,n.canvas.height)),r.use(),n.bindBuffer(n.ARRAY_BUFFER,this.buffer);const a=r.getAttribLocation("aVertexPosition");a!==-1&&(n.enableVertexAttribArray(a),n.vertexAttribPointer(a,2,n.FLOAT,!1,16,0));const c=r.getAttribLocation("aTexCoord");c!==-1&&(n.enableVertexAttribArray(c),n.vertexAttribPointer(c,2,n.FLOAT,!1,16,8));let l=0;for(const h in s){const d=s[h];d instanceof WebGLTexture?(n.activeTexture(n.TEXTURE0+l),n.bindTexture(n.TEXTURE_2D,d),r.setUniform(h,l,"1i"),l++):r.setUniform(h,d)}n.drawArrays(n.TRIANGLE_STRIP,0,4);for(let h=0;h<l;h++)n.activeTexture(n.TEXTURE0+h),n.bindTexture(n.TEXTURE_2D,null)}}class _t extends $e{constructor(e,t,i,n){super(e,t,i,"ViewportComposition"),this.material=n,this.fullScreenQuad=new ft(e),this.buffers={},this.viewports=[],this.overlay=null}setBuffer(e,t){this.buffers[e]=t}setOverlay(e){this.overlay=e}setViewports(e){this.viewports=e}execute(e,t,i){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height),this.gl.clearColor(.1,.1,.1,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);for(const n of this.viewports){const r=Math.floor(n.x*this.width),s=Math.floor(n.y*this.height),a=Math.floor(n.w*this.width),c=Math.floor(n.h*this.height);this.gl.viewport(r,s,a,c);let l=this.buffers.Final;const h=n.pass;this.buffers[h]&&(l=this.buffers[h]),this.material.setUniform("uTexture",l),this.fullScreenQuad.draw(this.material)}}}class Ke extends $e{constructor(e,t,i,n,r=null,s="ScreenPass"){super(e,t,i,s),this.material=n,this.renderTarget=r,this.fullScreenQuad=new ft(e),this.inputs={},this.clearColor=null,this._resolutionBuffer=new Float32Array([t,i])}setTexture(e,t){this.inputs[e]=t}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.renderTarget&&this.renderTarget.resize(e,t)}execute(e,t,i){const n=performance.now();e.resetDrawCalls(),this.renderTarget?this.renderTarget.bind():(this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.viewport(0,0,this.width,this.height)),this.clearColor&&(this.gl.clearColor(this.clearColor[0],this.clearColor[1],this.clearColor[2],this.clearColor[3]),this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT));for(const[s,a]of Object.entries(this.inputs))this.material.setUniform(s,a);this.material.setUniform("uResolution",this._resolutionBuffer),this.fullScreenQuad.draw(this.material,this.renderTarget),this.renderTarget&&this.renderTarget.unbind();const r=e.resetDrawCalls();this.drawCount=r.count,this.drawDetails=r.details,this.executionTime=performance.now()-n}}class Pt extends Ke{constructor(e,t,i,n,r=null,s="Lighting Pass"){super(e,t,i,n,r,s),this.lightCamera=null,this._lightSpace=new Float32Array(16),this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uNormalTexture",t)}execute(e,t,i){this.lightCamera&&this.setMatricesFromCameras(i,this.lightCamera),super.execute(e,t,i)}setMatricesFromCameras(e,t){q.multiply(this._lightSpace,t.projectionMatrix,t.viewMatrix),q.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),q.invert(this._invCamViewProj,this._camViewProj);const i=e.transform.position;this.material.setUniforms({uLightSpaceMatrix:this._lightSpace,uInverseViewProjection:this._invCamViewProj,uCameraPos:[i.x,i.y,i.z]})}}class Dt extends Ke{constructor(e,t,i,n,r=null,s="Skybox Pass"){super(e,t,i,n,r,s),this.clearColor=null,this.clearDepth=!1,this._camViewProj=new Float32Array(16),this._invCamViewProj=new Float32Array(16)}setCamera(e){q.multiply(this._camViewProj,e.projectionMatrix,e.viewMatrix),q.invert(this._invCamViewProj,this._camViewProj),this.material.setUniforms({uInverseViewProjection:this._invCamViewProj,uCameraPos:[e.transform.position.x,e.transform.position.y,e.transform.position.z]})}setLight(e,t,i,n,r){this.material.setUniforms({uLightDir:e,uSunColor:t,uTopColor:i,uMidColor:n,uBottomColor:r})}setInputTexture(e){this.setTexture("uDepthTexture",e)}execute(e,t,i){this.setCamera(i),super.execute(e,t,i)}}class Bt extends Ke{constructor(e,t,i,n,r,s="PixelArt Pass"){super(e,t,i,n,r,s),this._resolutionBuffer=new Float32Array([t,i])}setInputBuffers(e,t){this.setTexture("uSceneTexture",e),this.setTexture("uGbufferTexture",t)}resize(e,t){super.resize(e,t),this._resolutionBuffer[0]=e,this._resolutionBuffer[1]=t,this.material.setUniform("uResolution",this._resolutionBuffer)}}const zt=`// Wireframe Vertex Shader (WebGL 1.0 / GLSL ES 1.0)\r
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
`,Lt=`precision highp float;\r
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
}`;class kt extends $e{constructor(e,t,i,n=null,r="Wireframe Pass"){super(e,t,i,r),this.target=n,this.enabled=!1;const s=new he(e,zt,Lt);this.material=new re(s,"Wireframe"),this.material.setUniforms({uWireColor:[0,1,0],uWireWidth:1,uWireOpacity:1,uShowBackfaces:!1}),this._gl=e,this._polygonMode=null}setWireColor(e,t,i){this.material.setVec3("uWireColor",e,t,i)}setOpacity(e){this.material.setFloat("uWireOpacity",Math.max(0,Math.min(1,e)))}setShowBackfaces(e){this.material.setUniform("uShowBackfaces",e?1:0,"1i")}execute(e,t,i){if(!this.enabled)return;this.target?this.target.bind():(this._gl.bindFramebuffer(this._gl.FRAMEBUFFER,null),this._gl.viewport(0,0,this.width,this.height)),this._gl.clearColor(.1,.1,.15,1),this._gl.clear(this._gl.COLOR_BUFFER_BIT|this._gl.DEPTH_BUFFER_BIT),this._gl.depthMask(!0),this._gl.enable(this._gl.DEPTH_TEST);const n=this.material.shader;n.use(),n.setUniform("uProjectionMatrix",i.projectionMatrix),n.setUniform("uViewMatrix",i.viewMatrix);const r=s=>{if(s.active){if(s.transform.updateWorldMatrix(),s.mesh){n.setUniform("uModelMatrix",s.transform.worldMatrix);for(const c in this.material.uniforms){const l=this.material.uniforms[c];n.setUniform(c,l.value,l.type)}const a=s.mesh;a.bind(n),a.indices&&a.indices.length>0?this._gl.drawElements(this._gl.LINE_STRIP,a.count,this._gl.UNSIGNED_SHORT,0):this._gl.drawArrays(this._gl.LINE_STRIP,0,a.count)}if(s.transform&&s.transform.children)for(const a of s.transform.children)a.gameObject&&r(a.gameObject)}};for(const s of t)r(s)}resize(e,t){this.width=e,this.height=t,this.target&&this.target.resize(e,t)}toggle(){this.enabled=!this.enabled,console.log(this.name+(this.enabled?" enabled":" disabled"))}}class Ot{constructor(e=null){this.gameContext=e,this.enabled=!1,this.devToolsEnabled=!1,this.metrics={startTime:0,endTime:0,frameTime:0,cpuTime:0,passes:[],memory:{vertices:0,renderTargets:0,textures:0,total:0}},this.lastFrameStart=0,this.fps=0,this.fpsHistory=[],this.frameTimeHistory=[],this.history=[],this.maxHistory=300,this.currentPass=null}enable(){this.enabled=!0}disable(){this.enabled=!1,this.metrics.passes=[]}beginFrame(){if(!this.enabled)return;const e=performance.now();if(this.lastFrameStart>0){const t=e-this.lastFrameStart;this.fps=1e3/t,this.fpsHistory.push(this.fps),this.fpsHistory.length>300&&this.fpsHistory.shift(),this.frameTimeHistory.push(t),this.frameTimeHistory.length>300&&this.frameTimeHistory.shift()}this.lastFrameStart=e,this.metrics.startTime=e,this.metrics.passes.length=0}endFrame(){this.enabled&&(this.metrics.endTime=performance.now(),this.metrics.cpuTime=this.metrics.endTime-this.metrics.startTime,this.addToHistory(this.metrics.cpuTime))}beginPass(e){if(!this.enabled)return;const t={id:this.metrics.passes.length,name:e,startTime:performance.now(),endTime:0,duration:0,drawCalls:[]};this.metrics.passes.push(t),this.currentPass=t}endPass(){!this.enabled||!this.currentPass||(this.currentPass.endTime=performance.now(),this.currentPass.duration=this.currentPass.endTime-this.currentPass.startTime,this.addPassToHistory(this.currentPass.name,this.currentPass.duration),this.currentPass=null)}addPassToHistory(e,t){this.passHistory||(this.passHistory={}),this.passHistory[e]||(this.passHistory[e]=[]),this.passHistory[e].push(t),this.passHistory[e].length>300&&this.passHistory[e].shift()}recordDrawCall(e,t,i,n,r,s=0){!this.enabled||!this.currentPass||this.currentPass.drawCalls.push({object:e,material:t,shader:i,duration:r-n,vertices:s})}addToHistory(e){this.history.push(e),this.history.length>this.maxHistory&&this.history.shift()}updateMemoryMetrics(){let e=0,t=0,i=0;if(this.metrics&&this.metrics.passes&&this.metrics.passes.forEach(r=>{r.drawCalls.forEach(s=>{e+=(s.vertices||0)*32})}),this.gameContext&&this.gameContext.renderQueue&&this.gameContext.renderQueue.passes&&this.gameContext.renderQueue.passes.forEach(r=>{if(r.renderTarget&&r.renderTarget.getMemorySize){const s=r.renderTarget.getMemorySize();t+=s}}),this.gameContext){if(this.gameContext.textures)for(const r in this.gameContext.textures){const s=this.gameContext.textures[r];if(s&&s.getMemorySize){const a=s.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.textureCache)for(const r in this.gameContext.textureCache){const s=this.gameContext.textureCache[r];if(s&&s.getMemorySize){const a=s.getMemorySize();a>0&&(i+=a)}}if(this.gameContext.assets&&this.gameContext.assets.textures)for(const r in this.gameContext.assets.textures){const s=this.gameContext.assets.textures[r];if(s&&s.getMemorySize){const a=s.getMemorySize();a>0&&(i+=a)}}}const n=e+t+i;return this.metrics.memory={vertices:e,renderTargets:t,textures:i,total:n},this.metrics.memory}}class $t{static attach(e,t,i=null){const n=new Ot(i),r=e.execute.bind(e);e.execute=function(a,c,l){n.enabled&&n.beginFrame();const h=e.passes||[];for(let d=0;d<h.length;d++){const u=h[d];if(!u.__profilerInstrumented){const f=u.execute.bind(u);u.execute=function(x,w,b){const p=u.name||"Unnamed Pass";n.enabled&&(n.beginPass(p),x.currentPassName=p,n.devToolsEnabled&&performance.mark(`PassStart-${p}`)),f(x,w,b),n.enabled&&(n.endPass(),x.currentPassName=null,n.devToolsEnabled&&(performance.mark(`PassEnd-${p}`),performance.measure(`Pass: ${p}`,`PassStart-${p}`,`PassEnd-${p}`),performance.clearMarks(`PassStart-${p}`),performance.clearMarks(`PassEnd-${p}`)))},u.__profilerInstrumented=!0}}r(a,c,l),n.enabled&&(n.endFrame(),n.updateMemoryMetrics())};const s=t.draw.bind(t);return t.draw=function(a,c,l,h){if(!n.enabled){s(a,c,l,h);return}const d=a?a.name:"Unknown",u=h?h.name:"Unknown";n.devToolsEnabled&&performance.mark(`DrawStart-${d}`);const f=performance.now();s(a,c,l,h);const x=performance.now();n.devToolsEnabled&&(performance.mark(`DrawEnd-${d}`),performance.measure(`Draw: ${d} [${u}]`,`DrawStart-${d}`,`DrawEnd-${d}`),performance.clearMarks(`DrawStart-${d}`),performance.clearMarks(`DrawEnd-${d}`));const w=a&&a.mesh?a.mesh.count:6;n.recordDrawCall(d,u,0,f,x,w)},n.disable(),n}}class Ut{constructor(){this.container=document.createElement("div"),this.container.id="editor-ui-root",Object.assign(this.container.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",pointerEvents:"none",zIndex:"9999",fontFamily:"sans-serif"}),document.body.appendChild(this.container),this.initNavBar()}initNavBar(){this.navBar=document.createElement("div"),this.navBar.id="editor-navbar",Object.assign(this.navBar.style,{position:"absolute",top:"10px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"5px",background:"rgba(26, 26, 26, 0.9)",padding:"5px 10px",borderRadius:"20px",border:"1px solid #333",pointerEvents:"auto",boxShadow:"0 4px 10px rgba(0,0,0,0.5)",zIndex:"10001"}),this.container.appendChild(this.navBar),this.addDragLogic(this.navBar,this.navBar)}addNavItem(e,t){const i=document.createElement("button");i.innerText=e,Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 12px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",transition:"background 0.2s",outline:"none"}),i.onclick=()=>{const n=t.style.display==="none";t.style.display=n?"flex":"none",i.style.background=n?"#444":"#252525"},i.onmouseover=()=>{t.style.display==="none"&&(i.style.background="#333")},i.onmouseout=()=>{t.style.display==="none"&&(i.style.background="#252525")},i.style.background=t.style.display==="none"?"#252525":"#444",this.navBar.appendChild(i)}addNavSelect(e,t){const i=document.createElement("select");Object.assign(i.style,{background:"#252525",color:"#ccc",border:"1px solid #444",padding:"4px 8px",borderRadius:"15px",fontSize:"10px",fontWeight:"bold",cursor:"pointer",outline:"none",marginLeft:"10px"}),e.forEach(n=>{const r=document.createElement("option");r.value=n,r.text=n,i.appendChild(r)}),i.onchange=n=>t(n.target.value),this.navBar.appendChild(i)}toggleVisibility(){const e=this.container.style.display==="none";this.container.style.display=e?"block":"none"}createWindow(e,t,i,n,r){const s=document.createElement("div");Object.assign(s.style,{position:"absolute",left:`${t}px`,top:`${i}px`,width:`${n}px`,height:`${r}px`,backgroundColor:"#1a1a1a",border:"1px solid #333",display:"flex",flexDirection:"column",pointerEvents:"auto",overflow:"hidden",boxShadow:"0 4px 15px rgba(0,0,0,0.5)"});const a=document.createElement("div");a.innerText=e,Object.assign(a.style,{padding:"6px 10px",background:"#252525",color:"#ccc",fontSize:"11px",fontWeight:"bold",cursor:"move",userSelect:"none",borderBottom:"1px solid #333",textTransform:"uppercase",display:"flex",justifyContent:"space-between",alignItems:"center"});const c=document.createElement("span");c.innerHTML="×",Object.assign(c.style,{cursor:"pointer",fontSize:"16px",lineHeight:"1",padding:"0 4px",color:"#888"}),c.onclick=()=>{s.style.display="none"},c.onmouseover=()=>{c.style.color="#fff"},c.onmouseout=()=>{c.style.color="#888"},a.appendChild(c);const l=document.createElement("div");l.classList.add("window-content"),Object.assign(l.style,{flex:"1",overflow:"auto",background:"#111",position:"relative",width:"100%",height:"100%"});const h=document.createElement("div");return Object.assign(h.style,{width:"10px",height:"10px",background:"#444",position:"absolute",right:"0",bottom:"0",cursor:"nwse-resize",zIndex:"10"}),s.appendChild(a),s.appendChild(l),s.appendChild(h),this.container.appendChild(s),this.addDragLogic(s,a),this.addResizeLogic(s,h),{content:l,window:s}}addResizeLogic(e,t){let i=!1,n,r,s,a;t.addEventListener("mousedown",h=>{h.preventDefault(),h.stopPropagation(),i=!0,s=h.clientX,a=h.clientY,n=e.offsetWidth,r=e.offsetHeight,document.addEventListener("mousemove",c),document.addEventListener("mouseup",l)});const c=h=>{if(!i)return;const d=n+(h.clientX-s),u=r+(h.clientY-a);d>100&&(e.style.width=d+"px"),u>100&&(e.style.height=u+"px")},l=()=>{i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",l)}}addDragLogic(e,t){let i=!1,n,r,s,a;t.addEventListener("mousedown",h=>{h.target.tagName!=="BUTTON"&&(i=!0,n=h.clientX,r=h.clientY,s=e.offsetLeft,a=e.offsetTop,document.addEventListener("mousemove",c),document.addEventListener("mouseup",l),e.style.zIndex="10000",e===this.navBar&&(e.style.zIndex="10001"),e!==this.navBar&&(this.container.querySelectorAll(".window").forEach(d=>d.style.zIndex="9999"),e.style.zIndex="10000"))});const c=h=>{if(!i)return;let d=s+(h.clientX-n),u=a+(h.clientY-r);const f=20;d<f&&(d=0),u<f&&(u=0),Math.abs(window.innerWidth-(d+e.offsetWidth))<f&&(d=window.innerWidth-e.offsetWidth),Math.abs(window.innerHeight-(u+e.offsetHeight))<f&&(u=window.innerHeight-e.offsetHeight),e.style.left=d+"px",e.style.top=u+"px"},l=()=>{i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",l)}}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class le{constructor(e,t,i,n,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),le.nextNameID=le.nextNameID||0,this.$name.id=`lil-gui-name-${++le.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",s=>s.stopPropagation()),this.domElement.addEventListener("keyup",s=>s.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("lil-disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Wt extends le{constructor(e,t,i){super(e,t,i,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ye(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Nt={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ye,toHexString:Ye},Re={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},It={isPrimitive:!1,match:o=>Array.isArray(o)||ArrayBuffer.isView(o),fromHexString(o,e,t=1){const i=Re.fromHexString(o);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([o,e,t],i=1){i=255/i;const n=o*i<<16^e*i<<8^t*i<<0;return Re.toHexString(n)}},Vt={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const i=Re.fromHexString(o);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:o,g:e,b:t},i=1){i=255/i;const n=o*i<<16^e*i<<8^t*i<<0;return Re.toHexString(n)}},Ht=[Nt,Re,It,Vt];function jt(o){return Ht.find(e=>e.match(o))}class Xt extends le{constructor(e,t,i,n){super(e,t,i,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=jt(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ye(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Xe extends le{constructor(e,t,i){super(e,t,i,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Gt extends le{constructor(e,t,i,n,r,s){super(e,t,i,"lil-number"),this._initInput(),this.min(n),this.max(r);const a=s!==void 0;this.step(a?s:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},i=T=>{const D=parseFloat(this.$input.value);isNaN(D)||(this._snapClampSetValue(D+T),this.$input.value=this.getValue())},n=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T)*-1))},r=T=>{this._inputFocused&&(T.preventDefault(),i(this._step*this._normalizeMouseWheel(T)))};let s=!1,a,c,l,h,d;const u=5,f=T=>{a=T.clientX,c=l=T.clientY,s=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",x),window.addEventListener("mouseup",w)},x=T=>{if(s){const D=T.clientX-a,L=T.clientY-c;Math.abs(L)>u?(T.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(D)>u&&w()}if(!s){const D=T.clientY-l;d-=D*this._step*this._arrowKeyMultiplier(T),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}l=T.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",w)},b=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",b),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const e=(p,T,D,L,O)=>(p-T)/(D-T)*(O-L)+L,t=p=>{const T=this.$slider.getBoundingClientRect();let D=e(p,T.left,T.right,this._min,this._max);this._snapClampSetValue(D)},i=p=>{this._setDraggingStyle(!0),t(p.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=p=>{t(p.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let s=!1,a,c;const l=p=>{p.preventDefault(),this._setDraggingStyle(!0),t(p.touches[0].clientX),s=!1},h=p=>{p.touches.length>1||(this._hasScrollBar?(a=p.touches[0].clientX,c=p.touches[0].clientY,s=!0):l(p),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=p=>{if(s){const T=p.touches[0].clientX-a,D=p.touches[0].clientY-c;Math.abs(T)>Math.abs(D)?l(p):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else p.preventDefault(),t(p.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},f=this._callOnFinishChange.bind(this),x=400;let w;const b=p=>{if(Math.abs(p.deltaX)<Math.abs(p.deltaY)&&this._hasScrollBar)return;p.preventDefault();const D=this._normalizeMouseWheel(p)*this._step;this._snapClampSetValue(this.getValue()+D),this.$input.value=this.getValue(),clearTimeout(w),w=setTimeout(f,x)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",b,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",e),document.body.classList.toggle("lil-dragging",e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Yt extends le{constructor(e,t,i,n){super(e,t,i,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class qt extends le{constructor(e,t,i){super(e,t,i,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var Zt=`.lil-gui {
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
}`;function Kt(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let ht=!1;class fe{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:r="Controls",closeFolders:s=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!ht&&a&&(Kt(Zt),ht=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=s}add(e,t,i,n,r){if(Object(i)===i)return new Yt(this,e,t,i);const s=e[t];switch(typeof s){case"number":return new Gt(this,e,t,i,n,r);case"boolean":return new Wt(this,e,t);case"string":return new qt(this,e,t);case"function":return new Xe(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,i=1){return new Xt(this,e,t,i)}addFolder(e){const t=new fe({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Xe||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Xe)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("lil-transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Qt{constructor(e,t){this.editor=e,this.gui=new fe({container:t,title:"Hierarchy",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init(),setInterval(()=>this.refresh(),1e3)}refresh(){const e=this.editor.game.scene||[];this.lastCount!==e.length&&(this.lastCount=e.length,this.init())}init(){[...this.gui.children].forEach(s=>s.destroy());const t=this.editor.game.camera;t&&this.gui.add({select:()=>this.editor.selectObject(t)},"select").name("Main Camera");const i=this.editor.game.lightCamera;i&&this.gui.add({select:()=>this.editor.selectObject(i)},"select").name("Light Camera");const n=(s,a=null)=>{if(!s)return;const c=a||this.gui,l=s.name||"Object";if(c.add({select:()=>this.editor.selectObject(s)},"select").name(l),s.transform&&s.transform.children&&s.transform.children.length>0){const h=c.addFolder(`${l} Children`);for(const d of s.transform.children)d.gameObject&&n(d.gameObject,h)}};(this.editor.game.scene||[]).forEach((s,a)=>{s&&n(s)})}}class Jt{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"Inspector",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedObject=null,this.refresh()}inspect(e){this.selectedObject=e,this.refresh()}refresh(){if([...this.gui.children].forEach(r=>r.destroy()),!this.selectedObject){this.gui.add({status:"No selection"},"status").name("Object").disable();return}const t=this.selectedObject,i=t.name||"GameObject",n=this.gui.addFolder("Object Settings");if(n.add(t,"name").name("Name").listen(),typeof t.active<"u"&&n.add(t,"active").name("Active").listen(),t.transform){const r=t.transform,s=this.gui.addFolder(`Transform: ${i}`),a=s.addFolder("Position");a.add(r.position,"x").step(.01).listen().name("X"),a.add(r.position,"y").step(.01).listen().name("Y"),a.add(r.position,"z").step(.01).listen().name("Z");const c=s.addFolder("Rotation");c.add(r.rotation,"x").step(.01).listen().name("X"),c.add(r.rotation,"y").step(.01).listen().name("Y"),c.add(r.rotation,"z").step(.01).listen().name("Z");const l=s.addFolder("Scale");l.add(r.scale,"x").step(.01).listen().name("X"),l.add(r.scale,"y").step(.01).listen().name("Y"),l.add(r.scale,"z").step(.01).listen().name("Z")}if(t instanceof dt){const r=this.gui.addFolder("Camera Settings");r.add(t,"orthographic").name("Orthographic").onChange(()=>t.updateProjection());const s=r.addFolder("Perspective");s.add(t,"fov",.1,3.14).step(.01).name("FOV").onChange(()=>t.updateProjection()),r.addFolder("Orthographic").add(t,"orthoSize",.1,1e3).step(.01).name("Size (Half Height)").onChange(()=>t.updateProjection()),r.add(t,"near",.01,10).step(.01).name("Near Plane").onChange(()=>t.updateProjection()),r.add(t,"far",10.1,1e3).step(1).name("Far Plane").onChange(()=>t.updateProjection()),s.open()}if(t.material){const r=this.gui.addFolder("Material");r.add(t.material,"name").name("Material Name").disable().listen(),r.add({select:()=>{this.editor.windows.material&&(this.editor.windows.material.inspect(t.material),this.editor.windows.material.container.parentElement.style.display="flex")}},"select").name("Open in Material Editor")}if(t.transform&&t.transform.children&&t.transform.children.length>0){const r=this.gui.addFolder("Children");t.transform.children.forEach((s,a)=>{if(s.gameObject){const c=s.gameObject,l=c.name||`Child ${a}`;r.add({select:()=>this.editor.selectObject(c)},"select").name(l)}}),r.open()}}}class ei{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"Material Editor",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.selectedMaterial=null,this.init()}init(){this.refreshList()}refreshList(){[...this.gui.children].forEach(n=>n.destroy()),this.propertyFolder=null;const t=this.editor.game.materials||{},i=this.gui.addFolder("Project Materials");for(const n in t){const r=t[n];i.add({select:()=>this.inspect(r)},"select").name(n)}this.selectedMaterial?this.drawMaterialProperties(this.selectedMaterial):this.gui.add({info:"Select a material"},"info").name("Status").disable()}inspect(e){this.selectedMaterial=e,this.refreshList()}drawMaterialProperties(e){let t;if(this.propertyFolder?(t=this.propertyFolder,[...t.children].forEach(n=>n.destroy()),t.title(`Properties: ${e.name||"Unnamed"}`)):(t=this.gui.addFolder(`Properties: ${e.name||"Unnamed"}`),this.propertyFolder=t),!!e.uniforms)for(const i in e.uniforms){const n=e.uniforms[i],r=n.value;if(n.type,Array.isArray(r)||r instanceof Float32Array)if(i.toLowerCase().includes("color")&&(r.length===3||r.length===4))t.addColor(n,"value").name(i).listen();else{const a=t.addFolder(i),c=["x","y","z","w"];for(let l=0;l<r.length;l++){const h={get val(){return r[l]},set val(d){r[l]=d}};a.add(h,"val").step(.01).name(c[l]||`[${l}]`).listen()}}else if(typeof r=="number"){const s={get val(){return n.value},set val(c){n.value=c}};let a=t.add(s,"val").name(i);i.toLowerCase().includes("threshold")||i.toLowerCase().includes("factor")?a=a.min(0).max(1).step(.01):a=a.step(.01),a.listen()}else r instanceof WebGLTexture&&t.add({info:"Texture"},"info").name(i).disable()}}}class ti{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"Render Passes",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.init()}init(){this.refresh(),setInterval(()=>this.updateStats(),1e3)}refresh(){[...this.gui.children].forEach(i=>i.destroy());const t=this.editor.game.renderQueue;!t||!t.passes||t.passes.forEach((i,n)=>{const r=this.gui.addFolder(`${n}: ${i.name||"Pass"}`);if(r.add(i,"enabled").name("Active"),r.add(i,"drawCount").name("Draw Calls").disable().listen(),r.add(i,"executionTime").name("Time (ms)").disable().listen(),i.clearColor){const c={get color(){return[i.clearColor[0],i.clearColor[1],i.clearColor[2]]},set color(l){i.clearColor[0]=l[0],i.clearColor[1]=l[1],i.clearColor[2]=l[2]}};r.addColor(c,"color").name("Clear Color")}i.renderTarget?r.add({info:`${i.renderTarget.width}x${i.renderTarget.height}`},"info").name("Resolution").disable():r.add({info:"Screen"},"info").name("Target").disable(),i.material&&r.add({select:()=>{this.editor.windows.material&&this.editor.windows.material.inspect(i.material)}},"select").name("Inspect Material");const s={show:!1},a=r.addFolder("Performance Details");a.add(s,"show").name("List Draw Calls").onChange(c=>{c?this.showDetails(a,i):this.clearDetails(a)})})}showDetails(e,t){if(this.clearDetails(e),!t.drawDetails||t.drawDetails.length===0){e.add({info:"No draw calls"},"info").name("Status").disable();return}t.drawDetails.forEach((i,n)=>{const r=e.addFolder(`Draw ${n}: ${i.object}`);r.add(i,"material").name("Material").disable(),r.add(i,"shader").name("Shader").disable(),r.add(i,"target").name("Target").disable()})}clearDetails(e){[...e.children].forEach(i=>{i.property!=="show"&&i.destroy()})}updateStats(){}}class ii{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"Engine Profiler",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.stats={enabled:!1,devToolsTrace:!1,fps:0,avgFps:0,fps1Low:0,fps1High:0,ms:0,gpuTotal:0,totalDrawCalls:0,totalPasses:0,totalVertices:0,approxMemory:"0 MB",memoryVertices:"0 MB",memoryRenderTargets:"0 MB",memoryTextures:"0 MB",pieMode:"Average",avgFrames:60},this.graphCanvas=document.createElement("canvas"),this.graphCanvas.style.width="100%",this.graphCanvas.style.height="150px",this.graphCanvas.style.background="#222",this.graphCanvas.style.marginTop="5px",this.container.appendChild(this.graphCanvas),this.frameTimeCanvas=document.createElement("canvas"),this.frameTimeCanvas.style.width="100%",this.frameTimeCanvas.style.height="100px",this.frameTimeCanvas.style.background="#222",this.frameTimeCanvas.style.marginTop="5px",this.container.appendChild(this.frameTimeCanvas),this.init()}init(){const e=this.editor.game;this.gui.add(this.stats,"enabled").name("Enable Profiling").onChange(t=>{e&&e.profiler&&(t?e.profiler.enable():e.profiler.disable())}),this.gui.add(this.stats,"devToolsTrace").name("DevTools Trace").onChange(t=>{e&&e.profiler&&(e.profiler.devToolsEnabled=t)}),this.gui.add(this.stats,"fps").name("FPS").disable().listen(),this.gui.add(this.stats,"avgFps").name("Avg FPS").disable().listen(),this.gui.add(this.stats,"fps1Low").name("1% Low FPS").disable().listen(),this.gui.add(this.stats,"fps1High").name("1% High FPS").disable().listen(),this.gui.add(this.stats,"ms").name("Frame Time (ms)").disable().listen(),this.gui.add(this.stats,"gpuTotal").name("GPU Time (est ms)").disable().listen(),this.gui.add(this.stats,"totalDrawCalls").name("Total Draw Calls").disable().listen(),this.gui.add(this.stats,"totalPasses").name("Total Passes").disable().listen(),this.gui.add(this.stats,"totalVertices").name("Total Vertices").disable().listen(),this.gui.add(this.stats,"approxMemory").name("Total Memory").disable().listen(),this.gui.add(this.stats,"memoryVertices").name("  ├─ Vertices").disable().listen(),this.gui.add(this.stats,"memoryRenderTargets").name("  ├─ RenderTargets").disable().listen(),this.gui.add(this.stats,"memoryTextures").name("  └─ Textures").disable().listen(),this.gui.add(this.stats,"pieMode",["Current Frame","Average"]).name("Graph Mode"),this.gui.add(this.stats,"avgFrames",10,300).step(10).name("Avg Sample Count"),this.passesFolder=this.gui.addFolder("Pass Performance"),this.showPassDetails=!1,this.passesFolder.add(this,"showPassDetails").name("Show Details").onChange(()=>this.rebuildPassFolders()),setInterval(()=>{this.update(),this.drawGraph(),this.drawFrameTimeGraph()},100)}drawFrameTimeGraph(){const e=this.frameTimeCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled||!t.frameTimeHistory)return;this.frameTimeCanvas.width=this.frameTimeCanvas.clientWidth,this.frameTimeCanvas.height=this.frameTimeCanvas.clientHeight;const i=this.frameTimeCanvas.width,n=this.frameTimeCanvas.height;e.clearRect(0,0,i,n);const r=Math.min(t.frameTimeHistory.length,this.stats.avgFrames);if(r<2)return;const s=[];for(let h=t.frameTimeHistory.length-r;h<t.frameTimeHistory.length;h++)s.push(t.frameTimeHistory[h]);let a=0,c=100;const l=c-a;e.beginPath(),e.strokeStyle="#4363d8",e.lineWidth=1.5;for(let h=0;h<s.length;h++){const d=h/(s.length-1)*i,u=n-(s[h]-a)/l*n*.8-n*.1;h===0?e.moveTo(d,u):e.lineTo(d,u)}e.stroke(),e.fillStyle="#fff",e.font="10px monospace",e.textAlign="left",e.textBaseline="top",e.fillText(`Max: ${c.toFixed(1)}ms`,5,5),e.textBaseline="bottom",e.fillText(`Min: ${a.toFixed(1)}ms`,5,n-5),e.textAlign="right",e.textBaseline="top",e.fillText(`Delta time: ${s[r-1].toFixed(2)}`,i-5,5)}drawGraph(){const e=this.graphCanvas.getContext("2d"),t=this.editor.game.profiler;if(!t||!t.enabled)return;this.graphCanvas.width=this.graphCanvas.clientWidth,this.graphCanvas.height=this.graphCanvas.clientHeight;const i=this.graphCanvas.width,n=this.graphCanvas.height;if(e.clearRect(0,0,i,n),!t.metrics||!t.metrics.passes||t.metrics.passes.length===0)return;const r=["#e6194B","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6"];let s=[],a=0;if(this.stats.pieMode==="Average"){let w=0;const b=this.stats.avgFrames;for(const p in t.passHistory){const T=t.passHistory[p];if(T.length>0){let D=0,L=Math.min(T.length,b);for(let B=T.length-L;B<T.length;B++)D+=T[B];const O=D/L;s.push({name:p,duration:O,color:r[w%r.length]}),a+=O}w++}}else t.metrics.passes.forEach((w,b)=>{s.push({name:w.name,duration:w.duration,color:r[b%r.length]}),a+=w.duration});if(a<=0)return;const c=i*.3,l=n/2,h=Math.max(0,Math.min(c,l)-10);if(h<=0)return;let d=-.5*Math.PI;s.forEach(w=>{if(w.duration<=0)return;const b=w.duration/a*2*Math.PI;if(e.beginPath(),e.moveTo(c,l),e.arc(c,l,h,d,d+b),e.closePath(),e.fillStyle=w.color,e.fill(),b>.3){const p=d+b/2,T=c+Math.cos(p)*(h*.6),D=l+Math.sin(p)*(h*.6);e.fillStyle="#000",e.font="10px bold sans-serif",e.textAlign="center",e.textBaseline="middle";const L=w.name.replace("Pass","").substring(0,6);e.fillText(L,T,D)}d+=b});const u=c+h+20;let f=20;const x=16;e.textAlign="left",e.font="10px monospace",s.forEach(w=>{e.fillStyle=w.color,e.fillRect(u,f-8,10,10),e.fillStyle="#fff";const b=(w.duration/a*100).toFixed(1);e.fillText(`${w.name.substring(0,10)}: ${w.duration.toFixed(2)}ms (${b}%)`,u+15,f),f+=x})}rebuildPassFolders(){if([...this.passesFolder.children].forEach(i=>{i.property!=="showPassDetails"&&i.destroy()}),!this.showPassDetails)return;const t=this.editor.game;t.renderQueue&&t.renderQueue.passes&&t.renderQueue.passes.forEach(i=>{const n=this.passesFolder.addFolder(i.name||"Pass");n.add(i,"drawCount").name("Draw Calls").disable().listen(),n.add(i,"executionTime").name("Perf (ms)").disable().listen(),n.add(i,"enabled").name("Active").disable().listen()})}update(){const e=this.editor.game;if(!e)return;const t=e.profiler;if(!t)return;if(this.stats.fps=Math.round(t.fps||0),t.fpsHistory&&t.fpsHistory.length>0){let d=0,u=Math.min(t.fpsHistory.length,this.stats.avgFrames),f=[];for(let b=t.fpsHistory.length-u;b<t.fpsHistory.length;b++)d+=t.fpsHistory[b],f.push(t.fpsHistory[b]);this.stats.avgFps=Math.round(d/u),f.sort((b,p)=>b-p);let x=Math.floor(f.length*.01),w=Math.floor(f.length*.99);w>=f.length&&(w=f.length-1),this.stats.fps1Low=Math.round(f[x]||this.stats.fps),this.stats.fps1High=Math.round(f[w]||this.stats.fps)}else this.stats.avgFps=this.stats.fps,this.stats.fps1Low=this.stats.fps,this.stats.fps1High=this.stats.fps;this.stats.ms=(t.metrics.cpuTime||0).toFixed(2);let i=0,n=0,r=0;t.metrics&&t.metrics.passes&&(this.stats.totalPasses=t.metrics.passes.length,t.metrics.passes.forEach(d=>{i+=d.drawCalls.length,n+=d.duration,d.drawCalls.forEach(u=>r+=u.vertices||0)})),this.stats.totalDrawCalls=i,this.stats.totalVertices=r,this.stats.gpuTotal=n.toFixed(3);const s=t.metrics.memory||{vertices:0,renderTargets:0,textures:0,total:0},a=(s.vertices/(1024*1024)).toFixed(2),c=(s.renderTargets/(1024*1024)).toFixed(2),l=(s.textures/(1024*1024)).toFixed(2),h=(s.total/(1024*1024)).toFixed(2);this.stats.approxMemory=h+" MB",this.stats.memoryVertices=a+" MB",this.stats.memoryRenderTargets=c+" MB",this.stats.memoryTextures=l+" MB",this.showPassDetails}}class ni{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"Info & Credits",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto",this.info={engine:"PiGL.js",version:"1.0.2"},this.init()}init(){this.gui.add(this.info,"engine").name("Engine").disable(),this.gui.add(this.info,"version").name("Version").disable();const e={openGithub:()=>{window.open("https://github.com/itsTanpi","_blank")}};this.gui.add(e,"openGithub").name("Made by Tanpi");const t=this.gui.addFolder("Instructions"),i={move:"WASD to move",look:"Right Mouse Button to look",hideUi:"H to hide Ui"};t.add(i,"move").name("Movement").disable(),t.add(i,"look").name("Camera").disable(),t.add(i,"hideUi").name("Ui").disable();const n=this.gui.addFolder("Asset Credits"),r={openKenney:()=>{window.open("https://www.kenney.nl","_blank")},openWill:()=>{window.open("https://sketchfab.com/3d-models/lowpoly-island-0a514854b7164178a6c7a69961235197","_blank")}};n.add(r,"openKenney").name("Kenney (kenney.nl)"),n.add(r,"openWill").name("will.nsq (Sketchfab)")}}class ri{constructor(e,t){this.editor=e,this.container=t,this.gui=new fe({container:t,title:"World",touchEventTarget:t,autoPlace:!1}),this.gui.domElement.style.width="100%",this.gui.domElement.style.height="auto";const i=this.editor.game&&this.editor.game.floatingSpawnConfig?this.editor.game.floatingSpawnConfig.seed:0;this.state={seed:Number.isFinite(i)?i:0,respawn:()=>this.respawnWithSeed(this.state.seed),randomize:()=>{const n=Math.floor(Math.random()*1e6);this.state.seed=n,this.seedController&&this.seedController.updateDisplay(),this.respawnWithSeed(n)}},this.init()}init(){this.seedController=this.gui.add(this.state,"seed",0,1e6,1).name("Seed"),this.seedController.listen();const e=this.editor.game&&this.editor.game.cameraController?this.editor.game.cameraController.moveSpeed:10;this.state.moveSpeed=e,this.moveSpeedController=this.gui.add(this.state,"moveSpeed",1,100,.5).name("Move Speed"),this.moveSpeedController.onChange(i=>{try{this.editor.game&&this.editor.game.cameraController&&(this.editor.game.cameraController.moveSpeed=i)}catch(n){console.warn("Failed to set camera moveSpeed",n)}}),this.gui.add(this.state,"respawn").name("Respawn"),this.gui.add(this.state,"randomize").name("Random Seed");const t={Random:"Random reroll"};this.gui.add(t,"Random").name("Random").disable()}async respawnWithSeed(e){!this.editor.game||typeof this.editor.game.respawnWithSeed!="function"||await this.editor.game.respawnWithSeed(e)}}class si{constructor(e){this.game=e,this.wm=new Ut,this.windows={},this.initWindows()}initWindows(){const e=this.wm.createWindow("Hierarchy",20,20,250,400);this.windows.hierarchy=new Qt(this,e.content),this.wm.addNavItem("HIERARCHY",e.window),e.window.style.display="none";const t=this.wm.createWindow("Inspector",290,20,320,500);this.windows.inspector=new Jt(this,t.content),this.wm.addNavItem("INSPECTOR",t.window),t.window.style.display="none";const i=this.wm.createWindow("Materials",630,20,320,500);this.windows.material=new ei(this,i.content),this.wm.addNavItem("MATERIALS",i.window),i.window.style.display="none";const n=this.wm.createWindow("Render Passes",970,20,320,500);this.windows.renderPass=new ti(this,n.content),this.wm.addNavItem("PASSES",n.window),n.window.style.display="none";const r=this.wm.createWindow("Profiler",20,20,500,700);this.windows.profiler=new ii(this,r.content),this.wm.addNavItem("PROFILER",r.window),r.window.style.display="none";const s=this.wm.createWindow("Info",290,440,380,300);this.windows.info=new ni(this,s.content),this.wm.addNavItem("INFO",s.window),s.window.style.display="none";const a=this.wm.createWindow("World",680,440,260,220);this.windows.world=new ri(this,a.content),this.wm.addNavItem("WORLD",a.window),a.window.style.display="none";let c=["Final"];this.game.viewportPass&&this.game.viewportPass.buffers&&(c=Object.keys(this.game.viewportPass.buffers)),this.wm.addNavSelect(c,l=>{this.game.setViewports(l)}),this.setupShortcuts()}setupShortcuts(){window.addEventListener("keydown",e=>{e.key.toLowerCase()==="h"&&this.wm.toggleVisibility()})}selectObject(e){if(!e)return;this.windows.inspector.inspect(e);const t=this.windows.inspector&&this.windows.inspector.container&&this.windows.inspector.container.parentElement;t&&t.style.display==="none"&&(t.style.display="block")}update(){}}class oi{constructor(e,t){this.camera=e,this.domElement=t,this.moveSpeed=10,this.mouseSensitivity=.002,this.keys={w:!1,a:!1,s:!1,d:!1,q:!1,e:!1},this.mouse={x:0,y:0,lastX:0,lastY:0,isDown:!1},this.shiftPressed=!1,this.rotation={x:e.transform.rotation.x,y:e.transform.rotation.y},this._initEvents()}_initEvents(){window.addEventListener("keydown",e=>this._onKey(e,!0)),window.addEventListener("keyup",e=>this._onKey(e,!1)),this.domElement.addEventListener("mousedown",e=>{e.button===2&&(this.mouse.isDown=!0,this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY)}),window.addEventListener("mouseup",e=>{e.button===2&&(this.mouse.isDown=!1)}),window.addEventListener("mousemove",e=>{if(!this.mouse.isDown)return;const t=e.clientX-this.mouse.lastX,i=e.clientY-this.mouse.lastY;this.mouse.lastX=e.clientX,this.mouse.lastY=e.clientY,this.rotation.y-=t*this.mouseSensitivity,this.rotation.x-=i*this.mouseSensitivity;const n=Math.PI/2-.01;this.rotation.x=Math.max(-n,Math.min(n,this.rotation.x)),this.camera.transform.rotation.x=this.rotation.x,this.camera.transform.rotation.y=this.rotation.y}),this.domElement.addEventListener("contextmenu",e=>e.preventDefault())}_onKey(e,t){const i=e.key.toLowerCase();if(i==="shift"){this.shiftPressed=t;return}this.keys.hasOwnProperty(i)&&(this.keys[i]=t)}update(e){const t=this.moveSpeed*(this.shiftPressed?2:1)*e,i=this.camera.transform,n=Math.sin(i.rotation.y),r=Math.cos(i.rotation.y),s=-n,a=-r,c=r,l=-n;let h=0,d=0,u=0;if(this.keys.w&&(d+=1),this.keys.s&&(d-=1),this.keys.a&&(h-=1),this.keys.d&&(h+=1),this.keys.q&&(u+=1),this.keys.e&&(u-=1),h!==0||d!==0){const f=Math.sqrt(h*h+d*d);h/=f,d/=f}i.position.x+=(s*d+c*h)*t,i.position.z+=(a*d+l*h)*t,i.position.y+=u*t}}class ai extends ne{constructor(e,t,i,n){super(e,t,i,n),this.velocity={x:0,y:0,z:0},this.currentDirection={x:1,y:0,z:0},this.speed=0,this.avoidanceRadius=3,this.avoidanceForce=.5}update(e,t,i,n,r){const s={x:t.x*i*this.speed,z:t.z*i*this.speed},a=this.calculateAvoidance(r);this.velocity.x=s.x+a.x,this.velocity.z=s.z+a.z,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.wrapBounds(n)}calculateAvoidance(e){const t={x:0,z:0};if(!e||!Array.isArray(e))return t;for(let i of e){if(i===this||!i.transform)continue;const n=this.transform.position.x-i.transform.position.x,r=this.transform.position.z-i.transform.position.z,s=n*n+r*r,a=this.avoidanceRadius+(i.avoidanceRadius||1);if(s<a*a&&s>.01){const c=Math.sqrt(s),l=this.avoidanceForce/(c+.1);t.x+=n/c*l,t.z+=r/c*l}}return t}wrapBounds(e){const t=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,t.x>e.maxX?t.x=e.minX+(t.x-e.maxX):t.x<e.minX&&(t.x=e.maxX+(t.x-e.minX)),t.z>e.maxZ?t.z=e.minZ+(t.z-e.maxZ):t.z<e.minZ&&(t.z=e.maxZ+(t.z-e.minZ))}}class li extends ne{constructor(e,t,i,n){super(e,t,i,n),this.velocity={x:0,y:0,z:0},this.forwardDirection={x:0,y:0,z:0},this.speed=0,this.heading=0,this.avoidanceRadius=5,this.avoidanceForce=1,this.viewRadius=20,this.maxTurnSpeed=Math.PI*.5,this.targetHeading=Math.random()*Math.PI*2,this.preferredDirection={x:0,y:0,z:1},this.wanderHeading=this.targetHeading,this.steeringInfluence=0,this.boundsBuffer=15,this.centerAttraction=.3,this.cohesionRadius=30,this.separationRadius=8,this.cohesionWeight=.4,this.separationWeight=.4}update(e,t,i){this.updateWandering(e,t),this.updateSteering(i,t);const n=this.speed/10*Math.PI;this.heading=this.lerpAngle(this.heading,this.targetHeading,n*e),this.forwardDirection.x=Math.sin(this.heading),this.forwardDirection.z=Math.cos(this.heading),this.velocity.x=this.forwardDirection.x*this.speed,this.velocity.z=this.forwardDirection.z*this.speed,this.transform.position.x+=this.velocity.x*e,this.transform.position.z+=this.velocity.z*e,this.enforceBounds(t),this.transform.rotation.y=this.heading}updateWandering(e,t){this.steeringInfluence=Math.sin(te.time*.628)*.5,this.wanderHeading+=(Math.random()-.5)*.001*e}updateSteering(e,t){if(this.isShipNearby(e)){const n=this.calculateAvoidanceHeading(e);this.targetHeading=n}else{const n=this.calculateCenterAttraction(),r=this.calculateCohesion(e),s=this.calculateSeparation(e),a=this.calculateBoundsHeading(t);let c;if(a!==null)c=a;else if(r!==null||s!==null){let l=0,h=0;r!==null&&(l+=Math.sin(r)*this.cohesionWeight,h+=Math.cos(r)*this.cohesionWeight),s!==null&&(l+=Math.sin(s)*this.separationWeight,h+=Math.cos(s)*this.separationWeight),l+=Math.sin(n)*.1,h+=Math.cos(n)*.1,c=Math.atan2(l,h)}else{const l=this.wanderHeading,h=this.steeringInfluence*.2;let d=Math.sin(l+h)*.7,u=Math.cos(l+h)*.7;d+=Math.sin(n)*this.centerAttraction,u+=Math.cos(n)*this.centerAttraction,c=Math.atan2(d,u)}this.targetHeading=c}}isShipNearby(e){if(!e||!Array.isArray(e))return!1;const t=this.viewRadius*1.5;for(let i of e){if(i===this||!i.transform||i.constructor.name!=="Ship")continue;const n=i.transform.position.x-this.transform.position.x,r=i.transform.position.z-this.transform.position.z;if(n*n+r*r<t*t)return!0}return!1}calculateCenterAttraction(){const e=this.transform.position,t={x:-e.x,z:-e.z},i=Math.sqrt(t.x*t.x+t.z*t.z);return i<.1?Math.atan2(0,1):Math.atan2(t.x/i,t.z/i)}calculateCohesion(e){if(!e||!Array.isArray(e))return null;let t=[];const i=this.transform.position;for(let a of e){if(a===this||!a.transform||a.constructor.name!=="Ship")continue;const c=a.transform.position.x-i.x,l=a.transform.position.z-i.z,h=c*c+l*l;h<this.cohesionRadius*this.cohesionRadius&&h>.01&&t.push({dx:c,dz:l,dist:Math.sqrt(h)})}if(t.length===0)return null;let n=0,r=0;for(let a of t)n+=a.dx/a.dist,r+=a.dz/a.dist;n/=t.length,r/=t.length;const s=Math.sqrt(n*n+r*r);return s<.1?null:Math.atan2(n/s,r/s)}calculateSeparation(e){if(!e||!Array.isArray(e))return null;let t={x:0,z:0};const i=this.transform.position;let n=!1;for(let s of e){if(s===this||!s.transform||s.constructor.name!=="Ship")continue;const a=i.x-s.transform.position.x,c=i.z-s.transform.position.z,l=a*a+c*c;if(l<this.separationRadius*this.separationRadius&&l>.01){const h=Math.sqrt(l),d=(this.separationRadius-h)/this.separationRadius;t.x+=a/h*d,t.z+=c/h*d,n=!0}}if(!n)return null;const r=Math.sqrt(t.x*t.x+t.z*t.z);return r<.1?null:Math.atan2(t.x/r,t.z/r)}calculateAvoidanceHeading(e){let t=0,i=0;if(!e||!Array.isArray(e))return Math.atan2(this.forwardDirection.x,this.forwardDirection.z);for(let s of e){if(s===this||!s.transform)continue;const a=s.transform.position.x-this.transform.position.x,c=s.transform.position.z-this.transform.position.z,l=a*a+c*c;if(a*this.forwardDirection.x+c*this.forwardDirection.z<0||l>this.viewRadius*this.viewRadius)continue;const d=this.avoidanceRadius+(s.avoidanceRadius||1);if(l<d*d&&l>.01){const u=Math.sqrt(l),f=this.avoidanceForce/(u+.1);t-=a/u*f,i-=c/u*f}}const n=this.forwardDirection.x*.7+t*.3,r=this.forwardDirection.z*.7+i*.3;return Math.atan2(n,r)}calculateBoundsHeading(e){const t=this.transform.position;let i=0,n=0,r=!1;const s=t.x-e.minX,a=e.maxX-t.x,c=t.z-e.minZ,l=e.maxZ-t.z;return s<this.boundsBuffer&&(i+=(this.boundsBuffer-s)/this.boundsBuffer,r=!0),a<this.boundsBuffer&&(i-=(this.boundsBuffer-a)/this.boundsBuffer,r=!0),c<this.boundsBuffer&&(n+=(this.boundsBuffer-c)/this.boundsBuffer,r=!0),l<this.boundsBuffer&&(n-=(this.boundsBuffer-l)/this.boundsBuffer,r=!0),r&&(i!==0||n!==0)?Math.atan2(i,n):null}enforceBounds(e,t=2){const i=this.transform.position;e.maxX-e.minX,e.maxZ-e.minZ,i.x>e.maxX?i.x=e.minX+(i.x-e.maxX):i.x<e.minX&&(i.x=e.maxX+(i.x-e.minX)),i.z>e.maxZ?i.z=e.minZ+(i.z-e.maxZ):i.z<e.minZ&&(i.z=e.maxZ+(i.z-e.minZ))}lerpAngle(e,t,i){let n=this.normalizeAngle(t-e);return n=Math.max(-i,Math.min(i,n)),e+n}normalizeAngle(e){for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}}/*! CONTINENT - Optimized Noise Generator */const Ee=function(){const o={};function e(g){const C="p_"+g;if(o[C])return o[C];let M=g^305419896;function v(){return M=M*1664525+1013904223>>>0,M/4294967296}const E=new Array(256);for(let P=0;P<256;P++)E[P]=P;for(let P=255;P>0;P--){const k=Math.floor(v()*(P+1)),W=E[P];E[P]=E[k],E[k]=W}const _=new Uint8Array(512);for(let P=0;P<512;P++)_[P]=E[P&255];return o[C]=_,_}function t(g,C,M){let v=M;return v^=g*73856093^C*19349663,v=(v^v>>>16)*2246822507,v=v^v>>>13,v}function i(g){return(g&2147483647)/2147483647}function n(g){return g*g*g*(g*(g*6-15)+10)}function r(g,C,M){return g+M*(C-g)}function s(g,C,M,v){g&=15;const E=g<8?C:M,_=g<4?M:g===12||g===14?C:v;return(g&1?-E:E)+(g&2?-_:_)}function a(g,C,M,v){const E=Math.floor(C)&255,_=Math.floor(M)&255,P=Math.floor(v)&255;C-=Math.floor(C),M-=Math.floor(M),v-=Math.floor(v);const k=n(C),W=n(M),N=n(v),V=g[E]+_,j=g[E+1]+_,X=g[V]+P,G=g[V+1]+P,K=g[j]+P,ee=g[j+1]+P;return r(r(r(s(g[X],C,M,v),s(g[K],C-1,M,v),k),r(s(g[G],C,M-1,v),s(g[ee],C-1,M-1,v),k),W),r(r(s(g[X+1],C,M,v-1),s(g[K+1],C-1,M,v-1),k),r(s(g[G+1],C,M-1,v-1),s(g[ee+1],C-1,M-1,v-1),k),W),N)*.5+.5}function c(g,C,M,v,E,_){let P=0,k=1,W=1,N=0;for(let V=0;V<E;V++)P+=a(g,C*W,M*W,v)*k,N+=k,k*=_,W*=2;return P/N}function l(g,C,M,v,E={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:_=60,octaves:P=4,falloff:k=.5}=E,W=e(v),N=g/_,V=C/_,j=c(W,N,V,M,P,k);return y(j,E)}function h(g,C,M,v,E={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:_=60,octaves:P=4,falloff:k=.5}=E,W=e(v),N=g/_,V=C/_;let j=0,X=1,G=1,K=0;for(let ee=0;ee<P;ee++){const pe=a(W,N*G,V*G,M);j+=(1-Math.abs(pe*2-1))*X,K+=X,X*=k,G*=2}return y(j/K,E)}function d(g,C,M,v,E={scale:60,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:_=60,octaves:P=4,falloff:k=.5}=E,W=e(v),N=g/_,V=C/_;let j=0,X=1,G=1,K=0;for(let ee=0;ee<P;ee++){const pe=a(W,N*G,V*G,M);j+=Math.abs(pe*2-1)*X,K+=X,X*=k,G*=2}return y(j/K,E)}function u(g,C,M,v=0){const E=Math.sin(g*127.1+C*311.7+M*41.3)*43758.5453,_=Math.sin(g*269.5+C*183.3+M*41.3)*43758.5453;let P=E-Math.floor(E),k=_-Math.floor(_);const W=x(P-.5,k-.5,v);return P=W.x+.5,k=W.y+.5,[P,k]}function f(g,C,M,v,E=0){const _=Math.floor(g/M),P=Math.floor(C/M),k=g/M-_,W=C/M-P;let N=2,V=2,j=_,X=P;for(let G=-1;G<=1;G++)for(let K=-1;K<=1;K++){const ee=_+G,pe=P+K,ot=u(ee,pe,v,E),at=G+ot[0]-k,lt=K+ot[1]-W,Be=Math.sqrt(at*at+lt*lt);Be<N?(V=N,N=Be,j=ee,X=pe):Be<V&&(V=Be)}return{d1:N,d2:V,cx:j,cy:X}}function x(g,C,M){if(!M)return{x:g,y:C};const v=M*Math.PI/180,E=Math.cos(v),_=Math.sin(v);return{x:g*E-C*_,y:g*_+C*E}}function w(g,C,M,v,E){const _=f(g,C,v,M,E);return Math.min(1,_.d1)}function b(g,C,M,v,E={scale:60,angle:0,contrast:1,threshold:0}){const{scale:_=60,angle:P=0}=E,k=w(g,C,v,_,P);return y(k,E)}function p(g,C,M,v,E,_,P,k){let W=0,N=1,V=0,j=E;for(let X=0;X<P;X++)W+=w(g,C,v+X,j,_)*N,V+=N,N*=k,j*=.5;return W/V}function T(g,C,M,v,E={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:_=60,angle:P=0,octaves:k=4,falloff:W=.5}=E,N=p(g,C,M,v,_,P,k,W);return y(N,E)}function D(g,C,M,v,E={scale:60,angle:0,contrast:1,threshold:0}){const{scale:_=60,angle:P=0}=E,k=f(g,C,_,v,P),W=k.d2-k.d1,N=Math.min(1,W*2);return y(N,E)}function L(g,C,M,v,E={scale:60,angle:0,contrast:1,threshold:0}){const{scale:_=60,angle:P=0}=E,k=1-w(g,C,v,_,P);return y(k,E)}function O(g,C,M,v,E={scale:60,angle:0,octaves:4,falloff:.5,contrast:1,threshold:0}){const{scale:_=60,angle:P=0,octaves:k=4,falloff:W=.5}=E,N=1-p(g,C,M,v,_,P,k,W);return y(N,E)}function B(g,C,M,v,E={scale:60,contrast:1,threshold:0}){const{scale:_=60}=E,P=(Math.sin(g/_*6.28+M*5+v*.01)+1)/2;return y(P,E)}function $(g,C,M,v,E={scale:60,contrast:1,threshold:0}){const{scale:_=60}=E,P=(Math.sin(C/_*6.28+M*5+v*.01)+1)/2;return y(P,E)}function m(g,C,M,v,E={scale:60,contrast:1,threshold:0}){const{scale:_=60}=E,P=Math.sqrt(g*g+C*C)/_,k=(Math.sin(P*6.28+M*5+v*.01)+1)/2;return y(k,E)}function F(g,C,M,v,E={scale:60,contrast:1,threshold:0}){const{scale:_=60}=E,P=v%2===0?0:1,k=(Math.floor(g/_)+Math.floor(C/_)+P)%2===0?1:0;return y(k,E)}function A(g,C,M,v,E={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:1,threshold:0}){const{scale:_=60,octaves:P=4,falloff:k=.5,warpStrength:W=.8}=E,N=e(v),V=g/_,j=C/_,X=e(v+12345),G=e(v+54321),K=a(X,V,j,M)*_*W,ee=a(G,V+5.2,j+1.3,M)*_*W,pe=c(N,(g+K)/_,(C+ee)/_,M+.5,P,k);return y(pe,E)}function R(g,C,M,v,E={scale:60,angle:0,contrast:1,threshold:0}){const{scale:_=60,angle:P=0}=E,k=f(g,C,_,v,P),W=i(t(k.cx,k.cy,v+9001));return y(W,E)}function U(g){return g<0?0:g>1?1:g}function y(g,C){const M=C||{},v=typeof M.contrast=="number"?M.contrast:1,E=typeof M.threshold=="number"?M.threshold:0;return v!==1&&(g=(g-.5)*v+.5),g=U(g),E>0&&(g=g>=E?1:0),U(g)}function z(g){return I[g]||l}const I={perlin:l,ridged:h,billowy:d,voronoi:b,voronoi_edge:L,voronoi_cracks:D,voronoi_cell:R,worley:T,worley_edge:O,sine_x:B,sine_y:$,sine_radial:m,checkerboard:F,domain_warp:A};return{perlin:l,ridged:h,billowy:d,voronoi:b,voronoiEdge:L,voronoiCracks:D,voronoiCell:R,worley:T,worleyEdge:O,sineX:B,sineY:$,sineRadial:m,checkerboard:F,domainWarp:A,getNoiseFunction:z,clamp01:U,seededPerm:e,pnoise:a,fbm:c,types:Object.keys(I)}}();typeof ze<"u"&&ze.exports&&(ze.exports=Ee);function hi(o,e,t,i,n={scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}){const r=n.scale??60,s=n.contrast??1,a=n.threshold??0,c=n.octaves??6,l=n.lacunarity??2,h=n.persistence??.5;function d(B){return B*B*B*(B*(B*6-15)+10)}function u(B,$,m){return B+m*($-B)}function f(B,$,m,F){const A=B&15,R=A<8?$:m,U=A<4?m:A===12||A===14?$:F;return(A&1?-R:R)+(A&2?-U:U)}function x(B){const $=new Uint8Array(256);for(let F=0;F<256;F++)$[F]=F;let m=B>>>0||1;for(let F=255;F>0;F--){m=m*1664525+1013904223>>>0;const A=m%(F+1);[$[F],$[A]]=[$[A],$[F]]}return $}function w(B,$,m,F){const A=Math.floor(B)&255,R=Math.floor($)&255,U=Math.floor(m)&255,y=B-Math.floor(B),z=$-Math.floor($),I=m-Math.floor(m),g=d(y),C=d(z),M=d(I),v=V=>F[V&255],E=v(A)+R,_=v(E)+U,P=v(E+1)+U,k=v(A+1)+R,W=v(k)+U,N=v(k+1)+U;return u(u(u(f(v(_),y,z,I),f(v(W),y-1,z,I),g),u(f(v(P),y,z-1,I),f(v(N),y-1,z-1,I),g),C),u(u(f(v(_+1),y,z,I-1),f(v(W+1),y-1,z,I-1),g),u(f(v(P+1),y,z-1,I-1),f(v(N+1),y-1,z-1,I-1),g),C),M)}const b=x(i);let p=0,T=1,D=1,L=0;for(let B=0;B<c;B++)p+=w(o/r*D,e/r*D,t*D,b)*T,L+=T,T*=h,D*=l;let O=(p/L+1)/2;return O=(O-.5)*s+.5,O=Math.max(0,O-a)/(1-a),Math.min(1,Math.max(0,O))}function ci(o,e,t,i,n={centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1}){const r=n.centerX??250,s=n.centerY??250,a=n.radius??100,c=n.jaggedness??.5,l=n.seed??i,h=n.power??2,d=n.steepness??1,u=o-r,f=e-s,x=Math.sqrt(u*u+f*f),w=Math.atan2(f,u),b=Math.sin(w*4+l)*.5+Math.sin(w*7-l*2)*.3+Math.sin(w*12+l*.5)*.2,p=a*(1+b*c);let T=Math.min(1,x/p);return Math.pow(1-Math.pow(T,d),h)}function di(o,e,t){let n=e*o;return n=n*(1+1*o),Math.max(0,Math.min(1,n))}const Se=function(){const o={res:4,color:"terrain",offsetX:-220,offsetY:-190,zoom:1.5},e=[{id:1,type:"FBMPerlin",scale:400,octaves:3,falloff:.5,seed:0,weight:1,contrast:2.7,threshold:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},params:{scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"range",min:0,max:9999,step:1}}},{id:2,type:"domain_warp",seed:0,z:0,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},paramsMeta:{scale:{type:"number"},octaves:{type:"number"},falloff:{type:"number"},warpStrength:{type:"number"},contrast:{type:"number"},threshold:{type:"number"}},fixedMeta:{},scale:60},{id:3,type:"FallOffNoise",seed:0,z:-.03,offsetX:0,offsetY:0,blend:"StrengthBased",visible:!0,collapsed:!1,params:{centerX:0,centerY:0,radius:800,jaggedness:.2,seed:19.9,power:5,steepness:1.5,scale:60},paramsMeta:{centerX:{type:"range",min:-1e4,max:1e4,step:.01},centerY:{type:"range",min:-1e4,max:1e4,step:.01},radius:{type:"number",step:.01},jaggedness:{type:"number",step:.01},seed:{type:"number",step:.01},power:{type:"number",step:.01},steepness:{type:"number",step:.01},scale:{type:"number",step:.01}},fixedMeta:{offsetX:{type:"number",step:.01},offsetY:{type:"number",step:.01},z:{type:"number",step:.01},seed:{type:"number",step:.01}},scale:60}],t={singleCellNoise:{centerX:240,centerY:180,radius:60,thickness:.1,contrast:1},customNoise:{centerX:250,centerY:250,radius:100,fuzziness:.8},FallOffNoise:{centerX:250,centerY:250,radius:100,jaggedness:.5,seed:0,power:2,steepness:1},FBMPerlin:{scale:60,contrast:1,threshold:0,octaves:6,lacunarity:2,persistence:.5}},i={FBMPerlin:{scale:{type:"number"},contrast:{type:"number"},threshold:{type:"number"},octaves:{type:"number"},lacunarity:{type:"number"},persistence:{type:"number"}},singleCellNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},thickness:{type:"number"},contrast:{type:"number"}},customNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},fuzziness:{type:"number"}},FallOffNoise:{centerX:{type:"number"},centerY:{type:"number"},radius:{type:"number"},jaggedness:{type:"number"},seed:{type:"number"},power:{type:"number"},steepness:{type:"number"}}},n={FBMPerlin:hi,FallOffNoise:ci},r={avg:(l,h)=>(l+h)/2,add:(l,h)=>Math.min(1,l+h),mul:(l,h)=>l*h,max:(l,h)=>Math.max(l,h),min:(l,h)=>Math.min(l,h),diff:(l,h)=>Math.abs(l-h),StrengthBased:di};function s(l){return Number.isFinite(l)?l<0?0:l>1?1:l:0}function a(l,h,d,u){const f=r[d];if(!f)return l;const x=f(l,h,u);return s(+x)}function c(l,h,d=0){let u=0;const f={scale:600,octaves:3,falloff:.5,contrast:.8,threshold:0,lacunarity:2,persistence:5},x=n.FBMPerlin||Ee.getNoiseFunction("FBMPerlin"),w=(l+o.offsetX)*o.zoom+0,b=(h+o.offsetY)*o.zoom+0;let p=x(w,b,d+0,0,f);p=p<0?0:p>1?1:p,u=p;const T={scale:60,octaves:4,falloff:.5,warpStrength:.8,contrast:.8,threshold:0},D=n.domain_warp||Ee.getNoiseFunction("domain_warp"),L=(l+o.offsetX)*o.zoom+0,O=(h+o.offsetY)*o.zoom+0;let B=D(L,O,d+0,0,T);B=B<0?0:B>1?1:B,u=a(u,B,"StrengthBased",{layerIndex:1});const $={centerX:(220+o.offsetX)*o.zoom,centerY:(190+o.offsetY)*o.zoom,radius:800,jaggedness:.2,seed:0,power:5,steepness:1.5,scale:60},m=n.FallOffNoise||Ee.getNoiseFunction("FallOffNoise"),F=(l+o.offsetX)*o.zoom+0,A=(h+o.offsetY)*o.zoom+0;let R=m(F,A,d+-.03,0,$);return R=R<0?0:R>1?1:R,u=a(u,R,"StrengthBased",{layerIndex:2}),o.invert&&(u=1-u),u}return{getValue:c,setOffsets:(l,h)=>{o.offsetX=l,o.offsetY=h},getState:()=>({...o}),getLayers:()=>[...e],getParamDefaults:()=>({...t}),getParamMeta:()=>({...i}),NoiseLib:Ee,customFunctions:n,projectName:"CONTINENT"}}();typeof window<"u"&&(window.CONTINENT=Se);class ui{constructor(e,t,i,n,r=12345){this.gl=e,this.renderer=t,this.material=i,this.scene=n,this.meshCache={},this.seed=r,this.currentState=r;const s=c=>c<=.2,a=c=>c>=.2&&c<=.3;this.models=[{file:"barrel.obj",name:"Barrel",type:"container",rotationMode:"3d",scale:1,yOffset:-.2,probability:.25,thresholdCallback:a},{file:"crate.obj",name:"Crate",type:"container",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.15,thresholdCallback:a},{file:"chest.obj",name:"Treasure Chest",type:"container",rotationMode:"y-only",scale:1,yOffset:-.3,probability:.15,thresholdCallback:a},{file:"bottle.obj",name:"Bottle",type:"bottle",rotationMode:"3d",scale:1,yOffset:-.5,probability:.22,thresholdCallback:a},{file:"bottle-large.obj",name:"Large Bottle",type:"bottle",rotationMode:"y-only",scale:1,yOffset:-.5,probability:.08,thresholdCallback:a},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1,probability:.007,thresholdCallback:s},{file:"ship-pirate-large.obj",name:"Pirate Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"ship-pirate-medium.obj",name:"Pirate Ship Medium",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"ship-pirate-small.obj",name:"Pirate Ship Small",type:"ship",rotationMode:"y-only",scale:1,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"ship-large.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"ship-medium.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"ship-small.obj",name:"Ship Large",type:"ship",rotationMode:"y-only",scale:2,yOffset:-1.5,probability:.007,thresholdCallback:s},{file:"boat-row-large.obj",name:"Rowboat Large",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.15,thresholdCallback:a},{file:"boat-row-small.obj",name:"Rowboat Small",type:"boat",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.18,thresholdCallback:a},{file:"platform.obj",name:"Platform",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.2,probability:.2,thresholdCallback:a},{file:"platform-planks.obj",name:"Platform Planks",type:"platform",rotationMode:"y-only",scale:1,yOffset:-.15,probability:.18,thresholdCallback:a}],this.loadedMeshCount=0}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let e=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}setSeed(e){this.seed=e,this.currentState=e}async loadMesh(e){if(this.meshCache[e])return this.meshCache[e];try{const t=await Ce.load(this.gl,`./Assets/3D/Floating/${e}`);return this.meshCache[e]=t,this.loadedMeshCount++,t}catch(t){return console.error(`Failed to load ${e}:`,t),null}}getRandomModel(){const e=this.models.reduce((i,n)=>i+(n.probability||0),0);let t=this.seededRandom()*e;for(let i of this.models)if(t-=i.probability||0,t<=0)return i;return this.models[0]}getRandomPosition(e,t,i,n,r){return{x:e+this.seededRandom()*(t-e),y:r,z:i+this.seededRandom()*(n-i)}}getRandomRotation(e){return e==="y-only"?{x:0,y:this.seededRandom()*Math.PI*2,z:0}:e==="3d"?{x:this.seededRandom()*Math.PI*2,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*2}:{x:0,y:0,z:0}}async spawnRandomObject(e,t=null){const i=t!==null&&t<this.models.length?this.models[t]:this.getRandomModel(),n=await this.loadMesh(i.file);if(!n)return null;const r=`${i.name} [Floating]`;let s;i.type==="ship"||i.type==="boat"?(s=new li(this.renderer,this.material,n,r),s.speed=0,s.heading=this.seededRandom()*Math.PI*2):(s=new ai(this.renderer,this.material,n,r),s.speed=.2+this.seededRandom()*.3,s.avoidanceRadius=2),s.transform.position.set(e.x,e.y+(i.yOffset||0),e.z),s.transform.scale.set(i.scale,i.scale,i.scale);const a=this.getRandomRotation(i.rotationMode);return s.transform.rotation.set(a.x,a.y,a.z),this.scene.push(s),s}async spawnMany(e,t,i=-7){const n=[],r=Se;for(let a=0;a<e;a++){let c,l,h;do{c=this.getRandomPosition(t.minX,t.maxX,t.minZ,t.maxZ,i);let u=c.x+255*Math.sqrt(3)/2,f=c.z+255*1.5/2;var s=r.getValue(u,f);l=this.getRandomModel(),h=l.thresholdCallback?l.thresholdCallback(s):!0}while(!h);const d=await this.spawnRandomObject(c,this.models.indexOf(l));d&&n.push(d)}return n}getAvailableModels(){return this.models.map((e,t)=>({index:t,name:e.name,file:e.file,type:e.type,rotationMode:e.rotationMode,yOffset:e.yOffset,probability:e.probability}))}clearAllSpawned(){}}const Qe=`precision highp float;\r
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
`,fi=`precision highp float;\r
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
`,mi=`precision highp float;\r
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
`,pi=`precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uSceneTexture;\r
uniform sampler2D uNormalTexture;\r
\r
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
uniform vec3 uShadowColor;\r
\r
void main() {\r
    vec4 sceneColor = texture2D(uSceneTexture, vUv);\r
    vec3 normalOrig = texture2D(uNormalTexture, vUv).rgb;\r
    float depthVal = texture2D(uNormalTexture, vUv).a;\r
    \r
    float roughness = texture2D(uSceneTexture, vUv).a;\r
    \r
    vec3 N = normalize(normalOrig * 2.0 - 1.0);\r
    vec3 L = normalize(uLightDir);\r
    vec3 H = normalize(L);\r
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
}`,gi=`precision highp float;\r
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
}`,vi=`precision highp float;\r
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
uniform float uCurvature;\r
uniform float uEdgeDistance;\r
\r
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
    \r
    // 3. EDGE DETECTION LOOP\r
    // We multiply the offset by uEdgeWidth to expand the search radius\r
    float base = clamp(depthCenter, 0.0, 1.0); // near 0 far 1\r
    base /= uEdgeDistance; \r
    if(depthCenter>=0.98) base = 0.0; // make far 0.0\r
    \r
    float depthBased = 1.0 - pow(base, uCurvature); \r
    float newiwdth =  clamp(uEdgeWidth * depthBased, 0.0, uEdgeWidth);\r
    \r
    vec2 offsets[4];\r
    offsets[0] = vec2(1.0, 0.0) *  newiwdth;\r
    offsets[1] = vec2(-1.0, 0.0) * newiwdth;\r
    offsets[2] = vec2(0.0, 1.0) *  newiwdth;\r
    offsets[3] = vec2(0.0, -1.0) * newiwdth;\r
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
    float adaptiveDepthThreshold = uDepthThreshold / max(newiwdth, 0.001);\r
\r
    if (newiwdth > 0.1 && depthEdge > adaptiveDepthThreshold) {\r
        finalColor = quantizedColor * uSilhouetteDarkening;\r
    } \r
    else if (newiwdth > 0.1 && normalEdge > uNormalThreshold) {\r
        finalColor = quantizedColor * uCreaseDarkening;\r
    } \r
    else {\r
        finalColor = quantizedColor;\r
    }\r
\r
    gl_FragColor = vec4(finalColor, 1.0);\r
}`,yi=`precision highp float;\r
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
}`,xi=`precision highp float;\r
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
}`,wi=`precision highp float;\r
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
}`,bi=`precision highp float;\r
#define VERTEXREC\r
\r
uniform float uTime;\r
uniform float uWaveSpeed;\r
uniform float uWaveStrength;\r
uniform float uWaveFrequency;\r
uniform float uWaveHeight;\r
uniform vec2 uWindDir;\r
\r
vec2 grad(vec2 p) {\r
    float h = fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);\r
    float angle = h * 6.2831853;\r
    return vec2(cos(angle), sin(angle));\r
}\r
\r
float perlin2D(vec2 p) {\r
    vec2 i = floor(p);\r
    vec2 f = fract(p);\r
    vec2 u = f * f * (3.0 - 2.0 * f);\r
    return mix(\r
        mix(dot(grad(i + vec2(0,0)), f - vec2(0,0)),\r
            dot(grad(i + vec2(1,0)), f - vec2(1,0)), u.x),\r
        mix(dot(grad(i + vec2(0,1)), f - vec2(0,1)),\r
            dot(grad(i + vec2(1,1)), f - vec2(1,1)), u.x),\r
        u.y\r
    );\r
}\r
\r
void vertex(inout vec3 localPos, inout vec3 worldPos, inout vec3 yDisplacement,\r
            inout vec3 normal, inout vec3 color, inout vec2 texCoord, in mat4 modelMatrix)\r
{\r
    // Root pinning — vertices near y=0 don't move\r
    float heightMask = smoothstep(0.0, uWaveHeight, localPos.y);\r
\r
\r
    vec3 worldOrigin = modelMatrix[3].xyz;\r
    // hard coded for leaf \r
    if((texCoord.x >= 0.125 && texCoord.x <= 0.25 && texCoord.y >=0.25 && texCoord.y <= 0.5) ) worldOrigin = worldPos;\r
    vec2 samplePos = worldOrigin.xz * uWaveFrequency + normalize(uWindDir) * uTime * uWaveSpeed;\r
\r
    float primary   = perlin2D(samplePos);\r
    float secondary = perlin2D(samplePos * 2.3 + vec2(5.7, 9.3)) * 0.35;\r
    float wind = (primary + secondary) * uWaveStrength;\r
\r
    vec3 worldDisp = vec3(normalize(uWindDir), 0.0).xzy * wind * heightMask;\r
    vec3 localDisp = transpose(mat3(modelMatrix)) * worldDisp;\r
\r
    localPos += localDisp;\r
    localPos.y -= abs(wind * heightMask) * 0.15;\r
}`,Ue=`#version 300 es\r
precision highp float;\r
\r
in vec3 aVertexPosition;\r
in vec3 aNormal;\r
in vec3 aColor;\r
in vec2 aTexCoord;\r
\r
layout(std140) uniform FrameData \r
{\r
    mat4 uProjectionMatrix;\r
    mat4 uViewMatrix;\r
    vec3 uCameraPos;\r
};\r
\r
// uModelMatrix stays as regular uniform (per-object, different every draw)\r
uniform mat4 uModelMatrix;\r
// uniform vec3 uCameraPos;\r
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
    gl_Position = uProjectionMatrix * uViewMatrix * (vec4(pos, 1.0) + vec4(0.0, r / -5000.0, 0.0, 0.0));\r
\r
}\r
`,We=`#version 300 es\r
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
    vec4 color = vec4(vec3(1.0), 0.0);\r
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
    if(uHasTexture > 0.1)\r
    {\r
        normal = normalize(vNormal);\r
    }\r
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
}`;class xe extends qe{static terrainColor(e){return e<=.3?[14/255,54/255,124/255]:e<=.4?[234/255,191/255,145/255]:[112/255,224/255,145/255]}static terrainValue(e){return e<=.3?20/255:180/255}exportOBJ(e,t,i,n,r){let s="";for(let l=0;l<t.length;l+=3)s+=`v ${t[l]} ${t[l+1]} ${t[l+2]}
`;for(let l=0;l<i.length;l+=2)s+=`vt ${i[l]} ${i[l+1]}
`;for(let l=0;l<n.length;l+=3)s+=`vn ${n[l]} ${n[l+1]} ${n[l+2]}
`;for(let l=0;l<r.length;l+=3){const h=r[l]+1,d=r[l+1]+1,u=r[l+2]+1;s+=`f ${h}/${h}/${h} ${d}/${d}/${d} ${u}/${u}/${u}
`}const a=new Blob([s],{type:"text/plain"}),c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=e,c.click(),URL.revokeObjectURL(c.href)}constructor(e,t=20,i=15,n=1,r=!1){const s=n*Math.sqrt(3),a=n*1.5,c=t*s,l=i*a,h=[],d={},u=[],f=Se,x={};let w=0;for(let m=0;m<=i;m++){const F=m%2!==0?s/2:0;for(let A=0;A<=t;A++){const R=A*s+F,U=m*a,y=f.getValue(R,U,0);r&&(w=xe.terrainValue(y)*20),x[`${m}_${A}`]=w}}for(let m=0;m<=i;m++){const F=m%2!==0?s/2:0;for(let A=0;A<=t;A++){const R=A*s+F,U=m*a;w=x[`${m}_${A}`];const y=f.getValue(R,U,0),z=xe.terrainColor(y);d[`${m}_${A}`]=h.length/3,h.push(R,w,U),u.push(z[0],z[1],z[2])}}function b(m,F){return d[`${m}_${F}`]??-1}const p=[];function T(m,F){for(let A=-3;A<=3;A++)for(let R=-3;R<=3;R++){const U=m+A,y=F+R,z=x[`${U}_${y}`],I=x[`${U}_${y+1}`],g=U%2===0?y:y+1,C=U%2===0?y-1:y,M=x[`${U+1}_${g}`],v=x[`${U+1}_${C}`];if(!(z===void 0||I===void 0||M===void 0||v===void 0)&&!(z===I&&I===M&&M===v))return!0}return!1}function D(){let m=2;for(let F=0;F<2;F++){p.length=0;const A=F%2===0?0:m/2;for(let R=0;R<i;R+=m){const U=R/m%2===0?A:A+m/2;for(let y=U;y<t;y+=m){const z=b(R,y),I=b(R,y+m),g=b(R+m,y+m/2);z!==-1&&I!==-1&&g!==-1&&x[`${R}_${y}`]===x[`${R}_${y+m}`]&&x[`${R}_${y}`]===x[`${R+m}_${y+m/2}`]&&p.push(z,g,I);const C=b(R,y+m),M=b(R+m,y+m/2),v=b(R+m,y+m/2+m);C!==-1&&M!==-1&&v!==-1&&x[`${R}_${y+m}`]===x[`${R+m}_${y+m/2}`]&&x[`${R}_${y+m}`]===x[`${R+m}_${y+m/2+m}`]&&p.push(C,M,v)}}m*=2}}function L(){for(let m=0;m<i;m++)for(let F=0;F<t;F++){const A=b(m,F),R=b(m,F+1),U=m%2===0?F:F+1,y=m%2===0?F-1:F,z=b(m+1,U),I=b(m+1,y);A!==-1&&R!==-1&&z!==-1&&p.push(A,z,R),A!==-1&&I!==-1&&z!==-1&&p.push(A,I,z)}}if(!r)L();else{D();for(let m=0;m<i;m++)for(let F=0;F<t;F++){const A=b(m,F),R=b(m,F+1),U=m%2===0?F:F+1,y=m%2===0?F-1:F,z=b(m+1,U),I=b(m+1,y);T(m,F)&&(A!==-1&&R!==-1&&z!==-1&&p.push(A,z,R),A!==-1&&I!==-1&&z!==-1&&p.push(A,I,z))}}function O(){if(p.length===0){h.length=0,u.length=0;return}const m=new Set(p),F=new Map,A=[],R=[];let U=0;for(let y=0;y<h.length/3;y++)m.has(y)&&(F.set(y,U),A.push(h[y*3],h[y*3+1],h[y*3+2]),R.push(u[y*3],u[y*3+1],u[y*3+2]),U++);for(let y=0;y<p.length;y++)p[y]=F.get(p[y]);h.length=A.length,u.length=R.length;for(let y=0;y<A.length;y++)h[y]=A[y];for(let y=0;y<R.length;y++)u[y]=R[y]}O();const B=[];for(let m=0;m<h.length/3;m++){const F=h[m*3],A=h[m*3+2];B.push(F/c,A/l)}const $=new Float32Array(h.length);for(let m=0;m<p.length;m+=3){const F=p[m],A=p[m+1],R=p[m+2],U=h[F*3],y=h[F*3+1],z=h[F*3+2],I=h[A*3],g=h[A*3+1],C=h[A*3+2],M=h[R*3],v=h[R*3+1],E=h[R*3+2],_=I-U,P=g-y,k=C-z,W=M-U,N=v-y,V=E-z,j=P*V-k*N,X=k*W-_*V,G=_*N-P*W;$[F*3]+=j,$[F*3+1]+=X,$[F*3+2]+=G,$[A*3]+=j,$[A*3+1]+=X,$[A*3+2]+=G,$[R*3]+=j,$[R*3+1]+=X,$[R*3+2]+=G}for(let m=0;m<h.length/3;m++){const F=$[m*3],A=$[m*3+1],R=$[m*3+2],U=Math.sqrt(F*F+A*A+R*R)||1;$[m*3]=F/U,$[m*3+1]=A/U,$[m*3+2]=R/U}super(e,new Float32Array(h),new Float32Array(B),$,new Uint16Array(p)),this.colors=new Float32Array(u),this.colorBuffer=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.colorBuffer),e.bufferData(e.ARRAY_BUFFER,this.colors,e.STATIC_DRAW),this.cols=t,this.rows=i,this.radius=n,this.hSpacing=s,this.vSpacing=a,this.totalW=c,this.totalH=l}recomputeNormals(e){const t=this.gl,i=e.length/3,n=new Float32Array(i*3),r=this.indices;for(let s=0;s<r.length;s+=3){const a=r[s],c=r[s+1],l=r[s+2],h=e[a*3],d=e[a*3+1],u=e[a*3+2],f=e[c*3],x=e[c*3+1],w=e[c*3+2],b=e[l*3],p=e[l*3+1],T=e[l*3+2],D=f-h,L=x-d,O=w-u,B=b-h,$=p-d,m=T-u,F=$*O-m*L,A=m*D-B*O,R=B*L-$*D;n[a*3]+=F,n[a*3+1]+=A,n[a*3+2]+=R,n[c*3]+=F,n[c*3+1]+=A,n[c*3+2]+=R,n[l*3]+=F,n[l*3+1]+=A,n[l*3+2]+=R}for(let s=0;s<i;s++){const a=n[s*3],c=n[s*3+1],l=n[s*3+2],h=Math.sqrt(a*a+c*c+l*l)||1;n[s*3]=a/h,n[s*3+1]=c/h,n[s*3+2]=l/h}t.bindBuffer(t.ARRAY_BUFFER,this.normalBuffer),t.bufferData(t.ARRAY_BUFFER,n,t.DYNAMIC_DRAW),this.normals=n}}class Ci{constructor(e,t,i,n,r=[],s={}){this.gl=e,this.renderer=t,this.material=i,this.defaultMaterial=i,this.materials=s.materials||{},this.materialResolver=typeof s.materialResolver=="function"?s.materialResolver:null,this.scene=n,this.meshCache={},r&&typeof r=="object"&&!Array.isArray(r)&&(s=r,r=[]),this.seed=s.seed||12345,this.currentState=this.seed,this.noise=Se,this.threshold=s.threshold??.45;const a=u=>u>=.35,c=u=>u>=.32&&u<=.35,l=u=>u<=.2,h=u=>u>=.3&&u<=.4,d=u=>u>this.threshold;if(this.modelCatalog=[{file:"palm-detailed-straight.obj",name:"Palm Detailed Straight",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:a,materialKey:"TreeWave"},{file:"palm-detailed-bend.obj",name:"Palm Detailed Bend",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:a,materialKey:"TreeWave"},{file:"palm-detailed-bend2.obj",name:"Palm Detailed Bend2",rotationMode:"y-only",scale:1,scaleRange:[.75,1.1],yOffset:0,probability:.1,thresholdCallback:a,materialKey:"TreeWave"},{file:"palm-rare.obj",name:"Palm rare",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.01,thresholdCallback:a,materialKey:"TreeWave"},{file:"palm-s.obj",name:"Palm s",rotationMode:"y-only",scale:1,yOffset:0,scaleRange:[.75,1.1],probability:.1,thresholdCallback:c,materialKey:"TreeWave"},{file:"palm-small.obj",name:"Palm small",rotationMode:"y-only",scale:1,yOffset:-.2,scaleRange:[.75,1.1],probability:.1,thresholdCallback:a,materialKey:"TreeWave"},{file:"rocks-a.obj",name:"Rocks A Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:l},{file:"rocks-b.obj",name:"Rocks B Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.45],yOffset:0,probability:.001,thresholdCallback:l},{file:"rocks-c.obj",name:"Rocks C Island",rotationMode:"y-only",scale:1,scaleRange:[3.75,10.5],yOffset:0,probability:.001,thresholdCallback:l},{file:"rocks-sand-a.obj",name:"Rocks Sand A Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:l},{file:"rocks-sand-b.obj",name:"Rocks Sand B Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:l},{file:"rocks-sand-c.obj",name:"Rocks Sand C Island",rotationMode:"y-only",scale:1,scaleRange:[3.8,10.4],yOffset:0,probability:.001,thresholdCallback:l},{file:"platform-planks.obj",name:"Platform Planks",rotationMode:"y-only",scale:1,yOffset:0,probability:.07,thresholdCallback:d},{file:"ship-wreck.obj",name:"Ship Wreck",rotationMode:"3d",scale:1,yOffset:-1,probability:.02,thresholdCallback:h},{file:"tower-complete-small.obj",name:"Tower Complete Small",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:h},{file:"tower-complete-large.obj",name:"Tower Complete Large",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:h},{file:"structure-roof.obj",name:"Structure Roof",rotationMode:"y-only",scale:1,yOffset:0,probability:.01,thresholdCallback:d},{file:"cannon-mobile.obj",name:"Cannon Mobile",rotationMode:"y-only",scale:1,yOffset:0,probability:.05,thresholdCallback:d},{file:"house.obj",name:"House",rotationMode:"y-only",scale:1,yOffset:0,probability:.08,thresholdCallback:d}],!Array.isArray(r)||r.length===0)this.models=this.modelCatalog.map(u=>({...u}));else{const u=new Map(this.modelCatalog.map(f=>[f.file,f]));this.models=r.map(f=>{const x=u.get(f);return x?{...x}:{file:f,name:f.replace(".obj",""),rotationMode:"y-only",scale:1,yOffset:0,probability:1}})}}resolveMaterial(e){if(e.material)return e.material;if(e.materialKey&&this.materials[e.materialKey])return this.materials[e.materialKey];if(this.materialResolver){const t=this.materialResolver(e,this.materials,this.defaultMaterial);if(t)return t}return this.defaultMaterial}setSeed(e){this.seed=e,this.currentState=e}seededRandom(){this.currentState|=0,this.currentState=this.currentState+1831565813|0;let e=Math.imul(this.currentState^this.currentState>>>15,1|this.currentState);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}async loadMesh(e){if(this.meshCache[e])return this.meshCache[e];try{const t=await Ce.load(this.gl,`./Assets/3D/Land/${e}`);return this.meshCache[e]=t,t}catch(t){return console.warn(`LandObjectSpawner: failed to load ${e}`,t),null}}getRandomModel(){if(!this.models.length)return null;const e=this.models.reduce((i,n)=>i+(n.probability||0),0);let t=this.seededRandom()*e;for(let i of this.models)if(t-=i.probability||0,t<=0)return i;return this.models[0]}getRandomPosition(e,t,i,n,r=0){return{x:e+this.seededRandom()*(t-e),y:r,z:i+this.seededRandom()*(n-i)}}getRandomRotation(e="y-only"){e||(e="y-only");let t=Array.isArray(e)?e:String(e).split("|").map(n=>n.trim().toLowerCase());if(t.includes("3d")||t.includes("all")||t.includes("x-y-z")||t.includes("xyz"))return{x:this.seededRandom()*Math.PI*.15,y:this.seededRandom()*Math.PI*2,z:this.seededRandom()*Math.PI*.15};const i={x:0,y:0,z:0};for(const n of t)n&&(n.includes("x")&&(i.x=this.seededRandom()*Math.PI*2),n.includes("y")&&(i.y=this.seededRandom()*Math.PI*2),n.includes("z")&&(i.z=this.seededRandom()*Math.PI*2));return i.x===0&&i.y===0&&i.z===0&&(i.y=this.seededRandom()*Math.PI*2),i}async spawnRandomObject(e,t,i=null){const n=i!==null&&i<this.models.length?this.models[i]:this.getRandomModel();if(!n)return null;const r=await this.loadMesh(n.file);if(!r)return null;const s=`${n.name} [Land]`,a=this.resolveMaterial(n),c=new ne(this.renderer,a,r,s);let l=e.y+(n.yOffset||0);l+=xe.terrainValue(t)*20*.4,c.transform.position.set(e.x,l,e.z);let h=n.scale??1;if(Array.isArray(n.scaleRange)&&n.scaleRange.length===2){const u=n.scaleRange[0],f=n.scaleRange[1];h=u+this.seededRandom()*(f-u)}c.transform.scale.set(h,h,h);const d=this.getRandomRotation(n.rotationMode);return c.transform.rotation.set(d.x,d.y,d.z),this.scene.push(c),c}async spawnMany(e,t,i=0){const n=[];if(!this.models.length)return console.warn("LandObjectSpawner.spawnMany: no model files provided"),n;for(let r=0;r<e;r++){let s,a,c,l;do{s=this.getRandomPosition(t.minX,t.maxX,t.minZ,t.maxZ,i);const u=s.x+255*Math.sqrt(3)/2,f=s.z+255*1.5/2;a=this.noise.getValue(u,f,0),c=this.getRandomModel(),l=c.thresholdCallback?c.thresholdCallback(a):!0}while(!l);const h=this.models.indexOf(c),d=await this.spawnRandomObject(s,a,h);d&&n.push(d)}return n}getAvailableModels(){return this.models.map((e,t)=>({index:t,name:e.name,file:e.file,rotationMode:e.rotationMode,yOffset:e.yOffset,probability:e.probability,materialKey:e.materialKey||null}))}}const ae=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),H=document.getElementById("glcanvas"),S=H.getContext("webgl2")||H.getContext("experimental-webgl");S||alert("Unable to initialize WebGL.");S.enable(S.DEPTH_TEST);S.depthFunc(S.LEQUAL);S.enable(S.CULL_FACE);S.cullFace(S.BACK);S.frontFace(S.CCW);S.getExtension("EXT_color_buffer_float");let Ne=new Oe(S,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",minFilter:S.NEAREST,magFilter:S.NEAREST}),Te=new Oe(S,window.innerWidth,window.innerHeight,{format:"RGBA",precision:"8",depth:!0,minFilter:S.NEAREST,magFilter:S.NEAREST}),_e=new Oe(S,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:S.NEAREST,magFilter:S.NEAREST}),Pe=new Oe(S,window.innerWidth,window.innerHeight,{format:"RGB",precision:"8",depth:!1,minFilter:S.NEAREST,magFilter:S.NEAREST});const mt=new he(S,Ue,We),Mi=new he(S,[wi,Ue],We),pt=new he(S,[bi,Ue],We),Ti=new he(S,Qe,fi),Fi=new he(S,[yi,Ue],[xi,We]),Ei=new he(S,mi,pi),Ai=new he(S,Qe,gi),Ri=new he(S,Qe,vi),De=new Ze(S,"./Assets/Textures/colormap.png"),Si=new Ze(S,"./Assets/Textures/island.png");new Ze(S,"./Assets/Textures/T_Colobus.png");const gt=new re(mt,"Scene Mat"),Ie=new re(mt,"Scene Plane"),Ve=new re(pt,"Tree Wave"),He=new re(pt,"Grass Wave"),Fe=new re(Mi,"Ship Mat"),ye=new re(Fi,"Water"),Me=new re(Ei,"PPL Lighting"),de=new re(Ai,"Skybox"),Je=new re(Ri,"PixelArt"),_i=new re(Ti,"Screen");Fe.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:De.texture,uRoughness:1,uSampleRadius:.25});gt.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:De.texture,uRoughness:1});Ve.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:De.texture,uRoughness:1,uTime:0,uWaveSpeed:.5,uWaveStrength:.7,uWaveFrequency:100,uWaveHeight:7,uWindDir:[1,.5]});He.setUniforms({uColor:[1,1,1,1],uHasTexture:1,uMainTex:De.texture,uRoughness:1,uTime:0,uWaveSpeed:1,uWaveStrength:.7,uWaveFrequency:1,uWaveHeight:1,uWindDir:[1,.5]});Ie.setUniforms({uColor:[1,1,1,1],uHasTexture:0,uMainTex:Si.texture,uRoughness:1});Je.setUniforms({uPixelSize:1,uEdgeWidth:1,uColorLevels:128,uEdgeDistance:1,uCurvature:2,uDepthThreshold:.01,uNormalThreshold:.3,uSilhouetteDarkening:.2,uCreaseDarkening:.7});Me.setUniforms({uLightDir:[1,.2,10],uLightColor:[1,.8,.75],uAmbient:.5,uSpecularStrength:.3,uShininess:.03,uShadowColor:[.21,.094,.09]});de.setUniforms({uTopColor:[.133,.137,.251],uMidColor:[.749,.286,.369],uBottomColor:[.996,.431,.243],uSunColor:[.894,.514,.384],uCloudScale:5.4,uCloudThreshold:.01,uCloudDensity:.5,uCloudCoverage:.8,uCloudSpeed:.35,uCloudMainColor:[1,.49,.37],uCloudShadeColor:[.9,.35,.25]});const vt={uWind:[1,1],uSpeed:.5,udisplacement:1.5,uScale:1,uBuoyancyRotation:.3,uColor1:[.09,.271,.49],uColor2:[.192,.404,.624],uColor3:[.8,.8,1],uColor1Smoothstep:[0,.5],uColor2Smoothstep:[0,2],uWaveA:[-.35,.7,.13,3.92],uWaveB:[-.95,.51,.1,2.25],uWaveC:[-.4,-2,.1,13.5],uColorBands:3,uRoughness:0,uDepthThreshold:.5,uFoamIntensity:1};Fe.setUniforms(vt);ye.setUniforms(vt);Fe.setUniforms({uRoughness:1});const Pi={Lighting:Me,Skybox:de,PixelArt:Je,Water:ye,Buoyancy:Fe,TreeWave:Ve,GrassWave:He,planeTer:Ie},ie=new Tt(S),Q=new dt,J=[],se=new At(S),et=new ut(S,H.width,H.height,Te,1,"GBuffer Pass");et.clearColor=[.5,.5,1,1];et.clearDepth=!0;se.addPass(et);const tt=new ut(S,H.width,H.height,Ne,0,"Albedo Pass");tt.clearColor=[0,0,0,1];tt.clearDepth=!0;se.addPass(tt);const je=new Pt(S,H.width,H.height,Me,Pe,"Lighting Pass");je.setInputBuffers(Ne.texture,Te.texture);je.lightDir=new ge(0);se.addPass(je);const it=new Dt(S,H.width,H.height,de,Pe,"Skybox Pass");it.setInputTexture(Te.texture);se.addPass(it);const yt=new Bt(S,H.width,H.height,Je,_e,"PixelArt Pass");yt.setInputBuffers(Pe.texture,Te.texture);se.addPass(yt);const Ae=new kt(S,H.width,H.height,_e,"Wireframe Pass");ae||(Ae.setWireColor(0,1,0),Ae.setOpacity(1),se.addPass(Ae));const me=new _t(S,H.width,H.height,_i);me.setBuffer("Final",_e.texture);me.setBuffer("Pixel",_e.texture);me.setBuffer("Lit",Pe.texture);me.setBuffer("Albedo",Ne.texture);me.setBuffer("Gbuffer",Te.texture);se.addPass(me);function xt(){H.width=window.innerWidth,H.height=window.innerHeight;const o=1,e=Math.floor(H.width*o),t=Math.floor(H.height*o);S.viewport(0,0,e,t),Ne.resize(e,t),Te.resize(e,t),Pe.resize(e,t),_e.resize(e,t),se.resize(e,t);const i=H.width/H.height;Q.setPerspective(.8,i,.1,1e3)}window.addEventListener("resize",xt);xt();const Di=H.width/H.height;Q.setPerspective(.8,Di,.1,1e3);Q.transform.position.set(-39.2,1.8,-47);Q.transform.rotation.set(0,ae?3.24:3.22,0);let ue=new ne(ie,Ie,new xe(S,255,255,1,!0),"Scense");ue.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25);ue.transform.scale.set(1,.4,1);J.push(ue);Ce.load(S,"./Assets/3D/Grass.obj").then(o=>{const e=new ne(ie,He,o,"GrassMain");e.transform.position.set(-220,-5.5,-190),e.transform.scale.set(1,1,1),J.push(e)});const we=new ui(S,ie,Fe,J),be=new Ci(S,ie,gt,J,[],{threshold:.425,materials:{TreeWave:Ve}}),Bi={direction:{x:.207,y:0,z:-.707},speed:0},Y={enabled:!0,count:50,seed:68,bounds:{minX:-(255*Math.sqrt(3)/2),maxX:255*Math.sqrt(3)/2,minZ:-191.25,maxZ:255*1.5/2},yFixed:-6.25};let Le=[],ke=[];function zi(o){let e=o>>>0;return function(){e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function Li(){if(ue){const o=J.indexOf(ue);o>=0&&J.splice(o,1)}ue=new ne(ie,Ie,new xe(S,255,255,1,!0),"Scense"),ue.transform.position.set(-(255*Math.sqrt(3)/2),-11,-191.25),ue.transform.scale.set(1,.4,1),J.push(ue)}Y.enabled&&(we.setSeed(Y.seed),we.spawnMany(Y.count,Y.bounds,Y.yFixed).then(o=>{Le=o,console.log(`Spawned ${o.length} floating objects with seed ${Y.seed}`)}),be.setSeed(Y.seed),be.spawnMany(320,Y.bounds,-11).then(o=>{ke=o,console.log(`Spawned ${o.length} land objects with seed ${Y.seed}`)}));let ki=new xe(S,255,255,1);const nt=new ne(ie,ye,ki,"Water Floor [0,0]");nt.transform.position.set(-(255*Math.sqrt(3)/2),-6.5,-191.25);nt.transform.scale.set(1,1,1);J.push(nt);Promise.all([Ce.load(S,"./Assets/3D/LOD1.obj"),Ce.load(S,"./Assets/3D/LOD2.obj"),Ce.load(S,"./Assets/3D/LOD3.obj")]).then(([o,e,t])=>{const a=ae?1:0,c=ae?-1:3,l=ae?e:o,h=ae?"LOD2":"LOD1",d=new ne(ie,ye,l,`Water Floor [0,0] ${h}`);if(d.transform.position.set(-(255*Math.sqrt(3)/2),-6.5-.5,-191.25),d.transform.scale.set(1,1,1),J.push(d),ae)for(let u=0;u<=5;u++)for(let f=-u;f<=u;f++){if(f===0&&u===0)continue;const x=new ne(ie,ye,t,`Water Floor [${f},${u}] LOD3`);d.transform.add(x.transform),x.transform.setGlobalPosition(f*80,-6.5-.5,u*80),x.transform.scale.set(50,50,50)}else for(let u=-5;u<=5;u++)for(let f=-5;f<=5;f++){if(u===0&&f===0)continue;const x=Math.sqrt(u*u+f*f),w=x<=a?o:x<=c?e:t,b=x<=a?1:x<=c?2:3,p=new ne(ie,ye,w,`Water Floor [${u},${f}] LOD${b}`);d.transform.add(p.transform),p.transform.setGlobalPosition(u*80,-6.5,f*80),p.transform.scale.set(50,50,50)}});const rt=[{x:0,y:0,w:1,h:1,pass:"Final"}];me.setViewports(rt);const Z={gl:S,scene:J,camera:Q,renderer:ie,renderQueue:se,materials:Pi,viewportPass:me,wireframePass:Ae,floatingSpawner:we,landSpawner:be,floatingSpawnConfig:Y,textures:{ship:De}};Z.setViewports=o=>{rt[0].pass=o};Z.spawnFloatingObjects=async o=>{const e=await we.spawnMany(o,Y.bounds,Y.yFixed);return console.log(`Spawned ${e.length} additional floating objects`),e};Z.spawnLandObjects=async o=>{const e=await be.spawnMany(o,Y.bounds,-11);return console.log(`Spawned ${e.length} additional land objects`),e};Z.respawnWithSeed=o=>{const e=J.filter(a=>!a.name||!a.name.includes("[Floating]")&&!a.name.includes("[Land]"));J.length=0,J.push(...e),Le=[],ke=[],we.setSeed(o),be.setSeed(o),Y.seed=o;const t=zi(o),i=32e3,n=(t()-.5)*i,r=(t()-.5)*i;Se.setOffsets(n,r),Li();const s=we.spawnMany(Y.count,Y.bounds,Y.yFixed);return Le=s,ke=be.spawnMany(320,Y.bounds,-11),console.log(`Respawned with seed ${o}: ${s.length} objects`),s};let ve=null;if(!ae){const o=new si(Z);Z.editor=o,ve=$t.attach(se,ie,Z),Z.profiler=ve}window.game=Z;window.floatingSpawner=we;window.landSpawner=be;window.oceanConfig=Bi;window.floatingObjects=Le;window.landObjects=ke;window.floatingSpawnConfig=Y;const wt=new oi(Q,H);Z.cameraController=wt;window.addEventListener("keydown",o=>{const e=o.key.toLowerCase();if(e==="t"&&Ae.toggle(),e==="r"){const t=Math.floor(Math.random()*1e6);typeof Z.respawnWithSeed=="function"&&Z.respawnWithSeed(t);try{if(Z.editor&&Z.editor.windows&&Z.editor.windows.world){const i=Z.editor.windows.world;i&&i.state&&(i.state.seed=t,i.seedController&&typeof i.seedController.updateDisplay=="function"&&i.seedController.updateDisplay())}}catch(i){console.warn("Failed to update WorldWindow seed UI",i)}}});const oe=[.5,.8,.2];let Ge=0,ct="";const st=S.createBuffer();S.bindBuffer(S.UNIFORM_BUFFER,st);S.bufferData(S.UNIFORM_BUFFER,140,S.DYNAMIC_DRAW);S.bindBufferBase(S.UNIFORM_BUFFER,0,st);function bt(o){if(te.update(o),Z.deltaTime=te.deltaTime,wt.update(te.deltaTime),ye.setUniforms({uTime:te.time}),Fe.setUniforms({uTime:te.time}),Ve.setUniforms({uTime:te.time}),He.setUniforms({uTime:te.time}),de.setUniforms({uTime:te.time}),Me.uniforms.uLightDir&&Me.uniforms.uLightDir.value){const t=Me.uniforms.uLightDir.value,i=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);i>.001?(oe[0]=t[0]/i,oe[1]=t[1]/i,oe[2]=t[2]/i):(oe[0]=t[0],oe[1]=t[1],oe[2]=t[2]),je.lightDir=new ge(oe[0],oe[1],oe[2])}Q.updateView(),me.setViewports(rt),Q.updateProjection(),S.bindBuffer(S.UNIFORM_BUFFER,st),S.bufferSubData(S.UNIFORM_BUFFER,0,new Float32Array(Q.projectionMatrix)),S.bufferSubData(S.UNIFORM_BUFFER,64,new Float32Array(Q.viewMatrix)),S.bufferSubData(S.UNIFORM_BUFFER,128,new Float32Array([Q.transform.position.x,Q.transform.position.y,Q.transform.position.z])),de.uniforms.uSunColor&&it.setLight(oe,de.uniforms.uSunColor.value,de.uniforms.uTopColor.value,de.uniforms.uMidColor.value,de.uniforms.uBottomColor.value),se.execute(ie,J,Q),S.flush(),S.finish();const e=document.getElementById("hud");if(e&&(Ge++,Ge>=6)){Ge=0;const i=(te.unscaledDeltaTime>0?Math.round(1/te.unscaledDeltaTime):0).toString().padStart(3,"0");let n="";if(ve&&ve.fpsHistory&&ve.fpsHistory.length>0){let s=0;const a=ve.fpsHistory.length,c=Math.min(a,60);for(let h=a-c;h<a;h++)s+=ve.fpsHistory[h];n=` <br> Avg FPS: ${Math.round(s/c).toString().padStart(3,"0")}`}const r=(te.deltaTime*1e3).toFixed(2).padStart(6,"0");ct=`FPS: ${i}${n}<br>Δ: ${r} ms`,e.innerHTML=ct}requestAnimationFrame(bt)}requestAnimationFrame(bt)});export default Oi();
