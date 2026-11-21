// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any
// @framerIntrinsicWidth 1024
// @framerIntrinsicHeight 515
// Aman Interactive Hero V4.4.1 — eight exact pixel-dialogue assets, q8 verticals fact, q1 quiet, no scroll arrow
import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const WIDTH = 2048
const HEIGHT = 1029
interface Bubble {src:string;x:number;y:number;w:number;h:number}
interface Character {
 id:string;row:string;x:number;y:number;scale:number;headX:number;headY:number;
 fact:string|null;dialogueState:number|null;quietSrc:string|null;layerIndex:number; bubble?:Bubble
}
const CHARACTERS: Character[] = [{"id":"bg8","row":"headless","x":-202.1,"y":-250.53,"scale":0.44988,"headX":50.74,"headY":-93.07,"fact":null,"layerIndex":0,"dialogueState":null,"quietSrc":null},{"id":"bg1","row":"headless","x":51.94,"y":-251.22,"scale":0.450438,"headX":305.09,"headY":-93.56,"fact":null,"layerIndex":1,"dialogueState":null,"quietSrc":null},{"id":"bg2","row":"headless","x":303.58,"y":-250.95,"scale":0.450157,"headX":556.57,"headY":-93.39,"fact":null,"layerIndex":2,"dialogueState":null,"quietSrc":null},{"id":"bg4","row":"headless","x":551.0,"y":-250.98,"scale":0.450512,"headX":804.19,"headY":-93.31,"fact":null,"layerIndex":3,"dialogueState":null,"quietSrc":null},{"id":"bg3","row":"headless","x":798.31,"y":-251.14,"scale":0.45079,"headX":1051.65,"headY":-93.36,"fact":null,"layerIndex":4,"dialogueState":null,"quietSrc":null},{"id":"bg6","row":"headless","x":1042.06,"y":-250.85,"scale":0.450262,"headX":1295.11,"headY":-93.26,"fact":null,"layerIndex":5,"dialogueState":null,"quietSrc":null},{"id":"bg5","row":"headless","x":1328.39,"y":-249.75,"scale":0.449507,"headX":1581.01,"headY":-92.43,"fact":null,"layerIndex":6,"dialogueState":null,"quietSrc":null},{"id":"bg7","row":"headless","x":1492.74,"y":-250.76,"scale":0.450212,"headX":1745.76,"headY":-93.18,"fact":null,"layerIndex":7,"dialogueState":null,"quietSrc":null},{"id":"bg9","row":"headless","x":1745.78,"y":-251.24,"scale":0.450584,"headX":1999.01,"headY":-93.54,"fact":null,"layerIndex":8,"dialogueState":null,"quietSrc":null},{"id":"q17","row":"back","x":-74.32,"y":-58.35,"scale":0.450335,"headX":178.77,"headY":99.27,"fact":null,"layerIndex":9,"visibleSrc":"visible-q17.webp","visibleHover":"visible-blue-q17.webp","dialogueState":null,"quietSrc":"quiet-q17.webp"},{"id":"q7","row":"back","x":167.28,"y":-58.42,"scale":0.450357,"headX":420.39,"headY":99.21,"fact":null,"layerIndex":10,"visibleSrc":"visible-q7.webp","visibleHover":"visible-blue-q7.webp","dialogueState":null,"quietSrc":"quiet-q7.webp"},{"id":"q13","row":"back","x":408.95,"y":-58.32,"scale":0.450161,"headX":661.94,"headY":99.23,"fact":"Aman has built a design system for an E-Commerce brand","layerIndex":11,"visibleSrc":"visible-q13.webp","visibleHover":"visible-blue-q13.webp","dialogueState":3,"quietSrc":null,"bubble":{"src":"bubble-3.webp","x":632,"y":263,"w":644,"h":165}},{"id":"q6","row":"back","x":650.31,"y":-58.47,"scale":0.450455,"headX":903.47,"headY":99.19,"fact":null,"layerIndex":12,"visibleSrc":"visible-q6.webp","visibleHover":"visible-blue-q6.webp","dialogueState":null,"quietSrc":"quiet-q6.webp"},{"id":"q12","row":"back","x":892.14,"y":-58.13,"scale":0.450035,"headX":1145.06,"headY":99.38,"fact":null,"layerIndex":13,"visibleSrc":"visible-q12.webp","visibleHover":"visible-blue-q12.webp","dialogueState":null,"quietSrc":"quiet-q12.webp"},{"id":"q8","row":"back","x":1133.73,"y":-58.37,"scale":0.450239,"headX":1386.76,"headY":99.21,"fact":"Aman has worked in Enterprise SaaS, CRM, LMS, HRMS & E-Commerce verticals","layerIndex":14,"visibleSrc":"visible-q8.webp","visibleHover":"visible-blue-q8.webp","dialogueState":4,"quietSrc":null,"bubble":{"src":"bubble-4.webp","x":654,"y":221,"w":644,"h":165}},{"id":"q1","row":"back","x":1375.12,"y":-58.28,"scale":0.450203,"headX":1628.14,"headY":99.29,"fact":null,"layerIndex":15,"visibleSrc":"visible-q1.webp","visibleHover":"visible-blue-q1.webp","dialogueState":null,"quietSrc":"quiet-q1.webp"},{"id":"q21","row":"back","x":1635.97,"y":-58.41,"scale":0.450321,"headX":1889.05,"headY":99.2,"fact":null,"layerIndex":16,"visibleSrc":"visible-q21.webp","visibleHover":"visible-blue-q21.webp","dialogueState":null,"quietSrc":"quiet-q21.webp"},{"id":"q28","row":"main","x":-243.68,"y":179.2,"scale":0.45047,"headX":9.49,"headY":336.87,"fact":null,"layerIndex":17,"visibleSrc":"visible-q28.webp","visibleHover":"visible-blue-q28.webp","dialogueState":null,"quietSrc":"quiet-q28.webp"},{"id":"q26","row":"main","x":25.82,"y":179.27,"scale":0.450344,"headX":278.91,"headY":336.89,"fact":"Aman holds an B.Des in HCI from IIIT","layerIndex":18,"visibleSrc":"visible-q26.webp","visibleHover":"visible-blue-q26.webp","dialogueState":2,"quietSrc":null,"bubble":{"src":"bubble-2.webp","x":364,"y":247,"w":643,"h":151}},{"id":"q11","row":"main","x":259.94,"y":179.23,"scale":0.450198,"headX":512.95,"headY":336.8,"fact":null,"layerIndex":19,"visibleSrc":"visible-q11.webp","visibleHover":"visible-blue-q11.webp","dialogueState":null,"quietSrc":"quiet-q11.webp"},{"id":"q10","row":"main","x":532.05,"y":179.23,"scale":0.450344,"headX":785.15,"headY":336.85,"fact":"He has built micro-interactions for apps using Rive and After Effects","layerIndex":20,"visibleSrc":"visible-q10.webp","visibleHover":"visible-blue-q10.webp","dialogueState":8,"quietSrc":null,"bubble":{"src":"bubble-8.webp","x":838,"y":477,"w":644,"h":164}},{"id":"Aman007","row":"main","x":785.13,"y":179.46,"scale":0.450255,"headX":1038.17,"headY":337.04,"fact":null,"layerIndex":21,"visibleSrc":"visible-Aman007.webp","visibleHover":"visible-blue-Aman007.webp","dialogueState":null,"quietSrc":null},{"id":"q15","row":"main","x":1038.27,"y":179.23,"scale":0.450371,"headX":1291.37,"headY":336.86,"fact":null,"layerIndex":22,"visibleSrc":"visible-q15.webp","visibleHover":"visible-blue-q15.webp","dialogueState":null,"quietSrc":"quiet-q15.webp"},{"id":"q22","row":"main","x":1291.3,"y":179.37,"scale":0.45034,"headX":1544.39,"headY":336.98,"fact":null,"layerIndex":23,"visibleSrc":"visible-q22.webp","visibleHover":"visible-blue-q22.webp","dialogueState":null,"quietSrc":"quiet-q22.webp"},{"id":"q20","row":"main","x":1544.53,"y":179.47,"scale":0.450235,"headX":1797.56,"headY":337.05,"fact":"Aman has built AI tools using Claude & Antigravity to accelerate UX workflow","layerIndex":24,"visibleSrc":"visible-q20.webp","visibleHover":"visible-blue-q20.webp","dialogueState":7,"quietSrc":null,"bubble":{"src":"bubble-7.webp","x":1092,"y":471,"w":644,"h":169}},{"id":"q9","row":"main","x":1786.43,"y":178.95,"scale":0.450287,"headX":2039.49,"headY":336.55,"fact":null,"layerIndex":25,"visibleSrc":"visible-q9.webp","visibleHover":"visible-blue-q9.webp","dialogueState":null,"quietSrc":"quiet-q9.webp"},{"id":"fl1","row":"front","x":-124.54,"y":496.73,"scale":0.441558,"headX":123.62,"headY":651.27,"fact":null,"layerIndex":26,"visibleSrc":"visible-fl1.webp","visibleHover":"visible-blue-fl1.webp","dialogueState":null,"quietSrc":"quiet-fl1.webp"},{"id":"q14","row":"front","x":127.02,"y":484.4,"scale":0.45013,"headX":379.99,"headY":641.94,"fact":"He has boosted conversion rates by 20% using analytics","layerIndex":27,"visibleSrc":"visible-q14.webp","visibleHover":"visible-blue-q14.webp","dialogueState":5,"quietSrc":null,"bubble":{"src":"bubble-5.webp","x":502,"y":518,"w":643,"h":154}},{"id":"q5","row":"front","x":378.0,"y":484.37,"scale":0.450431,"headX":631.14,"headY":642.02,"fact":null,"layerIndex":28,"visibleSrc":"visible-q5.webp","visibleHover":"visible-blue-q5.webp","dialogueState":null,"quietSrc":"quiet-q5.webp"},{"id":"q25","row":"front","x":629.23,"y":484.24,"scale":0.450461,"headX":882.39,"headY":641.91,"fact":"Aman brings 3+ years of product design","layerIndex":29,"visibleSrc":"visible-q25.webp","visibleHover":"visible-blue-q25.webp","dialogueState":1,"quietSrc":null,"bubble":{"src":"bubble-1.webp","x":929,"y":381,"w":643,"h":150}},{"id":"q3","row":"front","x":880.25,"y":484.5,"scale":0.450343,"headX":1133.34,"headY":642.12,"fact":null,"layerIndex":30,"visibleSrc":"visible-q3.webp","visibleHover":"visible-blue-q3.webp","dialogueState":null,"quietSrc":"quiet-q3.webp"},{"id":"cheerful","row":"front","x":1131.48,"y":484.39,"scale":0.450443,"headX":1384.63,"headY":642.05,"fact":null,"layerIndex":31,"visibleSrc":"visible-cheerful.webp","visibleHover":"visible-blue-cheerful.webp","dialogueState":null,"quietSrc":"quiet-cheerful.webp"},{"id":"q18","row":"front","x":1382.57,"y":484.51,"scale":0.479769,"headX":1652.2,"headY":652.43,"fact":"He redesigned conversion funnels to boost lead efficiency","layerIndex":32,"visibleSrc":"visible-q18.webp","visibleHover":"visible-blue-q18.webp","dialogueState":6,"quietSrc":null,"bubble":{"src":"bubble-6.webp","x":864,"y":496,"w":644,"h":153}},{"id":"q27","row":"front","x":1647.46,"y":484.2,"scale":0.4505,"headX":1900.64,"headY":641.87,"fact":null,"layerIndex":33,"visibleSrc":"visible-q27.webp","visibleHover":"visible-blue-q27.webp","dialogueState":null,"quietSrc":"quiet-q27.webp"}]
const CSS = "\n.amanV4Root{position:relative;isolation:isolate;overflow:hidden;width:100%;height:100%;background:#fff;user-select:none;touch-action:pan-y;outline:0;-webkit-tap-highlight-color:transparent}\n.amanV4Scene{position:absolute;left:50%;top:50%;width:2048px;height:1029px;transform-origin:center;pointer-events:none;background:white}\n.amanV4Base{position:absolute;inset:0;width:2048px;height:1029px;object-fit:fill;will-change:filter,opacity;opacity:0;transition:filter .38s cubic-bezier(.2,.75,.2,1),opacity .26s ease}\n.amanV4Base.isReady{opacity:1}\n.amanV4Base.isAman{filter:blur(9px) saturate(.72) brightness(1.045)}\n.amanV4Wash{position:absolute;inset:0;z-index:1;opacity:0;background:rgba(255,255,255,.09);pointer-events:none;transition:opacity .38s}\n.amanV4Wash.isAman{opacity:1}\n.amanV4Entrances{position:absolute;inset:0;z-index:2;pointer-events:none;transition:opacity .28s ease}\n.amanV4Entrances.isFinished{opacity:0}\n.amanV4Entrance{position:absolute;opacity:0;transform:translateY(30px);transform-origin:center bottom;animation:amanV4RiseIn .65s cubic-bezier(.17,.84,.22,1) forwards}\n.amanV4Entrance img{display:block;width:100%;height:100%;object-fit:fill}\n@keyframes amanV4RiseIn{0%{opacity:0;transform:translateY(30px)}75%{opacity:1}100%{opacity:1;transform:translateY(0)}}\n.amanV4Highlight{position:absolute;z-index:3;pointer-events:none;animation:amanV4HighlightIn .25s cubic-bezier(.22,.8,.22,1) both;will-change:transform,opacity}\n.amanV4Highlight img{display:block;width:100%;height:100%;object-fit:fill}\n@keyframes amanV4HighlightIn{from{opacity:0;transform:translateY(0)}to{opacity:1;transform:translateY(calc(-1 * var(--aman-lift, 2px)))}}\n.amanV4Bubble{position:absolute;z-index:5;pointer-events:none;display:block;object-fit:fill;animation:amanV4BubbleIn .27s cubic-bezier(.18,.85,.24,1) both;filter:drop-shadow(1px 3px 2px #0000000d)}\n@keyframes amanV4BubbleIn{from{opacity:0;transform:translateY(9px)}to{opacity:1;transform:translateY(0)}}\n.amanV4Title{position:absolute;z-index:3;top:30px;left:0;width:100%;font:900 245px/1 Impact,'Arial Black',system-ui,sans-serif;text-align:center;white-space:nowrap;letter-spacing:-.02em;color:#f42027;opacity:0;transform:translateY(14px);transition:opacity .27s,transform .35s cubic-bezier(.18,.85,.22,1);pointer-events:none}\n.amanV4Title.isAman{opacity:1;transform:translateY(0)}\n.amanV4Aman{position:absolute;z-index:4;pointer-events:none;animation:amanV4HighlightIn .28s cubic-bezier(.2,.8,.22,1) both}\n.amanV4Aman img{display:block;width:100%;height:100%;object-fit:fill}\n.amanV4Scroll{position:absolute;z-index:6;bottom:92px;left:50%;transform:translateX(-50%);pointer-events:auto;cursor:pointer;display:flex;align-items:center;gap:15px;white-space:nowrap;background:#171717;color:white;border:2px solid white;border-radius:999px;padding:19px 28px;box-shadow:0 9px 34px #0004;font:700 30px/1.15 Arial,Helvetica,sans-serif;letter-spacing:-.02em;animation:amanV4ScrollIn .33s ease both}\n@keyframes amanV4ScrollIn{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}\n.amanV4Arrow{font-size:40px;color:#fa2731;animation:amanV4ArrowBob 1.6s ease-in-out infinite}\n@keyframes amanV4ArrowBob{0%,100%{transform:translateY(-3px)}50%{transform:translateY(3px)}}\n.amanV4Hint,.amanV4Sound{position:absolute;z-index:10;bottom:16px;white-space:nowrap;border-radius:999px;padding:9px 14px;background:#ffffffeb;color:#171717;border:1px solid #d7d7d7;box-shadow:0 2px 9px #0001;font:700 12px/1.2 Arial,sans-serif}\n.amanV4Hint{left:16px;pointer-events:none;transition:opacity .2s}.amanV4Hint.isHidden{opacity:0}\n.amanV4Sound{right:16px;display:flex;align-items:center;gap:9px;cursor:pointer;pointer-events:auto}\n.amanV4Dot{width:8px;height:8px;border-radius:50%;background:#999}.amanV4Dot.isOn{background:#1f67f1}\n.amanV4Sound:focus-visible,.amanV4Scroll:focus-visible,.amanV4Root:focus-visible{outline:3px solid #1f67f1;outline-offset:3px}\n.amanV4Loader{position:absolute;z-index:30;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#000;pointer-events:auto;transition:opacity .45s cubic-bezier(.2,.8,.2,1),visibility .45s}\n.amanV4Loader.isGone{opacity:0;visibility:hidden;pointer-events:none}\n.amanV4Loader::before{content:none}\n.amanV4LoaderInner{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;height:100%;color:#fff}\n\n\n\n\n\n\n\n@media(max-width:600px){.amanV4Hint,.amanV4Sound{font-size:10px}.amanV4Hint{max-width:53%;white-space:normal}}\n@media(prefers-reduced-motion:reduce){.amanV4Root *,.amanV4Root *::before,.amanV4Root *::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}\n\n\n.amanV4Title{position:absolute;z-index:2;top:-35px;left:109px;width:1830px;height:auto;opacity:0;transform:translateY(13px);transition:opacity .35s ease,transform .48s cubic-bezier(.18,.85,.22,1);pointer-events:none;filter:none;max-width:none;user-select:none}\n.amanV4Title.isAman{opacity:1;transform:translateY(0)}\n.amanV4MainOcclude{position:absolute;z-index:3;left:0;top:180px;width:2048px;height:631px;object-fit:fill;max-width:none;opacity:0;clip-path:inset(0 0 58% 0);filter:blur(9px) saturate(.72) brightness(1.045);transition:opacity .3s ease;pointer-events:none}\n.amanV4MainOcclude.isAman{opacity:1}\n.amanV4Enter{display:block;box-sizing:border-box;width:246px;height:47px;margin:0;padding:15px 23px;background:#fff;color:#000;border:1px solid #fff;border-radius:3px;font:800 15px/1 Arial,Helvetica,sans-serif;letter-spacing:.1em;cursor:pointer;box-shadow:none;white-space:nowrap;transition:background .18s ease,color .18s ease,border-color .18s ease}\n.amanV4Enter:hover{background:#000;color:#fff;border-color:#fff}\n.amanV4Enter:focus-visible{outline:2px solid #fff;outline-offset:4px}\n\n"
const EMBEDDED_ASSETS:Record<string,string> = {}
const AMAN_INDEX = CHARACTERS.findIndex(c=>c.id==="Aman007")
interface Props {
 fit?:"cover"|"contain";assetBaseUrl?:string;enableSound?:boolean;showHint?:boolean;
 showLoader?:boolean;dialogueDelay?:number;hoverLift?:number;soundVolume?:number;
 scrollTarget?:string;style?:React.CSSProperties
}
function assetPos(c:Character):React.CSSProperties {
 return {left:c.x,top:c.y,width:1122*c.scale,height:1402*c.scale}
}
export default function AmanHero(props:Props) {
 const {fit="cover",assetBaseUrl="",enableSound=true,showHint=true,showLoader=true,
 dialogueDelay=125,hoverLift=2,soundVolume=.22,scrollTarget="",style}=props
 const rootRef=React.useRef<HTMLDivElement>(null)
 const stageRef=React.useRef<HTMLDivElement>(null)
 const hitRef=React.useRef<Uint8ClampedArray|null>(null)
 const chosenRef=React.useRef(-1)
 const leaveRef=React.useRef<ReturnType<typeof setTimeout>|null>(null)
 const audioRef=React.useRef<AudioContext|null>(null)
 const hoverSoundRequestRef=React.useRef(0)
 const playingRef=React.useRef(-1)
 const soundRef=React.useRef(enableSound)
 const [soundOn,setSoundOn]=React.useState(enableSound)
 const [scale,setScale]=React.useState(1)
 const [phase,setPhase]=React.useState<0|1|2>(0) // 0 loading, 1 staggered arrival, 2 interactive
 const [progress,setProgress]=React.useState(0)
 const [active,setActive]=React.useState(-1)
 const [bubbleFor,setBubbleFor]=React.useState(-1)
 const [introVisible,setIntroVisible]=React.useState(true)
 const [readyToEnter,setReadyToEnter]=React.useState(false)
 const enterRequestedRef=React.useRef(false)
 const asset=React.useCallback((file:string)=>{
  if(EMBEDDED_ASSETS[file])return EMBEDDED_ASSETS[file]
  const dir=assetBaseUrl.replace(/\/+$/,"")
  return dir?`${dir}/${file}`:""
 },[assetBaseUrl])
 React.useEffect(()=>{soundRef.current=soundOn},[soundOn])
 React.useEffect(()=>{setSoundOn(enableSound);soundRef.current=enableSound},[enableSound])
 React.useEffect(()=>{
  const root=rootRef.current;if(!root)return
  const measure=()=>{const r=root.getBoundingClientRect();setScale((fit==="contain"?Math.min(r.width/WIDTH,r.height/HEIGHT):Math.max(r.width/WIDTH,r.height/HEIGHT))||1)}
  measure()
  const observer=typeof ResizeObserver!=="undefined"?new ResizeObserver(measure):null
  observer?.observe(root);window.addEventListener("resize",measure)
  return ()=>{observer?.disconnect();window.removeEventListener("resize",measure)}
 },[fit])
 // Loading progress is bounded by actual image preloading, with a short minimum time
 // so the loading screen doesn't flicker on a fast connection.
 React.useEffect(()=>{
  let alive=true;const start=Date.now();let timer:ReturnType<typeof setInterval>|null=null
  const list=["scene.webp","hover-map.png","visible-Aman007.webp","aman-title.webp","aman-main-foreground.webp",...CHARACTERS.map(c=>`intro-${c.id}.webp`),
    ...CHARACTERS.filter(c=>c.dialogueState).map(c=>`blue-${c.id}.webp`),
    ...CHARACTERS.filter(c=>c.bubble).map(c=>c.bubble!.src),
    ...CHARACTERS.filter(c=>c.quietSrc).map(c=>c.quietSrc!)]
  let complete=0
  const bump=()=>{complete++;if(alive)setProgress(Math.min(98,Math.round(complete/list.length*98)))}
  const load=(name:string)=>new Promise<void>(resolve=>{
   const im=new Image();im.onload=()=>{bump();resolve()};im.onerror=()=>{bump();resolve()};im.src=asset(name)
  })
  const finish=async()=>{
   if(showLoader) await Promise.all(list.map(load))
   if(!alive)return
   const remaining=showLoader?Math.max(0,1050-(Date.now()-start)):0
   if(remaining)await new Promise(r=>setTimeout(r,remaining))
   if(!alive)return
   setProgress(100);if(showLoader){setReadyToEnter(true);if(enterRequestedRef.current){enterRequestedRef.current=false;setPhase(1)}}else setPhase(1)
  }
  finish()
  return ()=>{alive=false;if(timer)clearInterval(timer)}
 },[asset,showLoader])
 React.useEffect(()=>{
  if(phase!==1)return
  const motion=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  const timer=setTimeout(()=>setPhase(2),motion?120:2150)
  return ()=>clearTimeout(timer)
 },[phase])
 React.useEffect(()=>{
  if(phase!==2)return
  const t=setTimeout(()=>setIntroVisible(false),400)
  return ()=>clearTimeout(t)
 },[phase])
 React.useEffect(()=>{
  const im=new Image();im.crossOrigin="anonymous"
  let alive=true
  im.onload=()=>{
   if(!alive)return
   const cv=document.createElement("canvas");cv.width=WIDTH;cv.height=HEIGHT
   const ctx=cv.getContext("2d",{willReadFrequently:true});if(!ctx)return
   try{ctx.drawImage(im,0,0,WIDTH,HEIGHT);hitRef.current=ctx.getImageData(0,0,WIDTH,HEIGHT).data}
   catch(e){console.warn("AmanHero: CORS required on external hover map",e)}
  };im.src=asset("hover-map.png")
  return ()=>{alive=false;im.onload=null;hitRef.current=null}
 },[asset])
 React.useEffect(()=>{
  if(active<0 || !CHARACTERS[active]?.bubble || phase!==2){setBubbleFor(-1);return}
  const timer=setTimeout(()=>setBubbleFor(active),Math.max(0,dialogueDelay))
  return ()=>clearTimeout(timer)
 },[active,dialogueDelay,phase])
 React.useEffect(()=>()=>{
  if(leaveRef.current)clearTimeout(leaveRef.current)
  if(audioRef.current)try{audioRef.current.close()}catch(_){}
 },[])
 // Browsers may block Web Audio until the first qualifying user gesture.
 // Keep sound enabled by default; unlock on ANY page interaction (not an OFF/ON toggle).
 const unlock=React.useCallback(():Promise<boolean>=>{
  if(!soundRef.current)return Promise.resolve(false)
  try{
   const Ctor=(window as any).AudioContext||(window as any).webkitAudioContext
   if(!Ctor)return Promise.resolve(false)
   if(!audioRef.current)audioRef.current=new Ctor()
   const context=audioRef.current
   if(context.state==="running")return Promise.resolve(true)
   return context.resume().then(()=>context.state==="running").catch(()=>false)
  }catch(_){return Promise.resolve(false)}
 },[])
 React.useEffect(()=>{if(soundOn)void unlock()},[soundOn,unlock])
 React.useEffect(()=>{
  if(!soundOn)return
  const activate=()=>{void unlock()}
  window.addEventListener("pointerdown",activate,true)
  window.addEventListener("keydown",activate,true)
  window.addEventListener("touchstart",activate,true)
  return ()=>{
   window.removeEventListener("pointerdown",activate,true)
   window.removeEventListener("keydown",activate,true)
   window.removeEventListener("touchstart",activate,true)
  }
 },[soundOn,unlock])
 const sound=React.useCallback(()=>{
  const ctx=audioRef.current
  if(!ctx || ctx.state!=="running" || !soundRef.current)return
  const now=ctx.currentTime
  if(now-playingRef.current<.09)return
  playingRef.current=now
  const osc=ctx.createOscillator();const gain=ctx.createGain()
  osc.type="sine"
  osc.frequency.setValueAtTime(490,now)
  osc.frequency.exponentialRampToValueAtTime(630,now+.084)
  const vol=Math.max(.0003,Math.min(.022,soundVolume*.019))
  gain.gain.setValueAtTime(.0001,now)
  gain.gain.linearRampToValueAtTime(vol,now+.016)
  gain.gain.exponentialRampToValueAtTime(.0001,now+.105)
  osc.connect(gain).connect(ctx.destination)
  osc.start(now);osc.stop(now+.11)
 },[soundVolume])
 const choose=React.useCallback((next:number)=>{
  if(phase!==2)return
  if(next>=0&&(!CHARACTERS[next]||CHARACTERS[next].row==="headless"))next=-1
  if(next===chosenRef.current)return
  chosenRef.current=next;setActive(next)
  const request=++hoverSoundRequestRef.current
  if(next>=0&&soundRef.current){
   if(audioRef.current?.state==="running")sound()
   else{
    const started=performance.now()
    void unlock().then(ready=>{
     // Never play a stale sound if a visitor already moved to another character.
     if(ready&&hoverSoundRequestRef.current===request&&chosenRef.current===next&&performance.now()-started<450)sound()
    })
   }
  }
 },[phase,unlock,sound])
 const detect=React.useCallback((X:number,Y:number)=>{
  const p=hitRef.current,stage=stageRef.current
  if(!p||!stage)return -1
  const r=stage.getBoundingClientRect()
  const x=Math.floor((X-r.left)*WIDTH/r.width),y=Math.floor((Y-r.top)*HEIGHT/r.height)
  if(x<0||y<0||x>=WIDTH||y>=HEIGHT)return -1
  const idx=p[(y*WIDTH+x)*4]-1
  return idx>=0&&idx<CHARACTERS.length&&CHARACTERS[idx].row!=="headless"?idx:-1
 },[])
 const move=(e:React.PointerEvent<HTMLDivElement>)=>{
  if(phase!==2||e.pointerType==="touch")return
  if(leaveRef.current)clearTimeout(leaveRef.current)
  const idx=detect(e.clientX,e.clientY)
  if(idx>=0)choose(idx)
  else leaveRef.current=setTimeout(()=>choose(-1),70)
 }
 const leave=()=>{
  if(leaveRef.current)clearTimeout(leaveRef.current)
  leaveRef.current=setTimeout(()=>choose(-1),90)
 }
 const down=(e:React.PointerEvent<HTMLDivElement>)=>{
  unlock()
  if(e.pointerType==="touch"||e.pointerType==="pen")choose(detect(e.clientX,e.clientY))
 }
 const activeIndices=React.useMemo(()=>CHARACTERS.map((c,i)=>c.row==="headless"?-1:i).filter(i=>i>=0),[])
 const key=(e:React.KeyboardEvent<HTMLDivElement>)=>{
  unlock()
  if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
   e.preventDefault();const p=activeIndices.indexOf(chosenRef.current)
   choose(activeIndices[(p+(e.key==="ArrowRight"?1:-1)+activeIndices.length)%activeIndices.length])
  }else if(e.key==="Escape")choose(-1)
  else if(e.key==="Enter"&&chosenRef.current<0)choose(AMAN_INDEX)
 }
 const toggleSound=(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.stopPropagation();soundRef.current=!soundRef.current;setSoundOn(soundRef.current)
  if(soundRef.current)unlock()
 }
 // A legitimate browser click resumes suspended AudioContext synchronously with user activation.
 // No OFF/ON toggle and no silent first hover. The visual scene only enters after this gesture.
 const enterExperience=()=>{
  // Audio unlock must happen synchronously inside this genuine user click.
  void unlock()
  if(readyToEnter){setPhase(1)}
  else enterRequestedRef.current=true // enter automatically when images finish preloading
 }
 const jump=(e:React.MouseEvent<HTMLButtonElement>)=>{
  e.stopPropagation()
  if(scrollTarget)try{const target=document.querySelector(scrollTarget);if(target){target.scrollIntoView({behavior:"smooth"});return}}catch(_){}
  window.scrollBy({top:window.innerHeight,behavior:"smooth"})
 }
 const c=CHARACTERS[active];const isAman=c?.id==="Aman007"
 const bubble=c?.bubble&&bubbleFor===active?c.bubble:null
 return <div className="amanV4Root" ref={rootRef} style={style} tabIndex={0}
  aria-label="Illustrated interactive crowd: explore Aman using hover or keyboard"
  onPointerMove={move} onPointerLeave={leave} onPointerDown={down} onKeyDown={key}>
  <style>{CSS}</style>
  <div ref={stageRef} className="amanV4Scene" style={{transform:`translate(-50%,-50%) scale(${scale})`}}>
   <img src={asset("scene.webp")} className={"amanV4Base"+(phase===2?" isReady":"")+(isAman?" isAman":"")} alt="A large illustrated crowd with Aman in a red hoodie" draggable={false}/>
   {introVisible&&phase>0&&<div className={"amanV4Entrances"+(phase===2?" isFinished":"")} aria-hidden="true">
    {CHARACTERS.map((person,i)=>{
     const order=person.row==="headless"?0:person.row==="back"?1:person.row==="main"?2:3
     const j=i-(order===0?0:order===1?9:order===2?17:26)
     const delay=order*250+j*49
     return <div key={person.id} className="amanV4Entrance" style={{...assetPos(person),animationDelay:`${delay}ms`}}>
      <img src={asset(`intro-${person.id}.webp`)} alt="" draggable={false}/>
     </div>
    })}
   </div>}
   <div className={"amanV4Wash"+(isAman?" isAman":"")}/>
   {phase===2&&c?.dialogueState&&<div key={c.id} className="amanV4Highlight" style={{...assetPos(c),"--aman-lift":`${hoverLift}px`} as React.CSSProperties}>
    <img src={asset(`blue-${c.id}.webp`)} alt="" draggable={false}/>
   </div>}
   {phase===2&&c?.quietSrc&&<div key={c.id} className="amanV4Highlight" style={{...assetPos(c),"--aman-lift":`${hoverLift}px`} as React.CSSProperties}>
    <img src={asset(c.quietSrc)} alt="" draggable={false}/>
   </div>}
   <img className={"amanV4Title"+(isAman?" isAman":"")} src={asset("aman-title.webp")} alt="" aria-hidden="true" draggable={false}/>
   <img className={"amanV4MainOcclude"+(isAman?" isAman":"")} src={asset("aman-main-foreground.webp")} alt="" aria-hidden="true" draggable={false}/>
   {phase===2&&isAman&&<div className="amanV4Aman" style={assetPos(CHARACTERS[AMAN_INDEX])}>
    <img src={asset("visible-Aman007.webp")} alt="Aman" draggable={false}/>
   </div>}
   {phase===2&&bubble&&<img key={c.id+"-bubble"} className="amanV4Bubble" src={asset(bubble.src)}
    alt={c.fact||""} draggable={false} style={{left:bubble.x,top:bubble.y,width:bubble.w,height:bubble.h}}/>}
   {phase===2&&isAman&&<button className="amanV4Scroll" onClick={jump}
    onPointerMove={e=>e.stopPropagation()} onPointerDown={e=>e.stopPropagation()}>
    scroll down to know more about me
   </button>}
  </div>
  {phase===2&&showHint&&<div className={"amanV4Hint"+(active>=0?" isHidden":"")}>Hover a character to explore</div>}
  {phase===2&&<button className="amanV4Sound" type="button" onClick={toggleSound} aria-label={soundOn?"Mute hover sound":"Enable hover sound"}
   onPointerMove={e=>e.stopPropagation()} onPointerDown={e=>e.stopPropagation()}>
   <span className={"amanV4Dot"+(soundOn?" isOn":"")}/>{soundOn?"Sound on":"Sound off"}
  </button>}
  {showLoader&&<div className={"amanV4Loader"+(phase>0?" isGone":"")} aria-hidden={phase!==0}>
   <div className="amanV4LoaderInner">
    <button type="button" className="amanV4Enter" onPointerDown={()=>{void unlock()}} onClick={enterExperience}>ENTER WITH SOUND</button>
   </div>
  </div>}
 </div>
}
addPropertyControls(AmanHero,{
 fit:{type:ControlType.Enum,title:"Image fit",options:["cover","contain"],optionTitles:["Fill / crop","Show all"],defaultValue:"cover"},
 showLoader:{type:ControlType.Boolean,title:"Loading intro",defaultValue:true},
 dialogueDelay:{type:ControlType.Number,title:"Dialogue delay",min:0,max:1500,step:25,defaultValue:125,unit:"ms"},
 hoverLift:{type:ControlType.Number,title:"Hover rise",min:0,max:12,step:.5,defaultValue:2,unit:"px"},
 enableSound:{type:ControlType.Boolean,title:"Sound on",defaultValue:true},
 soundVolume:{type:ControlType.Number,title:"Sound volume",min:0,max:1,step:.05,defaultValue:.22},
 showHint:{type:ControlType.Boolean,title:"Hover hint",defaultValue:true},
 scrollTarget:{type:ControlType.String,title:"Scroll target",placeholder:"#about"},
 assetBaseUrl:{type:ControlType.String,title:"Assets URL",placeholder:"https://example.com/assets"}
})
