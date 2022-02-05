    import  {useState, useEffect} from "react";
    import BlogCard from "./blogcard";

      
function Box() {
    // let [story, setStory] = useState([
    //     {
    //         "Id": 1,
    //         "Title": "to provide or to reject the blind are welcome option to find",
    //         "Body": "And it takes  nsuscipit follow accepted lightly with  nreprehenderit discomfort may be the entire  nnostrum of the things that happens is that they are extremely"
    //       },
    //       {
    //         "Id": 2,
    //         "Title": "that was",
    //         "Body": "is existed at the time of life  'Blessed are the pain of her pains, nor condemn nseq they are nothing  nfugiat or not at all the blandishments of pleasure, and the discomfort may rejecting some  nWho, not being due, we may be able to open the man who did not, but there is no"
    //       },
    //       {
    //         "Id": 3,
    //         "Title": "those who reject the troubles they exercise that is either",
    //         "Body": "and on the right, but nvoluptatis blinded to the election or nvoluptatis pains or denouncing any resultant  nmolestiae on his work and wants to hate or"
    //       },
    //       {
    //         "Id": 4,
    //         "Title": "it will be blinded",
    //         "Body": "rejects any and often experience pleasure  mānsit lot of things to take to provide fault  nquir here the opportunity to do the right bound pain  nFor the pleasure of the outdoor"
    //       }
    //     ]);
  let [story, setStory] = useState(null);
  let [ispending , setIspending] = useState(true);

    useEffect(
        () => { 
        fetchReq();
      },[]
    )

    async function fetchReq(){
      // let response = await fetch('data/db.json');
      // let data = await response.json();
      // console.log(data);
   fetch('http://localhost:3004/data')
   .then(res=> { return res.json()})
   .then(data => {
     
    setIspending(false);
     setStory(data);
   })
   .catch((error)=>{
     console.log(error);
     
   })
      
      
  }
 

     let handleDelete = (n)=>{
          let newStory = story.filter(s => s.Id !== n );
          console.log(newStory);
          setStory(newStory);

          
      }
    return(
        <div className="col-10 mx-auto"> 
        {ispending && <p> loading... </p>}
          {story && <BlogCard blog = {story} handleDelete = {handleDelete} />}
         
        </div>
    )
}

export default Box;