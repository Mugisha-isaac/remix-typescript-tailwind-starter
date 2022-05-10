

export default function Header(){
    return(
        // <div className="header">
        //   <div>Overview</div>
        //   <div>search</div>
        //   <div>mode</div>
        //   <div>notifications</div>
        //   <div>user profile</div>
        // </div>
        <nav className="nav">
           <ul>
             <li>Overview</li>
             <li>Search</li>
             <li>Mode</li>
             <ul>Notifications</ul>
             <ul>User profile</ul>
           </ul>
        </nav>
    )
}