export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="w-full bg-black/30 h-20 flex justify-center items-center uppercase tracking-widest text-white/80">   
            &copy; Jonas Risløw Iversen {year}

        </div>
    )
}