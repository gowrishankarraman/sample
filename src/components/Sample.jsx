import Menuitem from "./Menuitem"

export default function Sample(){
    const example=[
        {
         title:"first",
         imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBXge-x-JiIgCp2uqSCuhtLHY__lLpPru4dSsXF7K&s",
         id:1,
         size:"small"
        },
        {
            title:"second",
            imageUrl:"https://m.media-amazon.com/images/I/61+r3+JstZL.jpg",
            id:2,
           size:"small"

           }

    ]
    return(
        <div>
            {example.map((da)=>
          <Menuitem {...da} key={da.key}></Menuitem>  )}
        
        </div>
    )

}