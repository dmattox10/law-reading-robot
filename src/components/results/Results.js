import './entry.css'

const Results = (props) => {
    const { articles } = props
    return (

        <section className='summaries'>
            <h1>Summaries</h1>
            {
                articles.map((article) => {
                    <Entry article={article}/>   
                })
            }
        </section>
    )
}