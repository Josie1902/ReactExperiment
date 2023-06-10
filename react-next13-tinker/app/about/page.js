export const metadata = {
    title: 'About',
}

export default function About(){
    // throw new Error("failed to load data")
    return(
        <div>
            <h1 className="text-lg py-2 m-4">About Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut beatae quidem vero ipsum ea ullam, eum eius provident velit! Qui, perferendis. Dignissimos tenetur debitis id veritatis laborum, ipsam minima quia?</p>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2">Button</button>
        </div>
    )
}