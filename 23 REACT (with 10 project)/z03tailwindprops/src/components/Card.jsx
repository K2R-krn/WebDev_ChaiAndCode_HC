

import React from 'react'

// function Card(props) {
function Card({userName = "DEFAULT", post = "NOT ASSIGNED YET", location='REMOTE'}) {
    // console.log(props);
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512" />
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Tailwind CSS is the only framework that I've seen scale
                            on large teams. Its easy to customize, adapts to any design,
                            and the build size is tiny.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {/* {props.userName} */}
                            {/* {userName || "DEFAULT"} */}
                            {userName}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}, {location}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card