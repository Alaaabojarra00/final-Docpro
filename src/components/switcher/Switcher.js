import React from 'react'
import './switcher.css'
import {useState , useEffect} from 'react'
function Switcher() {
const [click , setClick] = useState(false);

useEffect(() => {
 const listener=(event)=>{
	setClick(!click);
	document.body.classList.add('boxed');	
	
 }
 const listener2=()=>{
	setClick(!click);
	document.body.classList.remove('boxed');
 }
 const listener3=()=>{
	setClick(!click);
	document.body.classList.add('rtl');	 
	console.log('aaa')
 }

 const listener4=()=>{
	setClick(!click);
	document.body.classList.remove('rtl');	 
	console.log("ltr")
 }
document.querySelector('#boxed').addEventListener('click', listener);
document.querySelector('#full').addEventListener('click', listener2);
document.querySelector('#rtl').addEventListener('click', listener3);
document.querySelector('#normal').addEventListener('click', listener4);
	return () => {
		document.querySelector('#boxed').removeEventListener('click',listener)
		document.querySelector('#full').removeEventListener('click',listener2)
		document.querySelector('#rtl').removeEventListener('click',listener3)
		document.querySelector('#normal').removeEventListener('click',listener4)
	}
	// eslint-disable-next-line 
}, [])

    return (
<div className={`switcher ${click && 'active'} `}>
	<div className={click ? "platte" : null} onClick={() => { setClick(!click);}}> <i className="fa fa-cog"></i></div>
	<div className="layout-outer ">
		<div className="layout-option"><a href="##" id="boxed"> Boxed</a></div>
		<div className="layout-option"><a href="##" id="full" > Full</a></div>
		<i className="clearfix"></i>   
	</div>
	
	<div className="layout2 layout-outer ">
		<div className="layout-option"><a href="##" id="normal">LTR</a></div>
		<div className="layout-option"><a href="##" id="rtl">RTL</a></div>
		<i className="clearfix aa"></i>   
	</div>
	

	<div className="heading-panel"> Primary Color</div>
	<div className="colors-outer primary-color">   
	
		<div className="box" title="default" id="default">
		default		</div>
		<div className="box" title="color 2" id="color2">
		color 2		</div>
		<div className="box" title="color 3" id="color3">
		color 3		</div>
		<div className="box" title="color 4" id="color4">
		color 4		</div>
		<div className="box" title="color 5" id="color5">
		color 5		</div>
		<div className="box" title="color 6" id="color6">
		color 6		</div>
		<div className="box" title="color 7" id="color7">
		color 7		</div>
		<div className="box" title="color 8" id="color8">
		color 8		</div>
		<div className="box" title="color 9" id="color9">
		color 9		</div>
		<div className="box" title="color 10" id="color10">
		color 10		</div>
		<div className="box" title="color 11" id="color11">
		color 11		</div>
		<div className="box" title="color 12" id="color12">
		color 12		</div>
	</div>
</div>
    )
}

export default Switcher
