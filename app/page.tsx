import Nav from "./navbar"

export default function Page(){
  return(
    <div  className="border font-Poppins border-slate-700 p-4 rounded-lg flex flex-col mx-16 my-20 justify-center text-gray-950 dark:text-white">
      <h1 className="text-4xl py-4">Hello, my name is Marcos :)</h1>
      <h2 className="text-xl leading-9">
        I'm creating this blog as a way to document my projects
        and things i study. <br></br>
        I'm a brazilian software developer currently thriving to get a Master in Computer Science 
        with focus on AI applied to medical images. <br />
        I have a Computer Science bachelor degree from Universidade Federal do Maranhão - UFMA. 
      </h2>
    </div>

    
  )

}
