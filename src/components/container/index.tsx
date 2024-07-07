import { ReactNode } from "react";

export function Container({children}: {children: ReactNode}){
    return(
        <section className="max-w-screen-xl mx-auto px-3">
            {children}
        </section>
    )
}