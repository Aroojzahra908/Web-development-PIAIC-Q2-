// show specific value from list of students 
import { listtype } from "../types/commonTypes";
export default function About() {
  const list: listtype[] = [
    {
      name: "arooj",
      title: "CEO",
      intro: "something",
      facebookurl: "fb.com",
    },
    {
      name: "ali",
      title: "CEO",
      intro: "something",
      facebookurl: "fb.com",
    },

    {
      name: "hassan",
      title: "CEO",
      intro: "something",
      facebookurl: "fb.com",
    },

    {
      name: "zoya",
      title: "CEO",
      intro: "something",
      facebookurl: "fb.com",
    },
  ];

  return (
    <div>
      <h1>list of characters </h1>
method 3  show title and intro from list of data 
      {list.map((item, index) => {
       return <div>
<h1>Name:{item.name}</h1>
 <h1>intro:{item.intro}</h1>
 <h1>title:{item.title}</h1>
         </div>;
     })}





{/* Method 2   to access multiple data then add fragments */}
{/* {list.map((item, index) => {
        return (
        <div>
            {index%2===0?
          //  use <>  fragment bcz one parent for map loop
             <>      
<h1>Name:{item.name}</h1>
<h1>intro:{item.intro}</h1>
<h1>title:{item.title}</h1>
</>

:""}
        </div>
        )
      })} */}


{/* method 1 */}

{/* const list=["arooj", "ali", "hassan"] */}
      {/* its not good bcz repitition of code  */}
      {/* <h2>1 - {list[0]}</h2>
            <h2>2 - {list[1]}</h2>
            <h2>3 - {list[2]}</h2> */}

      {/* now by using map loop */}
      {/* {list.map((item, index)=>{
return(
    <h2>{index +1 }- {item}</h2>
)

})} */}
    </div>
  );
}
