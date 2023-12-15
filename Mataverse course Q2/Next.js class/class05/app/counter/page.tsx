// rfc shrt cut to show function 
// event handling using button to perform some actions and event occur 
// this event is called onclick
// event handling server waly component mn nhi kr skty 
// server side randering benifit >>> to increase score seo 
// where user interaction perform like to fill form , submit , to enter data , to onclick perform this component or page >> we cannot access server render 
// jis page mn onclick laga dea usy hm server side rander ni kr skty
// usy hm client side rander krty hain
// to make client side page we use "use client" in start >> then show in browser 
                                                              
export default function Counter() {
    const onclickhandler=()=>{
        alert("clicked")
    }
  return (
    <div>
      <button style={{backgroundColor:"red"}}>Add</button>
    </div>
  )
}
